/** @format */

let routes = [
  {
    itemGroup: [
      {
        path: "/Bonus",
        name: "Bonus",
        meta: {title: "H0004", icon: "bonus", class: "menu-bonus", type: "image", auth: false, route: true},
        children: [],
      },
      {
        path: "/vip",
        name: "vip",
        meta: {title: "H0005", icon: "vip", class: "menu-vip", type: "image", auth: true, route: true},
        children: [],
      },
    ],
  },

  {
    itemGroup: [
      {
        path: "/about",
        name: "about",
        meta: {title: "H0006", icon: "Mygame", auth: true, route: true},
        children: [],
      },
      {
        path: "/Recent",
        name: "Recent",
        meta: {title: "H0007", icon: "Recent", auth: true, route: true},
        children: [],
      },
      {
        path: "/Casino",
        name: "Casino",
        meta: {title: "H0002", icon: "Casino", auth: true, route: true},
        children: [],
      },
    ],
  },
  {
    itemGroup: [
      {
        path: "/Affiliate",
        name: "Affiliate",
        meta: {title: "H0008", icon: "Affiliate", auth: true, route: true},
        children: [],
      },
      {
        path: "/Rewards",
        name: "Rewards",
        meta: {title: "H0009", icon: "Rewards", auth: true, route: true},
        children: [],
      },
    ],
  },
  {
    itemGroup: [
      {
        path: "/Instalar",
        name: "Instalar",
        meta: {title: "H0032", icon: "xiazai", auth: false, route: false, type: "install"},
        children: [],
      },
    ],
  },
];

export default routes;
