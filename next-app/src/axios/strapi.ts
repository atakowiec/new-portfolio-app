"use server";
import {Axios} from 'axios';

const API_URL = process.env.STRAPI_URL || 'http://localhost:1337';
const STRAPI_TOKEN = process.env.STRAPI_TOKEN;

const instance = new Axios({
  headers: {
    Authorization: `Bearer ${STRAPI_TOKEN}`,
  },
})

export async function fetchStrapi(url: string, locale: "pl" | "en" = "en") {
  const result = await instance.get(`${API_URL}/api/${url}?locale=${locale}`);

  return JSON.parse((result).data).data;
}