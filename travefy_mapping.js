// run `node travefy_mapping.js` in the terminal
// Parse the JSON string to a JavaScript object
const inputData = { trip: JSON.stringify(require("./tour_plan_data.json")) };

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

// Function to convert time (HH:MM) to minutes
const timeToMinutes = (time) => {
  if (!time) return null;
  const [hours, minutes] = time.split(":").map(Number);
  return hours * 60 + minutes;
};

// Function to format date
const formatDate = (date) => {
  if (!date) return "";
  const dateObject = new Date(date);
  return dateObject.toLocaleDateString("en-GB", {
    day: "numeric",
    month: "long",
    year: "numeric",
  });
};

// Function to map TourPlan code to product type number
const mapTourPlanCodeToProductType = (code) => tourPlanToTravefyMap[code] || 9;

// Helper function to create HTML list from inclusions
const createInclusionsList = (inclusions) =>
  inclusions && inclusions.some((item) => item !== null)
    ? `<li><strong>Inclusions:</strong>
       <ul>${inclusions.map((item) => (item ? `<li>${item}</li>` : "")).join("")}</ul>
     </li>`
    : "";

// Function to generate event description based on common fields
const generateCommonDescription = (event) => `
  ${createInclusionsList(event.Inclusions)}
  ${event.Description.ShortItineraryNote ? `<p>${event.Description.ShortItineraryNote}</p>` : ""}
  ${event.Description.ItineraryNote ? `<p>${event.Description.ItineraryNote}</p>` : ""}
  ${event.Description.InfoNote ? `<p>${event.Description.InfoNote}</p>` : ""}
  ${event.Description.TravelInformation ? `<p>${event.Description.TravelInformation}</p>` : ""}
  ${event.Description.ServiceNote ? `<p>${event.Description.ServiceNote}</p>` : ""}
  ${event.Description.ServiceRemarks ? `<p>${event.Description.ServiceRemarks}</p>` : ""}
  ${event.Description.OptionContent ? `<p style="background-color: rgba(255, 254, 145, 1)">${event.Description.OptionContent}</p>` : ""}
`;

const mapTravellersToTripUsers = (travellers) => travellers.map(traveller => ({
    title: traveller.Title,
    email: traveller.Email,
    fullName: traveller.FullName,
    role: "4"
  }));

