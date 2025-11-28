import api from "./api";
import type { User } from "@/types";

export interface RegisterData {
  email: string;
  username: string;
  password: string;
}

export interface LoginData {
  email: string;
  password: string;
}

export interface LoginResponse {
  token: string;
  user: User;
}

export interface RegisterResponse extends User {}

const authService = {
  async register(data: RegisterData): Promise<RegisterResponse> {
    const response = await api.post<RegisterResponse>("/auth/register", data);
    return response.data;
  },

  async login(data: LoginData): Promise<LoginResponse> {
    const response = await api.post<LoginResponse>("/auth/login", data);
    return response.data;
  },

  async logout(): Promise<void> {
    await api.post("/auth/logout");
  },
};

export default authService;

