/** @format */

export const useWs = () => useState("ws", (): any => undefined);
export const websoket = {
    initWebSocket: async () => {
        if (process.client) {
            // 通过动态导入加载 JavaScript 文件
            const module = await import("~/core/protocol");
            const baseUrl = useRuntimeConfig().public.ws;
            const url = `ws://${baseUrl}`;
            let ws = useWs();

            ws.value = undefined;
            let net = await module.useNet(url, (s, e) => {
                switch (e.status) {
                    case WebSocket.CONNECTING:
                        console.log("connecting");
                        break;
                    case WebSocket.CLOSED:
                        console.log("closed");
                        break;
                    case WebSocket.OPEN:
                        console.log("open");

                        break;
                    case WebSocket.CLOSING:
                        console.log("closing");
                        break;
                    case 4:
                        console.log("net ok");
                }
            });
            ws.value = net;
            return net;
        }
    },
};
