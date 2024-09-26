const extractAndEscapeDivContent = (description) => {
    if (!description) {
      return null; // If no input string, return null
    }
  
    const regex = /<div[^>]*>([\s\S]*?)<\/div>/; // Regex to capture content inside <div> tags
    const match = regex.exec(description);
  
    if (match) {
      const content = match[1].trim(); // Trim whitespace and newline characters
  
      // Return null if content is empty (only whitespace or newlines)
      if (content === '') {
        return null;
      }
  
      // Escape HTML content inside the <div>
      const escapeHTML = (str) => {
        return str.replace(/&/g, '&amp;')
                  .replace(/</g, '&lt;')
                  .replace(/>/g, '&gt;')
                  .replace(/"/g, '&quot;')
                  .replace(/'/g, '&#039;');
      };
  
      return escapeHTML(content); // Return the escaped content inside the <div>
    }
  
    return null; // Return null if no match is found
  };
  
  const libraryEvents = JSON.parse(inputData.libraryEvents);
  const descriptionsToRewrite = JSON.parse(inputData.travefyTrip).TripDays.flatMap((day) => {
    return day.TripEvents.map((event) => {
      const name = event.Name;
      const partnerIdentifier = event.PartnerIdentifier;
      const description = extractAndEscapeDivContent(event.Description);
  
      // Only return an object if both eventId and description are not null or undefined
      if (partnerIdentifier && description && name && !libraryEvents.some(event => event.PartnerIdentifier === partnerIdentifier)) {
        return {
          Name: name,
          PartnerIdentifier: partnerIdentifier,
          Description: description,
        };
      }
      // Return null if either value is missing
      return null;
    }).filter((item) => item !== null); // Filter out null values
  });
  
  
  
  output = {
    descriptionsToRewrite: JSON.stringify(descriptionsToRewrite),
    numberOfDescriptionsToRewrite: descriptionsToRewrite.length
  }
  
  