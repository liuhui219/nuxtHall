/** @format */

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
  setSid: (parmas) => {
    const uid = games.gameUID();
    let data = parmas * 1000 + 90 + 1;
    let originalNumbers = BigInt(data);
    let shiftedNumbers = originalNumbers << BigInt(32);
    let result = BigInt(shiftedNumbers) + BigInt(uid.value);

    return result.toString();
  },

  init: () => {
    const route = useRoute();
    const {query} = route;
    let roomId = query.roomId;
    let sid = games.setSid(Number(roomId));
    const url = `http://h5game.vmhost238.com/${roomId}/?account_name=TK86115039&platform_token=BCBCA94FFD2948FE828805FD4412EB28&rate=1&roomID=${roomId}&lang=en&sortID=1&operator_id=663357&type=2&sid=${sid}&mac=KKsowmsjfado&isdbg=hxdebug&apimode=1`;
    return url;
  },

  leaveGame: () => {},
};
