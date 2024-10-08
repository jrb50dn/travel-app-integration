const store = StoreClient('ee4b3a19-486b-4b56-a69c-79f13f38e429');


const getMergedAIContent = async(store, totalChunks) => {
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

        const mergedContent = storedChunks.flat();

        console.log(`Merged Content Length: ${mergedContent.length}`);

        if (mergedContent.length === 0) {
            throw new Error("No descriptions found to merge.");
        }

        return mergedContent;
    } catch (error) {
        throw new Error(`Failed to retrieve and merge chunks: ${error.message}`);
    }
};

const replaceContentAfterFirstTable = (description, newContent) => {
  if (!description) return null; // Return early if description is missing

  // Match everything after the first </table> tag and replace it with the new content
  return description.replace(
    /<\/table>[\s\S]*/,
    `</table><br> <div>${newContent}</div>`
  );
};

const replaceContent = (
  travefyTrip,
  rewrittenEventContent
) => {
  if (!travefyTrip || !rewrittenEventContent) return travefyTrip; // Return travefyTrip if libraryEvents are missing

  travefyTrip.TripDays.forEach((tripDay) => {
    tripDay.TripEvents.forEach((event) => {
      // Find the matching event in libraryEvents by SegmentIdentifier
      const matchingEvent = rewrittenEventContent.find(
        (e) => e.PartnerIdentifier === event.PartnerIdentifier
      );
      if (matchingEvent) {
        event.Description = replaceContentAfterFirstTable(
            event.Description,
            matchingEvent.Description
        );
        if (event.TripIdeas && event.TripIdeas.length > 0) {
            event.TripIdeas[0].Name = 'Replaced With AI Content - ' + event.TripIdeas[0].Name;
        }
    } else {
        if (event.TripIdeas && event.TripIdeas.length > 0 && event.TripIdeas[0].Name && event.TripIdeas[0].Name.startsWith('Original')) {
            event.TripIdeas.shift();
        }
    }
    });
  });

  return travefyTrip;
};

const generateEnhancedItinerary = async () => {
  // Fetch input data from Zapier
  const travefyTrip = JSON.parse(inputData.travefyTrip);
  const reWrittenEventContent = await getMergedAIContent(store,Number(inputData.totalChunks));

  const itineraryWithAIContent =
    replaceContent(
      travefyTrip,
      reWrittenEventContent
    );

  itineraryWithAIContent.Name =  itineraryWithAIContent.Name + " (Enhanced)"

  // Return the final enhanced itinerary
  return JSON.stringify(itineraryWithAIContent);
};


// Execute and return the result
return (output = {
  events: JSON.stringify(getMergedAIContent(store,Number(inputData.totalChunks))),
  travefyTrip: await generateEnhancedItinerary()
});


