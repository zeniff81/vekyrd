import axios from "axios";

export function initAxiosInterceptors() {
  axios.interceptors.request.use(request => {
    const token = localStorage.authToken;
    if (token) {
      request.headers.common.authorization = `Bearer ${token}`;
    }
    return request;
  });
}
