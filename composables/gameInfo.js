/** @format */

export const games = {
  gameURL: () => useState("game-URL", () => ""),
  handleIframeMsg: (event) => {
    let data = event.data;

    console.log(12321, data);
    if (typeof data == "string") {
      if (data == "ToCloseWebView") {
        //EASYGAME
        closePopup("game-drawer");
      }
    }
  },
};
