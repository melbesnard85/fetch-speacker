import { SearchResult } from "../core/models/http/http.model";
import { Speaker } from "../core/models/http/speaker.model";

export const mockSearchResponse: SearchResult<Speaker> = {
  "results": [
      {
          "gender": "female",
          "name": {
              "title": "Mademoiselle",
              "first": "Juliana",
              "last": "Dumont"
          },
          "location": {
              "street": {
                  "number": 6096,
                  "name": "Place de L'Abbé-Franz-Stock"
              },
              "city": "Seftigen",
              "state": "Schwyz",
              "country": "Switzerland",
              "postcode": 9126,
              "coordinates": {
                  "latitude": "-57.9507",
                  "longitude": "110.9561"
              },
              "timezone": {
                  "offset": "-1:00",
                  "description": "Azores, Cape Verde Islands"
              }
          },
          "email": "juliana.dumont@example.com",
          "login": {
              "uuid": "73e693ca-0021-4821-83bf-a8eca5eae6a7",
              "username": "yellowmouse564",
              "password": "poohbear",
              "salt": "djeGjgrn",
              "md5": "d5ae0363d0e08c1ce108575de846884b",
              "sha1": "450ab4b08c3eb9c5b8717bdd9d66fb82b8e50d11",
              "sha256": "772b7a6f4e7eeb3eeca0ae56581207319fedb8c359d256bec1a8eb90f21e387d"
          },
          "dob": {
              "date": "1997-10-09T05:25:54.260Z",
              "age": 25
          },
          "registered": {
              "date": "2017-08-23T23:59:54.485Z",
              "age": 5
          },
          "phone": "078 936 42 25",
          "cell": "078 129 84 41",
          "id": {
              "name": "AVS",
              "value": "756.5607.2272.22"
          },
          "picture": {
              "large": "https://randomuser.me/api/portraits/women/62.jpg",
              "medium": "https://randomuser.me/api/portraits/med/women/62.jpg",
              "thumbnail": "https://randomuser.me/api/portraits/thumb/women/62.jpg"
          },
          "nat": "CH"
      },
      {
          "gender": "female",
          "name": {
              "title": "Miss",
              "first": "Magdalena",
              "last": "Gaytán"
          },
          "location": {
              "street": {
                  "number": 5267,
                  "name": "Callejón Sur Estévez"
              },
              "city": "Zapotitán de Hidalgo",
              "state": "Ciudad de Mexico",
              "country": "Mexico",
              "postcode": 55188,
              "coordinates": {
                  "latitude": "-50.0525",
                  "longitude": "-79.7202"
              },
              "timezone": {
                  "offset": "+5:45",
                  "description": "Kathmandu"
              }
          },
          "email": "magdalena.gaytan@example.com",
          "login": {
              "uuid": "9a23fd76-39a1-4b34-b344-98955b83f384",
              "username": "beautifulzebra582",
              "password": "ramrod",
              "salt": "t3jW0vS7",
              "md5": "c7318cc261e1cb08ea204f5ffafba597",
              "sha1": "114154d626f339a8e31ce9fb053fb71fd04845f7",
              "sha256": "2c3c841e2244a0291038d738eb5b1a0323136d282d84c6bf502a8fa620aad130"
          },
          "dob": {
              "date": "1977-08-16T20:00:56.736Z",
              "age": 45
          },
          "registered": {
              "date": "2006-05-29T18:44:51.183Z",
              "age": 16
          },
          "phone": "(632) 636 0805",
          "cell": "(652) 427 1266",
          "id": {
              "name": "NSS",
              "value": "40 84 89 8940 0"
          },
          "picture": {
              "large": "https://randomuser.me/api/portraits/women/17.jpg",
              "medium": "https://randomuser.me/api/portraits/med/women/17.jpg",
              "thumbnail": "https://randomuser.me/api/portraits/thumb/women/17.jpg"
          },
          "nat": "MX"
      },
      {
          "gender": "male",
          "name": {
              "title": "Mr",
              "first": "Samuel",
              "last": "Li"
          },
          "location": {
              "street": {
                  "number": 1958,
                  "name": "Alfred St"
              },
              "city": "Vanier",
              "state": "Nova Scotia",
              "country": "Canada",
              "postcode": "Q5F 4L1",
              "coordinates": {
                  "latitude": "67.2504",
                  "longitude": "-126.6634"
              },
              "timezone": {
                  "offset": "+5:00",
                  "description": "Ekaterinburg, Islamabad, Karachi, Tashkent"
              }
          },
          "email": "samuel.li@example.com",
          "login": {
              "uuid": "cf5bfb0f-8932-444a-990d-189474c24aa7",
              "username": "happydog183",
              "password": "max123",
              "salt": "6yNK3x4J",
              "md5": "9437effec0a4a05357bb6ca30b9488f6",
              "sha1": "c53e5382d9573c85d60a340242df0075d7a401a8",
              "sha256": "af1e3df1d2e5f4f74b54f35925cc09bbe0191098ae12287fc582b6de8a9b913e"
          },
          "dob": {
              "date": "1960-05-16T04:41:12.884Z",
              "age": 62
          },
          "registered": {
              "date": "2018-01-27T19:15:22.712Z",
              "age": 4
          },
          "phone": "V61 T89-7726",
          "cell": "W32 M04-4918",
          "id": {
              "name": "SIN",
              "value": "902132893"
          },
          "picture": {
              "large": "https://randomuser.me/api/portraits/men/27.jpg",
              "medium": "https://randomuser.me/api/portraits/med/men/27.jpg",
              "thumbnail": "https://randomuser.me/api/portraits/thumb/men/27.jpg"
          },
          "nat": "CA"
      },
      {
          "gender": "female",
          "name": {
              "title": "Ms",
              "first": "Siiri",
              "last": "Heinonen"
          },
          "location": {
              "street": {
                  "number": 3842,
                  "name": "Aleksanterinkatu"
              },
              "city": "Sauvo",
              "state": "Finland Proper",
              "country": "Finland",
              "postcode": 94390,
              "coordinates": {
                  "latitude": "-83.9045",
                  "longitude": "123.1636"
              },
              "timezone": {
                  "offset": "-11:00",
                  "description": "Midway Island, Samoa"
              }
          },
          "email": "siiri.heinonen@example.com",
          "login": {
              "uuid": "7dfdf701-22d8-4b32-a7be-6a9e5e996314",
              "username": "brownzebra433",
              "password": "bubble",
              "salt": "KmGNF2gd",
              "md5": "23806f3e431704540c115a74347a56fe",
              "sha1": "08488dfa046e2682c75454d7932b21fa0eb14f59",
              "sha256": "718f305134f0275736cf2a4966f92af44c095550aa27a5b8eb14aec2428b77cf"
          },
          "dob": {
              "date": "1945-04-30T18:45:44.792Z",
              "age": 77
          },
          "registered": {
              "date": "2005-01-30T15:00:28.610Z",
              "age": 17
          },
          "phone": "05-171-703",
          "cell": "043-503-37-63",
          "id": {
              "name": "HETU",
              "value": "NaNNA242undefined"
          },
          "picture": {
              "large": "https://randomuser.me/api/portraits/women/79.jpg",
              "medium": "https://randomuser.me/api/portraits/med/women/79.jpg",
              "thumbnail": "https://randomuser.me/api/portraits/thumb/women/79.jpg"
          },
          "nat": "FI"
      },
      {
          "gender": "female",
          "name": {
              "title": "Miss",
              "first": "Draginja",
              "last": "Teodosić"
          },
          "location": {
              "street": {
                  "number": 3761,
                  "name": "Mušnikovska"
              },
              "city": "Babušnica",
              "state": "Šumadija",
              "country": "Serbia",
              "postcode": 38281,
              "coordinates": {
                  "latitude": "51.4746",
                  "longitude": "-79.2490"
              },
              "timezone": {
                  "offset": "-12:00",
                  "description": "Eniwetok, Kwajalein"
              }
          },
          "email": "draginja.teodosic@example.com",
          "login": {
              "uuid": "d92cdfcb-3ad4-4471-b7e2-d5d79567de2c",
              "username": "purpleelephant372",
              "password": "casey",
              "salt": "tO0alCPP",
              "md5": "e4a2753910be38e42138df78899ff43f",
              "sha1": "fe8b0924e379036c252ab35f5fe32b0582cb6dde",
              "sha256": "35953281a405a192966ed4744f162901ba69f45b7031b76d8306ee2e389ac49c"
          },
          "dob": {
              "date": "1958-10-08T23:43:49.950Z",
              "age": 64
          },
          "registered": {
              "date": "2018-10-15T11:31:53.365Z",
              "age": 4
          },
          "phone": "029-2368-722",
          "cell": "064-4358-632",
          "id": {
              "name": "SID",
              "value": "915048092"
          },
          "picture": {
              "large": "https://randomuser.me/api/portraits/women/52.jpg",
              "medium": "https://randomuser.me/api/portraits/med/women/52.jpg",
              "thumbnail": "https://randomuser.me/api/portraits/thumb/women/52.jpg"
          },
          "nat": "RS"
      },
      {
          "gender": "male",
          "name": {
              "title": "Mr",
              "first": "محمد",
              "last": "کریمی"
          },
          "location": {
              "street": {
                  "number": 5446,
                  "name": "شهید بهشتی"
              },
              "city": "بجنورد",
              "state": "هرمزگان",
              "country": "Iran",
              "postcode": 43345,
              "coordinates": {
                  "latitude": "-12.3894",
                  "longitude": "-25.3844"
              },
              "timezone": {
                  "offset": "+4:30",
                  "description": "Kabul"
              }
          },
          "email": "mhmd.khrymy@example.com",
          "login": {
              "uuid": "210be5d2-8c5f-4f08-9b60-3906e04164ef",
              "username": "happyswan997",
              "password": "buddy1",
              "salt": "RzXZmcXp",
              "md5": "c7df1d7266f5b9a4760f6adcafd423db",
              "sha1": "0ed6fccc891da98b5e53d087e03156ac0ea8a911",
              "sha256": "aa72dbd55d291c29fb05268d93d6f357ec5f36e1958848ac96f1d6d1ab6f0174"
          },
          "dob": {
              "date": "1978-03-23T16:30:25.653Z",
              "age": 44
          },
          "registered": {
              "date": "2020-02-11T18:24:36.330Z",
              "age": 2
          },
          "phone": "061-68438344",
          "cell": "0939-664-2286",
          "id": {
              "name": "",
              "value": null
          },
          "picture": {
              "large": "https://randomuser.me/api/portraits/men/15.jpg",
              "medium": "https://randomuser.me/api/portraits/med/men/15.jpg",
              "thumbnail": "https://randomuser.me/api/portraits/thumb/men/15.jpg"
          },
          "nat": "IR"
      },
      {
          "gender": "female",
          "name": {
              "title": "Miss",
              "first": "Aurora",
              "last": "Wright"
          },
          "location": {
              "street": {
                  "number": 9716,
                  "name": "Ward Street"
              },
              "city": "Porirua",
              "state": "Northland",
              "country": "New Zealand",
              "postcode": 25528,
              "coordinates": {
                  "latitude": "-34.1282",
                  "longitude": "42.4756"
              },
              "timezone": {
                  "offset": "0:00",
                  "description": "Western Europe Time, London, Lisbon, Casablanca"
              }
          },
          "email": "aurora.wright@example.com",
          "login": {
              "uuid": "9377268e-2d06-40c2-b938-a8d1023f502d",
              "username": "whitedog122",
              "password": "kayleigh",
              "salt": "roreeJ9k",
              "md5": "c01daaa0536e3c299071755887f15803",
              "sha1": "9d8a570ca35bf036a6bf8b59a29662aa297c09be",
              "sha256": "bad89864b769a83f7cb18739808f45a26fc05e75aa4ae77d199388308628d244"
          },
          "dob": {
              "date": "1982-02-19T11:27:22.553Z",
              "age": 40
          },
          "registered": {
              "date": "2003-08-10T05:36:07.403Z",
              "age": 19
          },
          "phone": "(114)-004-7070",
          "cell": "(792)-006-2983",
          "id": {
              "name": "",
              "value": null
          },
          "picture": {
              "large": "https://randomuser.me/api/portraits/women/42.jpg",
              "medium": "https://randomuser.me/api/portraits/med/women/42.jpg",
              "thumbnail": "https://randomuser.me/api/portraits/thumb/women/42.jpg"
          },
          "nat": "NZ"
      },
      {
          "gender": "female",
          "name": {
              "title": "Mrs",
              "first": "Julia",
              "last": "Nikula"
          },
          "location": {
              "street": {
                  "number": 3283,
                  "name": "Verkatehtaankatu"
              },
              "city": "Mariehamn",
              "state": "Finland Proper",
              "country": "Finland",
              "postcode": 47024,
              "coordinates": {
                  "latitude": "-20.1027",
                  "longitude": "-121.8698"
              },
              "timezone": {
                  "offset": "-3:30",
                  "description": "Newfoundland"
              }
          },
          "email": "julia.nikula@example.com",
          "login": {
              "uuid": "b1b05580-55bb-4537-8d93-d00690d54af0",
              "username": "angryfrog294",
              "password": "summer1",
              "salt": "pPExyEAc",
              "md5": "726ee57446d72c33413ad6a39e3e44b1",
              "sha1": "07d38aa2939c11b72cb94c0787ee7bbf24726534",
              "sha256": "06103368ba5e39dffc092b1b38bc8f79efb33cc54cbd5757c185ba8469ac71d4"
          },
          "dob": {
              "date": "1989-11-24T06:24:59.556Z",
              "age": 33
          },
          "registered": {
              "date": "2019-04-23T08:45:59.412Z",
              "age": 3
          },
          "phone": "04-009-739",
          "cell": "049-785-74-38",
          "id": {
              "name": "HETU",
              "value": "NaNNA900undefined"
          },
          "picture": {
              "large": "https://randomuser.me/api/portraits/women/39.jpg",
              "medium": "https://randomuser.me/api/portraits/med/women/39.jpg",
              "thumbnail": "https://randomuser.me/api/portraits/thumb/women/39.jpg"
          },
          "nat": "FI"
      },
      {
          "gender": "male",
          "name": {
              "title": "Mr",
              "first": "Gerfried",
              "last": "Hoch"
          },
          "location": {
              "street": {
                  "number": 9339,
                  "name": "Ahornweg"
              },
              "city": "Gemünden am Main",
              "state": "Niedersachsen",
              "country": "Germany",
              "postcode": 68619,
              "coordinates": {
                  "latitude": "-55.7888",
                  "longitude": "-11.7483"
              },
              "timezone": {
                  "offset": "-8:00",
                  "description": "Pacific Time (US & Canada)"
              }
          },
          "email": "gerfried.hoch@example.com",
          "login": {
              "uuid": "aa3a343d-87e3-44ac-8346-668da53f1916",
              "username": "sadkoala851",
              "password": "bonjour",
              "salt": "4w8HJbrf",
              "md5": "4fad7263f5454ce3806e76f76cc61909",
              "sha1": "3f0be1177c787d19ff7b93f36d80cc1e9dbc0796",
              "sha256": "bb0310447c293e0ed8c1765f3e9942e16665fb0dc8154ce2ded78e995f9097bc"
          },
          "dob": {
              "date": "1967-04-16T12:47:32.065Z",
              "age": 55
          },
          "registered": {
              "date": "2010-09-11T16:08:02.078Z",
              "age": 12
          },
          "phone": "0699-1229868",
          "cell": "0175-6234349",
          "id": {
              "name": "SVNR",
              "value": "12 160467 H 238"
          },
          "picture": {
              "large": "https://randomuser.me/api/portraits/men/67.jpg",
              "medium": "https://randomuser.me/api/portraits/med/men/67.jpg",
              "thumbnail": "https://randomuser.me/api/portraits/thumb/men/67.jpg"
          },
          "nat": "DE"
      },
      {
          "gender": "male",
          "name": {
              "title": "Mr",
              "first": "Brayden",
              "last": "Elliott"
          },
          "location": {
              "street": {
                  "number": 3264,
                  "name": "South Street"
              },
              "city": "Westminster",
              "state": "Bedfordshire",
              "country": "United Kingdom",
              "postcode": "GL4 9FE",
              "coordinates": {
                  "latitude": "67.1850",
                  "longitude": "-147.9898"
              },
              "timezone": {
                  "offset": "-4:00",
                  "description": "Atlantic Time (Canada), Caracas, La Paz"
              }
          },
          "email": "brayden.elliott@example.com",
          "login": {
              "uuid": "f392bda8-63b5-4b6c-930c-426df9e2b2ad",
              "username": "smallkoala564",
              "password": "descent",
              "salt": "UF2apZkO",
              "md5": "46994aa959055737509fee307fc6b20d",
              "sha1": "d355b2c10253473a2e0cddc3048a03bfcbfe8c05",
              "sha256": "b54c1f535aa4390c974d39c2f0c62e7ddc4bfab9fc944d1e74c407efc9172dc2"
          },
          "dob": {
              "date": "1959-06-22T20:47:14.502Z",
              "age": 63
          },
          "registered": {
              "date": "2005-07-26T17:09:24.782Z",
              "age": 17
          },
          "phone": "017687 50642",
          "cell": "07034 706644",
          "id": {
              "name": "NINO",
              "value": "WM 99 29 19 D"
          },
          "picture": {
              "large": "https://randomuser.me/api/portraits/men/81.jpg",
              "medium": "https://randomuser.me/api/portraits/med/men/81.jpg",
              "thumbnail": "https://randomuser.me/api/portraits/thumb/men/81.jpg"
          },
          "nat": "GB"
      }
  ],
  "info": {
      "seed": "659ea317c6665fd5",
      "results": 10,
      "page": 1,
      "version": "1.4"
  }
};