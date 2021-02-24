import { PROJECT_ID, RESOURCE_ID } from "./timekit";
import moment from "moment";

import { CREATE_SLOT } from "./create_slot";

export function makingPromisesBody(
  startDate = moment(new Date()),
  endDate = moment(startDate).add(30, "day")
) {
  // debugger;moment().utc(0).format('YYYY-MM-DD HH:mm Z')
  const format = "YYYY-MM-DD HH:mm Z";

  let promises = [];

  let promisesBody = [];

  const TEST_TYPE = [
    "PCR Test",
    "IgG Test",
    "IgM Test",
    "Neutralising Antibodies Test",
  ];
  const LOCATION_TO_SELECT = ["Masdar City", "Al Hosn"];

  function homeService() {
    const homeServieTestData = {
      locationPlace: [
        "Abu-Dhabi",
        "Dubai",
        "Sharjah",
        "Ajman",
        "Ras Al Khaimah",
      ],
      timing: { startHour: 10, startMin: 0, endHour: 16, endMin: 0 },
      slotFrequencyInMinute: 120,
    };

    const {
      locationPlace,
      timing: {
        startHour,
        startMin,
        startSecond = 0,
        startMillisecond = 0,
        endHour,
        endMin,
        endSecond = 0,
        endMillisecond = 0,
      },
      slotFrequencyInMinute,
    } = homeServieTestData;
    locationPlace.forEach((current) => {
      let _startDate = startDate.set({
        hour: startHour,
        minute: startMin,
        second: startSecond,
        millisecond: startMillisecond,
      });
      let _endDate = endDate.set({
        hour: endHour,
        minute: endMin,
        second: endSecond,
        millisecond: endMillisecond,
      });
      while (_startDate.isBefore(_endDate)) {
        if (_startDate.hour() >= endHour) {
          _startDate.add(1, "day").set({
            hour: startHour,
            minute: startMin,
          });
        } else {
          promisesBody.push({
            resource_id: RESOURCE_ID,
            graph: "group_owner",
            action: "create",
            project_id: PROJECT_ID,
            event: {
              start: _startDate.format(),
              end: _startDate
                .add("minute", slotFrequencyInMinute)
                .format(format),
              what: "Home_Service",
              where: current,
            },
            settings: { max_seats: "3" },
          });
        }
      }
    });
  }
  g42Lab();
  // homeService();
  // moment().parseZone().utcOffset(0, true).format()
  function g42Lab() {
    const g42LabTestData = [
      {
        facilityId: 2902,
        timing: { startHour: 4, startMin: 0, endHour: 18, endMin: 0 },
        slotFrequencyInMinute: 15,
        // testType: ["PCR Test"],
      },
      {
        facilityId: 2901,
        timing: { startHour: 6, startMin: 0, endHour: 16, endMin: 0 },
        slotFrequencyInMinute: 15,
        // testType: ["PCR Test"],
      },
    ];

    g42LabTestData.forEach((current) => {
      const {
        facilityId,
        timing: {
          startHour,
          startMin,
          startSecond = 0,
          startMillisecond = 0,
          endHour,
          endMin,
          endSecond = 0,
          endMillisecond = 0,
        },
        slotFrequencyInMinute,
        // testType,
      } = current;
      debugger;
      let _startDate = moment(startDate).set({
        hour: startHour,
        minute: startMin,
        second: startSecond,
        millisecond: startMillisecond,
      });
      let _endDate = endDate.set({
        hour: startHour,
        minute: startMin,
        second: startSecond,
        millisecond: startMillisecond,
      });
      while (_startDate.isBefore(_endDate)) {
        if (_startDate.hour() >= endHour) {
          _startDate.add(1, "day").set({
            hour: startHour,
            minute: startMin,
          });
        } else {
          const body = {
            facilityId,
            startTime: _startDate.parseZone().utcOffset(0, true).format(),
            endTime: _startDate
              .add("minute", slotFrequencyInMinute)
              .parseZone()
              .utcOffset(0, true)
              .format(),
            maxCapacity: 3.0,
            serviceProvidedId: 3001,
          };
          promisesBody.push(body);
          // const body = {
          //   resource_id: RESOURCE_ID,
          //   graph: "group_owner",
          //   action: "create",
          //   project_id: PROJECT_ID,
          //   event: {
          //     start: _startDate.format(),
          //     end: _startDate.add("minute", slotFrequencyInMinute).format(),
          //     where: locationPlace,
          //   },
          //   settings: { max_seats: "12" },
          // };
          // for (const element of testType) {
          //   const event = { ...body.event, what: element };
          //   promisesBody.push({ ...body, event });
          // }
        }
      }
    });
  }
  console.log(promisesBody);
  // let a = CREATE_SLOT(promisesBody);
  // console.log(a);

  // Promise.all(promises).then(function (results) {
  //   results.forEach(function (response) {
  //     const question = response;
  //   });
  // });
}
