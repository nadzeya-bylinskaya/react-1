import * as axios from "axios";

//const baseUrl = `https://social-network.samuraijs.com/api/1.0/`;

const instance = axios.create({
  withCredentials: true,
  baseURL: "https://social-network.samuraijs.com/api/1.0/",
  headers: {
    "API-KEY": "729a3c88-8467-4e83-b42f-fb9feb448c1a"
  }
});

export const usersAPI = {
  getUsers(currentPage = 1, pageSize = 10) {
    return instance
      .get(`users?page=${currentPage}&count=${pageSize}`)
      .then(response => {
        return response.data;
      });
  },
  follow(userId) {
    return instance.post(`follow/${userId}`);
  },
  unfollow(userId) {
    return instance.delete(`follow/${userId}`);
  },
  getProfile(userId) {
    return instance.get(`profile/` + userId);
  }
};
export const authAPI = {
  me() {
    return instance.get(`auth/me`);
  }
};
