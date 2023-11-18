/** @format */
import {useStorage} from "@vueuse/core";
export const useLogin = () => useState("login", () => 0);

export const setLoginStatus = (value = 0) => {
  const isLogin = useStorage("w_l_s_u");
  if (isLogin.value === undefined) {
    isLogin.value = value;
  }
  const login = useLogin();
  login.value = isLogin.value;
};
