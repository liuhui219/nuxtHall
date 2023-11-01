/**
 * @format
 * @Author: liuhui219 liuhui219@126.com
 * @Date: 2023-10-31 15:42:58
 * @LastEditors: liuhui219 liuhui219@126.com
 * @LastEditTime: 2023-10-31 15:43:55
 * @FilePath: \hall\composables\usePages.ts
 * @Description: 这是默认设置,请设置`customMade`, 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
 */

/** @format */

import {useStorage} from "@vueuse/core";
import {v4 as uuidv4} from "uuid";

export const storages = (key: string, value: unknown) => {
  return useStorage(key, value);
};

export const getUid = () => useState("last-uid", () => "");

export const setUid = () => {
  const lastUid = useStorage("LastUid");
  if (lastUid.value === undefined) {
    lastUid.value = uuidv4();
  }
  const uid = getUid();
  uid.value = lastUid.value;
};
