

const inputData = {
  trip: JSON.stringify(require("./travefy.json")),
  events: JSON.stringify(require("./travefy_event_data.json")),
};

const callback = (message, inputData) => {console.log(inputData)};

// Copy from here for Zapier code
const travefyTrip = JSON.parse(inputData.trip);
const eventData = JSON.parse(inputData.events);


const extractDivFromContent = (description) => {
    if (!description) {
      return null; // If no input string, return null
    }
  
    const regex = /<div[^>]*>([\s\S]*?)<\/div>/; // Updated regex to handle nested content
    const match = regex.exec(description);
  
    if (match) {
      return match[0]; // Return the entire div tag with its content
    }
  
    return null; // Return null if no match is found
  };

  const rewriteNotesWithGemini = async (notes) => {
    const geminiApiKey = "AIzaSyCXfYQIsRjxDDX4CJVu8RwPqvJAn1OifYc"; // Replace with your Gemini API key
    const geminiApiEndpoint = `https://generativelanguage.googleapis.com/v1beta/models/gemini-1.5-flash-latest:generateContent?key=${geminiApiKey}`;
  
    const prompt = `Transform the following supplier list of notes in JSON format to align with the tour operator guidelines below. 
      Please return JSON.
    
      **Tour Operator Traveller Itinerary Document Guidelines:**
      - Bullet Point Important Information: List key details such as places, locations, addresses, times, and phone numbers at the start.
      - Tone:
        - Friendly and Approachable: Warm and welcoming, avoiding overly formal language.
        - Informative and Clear: Use straightforward sentences, avoiding jargon.
        - Engaging and Enthusiastic: Convey excitement and positivity.
        - Reassuring and Supportive: Provide confidence and clear guidance.
      - Concise and Focused: Keep the description under 150 words.
      - Third-Person Perspective: Use third-person language.
      - Formatting: No headings, just bullet points and a paragraph.
      - Content should be all in one paragraph. No line breaks.
    
      Notes: ${JSON.stringify(notes)}`;
  
    const requestBody = {
      contents: [
        {
          parts: [
            {
              text: prompt,
            },
          ],
        },
      ],
    };
  
    const options = {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(requestBody),
    };
  
    try {
      const response = await fetch(geminiApiEndpoint, options);
      if (!response.ok) {
        throw new Error(`Gemini API error: ${response.status}`);
      }
      const data = await response.json();
      const json = cleanAndParseGeminiResponse(
        data?.candidates?.[0]?.content?.parts?.[0]?.text
      );
      return json;
    } catch (error) {
      console.error("Error fetching from Gemini API:", error);
      return null;
    }
  };
  const cleanAndParseGeminiResponse = (responseText) => {
    if (responseText) {
      try {
        // Remove triple backticks and 'json' from the response
        const cleanedText = responseText
          .replace(/```json\s*/, "") // Remove ```json\n at the start
          .replace(/```$/, "") // Remove ``` at the end
          .trim(); // Trim any extra whitespace
  
        // Parse the cleaned text as JSON
        const jsonResponse = JSON.parse(cleanedText);
  
        // Return the valid JSON object
        return jsonResponse;
      } catch (error) {
        console.error("Error parsing JSON:", error);
        return null; // Return null if parsing fails
      }
    }
  
    return null; // Return null if no response text is provided
  };

  
  const descriptionsToRewrite = travefyTrip.TripDays.flatMap((day) => {
    return day.TripEvents.map((event) => {
      const partnerIdentifier = event.PartnerIdentifier;
      const description = extractDivFromContent(event.Description);
  
      // Only return an object if both eventId and description are not null or undefined
      if (partnerIdentifier && description) {
        return {
          partnerIdentifier: partnerIdentifier,
          Description: description,
        };
      }
      // Return null if either value is missing
      return null;
    }).filter((item) => item !== null); // Filter out null values
  });

  const replaceFirstDivInContent = (description, newContent) => {
    if (!description) {
      return null; // If no input string, return null
    }
  
    // Regular expression to match the first <div>...</div>
    const regex = /<div[^>]*>([\s\S]*?)<\/div>/;
  
    // Replace the first matched div with the new content
    return description.replace(regex, `<div>${newContent}</div>`);
  };
  
  const mapEnhancedDescriptions = (itinerary, descriptions) => {
    // Create a dictionary of descriptions by partnerIdentifier for quick access
    const descriptionMap = descriptions.reduce((acc, item) => {
      acc[item.partnerIdentifier] = item.Description;
      return acc;
    }, {});
  
    // Function to update the description in the itinerary
    itinerary.TripDays.forEach((tripDay) => {
      tripDay.TripEvents.forEach((event) => {
        if (descriptionMap[event.PartnerIdentifier]) {
          event.Description = replaceFirstDivInContent(
            event.Description,
            descriptionMap[event.PartnerIdentifier]
          );
        }
      });
    });
  
    return itinerary;
  };
  
  
  const replaceDescriptionsWithLibraryDescriptions = (initialData, eventData) => {
    initialData.TripDays.forEach((tripDay) => {
      tripDay.TripEvents.forEach((event) => {
        // Find the matching event in eventData by PartnerIdentifier
        let matchingEvent = eventData.find(
          (e) => e.SegmentIdentifier === event.PartnerIdentifier
        );
        // If a matching event is found, replace the description
        if (matchingEvent) {
          event.Description = replaceFirstDivInContent(event.Description, matchingEvent.Description);
        }
      });
    });
    return initialData;
  };
  
  const generateEnhancedItinerary = async () => {
    const rewrittenDescriptions = await rewriteNotesWithGemini(
      descriptionsToRewrite
    );
    const enhancedItinerary = rewrittenDescriptions
      ? mapEnhancedDescriptions(travefyTrip, rewrittenDescriptions)
      : travefyTrip;
    enhancedItinerary.Name = enhancedItinerary.Name + " - Enhanced";
  
    const enhancedItineraryWithLibraryItems = replaceDescriptionsWithLibraryDescriptions(enhancedItinerary, eventData);
  
    return JSON.stringify(enhancedItineraryWithLibraryItems)
  };
  
  return output = {
      travefyTrip: await generateEnhancedItinerary(),
    };
  
  
  
  