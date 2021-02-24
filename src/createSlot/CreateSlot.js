import React, { Component } from "react";
import { GET_DATA } from "./get_api_data";
import { CREATE_SLOT } from "./create_slot";
import { getFormattedDate } from "./date";
import { PROJECT_ID, RESOURCE_ID } from "./timekit";
import moment from "moment";
import { makingPromisesBody } from "./makingPromisesBody";
import { deleteSlot } from "./deleteSlots";

export class CreateSlot extends Component {
  state = { apiData: [] };

  makingSlot = () => {
    var body = {
      endTime: "2021-02-02T20:00:00+04:00",
      facilityId: 1252,
      maxCapacity: 3,
      serviceProvidedId: 1352,
      startTime: "2021-02-02T19:45:00+04:00",
    };

    CREATE_SLOT(body)
      .then(function (response) {
        debugger;
        // The API call was successful!
        console.log("slot create success fully ");
      })
      .catch(function (err) {
        debugger;
        // There was an error
        console.warn("Something went wrong.", err);
      });
  };

  componentDidMount() {
    // GET_DATA()
    //   .then((response) => {
    //     debugger;
    //     this.setState({
    //       apiData: response.data.data.sort(
    //         (a, b) => new Date(a.start) - new Date(b.start)
    //       ),
    //       loading: false,
    //     });
    //   })
    //   .catch((error) => {
    //     debugger;
    //     // toast.error(" API DATA loaded failed. ", { autoClose: false });
    //     console.log(error);
    //   });
    // this.makingSlot();
    // this.makingSlot();
    // var a = new moment();
    // const date = moment(new Date()).add(21, "day"); // 20 feb 2021 slot is done
    makingPromisesBody();
    // deleteSlot();
    // debugger;
    // this.makingSlot();
    // debugger;
  }

  render() {
    return <div>total slot is {this.state.apiData.length}.</div>;
  }
}

export default CreateSlot;
