import axios from "axios";

export const getData = async ({ baseUrl, url, params = {} }) => {
  try {
    const response = await axios.get(`${baseUrl}/${url}`, { params });
    return { success: true, data: response.data };
  } catch (error) {
    return {
      success: false,
      message: error?.response?.data?.error?.message ?? "Error",
    };
  }
};
