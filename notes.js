fetch("https://pa-50degr.nx.tourplan.net/TourplanNX/tourplanservices/Services/Product.svc/json/GetOptions", {
    "headers": {
      "accept": "application/json, text/plain, */*",
      "accept-language": "en-GB,en-US;q=0.9,en;q=0.8",
      "content-type": "application/json",
      "priority": "u=1, i",
      "sec-ch-ua": "\"Google Chrome\";v=\"129\", \"Not=A?Brand\";v=\"8\", \"Chromium\";v=\"129\"",
      "sec-ch-ua-mobile": "?0",
      "sec-ch-ua-platform": "\"macOS\"",
      "sec-fetch-dest": "empty",
      "sec-fetch-mode": "cors",
      "sec-fetch-site": "same-origin"
    },
    "referrer": "https://pa-50degr.nx.tourplan.net/TourplanNX/",
    "referrerPolicy": "strict-origin-when-cross-origin",
    "body": "{\"request\":{\"AgentCode\":\"EXC001\",\"AllocationSource\":\"Database\",\"BookingId\":23767,\"DetailedAllocationOverridePeriod\":{\"From\":\"2024-10-30T00:00:00\",\"To\":\"2024-10-30T00:00:00\"},\"InfoTypes\":[\"AvailabilityDetailed\",\"General\"],\"OptIds\":[665],\"Scu\":1,\"ServiceDate\":\"2024-10-30T00:00:00\"}}",
    "method": "POST",
    "mode": "cors",
    "credentials": "include"
  }).then(response => response.json()).then(data => console.log(data));