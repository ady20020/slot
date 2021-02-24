import Axios from "axios";
import { ENDPOINTS } from "./endpoints";
import { API_BODY } from "./api_body";

/**
 * API method to book apointment
 * @param {API_BODY} params - An object containing the Header and body and url
 * @param {data} urlprefix - url prefix used for SSR
 * @return {Promise}
 */

export const CREATE_SLOT = (data, params, urlprefix = "") =>
  Axios.post(ENDPOINTS.CREATE_SLOT_API, data, API_BODY, { params });
