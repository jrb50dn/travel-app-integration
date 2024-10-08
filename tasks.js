fetch("https://travefy.com/rest-api/tripWorkspaceDataContainers/6915778", {
    "headers": {
      "accept": "application/json, text/javascript, */*; q=0.01",
      "accept-language": "en-AU,en-GB;q=0.9,en;q=0.8,en-US;q=0.7",
      "authorization": "Bearer eyJraWQiOiJoTDU3MkNXSGYxRDRjaDljcFZzeE5uSjNlV0Joand2R2tuN042TTF0U1wvWT0iLCJhbGciOiJSUzI1NiJ9.eyJzdWIiOiJhOTc4NjdhNC02ZmM3LTQ1N2EtOWE1NS1lNjYxODI1ZDA1NWUiLCJkZXZpY2Vfa2V5IjoidXMtZWFzdC0xX2EzMzA2OWQ1LWRkMzUtNGQxZS04NzIzLTZiZjJkZWI0MjU0MCIsImlzcyI6Imh0dHBzOlwvXC9jb2duaXRvLWlkcC51cy1lYXN0LTEuYW1hem9uYXdzLmNvbVwvdXMtZWFzdC0xX2pwNm5sQnVobSIsImNsaWVudF9pZCI6Ijc3dTg1cm40YXAyZmtvdGNoYnRzdHNrNTkzIiwib3JpZ2luX2p0aSI6ImVkZGMyMWQxLTNhZDktNGQzNC1iOTdmLTEzNzdkM2YzMTYyMSIsImV2ZW50X2lkIjoiOWQ3ZGRhZTEtNjk4MS00ZWYxLTlmOTItMjkwN2Y1NTM1MmFlIiwidG9rZW5fdXNlIjoiYWNjZXNzIiwic2NvcGUiOiJhd3MuY29nbml0by5zaWduaW4udXNlci5hZG1pbiIsImF1dGhfdGltZSI6MTcyODM1NDA5OCwiZXhwIjoxNzI4MzY5NDczLCJpYXQiOjE3MjgzNjU4NzMsImp0aSI6IjdmOWI4M2U3LTgwOTEtNDgxMy04MDZmLTJmZjVkMzI4YWRjZiIsInVzZXJuYW1lIjoiYTk3ODY3YTQtNmZjNy00NTdhLTlhNTUtZTY2MTgyNWQwNTVlIn0.WzsfPIEEKujvGotnIn5EwYBgvqF5taksSSVl6UeJ7h2hNKDqr136Aoe0HfYBhYr9erxzdVN0YC2BtyOU_7VPhKo2rOFOdaYSnYfUrdNuNMNepTvQDKqSgWgG9YM90PqiYxfj5VU5yBJKdtbX6muJvgvPaB6p3ECaXZ8fTMObs23ffZwPeKQkedabtLkyfIJrl_7yK6R0N8PZP54POAy02jWMpIBNtLmhl95Zmb3MxwtKGe8EpPCtgCKnhu4_ZfCRuUDr63MZ5F0jDNVULLzFS0hX5eYdpRr95FPzMBhEH_nY_c8aLgGeeaZa7GEdx_A3dc7Zwq34qE56hKhiD5y4YA",
      "priority": "u=1, i",
      "sec-ch-ua": "\"Microsoft Edge\";v=\"129\", \"Not=A?Brand\";v=\"8\", \"Chromium\";v=\"129\"",
      "sec-ch-ua-mobile": "?0",
      "sec-ch-ua-platform": "\"macOS\"",
      "sec-fetch-dest": "empty",
      "sec-fetch-mode": "cors",
      "sec-fetch-site": "same-origin",
      "x-requested-with": "XMLHttpRequest",
      "x-trip-token": "6915778"
    },
    "referrer": "https://travefy.com/",
    "referrerPolicy": "origin",
    "body": null,
    "method": "GET",
    "mode": "cors",
    "credentials": "include"
  }).then(response => response.json()).then(data => console.log(data));

