let lastBookingData = null;

chrome.webNavigation.onHistoryStateUpdated.addListener(
  (details) => {
    if (
      details.url === "https://travefy.com/"
    ) {
      chrome.scripting.executeScript({
        target: { tabId: details.tabId },
        files: ["travefy.js"],
      });
    }
  },
  { url: [{ hostEquals: "travefy.com" }] }
);
