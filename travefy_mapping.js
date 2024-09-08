// run `node travefy_mapping.js` in the terminal
const tourPlanData = JSON.parse(`{
  "Name": "5MFT123768- Brady x2",
  "Active": "true",
  "IsChatDisabled": "false",
  "IsPdfEnabled": "true",
  "IsAppEnabled": "true",
  "Status": "active",
  "IsArchived": "false",
  "Currency": "USD",
  "SalesLocation": "US",
  "Travellers": {
      "Traveller": [
          {
              "Title": "Ms",
              "FullName": "LindenBrady",
              "Type": "Adult",
              "Email": "lindenbrady@gmail.com",
              "DietaryRequirements": "None",
              "MedicalConditions": "None"
          },
          {
              "Title": "Mr",
              "FullName": "Richard (Grant)Oliver",
              "Type": "Adult",
              "Email": "iiml1304@bigpond.net.au",
              "DietaryRequirements": "None",
              "MedicalConditions": "None"
          }
      ]
  },
  "RoomConfigs": {
      "RoomConfig": [
          {
              "RoomType": "Single",
              "TravellerAssignment": {
                  "FullName": "LindenBrady"
              }
          },
          {
              "RoomType": "Single",
              "TravellerAssignment": {
                  "FullName": "Richard (Grant)Oliver"
              }
          }
      ]
  },
  "TripDays": {
      "TripDay": [
          "2024-08-26",
          "2024-08-26",
          "2024-08-26",
          "2024-08-27",
          "2024-08-30",
          "2024-08-30",
          "2024-08-30",
          "2024-08-30",
          "2024-08-31",
          "2024-09-01",
          "2024-09-01",
          "2024-09-01",
          "2024-09-02",
          "2024-09-03",
          "2024-09-03",
          "2024-09-04",
          "2024-09-05",
          "2024-09-06",
          "2024-09-12",
          "2024-09-12",
          "2024-09-12",
          "2024-09-13",
          "2024-09-13",
          "2024-09-13",
          "2024-09-13",
          "2024-09-14",
          "2024-09-16",
          "2024-09-16",
          "2024-09-16",
          "2024-09-17",
          "2024-09-18",
          "2024-09-18",
          "2024-09-18",
          "2024-09-18",
          "2024-09-19",
          "2024-09-20",
          "2024-09-20",
          "2024-09-20",
          "2024-09-20",
          "2024-09-21",
          "2024-09-22",
          "2024-09-23",
          "2024-09-23",
          "2024-09-24",
          "2024-09-25"
      ]
  },
  "TripEvents": {
      "TripEvent": [
          {
              "ServiceLineId": "554153",
              "SegmentProviderName": "50 Degrees North",
              "Name": "Arrival day",
              "LocationCode": [
                  null,
                  "AUS"
              ],
              "Description": {
                  "ServiceRemarks": "QR6126 at 13:50",
                  "ServiceNote": "You are arriving in Oslo on \u200bflight QR6126 at 13:50.",
                  "InfoNote": null,
                  "ShortItineraryNote": null,
                  "ItineraryNote": null,
                  "OptionContent": null,
                  "TravelInformation": null
              },
              "EventType": "OT",
              "SegmentIdentifier": null,
              "TourplanServiceStatus": "Pending",
              "Address": "Lillehammer,Norway",
              "Phone": null,
              "Date": "2024-08-26",
              "Pickup_Date": "2024-08-26",
              "puTime": null,
              "puPlace": "Australia",
              "Dropoff_Date": "2024-08-26",
              "doTime": null,
              "doPlace": null,
              "SCU": "tour",
              "SCUqty": "1",
              "SequenceNumber": "1",
              "Opt": "AUSOT50DN01ARK2",
              "Included": [
                  null,
                  null,
                  null,
                  null,
                  null,
                  null
              ],
              "TravellerAssignment": {
                  "FullName": [
                      "LindenBrady",
                      "Richard (Grant)Oliver"
                  ]
              },
              "Adults": "2",
              "Children": "0",
              "Infants": "0",
              "RoomConfigs": {
                  "RoomConfig": {
                      "RoomType": "Single",
                      "TravellerAssignment": {
                          "FullName": [
                              "LindenBrady",
                              "Richard (Grant)Oliver"
                          ]
                      }
                  }
              }
          },
          {
              "ServiceLineId": "554113",
              "SegmentProviderName": "Copenhagen Limousine",
              "Name": "Private transfer CPH Kastrup Airport - City",
              "LocationCode": [
                  null,
                  "CPH"
              ],
              "Description": {
                  "ServiceRemarks": null,
                  "ServiceNote": null,
                  "InfoNote": null,
                  "ShortItineraryNote": "Transfers include one suitcase and one carry on per person. Any additional luggage must be pre-booked.",
                  "ItineraryNote": "Airport pick-up (from commercial rights): Our chauffeurs will be waiting in the arrival hall with a name board/sign board.Our chauffeurs wear black suits, white shirts, and a black/silver striped tie.If you have any trouble locating your chauffeur, please contact us on the number: +45 70 26 06 01",
                  "OptionContent": "20% surcharge between 21.00-07.00, PRIORITY",
                  "TravelInformation": null
              },
              "EventType": "PT",
              "SegmentIdentifier": "212749",
              "TourplanServiceStatus": "Confirmed",
              "Address": "Vildrosevej 25V\u00e6rl\u00f8se,Denmark0",
              "Phone": "+45 70 260 601",
              "Date": "2024-08-26",
              "Pickup_Date": "2024-08-26",
              "puTime": "13:50",
              "puPlace": "QR6126 arriving \u00a0at 13:50Copenhagen",
              "Dropoff_Date": "2024-08-26",
              "doTime": null,
              "doPlace": "71 Nyhavn HotelCopenhagen",
              "SCU": "car",
              "SCUqty": "1",
              "SequenceNumber": "20",
              "Opt": "CPHPTCHL001PT001",
              "Included": [
                  null,
                  null,
                  null,
                  "1 x Airport Fee",
                  null,
                  null
              ],
              "TravellerAssignment": {
                  "FullName": [
                      "LindenBrady",
                      "Richard (Grant)Oliver"
                  ]
              },
              "Adults": "2",
              "Children": "0",
              "Infants": "0",
              "RoomConfigs": {
                  "RoomConfig": {
                      "RoomType": "Single",
                      "TravellerAssignment": {
                          "FullName": [
                              "LindenBrady",
                              "Richard (Grant)Oliver"
                          ]
                      }
                  }
              }
          },
          {
              "ServiceLineId": "558645",
              "SegmentProviderName": "71 Nyhavn Hotel",
              "Name": "Executive Double Deluxe View including breakfast",
              "LocationCode": [
                  null,
                  "CPH"
              ],
              "Description": {
                  "ServiceRemarks": null,
                  "ServiceNote": null,
                  "InfoNote": "Entering this atmospheric hotel, you are initially impressed with the unparalleled location in Copenhagen\u2019s historic Nyhavn district. Housed in stunning heritage warehouses,71 Nyhavn Hotel inspires you with charming, rustic interiors and spectacular panoramic views across Copenhagen Harbour. The Hotel offers 130 stylishly furnished rooms, a Breakfast Restaurant and an Italian specialty restaurant. Services include parking, air conditioning in all rooms and free Wifi throughout the hotel.",
                  "ShortItineraryNote": "\u200bThe Executive Double Deluxe View rooms are on the light filled south side of the red warehouse and have a direct view of the harbour or of city life and the tethered boats along Nyhavn. The room is 23sqm and equipped with a Carpe Diem double bed of 180. Room amenities include TV, iron & board, safe, mini bar, walk in shower and hair dryer. The room also offers a Nespresso machine, bathrobe, slippers and exclusive Karmameju bath products.",
                  "ItineraryNote": null,
                  "OptionContent": "Priority, Twin not possible",
                  "TravelInformation": null
              },
              "EventType": "AC",
              "SegmentIdentifier": "15560761",
              "TourplanServiceStatus": "Confirmed",
              "Address": "Nyhavn 71Copenhagen,Denmark1051",
              "Phone": "+45 3343 6200",
              "Date": "2024-08-26",
              "Pickup_Date": "2024-08-26",
              "puTime": null,
              "puPlace": "Copenhagen",
              "Dropoff_Date": "2024-08-30",
              "doTime": null,
              "doPlace": null,
              "SCU": "nights",
              "SCUqty": "4",
              "SequenceNumber": "30",
              "Opt": "CPHACNYH001AC03B",
              "Included": [
                  null,
                  null,
                  null,
                  null,
                  null,
                  null
              ],
              "TravellerAssignment": {
                  "FullName": [
                      "LindenBrady",
                      "Richard (Grant)Oliver"
                  ]
              },
              "Adults": "2",
              "Children": "0",
              "Infants": "0",
              "RoomConfigs": {
                  "RoomConfig": {
                      "RoomType": "Double",
                      "TravellerAssignment": {
                          "FullName": [
                              "LindenBrady",
                              "Richard (Grant)Oliver"
                          ]
                      }
                  }
              }
          },
          {
              "ServiceLineId": "553967",
              "SegmentProviderName": "LoveLiveTravel - Copenhagen Guide",
              "Name": "Discover Copenhagen - Private Walking Tour",
              "LocationCode": [
                  null,
                  "CPH"
              ],
              "Description": {
                  "ServiceRemarks": null,
                  "ServiceNote": null,
                  "InfoNote": "\u200bThe name of your guide will be decided at a later date. If you need to get in touch with your guide in advance of the tour, please ring Caroline ph: +45 918 37572",
                  "ShortItineraryNote": "The guide will be Henrik Bj\u00f8rn, contact +45 28510977.Discover the must-sees of beautiful Copenhagen including Nyhavn and the Royal Palace on a private walking tour of its most famous sights. Enjoy a stroll through the charming streets, squares, and courtyards of Copenhagen's Old Town. On the island of Slotsholmen, explore the grounds of Christiansborg, the King's working palace and the home of the Danish Parliament, and the hidden gardens of the Royal Library. Stroll along the colourful and iconic Nyhavn harbour, enjoying the nautical atmosphere and passing by the former home of writer Hans Christian Andersen. At the Royal residence of Amalienborg, see the uniformed guards and the dome of the impressive Marble Church, and hear about King Frederik and the Royal family, one of the oldest monarchies in the world. We'll also seek out some of Copenhagen's hidden gems that most tourists might miss. Along the way, hear fascinating tales of the city's vibrant history and colourful characters, and gain insight into Danish food, language, and culture from your friendly guide. A perfect introduction to the incredible Danish capital! \u00a0Meeting point: The Guide will meet you at the Hotel lobby. Included: Private guideDuration: 3 hours Activity Level: ModerateAccessible: Yes",
                  "ItineraryNote": "Please be ready at the Hotel lobby 10 minutes before departure.",
                  "OptionContent": "3 hours - PRIORITY",
                  "TravelInformation": "\u200bYour guide, tel +45 91837572, will meet you in the hotel lobby. Please be ready in good time before departure."
              },
              "EventType": "TD",
              "SegmentIdentifier": "270824-03B",
              "TourplanServiceStatus": "Confirmed",
              "Address": "Copenhagen,Denmark",
              "Phone": null,
              "Date": "2024-08-27",
              "Pickup_Date": "2024-08-27",
              "puTime": "10:00",
              "puPlace": "71 Nyhavn HotelCopenhagen",
              "Dropoff_Date": "2024-08-27",
              "doTime": "13:00",
              "doPlace": "Copenhagen",
              "SCU": "tour",
              "SCUqty": "1",
              "SequenceNumber": "40",
              "Opt": "CPHTDLLT001TD001",
              "Included": [
                  null,
                  null,
                  null,
                  null,
                  null,
                  null
              ],
              "TravellerAssignment": {
                  "FullName": [
                      "LindenBrady",
                      "Richard (Grant)Oliver"
                  ]
              },
              "Adults": "2",
              "Children": "0",
              "Infants": "0",
              "RoomConfigs": {
                  "RoomConfig": {
                      "RoomType": "Single",
                      "TravellerAssignment": {
                          "FullName": [
                              "LindenBrady",
                              "Richard (Grant)Oliver"
                          ]
                      }
                  }
              }
          },
          {
              "ServiceLineId": "554115",
              "SegmentProviderName": "Copenhagen Limousine",
              "Name": "Private transfer City - CPH Kastrup Airport",
              "LocationCode": [
                  null,
                  "CPH"
              ],
              "Description": {
                  "ServiceRemarks": "SK1868 @12:00",
                  "ServiceNote": null,
                  "InfoNote": null,
                  "ShortItineraryNote": "Transfers include one suitcase and one carry on per person. Any additional luggage must be pre-booked.",
                  "ItineraryNote": "\u200b\u200bPlease be ready in hotel lobby in good time before departure.",
                  "OptionContent": "20% surcharge between 21.00-07.00, PRIORITY",
                  "TravelInformation": null
              },
              "EventType": "PT",
              "SegmentIdentifier": "212750",
              "TourplanServiceStatus": "Confirmed",
              "Address": "Vildrosevej 25V\u00e6rl\u00f8se,Denmark0",
              "Phone": "+45 70 260 601",
              "Date": "2024-08-30",
              "Pickup_Date": "2024-08-30",
              "puTime": "09:15",
              "puPlace": "71 Nyhavn HotelCopenhagen",
              "Dropoff_Date": "2024-08-30",
              "doTime": "09:45",
              "doPlace": "Copenhagen Kastrup Airport",
              "SCU": "car",
              "SCUqty": "1",
              "SequenceNumber": "5",
              "Opt": "CPHPTCHL001PT005",
              "Included": [
                  null,
                  null,
                  null,
                  null,
                  null,
                  null
              ],
              "TravellerAssignment": {
                  "FullName": [
                      "LindenBrady",
                      "Richard (Grant)Oliver"
                  ]
              },
              "Adults": "2",
              "Children": "0",
              "Infants": "0",
              "RoomConfigs": {
                  "RoomConfig": {
                      "RoomType": "Single",
                      "TravellerAssignment": {
                          "FullName": [
                              "LindenBrady",
                              "Richard (Grant)Oliver"
                          ]
                      }
                  }
              }
          },
          {
              "ServiceLineId": "553993",
              "SegmentProviderName": "50 Degrees North",
              "Name": "Agent to arrange flights",
              "LocationCode": [
                  null,
                  "AUS"
              ],
              "Description": {
                  "ServiceRemarks": "?SK1868 CPHSVG \u00a01200 \u00a01310",
                  "ServiceNote": "\u200bYou are flying today on SK1868 from Copenhagen to Stavanger: CPH - SVG \u00a01200 \u00a01310(Flight not booked by 50DN)",
                  "InfoNote": null,
                  "ShortItineraryNote": null,
                  "ItineraryNote": null,
                  "OptionContent": null,
                  "TravelInformation": null
              },
              "EventType": "OT",
              "SegmentIdentifier": null,
              "TourplanServiceStatus": "Pending",
              "Address": "Lillehammer,Norway",
              "Phone": null,
              "Date": "2024-08-30",
              "Pickup_Date": "2024-08-30",
              "puTime": null,
              "puPlace": "Australia",
              "Dropoff_Date": "2024-08-30",
              "doTime": null,
              "doPlace": null,
              "SCU": "tour",
              "SCUqty": "1",
              "SequenceNumber": "10",
              "Opt": "AUSOT50DN01ATAF",
              "Included": [
                  null,
                  null,
                  null,
                  null,
                  null,
                  null
              ],
              "TravellerAssignment": {
                  "FullName": [
                      "LindenBrady",
                      "Richard (Grant)Oliver"
                  ]
              },
              "Adults": "2",
              "Children": "0",
              "Infants": "0",
              "RoomConfigs": {
                  "RoomConfig": {
                      "RoomType": "Single",
                      "TravellerAssignment": {
                          "FullName": [
                              "LindenBrady",
                              "Richard (Grant)Oliver"
                          ]
                      }
                  }
              }
          },
          {
              "ServiceLineId": "554116",
              "SegmentProviderName": "Ring - Limousinservice",
              "Name": "Private transfer Stavanger Airport to city",
              "LocationCode": [
                  null,
                  "SVG"
              ],
              "Description": {
                  "ServiceRemarks": null,
                  "ServiceNote": null,
                  "InfoNote": null,
                  "ShortItineraryNote": "Your driver will meet you holding a name sign. Luggage: 1 suitcase and 1 carry on per person",
                  "ItineraryNote": "In case you need to call the transfer company ''Ring Limousineservice&quot; their Emergency number is \u00a0+47 411 606 30",
                  "OptionContent": "PRIORITY",
                  "TravelInformation": null
              },
              "EventType": "PT",
              "SegmentIdentifier": "5MFT123768/su",
              "TourplanServiceStatus": "Confirmed",
              "Address": "Nattlandsfjellet 64Bergen,Norway5098",
              "Phone": "+47 4116 0630",
              "Date": "2024-08-30",
              "Pickup_Date": "2024-08-30",
              "puTime": "13:10",
              "puPlace": "SK1868 \u00a0arriving 13:10Stavanger",
              "Dropoff_Date": "2024-08-30",
              "doTime": null,
              "doPlace": "Clarion Collection Hotel Skagen BryggeStavanger Airport",
              "SCU": "car",
              "SCUqty": "1",
              "SequenceNumber": "15",
              "Opt": "SVGPTRLS001PT005",
              "Included": [
                  null,
                  null,
                  null,
                  null,
                  null,
                  null
              ],
              "TravellerAssignment": {
                  "FullName": [
                      "LindenBrady",
                      "Richard (Grant)Oliver"
                  ]
              },
              "Adults": "2",
              "Children": "0",
              "Infants": "0",
              "RoomConfigs": {
                  "RoomConfig": {
                      "RoomType": "Single",
                      "TravellerAssignment": {
                          "FullName": [
                              "LindenBrady",
                              "Richard (Grant)Oliver"
                          ]
                      }
                  }
              }
          },
          {
              "ServiceLineId": "553994",
              "SegmentProviderName": "Clarion Collection Hotel Skagen Brygge",
              "Name": "Superior room including breakfast",
              "LocationCode": [
                  "Distance to/from Stavanger S. Railway Station:",
                  "SVG"
              ],
              "Description": {
                  "ServiceRemarks": null,
                  "ServiceNote": null,
                  "InfoNote": "Clarion Collection Hotel Skagen Brygge is located on the waterfront with a beautiful view of the harbour. \u00a0Stavanger\u2019s cosy cafes, wide selection of shops and restaurants offering \u00a0varied culinary experiences are all located close to the hotel. Hotel facilities include free WiFi, parking and a training room. A free evening meal is served between 18:00-20:00 and coffee and a sweet is served between 15:00-17:00 daily.",
                  "ShortItineraryNote": "The Superior Double room is 20 sqm and is equipped with a double bed or two single beds. All rooms have views of the harbor or Valbergst\u00e5rnet. Room amenities include a wardrobe, a safe deposit box, tea and coffee-making facilities, heating and a flat-screen TV. The private bathroom has a shower and free toiletries.",
                  "ItineraryNote": null,
                  "OptionContent": "Priority",
                  "TravelInformation": null
              },
              "EventType": "AC",
              "SegmentIdentifier": "NO124S0037763",
              "TourplanServiceStatus": "Confirmed",
              "Address": "Skagenkaien 28-30Stavanger,Norway4004",
              "Phone": "+47 51 85 00 00",
              "Date": "2024-08-30",
              "Pickup_Date": "2024-08-30",
              "puTime": null,
              "puPlace": "Stavanger",
              "Dropoff_Date": "2024-09-01",
              "doTime": null,
              "doPlace": null,
              "SCU": "nights",
              "SCUqty": "2",
              "SequenceNumber": "20",
              "Opt": "SVGACCHSB01AC01B",
              "Included": [
                  null,
                  null,
                  null,
                  null,
                  null,
                  null
              ],
              "TravellerAssignment": {
                  "FullName": [
                      "LindenBrady",
                      "Richard (Grant)Oliver"
                  ]
              },
              "Adults": "2",
              "Children": "0",
              "Infants": "0",
              "RoomConfigs": {
                  "RoomConfig": {
                      "RoomType": "Double",
                      "TravellerAssignment": {
                          "FullName": [
                              "LindenBrady",
                              "Richard (Grant)Oliver"
                          ]
                      }
                  }
              }
          },
          {
              "ServiceLineId": "553996",
              "SegmentProviderName": "R\u00f8dne Fjord Cruise",
              "Name": "Fjord Cruise Lysefjord &amp; the Pulpit Rock",
              "LocationCode": [
                  null,
                  "SVG"
              ],
              "Description": {
                  "ServiceRemarks": null,
                  "ServiceNote": "\u200bPlease find your voucher with the travel documents.IMPORTANT: Please be at the meeting point 20 minutes before departure.",
                  "InfoNote": null,
                  "ShortItineraryNote": "A fjord cruise to the beautiful Lysefjord is a must when you visit Stavanger! Our new electric boat sails from downtown Stavanger to the Lysefjord and Preikestolen all year. Among the highlights of this trip are the thundering Hengjanefossen waterfall, the Vagabond\u2019s Cave and the mighty Preikestolen, towering 604 meters above sea level.The kiosk onboard offers a variety of refreshments, including beer and wine. Audio guiding in a selection of languages onboard. \u00a0Departures:Jan-Mar and Oct-Dec: Friday to Sunday - 11.00 amApril: Daily - 10.00 amMay, June & Sep: \u00a0Daily - 10.00 and 15:00 hrsJuly & Aug: Daily - 10:00, 12:00, 15:00Duration: 3 Hours *No departures on 24th Dec",
                  "ItineraryNote": "\u200bDeparture point: Strandkaien, StavangerPlease be ready at the departure point 15 minutes before departure.",
                  "OptionContent": "***check dates &amp; times***",
                  "TravelInformation": null
              },
              "EventType": "TD",
              "SegmentIdentifier": "EFHY22",
              "TourplanServiceStatus": "Confirmed",
              "Address": "Skagenkaien 35 - 37Stavanger,Norway4006",
              "Phone": "+47 51 89 52 70",
              "Date": "2024-08-31",
              "Pickup_Date": "2024-08-31",
              "puTime": "10:00",
              "puPlace": "Stavanger, StrandkaienStavanger",
              "Dropoff_Date": "2024-08-31",
              "doTime": "13:30",
              "doPlace": "Stavanger, StrandkaienStavanger",
              "SCU": "tour",
              "SCUqty": "1",
              "SequenceNumber": "10",
              "Opt": "SVGTDROD001TD001",
              "Included": [
                  "1 x Passenger tax",
                  null,
                  null,
                  null,
                  null,
                  null
              ],
              "TravellerAssignment": {
                  "FullName": [
                      "LindenBrady",
                      "Richard (Grant)Oliver"
                  ]
              },
              "Adults": "2",
              "Children": "0",
              "Infants": "0",
              "RoomConfigs": {
                  "RoomConfig": {
                      "RoomType": "Single",
                      "TravellerAssignment": {
                          "FullName": [
                              "LindenBrady",
                              "Richard (Grant)Oliver"
                          ]
                      }
                  }
              }
          },
          {
              "ServiceLineId": "554117",
              "SegmentProviderName": "Ring - Limousinservice",
              "Name": "Private transfer Stavanger and Fjord Line Terminal",
              "LocationCode": [
                  null,
                  "SVG"
              ],
              "Description": {
                  "ServiceRemarks": null,
                  "ServiceNote": null,
                  "InfoNote": null,
                  "ShortItineraryNote": "Please be ready at the Hotel lobby 10 minutes before departure. Luggage: 1 suitcase and 1 carry on per person",
                  "ItineraryNote": "Your driver will meet you holding a name signIn case you need to call the transfer company ''Ring Limousineservice&quot; their Emergency number is \u00a0+47 411 606 30",
                  "OptionContent": "PRIORITY",
                  "TravelInformation": null
              },
              "EventType": "PT",
              "SegmentIdentifier": "5MFT123768/su",
              "TourplanServiceStatus": "Confirmed",
              "Address": "Nattlandsfjellet 64Bergen,Norway5098",
              "Phone": "+47 4116 0630",
              "Date": "2024-09-01",
              "Pickup_Date": "2024-09-01",
              "puTime": "05:30",
              "puPlace": "Clarion Collection Hotel Skagen BryggeStavanger",
              "Dropoff_Date": "2024-09-01",
              "doTime": "05:50",
              "doPlace": "Stavanger Port / Risavika - Fjordline to BergenBergen",
              "SCU": "car",
              "SCUqty": "1",
              "SequenceNumber": "5",
              "Opt": "SVGPTRLS001PT003",
              "Included": [
                  null,
                  null,
                  null,
                  null,
                  null,
                  null
              ],
              "TravellerAssignment": {
                  "FullName": [
                      "LindenBrady",
                      "Richard (Grant)Oliver"
                  ]
              },
              "Adults": "2",
              "Children": "0",
              "Infants": "0",
              "RoomConfigs": {
                  "RoomConfig": {
                      "RoomType": "Single",
                      "TravellerAssignment": {
                          "FullName": [
                              "LindenBrady",
                              "Richard (Grant)Oliver"
                          ]
                      }
                  }
              }
          },
          {
              "ServiceLineId": "553997",
              "SegmentProviderName": "Fjordline",
              "Name": "Ferry from Stavanger to Bergen",
              "LocationCode": [
                  null,
                  "SVG"
              ],
              "Description": {
                  "ServiceRemarks": null,
                  "ServiceNote": "Please find your boarding passes with your travel documents.As you already have boarding passes you can go directly to boarding upon arrival.Boarding starts 60 minutes before departure. Latest boarding is 06:45am.\u200bLounge Seats included: With a seat in the Fjord Lounge, you'll enjoy a comfortable seat for the entire trip and have a fantastic sea view in a cosy atmosphere. You are also guaranteed a power supply and can make use of free Wi-Fi. Non-alcoholic hot and cold drinks (coffee, tea and a selection of juices) are included when you book a seat in the lounge, and you can also order lunch and dinner from a separate menu.",
                  "InfoNote": null,
                  "ShortItineraryNote": "Take the sea route between the capitals of Western Norway and relax while enjoying the view of the Vestland coast. Instead of many hours behind the wheel or in a cramped bus, you can take it easy while we transport you comfortably and easily to Bergen.",
                  "ItineraryNote": "\u200bDelete as requiredMs Stavangerfjord / MS BergensfjordDeparture Stavanger: 07:00Arrival Bergen: 12:30Departure point Risavika terminal at 07:00 (30 minutes away from Stavanger) \u00a0Shuttle bus to Risavika departs from Stavanger City Terminal Jernbaneveien F at 05:02.",
                  "OptionContent": null,
                  "TravelInformation": null
              },
              "EventType": "CR",
              "SegmentIdentifier": "12140258",
              "TourplanServiceStatus": "Confirmed",
              "Address": "Bergen,Norway5804",
              "Phone": null,
              "Date": "2024-09-01",
              "Pickup_Date": "2024-09-01",
              "puTime": "07:00",
              "puPlace": "Risavika Port - MS StavangerfjordStavanger",
              "Dropoff_Date": "2024-09-01",
              "doTime": "12:30",
              "doPlace": "JekteviksterminalBergen",
              "SCU": "cruise",
              "SCUqty": "1",
              "SequenceNumber": "10",
              "Opt": "SVGCRFJO001CR005",
              "Included": [
                  null,
                  null,
                  "2 x Lounge Seat",
                  null,
                  null,
                  null
              ],
              "TravellerAssignment": {
                  "FullName": [
                      "LindenBrady",
                      "Richard (Grant)Oliver"
                  ]
              },
              "Adults": "2",
              "Children": "0",
              "Infants": "0",
              "RoomConfigs": {
                  "RoomConfig": {
                      "RoomType": "Single",
                      "TravellerAssignment": {
                          "FullName": [
                              "LindenBrady",
                              "Richard (Grant)Oliver"
                          ]
                      }
                  }
              }
          },
          {
              "ServiceLineId": "554067",
              "SegmentProviderName": "Bergen B\u00f8rs Hotel",
              "Name": "Standard room including breakfast",
              "LocationCode": [
                  "Approximate distance to/from Bergen Railway Station:",
                  "BGO"
              ],
              "Description": {
                  "ServiceRemarks": "509039 / \u00a05MFT123768 luggage storage Bergen B\u00f8rs - see email for luggage storage confirmation",
                  "ServiceNote": "\u200bPlease note that you can store your luggage at Bergen B\u00f8rs Hotel from 3rd to 5th September.",
                  "InfoNote": "Bergen B\u00f8rs Hotel is located in the old stock exchange building dating from 1862. The hotel is near Bryggen and the Strandgaten shopping street. Hotel facilities include a Michelin-star restaurant, a bar serving cocktails and a variety of local beers, a fitness centre, a 24-hour front desk and free Wi-Fi throughout the property.",
                  "ShortItineraryNote": "These elegant rooms measure 19-24 sqm in size and are equipped with one double bed or two single beds. Room facilities include a desk, smart TV, Nespresso coffee machine, minibar, telephone, and free Wi-Fi. The modern private bathroom has a shower and hairdryer.",
                  "ItineraryNote": null,
                  "OptionContent": "Priority",
                  "TravelInformation": null
              },
              "EventType": "AC",
              "SegmentIdentifier": "UN56IN",
              "TourplanServiceStatus": "Confirmed",
              "Address": "V\u00e5gsalmenningen 1Bergen,Norway5014",
              "Phone": "+47 55 33 64 00",
              "Date": "2024-09-01",
              "Pickup_Date": "2024-09-01",
              "puTime": null,
              "puPlace": "Bergen",
              "Dropoff_Date": "2024-09-03",
              "doTime": null,
              "doPlace": null,
              "SCU": "nights",
              "SCUqty": "2",
              "SequenceNumber": "20",
              "Opt": "BGOACBBH002AC003A",
              "Included": [
                  null,
                  null,
                  null,
                  null,
                  null,
                  null
              ],
              "TravellerAssignment": {
                  "FullName": [
                      "LindenBrady",
                      "Richard (Grant)Oliver"
                  ]
              },
              "Adults": "2",
              "Children": "0",
              "Infants": "0",
              "RoomConfigs": {
                  "RoomConfig": {
                      "RoomType": "Double",
                      "TravellerAssignment": {
                          "FullName": [
                              "LindenBrady",
                              "Richard (Grant)Oliver"
                          ]
                      }
                  }
              }
          },
          {
              "ServiceLineId": "554068",
              "SegmentProviderName": "Sue Lindelid - Bergen Guide",
              "Name": "Discover Bergen - 3h Private City Tour",
              "LocationCode": [
                  null,
                  "BGO"
              ],
              "Description": {
                  "ServiceRemarks": null,
                  "ServiceNote": "\u200bThierry will be your guide on this tour. His mobile number is: 91846051.",
                  "InfoNote": null,
                  "ShortItineraryNote": "Discover the sights of historic Bergen and enjoy a ride on the funicular to Mt. Fl\u00f8ien from where you can admire the panoramic views of the town from 1050 feet above sea level.Bergen's centre is very compact, with much to see and hear about within a very short walking distance. Stroll around Bryggen, a World Heritage Site, where you will hear of life in times gone by. Hear about life in this area from the founding of Bergen in 1070, through the Middle Ages and World War 2 to the present day. Learn about dried cod fish, Hanseatic merchants, fires, Norwegian resistance fighters and present-day life at the wharf. Pass by the lively waterside Fish Market and explore the Bergen Fortress area, where you will find H\u00e5kons Hall from 1261 and the Rosenkrantz Tower from 1560s, or wander down the old cobblestone alleyways in the heart of Bergen and see typical, quaint Bergen houses and chimney houses while hearing about life in Bergen past and present.Then take a short ride on the funicular railway up Mt Fl\u00f8ien. Enjoy great views, weather permitting, from the funicular and at the summit where you can also find a cafe and cashmere goats in summer. Duration: 3 hoursMeeting point: At your hotel lobby Inclusions: English speaking guide, entry to funicularActivity Level: Light-ModerateAccessible: Yes though some areas have cobblestones",
                  "ItineraryNote": "Your guide will meet you at your hotel in the reception area. Please be ready 10 minutes before the scheduled tour start time",
                  "OptionContent": "3 hours",
                  "TravelInformation": null
              },
              "EventType": "TD",
              "SegmentIdentifier": "5MFT123768 Sue",
              "TourplanServiceStatus": "Confirmed",
              "Address": "Bergen,Norway",
              "Phone": "+47 90 78 59 52",
              "Date": "2024-09-02",
              "Pickup_Date": "2024-09-02",
              "puTime": "10:00",
              "puPlace": "Bergen B\u00f8rs HotelBergen",
              "Dropoff_Date": "2024-09-02",
              "doTime": "13:00",
              "doPlace": "Bergen",
              "SCU": "tour",
              "SCUqty": "1",
              "SequenceNumber": "10",
              "Opt": "BGOTDSLBG01TD001",
              "Included": [
                  null,
                  null,
                  null,
                  "1 x Funicular",
                  null,
                  null
              ],
              "TravellerAssignment": {
                  "FullName": [
                      "LindenBrady",
                      "Richard (Grant)Oliver"
                  ]
              },
              "Adults": "2",
              "Children": "0",
              "Infants": "0",
              "RoomConfigs": {
                  "RoomConfig": {
                      "RoomType": "Single",
                      "TravellerAssignment": {
                          "FullName": [
                              "LindenBrady",
                              "Richard (Grant)Oliver"
                          ]
                      }
                  }
              }
          },
          {
              "ServiceLineId": "554072",
              "SegmentProviderName": "Fjord Tours",
              "Name": "Sognefjord in a Nutshell - Bergen to Bergen (train first)",
              "LocationCode": [
                  null,
                  "BGO"
              ],
              "Description": {
                  "ServiceRemarks": null,
                  "ServiceNote": "\u200b",
                  "InfoNote": null,
                  "ShortItineraryNote": "The Sognefjord, Norway\u2019s longest and deepest fjord, extends more than 200 km inland to the foot of the Jotunheimen mountains. This area is said to be one of the most beautiful travel destinations in the world. The round trip combines a beautiful boat journey on the Sognefjord, with a spectacular train journey on the Fla\u030am Railway. Sognefjord in a nutshell is available as a day trip or with accommodation en route. The tour can run in the period 1 April - 30 Sept.INCLUDED:\u2022 \u00a0 3SEP - Train: Bergen-Myrdal - 08:30 - 10:29 *free seating\u2022 \u00a0 3SEP - The Fla\u030am Railway: Myrdal-Fla\u030am - 10:41 - 11:39 *free seating\u2022 \u00a0 5SEP - Express boat on the Sognefjord: Fla\u030am-Bergen - 15:30 - 20:45 *free seating* Free entrance to the Fla\u030am Railway Museum in Fla\u030amThe exact timing is advised when you receive your travel documents. There is no guide included, and you have to make your own way from hotel to station and change the mode of transport as your travel. The itinerary is one of the most \u2018well-trodden\u2019 in the whole of Norway, and it runs like clockwork, so there is no need to be concerned that you will miss a connection or not find your way.",
                  "ItineraryNote": null,
                  "OptionContent": null,
                  "TravelInformation": null
              },
              "EventType": "RA",
              "SegmentIdentifier": "11KC95",
              "TourplanServiceStatus": "Confirmed",
              "Address": "Str\u00f8mgt. 4Bergen,Norway5015",
              "Phone": "+47 55 55 76 60",
              "Date": "2024-09-03",
              "Pickup_Date": "2024-09-03",
              "puTime": "08:30",
              "puPlace": "Bergen StationBergen",
              "Dropoff_Date": "2024-09-05",
              "doTime": "20:45",
              "doPlace": "Bergen PierBergen Railway Station",
              "SCU": "ticket",
              "SCUqty": "1",
              "SequenceNumber": "5",
              "Opt": "BGORAFJT001SNUBB",
              "Included": [
                  null,
                  null,
                  null,
                  null,
                  null,
                  null
              ],
              "TravellerAssignment": {
                  "FullName": [
                      "LindenBrady",
                      "Richard (Grant)Oliver"
                  ]
              },
              "Adults": "2",
              "Children": "0",
              "Infants": "0",
              "RoomConfigs": {
                  "RoomConfig": {
                      "RoomType": "Single",
                      "TravellerAssignment": {
                          "FullName": [
                              "LindenBrady",
                              "Richard (Grant)Oliver"
                          ]
                      }
                  }
              }
          },
          {
              "ServiceLineId": "554157",
              "SegmentProviderName": "Fretheim Hotel",
              "Name": "Historical room with double bed including breakfast",
              "LocationCode": [
                  "Approximate distance from the train station:",
                  "FLA"
              ],
              "Description": {
                  "ServiceRemarks": null,
                  "ServiceNote": null,
                  "InfoNote": "Fretheim Hotel is the largest hotel in Fl\u00e5m with 122 rooms, most of which face Aurlandsfjord. The history of the hotel goes back to the 1870\u2019s and Fretheim is today a proud member of the Norwegian Historic Hotels & Restaurants. The in-house Restaurant Arven aims to provide the very best of local produce and has menus following the seasons. \u00a0Hotel facilities include a luggage room, laundry service, internet and safe in the reception. The Hotel is surrounded by beautiful gardens.",
                  "ShortItineraryNote": "The Historical Rooms are the signature rooms of the Hotel. They stand out and with details that add that little extra to your stay. The rooms are in the oldest part of the hotel, overlooking the garden and the fjord. Each historic room is different, both in size and design and is furnished with beautiful antique furniture.Room amenities include a king-size double bed, espresso machine, free WIFI, hairdryer, bathrobes and slippers. The private bathrooms are equipped with gilded taps and bathtubs with lion's feet in some rooms. The Historical rooms do not have TV\u2019s.",
                  "ItineraryNote": null,
                  "OptionContent": "Book in Citybreak",
                  "TravelInformation": null
              },
              "EventType": "AC",
              "SegmentIdentifier": "BDOT20",
              "TourplanServiceStatus": "Confirmed",
              "Address": "P.O. Box 83Fl\u00e5m,Norway5742",
              "Phone": null,
              "Date": "2024-09-03",
              "Pickup_Date": "2024-09-03",
              "puTime": null,
              "puPlace": "Fl\u00e5m",
              "Dropoff_Date": "2024-09-05",
              "doTime": null,
              "doPlace": null,
              "SCU": "nights",
              "SCUqty": "2",
              "SequenceNumber": "15",
              "Opt": "FLAACFRET01AC02F",
              "Included": [
                  null,
                  null,
                  null,
                  null,
                  null,
                  null
              ],
              "TravellerAssignment": {
                  "FullName": [
                      "LindenBrady",
                      "Richard (Grant)Oliver"
                  ]
              },
              "Adults": "2",
              "Children": "0",
              "Infants": "0",
              "RoomConfigs": {
                  "RoomConfig": {
                      "RoomType": "Double",
                      "TravellerAssignment": {
                          "FullName": [
                              "LindenBrady",
                              "Richard (Grant)Oliver"
                          ]
                      }
                  }
              }
          },
          {
              "ServiceLineId": "554076",
              "SegmentProviderName": "Norway&apos;s Best AS",
              "Name": "Sightseeing tour to Stegastein Viewpoint",
              "LocationCode": [
                  null,
                  "FLA"
              ],
              "Description": {
                  "ServiceRemarks": null,
                  "ServiceNote": null,
                  "InfoNote": null,
                  "ShortItineraryNote": "Please find your tickets with the travel documents.A popular sightseeing tour with bus from Fl\u00e5m, to the spectacular viewpoint Stegastein, 650 metres above sea level overlooking the fjord and mountains. From Stegastein you get a panorama view of the fjord landscape with plenty of opportunities for taking that unique holiday picture worth sharing.",
                  "ItineraryNote": "Please find your voucher with the travel documents.Departure from Fl\u00e5m is near the Visitor Centre. Please be ready at the meeting point 10 minutes prior to departure. You can access an audio guide for the Stegastein Viewpoint bus tour by scanning the QR code below. The guiding application conveys art, culture, history and other information related to the tour. \u00a0To be able to use the guiding system, you need to download the audio guide app to your mobile device by scanning the QR provided. \u00a0We recommend that you download the application before you board the bus. Please, use headphones while listening to the audio guide out of consideration for your fellow passengers. Headsets are not provided and we kindly ask you to bring your own.",
                  "OptionContent": "Book in Citybreak / Departure from Fl\u00e5m",
                  "TravelInformation": null
              },
              "EventType": "TD",
              "SegmentIdentifier": "DZKH11",
              "TourplanServiceStatus": "Confirmed",
              "Address": "Fl\u00e5m,Norway5742",
              "Phone": "+47 57631400",
              "Date": "2024-09-04",
              "Pickup_Date": "2024-09-04",
              "puTime": "11:00",
              "puPlace": "Fl\u00e5m Visitor Center: Bus Stop CFl\u00e5m",
              "Dropoff_Date": "2024-09-04",
              "doTime": "12:35",
              "doPlace": "Fl\u00e5m Visitor Center: Bus Stop CFl\u00e5m",
              "SCU": "tour",
              "SCUqty": "1",
              "SequenceNumber": "10",
              "Opt": "FLATDFLAMASTD005",
              "Included": [
                  null,
                  null,
                  null,
                  null,
                  null,
                  null
              ],
              "TravellerAssignment": {
                  "FullName": [
                      "LindenBrady",
                      "Richard (Grant)Oliver"
                  ]
              },
              "Adults": "2",
              "Children": "0",
              "Infants": "0",
              "RoomConfigs": {
                  "RoomConfig": {
                      "RoomType": "Single",
                      "TravellerAssignment": {
                          "FullName": [
                              "LindenBrady",
                              "Richard (Grant)Oliver"
                          ]
                      }
                  }
              }
          },
          {
              "ServiceLineId": "555728",
              "SegmentProviderName": "Bergen B\u00f8rs Hotel",
              "Name": "Superior room including breakfast",
              "LocationCode": [
                  "Approximate distance to/from Bergen Railway Station:",
                  "BGO"
              ],
              "Description": {
                  "ServiceRemarks": null,
                  "ServiceNote": null,
                  "InfoNote": "Bergen B\u00f8rs Hotel is located in the old stock exchange building dating from 1862. The hotel is near Bryggen and the Strandgaten shopping street. Hotel facilities include a Michelin-star restaurant, a bar serving cocktails and a variety of local beers, a fitness centre, a 24-hour front desk and free Wi-Fi throughout the property.",
                  "ShortItineraryNote": "The stylish Superior Rooms are 21-26 sqm. They are equipped with a double bed or two single beds. The room also has a desk, smart TV, Nespresso machine, minibar, telephone and free WiFI. The bathroom has a shower and hairdryer.",
                  "ItineraryNote": null,
                  "OptionContent": "Priority",
                  "TravelInformation": null
              },
              "EventType": "AC",
              "SegmentIdentifier": "DQ60EG",
              "TourplanServiceStatus": "Confirmed",
              "Address": "V\u00e5gsalmenningen 1Bergen,Norway5014",
              "Phone": "+47 55 33 64 00",
              "Date": "2024-09-05",
              "Pickup_Date": "2024-09-05",
              "puTime": null,
              "puPlace": "Bergen",
              "Dropoff_Date": "2024-09-06",
              "doTime": null,
              "doPlace": null,
              "SCU": "night",
              "SCUqty": "1",
              "SequenceNumber": "11",
              "Opt": "BGOACBBH002AC01B",
              "Included": [
                  null,
                  null,
                  null,
                  null,
                  null,
                  null
              ],
              "TravellerAssignment": {
                  "FullName": [
                      "LindenBrady",
                      "Richard (Grant)Oliver"
                  ]
              },
              "Adults": "2",
              "Children": "0",
              "Infants": "0",
              "RoomConfigs": {
                  "RoomConfig": {
                      "RoomType": "Double",
                      "TravellerAssignment": {
                          "FullName": [
                              "LindenBrady",
                              "Richard (Grant)Oliver"
                          ]
                      }
                  }
              }
          },
          {
              "ServiceLineId": "554079",
              "SegmentProviderName": "50 Degrees North",
              "Name": "Own Arrangements",
              "LocationCode": [
                  null,
                  "AUS"
              ],
              "Description": {
                  "ServiceRemarks": null,
                  "ServiceNote": null,
                  "InfoNote": null,
                  "ShortItineraryNote": "Hurtigruten - \u00a0Richard With(Not booked by 50DN)",
                  "ItineraryNote": null,
                  "OptionContent": null,
                  "TravelInformation": null
              },
              "EventType": "OT",
              "SegmentIdentifier": null,
              "TourplanServiceStatus": "Pending",
              "Address": "Lillehammer,Norway",
              "Phone": null,
              "Date": "2024-09-06",
              "Pickup_Date": "2024-09-06",
              "puTime": null,
              "puPlace": "Australia",
              "Dropoff_Date": "2024-09-06",
              "doTime": null,
              "doPlace": null,
              "SCU": "tour",
              "SCUqty": "1",
              "SequenceNumber": "10",
              "Opt": "AUSOT50DN01ARNK",
              "Included": [
                  null,
                  null,
                  null,
                  null,
                  null,
                  null
              ],
              "TravellerAssignment": {
                  "FullName": [
                      "LindenBrady",
                      "Richard (Grant)Oliver"
                  ]
              },
              "Adults": "2",
              "Children": "0",
              "Infants": "0",
              "RoomConfigs": {
                  "RoomConfig": {
                      "RoomType": "Single",
                      "TravellerAssignment": {
                          "FullName": [
                              "LindenBrady",
                              "Richard (Grant)Oliver"
                          ]
                      }
                  }
              }
          },
          {
              "ServiceLineId": "554080",
              "SegmentProviderName": "Kirkenes Snowhotel",
              "Name": "Shuttle Transfer from port to Kirkenes Snowhotel",
              "LocationCode": [
                  null,
                  "KKN"
              ],
              "Description": {
                  "ServiceRemarks": null,
                  "ServiceNote": null,
                  "InfoNote": "Snowhotel Kirkenes is situated 8km outside Kirkenes in the secluded wilds of Northern Norway. \u00a0It is located in idyllic surroundings, with the forest and mountains at the back, and the arctic fjord in front. The Hotel is built from snow and Ice and offers unique accommodation all year round. Experience cold accommodation in a room built out of ice or snow or regular accommodation in the Gamme Northern Light Cabins. A range of fun arctic activities are on offer each season. The Hotel has its own Husky farm comprising of 180 Alaskan huskies.",
                  "ShortItineraryNote": "Your driver will meet you holding a name sign. Luggage: 1 suitcase and 1 carry on per person",
                  "ItineraryNote": "The staff from Snowhotel will have a sign with SNOWHOTEL OVERNIGHT, and a snowhotel bus. They can not necessarily wait very long so please make your way out promptly.",
                  "OptionContent": "Book in Citybreak (Norwegian Travel company)",
                  "TravelInformation": null
              },
              "EventType": "ST",
              "SegmentIdentifier": "CNTD42",
              "TourplanServiceStatus": "Confirmed",
              "Address": "Sandnesdalen 14Bj\u00f8rnevatn,Norway9910",
              "Phone": "+47 78 97 05 40",
              "Date": "2024-09-12",
              "Pickup_Date": "2024-09-12",
              "puTime": "09:00",
              "puPlace": "Hurtigruten - \u00a0Richard WithKirkenes",
              "Dropoff_Date": "2024-09-12",
              "doTime": "09:30",
              "doPlace": null,
              "SCU": "trf",
              "SCUqty": "1",
              "SequenceNumber": "10",
              "Opt": "KKNSTRAD001ST002",
              "Included": [
                  null,
                  null,
                  null,
                  null,
                  null,
                  null
              ],
              "TravellerAssignment": {
                  "FullName": [
                      "LindenBrady",
                      "Richard (Grant)Oliver"
                  ]
              },
              "Adults": "2",
              "Children": "0",
              "Infants": "0",
              "RoomConfigs": {
                  "RoomConfig": {
                      "RoomType": "Single",
                      "TravellerAssignment": {
                          "FullName": [
                              "LindenBrady",
                              "Richard (Grant)Oliver"
                          ]
                      }
                  }
              }
          },
          {
              "ServiceLineId": "554081",
              "SegmentProviderName": "Kirkenes Snowhotel",
              "Name": "Summer &amp; Autumn King Crab Fishing Safari",
              "LocationCode": [
                  null,
                  "KKN"
              ],
              "Description": {
                  "ServiceRemarks": null,
                  "ServiceNote": null,
                  "InfoNote": "Snowhotel Kirkenes is situated 8km outside Kirkenes in the secluded wilds of Northern Norway. \u00a0It is located in idyllic surroundings, with the forest and mountains at the back, and the arctic fjord in front. The Hotel is built from snow and Ice and offers unique accommodation all year round. Experience cold accommodation in a room built out of ice or snow or regular accommodation in the Gamme Northern Light Cabins. A range of fun arctic activities are on offer each season. The Hotel has its own Husky farm comprising of 180 Alaskan huskies.",
                  "ShortItineraryNote": "Please be at the hotel reception in good time before departure.Duration: Ca 3hrsIncludes: Warm, protective clothing, security instruction and a large mealCome and enjoy a fantastic day on the water. You will be shown how to catch, prepare and most importantly eat these giant King Crabs. An experienced fisherman will take you for an unforgettable King Crab Fishing tour on a brand new RIB boat where you will cruise along the fjord and the Barents Sea to find the right place to anchor. You will be hands on deck to help pull up the King Crab cages from the depths. Your guide will take you back and serve your catch in a rustic restaurant by the fjord, local Norwegian style. You may eat as many King Crabs as you wish, fresh from the Arctic sea.",
                  "ItineraryNote": "\u200bPlease be ready in the hotel lobby in good time before departure.",
                  "OptionContent": "May-Nov, Ribboat, Citybreak (Norwegian Travel company)",
                  "TravelInformation": null
              },
              "EventType": "TD",
              "SegmentIdentifier": "CNTD42",
              "TourplanServiceStatus": "Confirmed",
              "Address": "Sandnesdalen 14Bj\u00f8rnevatn,Norway9910",
              "Phone": "+47 78 97 05 40",
              "Date": "2024-09-12",
              "Pickup_Date": "2024-09-12",
              "puTime": "13:00",
              "puPlace": "Kirkenes",
              "Dropoff_Date": "2024-09-12",
              "doTime": "16:00",
              "doPlace": "Kirkenes",
              "SCU": "tour",
              "SCUqty": "1",
              "SequenceNumber": "20",
              "Opt": "KKNTDRAD001TD003",
              "Included": [
                  null,
                  null,
                  null,
                  null,
                  null,
                  null
              ],
              "TravellerAssignment": {
                  "FullName": [
                      "LindenBrady",
                      "Richard (Grant)Oliver"
                  ]
              },
              "Adults": "2",
              "Children": "0",
              "Infants": "0",
              "RoomConfigs": {
                  "RoomConfig": {
                      "RoomType": "Single",
                      "TravellerAssignment": {
                          "FullName": [
                              "LindenBrady",
                              "Richard (Grant)Oliver"
                          ]
                      }
                  }
              }
          },
          {
              "ServiceLineId": "554082",
              "SegmentProviderName": "Kirkenes Snowhotel",
              "Name": "Gamme Cabin including dinner &amp; breakfast",
              "LocationCode": [
                  null,
                  "KKN"
              ],
              "Description": {
                  "ServiceRemarks": null,
                  "ServiceNote": null,
                  "InfoNote": "Snowhotel Kirkenes is situated 8km outside Kirkenes in the secluded wilds of Northern Norway. \u00a0It is located in idyllic surroundings, with the forest and mountains at the back, and the arctic fjord in front. The Hotel is built from snow and Ice and offers unique accommodation all year round. Experience cold accommodation in a room built out of ice or snow or regular accommodation in the Gamme Northern Light Cabins. A range of fun arctic activities are on offer each season. The Hotel has its own Husky farm comprising of 180 Alaskan huskies.",
                  "ShortItineraryNote": "The cabins are inspired by the traditional hunting and fishing hut, \u201cgamme\u201d, that you find in the wilderness of Lapland - the Sami areas of the Arctic. The huts at the Snowhotel are developed along with architects from Switzerland and are equipped with air conditioning, underfloor heating, natural tiles and an exclusive bathroom with a separate aurora wall. All Gamme cabins have two separate beds that can be pushed together if required.",
                  "ItineraryNote": null,
                  "OptionContent": "Book in Citybreak (Norwegian Travel company)",
                  "TravelInformation": null
              },
              "EventType": "AC",
              "SegmentIdentifier": "CNTD42",
              "TourplanServiceStatus": "Confirmed",
              "Address": "Sandnesdalen 14Bj\u00f8rnevatn,Norway9910",
              "Phone": "+47 78 97 05 40",
              "Date": "2024-09-12",
              "Pickup_Date": "2024-09-12",
              "puTime": null,
              "puPlace": "Kirkenes",
              "Dropoff_Date": "2024-09-13",
              "doTime": null,
              "doPlace": null,
              "SCU": "night",
              "SCUqty": "1",
              "SequenceNumber": "30",
              "Opt": "KKNACRAD001GAMME1",
              "Included": [
                  null,
                  null,
                  null,
                  null,
                  null,
                  null
              ],
              "TravellerAssignment": {
                  "FullName": [
                      "LindenBrady",
                      "Richard (Grant)Oliver"
                  ]
              },
              "Adults": "2",
              "Children": "0",
              "Infants": "0",
              "RoomConfigs": {
                  "RoomConfig": {
                      "RoomType": "Double",
                      "TravellerAssignment": {
                          "FullName": [
                              "LindenBrady",
                              "Richard (Grant)Oliver"
                          ]
                      }
                  }
              }
          },
          {
              "ServiceLineId": "567390",
              "SegmentProviderName": "Kirkenes Taxi As",
              "Name": "Private transfer Snowhotel to Kirkenes Airport",
              "LocationCode": [
                  null,
                  "KKN"
              ],
              "Description": {
                  "ServiceRemarks": "WF997, departure @15:25",
                  "ServiceNote": "\u200bPlease be ready at the hotel reception 10 minutes before departure.",
                  "InfoNote": null,
                  "ShortItineraryNote": null,
                  "ItineraryNote": null,
                  "OptionContent": "150 NOK bank fee on top of charge, MAX 16 PAX",
                  "TravelInformation": null
              },
              "EventType": "PT",
              "SegmentIdentifier": "03474",
              "TourplanServiceStatus": "Confirmed",
              "Address": "Kirkenes,Norway",
              "Phone": "+47 78 99 13 97",
              "Date": "2024-09-13",
              "Pickup_Date": "2024-09-13",
              "puTime": "13:25",
              "puPlace": "Kirkenes",
              "Dropoff_Date": "2024-09-13",
              "doTime": "13:45",
              "doPlace": "Kirkenes",
              "SCU": "car",
              "SCUqty": "1",
              "SequenceNumber": "15",
              "Opt": "KKNPTKKT001TD006",
              "Included": [
                  "1 x Invoice fee",
                  null,
                  null,
                  null,
                  null,
                  null
              ],
              "TravellerAssignment": {
                  "FullName": [
                      "LindenBrady",
                      "Richard (Grant)Oliver"
                  ]
              },
              "Adults": "2",
              "Children": "0",
              "Infants": "0",
              "RoomConfigs": {
                  "RoomConfig": {
                      "RoomType": "Single",
                      "TravellerAssignment": {
                          "FullName": [
                              "LindenBrady",
                              "Richard (Grant)Oliver"
                          ]
                      }
                  }
              }
          },
          {
              "ServiceLineId": "554108",
              "SegmentProviderName": "50 Degrees North",
              "Name": "Agent to arrange flights",
              "LocationCode": [
                  null,
                  "AUS"
              ],
              "Description": {
                  "ServiceRemarks": null,
                  "ServiceNote": "\u200bYour flights today (not booked by 50DN):WF997: KKN - TOS \u00a015:25 \u00a016:40 AY946: TOS - HEL 18:05 \u00a021:05",
                  "InfoNote": null,
                  "ShortItineraryNote": null,
                  "ItineraryNote": null,
                  "OptionContent": null,
                  "TravelInformation": null
              },
              "EventType": "OT",
              "SegmentIdentifier": null,
              "TourplanServiceStatus": "Pending",
              "Address": "Lillehammer,Norway",
              "Phone": null,
              "Date": "2024-09-13",
              "Pickup_Date": "2024-09-13",
              "puTime": null,
              "puPlace": "Australia",
              "Dropoff_Date": "2024-09-13",
              "doTime": null,
              "doPlace": null,
              "SCU": "tour",
              "SCUqty": "1",
              "SequenceNumber": "20",
              "Opt": "AUSOT50DN01ATAF",
              "Included": [
                  null,
                  null,
                  null,
                  null,
                  null,
                  null
              ],
              "TravellerAssignment": {
                  "FullName": [
                      "LindenBrady",
                      "Richard (Grant)Oliver"
                  ]
              },
              "Adults": "2",
              "Children": "0",
              "Infants": "0",
              "RoomConfigs": {
                  "RoomConfig": {
                      "RoomType": "Single",
                      "TravellerAssignment": {
                          "FullName": [
                              "LindenBrady",
                              "Richard (Grant)Oliver"
                          ]
                      }
                  }
              }
          },
          {
              "ServiceLineId": "554110",
              "SegmentProviderName": "Taksikuljetus Helsinki",
              "Name": "Transfer from hotel to airport",
              "LocationCode": [
                  null,
                  "HEL"
              ],
              "Description": {
                  "ServiceRemarks": "AY 946 arriving in HEL A@21:05",
                  "ServiceNote": null,
                  "InfoNote": null,
                  "ShortItineraryNote": "\u200bTransfers include one suitcase per person. Any additional luggage must be pre-booked.",
                  "ItineraryNote": "Please meet your driver in front of the hotel.",
                  "OptionContent": "Max 50 pax, PRIORITY",
                  "TravelInformation": "Emergency number from 16:30 on Fridays until 08:00 on Mondays is +358 50 521 6841 (otherwise office number)"
              },
              "EventType": "PT",
              "SegmentIdentifier": "163079",
              "TourplanServiceStatus": "Confirmed",
              "Address": "Valuraudantie 21Helsinki,Finland00700",
              "Phone": "+358 9 350 5070",
              "Date": "2024-09-13",
              "Pickup_Date": "2024-09-13",
              "puTime": "21:05",
              "puPlace": "- AY946Helsinki",
              "Dropoff_Date": "2024-09-13",
              "doTime": null,
              "doPlace": "Hotel HavenHelsinki Airport",
              "SCU": "car",
              "SCUqty": "1",
              "SequenceNumber": "25",
              "Opt": "HELPTTAK001PT002",
              "Included": [
                  null,
                  null,
                  null,
                  null,
                  null,
                  null
              ],
              "TravellerAssignment": {
                  "FullName": [
                      "LindenBrady",
                      "Richard (Grant)Oliver"
                  ]
              },
              "Adults": "2",
              "Children": "0",
              "Infants": "0",
              "RoomConfigs": {
                  "RoomConfig": {
                      "RoomType": "Single",
                      "TravellerAssignment": {
                          "FullName": [
                              "LindenBrady",
                              "Richard (Grant)Oliver"
                          ]
                      }
                  }
              }
          },
          {
              "ServiceLineId": "555085",
              "SegmentProviderName": "Hotel Haven",
              "Name": "Superior room including breakfast",
              "LocationCode": [
                  "Distance from Helsinki Central Station:",
                  "HEL"
              ],
              "Description": {
                  "ServiceRemarks": null,
                  "ServiceNote": null,
                  "InfoNote": "Hotel Haven is designed to provide homely warmth, exclusive comfort and high-quality services for the discerning guest. Whatever your reason for travelling, boutique Hotel Haven is your ideal base thanks to its central location. In the elegant yet cosy foyer, guests can relax by the fireplace and browse leisurely through the daily papers. Bar Haven serves both hot beverages and relaxing drinks in the evening.",
                  "ShortItineraryNote": "The superior luxury room is a cosy place to relax. Enjoy, watch films, listen to your favourite music and have a good night\u2019s sleep in the wonderfully comfortable bed. Rooms measure 25 to 30 square-meters in size and amenities include WiFi, LCD flatscreen TV, air conditioning, safe-deposit box, ironing facilities, telephone, work desk and chair, minibar and bathroom with shower or bathtub.",
                  "ItineraryNote": null,
                  "OptionContent": "Online booking / extra bed for child only",
                  "TravelInformation": null
              },
              "EventType": "AC",
              "SegmentIdentifier": "35617SE087865",
              "TourplanServiceStatus": "Confirmed",
              "Address": "Unioininkatu 17Helsinki,Finland",
              "Phone": null,
              "Date": "2024-09-13",
              "Pickup_Date": "2024-09-13",
              "puTime": null,
              "puPlace": "Helsinki",
              "Dropoff_Date": "2024-09-16",
              "doTime": null,
              "doPlace": null,
              "SCU": "nights",
              "SCUqty": "3",
              "SequenceNumber": "30",
              "Opt": "HELACHAV001AC01A",
              "Included": [
                  null,
                  null,
                  null,
                  null,
                  null,
                  null
              ],
              "TravellerAssignment": {
                  "FullName": [
                      "LindenBrady",
                      "Richard (Grant)Oliver"
                  ]
              },
              "Adults": "2",
              "Children": "0",
              "Infants": "0",
              "RoomConfigs": {
                  "RoomConfig": {
                      "RoomType": "Double",
                      "TravellerAssignment": {
                          "FullName": [
                              "LindenBrady",
                              "Richard (Grant)Oliver"
                          ]
                      }
                  }
              }
          },
          {
              "ServiceLineId": "554118",
              "SegmentProviderName": "Leea Lappalainen - Helsinki Guide",
              "Name": "Explore Helsinki &amp; Suomenlinna - Private Tour",
              "LocationCode": [
                  null,
                  "HEL"
              ],
              "Description": {
                  "ServiceRemarks": null,
                  "ServiceNote": "\u200bLeila will be your guide on this tour. Her phone is: +358503510693",
                  "InfoNote": "\u200bThe name of your guide will be decided at a later date. If you need to get in touch with your guide in advance of the tour, please ring Leea Lappalainen ph: +358 40 749 0304",
                  "ShortItineraryNote": "Explore the sights of Helsinki and take the ferry to nearby Suomenlinna island with a private guide.Enjoy the sights of Helsinki with a private guide, who will introduce you to the charming Finnish capital. Visit the iconic Senate Square and admire its Lutheran Cathedral perched above, then head to bustling Market Square and taste some local delicacies at the Old Market Hall. Stroll the scenic Esplanade to the unique Kampii Chapel of Silence, and admire the impressive modern architecture of the Oodi Library and Kansalaistori.Then, take a 15-minute ferry ride to Suomenlinna Sea Fortress, part of Unesco\u2019s Heritage since 1991. Suomenlinna Sea Fortress is a well-preserved and remarkable example of military architecture from the 18th century. Its bastions have defended the coast of Finland during three different nations: Sweden in the 18th century, Russia in the 19th century and Finland since 1917. To explore the tunnels and walls of the old fortress offer a unique experience for everyone in the family. We will also explore the main courtyard and world\u2019s oldest dry dock still in use, and enjoy a walk through Piper\u2019s park to the Russian sandbanks. A visit to Ehrensv\u00e4rd museum will be included when museum is open. Suomenlinna today is a home for over 800 people and a popular destination for local and foreign visitors.Meeting Point: Hotel or in front of the Statue of Alexander II in Senate SquareDuration: 5 Hours Inclusions: Private guide, Public transportation (ferry), Market tastingsExclusions: LunchActivity Level: ModerateAccessible: No",
                  "ItineraryNote": "\u200bPlease meet your guide at your hotel reception in good time. If you need to get in touch with your guide, please ring Leea Lappalainen ph: +358 40 749 0304",
                  "OptionContent": "5 hours - PRIORITY",
                  "TravelInformation": null
              },
              "EventType": "TD",
              "SegmentIdentifier": "LL/140924/1000/SUO/HAV",
              "TourplanServiceStatus": "Confirmed",
              "Address": "Helsinki,Finland",
              "Phone": "+358 40 7490304",
              "Date": "2024-09-14",
              "Pickup_Date": "2024-09-14",
              "puTime": "10:00",
              "puPlace": "Hotel HavenHelsinki",
              "Dropoff_Date": "2024-09-14",
              "doTime": "15:00",
              "doPlace": "Helsinki",
              "SCU": "tour",
              "SCUqty": "1",
              "SequenceNumber": "10",
              "Opt": "HELTDLLHEL1TD011",
              "Included": [
                  "1 x Tasting",
                  null,
                  null,
                  null,
                  null,
                  null
              ],
              "TravellerAssignment": {
                  "FullName": [
                      "LindenBrady",
                      "Richard (Grant)Oliver"
                  ]
              },
              "Adults": "2",
              "Children": "0",
              "Infants": "0",
              "RoomConfigs": {
                  "RoomConfig": {
                      "RoomType": "Single",
                      "TravellerAssignment": {
                          "FullName": [
                              "LindenBrady",
                              "Richard (Grant)Oliver"
                          ]
                      }
                  }
              }
          },
          {
              "ServiceLineId": "554119",
              "SegmentProviderName": "Tallink Silja Line",
              "Name": "Comfort Class one way Helsinki to Tallinn",
              "LocationCode": [
                  null,
                  "HEL"
              ],
              "Description": {
                  "ServiceRemarks": "Ms My Star",
                  "ServiceNote": null,
                  "InfoNote": null,
                  "ShortItineraryNote": "Please find your booking confirmation with the travel documents.How to get to the West Terminal 2:https://maps.app.goo.gl/qVAu9JTUnhvRzA1KA Star Comfort Class is an economical way to travel with more comfort and service than in Star Class. Have a seat in a comfortable separate area with extra services, including a choice of snacks and non-alcoholic drinks, newspapers, WIFI and power outlet. Comfort class is located in Sunset Bar (deck 9).",
                  "ItineraryNote": "Helsinki West harbour 1 (MS Europa)Address: West Harbor 1, Tyynenmerenkatu 8, 00220, HelsinkiOpen: Mon 06.30-19.00, Tue-Sun 07.30-19.00Check-in is open 16:00 - 18:30Helsinki West harbour 2 (MS Star & MS Megastar)Address: West Harbor 2, Tyynenmerenkatu 14, 00220, HelsinkiOpen: Mon, Wed-Sun 06.00-22.30, Tue 06.00-23.30NOTE: Please be at the terminal 1 hour before departure. Check-in for passengers without a vehicle ends 30 min and for passengers with a vehicle 1 h before the departure time. Access to the ship in Helsinki begins 40 minutes before departure and ends 20 min before the marked departure time.HOW TO GET TO THE TERMINALBy public transportation:\u2022 \u00a0Tram 7 route:East-Pasila - railway station - Kamppi - West terminal.There are tram stops in front of both terminal buildings.\u2022 \u00a0Taxi cost from central Helsinki between 10-20 Euros.Please find your voucher with the travel documents. Please carry your passports with you as they may be randomly checked.",
                  "OptionContent": "Deckspace only (no cabin)",
                  "TravelInformation": null
              },
              "EventType": "CR",
              "SegmentIdentifier": "71247067",
              "TourplanServiceStatus": "Confirmed",
              "Address": "P.O.Box 43Espoo,Finland02151",
              "Phone": null,
              "Date": "2024-09-16",
              "Pickup_Date": "2024-09-16",
              "puTime": "10:30",
              "puPlace": "West Harbour terminal 2Helsinki",
              "Dropoff_Date": "2024-09-16",
              "doTime": "12:30",
              "doPlace": "D-TerminalTallinn",
              "SCU": "cruise",
              "SCUqty": "1",
              "SequenceNumber": "10",
              "Opt": "HELCRSIL001CR010",
              "Included": [
                  null,
                  null,
                  null,
                  null,
                  null,
                  null
              ],
              "TravellerAssignment": {
                  "FullName": [
                      "LindenBrady",
                      "Richard (Grant)Oliver"
                  ]
              },
              "Adults": "2",
              "Children": "0",
              "Infants": "0",
              "RoomConfigs": {
                  "RoomConfig": {
                      "RoomType": "Single",
                      "TravellerAssignment": {
                          "FullName": [
                              "LindenBrady",
                              "Richard (Grant)Oliver"
                          ]
                      }
                  }
              }
          },
          {
              "ServiceLineId": "554122",
              "SegmentProviderName": "Forus Takso",
              "Name": "Private transfer port to hotel (MB E-class)",
              "LocationCode": [
                  null,
                  "TLL"
              ],
              "Description": {
                  "ServiceRemarks": null,
                  "ServiceNote": "\u200bYour driver will be waiting for you at the terminal with a name sign.",
                  "InfoNote": null,
                  "ShortItineraryNote": null,
                  "ItineraryNote": "\u200b\u200bTransfers include one suitcase per person and hand luggage. Any additional luggage must be pre-booked. Transfer for 1-3 guests in MB E-class. For any larger groups, transfer in Minivan or Sprinter.",
                  "OptionContent": "Priority",
                  "TravelInformation": null
              },
              "EventType": "PT",
              "SegmentIdentifier": "5MFT123768 Henri",
              "TourplanServiceStatus": "Confirmed",
              "Address": "Kadaka tee 63Tallinn,Estonia12915",
              "Phone": "+372 6 555 555",
              "Date": "2024-09-16",
              "Pickup_Date": "2024-09-16",
              "puTime": "12:30",
              "puPlace": "Tallink TerminalTallinn",
              "Dropoff_Date": "2024-09-16",
              "doTime": null,
              "doPlace": "Hotel TelegraafHotel",
              "SCU": "car",
              "SCUqty": "1",
              "SequenceNumber": "20",
              "Opt": "TLLPTTLP001PT003",
              "Included": [
                  null,
                  null,
                  null,
                  null,
                  null,
                  null
              ],
              "TravellerAssignment": {
                  "FullName": [
                      "LindenBrady",
                      "Richard (Grant)Oliver"
                  ]
              },
              "Adults": "2",
              "Children": "0",
              "Infants": "0",
              "RoomConfigs": {
                  "RoomConfig": {
                      "RoomType": "Single",
                      "TravellerAssignment": {
                          "FullName": [
                              "LindenBrady",
                              "Richard (Grant)Oliver"
                          ]
                      }
                  }
              }
          },
          {
              "ServiceLineId": "555690",
              "SegmentProviderName": "Hotel Telegraaf",
              "Name": "Superior room including breakfast",
              "LocationCode": [
                  null,
                  "TLL"
              ],
              "Description": {
                  "ServiceRemarks": null,
                  "ServiceNote": null,
                  "InfoNote": "This 5* hotel is located in the heart of Tallinn's medieval old town, Town Hall Square, Alexander Nevsky Cathedral and many of Tallinn's other sights are within easy walking distance.",
                  "ShortItineraryNote": null,
                  "ItineraryNote": null,
                  "OptionContent": null,
                  "TravelInformation": null
              },
              "EventType": "AC",
              "SegmentIdentifier": "72155942",
              "TourplanServiceStatus": "Confirmed",
              "Address": "Vene 9Tallinn,Estonia10123",
              "Phone": "+372 6 000 603",
              "Date": "2024-09-16",
              "Pickup_Date": "2024-09-16",
              "puTime": null,
              "puPlace": "Tallinn",
              "Dropoff_Date": "2024-09-18",
              "doTime": null,
              "doPlace": null,
              "SCU": "nights",
              "SCUqty": "2",
              "SequenceNumber": "35",
              "Opt": "TLLACHTEL01AC01B",
              "Included": [
                  null,
                  null,
                  null,
                  null,
                  null,
                  null
              ],
              "TravellerAssignment": {
                  "FullName": [
                      "LindenBrady",
                      "Richard (Grant)Oliver"
                  ]
              },
              "Adults": "2",
              "Children": "0",
              "Infants": "0",
              "RoomConfigs": {
                  "RoomConfig": {
                      "RoomType": "Double",
                      "TravellerAssignment": {
                          "FullName": [
                              "LindenBrady",
                              "Richard (Grant)Oliver"
                          ]
                      }
                  }
              }
          },
          {
              "ServiceLineId": "554138",
              "SegmentProviderName": "Jana Kilter - Tallinn City Guide",
              "Name": "Discover Tallin - Guided Walking Tour",
              "LocationCode": [
                  null,
                  "TLL"
              ],
              "Description": {
                  "ServiceRemarks": null,
                  "ServiceNote": null,
                  "InfoNote": null,
                  "ShortItineraryNote": "Discover the sights and stories of Tallinn's beautiful Old Town and beyond on a 3-hour walking tour with a private guide. Explore the most interesting sights of the medieval Old Town, as well as some of Tallinn's modern architecture.The excursion will start with a brief history of Estonia and Tallinn as you enter one of the best-preserved Hanseatic towns in the world. In the Upper Old Town, you can admire Alexander Nevsky Cathedral - the largest Orthodox church in the city - as well as the Houses of the Estonian Parliament and one of the oldest churches in Estonia, the Dome Church. Experience the panoramic views from Toompea Hills over the Lower Town and the rest of the city of Tallinn.In the Lower Old Town, you will hear stories about people who lived here in the past and also about present-day life in Estonia. Admire the Gothic Town Hall, Town Hall Square and the Town Council Pharmacy, one of the oldest continuously functioning pharmacy's in Europe. Also see old merchant houses and St. Catherine's Passage, the most picturesque of the Old Town's lanes.We will leave the Old Town and continue to the Rotermann Quarter, which will give you a true taste of 21st-century Tallinn. Here, the old industrial buildings have been given new functions and a modern look. Duration: 3 hoursInclusions: Private guideExclusions: Optional entry feesActivity Level: ModerateAccessible: This tour is not suitable for those with limited mobility",
                  "ItineraryNote": "\u200bPlease be ready at the Hotel lobby 10 minutes before departure.",
                  "OptionContent": "PRIORITY - 3 hours",
                  "TravelInformation": null
              },
              "EventType": "TD",
              "SegmentIdentifier": "5MFT123768/jana",
              "TourplanServiceStatus": "Confirmed",
              "Address": "Tallin,Estonia",
              "Phone": "+372 5226461",
              "Date": "2024-09-17",
              "Pickup_Date": "2024-09-17",
              "puTime": "10:00",
              "puPlace": "Hotel TelegraafTallinn",
              "Dropoff_Date": "2024-09-17",
              "doTime": "13:00",
              "doPlace": "Tallin",
              "SCU": "tour",
              "SCUqty": "1",
              "SequenceNumber": "10",
              "Opt": "TLLTDJANAKITD001",
              "Included": [
                  null,
                  null,
                  null,
                  null,
                  null,
                  null
              ],
              "TravellerAssignment": {
                  "FullName": [
                      "LindenBrady",
                      "Richard (Grant)Oliver"
                  ]
              },
              "Adults": "2",
              "Children": "0",
              "Infants": "0",
              "RoomConfigs": {
                  "RoomConfig": {
                      "RoomType": "Single",
                      "TravellerAssignment": {
                          "FullName": [
                              "LindenBrady",
                              "Richard (Grant)Oliver"
                          ]
                      }
                  }
              }
          },
          {
              "ServiceLineId": "555086",
              "SegmentProviderName": "Forus Takso",
              "Name": "Private transfer hotel to station (MB E-Class)",
              "LocationCode": [
                  null,
                  "TLL"
              ],
              "Description": {
                  "ServiceRemarks": "Bus to Riga leaving at 11:00am",
                  "ServiceNote": null,
                  "InfoNote": null,
                  "ShortItineraryNote": null,
                  "ItineraryNote": "\u200b\u200bTransfers include one suitcase per person and hand luggage. Any additional luggage must be pre-booked. Transfer for 1-3 guests in MB E-class. For any larger groups, transfer in Minivan or Sprinter.",
                  "OptionContent": "Priority",
                  "TravelInformation": null
              },
              "EventType": "PT",
              "SegmentIdentifier": "5MFT123768 Henri",
              "TourplanServiceStatus": "Confirmed",
              "Address": "Kadaka tee 63Tallinn,Estonia12915",
              "Phone": "+372 6 555 555",
              "Date": "2024-09-18",
              "Pickup_Date": "2024-09-18",
              "puTime": "10:15",
              "puPlace": "Hotel TelegraafTallinn",
              "Dropoff_Date": "2024-09-18",
              "doTime": "10:30",
              "doPlace": "Tallinn Coach StationStation",
              "SCU": "car",
              "SCUqty": "1",
              "SequenceNumber": "10",
              "Opt": "TLLPTTLP001PT004",
              "Included": [
                  null,
                  null,
                  null,
                  null,
                  null,
                  null
              ],
              "TravellerAssignment": {
                  "FullName": [
                      "LindenBrady",
                      "Richard (Grant)Oliver"
                  ]
              },
              "Adults": "2",
              "Children": "0",
              "Infants": "0",
              "RoomConfigs": {
                  "RoomConfig": {
                      "RoomType": "Single",
                      "TravellerAssignment": {
                          "FullName": [
                              "LindenBrady",
                              "Richard (Grant)Oliver"
                          ]
                      }
                  }
              }
          },
          {
              "ServiceLineId": "555087",
              "SegmentProviderName": "Lux Express",
              "Name": "Express coach Tallinn - Riga (one way)",
              "LocationCode": [
                  null,
                  "TLL"
              ],
              "Description": {
                  "ServiceRemarks": null,
                  "ServiceNote": "Please find your tickets with the travel documents.Schedule:\u200b11:00 Tallinn Coach Station11:20 Vana P\u00e4\u00e4sk\u00fcla12:50 Parnu Coach Station15:25 Riga Coach StationSeat reservation: 31, 32",
                  "InfoNote": "\u200b",
                  "ShortItineraryNote": null,
                  "ItineraryNote": "\u200bWhile boarding:\u2023 please present a printed or electronic ticket (QR code) to our personnel\u2023 using the seat number indicated on your ticket is mandatory\u2023 travelling international routes, present your passport or ID-card of traveller nationality\u2023 onboarding starts 15 minutes before departure time\u2023 coaches will depart on time, please be early to the platform",
                  "OptionContent": "Book online, online public rates",
                  "TravelInformation": null
              },
              "EventType": "BU",
              "SegmentIdentifier": "240722790379 / 240722925168",
              "TourplanServiceStatus": "Confirmed",
              "Address": "Lastekodu 46Tallinn,Estonia",
              "Phone": "+372 680 0909",
              "Date": "2024-09-18",
              "Pickup_Date": "2024-09-18",
              "puTime": "11:00",
              "puPlace": "Bus line 14 - Tallinn Coach Station - Platform 8Tallinn",
              "Dropoff_Date": "2024-09-18",
              "doTime": "15:25",
              "doPlace": "Riga Coach StationRiga",
              "SCU": "ticket",
              "SCUqty": "1",
              "SequenceNumber": "20",
              "Opt": "TLLBULUX001BUS002",
              "Included": [
                  null,
                  null,
                  null,
                  null,
                  null,
                  null
              ],
              "TravellerAssignment": {
                  "FullName": [
                      "LindenBrady",
                      "Richard (Grant)Oliver"
                  ]
              },
              "Adults": "2",
              "Children": "0",
              "Infants": "0",
              "RoomConfigs": {
                  "RoomConfig": {
                      "RoomType": "Single",
                      "TravellerAssignment": {
                          "FullName": [
                              "LindenBrady",
                              "Richard (Grant)Oliver"
                          ]
                      }
                  }
              }
          },
          {
              "ServiceLineId": "555088",
              "SegmentProviderName": "Ax Group Ltd",
              "Name": "Private transfer from bus station to hotel (MB E-class)",
              "LocationCode": [
                  null,
                  "RIX"
              ],
              "Description": {
                  "ServiceRemarks": "LUX bus from Tallinn arriving at 15:25 \u00a0Please clarify where the driver will meet the clients",
                  "ServiceNote": "\u200bYour driver will be meeting you on your arrival at the bus. He will be holding a name sign.Kindly stay close to the bus on arrival till you meet your driver.",
                  "InfoNote": null,
                  "ShortItineraryNote": null,
                  "ItineraryNote": "\u200b\u200bTransfers include one suitcase per person. Any additional luggage must be pre-booked. Transfer for 1-3 guests in MB E-class. For any larger groups, transfer in Minivan.",
                  "OptionContent": "Priority",
                  "TravelInformation": null
              },
              "EventType": "PT",
              "SegmentIdentifier": "18/10AXG2024",
              "TourplanServiceStatus": "Confirmed",
              "Address": "Terbatas street 41/43,Riga,Latvia",
              "Phone": "+371 25555955",
              "Date": "2024-09-18",
              "Pickup_Date": "2024-09-18",
              "puTime": "15:25",
              "puPlace": "Riga Coach StationRiga",
              "Dropoff_Date": "2024-09-18",
              "doTime": null,
              "doPlace": "Grand Palace Hotel Riga",
              "SCU": "car",
              "SCUqty": "1",
              "SequenceNumber": "30",
              "Opt": "RIXPTAXG001PT002",
              "Included": [
                  null,
                  null,
                  null,
                  null,
                  null,
                  null
              ],
              "TravellerAssignment": {
                  "FullName": [
                      "LindenBrady",
                      "Richard (Grant)Oliver"
                  ]
              },
              "Adults": "2",
              "Children": "0",
              "Infants": "0",
              "RoomConfigs": {
                  "RoomConfig": {
                      "RoomType": "Single",
                      "TravellerAssignment": {
                          "FullName": [
                              "LindenBrady",
                              "Richard (Grant)Oliver"
                          ]
                      }
                  }
              }
          },
          {
              "ServiceLineId": "555089",
              "SegmentProviderName": "Grand Palace Hotel Riga",
              "Name": "Superior room including breakfast",
              "LocationCode": [
                  null,
                  "RIX"
              ],
              "Description": {
                  "ServiceRemarks": null,
                  "ServiceNote": null,
                  "InfoNote": "The Grand Palace Hotel is a luxurious 5-star boutique property located in the heart of Riga Old Town. A member of the Leading Hotels of the World, the hotel is housed in a building constructed in 1877. The 56 rooms and suites were designed by Andrew Martin and epitomise warmth and comfort. Hotel facilities include several restaurants, a sauna and 24 hour gym.",
                  "ShortItineraryNote": "The Superior Rooms measure 19 sqm and are furnished with a king sized bed or twin beds. Room amenities include air-conditioning, flat-screen television, in-room safe and a mini bar. The bathroom has a heated floor, bathtub with shower, hairdryer, luxurious bathrobes, slippers and deluxe beauty products.Rates include buffet breakfast with sparkling wine, high-speed wireless internet, unlimited use of sauna, access to gym and turn down service with bottle of water.",
                  "ItineraryNote": null,
                  "OptionContent": "Priority (Allotment)",
                  "TravelInformation": null
              },
              "EventType": "AC",
              "SegmentIdentifier": "627478",
              "TourplanServiceStatus": "Confirmed",
              "Address": "Pils Street 12Riga,Latvia1050",
              "Phone": "+371 67 044 000",
              "Date": "2024-09-18",
              "Pickup_Date": "2024-09-18",
              "puTime": null,
              "puPlace": "Riga",
              "Dropoff_Date": "2024-09-20",
              "doTime": null,
              "doPlace": null,
              "SCU": "nights",
              "SCUqty": "2",
              "SequenceNumber": "40",
              "Opt": "RIXACGPH002AC01B",
              "Included": [
                  "2 x City Tax",
                  null,
                  null,
                  null,
                  null,
                  null
              ],
              "TravellerAssignment": {
                  "FullName": [
                      "LindenBrady",
                      "Richard (Grant)Oliver"
                  ]
              },
              "Adults": "2",
              "Children": "0",
              "Infants": "0",
              "RoomConfigs": {
                  "RoomConfig": {
                      "RoomType": "Double",
                      "TravellerAssignment": {
                          "FullName": [
                              "LindenBrady",
                              "Richard (Grant)Oliver"
                          ]
                      }
                  }
              }
          },
          {
              "ServiceLineId": "555102",
              "SegmentProviderName": "Andra Brice - Riga City Guide",
              "Name": "Discover Riga \u00a0- Guided Walking Tour",
              "LocationCode": [
                  null,
                  "RIX"
              ],
              "Description": {
                  "ServiceRemarks": null,
                  "ServiceNote": null,
                  "InfoNote": null,
                  "ShortItineraryNote": "Central Riga with its medieval dwellings, quaint 19th century wooden structures and prime examples of Art Nouveau architecture is included on the UNESCO World Heritage List. Enjoy a walk in the charming Old Town of Riga, which is a popular entertainment district featuring cobblestone streets and large number of architectural gems including Dome Cathedral and St. Peter\u2019s church.After a coffee break and Riga Black Balsam tasting, the walk continues towards the beautiful Art Nouveau district where you can admire Riga's famous Alberta street buildings. Riga is one of the few cities in Europe where numerous examples of Art Nouveau architecture, art and design objects have lasted through the years. Duration: 3 hoursInclusions: Private guide, public transportation, Balsam tastingExclusions: Food and additional drinks, entrance fees to Dome church and St Peter's churchActivity Level: ModerateAccessible: YesTour style: Private",
                  "ItineraryNote": "\u200bYour guide will meet you in the hotel lobby. Please be ready in good time before departure.",
                  "OptionContent": "Priority - 3 hours, includes public transport",
                  "TravelInformation": null
              },
              "EventType": "TD",
              "SegmentIdentifier": "09/09/2024 Andra",
              "TourplanServiceStatus": "Confirmed",
              "Address": "Riga,Latvia",
              "Phone": "+371 29199913",
              "Date": "2024-09-19",
              "Pickup_Date": "2024-09-19",
              "puTime": "10:00",
              "puPlace": "Grand Palace Hotel RigaRiga",
              "Dropoff_Date": "2024-09-19",
              "doTime": "13:00",
              "doPlace": null,
              "SCU": "tour",
              "SCUqty": "1",
              "SequenceNumber": "10",
              "Opt": "RIXTDANDRABTD002",
              "Included": [
                  "1 x Public Transport",
                  "1 x Balsam Tasting",
                  null,
                  null,
                  null,
                  null
              ],
              "TravellerAssignment": {
                  "FullName": [
                      "LindenBrady",
                      "Richard (Grant)Oliver"
                  ]
              },
              "Adults": "2",
              "Children": "0",
              "Infants": "0",
              "RoomConfigs": {
                  "RoomConfig": {
                      "RoomType": "Single",
                      "TravellerAssignment": {
                          "FullName": [
                              "LindenBrady",
                              "Richard (Grant)Oliver"
                          ]
                      }
                  }
              }
          },
          {
              "ServiceLineId": "555090",
              "SegmentProviderName": "Ax Group Ltd",
              "Name": "Private transfer from hotel to airport (MBE-class)",
              "LocationCode": [
                  null,
                  "RIX"
              ],
              "Description": {
                  "ServiceRemarks": "SK9607 departing from Riga 19:25",
                  "ServiceNote": null,
                  "InfoNote": null,
                  "ShortItineraryNote": null,
                  "ItineraryNote": "\u200b\u200bTransfers include one suitcase per person. Any additional luggage must be pre-booked. Transfer for 1-3 guests in MB E-class. For any larger groups, transfer in Minivan.",
                  "OptionContent": "Priority",
                  "TravelInformation": null
              },
              "EventType": "PT",
              "SegmentIdentifier": "18/10AXG2024",
              "TourplanServiceStatus": "Confirmed",
              "Address": "Terbatas street 41/43,Riga,Latvia",
              "Phone": "+371 25555955",
              "Date": "2024-09-20",
              "Pickup_Date": "2024-09-20",
              "puTime": "17:00",
              "puPlace": "Grand Palace Hotel RigaRiga",
              "Dropoff_Date": "2024-09-20",
              "doTime": "17:15",
              "doPlace": null,
              "SCU": "car",
              "SCUqty": "1",
              "SequenceNumber": "5",
              "Opt": "RIXPTAXG001PT004",
              "Included": [
                  null,
                  null,
                  null,
                  null,
                  null,
                  null
              ],
              "TravellerAssignment": {
                  "FullName": [
                      "LindenBrady",
                      "Richard (Grant)Oliver"
                  ]
              },
              "Adults": "2",
              "Children": "0",
              "Infants": "0",
              "RoomConfigs": {
                  "RoomConfig": {
                      "RoomType": "Single",
                      "TravellerAssignment": {
                          "FullName": [
                              "LindenBrady",
                              "Richard (Grant)Oliver"
                          ]
                      }
                  }
              }
          },
          {
              "ServiceLineId": "554140",
              "SegmentProviderName": "50 Degrees North",
              "Name": "Agent to arrange flights",
              "LocationCode": [
                  null,
                  "AUS"
              ],
              "Description": {
                  "ServiceRemarks": null,
                  "ServiceNote": "Your flight today (not booked by 50DN):\u200bSK9607: RIX - ARN 19:25 - 19:35",
                  "InfoNote": null,
                  "ShortItineraryNote": null,
                  "ItineraryNote": null,
                  "OptionContent": null,
                  "TravelInformation": null
              },
              "EventType": "OT",
              "SegmentIdentifier": null,
              "TourplanServiceStatus": "Pending",
              "Address": "Lillehammer,Norway",
              "Phone": null,
              "Date": "2024-09-20",
              "Pickup_Date": "2024-09-20",
              "puTime": null,
              "puPlace": "Australia",
              "Dropoff_Date": "2024-09-20",
              "doTime": null,
              "doPlace": null,
              "SCU": "tour",
              "SCUqty": "1",
              "SequenceNumber": "10",
              "Opt": "AUSOT50DN01ATAF",
              "Included": [
                  null,
                  null,
                  null,
                  null,
                  null,
                  null
              ],
              "TravellerAssignment": {
                  "FullName": [
                      "LindenBrady",
                      "Richard (Grant)Oliver"
                  ]
              },
              "Adults": "2",
              "Children": "0",
              "Infants": "0",
              "RoomConfigs": {
                  "RoomConfig": {
                      "RoomType": "Single",
                      "TravellerAssignment": {
                          "FullName": [
                              "LindenBrady",
                              "Richard (Grant)Oliver"
                          ]
                      }
                  }
              }
          },
          {
              "ServiceLineId": "554141",
              "SegmentProviderName": "Limousine Stockholm",
              "Name": "Private transfer Arlanda airport to City",
              "LocationCode": [
                  null,
                  "ARN"
              ],
              "Description": {
                  "ServiceRemarks": "SK9607 arriving in ARN 19:35",
                  "ServiceNote": null,
                  "InfoNote": null,
                  "ShortItineraryNote": "Your driver will meet you holding a name sign.Luggage: 1 suitcase and 1 carry-on per person",
                  "ItineraryNote": null,
                  "OptionContent": null,
                  "TravelInformation": null
              },
              "EventType": "PT",
              "SegmentIdentifier": "38798",
              "TourplanServiceStatus": "Confirmed",
              "Address": "Box 90212Stockholm,Sweden120 23",
              "Phone": "+46 8 650 90 80",
              "Date": "2024-09-20",
              "Pickup_Date": "2024-09-20",
              "puTime": "19:25",
              "puPlace": "Stockholm - Arlanda",
              "Dropoff_Date": "2024-09-20",
              "doTime": null,
              "doPlace": "Hotel Rival",
              "SCU": "Trnsfr",
              "SCUqty": "1",
              "SequenceNumber": "20",
              "Opt": "ARNPTLSS01 PT002",
              "Included": [
                  null,
                  null,
                  null,
                  null,
                  null,
                  null
              ],
              "TravellerAssignment": {
                  "FullName": [
                      "LindenBrady",
                      "Richard (Grant)Oliver"
                  ]
              },
              "Adults": "2",
              "Children": "0",
              "Infants": "0",
              "RoomConfigs": {
                  "RoomConfig": {
                      "RoomType": "Single",
                      "TravellerAssignment": {
                          "FullName": [
                              "LindenBrady",
                              "Richard (Grant)Oliver"
                          ]
                      }
                  }
              }
          },
          {
              "ServiceLineId": "554142",
              "SegmentProviderName": "Hotel Rival",
              "Name": "Superior room including breakfast",
              "LocationCode": [
                  "Approximate distance to Stockholm Central Station:Public transport from Stockholm Arlanda airport to Hotel Rival:Arlanda Express train (departs about every 10th minute during daytime, takes about 20 minutes)From central station get on the Red Metro Line towards \u201cFru\u00e4ngen\u201d get off at \u201cMariatorget\u201d and use the exit called \u201cMariatorget\u201d (not \u201cTorkel Knutsson gatan\u201d) > from there it is a 150 m walk to Hotel Rival.",
                  "STO"
              ],
              "Description": {
                  "ServiceRemarks": null,
                  "ServiceNote": null,
                  "InfoNote": "Hotel Rival is a boutique hotel situated on Mariatorget in Stockholm. The hotel has been converted from the old Rival Cinema to a beautiful and stylish hotel with 99 rooms. Benny Anderson, who is famous from the 70\u2019s pop - group ABBA, owns the hotel. The idea behind the interior design has been to create a colourful and multi-facetted environment, stretching from the festive original interior of the cocktail bar to more contemporary design.",
                  "ShortItineraryNote": "Superior rooms offer plenty of space to unwind with a room size between 25 to 33 square-meters in size. All rooms feature a Samsung Smart TV and Blu-ray player as well as one or two K\u00e4llemo armchairs and a table. There is also a work area with free wired and wireless internet. All Superior rooms include a shower, two wardrobes, a mini-safe, ironing facilities and a minibar. There are power outlets and USB ports on both sides of the headboard for night charging. Naturally, the Rival's breakfast buffet is included in the room rate.",
                  "ItineraryNote": null,
                  "OptionContent": "Priority - Allotment",
                  "TravelInformation": null
              },
              "EventType": "AC",
              "SegmentIdentifier": "3113197",
              "TourplanServiceStatus": "Confirmed",
              "Address": "Mariatorget 3Stockholm,Sweden11891",
              "Phone": "+46 8 545 789 00",
              "Date": "2024-09-20",
              "Pickup_Date": "2024-09-20",
              "puTime": null,
              "puPlace": "Stockholm",
              "Dropoff_Date": "2024-09-23",
              "doTime": null,
              "doPlace": null,
              "SCU": "nights",
              "SCUqty": "3",
              "SequenceNumber": "30",
              "Opt": "STOACHRI001AC01B",
              "Included": [
                  null,
                  null,
                  null,
                  null,
                  null,
                  null
              ],
              "TravellerAssignment": {
                  "FullName": [
                      "LindenBrady",
                      "Richard (Grant)Oliver"
                  ]
              },
              "Adults": "2",
              "Children": "0",
              "Infants": "0",
              "RoomConfigs": {
                  "RoomConfig": {
                      "RoomType": "Double",
                      "TravellerAssignment": {
                          "FullName": [
                              "LindenBrady",
                              "Richard (Grant)Oliver"
                          ]
                      }
                  }
              }
          },
          {
              "ServiceLineId": "554143",
              "SegmentProviderName": "Private Guide Stockholm - Sofia Lindh",
              "Name": "Discover Stockholm - Private City Tour",
              "LocationCode": [
                  null,
                  "STO"
              ],
              "Description": {
                  "ServiceRemarks": null,
                  "ServiceNote": null,
                  "InfoNote": null,
                  "ShortItineraryNote": "Discover the must-sees of Stockholm's historic Old Town, including the Royal Palace and the Cathedral on a private walking tour of its charming cobbled streets. Stockholm's old town of Gamla Stan is one of the city\u2019s 14 islands. It is the medieval part of the city, where everything began, the first buildings dating around 1200. This is not simply a museum area, but a lively part of the city where Stockholmers live, work, shop and go to school. The Old Town has narrow alleys and streets with cobbled stones, where your guide will introduce you to interesting historical sites, and tell you the story of how the city of Stockholm was founded and how Stockholmers live today. See the Royal Palace and visit the island of Riddarholmen, passing by Riddarholmen Church, which was built by Franciscan monks in the 1200s. Stop for a traditional Swedish cinnamon bun at a local bakery, and see old-fashioned hard candy being made at Polkagris Kokeri. You can sample some for yourself and pick up some to take home with you. Meeting point: At your Hotel Inclusions: Private English speaking guide Duration: 3 Hours Exclusions: Any entrance fees, food and drinkActivity Level: ModerateAccessible: Yes",
                  "ItineraryNote": "Your guide, +46 70 562 55 33, will meet you at the hotel's reception area. Please be ready in good time.",
                  "OptionContent": "PRIORITY Walking Tour - 3h, Public holiday supp 50%",
                  "TravelInformation": null
              },
              "EventType": "TD",
              "SegmentIdentifier": "5MFT123768/sofia",
              "TourplanServiceStatus": "Confirmed",
              "Address": "Stockholm,Sweden",
              "Phone": null,
              "Date": "2024-09-21",
              "Pickup_Date": "2024-09-21",
              "puTime": "10:00",
              "puPlace": "Hotel RivalStockholm",
              "Dropoff_Date": "2024-09-21",
              "doTime": "13:00",
              "doPlace": null,
              "SCU": "Tour",
              "SCUqty": "1",
              "SequenceNumber": "10",
              "Opt": "STOTDSLPGSTTD001",
              "Included": [
                  null,
                  null,
                  null,
                  null,
                  null,
                  null
              ],
              "TravellerAssignment": {
                  "FullName": [
                      "LindenBrady",
                      "Richard (Grant)Oliver"
                  ]
              },
              "Adults": "2",
              "Children": "0",
              "Infants": "0",
              "RoomConfigs": {
                  "RoomConfig": {
                      "RoomType": "Single",
                      "TravellerAssignment": {
                          "FullName": [
                              "LindenBrady",
                              "Richard (Grant)Oliver"
                          ]
                      }
                  }
              }
          },
          {
              "ServiceLineId": "554144",
              "SegmentProviderName": "Str\u00f6mma Stockholm",
              "Name": "Brunch Cruise in the Archipelago",
              "LocationCode": [
                  null,
                  "STO"
              ],
              "Description": {
                  "ServiceRemarks": null,
                  "ServiceNote": "\u200bPlease find your voucher with travel documents.Boarding 30 minutes before departureDeparture point: Strandv\u00e4gen, berth no 15-16, (outside Diplomat Hotel), Stockholmhttps://maps.app.goo.gl/5U3PbMVxFXFmmsAf8",
                  "InfoNote": null,
                  "ShortItineraryNote": "Every Saturday and Sunday at 12.00, the S/S Stockholm casts off from Strandv\u00e4gen for a three-hour brunch cruise in the Stockholm Archipelago. The brunch onboard is based on fresh seasonal produce, current culinary trends and the imagination of the ship\u2019s chef. Seasonal and locally sourced produce, healthy green dishes and sustainability are the main focus points when creating the menu.The menu features everything from classics, such as herring, Jansson\u2019s Temptation and meatballs, to crisp salads, deli meats, cheeses and vegan dishes. Last but definitely not least, all the sweet treats in our dessert buffet. There are also many other delicacies and brunch favourites that vary during the year. All the food is prepared on board with a hand-picked selection of premium ingredients.On board the S/S Stockholm, you can lean back and enjoy the stunning views of the Stockholm Archipelago. The boat itself is a treasure, with bright and airy salons, a large dining room and a sociable promenade deck. From your table, you have a first-class view as the boat cruises Stockholm\u2019s inner archipelago. Included: Boat tour and brunch Duration: 3 hoursDeparture: At 12 noonOperates: April to December Facilities on board: Free wifi, Bar, Restroom",
                  "ItineraryNote": "Please find your voucher with the travel documents.Departs from Strandv\u00e4gen, berth No 16",
                  "OptionContent": "3 hrs, Sat &amp; Sun only, April-Dec",
                  "TravelInformation": null
              },
              "EventType": "TD",
              "SegmentIdentifier": "QHOL43",
              "TourplanServiceStatus": "Confirmed",
              "Address": "Svensksundsv\u00e4gen 17Stockholm,Sweden111 49",
              "Phone": "+46 8 12 00 40 00",
              "Date": "2024-09-22",
              "Pickup_Date": "2024-09-22",
              "puTime": "12:00",
              "puPlace": "Strandv\u00e4gen, berth no 15-16Stockholm",
              "Dropoff_Date": "2024-09-22",
              "doTime": "15:00",
              "doPlace": "Strandv\u00e4gen, berth no 15-16Stockholm",
              "SCU": "ticket",
              "SCUqty": "1",
              "SequenceNumber": "10",
              "Opt": "STOTDSTRSTOTD002",
              "Included": [
                  null,
                  null,
                  null,
                  null,
                  null,
                  null
              ],
              "TravellerAssignment": {
                  "FullName": [
                      "LindenBrady",
                      "Richard (Grant)Oliver"
                  ]
              },
              "Adults": "2",
              "Children": "0",
              "Infants": "0",
              "RoomConfigs": {
                  "RoomConfig": {
                      "RoomType": "Single",
                      "TravellerAssignment": {
                          "FullName": [
                              "LindenBrady",
                              "Richard (Grant)Oliver"
                          ]
                      }
                  }
              }
          },
          {
              "ServiceLineId": "554149",
              "SegmentProviderName": "Swedish Railways",
              "Name": "SJ Sweden Rail Stockholm - Oslo",
              "LocationCode": [
                  null,
                  "STO"
              ],
              "Description": {
                  "ServiceRemarks": null,
                  "ServiceNote": "Please find your tickets with the travel documents.\u200bCarriage 2, seat 8, aisleCarriage 2, seat 7, window",
                  "InfoNote": null,
                  "ShortItineraryNote": null,
                  "ItineraryNote": "Please confirm the timetable one day before at www.sj.se or from your hotel receptionKindly note, this is a scheduled service and will depart on time, so please be at the station around 30 minutes before departure.Please find your ticket with the travel documents. On board the train, please present the ticket in your mobile phone or computer. You can also print out the ticket.",
                  "OptionContent": "1st Class",
                  "TravelInformation": null
              },
              "EventType": "RA",
              "SegmentIdentifier": "WPAD9Y3B",
              "TourplanServiceStatus": "Confirmed",
              "Address": "\u00c5sgatan 22\u00c5nge,Sweden0",
              "Phone": null,
              "Date": "2024-09-23",
              "Pickup_Date": "2024-09-23",
              "puTime": "15:30",
              "puPlace": "Train 639 - Stockholm CentralStockholm",
              "Dropoff_Date": "2024-09-23",
              "doTime": "21:24",
              "doPlace": "Train 639 - Oslo Central",
              "SCU": "ticket",
              "SCUqty": "1",
              "SequenceNumber": "10",
              "Opt": "NODRASWR001RA018",
              "Included": [
                  null,
                  null,
                  null,
                  null,
                  null,
                  null
              ],
              "TravellerAssignment": {
                  "FullName": [
                      "LindenBrady",
                      "Richard (Grant)Oliver"
                  ]
              },
              "Adults": "2",
              "Children": "0",
              "Infants": "0",
              "RoomConfigs": {
                  "RoomConfig": {
                      "RoomType": "Single",
                      "TravellerAssignment": {
                          "FullName": [
                              "LindenBrady",
                              "Richard (Grant)Oliver"
                          ]
                      }
                  }
              }
          },
          {
              "ServiceLineId": "554150",
              "SegmentProviderName": "Amerikalinjen",
              "Name": "Superior room including breakfast",
              "LocationCode": [
                  null,
                  "OSL"
              ],
              "Description": {
                  "ServiceRemarks": null,
                  "ServiceNote": null,
                  "InfoNote": "Here the journey began for thousands of hopeful Norwegians. They were going to travel with Amerikalinjen to the land of opportunity. The Norwegian America Line\u2019s venerable headquarters opened their doors in 1919. 100 years later, these dreams are brought back to life . This iconic building has been reborn as a vibrant boutique hotel, designed for the modern explorer. Outside the doors, the city is at your feet. The Opera, shopping in Kvadraturen and the nightlife on Youngstorget are our closest neighbours. The airport express train (Flytoget), buses and trams are all in the immediate vicinity.",
                  "ShortItineraryNote": "The light filled Superior rooms have interior, city or fjord views and are furnished with king size beds. The rooms are designed with an eye for detail, with high ceilings, large windows, parquet floors, designer lamps and unique objects from Amerikalinjen\u2019s rich history.Room amenities include Nespresso coffee maker, minibar, bathrobe and work area. The ensuite has a walk-in shower, hair dryer and exclusive products from Sprekenhus.",
                  "ItineraryNote": null,
                  "OptionContent": "Priority, Avoid Fri-Sat. 15% off BAR also possible",
                  "TravelInformation": null
              },
              "EventType": "AC",
              "SegmentIdentifier": "NO147S0028412",
              "TourplanServiceStatus": "Confirmed",
              "Address": "Jernbanetorget 2Oslo,Norway0154",
              "Phone": "+47 21405900",
              "Date": "2024-09-23",
              "Pickup_Date": "2024-09-23",
              "puTime": null,
              "puPlace": "Oslo",
              "Dropoff_Date": "2024-09-25",
              "doTime": null,
              "doPlace": null,
              "SCU": "nights",
              "SCUqty": "2",
              "SequenceNumber": "20",
              "Opt": "OSLACAMER01AC002",
              "Included": [
                  null,
                  null,
                  null,
                  null,
                  null,
                  null
              ],
              "TravellerAssignment": {
                  "FullName": [
                      "LindenBrady",
                      "Richard (Grant)Oliver"
                  ]
              },
              "Adults": "2",
              "Children": "0",
              "Infants": "0",
              "RoomConfigs": {
                  "RoomConfig": {
                      "RoomType": "Double",
                      "TravellerAssignment": {
                          "FullName": [
                              "LindenBrady",
                              "Richard (Grant)Oliver"
                          ]
                      }
                  }
              }
          },
          {
              "ServiceLineId": "554152",
              "SegmentProviderName": "Norditours",
              "Name": "Discover Oslo - Private City Tour",
              "LocationCode": [
                  null,
                  "OSL"
              ],
              "Description": {
                  "ServiceRemarks": null,
                  "ServiceNote": null,
                  "InfoNote": null,
                  "ShortItineraryNote": "Discover the must-sees of beautiful Oslo including the Royal Palace and Vigeland Park \u00a0on a private walking tour.Enjoy all the landmarks of Oslo's city centre on a private 3-hour walking tour with a local guide. Get a taste of the life in this vibrant capital through its famous sights, and enjoy its architectural and cultural diversity. See the Royal Palace, the Norwegian Parliament, and the University of Oslo, and stroll the bustling Karl Johan pedestrian shopping area. Take the tram to the iconic Vigeland Park and explore the incredible and unique works of sculptor Gustav Vigeland. A perfect introduction to the Norwegian capital! Duration: 3 hours Inclusions: Private English speaking guide, visit to Vigeland Park, public transportationExclusions: Food and drinkActivity Level: ModerateAccessible: Yes",
                  "ItineraryNote": "Your guide, tel +47 95094363, will meet you in hotel reception. Please be ready in good time. \u200b",
                  "OptionContent": "3 hours PRIORITY (max 10)",
                  "TravelInformation": null
              },
              "EventType": "TD",
              "SegmentIdentifier": "5MFT123768/victoria",
              "TourplanServiceStatus": "Confirmed",
              "Address": "c/o Ekonomernas HusStortingsgata 8Oslo,Norway0161",
              "Phone": "+47 95094363",
              "Date": "2024-09-24",
              "Pickup_Date": "2024-09-24",
              "puTime": "10:00",
              "puPlace": "AmerikalinjenOslo",
              "Dropoff_Date": "2024-09-24",
              "doTime": "13:00",
              "doPlace": "Oslo",
              "SCU": "tour",
              "SCUqty": "1",
              "SequenceNumber": "10",
              "Opt": "OSLTDNORDITTD001",
              "Included": [
                  null,
                  null,
                  "1 x Public transport",
                  null,
                  null,
                  null
              ],
              "TravellerAssignment": {
                  "FullName": [
                      "LindenBrady",
                      "Richard (Grant)Oliver"
                  ]
              },
              "Adults": "2",
              "Children": "0",
              "Infants": "0",
              "RoomConfigs": {
                  "RoomConfig": {
                      "RoomType": "Single",
                      "TravellerAssignment": {
                          "FullName": [
                              "LindenBrady",
                              "Richard (Grant)Oliver"
                          ]
                      }
                  }
              }
          },
          {
              "ServiceLineId": "554154",
              "SegmentProviderName": "50 Degrees North",
              "Name": "Departure day",
              "LocationCode": [
                  null,
                  "AUS"
              ],
              "Description": {
                  "ServiceRemarks": null,
                  "ServiceNote": null,
                  "InfoNote": null,
                  "ShortItineraryNote": null,
                  "ItineraryNote": null,
                  "OptionContent": null,
                  "TravelInformation": null
              },
              "EventType": "OT",
              "SegmentIdentifier": null,
              "TourplanServiceStatus": "Pending",
              "Address": "Lillehammer,Norway",
              "Phone": null,
              "Date": "2024-09-25",
              "Pickup_Date": "2024-09-25",
              "puTime": null,
              "puPlace": "Australia",
              "Dropoff_Date": "2024-09-25",
              "doTime": null,
              "doPlace": null,
              "SCU": "tour",
              "SCUqty": "1",
              "SequenceNumber": "10",
              "Opt": "AUSOT50DN01ARK3",
              "Included": [
                  null,
                  null,
                  null,
                  null,
                  null,
                  null
              ],
              "TravellerAssignment": {
                  "FullName": [
                      "LindenBrady",
                      "Richard (Grant)Oliver"
                  ]
              },
              "Adults": "2",
              "Children": "0",
              "Infants": "0",
              "RoomConfigs": {
                  "RoomConfig": {
                      "RoomType": "Single",
                      "TravellerAssignment": {
                          "FullName": [
                              "LindenBrady",
                              "Richard (Grant)Oliver"
                          ]
                      }
                  }
              }
          }
      ]
  }
}`);
// Parse the JSON string to a JavaScript object
// const tourPlanData = JSON.parse(inputData.trip);

