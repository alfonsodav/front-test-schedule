import axios from "axios";

export const apiFetch = async (endpoint, options = {}) => {
  const res = await fetch(`${process.env.NEXT_PUBLIC_API_HOST}${endpoint}`, {
    headers: {
      "Content-Type": "application/json",
      ...options.headers,
    },
    ...options,
  });

  if (!res.ok) {
    console.log("API res", res);
    throw new Error(`Error: ${res.status}`);
  }

  const data = await res.json();
  return data;
};

export const apiAxios = async (endpoint, options = {}) => {
  let res = {};
  console.log("endpoint", `${process.env.NEXT_PUBLIC_API_HOST}${endpoint}`);
  console.log("options", options);
  if (options.method.toUpperCase() === "GET") {
    res = await axios.get(`${process.env.NEXT_PUBLIC_API_HOST}${endpoint}`, {
      headers: {
        "Content-Type": "application/json",
        ...options.headers,
      },
      ...options,
    });
  } else if (
    options.method.toUpperCase() === "POST" ||
    options.method.toUpperCase() === "PUT"
  ) {
    res = await axios.post(
      `${process.env.NEXT_PUBLIC_API_HOST}${endpoint}`,
      options.body,
      {
        headers: {
          "Content-Type": "application/json",
          ...options.headers,
        },
        ...options,
      }
    );
  }

  if (!res?.ok) {
    console.log("API error", res.response.data);
    throw new Error(res.response.data);
  }

  const data = await res.json();
  return data;
};
