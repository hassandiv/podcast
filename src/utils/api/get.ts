import axios from "axios";

const baseUrl =
  process.env.NEXT_PUBLIC_LISTEN_NOTES_PROD_API_URL ||
  "https://listen-api.listennotes.com/api/v2";
const APIKEY = process.env.NEXT_PUBLIC_LISTEN_NOTES_APIKEY || "add your apikey";

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
    console.log("Error", err.message);
    return err.message;
  }
};