fetch("https://api.travefy.com/api/v1-20190212/tasks", {
    "headers": {
      "X-USER-TOKEN": "74c40c6b6d1b4afc8da395b49b9270fe",
      "X-API-PUBLIC-KEY": "edcef4e472e04d0fa656ff2de2d6f676",
      "content-type": "application/json",
    },
    "body": "{\"task\":{\"title\":\"addc\",\"description\":null,\"dueDate\":\"2024-08-10T00:00:00.000Z\",\"dueTimeInMinutes\":null,\"isComplete\":false,\"isActive\":false,\"relativeOffsetDurationInDays\":null,\"computedScheduleDescriptor\":null,\"hasReminder\":false,\"taskType\":null,\"hadError\":false,\"assignedToUserId\":\"3310065\",\"teamId\":null,\"createdByUserId\":null,\"completedByUserId\":null,\"associatedItemId\":\"6915778\",\"associatedItemType\":\"tripReport\",\"taskOptions\":null}}",
    "method": "POST",
  }).then(response => console.log(response));

  fetch("https://travefy.com/rest-api/taskSearchResults?associatedItemId=6915778&associatedItemType=tripReport&completionFilters%5B%5D=0&dueDateFilters=&isAscending=true&isAssignedToMe=false&skip=0&sortOrder=1&take=10", {
    "headers": {
      "accept": "application/json, text/javascript, */*; q=0.01",
      "accept-language": "en-AU,en-GB;q=0.9,en;q=0.8,en-US;q=0.7",
      "authorization": "Bearer eyJraWQiOiJoTDU3MkNXSGYxRDRjaDljcFZzeE5uSjNlV0Joand2R2tuN042TTF0U1wvWT0iLCJhbGciOiJSUzI1NiJ9.eyJzdWIiOiJhOTc4NjdhNC02ZmM3LTQ1N2EtOWE1NS1lNjYxODI1ZDA1NWUiLCJkZXZpY2Vfa2V5IjoidXMtZWFzdC0xX2EzMzA2OWQ1LWRkMzUtNGQxZS04NzIzLTZiZjJkZWI0MjU0MCIsImlzcyI6Imh0dHBzOlwvXC9jb2duaXRvLWlkcC51cy1lYXN0LTEuYW1hem9uYXdzLmNvbVwvdXMtZWFzdC0xX2pwNm5sQnVobSIsImNsaWVudF9pZCI6Ijc3dTg1cm40YXAyZmtvdGNoYnRzdHNrNTkzIiwib3JpZ2luX2p0aSI6ImVkZGMyMWQxLTNhZDktNGQzNC1iOTdmLTEzNzdkM2YzMTYyMSIsImV2ZW50X2lkIjoiOWQ3ZGRhZTEtNjk4MS00ZWYxLTlmOTItMjkwN2Y1NTM1MmFlIiwidG9rZW5fdXNlIjoiYWNjZXNzIiwic2NvcGUiOiJhd3MuY29nbml0by5zaWduaW4udXNlci5hZG1pbiIsImF1dGhfdGltZSI6MTcyODM1NDA5OCwiZXhwIjoxNzI4MzY1ODQ5LCJpYXQiOjE3MjgzNjIyNDksImp0aSI6IjlhZjJmNmI0LTdiZjQtNGQyOC04ZTQ2LTlmNTg3MWJlZDIxNiIsInVzZXJuYW1lIjoiYTk3ODY3YTQtNmZjNy00NTdhLTlhNTUtZTY2MTgyNWQwNTVlIn0.qIBTLYiVVjjW2zDqPTomVj5V4qEbd5sCm_tOa1Fz--D8zxUa6dgcrNy-skI7wh02xl2ptdBe_j4FqZUzeBM9niy__CxTQ3kGUHVux6gc06vJ-W2lDPOc4iX_A8AON_wkaqeZshL1Q7tmEFyKO2G98Igy1SFME05shZayEPZLq-mdlZQEqmQVbA1OcR4BGUYJPbB5VJTLG_dN7pU8zbZpB16PPPPFfI_Sl6IR94fEzytAredgszVZlSn9hYCXYL7VrIrSWLxHHtLTzHBCh8UyDyQ72fd_0XFQav6ybcrL_gPIWShUk2JrT_Ny8NPAoS-lyZKmC9p9w3qxx0Fk1tUdYg",
      "priority": "u=1, i",
      "sec-ch-ua": "\"Microsoft Edge\";v=\"129\", \"Not=A?Brand\";v=\"8\", \"Chromium\";v=\"129\"",
      "sec-ch-ua-mobile": "?0",
      "sec-ch-ua-platform": "\"macOS\"",
      "sec-fetch-dest": "empty",
      "sec-fetch-mode": "cors",
      "sec-fetch-site": "same-origin",
      "timezoneoffsetinminutes": "660",
      "x-connection-id-token": "null",
      "x-requested-with": "XMLHttpRequest"
    },
    "referrer": "https://travefy.com/",
    "referrerPolicy": "origin",
    "body": null,
    "method": "GET",
    "mode": "cors",
    "credentials": "include"
  }).then(response => response.json()).then(data => console.log(data));