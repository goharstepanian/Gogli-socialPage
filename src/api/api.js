import axios from "axios"

const instance = axios.create({
  baseURL: "https://social-network.samuraijs.com/api/1.0",
  withCredentials: true,
  headers: {
    "API-KEY": "bc12bfe9-c7dc-4235-b29e-abe7e4f3d8c2",
  },
});

export const SocialAPI = {
  getUsers(page = 1) {
    return instance.get(`/users?page=${page}&count=100`);
  },
  getProfile(userId) {
    return instance.get(`/profile/${userId}`);
  },
  setLogin(email, password) {
    return instance.post(`/auth/login`, { email, password });
  },
  changePhoto(file) {
    let formData = new FormData();
    formData.append("file", file);
    return instance.put(`/profile/photo`, formData);
  },
  getStatus(userId) {
    return instance.get(`/profile/status/${userId}`);
  },
  changeStatus(newStatus) {
    return instance.put("/profile/status", { status: newStatus });
  },
};
