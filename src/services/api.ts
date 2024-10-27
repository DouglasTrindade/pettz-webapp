import axios from "axios";
import qs from "qs";
import { signOut, getSession } from "next-auth/react";
import _ from "lodash";

const api = axios.create({
  baseURL: process.env.NEXT_PUBLIC_API_BASE_URL,
  headers: { accept: "application/json" },
  paramsSerializer: {
    serialize: (params) => qs.stringify(params, { arrayFormat: "brackets" }),
  },
});

axios.interceptors.request.use(async (config) => {
  const session = await getSession();
  if (session) {
    config.headers.Authorization = `Bearer ${session.accessToken}`;
  }
  return config;
});

api.interceptors.response.use(
  (response) => response,
  async (error) => {
    if (401 === _.get(error, "response.status")) {
      return signOut();
    } else return Promise.reject(error);
  }
);

export { api };
