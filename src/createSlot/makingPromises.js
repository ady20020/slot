export function makingPromises(dataString) {
  let promises = [];

  const TEST_TYPE = [
    "PCR Test",
    "IgG Test",
    "IgM Test",
    "Neutralising Antibodies Test",
  ];
  const LOCATION_TO_SELECT = ["Masdar City", "Al Hosn"];

  for (i = 0; i < TEST_TYPE.length; i++) {}

  const apiUrl =
      "https://api.stackexchange.com/2.2/questions?pagesize=1&order=desc&sort=activity&site=",
    sites = ["stackoverflow", "ubuntu", "superuser"],
    myArrayOfData = sites.map(function (site) {
      return { webAddress: apiUrl + site };
    });

  function convertToStringValue(obj) {
    return JSON.stringify(obj, null, "\t");
  }

  // Original question code
  let mainObject = {};

  myArrayOfData.forEach(function (singleElement) {
    const myUrl = singleElement.webAddress;
    promises.push(axios.get(myUrl));
  });

  Promise.all(promises).then(function (results) {
    results.forEach(function (response) {
      const question = response.data.items[0];
      mainObject[question.question_id] = {
        title: question.title,
        link: question.link,
      };
    });

    console.log(convertToStringValue(mainObject));
  });
}
