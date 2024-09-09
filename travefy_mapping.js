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
       <ul>${inclusions
         .map((item) => (item ? `<li>${item}</li>` : ""))
         .join("")}</ul>
     </li>`
    : "";

// Function to generate event description based on common fields
const generateCommonDescription = (event) => `
  ${createInclusionsList(event.Inclusions)}
  ${
    event.Description.ShortItineraryNote
      ? `<p>${event.Description.ShortItineraryNote}</p>`
      : ""
  }
  ${
    event.Description.ItineraryNote
      ? `<p>${event.Description.ItineraryNote}</p>`
      : ""
  }
  ${event.Description.InfoNote ? `<p>${event.Description.InfoNote}</p>` : ""}
  ${
    event.Description.TravelInformation
      ? `<p>${event.Description.TravelInformation}</p>`
      : ""
  }
  ${
    event.Description.ServiceNote
      ? `<p>${event.Description.ServiceNote}</p>`
      : ""
  }
  ${
    event.Description.ServiceRemarks
      ? `<p>${event.Description.ServiceRemarks}</p>`
      : ""
  }
  ${
    event.Description.OptionContent
      ? `<p style="background-color: rgba(255, 254, 145, 1)">${event.Description.OptionContent}</p>`
      : ""
  }
`;

const prependInfoSections = (event) => {
  let travellerDetails = tourPlanData.Travellers
    .map(
      (traveller) => `
        <p><strong><span>${traveller.Title} ${traveller.FullName}:&nbsp;</span></strong></p>
        <p><span>Dietary Requirements: ${traveller.DietaryRequirements}</span></p>
        <p><span>Medical Requirements: ${traveller.MedicalConditions}</span></p>
      `
    )
    .join("");

  const infoSections = [
    {
      Title: "Itinerary Information",
      IsActive: true,
      TripEvents: [
        {
          IsActive: true,
          Name: "Itinerary Prepared For ",
          Description: `
          ${travellerDetails}
            <p><span ><strong>Booking #:&nbsp;</strong>${
              tourPlanData.name
            }</span></p>
            <p><span ><strong>Date:</strong>${formatDate(
              tourPlanData.TripDays[0]
            )}</span></p>
            <p><span ><strong>Consultant:</strong>!! need data</span></p>
            <p><span ><strong>Agent:&nbsp;</strong>!! need data </span></p>
            <p><span ><strong>E-mail:</strong> !! need data</span></p>
            `,
          EventType: 12,
          IsEndingEvent: false,
          IsArrivalSetter: false,
        },
        {
          IsActive: true,
          Name: "Emergency Contacts",
          Description:
            "<p><strong><em>Emergency contacts \u2013 Norway: +47 21 04 01 01 (voice only)</em></strong></p><p><em>Please note, emails are not monitored outside of business hours.&nbsp;</em></p><p><em>In an <strong>urgent</strong> matter, please call the number above.</em></p><p>In the itinerary below you will also have important direct contact numbers for our guides, transfers and hotels. <strong>Please only use these to notify the service providers if you are running late or you cannot find your guide/driver.</strong> You will not be able to make any changes to your dates/timings by contacting the service providers directly. Please contact our Sales Teams for changes and we will do our best to assist.</p>",
          EventType: 12,
          IsEndingEvent: false,
          IsArrivalSetter: false,
        },
        {
          IsActive: true,
          Name: "All our tour prices include the following:",
          Description:
            "<p>- Itineraries designed by Nordic Destination Specialists</p><p>-&nbsp;24/7 Emergency Support</p><p>- All government taxes and fees</p>",
          EventType: 12,
          IsEndingEvent: false,
          IsArrivalSetter: false,
        },
        {
          IsActive: true,
          Name: "Practical Details:  Emergency Contacts",
          Description:
            "<p><strong>Review</strong></p><p>Have a wonderful trip! Please share your best moments with our travelling community via Facebook / Instagram. And after you have returned home safely, we would appreciate it if you took some time to review our service on (Facebook / Google). Your feedback is important to us.</p><p>&nbsp;</p><p><strong>Your travel documents:</strong></p><p>If you have any questions regarding the documents, please contact the Destination Specialist who booked the tour for you \u2013 she/he will be happy to go through the travel documents with you.</p><p><strong>Before Travel:</strong></p><ul><li>Please ensure you have a working international phone plan for emergencies.&nbsp;</li><li>Make sure we have your flight information, dietary restrictions, or medical requirements.</li><li>Please feel free to access our Practical Destination Info, including packing lists and city guides.</li><li>Kindly visit our FAQ page for further tips.</li></ul><p>&nbsp;</p><p><strong>Who to contact while travelling:</strong></p><ul><li>Call the local emergency number: 112 in a life-threatening emergency.&nbsp;</li><li>Call our 24/7 number +47 21 04 0101 (voice only) for urgent assistance with your itinerary (flight delays, rescheduling services).&nbsp;</li><li>Contact the hotel's reception for assistance with your hotel room or booking activities.&nbsp;</li><li>Email our sales team for any non-urgent matters (only monitored during local office hours).</li></ul><p>&nbsp;</p><p><strong>Note on Vouchers:</strong></p><p>You only need a voucher if you have been given a voucher with your travel documents. We recommend printing this just in case and presenting it before the tour starts.</p><p>&nbsp;</p><p><strong>Terms &amp; Conditions:</strong></p><p>All arrangements are subject to our booking terms &amp; conditions, which can be found on:</p><p>www.fiftydegreesnorth.com/booking-conditions</p><p>&nbsp;</p><p><strong>Visa &amp; Documentation Responsibility:</strong></p><p>It is your responsibility to ensure that you have the appropriate documentation, including visas. We are happy to assist you in determining visa requirements wherever possible. For details see:</p><p>www.fiftydegreesnorth.com/visas&nbsp;</p><p>&nbsp;</p><p><strong>Travel Safe:&nbsp;</strong></p><p>Travel Insurance is strongly recommended. Please ensure that you hold an adequate travel insurance policy. For more information on safe travel, please visit: www.fiftydegreesnorth.com/travel-safe&nbsp;</p><p>&nbsp;</p><p><strong>Vaccinations:</strong></p><p>It is your responsibility to have appropriate vaccinations for your travel destination. Please contact your nearest vaccination clinic or your family physician for advice.&nbsp;</p>",
          EventType: 12,
          IsEndingEvent: false,
          IsArrivalSetter: false,
        },
      ],
      IsSupplemental: true,
    },
  ];

  return infoSections;
};

const mapTravellersToTripUsers = (travellers) => {
    const seenEmails = new Set(); // To track unique emails

    // Sort travellers: those with email addresses first
    const sortedTravellers = travellers.sort((a, b) => {
        if (a.Email && !b.Email) return -1;
        if (!a.Email && b.Email) return 1;
        return 0;
    });

    return sortedTravellers.map((traveller, index) => {
        let email = traveller.Email;
        const fullName = traveller.FullName || `Pax-${index + 1}-${Date.now()}`;

        // Remove whitespace from fullName for the email generation
        const sanitizedFullName = fullName.replace(/\s+/g, '');

        // If email is invalid or already seen, generate a unique one
        if (!email || seenEmails.has(email)) {
            email = sanitizedFullName + "@example.com";
        }

        seenEmails.add(email); // Track this email as used

        return {
            title: traveller.Title,
            email: email, // Use the unique or generated email
            fullName: traveller.FullName || "No Name",
            role: "4",
        };
    });
};


  

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
            <li><strong>Departure Date:</strong> ${formatDate(
              event.Pickup_Date
            )} at ${event.puTime || ""}</li>
            <li><strong>Departure Location:</strong> ${event.puPlace || ""}</li>
            <li><strong>Arrival Date:</strong> ${formatDate(
              event.Dropoff_Date
            )} at ${event.doTime || ""}</li>
            <li><strong>Arrival Location:</strong> ${event.doPlace || ""}</li>
            ${mappedEvent.Description}
        </ul>`;
      break;

    case 1: // Car Rental
      mappedEvent.Description = `
        <ul>
            <li><strong>Pick-up Date:</strong> ${formatDate(
              event.Pickup_Date
            )} at ${event.puTime || ""}</li>
            <li><strong>Pick-up Location:</strong> ${event.puPlace || ""}</li>
            <li><strong>Drop-off Date:</strong> ${formatDate(
              event.Dropoff_Date
            )} at ${event.doTime || ""}</li>
            <li><strong>Drop-off Location:</strong> ${event.doPlace || ""}</li>
            <li><strong>Rental Duration:</strong> !!missing need another Tag</li>
            <li><strong>Vehicle Type:</strong> !!missing need another Tag</li>
            ${mappedEvent.Description}
        </ul>`;
      break;

    case 2: // Train
      mappedEvent.Description = `
        <ul>
            <li><strong>Departure Date:</strong> ${formatDate(
              event.Pickup_Date
            )} at ${event.puTime || ""}</li>
            <li><strong>Departure Location:</strong> ${event.puPlace || ""}</li>
            <li><strong>Arrival Date:</strong> ${formatDate(
              event.Dropoff_Date
            )} at ${event.doTime || ""}</li>
            <li><strong>Arrival Location:</strong> ${event.doPlace || ""}</li>
            ${mappedEvent.Description}
        </ul>`;
      break;

    case 3: // Cruise
      mappedEvent.Description = `
        <ul>
            <li><strong>Departure Date:</strong> ${formatDate(
              event.Pickup_Date
            )} at ${event.puTime || ""}</li>
            <li><strong>Departure Location:</strong> ${event.puPlace || ""}</li>
            <li><strong>Arrival Date:</strong> ${formatDate(
              event.Dropoff_Date
            )} at ${event.doTime || ""}</li>
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
            <li><strong>Pick-up Date:</strong> ${formatDate(
              event.Pickup_Date
            )} at ${event.puTime || ""}</li>
            <li><strong>Pick-up Location:</strong> ${event.puPlace || ""}</li>
            <li><strong>Drop-off Date:</strong> ${formatDate(
              event.Dropoff_Date
            )} at ${event.doTime || ""}</li>
            <li><strong>Drop-off Location:</strong> ${event.doPlace || ""}</li>
            ${mappedEvent.Description}
        </ul>`;
      break;

    case 6: // Hotel
      mappedEvent.Description = `
        <ul>
            <li><strong>Phone:</strong> ${event.phone || ""}</li>
            <li><strong>Check-in Date:</strong> ${formatDate(
              event.Pickup_Date
            )} at ${event.puTime || ""}</li>
            <li><strong>Check-out Date:</strong> ${formatDate(
              event.Dropoff_Date
            )} at ${event.doTime || ""}</li>
            <li><strong>Location:</strong> ${event.Address || ""}</li>
            ${mappedEvent.Description}
        </ul>`;
      break;

    case 9: // Activity
      mappedEvent.Description = `
        <ul>
            <li><strong>Phone:</strong> ${event.phone || ""}</li>
            <li><strong>Start Date:</strong> ${formatDate(
              event.Pickup_Date
            )} at ${event.puTime || ""}</li>
            <li><strong>Start Location:</strong> ${event.puPlace || ""}</li>
            <li><strong>End Date:</strong> ${formatDate(
              event.Dropoff_Date
            )} at ${event.doTime || ""}</li>
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


// Export the result as a JSON string for Zapier
output = {
  travefyTrip: JSON.stringify(travefyTrip),
  tripUsers: JSON.stringify({ tripUsers: travefyTrip.TripUsers }),
};