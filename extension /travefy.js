// Retrieve the access token from localStorage
const retrieveAccessToken = () => {
  for (let i = 0; i < localStorage.length; i++) {
    const key = localStorage.key(i);
    if (key.startsWith("CognitoIdentityServiceProvider.") && key.endsWith(".accessToken")) {
      const accessToken = localStorage.getItem(key);
      return accessToken;
    }
  }
  console.error("Access Token not found.");
  return null;
};

// Extract the trip number from the URL
const getTripNumberFromUrl = () => {
  const urlPattern = "https://travefy.com/b/trip/";
  const currentUrl = window.location.href;
  if (currentUrl.startsWith(urlPattern)) {
    const tripNumber = currentUrl.split(urlPattern)[1]?.split("/")[0];
    console.log("Trip Number:", tripNumber);
    return tripNumber;
  }
  console.log("URL does not match the expected pattern.");
  return null;
};

// Get the user ID with accountType = 2
const getUserIdWithAccountType2 = (data) => {
  const user = data?.users?.find(user => user.accountType === 2);
  if (user) {
    return user.id;
  }
  console.error("No user with account type 2 found.");
  return null;
};

// Create an iframe for the trip summary and inject custom styles
const createTripIframe = (tripId) => {
  if (!tripId) {
    console.error("Trip ID is required.");
    return;
  }

  const iframe = document.createElement("iframe");
  iframe.src = `https://travefy.com/a/trips/summary/${tripId}`;
  iframe.width = "100%";
  iframe.allowFullscreen = true;

  iframe.onload = () => {
    try {
      const iframeDoc = iframe.contentWindow.document;
      setTimeout(() => {
        const tripSummaryContent = iframeDoc.querySelector("._trip-summary-content_19cjdh");
        if (tripSummaryContent) {
          const listItems = tripSummaryContent.querySelectorAll("li");
          if (listItems.length >= 2) {
            const secondListItemButton = listItems[1].querySelector("button");
            if (secondListItemButton) {
              secondListItemButton.click();
              console.log("Clicked the button in the second list item.");

              setTimeout(() => {
                const innerIframe = document.querySelector('.ex-tasks iframe');
                const innerIframeDoc = innerIframe.contentWindow.document;
                const style = innerIframeDoc.createElement("style");
                const css = `
                  ._details_19cjdh { border: none !important; }
                  ._detail-header_dxh9r5 { display: none !important; }
                  #intercom-container { display: none; }
                `;
                style.appendChild(innerIframeDoc.createTextNode(css));
                innerIframeDoc.head.appendChild(style);
              }, 500);
            } else {
              console.error("Button not found inside the second list item.");
            }
          } else {
            console.error("There are not enough list items.");
          }
        } else {
          console.error("Element with class ._trip-summary-content_19cjdh not found.");
        }
      }, 1000);
    } catch (error) {
      console.error("Error accessing iframe content:", error);
    }
  };

  document.querySelector('.ex-tasks').appendChild(iframe);
};

// Helper function for fetch requests with consistent headers
const fetchWithHeaders = (url, method = "GET", body = null) => {
  return fetch(url, {
    headers: {
      accept: "application/json, text/javascript, */*; q=0.01",
      authorization: `Bearer ${accessToken}`,
      "content-type": "application/json; charset=UTF-8",
      priority: "u=1, i",
      "x-trip-token": tripNumber,
    },
    referrer: "https://travefy.com/",
    referrerPolicy: "origin",
    body: body ? JSON.stringify(body) : null,
    method,
    mode: "cors",
    credentials: "include",
  }).then((response) => {
    if (!response.ok) {
      throw new Error(`Request failed: ${response.statusText}`);
    }
    return response.json();
  });
};

// Create booking tasks if they don't already exist
const createBookingTasks = (tripNumber, tasks) => {
  fetchWithHeaders(`https://travefy.com/rest-api/trips/${tripNumber}`)
    .then((data) => {
      const userId = getUserIdWithAccountType2(data);
      if (!userId) return;

      // Fetch trip days and get event IDs
      fetchWithHeaders("https://travefy.com/rest-api/tripDays")
        .then((daysData) => {
          const eventIds = daysData.tripDays.flatMap(trip => trip.tripEventIds);
          const queryString = eventIds.map(id => `ids%5B%5D=${encodeURIComponent(id)}`).join("&");

          // Fetch trip events
          return fetchWithHeaders(`https://travefy.com/rest-api/tripEvents?${queryString}`);
        })
        .then((eventsData) => {
          console.log("Trip Events:", eventsData.tripEvents, tasks);

          // Create tasks for events that don't have tasks yet
          eventsData.tripEvents.forEach((event) => {
            if (!tasks.some(task => task.title.includes(event.id))) {
              const taskWrapper = {
                task: {
                  title: `${event.name} (${event.id})`,
                  description: null,
                  dueDate: null,
                  dueTimeInMinutes: null,
                  isComplete: false,
                  isActive: false,
                  relativeOffsetDurationInDays: null,
                  computedScheduleDescriptor: null,
                  hasReminder: false,
                  taskType: null,
                  hadError: false,
                  assignedToUserId: userId,
                  associatedItemId: tripNumber,
                  associatedItemType: "tripReport",
                  taskOptions: null,
                },
              };

              // Create task with a POST request
              fetchWithHeaders("https://travefy.com/rest-api/tasks", "POST", taskWrapper);
            } else {
              console.log("Task already exists for event:", event.id);
            }
          });

          // Create the trip iframe
          createTripIframe(tripNumber);
        })
        .catch((error) => {
          console.error("Error completing booking task:", error);
        });
    })
    .catch((error) => {
      console.error("Error fetching trip data:", error);
    });
};

// Fetch booking tasks
const getBookingTasks = async (bookingId) => {
  const taskWrapper = document.querySelector(".ex-tasks");
  if (!taskWrapper) {
    console.error("Task wrapper element not found.");
    return;
  }

  taskWrapper.querySelector('iframe')?.remove();

  try {
    const response = await fetch(
      `https://travefy.com/rest-api/taskSearchResults?associatedItemId=${bookingId}&associatedItemType=tripReport&completionFilters%5B%5D=&dueDateFilters=&isAscending=true&isAssignedToMe=false&skip=0&sortOrder=1&take=100`,
      {
        headers: {
          authorization: `Bearer ${accessToken}`,
        },
        referrer: "https://travefy.com/",
        referrerPolicy: "origin",
        method: "GET",
        mode: "cors",
        credentials: "include",
      }
    );

    const data = await response.json();
    return data.tasks || [];
  } catch (error) {
    console.error("Error fetching tasks:", error);
  }
};

// Initialization
const accessToken = retrieveAccessToken();
const tripNumber = getTripNumberFromUrl();

const init = async () => {
  if (tripNumber) {
    console.log("Getting booking tasks for trip:", tripNumber);
    const tasks = await getBookingTasks(tripNumber);
    createBookingTasks(tripNumber, tasks);
  }
};

document.addEventListener("extensionInit", init);


/*

    sendMessageToServiceWorker(
      { type: "travefy", message: "Create Tasks From Services" },
      (response) => {
        console.log("Response from service worker:", response);
      }
    );
 */
