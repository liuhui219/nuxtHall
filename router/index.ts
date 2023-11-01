/**
 * @format
 * @Author: liuhui219 liuhui219@126.com
 * @Date: 2023-10-21 10:09:25
 * @LastEditors: liuhui219 liuhui219@126.com
 * @LastEditTime: 2023-10-31 15:09:03
 * @FilePath: \hall\router\index.ts
 * @Description: 这是默认设置,请设置`customMade`, 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
 */

/** @format */

let routes = [
  {
    itemGroup: [
      {
        path: "/Bonus",
        name: "Bonus",
        meta: {title: "H0004", icon: "bonus", class: "menu-bonus", type: "image"},
        children: [],
      },
      {
        path: "/vip",
        name: "vip",
        meta: {title: "H0005", icon: "vip", class: "menu-vip", type: "image"},
        children: [],
      },
    ],
  },

  {
    itemGroup: [
      {
        path: "/Mygame",
        name: "Mygame",
        meta: {title: "H0006", icon: "Mygame"},
        children: [],
      },
      {
        path: "/Recent",
        name: "Recent",
        meta: {title: "H0007", icon: "Recent"},
        children: [],
      },
      {
        path: "/Casino",
        name: "Casino",
        meta: {title: "H0002", icon: "Casino"},
        children: [],
      },
    ],
  },
  {
    itemGroup: [
      {
        path: "/Affiliate",
        name: "Affiliate",
        meta: {title: "H0008", icon: "Affiliate"},
        children: [],
      },
      {
        path: "/Rewards",
        name: "Rewards",
        meta: {title: "H0009", icon: "Rewards"},
        children: [],
      },
    ],
  },
];

export default routes;
