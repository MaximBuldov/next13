import { IAuthError, IAuthResponse, ILogin } from "@/models";
import { $auth, $wpApi } from "../http";
import { saveToStorage } from "./auth.helper";
import { AxiosResponse } from "axios";

export const AuthService = {
  async login(data: ILogin) {
    try {
      const res = await $wpApi.post('jwt-auth/v1/token', data) as AxiosResponse<IAuthResponse, IAuthError>;
      saveToStorage(res.data);
    } catch (e) {
      return e;
    }
  },

  async validateToken() {
    try {
      const res = await $auth.post('jwt-auth/v1/token/validate') as AxiosResponse<IAuthError>;
      return res.data.data.status === 200;
    } catch (e) {
      return false;
    }
  }
}