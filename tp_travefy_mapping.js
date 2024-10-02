// run `node travefy_mapping.js` in the terminal
// Parse the JSON string to a JavaScript object
const inputData = {
  trip: JSON.stringify(require("./data/tour_plan_data.json")),
};

// COPY TO ZAPIER FROM THIS LINE
// Parse the JSON string to a JavaScript object
const tourPlanData = JSON.parse(inputData.trip);

const decodeHTMLEntities = (text) => {
  const entityMap = {
    "&nbsp;": " ",
    "&amp;": "&",
    "&quot;": '"',
    "&#39;": "'",
    "&lt;": "<",
    "&gt;": ">",
    "&eacute;": "é",
    "&ouml;": "ö",
    "&auml;": "ä",
    "&uuml;": "ü",
    "&Auml;": "Ä",
    "&Uuml;": "Ü",
    "&Ouml;": "Ö",
    "&ccedil;": "ç",
    "&ntilde;": "ñ",
    // Add more accent and special character entities as needed
  };

  return text.replace(/&[^;]+;/g, (entity) => entityMap[entity] || entity);
};

const extractAndEscapeDivContent = (description) => {
  if (!description) {
    return null; // If no input string, return null
  }

  const regex = /<div[^>]*>([\s\S]*?)<\/div>/; // Regex to capture content inside <div> tags
  const match = regex.exec(description);

  if (match) {
    const content = match[1].trim(); // Trim whitespace and newline characters

    // Return null if content is empty (only whitespace or newlines)
    if (content === "") {
      return null;
    }

    // Escape HTML content inside the <div>
    const escapeHTML = (str) => {
      return str
        .replace(/&/g, "&amp;")
        .replace(/</g, "&lt;")
        .replace(/>/g, "&gt;")
        .replace(/"/g, "&quot;")
        .replace(/'/g, "&#039;");
    };

    return escapeHTML(content); // Return the escaped content inside the <div>
  }

  return null; // Return null if no match is found
};

const replaceContentAfterLastUl = (description, newContent) => {
  if (!description) return null; // Early return if no description

  // Match everything after the last </ul> tag and replace it with the new content
  return description.replace(
    /<\/ul>(?![\s\S]*<\/ul>)[\s\S]*/,
    `<br> <div style=\"background-color: rgba(255, 254, 145, 1)\">${newContent}</div>`
  );
};

const chunkArray = (array, chunkSize) => {
  const chunks = [];
  let chunkIndex = 0; // Initialize a counter for chunk labels
  for (let i = 0; i < array.length; i += chunkSize) {
    chunks.push(array.slice(i, i + chunkSize));
    chunkIndex++; // Increment the chunk counter
  }
  return chunks;
};

// Map TourPlan codes to Travefy product types
const tourPlanToTravefyMap = {
  FL: 0,
  RC: 1,
  RA: 2,
  CR: 3,
  FR: 3,
  HV: 3,
  BU: 4,
  CH: 4,
  PT: 4,
  ST: 4,
  AC: 6,
  AD: 9,
  CP: 9,
  MG: 9,
  OA: 9,
  OT: 9,
  PK: 9,
  QH: 9,
  SS: 9,
  TD: 9,
  TO: 9,
  ME: 11,
  IN: 12,
  TX: 12,
  ZA: 12,
};

// Utility function: Convert time (HH:MM) to minutes
const timeToMinutes = (time) => {
  if (!time) return null;
  const [hours, minutes] = time.split(":").map(Number);
  return hours * 60 + minutes;
};

// Utility function: Format date to "day month year" format
const formatDate = (date) => {
  if (!date) return "";
  return new Date(date).toLocaleDateString("en-GB", {
    day: "numeric",
    month: "long",
    year: "numeric",
  });
};

// Function to map TourPlan code to Travefy product type
const mapTourPlanCodeToProductType = (code) => tourPlanToTravefyMap[code] || 9;

const createListItem = (
  label1,
  value1,
  label2,
  value2,
  backgroundColor,
  note
) => {
  if (note ? label1 && value1 : label1) {
    return `
    <li style=\"background-color: ${backgroundColor || "transparent"}\">
      <strong>${label1}:</strong> ${value1 || ""} 
      ${label2 && value2 ? `<strong>${label2}</strong> ${value2 || ""}` : ""}
    </li>`;
  }
  return "";
};

// Utility function: Create an HTML inclusions list
const createInclusionsList = (inclusions) => {
  if (!inclusions || !inclusions.some((item) => item !== null)) return "";
  return `
    <li><strong>Inclusions:</strong>
    <ul>${inclusions
      .filter(Boolean)
      .map((item) => `<li> ${item} </li>`)
      .join("")}</ul>
    </li>`;
};

const generateOriginalNoteIdeas = (tourPlanEvent) => {
  const { Description } = tourPlanEvent;

  const formatSection = (title, content) => {
    return content ? `${title}: ${content}\n` : "";
  };

  const infoNote = formatSection(
    "Quote Description",
    `${Description.InfoNote || ""} ${
      Description.ShortItineraryNote || ""
    }`.trim()
  );
  const travellerNote = formatSection(
    "Traveller Description",
    `${Description.TravelInformation || ""} ${
      Description.ItineraryNote || ""
    }`.trim()
  );

  const notes = [
    {
      Name: "Original Tour Plan Description",
      Description: `${infoNote}${travellerNote}`.trim(), // trim to remove extra newlines/whitespace
      ImageUrl:
        "https://d6ham14n5a27z.cloudfront.net/img/c_w400,h300,mFocusCover/i_hcf4e3495974c54c9ad2c1c80b5d5cfb9594b8e99.jpg",
    },
  ];

  return notes;
};

// Function to generate common description for TourPlan events
const generateCommonDescription = (tourPlanEvent) => {
  const { Description } = tourPlanEvent;
  return `
        ${Description.InfoNote ? `<p>${Description.InfoNote}</p><br/>` : ""}
      ${
        Description.ShortItineraryNote
          ? `<p>${Description.ShortItineraryNote}</p><br/>`
          : ""
      }
      ${
        Description.TravelInformation
          ? `<p>${Description.TravelInformation}</p><br/>`
          : ""
      }
      ${
        Description.ItineraryNote
          ? `<p>${Description.ItineraryNote}</p><br/>`
          : ""
      }
  `;
};

const mapTripEventsByType = (mappedEvent, tourPlanEvent) => {
  switch (mappedEvent.EventType) {
    case 0: // Flight
      mappedEvent.Description = `
        <ul>
          ${createListItem(
            "Departure Date",
            formatDate(tourPlanEvent.StartDate),
            "at",
            tourPlanEvent.StartTime
          )}
          ${createListItem("Departure Location", tourPlanEvent.StartLocation)}
          ${createListItem(
            "Arrival Date",
            formatDate(tourPlanEvent.EndDate),
            "at",
            tourPlanEvent.EndTime
          )}
          ${createListItem("Arrival Location", tourPlanEvent.EndLocation)}
          ${createListItem(
            "Note",
            tourPlanEvent.Description.ServiceNote,
            null,
            null,
            "rgba(255, 145, 255, 1)",
            true
          )}
          ${createInclusionsList(tourPlanEvent.Inclusions)}
        </ul>
        <br/><div>${mappedEvent.Description}</div>
      `;
      break;

    case 1: // Car Rental
      mappedEvent.Description = `
        <ul>
          ${createListItem(
            "Pick-up Date",
            formatDate(tourPlanEvent.StartDate),
            "at",
            tourPlanEvent.StartTime
          )}
          ${createListItem("Pick-up Location", tourPlanEvent.StartLocation)}
          ${createListItem(
            "Drop-off Date",
            formatDate(tourPlanEvent.EndDate),
            "at",
            tourPlanEvent.EndTime
          )}
          ${createListItem("Drop-off Location", tourPlanEvent.EndLocation)}
          ${createListItem(
            "Rental Duration",
            `${tourPlanEvent.SCUqty} ${tourPlanEvent.SCU}`
          )}
          ${createListItem("Vehicle Type", tourPlanEvent.VehicleType)}
          ${createListItem(
            "Note",
            tourPlanEvent.Description.ServiceNote,
            null,
            null,
            "rgba(255, 145, 255, 1)",
            true
          )}
          ${createInclusionsList(tourPlanEvent.Inclusions)}
        </ul>
        <br/><div>${mappedEvent.Description}</div>
      `;
      break;

    case 2: // Train
      mappedEvent.Description = `
        <ul>
          ${createListItem(
            "Departure Date",
            formatDate(tourPlanEvent.StartDate),
            "at",
            tourPlanEvent.StartTime
          )}
          ${createListItem("Departure Location", tourPlanEvent.StartLocation)}
          ${createListItem(
            "Arrival Date",
            formatDate(tourPlanEvent.EndDate),
            "at",
            tourPlanEvent.EndTime
          )}
          ${createListItem("Arrival Location", tourPlanEvent.EndLocation)}
          ${createListItem(
            "Note",
            tourPlanEvent.Description.ServiceNote,
            null,
            null,
            "rgba(255, 145, 255, 1)",
            true
          )}
          ${createInclusionsList(tourPlanEvent.Inclusions)}
        </ul>
        <br/><div>${mappedEvent.Description}</div>
      `;
      break;

    case 3: // Cruise
      mappedEvent.Name =
        tourPlanEvent.SegmentProviderName + " " + tourPlanEvent.Name;
      mappedEvent.ReservationDescription = tourPlanEvent.RoomConfigs.map(
        (room) => room.RoomType
      ).join(", ");
      mappedEvent.Description = `
        <ul>
          ${createListItem(
            "Departure Date",
            formatDate(tourPlanEvent.StartDate),
            "at",
            tourPlanEvent.StartTime
          )}
          ${createListItem("Departure Location", tourPlanEvent.StartLocation)}
          ${createListItem(
            "Arrival Date",
            formatDate(tourPlanEvent.EndDate),
            "at",
            tourPlanEvent.EndTime
          )}
          ${createListItem("Arrival Location", tourPlanEvent.EndLocation)}
          ${createListItem("Vessel", tourPlanEvent.Vessel)}
          ${createListItem("Cabin Type", tourPlanEvent.CabinType)}
          ${createListItem(
            "Note",
            tourPlanEvent.Description.ServiceNote,
            null,
            null,
            "rgba(255, 145, 255, 1)",
            true
          )}
          ${createInclusionsList(tourPlanEvent.Inclusions)}
        </ul>
        <br/><div>${mappedEvent.Description}</div>
      `;
      break;

    case 4: // Transportation -> Other (Bus, Shuttle, etc.)
      mappedEvent.Description = `
        <ul>
          ${createListItem("Phone", tourPlanEvent.Phone || "Not Provided")}
          ${createListItem(
            "Pick-up Date",
            formatDate(tourPlanEvent.StartDate),
            "at",
            tourPlanEvent.StartTime
          )}
          ${createListItem("Pick-up Location", tourPlanEvent.StartLocation)}
          ${createListItem(
            "Drop-off Date",
            formatDate(tourPlanEvent.EndDate),
            "at",
            tourPlanEvent.EndTime
          )}
          ${createListItem("Drop-off Location", tourPlanEvent.EndLocation)}
          ${createListItem(
            "Note",
            tourPlanEvent.Description.ServiceNote,
            null,
            null,
            "rgba(255, 145, 255, 1)",
            true
          )}
          ${createInclusionsList(tourPlanEvent.Inclusions)}
        </ul>
        <br/><div>${mappedEvent.Description}</div>
      `;
      break;

    case 6: // Hotel
      mappedEvent.Name =
        tourPlanEvent.SegmentProviderName + " " + tourPlanEvent.Name;
      mappedEvent.ReservationDescription = tourPlanEvent.RoomConfigs.map(
        (room) => room.RoomType
      ).join(", ");
      mappedEvent.SegmentProviderName = "";
      mappedEvent.Description = `
        <ul>
          ${createListItem(
            "Room Types",
            tourPlanEvent.RoomConfigs.map((room) => room.RoomType).join(", ")
          )}
          ${createListItem("Phone", tourPlanEvent.Phone)}
          ${createListItem(
            "Check-in Date",
            formatDate(tourPlanEvent.StartDate),
            "at",
            tourPlanEvent.StartTime
          )}
          ${createListItem(
            "Check-out Date",
            formatDate(tourPlanEvent.EndDate),
            "at",
            tourPlanEvent.EndTime
          )}
          ${createListItem("Location", tourPlanEvent.Address)}
          ${createListItem(
            "Note",
            tourPlanEvent.Description.ServiceNote,
            null,
            null,
            "rgba(255, 145, 255, 1)",
            true
          )}
          ${createInclusionsList(tourPlanEvent.Inclusions)}
        </ul>
        <br/><div>${mappedEvent.Description}</div>
      `;
      break;

    case 9: // Activity
      mappedEvent.Description = `
        <ul>
          ${createListItem("Phone", tourPlanEvent.Phone)}
          ${createListItem(
            "Start Date",
            formatDate(tourPlanEvent.StartDate),
            "at",
            tourPlanEvent.StartTime
          )}
          ${createListItem("Start Location", tourPlanEvent.StartLocation)}
          ${createListItem(
            "End Date",
            formatDate(tourPlanEvent.EndDate),
            "at",
            tourPlanEvent.EndTime
          )}
          ${createListItem("End Location", tourPlanEvent.EndLocation)}
          ${createListItem(
            "Note",
            tourPlanEvent.Description.ServiceNote,
            null,
            null,
            "rgba(255, 145, 255, 1)",
            true
          )}
          ${createInclusionsList(tourPlanEvent.Inclusions)}
        </ul>
        <br/><div>${mappedEvent.Description}</div>
      `;
      break;

    default:
      // Additional types can be expanded here
      break;
  }

  return mappedEvent;
};

// Function to map a single trip event
const mapTripEvent = (tourPlanEvent) => {
  const mappedEvent = {
    IsActive: true,
    Name: tourPlanEvent.Name,
    Description: generateCommonDescription(tourPlanEvent),
    SegmentProviderName: tourPlanEvent.SegmentProviderName,
    SegmentIdentifier: `${tourPlanEvent.TourplanServiceStatus || "unknown"} ${
      tourPlanEvent.SegmentIdentifier || ""
    }`,
    EventType: mapTourPlanCodeToProductType(tourPlanEvent.EventType),
    StartTimeInMinutes: timeToMinutes(tourPlanEvent.StartTime),
    DurationInMinutes: tourPlanEvent.SCUqty * 1440,
    PartnerIdentifier: tourPlanEvent.PartnerIdentifier,
    BookingProviderName: "50DN " + tourPlanEvent.PartnerIdentifier,
    TripIdeas: generateOriginalNoteIdeas(tourPlanEvent),
  };
  return mapTripEventsByType(mappedEvent, tourPlanEvent);
};

// Function to map each trip day and its events
const mapDay = (day, tourPlanEvents) => ({
  Date: day,
  IsActive: true,
  TripEvents: tourPlanEvents
    .filter((event) => event.Date === day)
    .map(mapTripEvent),
});

// Generate trip days and map events
const tripDays = [...new Set(tourPlanData.TripDays)].map((day) =>
  mapDay(day, tourPlanData.TripEvents)
);

// Function to prepend additional information sections
const prependInfoSections = () => {
  const travellerDetails = tourPlanData.Travellers.map(
    (traveller) => `
    <p><strong><span>${traveller.Title || ""} ${
      traveller.FullName || ""
    }:&nbsp;</span></strong></p>
    <p><span>Dietary Requirements: ${
      traveller.DietaryRequirements || "None Recorded"
    }</span></p>
    <p><span>Medical Requirements: ${
      traveller.MedicalConditions || "None Recorded"
    }</span></p>
  `
  ).join("");

  return [
    {
      Title: "Itinerary Information",
      IsActive: true,
      TripEvents: [
        {
          IsActive: true,
          Name: "Itinerary Prepared For ",
          Description: `
            ${travellerDetails}
            <p><span><strong>Booking #:</strong> ${tourPlanData.Ref}</span></p>
            <p><span><strong>Consultant:</strong> ${
              tourPlanData.TourplanConsultant || ""
            }</span></p>
            ${
              tourPlanData.Consultant
                ? `<p><span><strong>Agent:</strong> ${tourPlanData.Consultant}</span></p>`
                : ""
            }
            <p><span><strong>E-mail:</strong> ${
              tourPlanData.SalesLocation === "AU"
                ? "info@fiftydegreesnorth.com"
                : "nordic@fiftydegreesnorth.com"
            }</span></p>
          `,
          EventType: 12,
          IsEndingEvent: false,
          IsArrivalSetter: false,
        },
        {
          Name: "Emergency Contacts",
          Description:
            "<p><br></p><p><br></p><p><strong><em>Emergency contacts – Norway: +47 21 04 01 01 (voice only)</em></strong></p><p><em>Please note, emails are not monitored outside of business hours.&nbsp;</em></p><p><em>In an <strong>urgent</strong> matter, please call the number above.</em></p><p>In the itinerary below you will also have important direct contact numbers for our guides, transfers and hotels. <strong>Please only use these to notify the service providers if you are running late or you cannot find your guide/driver.</strong> You will not be able to make any changes to your dates/timings by contacting the service providers directly. Please contact our Sales Teams for changes and we will do our best to assist.</p>",
          EventType: 12,
        },
        {
          Name: "All our tour prices include the following:",
          Description:
            "<p>- Itineraries designed by Nordic Destination Specialists</p><p>-&nbsp;24/7 Emergency Support</p><p>- All government taxes and fees</p>",
          EventType: 12,
        },
        {
          Name: "Practical Details:  Emergency Contacts",
          Description:
            "<p><strong>Review</strong></p><p>Have a wonderful trip! Please share your best moments with our travelling community via Facebook / Instagram. And after you have returned home safely, we would appreciate it if you took some time to review our service on (Facebook / Google). Your feedback is important to us.</p><p>&nbsp;</p><p><strong>Your travel documents:</strong></p><p>If you have any questions regarding the documents, please contact the Destination Specialist who booked the tour for you – she/he will be happy to go through the travel documents with you.</p><p><strong>Before Travel:</strong></p><ul><li>Please ensure you have a working international phone plan for emergencies.&nbsp;</li><li>Make sure we have your flight information, dietary restrictions, or medical requirements.</li><li>Please feel free to access our Practical Destination Info, including packing lists and city guides.</li><li>Kindly visit our FAQ page for further tips.</li></ul><p>&nbsp;</p><p><strong>Who to contact while travelling:</strong></p><ul><li>Call the local emergency number: 112 in a life-threatening emergency.&nbsp;</li><li>Call our 24/7 number +47 21 04 0101 (voice only) for urgent assistance with your itinerary (flight delays, rescheduling services).&nbsp;</li><li>Contact the hotel's reception for assistance with your hotel room or booking activities.&nbsp;</li><li>Email our sales team for any non-urgent matters (only monitored during local office hours).</li></ul><p>&nbsp;</p><p><strong>Note on Vouchers:</strong></p><p>You only need a voucher if you have been given a voucher with your travel documents. We recommend printing this just in case and presenting it before the tour starts.</p><p>&nbsp;</p><p><strong>Terms &amp; Conditions:</strong></p><p>All arrangements are subject to our booking terms &amp; conditions, which can be found on:</p><p>www.fiftydegreesnorth.com/booking-conditions</p><p>&nbsp;</p><p><strong>Visa &amp; Documentation Responsibility:</strong></p><p>It is your responsibility to ensure that you have the appropriate documentation, including visas. We are happy to assist you in determining visa requirements wherever possible. For details see:</p><p>www.fiftydegreesnorth.com/visas&nbsp;</p><p>&nbsp;</p><p><strong>Travel Safe:&nbsp;</strong></p><p>Travel Insurance is strongly recommended. Please ensure that you hold an adequate travel insurance policy. For more information on safe travel, please visit: www.fiftydegreesnorth.com/travel-safe&nbsp;</p><p>&nbsp;</p><p><strong>Vaccinations:</strong></p><p>It is your responsibility to have appropriate vaccinations for your travel destination. Please contact your nearest vaccination clinic or your family physician for advice.&nbsp;</p>",
          EventType: 12,
        },
      ],
      IsSupplemental: true,
    },
  ];
};

// Function to map travellers to trip users
const mapTravellersToTripUsers = (travellers) => {
  return travellers.map((traveller, i) => {
    const otherTravellers = travellers.filter((t, index) => index !== i);

    // Decode FullName to remove any HTML entities
    let rawName = traveller.FullName
      ? decodeHTMLEntities(traveller.FullName)
      : null;

    // Ensure unique name if missing or not unique
    let name = rawName || "Traveller " + (i + 1);
    if (
      !rawName ||
      otherTravellers.some(
        (t) =>
          t.FullName &&
          decodeHTMLEntities(t.FullName).trim().toLowerCase() ===
            name.trim().toLowerCase()
      )
    ) {
      let baseName = name;
      let uniqueName = baseName;
      let nameCounter = 1;
      while (
        otherTravellers.some(
          (t) =>
            t.FullName &&
            decodeHTMLEntities(t.FullName).trim().toLowerCase() ===
              uniqueName.trim().toLowerCase()
        )
      ) {
        uniqueName = `${baseName} (${nameCounter})`;
        nameCounter++;
      }
      name = uniqueName;
    }

    // Generate mock email if missing or not unique
    const normalizedEmail = traveller.Email
      ? traveller.Email.trim().toLowerCase()
      : null;
    let email = traveller.Email;
    if (
      !email ||
      otherTravellers.some(
        (t) => t.Email && t.Email.trim().toLowerCase() === normalizedEmail
      )
    ) {
      const baseMockEmail =
        name.trim().replace(/[^a-zA-Z0-9]/g, "") || `traveller${i + 1}`;
      email =
        baseMockEmail +
        Math.floor(1000 + Math.random() * 9000) +
        "@" +
        Math.floor(1000 + Math.random() * 9000) +
        ".com";
    }

    return {
      title: traveller.Title || "",
      email: email,
      fullName: name,
      role: "4",
    };
  });
};

const getLibraryEvents = async () => {
  const url = "https://api.travefy.com/api/v1/library/events";

  const myHeaders = {
    "X-USER-TOKEN": "74c40c6b6d1b4afc8da395b49b9270fe",
    "X-API-PUBLIC-KEY": "edcef4e472e04d0fa656ff2de2d6f676",
  };

  const requestOptions = {
    method: "GET",
    headers: myHeaders,
  };

  try {
    const response = await fetch(url, requestOptions);
    const result = await response.json(); // Parse JSON response

    return result; // Return the result of events
  } catch (error) {
    throw new Error(error); // Handle any errors by throwing them
  }
};

const replaceTripEventContentWithLibraryContent = (
  tripData, // Initial itinerary data
  libraryItems
) => {
  if (!tripData || !libraryItems) return tripData; // Return tripData if libraryEvents are missing

  tripData.TripDays.forEach((tripDay) => {
    tripDay.TripEvents.forEach((event) => {
      // Find the matching event in libraryEvents by SegmentIdentifier
      const matchingEvent = libraryItems.find(
        (e) => e.PartnerIdentifier === event.PartnerIdentifier
      );
      if (matchingEvent) {
        event.Description = replaceContentAfterLastUl(
          event.Description,
          matchingEvent.Description
        );
        event.PartnerIdentifier = matchingEvent.PartnerIdentifier;
        event.Images = matchingEvent.Images;
        event.TripIdeas.Name = 'Replaced With Library Content - ' + event.TripIdeas.Name;
      }
    });
  });

  return tripData;
};

const getTripEventContentToRewriteAsChunkedGeminiRequests = (libraryEvents, travefyTrip) => {
  const eventContentToRewrite = travefyTrip.TripDays.flatMap((day) => {
    return day.TripEvents.map((event) => {
      const name = event.Name;
      const partnerIdentifier = event.PartnerIdentifier;
      const description = extractAndEscapeDivContent(event.Description);

      // Only return an object if both partnerIdentifier and description are valid
      if (
        partnerIdentifier &&
        description &&
        name &&
        !libraryEvents.some(
          (libEvent) => libEvent.PartnerIdentifier === partnerIdentifier
        )
      ) {
        return {
          Name: name,
          PartnerIdentifier: partnerIdentifier,
          Description: description,
        };
      }
      // Return null if any value is missing
      return null;
    }).filter((item) => item !== null); // Filter out null values
  });

  const chunks = chunkArray(eventContentToRewrite, 10);
  const chunkedGeminiRequests = chunks.map((chunk) => {
    const prompt = `Rewrite the Description field of the following supplier notes by completing these tasks:Step 1: Summarize the content Use a friendly and approachable tone that's warm and welcoming. Keep the language clear and informative—avoid technical jargon. Maintain an engaging, enthusiastic attitude that instills positivity and reassures the reader with supportive language. The summary should be concise, focused, and written in the third-person perspective without including any promotional content. Limit the description to under 150 words and omit any headings also Reserve any content that would better serve the traveller as a list (like locations, days, phone numbers, itineraries) until step 2. Step 2: Create a page break <br> then Generate an bullet-point list of key information for the end of the description, (include locations, days, phone numbers, itineraries broken down into individual list items). Structure each bullet point in a html list like this: <ul> <li> <strong>Label: </strong>Value </li> </ul> Make sure all items are properly enclosed in a UL. Complete all steps without altering the Partner Identifier field.  List of notes as JSONData:`;
    const requestBody = {
      contents: [
        {
          parts: [{ text: prompt + JSON.stringify(chunk) }],
        },
      ],
      generationConfig: {
        response_mime_type: "application/json",
        response_schema: {
          type: "ARRAY",
          items: {
            type: "OBJECT",
            properties: {
              Name: { type: "STRING" },
              Description: { type: "STRING" },
              PartnerIdentifier: { type: "STRING" },
            },
            required: ["Name", "Description", "PartnerIdentifier"],
          },
        },
      },
    };
    return requestBody;
  });

  return chunkedGeminiRequests;
};

// Prepare final output for Zapier
const travefyTrip = {
  Name: decodeHTMLEntities(tourPlanData.Name),
  TripCoverPhotoUrl:
    "https://images.ctfassets.net/6xuvngqqn06x/su9J6FvsrImEQsEcuyeAq/55a290674f9cac9b979cf03600a268c3/Aurora_Borealis-01.jpg?w=1680&h=800&fit=fill&q=80&fm=webp",
  Active: true,
  IsChatDisabled: true,
  IsPdfEnabled: true,
  IsAppEnabled: true,
  Status: "Itinerary",
  IsArchived: false,
  Currency: tourPlanData.Currency,
  TripDays: [...prependInfoSections(), ...tripDays],
  TripUsers: mapTravellersToTripUsers(tourPlanData.Travellers),
};

const libraryEvents = await getLibraryEvents();

const travefyTripWithLibraryContent = replaceTripEventContentWithLibraryContent(
  travefyTrip,
  libraryEvents
);

const chunkedGeminiRequests = getTripEventContentToRewriteAsChunkedGeminiRequests(
  libraryEvents,
  travefyTripWithLibraryContent
);

// Export result as a JSON string for Zapier
output = {
  travefyTrip: JSON.stringify(travefyTripWithLibraryContent),
  tripUsers: JSON.stringify({ tripUsers: travefyTrip.TripUsers }),
  chunkedGeminiRequests:JSON.stringify(chunkedGeminiRequests),
  numberOfChunks: chunkedGeminiRequests.length,
};