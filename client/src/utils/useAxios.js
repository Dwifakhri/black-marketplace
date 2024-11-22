import axios from "axios";

axios.defaults.baseURL = process.env.BASE_API_URL;

const api = async (url, options) => {
  let config = {
    url,
    options: {
      ...options,
      headers: {
        "Content-Type": options.contentType
          ? options.contentType
          : "application/json",
      },
    },
  };

  let response;
  try {
    const res = await axios(url, config);
    response = res.data;
  } catch (error) {
    response = error;
  }
  return response;
};

export { api };
