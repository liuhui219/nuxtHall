/** @format */

import {commands} from "~/core/define";

const ws = useWs();

export const getPayChannel = (
    parmas: CMD_MB_CheckInGetUserStatus,
    pageID: IVuePageID,
    callBackFn: INetEventCallback
) => {
    ws.value.send(commands.MDM_GP_USER_SERVICE, commands.SUB_MB_GetPayChannel, parmas); //获取充值渠道信息
    ws.value.on(commands.MDM_GP_USER_SERVICE, [commands.SUB_MB_GetPayChannel_RESULT], pageID, callBackFn);
};

export const Withdraw = (parmas: CMD_MB_CheckInGetUserStatus, pageID: IVuePageID, callBackFn: INetEventCallback) => {
    ws.value.send(commands.MDM_GP_USER_SERVICE, commands.SUB_MB_PlaceWithdrawOrder, parmas); //充值
    ws.value.on(commands.MDM_GP_USER_SERVICE, [commands.SUB_MB_PlaceWithdrawOrder_RESULT], pageID, callBackFn);
};
