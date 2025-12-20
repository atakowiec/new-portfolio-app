"use server";
import {Axios} from 'axios';

const API_URL = process.env.STRAPI_URL || 'http://localhost:1337';

const instance = new Axios({
  headers: {
    Authorization: `Bearer ${process.env.STRAPI_TOKEN}`,
  },
})

export async function fetchStrapi(url: string, locale: "pl" | "en" = "en") {
  return JSON.parse((await instance.get(`${API_URL}/api/${url}?locale=${locale}`)).data);
}