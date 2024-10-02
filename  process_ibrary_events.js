

const replaceContentAfterLastUl = (description, newContent) => {
  if (!description) return null; // Early return if no description

  // Match everything after the last </ul> tag and replace it with the new content
  return description.replace(/<\/ul>(?![\s\S]*<\/ul>)[\s\S]*/, `<br> <div style=\"background-color: rgba(255, 254, 145, 1)\">${newContent}</div>`);
};


const replaceDescriptions = (
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
      } else {
        event.TripIdeas = [];
      }
    });
  });

  return tripData;
};

const generateEnhancedItinerary = async () => {
  // Fetch input data from Zapier
  const travefyTrip = JSON.parse(inputData.travefyTrip);
  const libraryEvents = JSON.parse(inputData.libraryEvents);

  // Replace descriptions with library event descriptions
  const itineraryWithLibraryItems =
    replaceDescriptions(
      travefyTrip,
      libraryEvents
    );

  // Return the final enhanced itinerary
  return JSON.stringify(itineraryWithLibraryItems);
};


// Execute and return the result
return (output = {
  travefyTrip: await generateEnhancedItinerary(),
});
