import axios from "axios";

axios.defaults.baseURL = `http://localhost:8000/api`;

export const api = async (url, options) => {
  let config = {
    url,
    method: options.method || "GET",
    data: options.data,
    headers: {
      "Content-Type": options.contentType
        ? options.contentType
        : "application/json",
    },
  };
  let result = {};
  try {
    const res = await axios(url, config);
    result.response = res.data;
    result.status = 200;
  } catch (error) {
    result.response = error;
    result.status = error?.response?.status ?? 500;
  }
  return result;
};
