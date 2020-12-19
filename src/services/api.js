import axios from "axios";

// Create a instance of axios to use the same base url.
const axiosAPI = axios.create({
  baseURL: "https://api-b2b.backenster.com/b1/api/v3"
  //headers: { Authorization: "Bearer a_ItVQVpy8n2JpN7SO382k7W0vMPV3O27WE9QQ0PXkAAAPDX9HEHRS5VJmcPuOPGzZoH2U0PglLUVbv2W0" },
});

// implement a method to execute all the request from here.
const apiRequest = async (method, url, request) => {
  try {
    const headers = { Authorization: "Bearer a_ItVQVpy8n2JpN7SO382k7W0vMPV3O27WE9QQ0PXkAAAPDX9HEHRS5VJmcPuOPGzZoH2U0PglLUVbv2W0" };
    const response = await axiosAPI({ method, url, headers, data: request });
    return response.data;
  } catch (error) {
    return error.response;
  }
};

// function to execute the http get request
const get = (url) => apiRequest("get", url);

// function to execute the http post request
const post = (url, request) => apiRequest("post", url, request);

// function to execute the http put request
const put = (url, request) => apiRequest("put", url, request);

// function to execute the http delete request
const deleteRequest = (url, request) => apiRequest("delete", url, request);

// expose your method to other services or actions
const API = {
  get,
  delete: deleteRequest,
  post,
  put,
};
export default API;
