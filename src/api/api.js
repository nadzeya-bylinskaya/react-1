import * as axios from "axios";

//const baseUrl = `https://social-network.samuraijs.com/api/1.0/`;

const instance = axios.create({
  withCredentials: true,
  baseURL: "https://social-network.samuraijs.com/api/1.0/",
  headers: {
    "API-KEY": "75cb9032-d984-4e3c-881f-34406d18d9e9"
  }
});

export const usersAPI = {
  getUsers(currentPage = 1, pageSize = 10) {
    return instance
      .get(`users?page=${currentPage}&count=${pageSize}`)
      .then(response => {
        return response.data;
      });
  }
};
