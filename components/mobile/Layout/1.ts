/** @format */

class ReadStream {
  constructor(buf: ArrayBuffer) {}

  getString(length: number): string {
    return "";
  }

  getInt32(): number {
    return 1;
  }

  getInt16(): number {
    return 0;
  }
  delete(): void {}

  getCommand(): {mcmd: number; scmd: number} {
    return {mcmd: 0, scmd: 1};
  }
}

// ts

/*
    struct serverInfo{
        int16 gameID;
        char  gameName[32];
    }
*/

let config____ = {
  serverInfo: [{name: "gameID", type: "int16"}],
};

let ws = new WebSocket("1111");

localStorage.set("machineID", uuid);

function decode(data, name): any {}

ws.onmessage = function (ev: MessageEvent<ArrayBuffer>) {
  let stream = new ReadStream(ev.data);
  let cmd = stream.getCommand();
  switch (cmd.mcmd) {
    case 0:
      switch (cmd.scmd) {
        case 1:
          let serverInfo = {
            gameID: stream.getInt16(),
            gameName: stream.getString(32),
          };
          break;

        default:
          break;
      }
      break;

    default:
      break;
  }

  let serverInfo = {
    gameID: stream.getInt16(),
    gameName: stream.getString(32),
  };

  stream.delete();
};
