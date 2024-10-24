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
  } catch (error) {
    console.error("Erro ao adicionar o token à requisição:", error);
  }

  return config;
});

api.interceptors.response.use(
  (response) => response,
  async (error) => {
    try {
      const statusCode = _.get(error, "response.status");
      const apiStatusCode = _.get(error, "response.data.status_code");
      if (
        (statusCode === 401 || apiStatusCode === 401) &&
        window !== undefined
      ) {
        console.warn("Token expirado ou inválido. Realizando sign out...");
        await signOut();
      }
    } catch (error) {
      console.error("Erro no interceptor de resposta:", error);
    }

    return Promise.reject(error);
  }
);

export { api };
