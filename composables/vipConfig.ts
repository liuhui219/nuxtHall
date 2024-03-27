/** @format */

import {commands} from "~/core/define";

export const checkInLoad = (parmas: CMD_MB_CheckInGetUserStatus, pageID: IVuePageID, callBackFn: INetEventCallback) => {
    const ws = useWs();
    ws.value.send(commands.MDM_GP_USER_SERVICE, commands.SUB_MB_CheckInLoadConfig, parmas); //获取签到配置
    ws.value.on(commands.MDM_GP_USER_SERVICE, [commands.SUB_MB_CheckInLoadConfig_RESULT], pageID, callBackFn);
};

export const checkInGetUserStatus = (
    parmas: CMD_MB_CheckInGetUserStatus,
    pageID: IVuePageID,
    callBackFn: INetEventCallback
) => {
    const ws = useWs();
    ws.value.send(commands.MDM_GP_USER_SERVICE, commands.SUB_MB_CheckInGetUserStatus, parmas); //获取用户签到状态
    ws.value.on(commands.MDM_GP_USER_SERVICE, [commands.SUB_MB_CheckInGetUserStatus_RESULT], pageID, callBackFn);
};

export const getGrowUserStatus = (
    parmas: CMD_MB_GetGrowUserStatus,
    pageID: IVuePageID,
    callBackFn: INetEventCallback
) => {
    const ws = useWs();
    ws.value.send(commands.MDM_GP_USER_SERVICE, commands.SUB_MB_GetGrowUserStatus, parmas); //获取用户成长等级当前状态
    ws.value.on(commands.MDM_GP_USER_SERVICE, [commands.SUB_MB_GetGrowUserStatus_RESULT], pageID, callBackFn);
};

export const CheckInDone = (parmas: CMD_MB_CheckInDone, pageID: IVuePageID, callBackFn: INetEventCallback) => {
    const ws = useWs();
    ws.value.send(commands.MDM_GP_USER_SERVICE, commands.SUB_MB_CheckInDone, parmas); //执行签到领取奖励
    ws.value.on(commands.MDM_GP_USER_SERVICE, [commands.SUB_MB_CheckInDone_RESULT], pageID, callBackFn);
};

export const CheckInTakeSerialReward = (
    parmas: CMD_MB_CheckInTakeSerialReward,
    pageID: IVuePageID,
    callBackFn: INetEventCallback
) => {
    const ws = useWs();
    ws.value.send(commands.MDM_GP_USER_SERVICE, commands.SUB_MB_CheckInTakeSerialReward, parmas); //领取连续签到奖励
    ws.value.on(commands.MDM_GP_USER_SERVICE, [commands.SUB_MB_CheckInTakeSerialReward_RESULT], pageID, callBackFn);
};

export const GetGrowGiftStatus = (
    parmas: CMD_MB_GetGrowUserStatus,
    pageID: IVuePageID,
    callBackFn: INetEventCallback
) => {
    const ws = useWs();
    ws.value.send(commands.MDM_GP_USER_SERVICE, commands.SUB_MB_GetGrowGiftStatus, parmas); //获取用户成长礼包状态
    ws.value.on(commands.MDM_GP_USER_SERVICE, [commands.SUB_MB_GetGrowGiftStatus_RESULT], pageID, callBackFn);
};

export const GetProductActiveState = (
    parmas: CMD_MB_GetProductActiveState,
    pageID: IVuePageID,
    callBackFn: INetEventCallback
) => {
    const ws = useWs();
    ws.value.send(commands.MDM_GP_USER_SERVICE, commands.SUB_MB_GetProductActiveStateEx, parmas); //获取一次性商品购买情况
    ws.value.on(commands.MDM_GP_USER_SERVICE, [commands.SUB_MB_GetProductActiveStateEx_RESULT], pageID, callBackFn);
};

export const GetPayRebateInfo = (parmas: CMD_MB_Common_Query, pageID: IVuePageID, callBackFn: INetEventCallback) => {
    const ws = useWs();
    ws.value.send(commands.MDM_GP_USER_SERVICE, commands.SUB_MB_GetPayRebateInfo, parmas); //充值返利  获取用户状态信息
    ws.value.on(commands.MDM_GP_USER_SERVICE, [commands.SUB_MB_GetPayRebateInfo_RESULT], pageID, callBackFn);
};

export const PayRebateReward = (
    parmas: CMD_MB_GetPayRebateReward,
    pageID: IVuePageID,
    callBackFn: INetEventCallback
) => {
    const ws = useWs();
    ws.value.send(commands.MDM_GP_USER_SERVICE, commands.SUB_MB_GetPayRebateReward, parmas); //充值返利  获取用户状态信息
    ws.value.on(commands.MDM_GP_USER_SERVICE, [commands.SUB_MB_GetPayRebateReward_RESULT], pageID, callBackFn);
};
