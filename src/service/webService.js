import axios from "axios";

export const getData = async ({ baseUrl, url, params = {} }) => {
  try {
    const response = await axios.get(`${baseUrl}/${url}`, { params });
    return { success: true, data: response.data };
  } catch (error) {
    if (error?.response) {
      // Server responded with an error status (bad city, invalid key, etc.)
      return {
        success: false,
        errorType: "api",
        message:
          error.response.data?.error?.message ??
          "Something went wrong while fetching the weather.",
      };
    }

    // No response at all → connection / network problem
    return {
      success: false,
      errorType: "network",
      message:
        "Couldn't reach the weather service. Check your connection and try again.",
    };
  }
};
