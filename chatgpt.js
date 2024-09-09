const callback = (error, result) => {console.log(error,result);};  // Callback function to return the result

const apiUrl = "https://api.openai.com/v1/chat/completions";
const apiKey = "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";  // Replace with your OpenAI API key

const userPrompt = "Tell me a fun fact about space.";  // Change this to dynamic input if needed

const requestBody = {
  model: "gpt-3.5-turbo",  // or "gpt-3.5-turbo"
  messages: [
    {
      role: "user",
      content: userPrompt
    }
  ],
  max_tokens: 100
};

// Zapier environment supports fetch, so you can use it directly
fetch(apiUrl, {
  method: "POST",
  headers: {
    "Content-Type": "application/json",
    "Authorization": `Bearer ${apiKey}`
  },
  body: JSON.stringify(requestBody)
})
  .then(response => {
    console.log(response);
    if (!response.ok) {
        console.log('aa');
      throw new Error(`Error: ${response.statusText}`);
    }
    return response.json();
  })
  .then(data => {
    const chatGPTResponse = data.choices[0].message.content;
    
    // Output the result for further use in Zapier
    callback(null, { chatGPTResponse: chatGPTResponse });
  })
  .catch(error => {
    callback(error);  // Return error in case of any issues
  });
