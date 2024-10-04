import axios from "axios";
import _ from "lodash";
import { signOut, getSession } from "next-auth/react";
import qs from "qs";

const api = axios.create({
  baseURL: process.env.NEXT_PUBLIC_API_BASE_URL,
  headers: { accept: "application/json" },
  paramsSerializer: {
    serialize: (params) => qs.stringify(params, { arrayFormat: "brackets" }),
  },
});

api.interceptors.request.use(async (config) => {
  try {
    const session = await getSession();

    if (session?.user.token)
      config.headers.Authorization = `Bearer ${session.user.token}`;
  } catch (error) {}

  return config;
});

api.interceptors.response.use(
  (response) => response,
  async (error) => {
    try {
      if (
        (401 == _.get(error, "response.status") ||
          401 == _.get(error, "response.data.status_code")) &&
        window !== undefined
      )
        return signOut();
    } catch (error) {}

    return Promise.reject(error);
  }
);

export { api };
