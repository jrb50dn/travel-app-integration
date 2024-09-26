// this is wrapped in an `async` function
// you can use await throughout the function
const currentChunk = JSON.parse(inputData.chunks)[inputData.index];

  const requestBody = {
    contents: [
      {
        parts: [
          { text: inputData.prompt + JSON.stringify(currentChunk) }
        ]
      }
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
          "required": ["Name","Description", "PartnerIdentifier"],
        }
      }
    }
  };


output = {requestBody:JSON.stringify(requestBody)};