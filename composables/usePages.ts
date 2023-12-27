/** @format */
import store from "store";
import {useStorage} from "@vueuse/core";
import {v4 as uuidv4} from "uuid";

export const storages = (key: string, value: unknown) => {
  return useStorage(key, value);
};

export const getUid = () => useState("last-uid", () => "");

export const setUid = () => {
  const lastUid = useStorage("LastUid");
  const loginStatus = useStorage("w_l_s_a");
  if (lastUid.value === undefined) {
    lastUid.value = uuidv4();
  }

  const uid = getUid();
  uid.value = lastUid.value;
};