const tourPlanToTravefyMap = {
    FL: 0,
    RC: 1,
    RA: 2,
    CR: 3,
    FR: 3,
    HV: 3,
    BU: 4,
    CH: 4,
    PT: 4,
    ST: 4,
    AC: 6,
    AD: 9,
    CP: 9,
    MG: 9,
    OA: 9,
    OT: 9,
    PK: 9,
    QH: 9,
    SS: 9,
    TD: 9,
    TO: 9,
    ME: 11,
    IN: 12,
    TX: 12,
    ZA: 12,
};

// Function to convert time (HH:MM) to minutes
const timeToMinutes = (time) => {
    if (!time) return null;
    const [hours, minutes] = time.split(':').map(Number);
    return hours * 60 + minutes;
};

const getTemplateDate = (date) => {
    if (date) {
        const dateObject = new Date(date); // Create a Date object from the input
        return dateObject.toLocaleDateString('en-GB', {
            day: 'numeric',
            month: 'long',
            year: 'numeric',
        });
    }
    return ''; // Return an empty string if the date is null or undefined
};

// Function to map TourPlan code to product type number
const mapTourPlanCodeToProductType = (code) => tourPlanToTravefyMap[code] || 9;

// Function to map each trip event to Travefy format
const mapTripEvent = (event) => {
    let mappedEvent = {
        IsActive: true,
        Name: event.Name,
        Description: `
    ${event.Included && event.Included.every((item) => item === null) === false
                ? `<li><strong>Inclusions:</strong>
           <ul>
           ${event.Included.map((item) =>
                    item !== null ? `<li>${item}</li>` : ''
                ).join('')}
           </ul>
      </li>`
                : ''
            }
    ${event.Description.ShortItineraryNote
                ? `<p>${event.Description.ShortItineraryNote}</p>`
                : ''
            }
    ${event.Description.ItineraryNote
                ? `<p>${event.Description.ItineraryNote}</p>`
                : ''
            }
    ${event.Description.InfoNote ? `<p>${event.Description.InfoNote}</p>` : ''}
    ${event.Description.TravelInformation
                ? `<p>${event.Description.TravelInformation}</p>`
                : ''
            }
    ${event.Description.ServiceNote
                ? `<p>${event.Description.ServiceNote}</p>`
                : ''
            }
    ${event.Description.ServiceRemarks
                ? `<p>${event.Description.ServiceRemarks}</p>`
                : ''
            }
    ${event.Description.OptionContent
                ? `<p style=\"background-color: rgba(255, 254, 145, 1)\">${event.Description.OptionContent}</p>`
                : ''
            }
    `,
        SegmentProviderName: event.SegmentProviderName,
        SegmentIdentifier: `${event.TourplanServiceStatus} ${event.SegmentIdentifier}`,
        EventType: mapTourPlanCodeToProductType(event.EventType),
        StartTimeInMinutes: timeToMinutes(event.puTime),
        DurationInMinutes: event.SCUqty * 1440,
    };
    switch (mappedEvent.EventType) {
        case 0: // Flight
            mappedEvent = {
                ...mappedEvent,
                Description: `
        <ul>
            <li><strong>Departure Date:</strong> ${getTemplateDate(
                    event.Pickup_Date
                )} at ${event.puTime || ''}</li>
            <li><strong>Departure Location:</strong> ${event.puPlace || ''}</li>
            <li><strong>Arrival Date:</strong> ${getTemplateDate(
                    event.Dropoff_Date
                )} at ${event.doTime || ''}</li>
            <li><strong>Arrival Location:</strong> ${event.doPlace || ''}</li>
            ${mappedEvent.Description}
        </ul>
        `,

                // Add any future properties here for flights
            };
            break;

        case 1: // Car Rental
            mappedEvent = {
                ...mappedEvent,
                Description: `
        <ul>
            <li><strong>Pick-up Date:</strong> ${getTemplateDate(
                    event.Pickup_Date
                )} at ${event.puTime || ''}</li>
            <li><strong>Pick-up Location:</strong> ${event.puPlace || ''}</li>
            <li><strong>Drop-off Date:</strong> ${getTemplateDate(
                    event.Dropoff_Date
                )} at ${event.doTime || ''}</li>
            <li><strong>Drop-off Location:</strong> ${event.doPlace || ''}</li>
            <li><strong>Rental Duration:</strong> !!missing need another Tag</li>
            <li><strong>Vehicle Type:</strong> !!missing need another Tag</li>
            ${mappedEvent.Description}
        </ul>
        `,

                // Add any future properties here for flights
            };
            break;

        case 2: // Train
            mappedEvent = {
                ...mappedEvent,
                Description: `
        <ul>
            <li><strong>Departure Date:</strong> ${getTemplateDate(
                    event.Pickup_Date
                )} at ${event.puTime || ''}</li>
            <li><strong>Departure Location:</strong> ${event.puPlace || ''}</li>
            <li><strong>Arrival Date:</strong> ${getTemplateDate(
                    event.Dropoff_Date
                )} at ${event.doTime || ''}</li>
            <li><strong>Arrival Location:</strong> ${event.doPlace || ''}</li>
            ${mappedEvent.Description}
        </ul>
        `,
                // Add any future properties here for trains
            };
            break;

        case 3: // Cruise
            mappedEvent = {
                ...mappedEvent,
                Description: `
        <ul>
            <li><strong>Departure Date:</strong> ${getTemplateDate(
                    event.Pickup_Date
                )} at ${event.puTime || ''}</li>
            <li><strong>Departure Location:</strong> ${event.puPlace || ''}</li>
            <li><strong>Arrival Date:</strong> ${getTemplateDate(
                    event.Dropoff_Date
                )} at ${event.doTime || ''}</li>
            <li><strong>Arrival Location:</strong> ${event.doPlace || ''}</li>
            <li><strong>Vessel:</strong> !!get Vessel </li>
            <li><strong>Cabin Type:</strong> !!get Cabin </li>
            <li><strong>Cabin Number:</strong> !!get CabinNO </li>
            ${mappedEvent.Description}
        </ul>
        `,
                StartTerminal: '!!!Balcony Deluxe Cabin',
                StartGate: '!!7115',
            };
            break;

        case 4: // Transportation -> Other (Bus, Shuttle, etc.)
            mappedEvent = {
                ...mappedEvent,
                Description: `
        <ul>
            <li><strong>Phone:</strong> ${event.phone || ''}</li>
            <li><strong>Pick-up Date:</strong> ${getTemplateDate(
                    event.Pickup_Date
                )} at ${event.puTime || ''}</li>
            <li><strong>Pick-up Location:</strong> ${event.puPlace || ''}</li>
            <li><strong>Drop-off Date:</strong> ${getTemplateDate(
                    event.Dropoff_Date
                )} at ${event.doTime || ''}</li>
            <li><strong>Drop-off Location:</strong> ${event.doPlace || ''}</li>
            ${mappedEvent.Description}
        </ul>
        `,
                // Add any future properties here for transportation
            };
            break;

        case 6: // Hotel
            mappedEvent = {
                ...mappedEvent,
                Description: `
        <ul>
            <li><strong>Phone:</strong> ${event.phone || ''}</li>
            <li><strong>Check-in Date:</strong> ${getTemplateDate(
                    event.Pickup_Date
                )} at ${event.puTime || ''}</li>
            <li><strong>Check-out Date:</strong> ${getTemplateDate(
                    event.Dropoff_Date
                )} at ${event.doTime || ''}</li>
            <li><strong>Location:</strong> ${event.Address || ''}</li>
            ${mappedEvent.Description}
        </ul>
        `,
                ReservationDescription:
                    '!!Deluxe room including breakfast, 1 Single, 1 Double',
            };
            break;

        case 9: // Activity
            mappedEvent = {
                ...mappedEvent,
                Description: `
        <ul>
            <li><strong>Phone:</strong> ${event.phone || ''}</li>
            <li><strong>Start Date:</strong> ${getTemplateDate(
                    event.Pickup_Date
                )} at ${event.puTime || ''}</li>
            <li><strong>Start Location:</strong> ${event.puPlace || ''}</li>
            <li><strong>End Date:</strong> ${getTemplateDate(
                    event.Dropoff_Date
                )} at ${event.doTime || ''}</li>
            <li><strong>End Location:</strong> ${event.doPlace || ''}</li>
            ${mappedEvent.Description}
        </ul>
        `,
                // Add any future properties here for activities
            };
            break;

        case 11: // Meals
            mappedEvent = {
                ...mappedEvent,
                // Add any future properties here for meals
            };
            break;

        case 12: // Information
            mappedEvent = {
                ...mappedEvent,
                // Add any future properties here for information events
            };
            break;

        default:
            // Default case to handle any unhandled types
            break;
    }
    return mappedEvent;
};

// Function to map a day and its events
const mapDay = (day, events) => ({
    Date: day,
    IsActive: true,
    TripEvents: events.filter((event) => event.Date === day).map(mapTripEvent),
});

// Generate the trip days and map the events
const tripDays = [...new Set(tourPlanData.TripDays.TripDay)].map((day) =>
    mapDay(day, tourPlanData.TripEvents.TripEvent)
);

// Prepare the final output for Zapier
const travefyTrip = {
    Name: tourPlanData.Name,
    TripCoverPhotoUrl:
        'https://images.ctfassets.net/6xuvngqqn06x/su9J6FvsrImEQsEcuyeAq/55a290674f9cac9b979cf03600a268c3/Aurora_Borealis-01.jpg?w=1680&h=800&fit=fill&q=80&fm=webp',
    Active: true,
    IsChatDisabled: false,
    IsPdfEnabled: true,
    IsAppEnabled: true,
    Status: 'Itinerary',
    IsArchived: false,
    Currency: tourPlanData.Currency,
    TripDays: tripDays,
};

output = { travefyTrip: JSON.stringify(travefyTrip) };

