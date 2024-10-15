const sendMessageToServiceWorker = (message, callback) => {
    chrome.runtime.sendMessage(message, (response) => {
      if (callback) {
        callback(response);
      }
    });
  };

  const listenForMessagesInContentScript = (handler) => {
    chrome.runtime.onMessage.addListener((request, sender, sendResponse) => {
      if (handler) {
        handler(request, sender, sendResponse);
      }
    });
  };


(function () {
    const createTabs = () => {
      const tabs = document.querySelectorAll(".ex-sidebar .ex-header button");
      const panes = document.querySelectorAll(".ex-sidebar .ex-panes li");
  
      // Scroll to the selected pane
      const scrollToPane = (index) => {
        panes[index].scrollIntoView({ behavior: "smooth" });
      };
  
      // Set the active tab button
      const setActiveTab = (tabs, index) => {
        tabs.forEach((tab, i) => {
          tab.classList.toggle("ex-active", i === index);
        });
      };
  
      // Add click event listeners to each tab button
      tabs.forEach((tab, index) => {
        tab.addEventListener("click", () => {
          scrollToPane(index);
          setActiveTab(tabs, index);
        });
      });
    };
  
    const injectHtmlFromFile = (filePath, id) => {
      fetch(chrome.runtime.getURL(filePath))
        .then((response) => {
          if (!response.ok) {
            throw new Error(`Failed to fetch ${filePath}: ${response.statusText}`);
          }
          return response.text();
        })
        .then((html) => {
          // Create and inject the HTML wrapper
          const wrapper = document.createElement("div");
          wrapper.id = id;
          wrapper.classList.add("extension");
  
          // Inject styles
          const style = document.createElement("style");
          style.textContent = `
            @import "https://unpkg.com/open-props";
            @import "https://maxst.icons8.com/vue-static/landings/line-awesome/line-awesome/1.3.0/css/line-awesome.min.css";
          `;
  
          // Set the inner HTML and append styles
          wrapper.innerHTML = html;
          wrapper.appendChild(style);
  
          // Append the new div to the body of the current page
          document.body.appendChild(wrapper);
  
          // Call the tab creation function
          createTabs();
  
          // Dispatch a custom event after everything is initialized
          document.dispatchEvent(new CustomEvent("extensionInit", { detail: { id, filePath } }));
        })
        .catch((error) => console.error("Error fetching the HTML:", error));
    };
  
    if (window.self === window.top) {
        injectHtmlFromFile("travefy.html", "travefy-extension");
      }

  })();
  