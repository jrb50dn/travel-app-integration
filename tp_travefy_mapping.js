// run `node travefy_mapping.js` in the terminal
// Parse the JSON string to a JavaScript object
const inputData = { trip: JSON.stringify(require("./data/tour_plan_data.json")) };

// COPY TO ZAPIER FROM THIS LINE
// Parse the JSON string to a JavaScript object
const tourPlanData = JSON.parse(inputData.trip);

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
    return content ? `${title}: ${content}\n` : '';
  };

  const infoNote = formatSection('Quote Description', `${Description.InfoNote || ''} ${Description.ShortItineraryNote || ''}`.trim());
  const travellerNote = formatSection('Traveller Description', `${Description.TravelInformation || ''} ${Description.ItineraryNote || ''}`.trim());

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

const mapTripEventDescription = (mappedEvent, tourPlanEvent) => {
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
    TripIdeas: generateOriginalNoteIdeas(tourPlanEvent),
  };
  return mapTripEventDescription(mappedEvent, tourPlanEvent);
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
      ],
      IsSupplemental: true,
    },
  ];
};

// Function to map travellers to trip users
const mapTravellersToTripUsers = (travellers) => {
  const seenEmails = new Set();
  return travellers
    .sort((a, b) => (a.Email && !b.Email ? -1 : b.Email && !a.Email ? 1 : 0))
    .map((traveller, index) => {
      let email = traveller.Email;
      const fullName =
        traveller.FullName ||
        `Pax-${index + 1}-${Date.now()}`.replace(/\s+/g, "");
      if (!email || seenEmails.has(email)) {
        email = `${fullName}@50dn.com`;
      }
      seenEmails.add(email);
      return {
        title: traveller.Title || "",
        email,
        fullName: traveller.FullName?.replace("&nbsp;", " ") || "No Name",
        role: "4",
      };
    });
};

// Prepare final output for Zapier
const travefyTrip = {
  Name: tourPlanData.Name.replace("&amp;", "").replace("&nbsp;", " "),
  TripCoverPhotoUrl:
    "https://images.ctfassets.net/6xuvngqqn06x/su9J6FvsrImEQsEcuyeAq/55a290674f9cac9b979cf03600a268c3/Aurora_Borealis-01.jpg?w=1680&h=800&fit=fill&q=80&fm=webp",
  Active: true,
  IsChatDisabled: false,
  IsPdfEnabled: true,
  IsAppEnabled: true,
  Status: "Itinerary",
  IsArchived: false,
  Currency: tourPlanData.Currency,
  TripDays: [...prependInfoSections(), ...tripDays],
  TripUsers: mapTravellersToTripUsers(tourPlanData.Travellers),
};

// Export result as a JSON string for Zapier
output = {
  travefyTrip: JSON.stringify(travefyTrip),
  tripUsers: JSON.stringify({ tripUsers: travefyTrip.TripUsers }),
};