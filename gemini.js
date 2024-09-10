const inputData = { trip: JSON.stringify(require("./tour_plan_data.json")) };
const tourPlanData = JSON.parse(inputData.trip);

// Main function to process event notes
async function processEventNotes() {
  try {
    // Step 1: Create a list of concatenated notes to rewrite
    const notesToRewrite = tourPlanData.TripEvents.filter(
      (event) =>
        event.Description.ShortItineraryNote || event.Description.ItineraryNote
    ).map((event) => ({
      eventId: event.PartnerIdentifier,
      combinedNote:
        `${event.Description.ShortItineraryNote} ${event.Description.ItineraryNote}`.trim(),
    }));

    const rewrittenNotesResponse = await rewriteNotesWithGemini(notesToRewrite);
    if(rewrittenNotesResponse) {
        const rewrittenNotesJSON = (rewrittenNotesResponse.parts[0].text).replace(/```/g, '').replace('json', '');
        const rewrittenNotes = JSON.parse(rewrittenNotesJSON);
        console.log(rewrittenNotes);
    }


    // Step 3: Map the rewritten notes back to their respective trip events
/*     tourPlanData.TripEvents.forEach((event) => {
      const rewrittenNote = rewrittenNotes.find(
        (note) => note.eventId === event.PartnerIdentifier
      );
      if (rewrittenNote) {
        event.AISuggestion = rewrittenNote || ""; // Ensure an empty string if rewriting fails
      }
    }); */

    return tourPlanData;
  } catch (error) {
    console.error("Error processing event notes:", error);
    throw error; // Re-throw the error for better error handling upstream
  }
}

// Gemini API call implementation
async function rewriteNotesWithGemini(notes) {
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
    return data?.candidates?.[0]?.content || "";
  } catch (error) {
    console.error("Error fetching from Gemini API:", error);
    return ""; // Return an empty string on failure
  }
}

// Run the main function
processEventNotes()
  .then((result) => {
    console.log(result.TripEvents);
  })
  .catch((error) => {
    console.error("Error processing event notes:", error);
  });
