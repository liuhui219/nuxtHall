/** @format */

export const games = {
  gameURL: () => useState("game-URL", () => ""),
  handleIframeMsg: (event) => {
    let data = event.data;

    if (typeof data == "string") {
      if (data == "ToCloseWebView") {
        //EASYGAME
        closePopup("game-drawer");
      }
    }
  },
};
