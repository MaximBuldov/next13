import { IAuthResponse } from "@/models";
import Cookies from "js-cookie"

export const getAccessToken = () => {
  const accessToken = Cookies.get('accessToken');
  return accessToken || null;
}

export const getUserFromStorage = () => {
  return JSON.parse(localStorage.getItem('user') || '{}')
}

export const saveTokensStorage = (token: string) => {
  Cookies.set('accessToken', token);
}

export const removeTokensStorage = () => {
  Cookies.remove('accessToken');
  localStorage.removeItem('user');
}

export const saveToStorage = ({ token, user_email, user_display_name, user_nicename }: IAuthResponse) => {
  saveTokensStorage(token);
  localStorage.setItem('user', JSON.stringify({ user_email, user_display_name, user_nicename }))
}


