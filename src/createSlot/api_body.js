import { AUTHORIZATION } from "./timekit";
export const API_BODY = {
  headers: {
    accept: "application/json, text/plain, */*",
    authorization: `Bearer ${AUTHORIZATION}`,
    "cache-control": "no-cache",
  },
  async: true,
  crossDomain: true,
  processData: false,
  method: "POST",
};

// settings = {
//   "async": true,
//   "crossDomain": true,
//   "url": "http://localhost:8080/api/slots/bulk",
//   "method": "POST",
//   "headers": {
//     "content-type": "application/json",
//     "authorization": "Bearer eyJhbGciOiJIUzUxMiJ9.eyJzdWIiOiJhZG1pbiIsImF1dGgiOiJST0xFX0FETUlOLFJPTEVfVVNFUiIsImV4cCI6MTYxMjM1Mjg5MX0.7OmwLdS-DImIz7FXAbdQrG7ppDQXOhYrEadDVJtuj-ENrKi5l1mnD71ruo7IZqp9DJgvnJMeedX4C1CUpN8BUg",
//     "cache-control": "no-cache",
//     "postman-token": "0bc88e25-03ea-4c01-f658-90b18e9af031"
//   },
//   "processData": false,
//   "data": "[ {\n  \"startTime\" : \"2021-03-01T10:30:00Z\",\n  \"endTime\" : \"2021-03-01T10:45:00Z\",\n  \"maxCapacity\" : 30.0,\n  \"serviceProvidedId\" : 1352,\n  \"facilityId\" : 1251\n}\n ]"
// }
