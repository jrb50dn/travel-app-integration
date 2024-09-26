const url = "https://api.travefy.com/api/v1/library/events";

const myHeaders = {
  "X-USER-TOKEN": "",
  "X-API-PUBLIC-KEY": ""
};

const requestOptions = {
  method: "GET",
  headers: myHeaders
};

// Use the built-in fetch
fetch(url, requestOptions)
  .then(response => response.json())  // Parse JSON response
  .then(result => {
    // Set output data
    const output = {
      events: JSON.stringify(result),  // Example: The full list of events
    };
    
    // Return the result to Zapier as output
    callback(null, output);
  })
  .catch(error => {
    // Handle any errors
    callback(error);
  });
