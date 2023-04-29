import axios from "axios";

const baseUrl = process.env.NEXT_PUBLIC_LISTEN_NOTES_PROD_API_URL;
const APIKEY = process.env.NEXT_PUBLIC_LISTEN_NOTES_APIKEY;

export const get = async (endpoint: string) => {
  try {
    const response = await axios({
      url: `${baseUrl}/${endpoint}`,
      method: "get",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json; charset=utf-8",
        "X-ListenAPI-Key": APIKEY,
      },
    });

    return response;
  } catch (err: any) {
    return err;
  }
};
