/** @format */
import store from "store";

export const useIsCollapse = () => useState("is_Collapse", () => false);
export const usePageLoading = () => useState("page-loading", () => true);
export const useHttpLoading = () => useState("http-loading", () => false);

export const useMenuDrawer = () => useState("menu-drawer", () => false);

export const useLang = () => useState("lang", () => "en");

export const useDialog = () => useState("dialog", () => false);
export const useNotification = () => useState("notification", () => false);

export const gameReload = () => useState("game-reload", () => 0);
export const gameURL = () => useState("game-URL", () => "");

export const useLoginDialog = () => useState("login-dialog", () => false);
export const useResetDialog = () => useState("reset-dialog", () => false);
export const useRegisterDialog = () => useState("register-dialog", () => false);
export const useIsLogin = () => useState("is-login", () => false);
export const useDownloadDialog = () => useState("download-dialog", () => false);
export const useTipShow = () => useState("tip-show", () => true);
export const useVipLevel = () => useState("vip-level", () => false);
export const useFirstCharge = () => useState("first-charge", () => false);
export const useCheckIn = () => useState("check-in", () => false);

export const useRaffleWheel = () => useState("raffle-wheel", () => false);
export const useInvitation = () => useState("invitation", () => false);
export const useRechargeRefund = () => useState("recharge-refund", () => false);

export const userScore = () => useState("score", () => 0);
export const useTagScoreInfo = () =>
    useState("tag-score-info", () =>
        ref<tagScoreInfo>({score: 0, insureScore: 0, tCCoin: 0, tCCoinInsure: 0, growLevel: 0})
    );
export const useCountdown = () => useState("count-down", () => Date.now() + 1000 * 60 * 60);

export const getLoginInfo = () => {
    const isLogin = useIsLogin();
    let parmas = isLogin.value ? JSON.parse(store.get("w_l_s_r")) : {};
    return parmas;
};

//判断当前是否在某个页面(current必须以【/】开头)或弹窗(不带【/】开头则是弹窗)
export function isPageInSome(current: string, path = "") {
    if (!current) {
        current = "/";
    }

    if (!path) {
        if (current.charAt(0) == "/") {
            path = useRoute().path.toString();
        } else {
            path = useRoute().hash.toString();
        }
    }
    if (current == "/") {
        return path == "/";
    }
    return path.toString().includes(current);
}

export const getHashValue = (url: string) => {
    var regex = /#\/([^?]+)/;

    // 使用正则表达式进行匹配
    let match = url.match(regex);

    // 获取匹配到的hash值
    let hashValue = match ? match[1] : null;
    return hashValue;
};

export const closePopup = (name?: string | undefined) => {
    const route = useRoute();
    let {params, query, path, hash} = route;
    let nextHash = hash;
    nextHash = nextHash.replace("/" + name, "");
    navigateTo({path, params, hash: nextHash, query});
};

export const openPopup = (name?: string | undefined) => {
    const route = useRoute();
    let {params, query, path, hash} = route;

    if (name != "menu") {
        hash = hash.replace("/menu", "");
    }
    let nextHash = "";
    nextHash = "#/" + name;
    navigateTo({path, params, hash: nextHash, query});
};

export const closeAllPopup = () => {
    const route = useRoute();
    let {params, query, path, hash} = route;
    let nextHash = hash;
    nextHash = nextHash.replace(hash, "");
    navigateTo({path, params, hash: nextHash, query});
};
