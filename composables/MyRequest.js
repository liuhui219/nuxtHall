/** @format */

import {ElMessage} from "element-plus";

const codeMessage = {
  200: "服务器成功返回请求的数据。",
  201: "新建或修改数据成功。",
  202: "一个请求已经进入后台排队（异步任务）。",
  204: "删除数据成功。",
  400: "发出的请求有错误，服务器没有进行新建或修改数据的操作。",
  401: "用户没有权限（令牌、用户名、密码错误）。",
  403: "用户得到授权，但是访问是被禁止的。",
  404: "发出的请求针对的是不存在的记录，服务器没有进行操作。",
  406: "请求的格式不可得。",
  410: "请求的资源被永久删除，且不会再得到的。",
  422: "当创建一个对象时，发生一个验证错误。",
  500: "服务器发生错误，请检查服务器。",
  502: "网关错误。",
  503: "服务不可用，服务器暂时过载或维护。",
  504: "网关超时。",
};

const request = async (url, method, body, query, headers, options) => {
  const apiBase = useRuntimeConfig().public.apiBase;
  let header = {};
  if (method === "get") {
    header = {"Content-Type": "application/x-www-form-urlencoded"};
  } else if (method === "post") {
    header = {"Content-Type": "application/json"};
  }

  headers = Object.assign({}, header, headers);

  return await useFetch(url, {
    default: () => [],
    baseURL: apiBase,
    key: url,
    method,
    query,
    headers,
    // lazy: true,
    credentials: "include",
    body,

    onRequest({request, options}) {},
    onRequestError({request, options, error}) {
      console.log(error);
      ElMessage.closeAll();

      // Handle the request errors
    },
    onResponse({request, response, options}) {
      // Process the response data
      return response._data;
    },
    onResponseError({request, response, options}) {
      console.log("🚀 ~ file: MyRequest.ts:42 ~ onResponseError ~ request:", request);
      // Handle the response errors
    },
  });
};

export const useDefaultRequest = {
  get: (url, params = null, query = null, headers = {}, option = {}) => {
    return request(url, "get", params, query, headers, option);
  },
  post: (url, params = null, query = null, headers = {}, option = {}) => {
    return request(url, "post", params, query, headers, option);
  },
};
