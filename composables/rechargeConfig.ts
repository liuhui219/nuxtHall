/** @format */

import {commands} from "~/core/define";

const ws = useWs();

export const rechargeFn = (parmas: CMD_MB_GetProductInfos, pageID: IVuePageID, callBackFn: INetEventCallback) => {
    ws.value.send(commands.MDM_GP_USER_SERVICE, commands.SUB_MB_GetProductInfos, parmas); //获取签到配置
    ws.value.on(commands.MDM_GP_USER_SERVICE, [commands.SUB_MB_GetProductInfos_RESULT], pageID, callBackFn);
};

export const getProductExtendFlag = (
    parmas: CMD_MB_GetProductExtendFlag,
    pageID: IVuePageID,
    callBackFn: INetEventCallback
) => {
    ws.value.send(commands.MDM_GP_USER_SERVICE, commands.SUB_MB_GetProductExtendFlag, parmas); //获取商城商品角标
    ws.value.on(commands.MDM_GP_USER_SERVICE, [commands.SUB_MB_GetProductExtendFlag_RESULT], pageID, callBackFn);
};

export const payOrder = (parmas: CMD_MB_PlaceOrder, pageID: IVuePageID, callBackFn: INetEventCallback) => {
    ws.value.send(commands.MDM_GP_USER_SERVICE, commands.SUB_MB_PlacePayOrder, parmas); //获取商城商品角标
    ws.value.on(commands.MDM_GP_USER_SERVICE, [commands.SUB_MB_PlacePayOrder_RESULT], pageID, callBackFn);
};
