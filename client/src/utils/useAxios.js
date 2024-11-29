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
  const result = await axios(url, config);
  return result;
};
