import { AUTHORIZATION } from "./timekit";
import Axios from "axios";

export const deleteSlot = async () => {
  const config = (id) => ({
    method: "delete",
    mode: "no-cors",
    // data: JSON.stringify(user),
    url: `http://heng.g42.ae/biogenix/api/slots/${id}`,
    headers: {
      "Content-Type": "application/json",
      // "Access-Control-Allow-Origin": "*",
      Authorization: `Bearer ${AUTHORIZATION}`,
    },
  });
  let slot = [];
  var a = await Axios.get("http://heng.g42.ae/biogenix/api/slots");
  a.data.map((c) => {
    slot.push(Axios(config(c.id)));
  });
};
