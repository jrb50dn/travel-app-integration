const store = StoreClient('ee4b3a19-486b-4b56-a69c-79f13f38e429');


const getMergedDescriptions = async(store, totalChunks) => {
    const iterations = Array.from({ length: totalChunks }, (_, i) => i);

    try {
        const chunkPromises = iterations.map((i) => store.get(`rewrittenDescriptionChunk${i}`));

        const storedResults = await Promise.allSettled(chunkPromises);

        // Log the stored results for each chunk using console.log
        storedResults.forEach((result, index) => {
            console.log(`Chunk ${index}: ${result.status}`);
            if (result.status === "fulfilled" && result.value) {
                console.log(`Length of Chunk ${index}: ${result.value.length}`);
            } else {
                console.log(`Chunk ${index} has no data or failed.`);
            }
        });

        const failedResults = storedResults.filter(result => result.status === "rejected");
        if (failedResults.length === storedResults.length) {
            throw new Error("All chunk retrievals failed.");
        }

        const storedChunks = storedResults
            .filter(result => result.status === "fulfilled" && Array.isArray(result.value) && result.value.length > 0)
            .map(result => result.value);

        const mergedDescriptions = storedChunks.flat();

        console.log(`Merged Descriptions Length: ${mergedDescriptions.length}`);

        if (mergedDescriptions.length === 0) {
            throw new Error("No descriptions found to merge.");
        }

        return mergedDescriptions;
    } catch (error) {
        throw new Error(`Failed to retrieve and merge chunks: ${error.message}`);
    }
};




const replaceContentAfterLastUl = (description, newContent) => {
  if (!description) return null; // Early return if no description

  // Match everything after the last </ul> tag and replace it with the new content
  return description.replace(/<\/ul>(?![\s\S]*<\/ul>)[\s\S]*/, `<br> <div style=\"background-color: rgba(255, 254, 145, 1)\">${newContent}</div>`);
};


const replaceDescriptions = (
  initialData,
  items
) => {
  if (!initialData || !items) return initialData; // Return initialData if libraryEvents are missing

  initialData.TripDays.forEach((tripDay) => {
    tripDay.TripEvents.forEach((event) => {
      // Find the matching event in libraryEvents by SegmentIdentifier
      const matchingEvent = items.find(
        (e) => e.PartnerIdentifier === event.PartnerIdentifier
      );
      if (matchingEvent) {
        event.Description = replaceContentAfterLastUl(
          event.Description,
          matchingEvent.Description
        );
      }
    });
  });

  return initialData;
};

const generateEnhancedItinerary = async () => {
  // Fetch input data from Zapier
  const travefyTrip = JSON.parse(inputData.travefyTrip);
  const libraryEvents = JSON.parse(inputData.libraryEvents);
  const reWrittenDescriptions = await getMergedDescriptions(store,Number(inputData.totalChunks));

  const itineraryWithAIDescriptions =
    replaceDescriptions(
      travefyTrip,
      reWrittenDescriptions
    );

  // Replace descriptions with library event descriptions
  const itineraryWithLibraryItems =
    replaceDescriptions(
      itineraryWithAIDescriptions,
      libraryEvents
    );

  // Return the final enhanced itinerary
  return JSON.stringify(itineraryWithLibraryItems);
};


// Execute and return the result
return (output = {
  travefyTrip: await generateEnhancedItinerary(),
});

await store.clear();
