/** @format */

let routes = [
  {
    class: "grid grid-cols-2 gap",
    itemGroup: [
      {
        path: "/Bonus",
        name: "Bonus",
        meta: {
          title: "H0041",
          icon: "qianbao",
          class: "menu-bonus w-full justify-center",
          imageWidth: "20",
          type: "image",
          auth: false,
          route: true,
        },
        children: [],
      },
      {
        path: "/vip",
        name: "vip",
        meta: {
          title: "H0042",
          icon: "qian",
          class: "menu-vip w-full justify-center",
          imageWidth: "25",
          type: "image",
          auth: true,
          route: true,
        },
        children: [],
      },
      {
        path: "/Bonus",
        name: "Bonus",
        meta: {
          title: "H0044",
          icon: "h5_xiazai_icon",
          class: "menu-Download  col-span-2 justify-center",
          imageWidth: "14",
          type: "image",
          description: true,
          auth: false,
          route: true,
        },
        children: [],
      },
    ],
  },

  {
    itemGroup: [
      {
        path: "/about",
        name: "about",
        meta: {
          title: "H0035",
          icon: "h5_qiandao_icon",
          auth: true,
          route: true,
          type: "image",
          imageWidth: "16",
          arrow: true,
        },
        children: [],
      },
      {
        path: "/Recent",
        name: "Recent",
        meta: {
          title: "H0036",
          icon: "h5_youjian_icon",
          auth: true,
          route: true,
          type: "image",
          imageWidth: "16",
          arrow: true,
        },
        children: [],
      },
      {
        path: "/Casino",
        name: "Casino",
        meta: {
          title: "H0037",
          icon: "h5_huodong_icon",
          auth: true,
          route: true,
          type: "image",
          imageWidth: "16",
          arrow: true,
        },
        children: [],
      },
      {
        hash: "withdrawal",
        name: "withdrawal",
        meta: {
          title: "H0038",
          icon: "h5_tixian_icon",
          auth: true,
          route: true,
          type: "image",
          imageWidth: "16",
          arrow: true,
        },
        children: [],
      },
      {
        path: "/Recent",
        name: "Recent",
        meta: {
          title: "H0039",
          icon: "h5_shangcheng_icon",
          auth: true,
          route: true,
          type: "image",
          imageWidth: "16",
          arrow: true,
        },
        children: [],
      },
      {
        path: "/Casino",
        name: "Casino",
        meta: {
          title: "H0040",
          icon: "h5_feiji_icon",
          auth: true,
          route: true,
          type: "image",
          imageWidth: "16",
          arrow: true,
        },
        children: [],
      },
      {
        path: "/Casino",
        name: "Casino",
        meta: {
          title: "H0020",
          icon: "h5_xiaovip_icon",
          auth: true,
          route: true,
          type: "image",
          imageWidth: "19",
          arrow: true,
        },
        children: [],
      },
      {
        path: "/Instalar",
        name: "Instalar",
        meta: {
          title: "H0043",
          class: "menu-Free justify-center font-black",
          icon: "",
          auth: false,
          route: false,
          type: "button",
        },
        children: [],
      },
    ],
  },

  {
    class: "menu-box",
    itemGroup: [
      {
        path: "/Affiliate",
        name: "Affiliate",
        meta: {
          title: "H0045",
          icon: "h5_tiaochu_icon",
          auth: true,
          route: true,
          type: "image",
          imageWidth: "16",
          arrow: true,
        },
        children: [],
      },
      {
        path: "/Rewards",
        name: "Rewards",
        meta: {
          title: "H0046",
          icon: "h5_kefu_icon",
          auth: true,
          route: true,
          type: "image",
          imageWidth: "16",
          arrow: true,
        },
        children: [],
      },
    ],
  },
];

export default routes;