// Function to map each trip event to Travefy format
const mapTripEvent = (event) => {
  let mappedEvent = {
    IsActive: true,
    Name: event.Name,
    Description: generateCommonDescription(event),
    SegmentProviderName: event.SegmentProviderName,
    SegmentIdentifier: `${event.TourplanServiceStatus} ${event.SegmentIdentifier}`,
    EventType: mapTourPlanCodeToProductType(event.EventType),
    StartTimeInMinutes: timeToMinutes(event.puTime),
    DurationInMinutes: event.SCUqty * 1440, // 1440 minutes = 1 day
  };

  // Switch case to handle different event types
  switch (mappedEvent.EventType) {
    case 0: // Flight
      mappedEvent.Description = `
        <ul>
            <li><strong>Departure Date:</strong> ${formatDate(event.Pickup_Date)} at ${event.puTime || ""}</li>
            <li><strong>Departure Location:</strong> ${event.puPlace || ""}</li>
            <li><strong>Arrival Date:</strong> ${formatDate(event.Dropoff_Date)} at ${event.doTime || ""}</li>
            <li><strong>Arrival Location:</strong> ${event.doPlace || ""}</li>
            ${mappedEvent.Description}
        </ul>`;
      break;

    case 1: // Car Rental
      mappedEvent.Description = `
        <ul>
            <li><strong>Pick-up Date:</strong> ${formatDate(event.Pickup_Date)} at ${event.puTime || ""}</li>
            <li><strong>Pick-up Location:</strong> ${event.puPlace || ""}</li>
            <li><strong>Drop-off Date:</strong> ${formatDate(event.Dropoff_Date)} at ${event.doTime || ""}</li>
            <li><strong>Drop-off Location:</strong> ${event.doPlace || ""}</li>
            <li><strong>Rental Duration:</strong> !!missing need another Tag</li>
            <li><strong>Vehicle Type:</strong> !!missing need another Tag</li>
            ${mappedEvent.Description}
        </ul>`;
      break;

    case 2: // Train
      mappedEvent.Description = `
        <ul>
            <li><strong>Departure Date:</strong> ${formatDate(event.Pickup_Date)} at ${event.puTime || ""}</li>
            <li><strong>Departure Location:</strong> ${event.puPlace || ""}</li>
            <li><strong>Arrival Date:</strong> ${formatDate(event.Dropoff_Date)} at ${event.doTime || ""}</li>
            <li><strong>Arrival Location:</strong> ${event.doPlace || ""}</li>
            ${mappedEvent.Description}
        </ul>`;
      break;

    case 3: // Cruise
      mappedEvent.Description = `
        <ul>
            <li><strong>Departure Date:</strong> ${formatDate(event.Pickup_Date)} at ${event.puTime || ""}</li>
            <li><strong>Departure Location:</strong> ${event.puPlace || ""}</li>
            <li><strong>Arrival Date:</strong> ${formatDate(event.Dropoff_Date)} at ${event.doTime || ""}</li>
            <li><strong>Arrival Location:</strong> ${event.doPlace || ""}</li>
            <li><strong>Vessel:</strong> !!get Vessel</li>
            <li><strong>Cabin Type:</strong> !!get Cabin</li>
            <li><strong>Cabin Number:</strong> !!get CabinNO</li>
            ${mappedEvent.Description}
        </ul>`;
      break;

    case 4: // Transportation -> Other (Bus, Shuttle, etc.)
      mappedEvent.Description = `
        <ul>
            <li><strong>Phone:</strong> ${event.phone || ""}</li>
            <li><strong>Pick-up Date:</strong> ${formatDate(event.Pickup_Date)} at ${event.puTime || ""}</li>
            <li><strong>Pick-up Location:</strong> ${event.puPlace || ""}</li>
            <li><strong>Drop-off Date:</strong> ${formatDate(event.Dropoff_Date)} at ${event.doTime || ""}</li>
            <li><strong>Drop-off Location:</strong> ${event.doPlace || ""}</li>
            ${mappedEvent.Description}
        </ul>`;
      break;

    case 6: // Hotel
      mappedEvent.Description = `
        <ul>
            <li><strong>Phone:</strong> ${event.phone || ""}</li>
            <li><strong>Check-in Date:</strong> ${formatDate(event.Pickup_Date)} at ${event.puTime || ""}</li>
            <li><strong>Check-out Date:</strong> ${formatDate(event.Dropoff_Date)} at ${event.doTime || ""}</li>
            <li><strong>Location:</strong> ${event.Address || ""}</li>
            ${mappedEvent.Description}
        </ul>`;
      break;

    case 9: // Activity
      mappedEvent.Description = `
        <ul>
            <li><strong>Phone:</strong> ${event.phone || ""}</li>
            <li><strong>Start Date:</strong> ${formatDate(event.Pickup_Date)} at ${event.puTime || ""}</li>
            <li><strong>Start Location:</strong> ${event.puPlace || ""}</li>
            <li><strong>End Date:</strong> ${formatDate(event.Dropoff_Date)} at ${event.doTime || ""}</li>
            <li><strong>End Location:</strong> ${event.doPlace || ""}</li>
            ${mappedEvent.Description}
        </ul>`;
      break;

    default:
      // Additional types can be expanded here
      break;
  }

  return mappedEvent;
};

// Function to map a day and its events
const mapDay = (day, events) => ({
  Date: day,
  IsActive: true,
  TripEvents: events.filter((event) => event.Date === day).map(mapTripEvent),
});

// Generate the trip days and map the events
const tripDays = [...new Set(tourPlanData.TripDays)].map((day) =>
  mapDay(day, tourPlanData.TripEvents)
);

// Prepare the final output for Zapier
const travefyTrip = {
  Name: tourPlanData.Name,
  TripCoverPhotoUrl: "https://images.ctfassets.net/6xuvngqqn06x/su9J6FvsrImEQsEcuyeAq/55a290674f9cac9b979cf03600a268c3/Aurora_Borealis-01.jpg?w=1680&h=800&fit=fill&q=80&fm=webp",
  Active: true,
  IsChatDisabled: false,
  IsPdfEnabled: true,
  IsAppEnabled: true,
  Status: "Itinerary",
  IsArchived: false,
  Currency: tourPlanData.Currency,
  TripDays: tripDays,
  TripUsers: mapTravellersToTripUsers(tourPlanData.Travellers),
};

// Export the result as a JSON string for Zapier
output = { travefyTrip: JSON.stringify(travefyTrip), tripUsers: JSON.stringify({ tripUsers:travefyTrip.TripUsers}) };