import Axios from "axios";
import { ENDPOINTS } from "./endpoints";
import { API_BODY } from "./api_body";

/**
 * API method to book apointment
 * @param {body} params - An object containing the Header and body and url
 * @param {string} urlprefix - url prefix used for SSR
 * @return {Promise}
 */

export const GET_DATA = (body, params, urlprefix = "") =>
  Axios.get(ENDPOINTS.GET_API, API_BODY, { params });
