(function () {
  const createTabs = () => {
    const tabs = document.querySelectorAll(".sidebar .header button");
    const panes = document.querySelectorAll(".sidebar .panes li");

    // Scroll to the selected pane
    const scrollToPane = (index) => {
      const pane = panes[index];
      pane.scrollIntoView({ behavior: "smooth" });
    };

    // Set the active tab button
    const setActiveTab = (tabs, index) => {
      tabs.forEach((tab, i) => {
        tab.classList.toggle("active", i === index);
      });
    };

    console.log(tabs, panes); // This should now log the expected elements

    // Add click event listeners to each tab button
    tabs.forEach((tab, index) => {
      tab.addEventListener("click", () => {
        scrollToPane(index);
        setActiveTab(tabs, index);
      });
    });
  };

  const createTasks = () => {
    const myHeaders = new Headers();
    myHeaders.append("X-USER-TOKEN", "74c40c6b6d1b4afc8da395b49b9270fe");
    myHeaders.append("X-API-PUBLIC-KEY", "edcef4e472e04d0fa656ff2de2d6f676");

    const requestOptions = {
      method: "GET",
      headers: myHeaders,
      redirect: "follow",
    };

    fetch(
      "https://api.travefy.com/api/v1-20190212/trips/6915778",
      requestOptions
    )
      .then((response) => console.log(response.json()))
      .then((result) => console.log(result))
      .catch((error) => console.error(error));
  };
  const injectHtmlFromFile = (filePath, id) => {
    fetch(chrome.runtime.getURL(filePath))
      .then((response) => {
        if (!response.ok) {
          throw new Error(
            `Failed to fetch ${filePath}: ${response.statusText}`
          );
        }
        return response.text();
      })
      .then((html) => {
        // Create a new div element
        const wrapper = document.createElement("div");
        wrapper.id = id;
        wrapper.classList.add("extension");

        // Set the inner HTML of the div to the fetched HTML
        wrapper.innerHTML = html;

        // Append the new div to the body of the current page
        document.body.appendChild(wrapper);
        createTabs();
        getTasks();
      })
      .catch((error) => console.error("Error fetching the HTML:", error));
  };

  const completeTask = (task) => {
    fetch("https://travefy.com/rest-api/tasks/408436", {
      headers: {
        accept: "application/json, text/javascript, */*; q=0.01",
        "accept-language": "en-AU,en-GB;q=0.9,en;q=0.8,en-US;q=0.7",
        authorization:
          "Bearer eyJraWQiOiJoTDU3MkNXSGYxRDRjaDljcFZzeE5uSjNlV0Joand2R2tuN042TTF0U1wvWT0iLCJhbGciOiJSUzI1NiJ9.eyJzdWIiOiJhOTc4NjdhNC02ZmM3LTQ1N2EtOWE1NS1lNjYxODI1ZDA1NWUiLCJkZXZpY2Vfa2V5IjoidXMtZWFzdC0xX2EzMzA2OWQ1LWRkMzUtNGQxZS04NzIzLTZiZjJkZWI0MjU0MCIsImlzcyI6Imh0dHBzOlwvXC9jb2duaXRvLWlkcC51cy1lYXN0LTEuYW1hem9uYXdzLmNvbVwvdXMtZWFzdC0xX2pwNm5sQnVobSIsImNsaWVudF9pZCI6Ijc3dTg1cm40YXAyZmtvdGNoYnRzdHNrNTkzIiwib3JpZ2luX2p0aSI6ImVkZGMyMWQxLTNhZDktNGQzNC1iOTdmLTEzNzdkM2YzMTYyMSIsImV2ZW50X2lkIjoiOWQ3ZGRhZTEtNjk4MS00ZWYxLTlmOTItMjkwN2Y1NTM1MmFlIiwidG9rZW5fdXNlIjoiYWNjZXNzIiwic2NvcGUiOiJhd3MuY29nbml0by5zaWduaW4udXNlci5hZG1pbiIsImF1dGhfdGltZSI6MTcyODM1NDA5OCwiZXhwIjoxNzI4MzY5NDczLCJpYXQiOjE3MjgzNjU4NzMsImp0aSI6IjdmOWI4M2U3LTgwOTEtNDgxMy04MDZmLTJmZjVkMzI4YWRjZiIsInVzZXJuYW1lIjoiYTk3ODY3YTQtNmZjNy00NTdhLTlhNTUtZTY2MTgyNWQwNTVlIn0.WzsfPIEEKujvGotnIn5EwYBgvqF5taksSSVl6UeJ7h2hNKDqr136Aoe0HfYBhYr9erxzdVN0YC2BtyOU_7VPhKo2rOFOdaYSnYfUrdNuNMNepTvQDKqSgWgG9YM90PqiYxfj5VU5yBJKdtbX6muJvgvPaB6p3ECaXZ8fTMObs23ffZwPeKQkedabtLkyfIJrl_7yK6R0N8PZP54POAy02jWMpIBNtLmhl95Zmb3MxwtKGe8EpPCtgCKnhu4_ZfCRuUDr63MZ5F0jDNVULLzFS0hX5eYdpRr95FPzMBhEH_nY_c8aLgGeeaZa7GEdx_A3dc7Zwq34qE56hKhiD5y4YA",
        "content-type": "application/json; charset=UTF-8",
        priority: "u=1, i",
        "sec-ch-ua":
          '"Microsoft Edge";v="129", "Not=A?Brand";v="8", "Chromium";v="129"',
        "sec-ch-ua-mobile": "?0",
        "sec-ch-ua-platform": '"macOS"',
        "sec-fetch-dest": "empty",
        "sec-fetch-mode": "cors",
        "sec-fetch-site": "same-origin",
        timezoneoffsetinminutes: "660",
        "x-connection-id-token": "null",
        "x-requested-with": "XMLHttpRequest",
      },
      referrer: "https://travefy.com/",
      referrerPolicy: "origin",
      body: task,
      method: "PUT",
      mode: "cors",
      credentials: "include",
    })
      .then((response) => response.json())
      .then((data) => setTimeout(getTasks(), 2000));
  };

  const getTasks = () => {
    const taskList = document.querySelector(".tasks ul");
    taskList.innerHTML = "";
    fetch(
      "https://travefy.com/rest-api/taskSearchResults?associatedItemId=6915778&associatedItemType=tripReportcompletionFilters%5B%5D=&dueDateFilters=&isAscending=true&isAssignedToMe=false&skip=0&sortOrder=1&take=10",
      {
        headers: {
          accept: "application/json, text/javascript, */*; q=0.01",
          "accept-language": "en-AU,en-GB;q=0.9,en;q=0.8,en-US;q=0.7",
          authorization:
            "Bearer eyJraWQiOiJoTDU3MkNXSGYxRDRjaDljcFZzeE5uSjNlV0Joand2R2tuN042TTF0U1wvWT0iLCJhbGciOiJSUzI1NiJ9.eyJzdWIiOiJhOTc4NjdhNC02ZmM3LTQ1N2EtOWE1NS1lNjYxODI1ZDA1NWUiLCJkZXZpY2Vfa2V5IjoidXMtZWFzdC0xX2EzMzA2OWQ1LWRkMzUtNGQxZS04NzIzLTZiZjJkZWI0MjU0MCIsImlzcyI6Imh0dHBzOlwvXC9jb2duaXRvLWlkcC51cy1lYXN0LTEuYW1hem9uYXdzLmNvbVwvdXMtZWFzdC0xX2pwNm5sQnVobSIsImNsaWVudF9pZCI6Ijc3dTg1cm40YXAyZmtvdGNoYnRzdHNrNTkzIiwib3JpZ2luX2p0aSI6ImVkZGMyMWQxLTNhZDktNGQzNC1iOTdmLTEzNzdkM2YzMTYyMSIsImV2ZW50X2lkIjoiOWQ3ZGRhZTEtNjk4MS00ZWYxLTlmOTItMjkwN2Y1NTM1MmFlIiwidG9rZW5fdXNlIjoiYWNjZXNzIiwic2NvcGUiOiJhd3MuY29nbml0by5zaWduaW4udXNlci5hZG1pbiIsImF1dGhfdGltZSI6MTcyODM1NDA5OCwiZXhwIjoxNzI4MzY5NDczLCJpYXQiOjE3MjgzNjU4NzMsImp0aSI6IjdmOWI4M2U3LTgwOTEtNDgxMy04MDZmLTJmZjVkMzI4YWRjZiIsInVzZXJuYW1lIjoiYTk3ODY3YTQtNmZjNy00NTdhLTlhNTUtZTY2MTgyNWQwNTVlIn0.WzsfPIEEKujvGotnIn5EwYBgvqF5taksSSVl6UeJ7h2hNKDqr136Aoe0HfYBhYr9erxzdVN0YC2BtyOU_7VPhKo2rOFOdaYSnYfUrdNuNMNepTvQDKqSgWgG9YM90PqiYxfj5VU5yBJKdtbX6muJvgvPaB6p3ECaXZ8fTMObs23ffZwPeKQkedabtLkyfIJrl_7yK6R0N8PZP54POAy02jWMpIBNtLmhl95Zmb3MxwtKGe8EpPCtgCKnhu4_ZfCRuUDr63MZ5F0jDNVULLzFS0hX5eYdpRr95FPzMBhEH_nY_c8aLgGeeaZa7GEdx_A3dc7Zwq34qE56hKhiD5y4YA",
          priority: "u=1, i",
          "sec-ch-ua":
            '"Microsoft Edge";v="129", "Not=A?Brand";v="8", "Chromium";v="129"',
          "sec-ch-ua-mobile": "?0",
          "sec-ch-ua-platform": '"macOS"',
          "sec-fetch-dest": "empty",
          "sec-fetch-mode": "cors",
          "sec-fetch-site": "same-origin",
          timezoneoffsetinminutes: "660",
          "x-connection-id-token": "null",
          "x-requested-with": "XMLHttpRequest",
        },
        referrer: "https://travefy.com/",
        referrerPolicy: "origin",
        body: null,
        method: "GET",
        mode: "cors",
        credentials: "include",
      }
    )
      .then((response) => response.json())
      .then((data) => {
        data.tasks.forEach((task) => {
          console.log(task);
          const listItem = document.createElement("li");
          const checkbox = document.createElement("input");

          checkbox.type = "checkbox";
          checkbox.checked = task.isComplete === true;
          checkbox.id = task.id;
          checkbox.setAttribute("data-task", JSON.stringify(task));
          checkbox.addEventListener("change", (event) => {
            const task = JSON.parse(event.target.getAttribute("data-task"));
            task.isComplete = event.target.checked;
            completeTask(JSON.stringify({ task: { ...task } }));
          });

          // Create a label with the task title
          const label = document.createElement("label");
          label.textContent = task.title;

          // Append the checkbox and label to the list item
          listItem.appendChild(checkbox);
          listItem.appendChild(label);

          // Append the list item to the task list
          taskList.appendChild(listItem);
        });
      });
  };


  injectHtmlFromFile("travefy.html", "travefy-extension");
})();
