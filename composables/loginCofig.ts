/**
 *     SUB_MB_LOGON_SUCCESS : 100,                             // 账号登陆(接收)
 *     SUB_MB_LOGON_FAILURE : 101,                             // 登陆失败(接收)
 *     SUB_MB_REGISTER_FAILURE : 102,                          // 注册失败(接收)
 *     SUB_MB_REGISTER_SUCCESS : 103,                          // 注册成功(接收)
 *
 * @format
 */

import {commands} from "~/core/define";

export const register = (parmas: CMD_MB_RegisterAccounts, pageID: IVuePageID, callBackFn: INetEventCallback) => {
    const ws = useWs();
    ws.value.send(commands.MDM_MB_LOGON, commands.SUB_MB_REGISTER_ACCOUNTS, parmas); //注册账号

    ws.value.on(
        8,
        [
            commands.SUB_MB_LOGON_SUCCESS,
            commands.SUB_MB_LOGON_FAILURE,
            commands.SUB_MB_REGISTER_FAILURE,
            commands.SUB_MB_REGISTER_SUCCESS,
        ],
        pageID,
        callBackFn
    );
};

export const login = (parmas: CMD_MB_LogonAccounts, pageID: IVuePageID, callBackFn: INetEventCallback) => {
    const ws = useWs();
    ws.value.send(commands.MDM_MB_LOGON, commands.SUB_MB_LOGON_ACCOUNTS, parmas); //登陆账号
    ws.value.on(8, [commands.SUB_MB_LOGON_SUCCESS, commands.SUB_MB_LOGON_FAILURE], pageID, callBackFn);
};

export const GetScoreInfo = (parmas: CMD_MB_LogonExit, pageID: IVuePageID, callBackFn: INetEventCallback) => {
    const ws = useWs();
    ws.value.send(commands.MDM_MB_LOGON, commands.SUB_MB_GetScoreInfo, parmas); //获取当前积分
    ws.value.on(commands.MDM_MB_LOGON, [commands.SUB_MB_GetScoreInfo], pageID, callBackFn);
};

export const loginCallback = (parmas: CMD_MB_LogonExit) => {
    const isLogin = useIsLogin();
    const tagScoreInfo = useTagScoreInfo();
    const ws = useWs();
    if (isLogin.value) {
        ws.value.send(commands.MDM_MB_LOGON, commands.SUB_MB_GetScoreInfo, parmas); //获取当前积分
        ws.value.on(
            commands.MDM_MB_LOGON,
            [commands.SUB_MB_GetScoreInfo],
            "GetScoreInfo",
            (s: INetService, e: INetEventParam) => {
                if (e.scmd === commands.SUB_MB_GetScoreInfo) {
                    tagScoreInfo.value = e.data as tagScoreInfo;
                }
            }
        );
    }
};
