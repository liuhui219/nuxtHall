/** @format */
import store from "store";
export const games = {
  gameURL: () => useState("game-URL", () => ""),
  gameUID: () => useState("game-UID", () => 1522367),
  handleIframeMsg: (event) => {
    let data = event.data;
    console.log("====================================");
    console.log(data);
    console.log("====================================");

    if (typeof data == "string") {
      if (data == "ToCloseWebView") {
        //EASYGAME
        // closePopup("game-drawer");
        navigateTo({path: "/"});
      }
    }
  },

  isPositiveInteger: (num) => {
    return /^\d+$/.test(num);
  },
  setSid: (parmas) => {
    const uid = games.gameUID();
    let data = parmas * 1000 + 90 + 1;
    let originalNumbers = BigInt(data);
    let shiftedNumbers = originalNumbers << BigInt(32);
    let result = BigInt(shiftedNumbers) + BigInt(uid.value);

    return result.toString();
  },

  init: () => {
    const gameurl = gameURL();
    let url = "";
    // const gameURL = useRuntimeConfig().public.gameURL;
    const game_url = gameurl.value;

    const isLogin = useIsLogin();
    const route = useRoute();
    const {query} = route;
    let roomId = query.roomId;
    if (games.isPositiveInteger(roomId)) {
      let sid = games.setSid(Number(roomId));
      let status = store.get("w_l_s_a");
      let loginInfo = isLogin.value ? JSON.parse(atob(status)) : {};

      url = `${game_url}/${roomId}/index.html?oid=${loginInfo?.oid}&oa=${loginInfo?.account}&op=${
        loginInfo?.password
      }&hv=8283EAA9F1EBAF5D5CA773D30F5A02EF&ip=192.17.18.23&b=1&sid=${sid}&l=en&g=${roomId}&t=${new Date().getTime()}&s=1&isdbg=hxdebug&e=ToCloseWebView`;
    }

    return url;
  },

  leaveGame: () => {
    console.log("离开页面");
  },
};
