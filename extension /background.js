

let lastBookingData = null;

chrome.webNavigation.onHistoryStateUpdated.addListener(
  (details) => {
    if (
      details.url === "https://travefy.com/"
    ) {
      chrome.scripting.executeScript({
        target: { tabId: details.tabId },
        files: ["init.js","travefy.js"],
      });
    }
  },
  { url: [{ hostEquals: "travefy.com" }] }
);




/* 
// Sending a message from Content Script to Service Worker
sendMessageToServiceWorker({ type: "greeting", message: "Hello from content script" }, (response) => {
  console.log("Response from service worker:", response);
});

// Listening for messages in Content Script
listenForMessagesInContentScript((request, sender, sendResponse) => {
  if (request.type === "update") {
    console.log("Received message from service worker:", request.message);
    sendResponse({ reply: "Content script received the message!" });
  }
});

// Sending a message from Service Worker to Content Script
sendMessageToContentScript({ type: "update", message: "Message from service worker" }, (response) => {
  console.log("Response from content script:", response);
});

// Listening for messages in Service Worker
listenForMessagesInServiceWorker((request, sender, sendResponse) => {
  if (request.type === "greeting") {
    console.log("Received message from content script:", request.message);
    sendResponse({ reply: "Hello from the service worker!" });
  }
});


const listenForMessagesInServiceWorker = (handler) => {
  chrome.runtime.onMessage.addListener((request, sender, sendResponse) => {
    if (handler) {
      handler(request, sender, sendResponse);
    }
    // Return true if the response will be sent asynchronously
    return true;
  });
};

const sendMessageToContentScript = (message, callback) => {
  chrome.tabs.query({ active: true, currentWindow: true }, (tabs) => {
    if (tabs.length > 0) {
      chrome.tabs.sendMessage(tabs[0].id, message, (response) => {
        if (callback) {
          callback(response);
        }
      });
    }
  });
};

// Listening for messages in Service Worker
listenForMessagesInServiceWorker((request, sender, sendResponse) => {
  if (request.type === "travefy" && request.message === "Create Tasks From Services") {

    const myHeaders = new Headers();
    myHeaders.append("X-USER-TOKEN", "74c40c6b6d1b4afc8da395b49b9270fe");
    myHeaders.append("X-API-PUBLIC-KEY", "edcef4e472e04d0fa656ff2de2d6f676");
  
    const requestOptions = {
      method: "GET",
      headers: myHeaders,
      redirect: "follow",
    };
  
    fetch("https://api.travefy.com/api/v1-20190212/trips/6915778", requestOptions)
      .then((response) => console.log(response.json()))
      .then((result) => sendResponse({ reply: result }))
      .catch((error) => console.error(error));
    
  }
});


*/