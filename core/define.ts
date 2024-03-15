 /*
    auto generation at 2024/3/13 16:52:25  
*/

/// <reference path="./define.d.ts" />

// 货币类型
export enum CurrencyType {
    GoldCoin = 1,   // 金币(默认值)
    TCCoin = 2      // TC币
}

// 设备类型
export enum DeviceType {
    PC = 0,
    ANDROID_COCOS = 0x11,
    ANDROID_U3D = 0x12,
    ANDROID_H5 = 0x13,
    ITOUCH_COCOS = 0x21,
    ITOUCH_U3D = 0x22,
    ITOUCH_H5 = 0x23,
    IPHONE_COCOS = 0x31,
    IPHONE_U3D = 0x32,
    IPHONE_H5 = 0x33,
    IPAD_COCOS = 0x41,
    IPAD_U3D = 0x42,
    IPAD_H5 = 0x43,
}

/* 协议号申明 */
export const commands = {

    /* ========== 主命令 ========== */
    MDM_MB_LOGON : 8,                                       // 登陆命令
    /* ---------- 子命令 ---------- */
    /* ---------- 登陆相关 ---------- */
    SUB_MB_LOGON_ACCOUNTS : 2,                              // 账号登陆(发送)
    SUB_MB_REGISTER_ACCOUNTS : 3,                           // 注册账号(发送)
    SUB_MB_LOGON_OTHERPLATFORM : 4,                         // 三方登陆(发送)
    SUB_MB_LOGON_VISITOR : 5,                               // 游客登陆(发送)
    SUB_MB_LOGON_MOBILE_EX : 7,                             // 手机登陆（新）(发送)
    SUB_MB_RELOGON : 10,                                    // 断线重登(发送/接收)
    SUB_MB_LOGON_EXIT : 11,                                 // 登出(发送)
    SUB_MB_LOGON_EXIT_RESULT : 12,                          // 登出(接收)
    /* ---------- 系统使用 ---------- */
    SUB_GP_SERVER_UTC_TIMESTAMP : 25,                       // 获取服务器当前时间戳(发送)
    SUB_GP_SERVER_UTC_TIMESTAMP_RESULT : 26,                // 获取服务器当前时间戳(接收)
    /* ---------- 登陆相关 ---------- */
    SUB_MB_LOGON_SUCCESS : 100,                             // 账号登陆(接收)
    SUB_MB_LOGON_FAILURE : 101,                             // 登陆失败(接收)
    SUB_MB_REGISTER_FAILURE : 102,                          // 注册失败(接收)
    SUB_MB_REGISTER_SUCCESS : 103,                          // 注册成功(接收)
    /* ---------- 系统使用 ---------- */
    SUB_MB_GetScoreInfo : 110,                              // 获取当前积分(发送/接收)
    /* ---------- 登陆相关 ---------- */
    SUB_MB_SendSMSLogonCode : 120,                          // 发送登陆短信(发送)
    SUB_MB_SendSMSLogonCodeResult : 121,                    // 发送登陆短信(接收)
    SUB_MB_SendSMSResetPassword : 122,                      // 发送重置密码短信(发送)
    SUB_MB_SendSMSResetPasswordResult : 123,                // 发送重置密码短信(接收)
    SUB_MB_SendSMSRegisteUser : 124,                        // 发送账号注册短信(发送)
    SUB_MB_SendSMSRegisteUserResult : 125,                  // 发送账号注册短信(接收)
    SUB_MB_RESET_LOGON_PASSWORD : 130,                      // 重置密码(发送)
    SUB_MB_RESET_LOGON_PASSWORD_RESULT : 131,               // 重置密码(接收)
    SUB_MB_LOGON_ACCOUNTS_V6 : 602,                         // IPv6-账号登陆(发送)
    SUB_MB_REGISTER_ACCOUNTS_V6 : 603,                      // IPv6-注册账号(发送)
    SUB_MB_LOGON_OTHERPLATFORM_V6 : 604,                    // IPv6-三方登陆(发送)
    SUB_MB_LOGON_VISITOR_V6 : 605,                          // IPv6-游客登陆(发送)
    SUB_MB_LOGON_MOBILE_EX_V6 : 607,                        // IPv6-手机登陆(发送)
    SUB_MB_RELOGON_V6 : 610,                                // IPv6-断线重登(发送)

    /* ========== 主命令 ========== */
    MDM_GP_USER_SERVICE : 3,                                // 用户命令
    /* ---------- 子命令 ---------- */
    /* ---------- 充值商城礼包 ---------- */
    SUB_MB_GetProductInfos : 1210,                          // 获取商品列表(发送)
    SUB_MB_GetProductInfos_RESULT : 1211,                   // 获取商品列表(接收)
    SUB_MB_GetProductTypeActiveState : 1212,                // 查询某种礼包下商品的购买情况(发送)
    SUB_MB_GetProductTypeActiveState_RESULT : 1213,         // 查询某种礼包下商品的购买情况(接收)
    SUB_MB_GetProductActiveState : 1216,                    // 获取一次性商品购买情况(发送)
    SUB_MB_GetProductActiveState_RESULT : 1217,             // 获取一次性商品购买情况(接收)
    /* ---------- 提现 ---------- */
    SUB_MB_GetWithdrawStatus : 1220,                        // 获取用户当前可否提现(发送)
    SUB_MB_GetWithdrawStatus_RESULT : 1221,                 // 获取用户当前可否提现(接收)
    SUB_MB_GetWithdrawConfig : 1222,                        // 获取提现配置(发送)
    SUB_MB_GetWithdrawConfig_RESULT : 1223,                 // 获取提现配置(接收)
    SUB_MB_GetWithdrawHistoryAccount : 1224,                // 获取提现历史记录(发送)
    SUB_MB_GetWithdrawHistoryAccount_RESULT : 1225,         // 获取提现历史记录(接收)
    SUB_MB_GetWithdrawRecord : 1226,                        // 获取提现记录(发送)
    SUB_MB_GetWithdrawRecord_RESULT : 1227,                 // 获取提现记录(接收)
    SUB_MB_GetLastWithdrawRecord : 1228,                    // 获取最新一条提现记录(发送)
    SUB_MB_GetLastWithdrawRecord_RESULT : 1229,             // 获取最新一条提现记录(接收)
    /* ---------- 其他 ---------- */
    SUB_MB_GetCustomService : 1250,                         // 获取平台客服URL(发送)
    SUB_MB_GetCustomService_RESULT : 1251,                  // 获取平台客服URL(接收)
    /* ---------- 分享推荐好友 ---------- */
    SUB_MB_GetShareConfig : 1270,                           // 查询分享配置(发送)
    SUB_MB_GetShareConfig_RESULT : 1271,                    // 查询分享配置(接收)
    SUB_MB_UpdateShareCount : 1272,                         // 更新分享入口点击次数(发送)
    SUB_MB_UpdateShareCount_RESULT : 1273,                  // 更新分享入口点击次数(接收)
    SUB_MB_GetShareReward : 1274,                           // 领取分享奖励(发送)
    SUB_MB_GetShareReward_RESULT : 1275,                    // 领取分享奖励(接收)
    SUB_MB_GetShareRestLimits : 1276,                       // 查询可分享剩余次数(发送)
    SUB_MB_GetShareRestLimits_RESULT : 1277,                // 查询可分享剩余次数(接收)
    SUB_MB_GetMobiles : 1278,                               // 从手机缓存中随机15个出来(发送)
    SUB_MB_GetMobiles_RESULT : 1279,                        // 从手机缓存中随机15个出来(接收)
    /* ---------- 绑定手机 ---------- */
    SUB_MB_GetBindMobileStatus : 1284,                      // 获取手机绑定状态(发送)
    SUB_MB_GetBindMobileStatus_RESULT : 1285,               // 获取手机绑定状态(接收)
    SUB_MB_TakeBindMobileReward : 1286,                     // 领取手机绑定奖励(发送)
    SUB_MB_TakeBindMobileReward_RESULT : 1287,              // 领取手机绑定奖励(接收)
    /* ---------- 系统提示信息 ---------- */
    SUB_MB_GetSystemNotice : 1290,                          // 系统提示信息(发送)
    SUB_MB_GetSystemNotice_RESULT : 1291,                   // 系统提示信息(接收)
    /* ---------- 系统活动宣传图 ---------- */
    SUB_MB_GetActivityConfig : 1300,                        // 获取活动配置(发送)
    SUB_MB_GetActivityConfig_RESULT : 1301,                 // 获取活动配置(接收)
    /* ---------- 银行操作 ---------- */
    SUB_MB_UserSaveScoreEx : 1310,                          // 新协议(双货币)存入金币(发送)
    SUB_MB_UserSaveScoreEx_RESULT : 1311,                   // 新协议(双货币)存入金币(接收)
    SUB_MB_UserTakeScoreEx : 1312,                          // 新协议(双货币)取出金币(发送)
    SUB_MB_UserTakeScoreEx_RESULT : 1313,                   // 新协议(双货币)取出金币(接收)
    /* ---------- 充值商城礼包 ---------- */
    SUB_MB_GetLastPayInfo : 1322,                           // 查询最后一次充值订单信息(发送)
    SUB_MB_GetLastPayInfo_RESULT : 1323,                    // 查询最后一次充值订单信息(接收)
    /* ---------- 成长礼包 ---------- */
    SUB_MB_GetGrowUserStatus : 1502,                        // 获取用户成长等级当前状态(发送)
    SUB_MB_GetGrowUserStatus_RESULT : 1503,                 // 获取用户成长等级当前状态(接收)
    SUB_MB_GetGrowGiftStatus : 1504,                        // 获取用户成长礼包状态(发送)
    SUB_MB_GetGrowGiftStatus_RESULT : 1505,                 // 获取用户成长礼包状态(接收)
    SUB_MB_TakeGrowGift : 1506,                             // 领取用户成长礼包奖励(发送)
    SUB_MB_TakeGrowGift_RESULT : 1507,                      // 领取用户成长礼包奖励(接收)
    SUB_MB_GetGrowLevelConfig2 : 1508,                      // 获取成长等级配置(新版本)(发送)
    SUB_MB_GetGrowLevelConfig2_RESULT : 1509,               // 获取成长等级配置(新版本)(接收)
    /* ---------- 大转盘(幸运转盘) ---------- */
    SUB_MB_GetLotteryCell : 1510,                           // 获取转盘格子配置(发送)
    SUB_MB_GetLotteryCell_RESULT : 1511,                    // 获取转盘格子配置(接收)
    SUB_MB_GetLotteryUserStatus : 1512,                     // 获取用户当前的转盘状态(发送)
    SUB_MB_GetLotteryUserStatus_RESULT : 1513,              // 获取用户当前的转盘状态(接收)
    SUB_MB_GetLotteryPlatformRecordNewest : 1514,           // 获取平台中奖最新广播消息列表(发送)
    SUB_MB_GetLotteryPlatformRecordNewest_RESULT : 1515,    // 获取平台中奖最新广播消息列表(接收)
    SUB_MB_GetLotteryPlatformRecordHistory : 1516,          // 获取平台中奖历史广播消息列表(发送)
    SUB_MB_GetLotteryPlatformRecordHistory_RESULT : 1517,   // 获取平台中奖历史广播消息列表(接收)
    SUB_MB_GetLotteryUserRecordHistory : 1518,              // 获取用户自己中奖历史消息列表(发送)
    SUB_MB_GetLotteryUserRecordHistory_RESULT : 1519,       // 获取用户自己中奖历史消息列表(接收)
    SUB_MB_LotterySbin : 1520,                              // 转动转盘(发送)
    SUB_MB_LotterySbin_RESULT : 1521,                       // 转动转盘(接收)
    SUB_MB_GetLotteryPresentConfig : 1522,                  // 各种赠送方案配置(发送)
    SUB_MB_GetLotteryPresentConfig_RESULT : 1523,           // 各种赠送方案配置(接收)
    /* ---------- 充值返利 ---------- */
    SUB_MB_GetPayRebateInfo : 1580,                         // 获取用户状态信息(发送)
    SUB_MB_GetPayRebateInfo_RESULT : 1581,                  // 获取用户状态信息(接收)
    SUB_MB_GetPayRebateReward : 1582,                       // 领取返利奖励(发送)
    SUB_MB_GetPayRebateReward_RESULT : 1583,                // 领取返利奖励(接收)
    /* ---------- 分享好友转盘 ---------- */
    SUB_MB_ShareLotteryGetItems : 1700,                     // 获取分享转盘全部格子物品(发送)
    SUB_MB_ShareLotteryGetItems_RESULT : 1701,              // 获取分享转盘全部格子物品(接收)
    SUB_MB_ShareLotteryGetUserStatus : 1702,                // 获取分享转盘用户状态(发送)
    SUB_MB_ShareLotteryGetUserStatus_RESULT : 1703,         // 获取分享转盘用户状态(接收)
    SUB_MB_ShareLotteryGetWithdrawHistory : 1704,           // 获取分享提现历史记录开始(发送)
    SUB_MB_ShareLotteryGetWithdrawHistory_RESULT : 1705,    // 获取分享提现历史记录开始(接收)
    SUB_MB_ShareLotteryGetInviteRecords : 1706,             // 获取分享提现邀请记录(发送)
    SUB_MB_ShareLotteryGetInviteRecords_RESULT : 1707,      // 获取分享提现邀请记录(接收)
    SUB_MB_ShareLotteryExecuteSbin : 1708,                  // 执行分享转盘抽奖(发送)
    SUB_MB_ShareLotteryExecuteSbin_RESULT : 1709,           // 执行分享转盘抽奖(接收)
    SUB_MB_ShareLotteryTakeReward : 1710,                   // 提取分享提现奖励(发送)
    SUB_MB_ShareLotteryTakeReward_RESULT : 1711,            // 提取分享提现奖励(接收)
    /* ---------- 分享好友升级返利 ---------- */
    SUB_MB_ShareLotteryGetSpreadRebateStatus : 1712,        // 获取分享升级返利用户状态(发送)
    SUB_MB_ShareLotteryGetSpreadRebateStatus_RESULT : 1713, // 获取分享升级返利用户状态(接收)
    SUB_MB_ShareLotteryTakeSpreadRebate : 1714,             // 提取分享升级返利奖励(发送)
    SUB_MB_ShareLotteryTakeSpreadRebate_RESULT : 1715,      // 提取分享升级返利奖励(接收)
    SUB_MB_ShareLotteryGetSpreadRebateConfig : 1716,        // 获取分享升级返利配置(发送)
    SUB_MB_ShareLotteryGetSpreadRebateConfig_RESULT : 1717, // 获取分享升级返利配置(接收)
    /* ---------- 分享好友转盘 ---------- */
    SUB_MB_ShareLotteryGetWithdrawStage : 1718,             // 获取分享提现档位信息(发送)
    SUB_MB_ShareLotteryGetWithdrawStage_RESULT : 1719,      // 获取分享提现档位信息(接收)
    SUB_MB_ShareLotterySetWithdrawStage : 1720,             // 选择分享提现档位(发送)
    SUB_MB_ShareLotterySetWithdrawStage_RESULT : 1721,      // 选择分享提现档位(接收)
    SUB_MB_ShareLotteryExecuteSbinContinuous : 1722,        // 执行分享转盘连续抽奖(发送)
    SUB_MB_ShareLotteryExecuteSbinContinuous_RESULT : 1723, // 执行分享转盘连续抽奖(接收)
    /* ---------- 分享充值返利 ---------- */
    SUB_MB_SharePayRebateLoadConfig : 1750,                 // 获取【分享好友充值返利】配置(发送)
    SUB_MB_SharePayRebateLoadConfig_RESULT : 1751,          // 获取【分享好友充值返利】配置(接收)
    SUB_MB_SharePayRebateGetStatus : 1752,                  // 获取【分享好友充值返利】状态(发送)
    SUB_MB_SharePayRebateGetStatus_RESULT : 1753,           // 获取【分享好友充值返利】状态(接收)
    SUB_MB_SharePayRebateGetRecord : 1754,                  // 获取【分享好友充值返利】记录(发送)
    SUB_MB_SharePayRebateGetRecord_RESULT : 1755,           // 获取【分享好友充值返利】记录(接收)
    SUB_MB_SharePayRebateTakeReward : 1756,                 // 提取【分享好友充值返利】奖励(发送)
    SUB_MB_SharePayRebateTakeReward_RESULT : 1757,          // 提取【分享好友充值返利】奖励(接收)
    /* ---------- 分享好友宝箱 ---------- */
    SUB_MB_ShareTreasureChestLoadConfig : 1760,             // 获取分享好友宝箱配置(发送)
    SUB_MB_ShareTreasureChestLoadConfig_RESULT : 1761,      // 获取分享好友宝箱配置(接收)
    SUB_MB_ShareTreasureChestGetStatus : 1762,              // 获取分享好友宝箱状态(发送)
    SUB_MB_ShareTreasureChestGetStatus_RESULT : 1763,       // 获取分享好友宝箱状态(接收)
    SUB_MB_ShareTreasureChestTakeReward : 1764,             // 提取分享好友宝箱奖励(发送)
    SUB_MB_ShareTreasureChestTakeReward_RESULT : 1765,      // 提取分享好友宝箱奖励(接收)
    /* ---------- 充值商城礼包 ---------- */
    SUB_MB_GetProductExtendFlag : 1780,                     // 获取商城商品角标(发送)
    SUB_MB_GetProductExtendFlag_RESULT : 1781,              // 获取商城商品角标(接收)
    /* ---------- 提现 ---------- */
    SUB_MB_GetWithdrawCashLimit : 1782,                     // 获取提现限制配置(发送)
    SUB_MB_GetWithdrawCashLimit_RESULT : 1783,              // 获取提现限制配置(接收)
    /* ---------- 充值商城礼包 ---------- */
    SUB_MB_PlacePayOrder : 2000,                            // 充值下单(发送)
    SUB_MB_PlacePayOrder_RESULT : 2001,                     // 充值下单(接收)
    /* ---------- 提现 ---------- */
    SUB_MB_PlaceWithdrawOrder : 2002,                       // 提现下单(发送)
    SUB_MB_PlaceWithdrawOrder_RESULT : 2003,                // 提现下单(接收)
    /* ---------- 低保(破产补助) ---------- */
    SUB_MB_BaseEnsureLoadConfig : 2100,                     // 加载低保配置(发送)
    SUB_MB_BaseEnsureLoadConfig_RESULT : 2101,              // 加载低保配置(接收)
    SUB_MB_BaseEnsureGetStatus : 2102,                      // 获取用户低保状态(发送)
    SUB_MB_BaseEnsureGetStatus_RESULT : 2103,               // 获取用户低保状态(接收)
    SUB_MB_BaseEnsureTakeReward : 2104,                     // 领取低保奖励(发送)
    SUB_MB_BaseEnsureTakeReward_RESULT : 2105,              // 领取低保奖励(接收)
    /* ---------- 弹窗策略 ---------- */
    SUB_MB_PopWinPolicyLoadConfig : 2120,                   // 加载弹窗参数配置(发送)
    SUB_MB_PopWinPolicyLoadConfig_RESULT : 2121,            // 加载弹窗参数配置(接收)
    SUB_MB_PopWinPolicyGetUserStatus : 2122,                // 获取弹窗用户状态(发送)
    SUB_MB_PopWinPolicyGetUserStatus_RESULT : 2123,         // 获取弹窗用户状态(接收)
    /* ---------- 签到 ---------- */
    SUB_MB_CheckInLoadConfig : 2140,                        // 加载签到配置(发送)
    SUB_MB_CheckInLoadConfig_RESULT : 2141,                 // 加载签到配置(接收)
    SUB_MB_CheckInGetUserStatus : 2142,                     // 获取用户签到状态(发送)
    SUB_MB_CheckInGetUserStatus_RESULT : 2143,              // 获取用户签到状态(接收)
    SUB_MB_CheckInDone : 2144,                              // 执行签到领取奖励(发送)
    SUB_MB_CheckInDone_RESULT : 2145,                       // 执行签到领取奖励(接收)
    SUB_MB_CheckInTakeSerialReward : 2146,                  // 领取连续签到奖励(发送)
    SUB_MB_CheckInTakeSerialReward_RESULT : 2147,           // 领取连续签到奖励(接收)
    /* ---------- 充值商城礼包 ---------- */
    SUB_MB_GetPayChannel : 2160,                            // 获取支付/提现渠道(发送)
    SUB_MB_GetPayChannel_RESULT : 2161,                     // 获取支付/提现渠道(接收)
    /* ---------- 救援金 ---------- */
    SUB_MB_AlmzLoadConfig : 2180,                           // 加载配置(发送)
    SUB_MB_AlmzLoadConfig_RESULT : 2181,                    // 加载配置(接收)
    SUB_MB_AlmzGetUserStatus : 2182,                        // 获取用户状态(发送)
    SUB_MB_AlmzGetUserStatus_RESULT : 2183,                 // 获取用户状态(接收)
    SUB_MB_AlmzTakeReward : 2184,                           // 领取奖励(发送)
    SUB_MB_AlmzTakeReward_RESULT : 2185,                    // 领取奖励(接收)
    /* ---------- 体验金 ---------- */
    SUB_MB_ExperienceScoreLoadConfig : 2200,                // 加载配置(发送)
    SUB_MB_ExperienceScoreLoadConfig_RESULT : 2201,         // 加载配置(接收)
    SUB_MB_ExperienceScoreGetUserStatus : 2202,             // 当前用户体验金状态(发送)
    SUB_MB_ExperienceScoreGetUserStatus_RESULT : 2203,      // 当前用户体验金状态(接收)
    SUB_MB_ExperienceScoreTakeReward : 2204,                // 提取体验金奖励(发送)
    SUB_MB_ExperienceScoreTakeReward_RESULT : 2205,         // 提取体验金奖励(接收)
    /* ---------- 充值商城礼包 ---------- */
    SUB_MB_QueryOrderStatusBatch : 2240,                    // 查询充值结果(批量)(发送)
    SUB_MB_QueryOrderStatusBatch_RESULT : 2241,             // 查询充值结果(批量)(接收)
    SUB_MB_GetProductActiveStateEx : 2242,                  // 获取一次性商品购买情况Ex(发送)
    SUB_MB_GetProductActiveStateEx_RESULT : 2243,           // 获取一次性商品购买情况Ex(接收)
    SUB_MB_GetProductInfosByType : 2244,                    // 获取商品列表by礼包(发送)
    SUB_MB_GetProductInfosByType_RESULT : 2245,             // 获取商品列表by礼包(接收)

    /* ========== 主命令 ========== */
    MDM_GP_CHAT : 51,                                       // 邮件/聊天命令
    /* ---------- 子命令 ---------- */
    /* ---------- 邮件系统 ---------- */
    SUB_MAIL_GetMailList : 100,                             // 获取邮件列表(发送)
    SUB_MAIL_GetMailList_RESULT : 101,                      // 获取邮件列表(接收)
    SUB_MAIL_Detail : 102,                                  // 获取邮件明细(发送)
    SUB_MAIL_Detail_RESULT : 103,                           // 获取邮件明细(接收)
    SUB_MAIL_Delete : 104,                                  // 删除邮件(发送)
    SUB_MAIL_Delete_RESULT : 105,                           // 删除邮件(接收)
    SUB_MAIL_GetNewMailCount : 112,                         // 获取新邮件数量(发送)
    SUB_MAIL_GetNewMailCount_RESULT : 113,                  // 获取新邮件数量(接收)
};


// 一些通用字段长度申明
export const lengths = {
    MAX_SERAIL_CHECK_IN_COUNT: 4,                 // 连续签到的奖励档位数量
    MAX_PAY_REBATE_DAYS: 7,                       // 最大支付返利的天数
    LEN_PASSWORD: 33,                             // 密码长度
    LEN_IP: 16,                                   // IPv4地址长度
    LEN_IP_V6: 48,                                // IPv6地址长度
    LEN_MACHINE_ID: 33,                           // 机器码长度
    MAX_GROW_COUNT: 21,                           // 成长等级数组的个数
    LEN_MD5: 33,                                  // MD5加密长度
    MAX_ITEM_COUNT: 16,                           // 大转盘物品栏目最大数量
    MAX_LOTTERY_COUNT: 3,                         // 最大转盘数量
    LEN_NICKNAME: 32,                             // 昵称长度
    LEN_INTERNATIONAL_MOBILE: 16,                 // 国际化手机号码长度
    MAX_CHEST_COUNT: 8,                           // 最大的分享宝箱个数
    SHARE_LOTTERY_STAGE_COUNT: 8,                 // 分享转盘最大提现档位数量
    LEN_URL_SHORT: 256,                           // 短URL长度
    LEN_ACCOUNTS: 32,                             // 帐号长度
    LEN_MOBILE_CHECKCODE: 7,                      // 手机验证码长度
    LEN_PRODUCT_TYPE_NAME: 16,                    // 礼包名字的长度
    LEN_FACEURL: 256,                             // 第三方图像URL最大长度 普通URL长度
    LEN_MOBILE_PHONE: 12,                         // 传统移动电话长度
    LEN_USER_UIN: 33,                             // 用户UIN长度
    LEN_COMPELLATION: 16,                         // 真实名字长度
    PASS_LEN: 33,                                 // 密码长度
    MAX_BATCH_ORDER_QUERY: 50,                    // 批量查询订单的最大数量
    MAX_PRODUCT_COUNT: 21,                        // 每个分类最大商品数量
    LEN_MAIL_TITLE: 256,                          // 邮件标题最大长度
    MAX_MAIL_ATTACHMENT_COUNT: 5,                 // 邮件附件数量
    LEN_MAIL_CONTENT: 1024,                       // 邮件内容最大长度
    LEN_MAIL_TOPIC: 128,                          // 邮件主题最大长度
    LEN_WEEK: 7,                                  // 每个星期有几天
};


// 可能被重复使用的结构
export const commonStructors /*: INetPackTemplateCommonDataSet*/ = {
    CMD_MB_Common_Query: [
        { t: "uint32_t", k: "userID" },
    ],
    CMD_MB_Common_QueryScore: [
        { t: "uint32_t", k: "userID" },
        { t: "char16_t", k: "dynamicPass", s: lengths.LEN_PASSWORD },
    ],
    CMD_MB_Common_TakeScore: [
        { t: "uint32_t", k: "userID" },
        { t: "char16_t", k: "dynamicPass", s: lengths.LEN_PASSWORD },
        { t: "char16_t", k: "clientIP", s: lengths.LEN_IP },
        { t: "char16_t", k: "machineID", s: lengths.LEN_MACHINE_ID },
    ],
    tagProductInfo: [
        { t: "uint32_t", k: "productID" },
        { t: "uint32_t", k: "price" },
        { t: "uint8_t", k: "awardType" },
        { t: "int64_t", k: "awardValue" },
        { t: "uint8_t", k: "attachType" },
        { t: "int64_t", k: "attachValue" },
    ],
    tagWithdrawRecord: [
        { t: "int32_t", k: "amount" },
        { t: "time_t", k: "applyDate" },
        { t: "uint32_t", k: "status" },
        { t: "char16_t", k: "orderID", s: 33 },
    ],
    CMD_GP_SendSmsCode: [
        { t: "utf8", k: "mobile", s: lengths.LEN_INTERNATIONAL_MOBILE },
        { t: "uint32_t", k: "userID" },
        { t: "uint8_t", k: "smsType" },
        { t: "char16_t", k: "machineID", s: lengths.LEN_MACHINE_ID },
    ],
    CMD_MB_PlaceOrder: [
        { t: "uint32_t", k: "userID" },
        { t: "uint32_t", k: "productID" },
        { t: "int64_t", k: "price" },
        { t: "utf8", k: "nickName", s: lengths.LEN_NICKNAME },
        { t: "utf8", k: "machineID", s: lengths.LEN_MACHINE_ID },
        { t: "utf8", k: "ip", s: lengths.LEN_IP },
        { t: "utf8", k: "extends", s: 1024 },
    ],
    CMD_MB_PlaceOrderResult: [
        { t: "utf8", k: "msg", s: 1024 },
    ],
};


// 专属发送结构(因为接收与发送有相同的命令)
export const sendStructors: INetPackTemplateDataSet = {
    [commands.MDM_MB_LOGON]: {
        [commands.SUB_MB_RELOGON]: [
            { t: "uint32_t", k: "gameID" },
            { t: "char16_t", k: "dynamicPass", s: lengths.LEN_PASSWORD },
            { t: "char16_t", k: "ip", s: lengths.LEN_IP },
            { t: "char16_t", k: "machineID", s: lengths.LEN_MACHINE_ID },
        ],
        [commands.SUB_MB_GetScoreInfo]: [
            { t: "uint32_t", k: "userID" },
        ],
    },
};


// 专属发送结构(因为接收与发送有相同的命令)
export const recvStructors: INetPackTemplateDataSet = {
    [commands.MDM_MB_LOGON]: {
        [commands.SUB_MB_RELOGON]: [
            { t: "uint32_t", k: "errorCode" },
            { t: "uint32_t", k: "userID" },
            { t: "uint32_t", k: "gameID" },
            { t: "char16_t", k: "dynamicPass", s: lengths.LEN_PASSWORD },
            { t: "time_t", k: "regDate" },
        ],
        [commands.SUB_MB_GetScoreInfo]: [
            { t: "int64_t", k: "score" },
            { t: "int64_t", k: "insureScore" },
            { t: "int64_t", k: "tCCoin" },
            { t: "int64_t", k: "tCCoinInsure" },
            { t: "uint8_t", k: "growLevel" },
        ],
    },
};

// 协议结构申明(通用申明)
export const structors: INetPackTemplateDataSet = {
    [commands.MDM_MB_LOGON]: {
        // 获取服务器当前时间戳:发送(8,25) CMD_MB_Common_Query
        [commands.SUB_GP_SERVER_UTC_TIMESTAMP]: commonStructors.CMD_MB_Common_Query,
        // 获取服务器当前时间戳:接收(8,26) tagUTCTimestamp
        [commands.SUB_GP_SERVER_UTC_TIMESTAMP_RESULT]: [
            { t: "time_t", k: "timestamp" },
            { t: "int32_t", k: "zone" },
        ],
        // 获取当前积分:发送(8,110) CMD_MB_Common_Query
        [commands.SUB_MB_GetScoreInfo]: commonStructors.CMD_MB_Common_Query,
        // 获取当前积分:接收(8,110) tagScoreInfo
        // 账号登陆:发送(8,2) CMD_MB_LogonAccounts
        [commands.SUB_MB_LOGON_ACCOUNTS]: [
            { t: "uint16_t", k: "moduleID" },
            { t: "uint32_t", k: "plazaVersion" },
            { t: "uint8_t", k: "deviceType" },
            { t: "char16_t", k: "machineID", s: lengths.LEN_MACHINE_ID },
            { t: "char16_t", k: "accounts", s: lengths.LEN_ACCOUNTS },
            { t: "char16_t", k: "password", s: lengths.LEN_MD5 },
            { t: "uint8_t", k: "ipAddr", s: 14 },
            { t: "utf8", k: "channelName", s: 0 },
            { t: "uint32_t", k: "spreadBindID" },
        ],
        // 账号登陆:接收(8,100) CMD_MB_LogonSuccess
        [commands.SUB_MB_LOGON_SUCCESS]: [
            { t: "uint16_t", k: "faceID" },
            { t: "uint8_t", k: "gender" },
            { t: "uint32_t", k: "customID" },
            { t: "uint32_t", k: "userID" },
            { t: "uint32_t", k: "gameID" },
            { t: "uint32_t", k: "experience" },
            { t: "int64_t", k: "loveLiness" },
            { t: "char16_t", k: "accounts", s: lengths.LEN_ACCOUNTS },
            { t: "char16_t", k: "nickName", s: lengths.LEN_NICKNAME },
            { t: "char16_t", k: "dynamicPass", s: lengths.LEN_PASSWORD },
            { t: "int64_t", k: "userScore" },
            { t: "int64_t", k: "tCCoin" },
            { t: "int64_t", k: "userInsure" },
            { t: "int64_t", k: "tCCoinInsure" },
            { t: "uint8_t", k: "insureEnabled" },
            { t: "uint8_t", k: "isAgent" },
            { t: "uint8_t", k: "moorMachine" },
            { t: "int64_t", k: "roomCard" },
            { t: "uint32_t", k: "lockServerID" },
            { t: "uint32_t", k: "kindID" },
            { t: "uint32_t", k: "agentID" },
            { t: "uint32_t", k: "userFlag" },
        ],
        // 注册账号:发送(8,3) CMD_MB_RegisterAccounts
        [commands.SUB_MB_REGISTER_ACCOUNTS]: [
            { t: "uint16_t", k: "moduleID" },
            { t: "uint32_t", k: "plazaVersion" },
            { t: "uint8_t", k: "deviceType" },
            { t: "char16_t", k: "machineID", s: lengths.LEN_MACHINE_ID },
            { t: "char16_t", k: "accounts", s: lengths.LEN_ACCOUNTS },
            { t: "char16_t", k: "logonPass", s: lengths.LEN_MD5 },
            { t: "char16_t", k: "checkCode", s: lengths.LEN_MOBILE_CHECKCODE },
            { t: "char16_t", k: "nickName", s: lengths.LEN_NICKNAME },
            { t: "uint16_t", k: "faceID" },
            { t: "uint8_t", k: "gender" },
            { t: "uint8_t", k: "ipAddr", s: 14 },
            { t: "utf8", k: "channelName", s: 0 },
            { t: "uint32_t", k: "spreadBindID" },
        ],
        // 注册账号:接收(8,100) CMD_MB_LogonSuccess
        // 注册成功:接收(8,103) CMD_MB_Common_Query
        [commands.SUB_MB_REGISTER_SUCCESS]: commonStructors.CMD_MB_Common_Query,
        // 注册失败:接收(8,102) CMD_GP_LogonFailure
        [commands.SUB_MB_REGISTER_FAILURE]: [
            { t: "int32_t", k: "resultCode" },
            { t: "char16_t", k: "describeString", s: 128 },
        ],
        // 三方登陆:发送(8,4) CMD_MB_LogonOtherPlatform
        [commands.SUB_MB_LOGON_OTHERPLATFORM]: [
            { t: "uint16_t", k: "moduleID" },
            { t: "uint32_t", k: "plazaVersion" },
            { t: "uint8_t", k: "deviceType" },
            { t: "uint8_t", k: "gender" },
            { t: "uint8_t", k: "platformID" },
            { t: "char16_t", k: "userUin", s: lengths.LEN_USER_UIN },
            { t: "char16_t", k: "nickName", s: lengths.LEN_NICKNAME },
            { t: "char16_t", k: "compellation", s: lengths.LEN_COMPELLATION },
            { t: "char16_t", k: "machineID", s: lengths.LEN_MACHINE_ID },
            { t: "char16_t", k: "mobilePhone", s: lengths.LEN_MOBILE_PHONE },
            { t: "uint8_t", k: "ipAddr", s: 33 },
            { t: "char16_t", k: "accessToken", s: 0 },
            { t: "char16_t", k: "email", s: 0 },
            { t: "utf8", k: "channelName", s: 0 },
            { t: "uint32_t", k: "spreadBindID" },
        ],
        // 三方登陆:接收(8,100) CMD_MB_LogonSuccess
        // 登陆失败:接收(8,101) CMD_GP_LogonFailure
        [commands.SUB_MB_LOGON_FAILURE]: [
            { t: "int32_t", k: "resultCode" },
            { t: "char16_t", k: "describeString", s: 128 },
        ],
        // 游客登陆:发送(8,5) CMD_MB_LogonVisitor
        [commands.SUB_MB_LOGON_VISITOR]: [
            { t: "uint16_t", k: "moduleID" },
            { t: "uint32_t", k: "plazaVersion" },
            { t: "uint8_t", k: "deviceType" },
            { t: "char16_t", k: "machineID", s: lengths.LEN_MACHINE_ID },
            { t: "char16_t", k: "mobilePhone", s: lengths.LEN_MOBILE_PHONE },
            { t: "uint8_t", k: "ipAddr", s: 14 },
            { t: "utf8", k: "channelName", s: 0 },
            { t: "uint32_t", k: "spreadBindID" },
        ],
        // 游客登陆:接收(8,100) CMD_MB_LogonSuccess
        // 登陆失败:接收(8,101) CMD_GP_LogonFailure
        // 手机登陆（新）:发送(8,7) CMD_MB_LogonMobileEx
        [commands.SUB_MB_LOGON_MOBILE_EX]: [
            { t: "uint16_t", k: "moduleID" },
            { t: "uint32_t", k: "plazaVersion" },
            { t: "uint8_t", k: "deviceType" },
            { t: "char16_t", k: "machineID", s: lengths.LEN_MACHINE_ID },
            { t: "char16_t", k: "mobilePhone", s: lengths.LEN_INTERNATIONAL_MOBILE },
            { t: "char16_t", k: "dynamicPass", s: lengths.LEN_PASSWORD },
            { t: "uint8_t", k: "ipAddr", s: 14 },
            { t: "utf8", k: "channelName", s: 0 },
            { t: "uint32_t", k: "spreadBindID" },
        ],
        // 手机登陆（新）:接收(8,100) CMD_MB_LogonSuccess
        // 登陆失败:接收(8,101) CMD_GP_LogonFailure
        // 断线重登:发送(8,10) CMD_MB_Relogon
        [commands.SUB_MB_RELOGON]: [
            { t: "uint32_t", k: "gameID" },
            { t: "char16_t", k: "dynamicPass", s: lengths.LEN_PASSWORD },
            { t: "char16_t", k: "ip", s: lengths.LEN_IP },
            { t: "char16_t", k: "machineID", s: lengths.LEN_MACHINE_ID },
        ],
        // 断线重登:接收(8,10) CMD_MB_RelogonResult
        // 登出:发送(8,11) CMD_MB_LogonExit
        [commands.SUB_MB_LOGON_EXIT]: [
            { t: "uint32_t", k: "userID" },
        ],
        // 登出:接收(8,12) CMD_MB_Common_Query
        [commands.SUB_MB_LOGON_EXIT_RESULT]: commonStructors.CMD_MB_Common_Query,
        // 重置密码:发送(8,130) CMD_MB_ResetLogonPassword
        [commands.SUB_MB_RESET_LOGON_PASSWORD]: [
            { t: "char16_t", k: "accounts", s: lengths.LEN_ACCOUNTS },
            { t: "char16_t", k: "checkCode", s: lengths.LEN_MOBILE_CHECKCODE },
            { t: "char16_t", k: "newPassword", s: lengths.LEN_PASSWORD },
        ],
        // 重置密码:接收(8,131) CMD_MB_ResetLogonPasswordResult
        [commands.SUB_MB_RESET_LOGON_PASSWORD_RESULT]: [
            { t: "uint32_t", k: "errorCode" },
        ],
        // 发送登陆短信:发送(8,120) CMD_GP_SendSmsCode
        [commands.SUB_MB_SendSMSLogonCode]: commonStructors.CMD_GP_SendSmsCode,
        // 发送登陆短信:接收(8,121) CMD_GP_SendSmsCodeResult
        [commands.SUB_MB_SendSMSLogonCodeResult]: [
            { t: "uint32_t", k: "errorCode" },
            { t: "time_t", k: "timestamp" },
            { t: "uint32_t", k: "restSecond" },
        ],
        // 发送重置密码短信:发送(8,122) CMD_GP_SendSmsCode
        [commands.SUB_MB_SendSMSResetPassword]: commonStructors.CMD_GP_SendSmsCode,
        // 发送重置密码短信:接收(8,123) CMD_GP_SendSmsCodeResult
        [commands.SUB_MB_SendSMSResetPasswordResult]: [
            { t: "uint32_t", k: "errorCode" },
            { t: "time_t", k: "timestamp" },
            { t: "uint32_t", k: "restSecond" },
        ],
        // 发送账号注册短信:发送(8,124) CMD_GP_SendSmsCode
        [commands.SUB_MB_SendSMSRegisteUser]: commonStructors.CMD_GP_SendSmsCode,
        // 发送账号注册短信:接收(8,125) CMD_GP_SendSmsCodeResult
        [commands.SUB_MB_SendSMSRegisteUserResult]: [
            { t: "uint32_t", k: "errorCode" },
            { t: "time_t", k: "timestamp" },
            { t: "uint32_t", k: "restSecond" },
        ],
        // IPv6-账号登陆:发送(8,602) CMD_MB_LogonAccountsV6
        [commands.SUB_MB_LOGON_ACCOUNTS_V6]: [
            { t: "uint16_t", k: "moduleID" },
            { t: "uint32_t", k: "plazaVersion" },
            { t: "uint8_t", k: "deviceType" },
            { t: "char16_t", k: "machineID", s: lengths.LEN_MACHINE_ID },
            { t: "char16_t", k: "accounts", s: lengths.LEN_ACCOUNTS },
            { t: "char16_t", k: "password", s: lengths.LEN_MD5 },
            { t: "utf8", k: "clientIP", s: lengths.LEN_IP_V6 },
            { t: "utf8", k: "channelName", s: 1024 },
        ],
        // IPv6-账号登陆:接收(8,100) CMD_MB_LogonSuccess
        // IPv6-注册账号:发送(8,603) CMD_MB_RegisterAccountsV6
        [commands.SUB_MB_REGISTER_ACCOUNTS_V6]: [
            { t: "uint16_t", k: "moduleID" },
            { t: "uint32_t", k: "plazaVersion" },
            { t: "uint8_t", k: "deviceType" },
            { t: "char16_t", k: "machineID", s: lengths.LEN_MACHINE_ID },
            { t: "char16_t", k: "accounts", s: lengths.LEN_ACCOUNTS },
            { t: "char16_t", k: "logonPass", s: lengths.LEN_MD5 },
            { t: "char16_t", k: "checkCode", s: lengths.LEN_MOBILE_CHECKCODE },
            { t: "char16_t", k: "nickName", s: lengths.LEN_NICKNAME },
            { t: "uint16_t", k: "faceID" },
            { t: "uint8_t", k: "gender" },
            { t: "utf8", k: "clientIP", s: lengths.LEN_IP_V6 },
            { t: "utf8", k: "channelName", s: 1024 },
        ],
        // IPv6-注册账号:接收(8,100) CMD_MB_LogonSuccess
        // 注册成功:接收(8,103) CMD_MB_Common_Query
        // 注册失败:接收(8,102) CMD_GP_LogonFailure
        // IPv6-三方登陆:发送(8,604) CMD_MB_LogonOtherPlatformV6
        [commands.SUB_MB_LOGON_OTHERPLATFORM_V6]: [
            { t: "uint16_t", k: "moduleID" },
            { t: "uint32_t", k: "plazaVersion" },
            { t: "uint8_t", k: "deviceType" },
            { t: "uint8_t", k: "gender" },
            { t: "uint8_t", k: "platformID" },
            { t: "char16_t", k: "userUin", s: lengths.LEN_USER_UIN },
            { t: "char16_t", k: "nickName", s: lengths.LEN_NICKNAME },
            { t: "char16_t", k: "compellation", s: lengths.LEN_COMPELLATION },
            { t: "char16_t", k: "machineID", s: lengths.LEN_MACHINE_ID },
            { t: "char16_t", k: "mobilePhone", s: lengths.LEN_MOBILE_PHONE },
            { t: "utf8", k: "clientIP", s: lengths.LEN_IP_V6 },
            { t: "char16_t", k: "accessToken", s: 1024 },
        ],
        // IPv6-三方登陆:接收(8,100) CMD_MB_LogonSuccess
        // 登陆失败:接收(8,101) CMD_GP_LogonFailure
        // IPv6-游客登陆:发送(8,605) CMD_MB_LogonVisitorV6
        [commands.SUB_MB_LOGON_VISITOR_V6]: [
            { t: "uint16_t", k: "moduleID" },
            { t: "uint32_t", k: "plazaVersion" },
            { t: "uint8_t", k: "deviceType" },
            { t: "char16_t", k: "machineID", s: lengths.LEN_MACHINE_ID },
            { t: "char16_t", k: "mobilePhone", s: lengths.LEN_MOBILE_PHONE },
            { t: "utf8", k: "clientIP", s: lengths.LEN_IP_V6 },
            { t: "utf8", k: "channelName", s: 1024 },
        ],
        // IPv6-游客登陆:接收(8,100) CMD_MB_LogonSuccess
        // 登陆失败:接收(8,101) CMD_GP_LogonFailure
        // IPv6-手机登陆:发送(8,607) CMD_MB_LogonMobileExV6
        [commands.SUB_MB_LOGON_MOBILE_EX_V6]: [
            { t: "uint16_t", k: "moduleID" },
            { t: "uint32_t", k: "plazaVersion" },
            { t: "uint8_t", k: "deviceType" },
            { t: "char16_t", k: "machineID", s: lengths.LEN_MACHINE_ID },
            { t: "char16_t", k: "mobilePhone", s: lengths.LEN_INTERNATIONAL_MOBILE },
            { t: "char16_t", k: "dynamicPass", s: lengths.LEN_PASSWORD },
            { t: "utf8", k: "clientIP", s: lengths.LEN_IP_V6 },
            { t: "utf8", k: "channelName", s: 1024 },
        ],
        // IPv6-手机登陆:接收(8,100) CMD_MB_LogonSuccess
        // 登陆失败:接收(8,101) CMD_GP_LogonFailure
        // IPv6-断线重登:发送(8,610) CMD_MB_RelogonV6
        [commands.SUB_MB_RELOGON_V6]: [
            { t: "uint32_t", k: "gameID" },
            { t: "char16_t", k: "dynamicPass", s: lengths.LEN_PASSWORD },
            { t: "utf8", k: "clientIP", s: lengths.LEN_IP_V6 },
            { t: "char16_t", k: "machineID", s: lengths.LEN_MACHINE_ID },
        ],
        // IPv6-断线重登:接收(8,10) CMD_MB_RelogonResult
    },
    [commands.MDM_GP_USER_SERVICE]: {
        // 加载低保配置:发送(3,2100) CMD_MB_Common_Query
        [commands.SUB_MB_BaseEnsureLoadConfig]: commonStructors.CMD_MB_Common_Query,
        // 加载低保配置:接收(3,2101) CMD_MB_BaseEnsureLoadConfigResult
        [commands.SUB_MB_BaseEnsureLoadConfig_RESULT]: [
            { t: "int64_t", k: "scoreCondition", s: 2 },
            {
                t: [
                    { t: "int64_t", k: "firstScore" },
                    { t: "int64_t", k: "secondScore" },
                ], k: "scoreReward", s: lengths.MAX_GROW_COUNT 
            },
        ],
        // 获取用户低保状态:发送(3,2102) CMD_MB_Common_Query
        [commands.SUB_MB_BaseEnsureGetStatus]: commonStructors.CMD_MB_Common_Query,
        // 获取用户低保状态:接收(3,2103) CMD_MB_BaseEnsureGetStatusResult
        [commands.SUB_MB_BaseEnsureGetStatus_RESULT]: [
            { t: "uint32_t", k: "takeTimes" },
            { t: "uint8_t", k: "isTodayPay" },
            { t: "int64_t", k: "totalScore" },
            { t: "uint8_t", k: "isEnable" },
            { t: "uint8_t", k: "growLevel" },
            { t: "int64_t", k: "rewardScore" },
        ],
        // 领取低保奖励:发送(3,2104) CMD_MB_BaseEnsureTakeReward
        [commands.SUB_MB_BaseEnsureTakeReward]: [
            { t: "uint32_t", k: "userID" },
            { t: "char16_t", k: "dynamicPass", s: lengths.LEN_PASSWORD },
            { t: "char16_t", k: "clientIP", s: lengths.LEN_IP },
            { t: "char16_t", k: "machineID", s: lengths.LEN_MACHINE_ID },
        ],
        // 领取低保奖励:接收(3,2105) CMD_MB_BaseEnsureTakeRewardResult
        [commands.SUB_MB_BaseEnsureTakeReward_RESULT]: [
            { t: "uint32_t", k: "errorCode" },
            { t: "int64_t", k: "score" },
            { t: "uint32_t", k: "restTimes" },
        ],
        // 加载签到配置:发送(3,2140) CMD_MB_Common_Query
        [commands.SUB_MB_CheckInLoadConfig]: commonStructors.CMD_MB_Common_Query,
        // 加载签到配置:接收(3,2141) CMD_MB_CheckInLoadConfigResult
        [commands.SUB_MB_CheckInLoadConfig_RESULT]: [
            {
                t: [
                    { t: "int64_t", k: "rewardGold", s: lengths.LEN_WEEK },
                    {
                        t: [
                            { t: "uint16_t", k: "days" },
                            { t: "int64_t", k: "score" },
                        ], k: "serialCheckInReward", s: lengths.MAX_SERAIL_CHECK_IN_COUNT 
                    },
                ], k: "items", s: lengths.MAX_GROW_COUNT 
            },
        ],
        // 获取用户签到状态:发送(3,2142) CMD_MB_CheckInGetUserStatus
        [commands.SUB_MB_CheckInGetUserStatus]: [
            { t: "uint32_t", k: "userID" },
        ],
        // 获取用户签到状态:接收(3,2143) CMD_MB_CheckInGetUserStatusResult
        [commands.SUB_MB_CheckInGetUserStatus_RESULT]: [
            { t: "uint16_t", k: "turnDays" },
            { t: "uint16_t", k: "seriesDays" },
            { t: "uint8_t", k: "bTodayChecked" },
            { t: "uint8_t", k: "allow" },
            { t: "uint8_t", k: "seriesAllow", s: lengths.MAX_SERAIL_CHECK_IN_COUNT },
            { t: "int64_t", k: "payScore" },
            { t: "int64_t", k: "payRequire" },
        ],
        // 执行签到领取奖励:发送(3,2144) CMD_MB_CheckInDone
        [commands.SUB_MB_CheckInDone]: [
            { t: "uint32_t", k: "userID" },
            { t: "char16_t", k: "dynamicPass", s: lengths.LEN_PASSWORD },
            { t: "char16_t", k: "machineID", s: lengths.LEN_MACHINE_ID },
            { t: "char16_t", k: "clientIP", s: lengths.LEN_IP },
        ],
        // 执行签到领取奖励:接收(3,2145) CMD_MB_CheckInDoneResult
        [commands.SUB_MB_CheckInDone_RESULT]: [
            { t: "uint32_t", k: "errorCode" },
            { t: "int64_t", k: "score" },
        ],
        // 领取连续签到奖励:发送(3,2146) CMD_MB_CheckInTakeSerialReward
        [commands.SUB_MB_CheckInTakeSerialReward]: [
            { t: "uint32_t", k: "userID" },
            { t: "uint8_t", k: "index" },
            { t: "char16_t", k: "dynamicPass", s: lengths.LEN_PASSWORD },
            { t: "char16_t", k: "ip", s: lengths.LEN_IP },
        ],
        // 领取连续签到奖励:接收(3,2147) CMD_MB_CheckInTakeSerialRewardResult
        [commands.SUB_MB_CheckInTakeSerialReward_RESULT]: [
            { t: "uint32_t", k: "errorCode" },
            { t: "int64_t", k: "score" },
        ],
        // 新协议(双货币)存入金币:发送(3,1310) CMD_MB_UserSaveScoreEx
        [commands.SUB_MB_UserSaveScoreEx]: [
            { t: "uint32_t", k: "userID" },
            { t: "char16_t", k: "insurePass", s: lengths.LEN_PASSWORD },
            { t: "uint8_t", k: "currencyType" },
            { t: "int64_t", k: "score" },
            { t: "uint32_t", k: "clientAddr" },
            { t: "char16_t", k: "machineID", s: lengths.LEN_MACHINE_ID },
        ],
        // 新协议(双货币)存入金币:接收(3,1311) CMD_MB_UserSaveScoreExResult
        [commands.SUB_MB_UserSaveScoreEx_RESULT]: [
            { t: "uint32_t", k: "resultCode" },
            { t: "uint8_t", k: "currencyType" },
            { t: "int64_t", k: "score" },
        ],
        // 新协议(双货币)取出金币:发送(3,1312) CMD_MB_UserTakeScoreEx
        [commands.SUB_MB_UserTakeScoreEx]: [
            { t: "uint32_t", k: "userID" },
            { t: "char16_t", k: "insurePass", s: lengths.LEN_PASSWORD },
            { t: "uint8_t", k: "currencyType" },
            { t: "int64_t", k: "score" },
            { t: "uint32_t", k: "clientAddr" },
            { t: "char16_t", k: "machineID", s: lengths.LEN_MACHINE_ID },
        ],
        // 新协议(双货币)取出金币:接收(3,1313) CMD_MB_UserTakeScoreExResult
        [commands.SUB_MB_UserTakeScoreEx_RESULT]: [
            { t: "uint32_t", k: "resultCode" },
            { t: "uint8_t", k: "currencyType" },
            { t: "int64_t", k: "score" },
        ],
        // 获取用户成长等级当前状态:发送(3,1502) CMD_MB_GetGrowUserStatus
        [commands.SUB_MB_GetGrowUserStatus]: [
            { t: "uint32_t", k: "userID" },
            { t: "uint8_t", k: "experienceRenderMode" },
        ],
        // 获取用户成长等级当前状态:接收(3,1503) CMD_MB_GetGrowUserStatusResult
        [commands.SUB_MB_GetGrowUserStatus_RESULT]: [
            { t: "uint8_t", k: "growLevel" },
            { t: "uint32_t", k: "payCurrent" },
            { t: "uint32_t", k: "payRequire" },
            { t: "int64_t", k: "betCurrent" },
            { t: "int64_t", k: "betRequire" },
            { t: "uint16_t", k: "dailyAddition" },
            { t: "uint16_t", k: "dailyAdditionNext" },
            { t: "uint16_t", k: "weeklyAddition" },
            { t: "uint16_t", k: "weeklyAdditionNext" },
            { t: "uint16_t", k: "monthlyAddition" },
            { t: "uint16_t", k: "monthlyAdditionNext" },
        ],
        // 获取用户成长礼包状态:发送(3,1504) CMD_MB_Common_Query
        [commands.SUB_MB_GetGrowGiftStatus]: commonStructors.CMD_MB_Common_Query,
        // 获取用户成长礼包状态:接收(3,1505) CMD_MB_GetGrowGiftStatusResult
        [commands.SUB_MB_GetGrowGiftStatus_RESULT]: [
            { t: "uint8_t", k: "growLevel" },
            {
                t: [
                    { t: "uint8_t", k: "status" },
                    { t: "int64_t", k: "score" },
                    { t: "int64_t", k: "nextScore" },
                    { t: "int64_t", k: "totalScore" },
                ], k: "weekGift"
            },
            {
                t: [
                    { t: "uint8_t", k: "status" },
                    { t: "int64_t", k: "score" },
                    { t: "int64_t", k: "nextScore" },
                    { t: "int64_t", k: "totalScore" },
                ], k: "monthGift"
            },
            {
                t: [
                    { t: "uint8_t", k: "status" },
                    { t: "int64_t", k: "score" },
                    { t: "int64_t", k: "nextScore" },
                    { t: "int64_t", k: "totalScore" },
                ], k: "growGift"
            },
        ],
        // 领取用户成长礼包奖励:发送(3,1506) CMD_MB_TakeGrowGift
        [commands.SUB_MB_TakeGrowGift]: [
            { t: "uint32_t", k: "userID" },
            { t: "char16_t", k: "dynamicPass", s: lengths.LEN_PASSWORD },
            { t: "char16_t", k: "ip", s: lengths.LEN_IP },
            { t: "uint8_t", k: "typeID" },
        ],
        // 领取用户成长礼包奖励:接收(3,1507) CMD_MB_TakeGrowGiftResult
        [commands.SUB_MB_TakeGrowGift_RESULT]: [
            { t: "uint32_t", k: "errorCode" },
            { t: "uint8_t", k: "typeID" },
            { t: "uint16_t", k: "count" },
            {
                t: [
                    { t: "uint8_t", k: "level" },
                    { t: "int64_t", k: "score" },
                ], k: "items", s: 0 
            },
        ],
        // 获取成长等级配置(新版本):发送(3,1508) CMD_MB_Common_Query
        [commands.SUB_MB_GetGrowLevelConfig2]: commonStructors.CMD_MB_Common_Query,
        // 获取成长等级配置(新版本):接收(3,1509) CMD_MB_GetGrowLevelConfig2Result
        [commands.SUB_MB_GetGrowLevelConfig2_RESULT]: [
            {
                t: [
                    { t: "uint8_t", k: "growLevel" },
                    { t: "int64_t", k: "betRequire" },
                    { t: "uint32_t", k: "payRequire" },
                    { t: "uint16_t", k: "dailyAddition" },
                    { t: "uint16_t", k: "weeklyAddition" },
                    { t: "uint16_t", k: "monthlyAddition" },
                    { t: "int64_t", k: "weekGift" },
                    { t: "int64_t", k: "monthGift" },
                    { t: "int64_t", k: "growGift" },
                    { t: "int64_t", k: "baseEnsureFirst" },
                    { t: "int64_t", k: "baseEnsureSecond" },
                ], k: "items", s: lengths.MAX_GROW_COUNT 
            },
        ],
        // 获取转盘格子配置:发送(3,1510) CMD_MB_Common_Query
        [commands.SUB_MB_GetLotteryCell]: commonStructors.CMD_MB_Common_Query,
        // 获取转盘格子配置:接收(3,1511) CMD_MB_GetLotteryCellResult
        [commands.SUB_MB_GetLotteryCell_RESULT]: [
            {
                t: [
                    {
                        t: [
                            { t: "uint32_t", k: "itemID" },
                            { t: "uint8_t", k: "levelRequire" },
                            { t: "uint8_t", k: "currencyType" },
                            { t: "int64_t", k: "currencyValue" },
                            { t: "char16_t", k: "name", s: 32 },
                        ], k: "items", s: lengths.MAX_ITEM_COUNT 
                    },
                ], k: "lotterys", s: lengths.MAX_LOTTERY_COUNT 
            },
        ],
        // 获取用户当前的转盘状态:发送(3,1512) CMD_MB_GetLotteryUserStatus
        [commands.SUB_MB_GetLotteryUserStatus]: [
            { t: "uint32_t", k: "userID" },
            { t: "uint16_t", k: "recordCount" },
        ],
        // 获取用户当前的转盘状态:接收(3,1513) CMD_MB_GetLotteryUserStatusResult
        [commands.SUB_MB_GetLotteryUserStatus_RESULT]: [
            { t: "uint8_t", k: "growLevel" },
            {
                t: [
                    { t: "uint16_t", k: "restCount" },
                    { t: "uint16_t", k: "addition" },
                    { t: "uint32_t", k: "payProgressCurVal" },
                    { t: "uint32_t", k: "payProgressMaxVal" },
                    { t: "int64_t", k: "betProgressCurVal" },
                    { t: "int64_t", k: "betProgressMaxVal" },
                    { t: "uint8_t", k: "itemStatus", s: lengths.MAX_ITEM_COUNT },
                ], k: "lotterys", s: lengths.MAX_LOTTERY_COUNT 
            },
            { t: "uint8_t", k: "serialLogonDays" },
            { t: "uint8_t", k: "logonAddition" },
            { t: "uint8_t", k: "logonDaysWeekCurVal" },
            { t: "uint8_t", k: "logonDaysWeekMaxVal" },
            { t: "uint8_t", k: "logonDaysMonthCurVal" },
            { t: "uint8_t", k: "logonDaysMonthMaxVal" },
            { t: "uint16_t", k: "recordCount" },
            {
                t: [
                    { t: "uint32_t", k: "queueIndex" },
                    { t: "time_t", k: "timestamp" },
                    { t: "uint8_t", k: "lotteryTypeID" },
                    { t: "uint8_t", k: "itemIndex" },
                    { t: "uint8_t", k: "currencyType" },
                    { t: "int64_t", k: "currencyValue" },
                    { t: "int64_t", k: "additionValue" },
                    { t: "char16_t", k: "nickName", s: lengths.LEN_NICKNAME },
                ], k: "items", s: 0 
            },
        ],
        // 获取平台中奖最新广播消息列表:发送(3,1514) CMD_MB_GetLotteryPlatformRecordNewest
        [commands.SUB_MB_GetLotteryPlatformRecordNewest]: [
            { t: "uint32_t", k: "userID" },
            { t: "uint16_t", k: "recordCount" },
            { t: "uint32_t", k: "lowerBound" },
            { t: "uint8_t", k: "lotteryType" },
        ],
        // 获取平台中奖最新广播消息列表:接收(3,1515) CMD_MB_GetLotteryPlatformRecordResult
        [commands.SUB_MB_GetLotteryPlatformRecordNewest_RESULT]: [
            { t: "uint16_t", k: "count" },
            {
                t: [
                    { t: "uint32_t", k: "queueIndex" },
                    { t: "time_t", k: "timestamp" },
                    { t: "uint8_t", k: "lotteryTypeID" },
                    { t: "uint8_t", k: "itemIndex" },
                    { t: "uint8_t", k: "currencyType" },
                    { t: "int64_t", k: "currencyValue" },
                    { t: "int64_t", k: "additionValue" },
                    { t: "char16_t", k: "nickName", s: lengths.LEN_NICKNAME },
                ], k: "items", s: 0 
            },
        ],
        // 获取平台中奖历史广播消息列表:发送(3,1516) CMD_MB_GetLotteryPlatformRecordHistory
        [commands.SUB_MB_GetLotteryPlatformRecordHistory]: [
            { t: "uint16_t", k: "recordCount" },
            { t: "uint32_t", k: "upperBound" },
            { t: "uint8_t", k: "lotteryType" },
        ],
        // 获取平台中奖历史广播消息列表:接收(3,1517) CMD_MB_GetLotteryPlatformRecordResult
        [commands.SUB_MB_GetLotteryPlatformRecordHistory_RESULT]: [
            { t: "uint16_t", k: "count" },
            {
                t: [
                    { t: "uint32_t", k: "queueIndex" },
                    { t: "time_t", k: "timestamp" },
                    { t: "uint8_t", k: "lotteryTypeID" },
                    { t: "uint8_t", k: "itemIndex" },
                    { t: "uint8_t", k: "currencyType" },
                    { t: "int64_t", k: "currencyValue" },
                    { t: "int64_t", k: "additionValue" },
                    { t: "char16_t", k: "nickName", s: lengths.LEN_NICKNAME },
                ], k: "items", s: 0 
            },
        ],
        // 获取用户自己中奖历史消息列表:发送(3,1518) CMD_MB_GetLotteryUserRecordHistory
        [commands.SUB_MB_GetLotteryUserRecordHistory]: [
            { t: "uint32_t", k: "userID" },
            { t: "uint16_t", k: "pageSize" },
            { t: "uint16_t", k: "pageIndex" },
        ],
        // 获取用户自己中奖历史消息列表:接收(3,1519) CMD_MB_GetLotteryUserRecordResult
        [commands.SUB_MB_GetLotteryUserRecordHistory_RESULT]: [
            { t: "uint16_t", k: "count" },
            {
                t: [
                    { t: "time_t", k: "timestamp" },
                    { t: "uint8_t", k: "lotteryType" },
                    { t: "uint8_t", k: "itemIndex" },
                    { t: "uint8_t", k: "currencyType" },
                    { t: "int64_t", k: "currencyValue" },
                    { t: "int64_t", k: "additionValue" },
                ], k: "items", s: 0 
            },
        ],
        // 转动转盘:发送(3,1520) CMD_MB_LotterySbin
        [commands.SUB_MB_LotterySbin]: [
            { t: "uint32_t", k: "userID" },
            { t: "uint8_t", k: "lotteryType" },
            { t: "char16_t", k: "ip", s: lengths.LEN_IP },
        ],
        // 转动转盘:接收(3,1521) CMD_MB_LotterySbinResult
        [commands.SUB_MB_LotterySbin_RESULT]: [
            { t: "uint32_t", k: "errorCode" },
            { t: "uint8_t", k: "lotteryType" },
            { t: "uint8_t", k: "itemIndex" },
            { t: "uint8_t", k: "currencyType" },
            { t: "int64_t", k: "currencyValue" },
            { t: "uint16_t", k: "additionPercent" },
            { t: "int64_t", k: "additionValue" },
            { t: "uint16_t", k: "restCount" },
        ],
        // 各种赠送方案配置:发送(3,1522) CMD_MB_Common_Query
        [commands.SUB_MB_GetLotteryPresentConfig]: commonStructors.CMD_MB_Common_Query,
        // 各种赠送方案配置:接收(3,1523) CMD_MB_GetLotteryPresentConfigResult
        [commands.SUB_MB_GetLotteryPresentConfig_RESULT]: [
            { t: "uint16_t", k: "count" },
            {
                t: [
                    { t: "uint8_t", k: "lotteryTypeID" },
                    { t: "char16_t", k: "key", s: 16 },
                    { t: "int64_t", k: "condition" },
                    { t: "uint8_t", k: "presentCount" },
                ], k: "items", s: 0 
            },
        ],
        // 获取手机绑定状态:发送(3,1284) CMD_MB_Common_Query
        [commands.SUB_MB_GetBindMobileStatus]: commonStructors.CMD_MB_Common_Query,
        // 获取手机绑定状态:接收(3,1285) CMD_MB_GetBindMobileStatusResult
        [commands.SUB_MB_GetBindMobileStatus_RESULT]: [
            { t: "uint8_t", k: "boBind" },
            { t: "uint8_t", k: "boReward" },
            { t: "uint8_t", k: "currencyType" },
            { t: "int64_t", k: "rewardScore" },
        ],
        // 领取手机绑定奖励:发送(3,1286) CMD_MB_TakeBindMobileReward
        [commands.SUB_MB_TakeBindMobileReward]: [
            { t: "uint32_t", k: "userID" },
            { t: "char16_t", k: "dynamicPass", s: lengths.LEN_PASSWORD },
            { t: "char16_t", k: "iPAddress", s: lengths.LEN_IP },
        ],
        // 领取手机绑定奖励:接收(3,1287) CMD_MB_TakeBindMobileRewardResult
        [commands.SUB_MB_TakeBindMobileReward_RESULT]: [
            { t: "uint32_t", k: "errorCode" },
            { t: "uint8_t", k: "currencyType" },
            { t: "int64_t", k: "rewardScore" },
        ],
        // 获取商品列表:发送(3,1210) CMD_MB_GetProductInfos
        [commands.SUB_MB_GetProductInfos]: [
            { t: "uint32_t", k: "userID" },
            { t: "char16_t", k: "dynamicPass", s: lengths.LEN_PASSWORD },
            { t: "uint32_t", k: "channelID" },
        ],
        // 获取商品列表:接收(3,1211) CMD_MB_GetProductInfosResult
        [commands.SUB_MB_GetProductInfos_RESULT]: [
            { t: "uint32_t", k: "errorCode" },
            { t: "uint8_t", k: "enable" },
            { t: "uint16_t", k: "productTypeCount" },
            {
                t: [
                    { t: "uint32_t", k: "productTypeID" },
                    { t: "char16_t", k: "productTypeName", s: lengths.LEN_PRODUCT_TYPE_NAME },
                    { t: "uint8_t", k: "active" },
                    { t: "uint16_t", k: "productCount" },
                    {
                        t: [
                            { t: "uint32_t", k: "productID" },
                            { t: "uint32_t", k: "price" },
                            { t: "uint8_t", k: "awardType" },
                            { t: "int64_t", k: "awardValue" },
                            { t: "uint8_t", k: "attachType" },
                            { t: "int64_t", k: "attachValue" },
                        ], k: "productInfos", s: 0 
                    },
                ], k: "productTypes", s: 0 
            },
        ],
        // 查询某种礼包下商品的购买情况:发送(3,1212) CMD_MB_GetProductTypeActiveState
        [commands.SUB_MB_GetProductTypeActiveState]: [
            { t: "uint32_t", k: "userID" },
            { t: "char16_t", k: "dynamicPass", s: lengths.LEN_PASSWORD },
        ],
        // 查询某种礼包下商品的购买情况:接收(3,1213) CMD_MB_GetProductTypeActiveStateResult
        [commands.SUB_MB_GetProductTypeActiveState_RESULT]: [
            { t: "uint32_t", k: "errorCode" },
            { t: "uint16_t", k: "productTypeCount" },
            {
                t: [
                    { t: "uint32_t", k: "productTypeID" },
                    { t: "uint8_t", k: "active" },
                ], k: "results", s: 0 
            },
        ],
        // 获取一次性商品购买情况:发送(3,1216) CMD_MB_GetProductActiveState
        [commands.SUB_MB_GetProductActiveState]: [
            { t: "uint32_t", k: "userID" },
            { t: "char16_t", k: "dynamicPass", s: lengths.LEN_PASSWORD },
            { t: "uint32_t", k: "productTypeID" },
        ],
        // 获取一次性商品购买情况:接收(3,1217) CMD_MB_GetProductActiveStateResult
        [commands.SUB_MB_GetProductActiveState_RESULT]: [
            { t: "uint16_t", k: "productCount" },
            { t: "uint8_t", k: "actives", s: lengths.MAX_PRODUCT_COUNT },
        ],
        // 获取商城商品角标:发送(3,1780) CMD_MB_GetProductExtendFlag
        [commands.SUB_MB_GetProductExtendFlag]: [
            { t: "uint32_t", k: "userID" },
            { t: "char16_t", k: "typeName", s: 16 },
            { t: "uint32_t", k: "channelID" },
        ],
        // 获取商城商品角标:接收(3,1781) CMD_MB_GetProductExtendFlagResult
        [commands.SUB_MB_GetProductExtendFlag_RESULT]: [
            { t: "uint32_t", k: "count" },
            {
                t: [
                    { t: "uint32_t", k: "productID" },
                    { t: "uint32_t", k: "extendFlag" },
                ], k: "items", s: 0 
            },
        ],
        // 获取支付/提现渠道:发送(3,2160) CMD_MB_Common_Query
        [commands.SUB_MB_GetPayChannel]: commonStructors.CMD_MB_Common_Query,
        // 获取支付/提现渠道:接收(3,2161) CMD_MB_GetPayChannelResult
        [commands.SUB_MB_GetPayChannel_RESULT]: [
            { t: "uint16_t", k: "count" },
            {
                t: [
                    { t: "uint32_t", k: "channelID" },
                    { t: "char16_t", k: "channelName", s: 16 },
                    { t: "int64_t", k: "minLimit" },
                    { t: "int64_t", k: "maxLimit" },
                    { t: "uint8_t", k: "boSupportWithdraw" },
                    { t: "char16_t", k: "supportBankCode", s: 256 },
                    { t: "uint8_t", k: "defaultMask" },
                ], k: "items", s: 0 
            },
        ],
        // 查询充值结果(批量):发送(3,2240) CMD_MB_QueryOrderStatus
        [commands.SUB_MB_QueryOrderStatusBatch]: [
            { t: "uint32_t", k: "userID" },
            { t: "uint16_t", k: "count" },
            { t: "uint32_t", k: "onlineID", s: lengths.MAX_BATCH_ORDER_QUERY },
        ],
        // 查询充值结果(批量):接收(3,2241) CMD_MB_QueryOrderStatusResult
        [commands.SUB_MB_QueryOrderStatusBatch_RESULT]: [
            { t: "uint32_t", k: "userID" },
            { t: "uint16_t", k: "count" },
            {
                t: [
                    { t: "uint32_t", k: "onlineID" },
                    { t: "uint8_t", k: "boSuccess" },
                    { t: "uint8_t", k: "boClosed" },
                ], k: "items", s: lengths.MAX_BATCH_ORDER_QUERY 
            },
        ],
        // 获取一次性商品购买情况Ex:发送(3,2242) CMD_MB_GetProductActiveState
        [commands.SUB_MB_GetProductActiveStateEx]: [
            { t: "uint32_t", k: "userID" },
            { t: "char16_t", k: "dynamicPass", s: lengths.LEN_PASSWORD },
            { t: "uint32_t", k: "productTypeID" },
        ],
        // 获取一次性商品购买情况Ex:接收(3,2243) CMD_MB_GetProductActiveStateExResult
        [commands.SUB_MB_GetProductActiveStateEx_RESULT]: [
            { t: "uint32_t", k: "productType" },
            { t: "uint16_t", k: "productCount" },
            { t: "uint8_t", k: "actives", s: lengths.MAX_PRODUCT_COUNT },
        ],
        // 获取商品列表by礼包:发送(3,2244) CMD_MB_GetProductInfosByType
        [commands.SUB_MB_GetProductInfosByType]: [
            { t: "uint32_t", k: "channelID" },
            { t: "uint32_t", k: "productTypeID" },
            { t: "uint32_t", k: "userID" },
        ],
        // 获取商品列表by礼包:接收(3,2245) CMD_MB_GetProductInfosByTypeResult
        [commands.SUB_MB_GetProductInfosByType_RESULT]: [
            { t: "uint32_t", k: "userID" },
            { t: "uint32_t", k: "productTypeID" },
            { t: "uint16_t", k: "count" },
            {
                t: [
                    { t: "uint32_t", k: "productID" },
                    { t: "uint32_t", k: "price" },
                    { t: "uint8_t", k: "awardType" },
                    { t: "int64_t", k: "awardValue" },
                    { t: "uint8_t", k: "attachType" },
                    { t: "int64_t", k: "attachValue" },
                ], k: "productInfos", s: lengths.MAX_PRODUCT_COUNT 
            },
        ],
        // 查询最后一次充值订单信息:发送(3,1322) CMD_MB_GetLastPayInfo
        [commands.SUB_MB_GetLastPayInfo]: [
            { t: "uint32_t", k: "userID" },
            { t: "char16_t", k: "dynamicPass", s: lengths.LEN_PASSWORD },
            { t: "uint8_t", k: "currencyType" },
        ],
        // 查询最后一次充值订单信息:接收(3,1323) CMD_MB_GetLastPayInfoResult
        [commands.SUB_MB_GetLastPayInfo_RESULT]: [
            { t: "uint32_t", k: "errorCode" },
            { t: "time_t", k: "dateTime" },
            { t: "uint32_t", k: "payAmount" },
            { t: "int64_t", k: "score" },
            { t: "uint32_t", k: "productTypeID" },
            { t: "uint32_t", k: "productID" },
        ],
        // 充值下单:发送(3,2000) CMD_MB_PlaceOrder
        [commands.SUB_MB_PlacePayOrder]: commonStructors.CMD_MB_PlaceOrder,
        // 充值下单:接收(3,2001) CMD_MB_PlaceOrderResult
        [commands.SUB_MB_PlacePayOrder_RESULT]: commonStructors.CMD_MB_PlaceOrderResult,
        // 获取提现配置:发送(3,1222) CMD_MB_Common_Query
        [commands.SUB_MB_GetWithdrawConfig]: commonStructors.CMD_MB_Common_Query,
        // 获取提现配置:接收(3,1223) CMD_MB_GetWithdrawConfigResult
        [commands.SUB_MB_GetWithdrawConfig_RESULT]: [
            { t: "uint32_t", k: "errorCode" },
            { t: "char16_t", k: "url", s: lengths.LEN_URL_SHORT },
            { t: "char16_t", k: "accountTypes", s: 64 },
            { t: "uint16_t", k: "count" },
            {
                t: [
                    { t: "uint32_t", k: "productID" },
                    { t: "uint32_t", k: "price" },
                    { t: "uint8_t", k: "awardType" },
                    { t: "int64_t", k: "awardValue" },
                    { t: "uint8_t", k: "attachType" },
                    { t: "int64_t", k: "attachValue" },
                ], k: "items", s: 0 
            },
        ],
        // 获取提现历史记录:发送(3,1224) CMD_MB_GetWithdrawHistoryAccount
        [commands.SUB_MB_GetWithdrawHistoryAccount]: [
            { t: "uint32_t", k: "userID" },
            { t: "char16_t", k: "dynamicPass", s: lengths.LEN_PASSWORD },
        ],
        // 获取提现历史记录:接收(3,1225) CMD_MB_GetWithdrawHistoryAccountResult
        [commands.SUB_MB_GetWithdrawHistoryAccount_RESULT]: [
            { t: "uint16_t", k: "count" },
            {
                t: [
                    { t: "char16_t", k: "accountType", s: 16 },
                    { t: "char16_t", k: "accountName", s: 50 },
                    { t: "char16_t", k: "accountNumber", s: 32 },
                    { t: "char16_t", k: "idNumber", s: 32 },
                ], k: "history"
            },
        ],
        // 获取提现记录:发送(3,1226) CMD_MB_GetWithdrawRecord
        [commands.SUB_MB_GetWithdrawRecord]: [
            { t: "uint32_t", k: "userID" },
            { t: "uint32_t", k: "pageSize" },
            { t: "uint32_t", k: "pageIndex" },
        ],
        // 获取提现记录:接收(3,1227) CMD_MB_GetWithdrawRecordResult
        [commands.SUB_MB_GetWithdrawRecord_RESULT]: [
            { t: "uint32_t", k: "pageSize" },
            { t: "uint32_t", k: "pageIndex" },
            { t: "uint32_t", k: "recordCount" },
            { t: "uint32_t", k: "pageCount" },
            { t: "uint32_t", k: "count" },
            {
                t: [
                    { t: "int32_t", k: "amount" },
                    { t: "time_t", k: "applyDate" },
                    { t: "uint32_t", k: "status" },
                    { t: "char16_t", k: "orderID", s: 33 },
                ], k: "items", s: 0 
            },
        ],
        // 提现下单:发送(3,2002) CMD_MB_PlaceOrder
        [commands.SUB_MB_PlaceWithdrawOrder]: commonStructors.CMD_MB_PlaceOrder,
        // 提现下单:接收(3,2003) CMD_MB_PlaceOrderResult
        [commands.SUB_MB_PlaceWithdrawOrder_RESULT]: commonStructors.CMD_MB_PlaceOrderResult,
        // 获取提现限制配置:发送(3,1782) CMD_MB_Common_Query
        [commands.SUB_MB_GetWithdrawCashLimit]: commonStructors.CMD_MB_Common_Query,
        // 获取提现限制配置:接收(3,1783) CMD_MB_WithdrawLoadLimitConfigResult
        [commands.SUB_MB_GetWithdrawCashLimit_RESULT]: [
            { t: "int64_t", k: "limitMin" },
            { t: "int64_t", k: "limitMax" },
            {
                t: [
                    { t: "int64_t", k: "totalPayScore" },
                    { t: "uint32_t", k: "dailyCount" },
                    { t: "int64_t", k: "dailyFreeScore" },
                    { t: "int64_t", k: "scoreLimit" },
                ], k: "growLevellimit"
            },
            { t: "uint8_t", k: "requireBindMobile" },
        ],
        // 获取用户当前可否提现:发送(3,1220) CMD_MB_GetWithdrawStatus
        [commands.SUB_MB_GetWithdrawStatus]: [
            { t: "uint32_t", k: "userID" },
            { t: "char16_t", k: "dynamicPass", s: lengths.LEN_PASSWORD },
        ],
        // 获取用户当前可否提现:接收(3,1221) CMD_MB_GetWithdrawStatusResult
        [commands.SUB_MB_GetWithdrawStatus_RESULT]: [
            { t: "int64_t", k: "currentBetScore" },
            { t: "int64_t", k: "requireBetScore" },
            { t: "int64_t", k: "submitScore" },
            { t: "int64_t", k: "totalPayCash" },
            { t: "int64_t", k: "totalWithdrawCash" },
        ],
        // 获取最新一条提现记录:发送(3,1228) CMD_MB_Common_Query
        [commands.SUB_MB_GetLastWithdrawRecord]: commonStructors.CMD_MB_Common_Query,
        // 获取最新一条提现记录:接收(3,1229) tagWithdrawRecord
        [commands.SUB_MB_GetLastWithdrawRecord_RESULT]: commonStructors.tagWithdrawRecord,
        // 获取用户状态信息:发送(3,1580) CMD_MB_Common_Query
        [commands.SUB_MB_GetPayRebateInfo]: commonStructors.CMD_MB_Common_Query,
        // 获取用户状态信息:接收(3,1581) CMD_MB_GetPayRebateInfoResult
        [commands.SUB_MB_GetPayRebateInfo_RESULT]: [
            { t: "uint16_t", k: "count" },
            { t: "int64_t", k: "rebateScores", s: lengths.MAX_PAY_REBATE_DAYS },
        ],
        // 领取返利奖励:发送(3,1582) CMD_MB_GetPayRebateReward
        [commands.SUB_MB_GetPayRebateReward]: [
            { t: "uint32_t", k: "userID" },
            { t: "char16_t", k: "dynamicPass", s: lengths.LEN_PASSWORD },
            { t: "char16_t", k: "ip", s: lengths.LEN_IP },
        ],
        // 领取返利奖励:接收(3,1583) CMD_MB_GetPayRebateRewardResult
        [commands.SUB_MB_GetPayRebateReward_RESULT]: [
            { t: "uint32_t", k: "errorCode" },
            { t: "int64_t", k: "rebateScore" },
        ],
        // 加载弹窗参数配置:发送(3,2120) CMD_MB_Common_Query
        [commands.SUB_MB_PopWinPolicyLoadConfig]: commonStructors.CMD_MB_Common_Query,
        // 加载弹窗参数配置:接收(3,2121) CMD_MB_PopWinPolicyLoadConfigResult
        [commands.SUB_MB_PopWinPolicyLoadConfig_RESULT]: [
            { t: "int64_t", k: "popWinPolicyBaseScore" },
            { t: "int64_t", k: "popWinPolicyHistoryPayScore" },
            { t: "float", k: "fPopWinPolicyHistoryPayMultiple" },
            { t: "uint32_t", k: "popWinPolicyBigWinMultile" },
        ],
        // 获取弹窗用户状态:发送(3,2122) CMD_MB_Common_Query
        [commands.SUB_MB_PopWinPolicyGetUserStatus]: commonStructors.CMD_MB_Common_Query,
        // 获取弹窗用户状态:接收(3,2123) CMD_MB_PopWinPolicyGetUserStatusResult
        [commands.SUB_MB_PopWinPolicyGetUserStatus_RESULT]: [
            { t: "int64_t", k: "totalWithdrawScore" },
            { t: "int64_t", k: "totalPayScore" },
            { t: "int64_t", k: "requireBetScore" },
        ],
        // 查询分享配置:发送(3,1270) CMD_MB_Common_Query
        [commands.SUB_MB_GetShareConfig]: commonStructors.CMD_MB_Common_Query,
        // 查询分享配置:接收(3,1271) CMD_MB_GetShareConfigResult
        [commands.SUB_MB_GetShareConfig_RESULT]: [
            { t: "uint8_t", k: "shareEnable" },
            { t: "int64_t", k: "shareScore" },
            { t: "uint16_t", k: "shareUserLimits" },
            { t: "uint16_t", k: "shareMachineLimits" },
            { t: "char16_t", k: "shareUrl", s: 256 },
            { t: "char16_t", k: "shareTips", s: 256 },
        ],
        // 更新分享入口点击次数:发送(3,1272) CMD_MB_UpdateShareCount
        [commands.SUB_MB_UpdateShareCount]: [
            { t: "uint32_t", k: "userID" },
            { t: "char16_t", k: "machineID", s: lengths.LEN_MACHINE_ID },
        ],
        // 更新分享入口点击次数:接收(3,1273) CMD_MB_UpdateShareCountResult
        [commands.SUB_MB_UpdateShareCount_RESULT]: [
            { t: "uint32_t", k: "errorCode" },
            { t: "uint16_t", k: "restLimits" },
        ],
        // 领取分享奖励:发送(3,1274) CMD_MB_GetShareReward
        [commands.SUB_MB_GetShareReward]: [
            { t: "uint32_t", k: "userID" },
            { t: "char16_t", k: "dynamicPass", s: lengths.LEN_PASSWORD },
            { t: "char16_t", k: "machineID", s: lengths.LEN_MACHINE_ID },
            { t: "char16_t", k: "clientIP", s: lengths.LEN_IP },
            { t: "uint8_t", k: "shareType" },
        ],
        // 领取分享奖励:接收(3,1275) CMD_MB_GetShareRewardResult
        [commands.SUB_MB_GetShareReward_RESULT]: [
            { t: "uint32_t", k: "errorCode" },
            { t: "int64_t", k: "shareScore" },
            { t: "uint16_t", k: "restLimits" },
        ],
        // 查询可分享剩余次数:发送(3,1276) CMD_MB_GetShareRestLimits
        [commands.SUB_MB_GetShareRestLimits]: [
            { t: "uint32_t", k: "userID" },
            { t: "char16_t", k: "machineID", s: lengths.LEN_MACHINE_ID },
        ],
        // 查询可分享剩余次数:接收(3,1277) CMD_MB_GetShareRestLimitsResult
        [commands.SUB_MB_GetShareRestLimits_RESULT]: [
            { t: "uint32_t", k: "errorCode" },
            { t: "uint16_t", k: "restLimits" },
        ],
        // 从手机缓存中随机15个出来:发送(3,1278) CMD_MB_Common_Query
        [commands.SUB_MB_GetMobiles]: commonStructors.CMD_MB_Common_Query,
        // 从手机缓存中随机15个出来:接收(3,1279) CMD_MB_GetMobilesResult
        [commands.SUB_MB_GetMobiles_RESULT]: [
            { t: "utf8", k: "mobiles", s: [45, lengths.LEN_INTERNATIONAL_MOBILE] },
        ],
        // 获取分享转盘全部格子物品:发送(3,1700) CMD_MB_Common_Query
        [commands.SUB_MB_ShareLotteryGetItems]: commonStructors.CMD_MB_Common_Query,
        // 获取分享转盘全部格子物品:接收(3,1701) CMD_MB_ShareLotteryGetItemsResult
        [commands.SUB_MB_ShareLotteryGetItems_RESULT]: [
            { t: "uint16_t", k: "count" },
            {
                t: [
                    { t: "uint32_t", k: "itemID" },
                    { t: "uint8_t", k: "itemIndex" },
                    { t: "uint8_t", k: "itemType" },
                    { t: "char16_t", k: "itemName", s: lengths.LEN_NICKNAME },
                ], k: "items", s: 0 
            },
        ],
        // 获取分享转盘用户状态:发送(3,1702) CMD_MB_ShareLotteryGetUserStatus
        [commands.SUB_MB_ShareLotteryGetUserStatus]: [
            { t: "uint32_t", k: "userID" },
            { t: "uint32_t", k: "pageSize" },
            { t: "uint32_t", k: "pageIndex" },
        ],
        // 获取分享转盘用户状态:接收(3,1703) CMD_MB_ShareLotteryGetUserStatusResult
        [commands.SUB_MB_ShareLotteryGetUserStatus_RESULT]: [
            { t: "int64_t", k: "currentScore" },
            { t: "int64_t", k: "requireScore" },
            { t: "uint32_t", k: "restCount" },
            { t: "uint32_t", k: "stageID" },
            { t: "uint32_t", k: "withdrawCount" },
            { t: "int64_t", k: "scoreTimeExpired" },
            {
                t: [
                    { t: "uint32_t", k: "pageSize" },
                    { t: "uint32_t", k: "pageIndex" },
                    { t: "uint32_t", k: "pageCount" },
                    { t: "uint32_t", k: "recordCount" },
                    { t: "uint16_t", k: "count" },
                    {
                        t: [
                            { t: "uint16_t", k: "faceID" },
                            { t: "int64_t", k: "score" },
                            { t: "time_t", k: "rewardDate" },
                            { t: "char16_t", k: "nickName", s: lengths.LEN_NICKNAME },
                        ], k: "items", s: 0 
                    },
                ], k: "history"
            },
        ],
        // 获取分享提现历史记录开始:发送(3,1704) CMD_MB_ShareLotteryGetWithdrawHistory
        [commands.SUB_MB_ShareLotteryGetWithdrawHistory]: [
            { t: "uint32_t", k: "userID" },
            { t: "uint32_t", k: "pageSize" },
            { t: "uint32_t", k: "pageIndex" },
        ],
        // 获取分享提现历史记录开始:接收(3,1705) CMD_MB_ShareLotteryGetWithdrawHistoryResult
        [commands.SUB_MB_ShareLotteryGetWithdrawHistory_RESULT]: [
            { t: "uint32_t", k: "pageSize" },
            { t: "uint32_t", k: "pageIndex" },
            { t: "uint32_t", k: "pageCount" },
            { t: "uint32_t", k: "recordCount" },
            { t: "uint16_t", k: "count" },
            {
                t: [
                    { t: "uint16_t", k: "faceID" },
                    { t: "int64_t", k: "score" },
                    { t: "time_t", k: "rewardDate" },
                    { t: "char16_t", k: "nickName", s: lengths.LEN_NICKNAME },
                ], k: "items", s: 0 
            },
        ],
        // 获取分享提现邀请记录:发送(3,1706) CMD_MB_ShareLotteryGetInviteRecords
        [commands.SUB_MB_ShareLotteryGetInviteRecords]: [
            { t: "uint32_t", k: "userID" },
            { t: "uint32_t", k: "pageSize" },
            { t: "uint32_t", k: "pageIndex" },
        ],
        // 获取分享提现邀请记录:接收(3,1707) CMD_MB_ShareLotteryGetInviteRecordsResult
        [commands.SUB_MB_ShareLotteryGetInviteRecords_RESULT]: [
            { t: "uint32_t", k: "pageSize" },
            { t: "uint32_t", k: "pageIndex" },
            { t: "uint32_t", k: "pageCount" },
            { t: "uint32_t", k: "recordCount" },
            { t: "uint32_t", k: "bindCount" },
            { t: "uint32_t", k: "count" },
            {
                t: [
                    { t: "uint16_t", k: "faceID" },
                    { t: "uint8_t", k: "isBindMobile" },
                    { t: "uint8_t", k: "isBetScore" },
                    { t: "time_t", k: "registeTime" },
                    { t: "char16_t", k: "nickName", s: lengths.LEN_NICKNAME },
                    { t: "uint8_t", k: "growLevel" },
                    { t: "int64_t", k: "spreadScore" },
                ], k: "items", s: 0 
            },
        ],
        // 执行分享转盘抽奖:发送(3,1708) CMD_MB_ShareLotteryExecuteSbin
        [commands.SUB_MB_ShareLotteryExecuteSbin]: [
            { t: "uint32_t", k: "userID" },
            { t: "char16_t", k: "dynamicPass", s: lengths.LEN_PASSWORD },
            { t: "char16_t", k: "ip", s: lengths.LEN_IP },
        ],
        // 执行分享转盘抽奖:接收(3,1709) CMD_MB_ShareLotteryExecuteSbinResult
        [commands.SUB_MB_ShareLotteryExecuteSbin_RESULT]: [
            { t: "uint32_t", k: "errorCode" },
            { t: "uint8_t", k: "itemIndex" },
            { t: "uint8_t", k: "itemType" },
            { t: "int64_t", k: "reward" },
            { t: "time_t", k: "scoreExpiredTime" },
        ],
        // 提取分享提现奖励:发送(3,1710) CMD_MB_ShareLotteryTakeReward
        [commands.SUB_MB_ShareLotteryTakeReward]: [
            { t: "uint32_t", k: "userID" },
            { t: "char16_t", k: "dynamicPass", s: lengths.LEN_PASSWORD },
            { t: "char16_t", k: "ip", s: lengths.LEN_IP },
        ],
        // 提取分享提现奖励:接收(3,1711) CMD_MB_ShareLotteryTakeRewardResult
        [commands.SUB_MB_ShareLotteryTakeReward_RESULT]: [
            { t: "uint32_t", k: "errorCode" },
            { t: "int64_t", k: "score" },
            { t: "int64_t", k: "requireScore" },
        ],
        // 获取分享提现档位信息:发送(3,1718) CMD_MB_Common_Query
        [commands.SUB_MB_ShareLotteryGetWithdrawStage]: commonStructors.CMD_MB_Common_Query,
        // 获取分享提现档位信息:接收(3,1719) CMD_MB_ShareLotteryGetWithdrawStageResult
        [commands.SUB_MB_ShareLotteryGetWithdrawStage_RESULT]: [
            { t: "uint16_t", k: "count" },
            {
                t: [
                    { t: "uint32_t", k: "stageID" },
                    { t: "int64_t", k: "stageScore" },
                    { t: "uint8_t", k: "newUserEnable" },
                ], k: "items", s: lengths.SHARE_LOTTERY_STAGE_COUNT 
            },
        ],
        // 选择分享提现档位:发送(3,1720) CMD_MB_ShareLotterySetWithdrawStage
        [commands.SUB_MB_ShareLotterySetWithdrawStage]: [
            { t: "uint32_t", k: "userID" },
            { t: "uint32_t", k: "stageID" },
            { t: "int64_t", k: "stageScore" },
            { t: "char16_t", k: "dynamicPass", s: lengths.LEN_PASSWORD },
            { t: "char16_t", k: "ip", s: lengths.LEN_IP },
        ],
        // 选择分享提现档位:接收(3,1721) CMD_MB_ShareLotterySetWithdrawStageResult
        [commands.SUB_MB_ShareLotterySetWithdrawStage_RESULT]: [
            { t: "uint32_t", k: "errorCode" },
            { t: "uint32_t", k: "stageID" },
            { t: "int64_t", k: "stageScore" },
        ],
        // 执行分享转盘连续抽奖:发送(3,1722) CMD_MB_ShareLotteryExecuteSbinContinuous
        [commands.SUB_MB_ShareLotteryExecuteSbinContinuous]: [
            { t: "uint32_t", k: "userID" },
            { t: "uint16_t", k: "count" },
            { t: "char16_t", k: "dynamicPass", s: lengths.LEN_PASSWORD },
            { t: "char16_t", k: "ip", s: lengths.LEN_IP },
        ],
        // 执行分享转盘连续抽奖:接收(3,1723) CMD_MB_ShareLotteryExecuteSbinContinuousResult
        [commands.SUB_MB_ShareLotteryExecuteSbinContinuous_RESULT]: [
            { t: "uint32_t", k: "errorCode" },
            { t: "uint16_t", k: "restCount" },
            { t: "int64_t", k: "totalCash" },
            { t: "int64_t", k: "totalScore" },
            { t: "uint16_t", k: "totalFreeCount" },
            { t: "time_t", k: "scoreExpiredTime" },
            { t: "uint16_t", k: "count" },
            {
                t: [
                    { t: "uint8_t", k: "itemIndex" },
                    { t: "uint8_t", k: "itemType" },
                    { t: "int64_t", k: "reward" },
                ], k: "items", s: 0 
            },
        ],
        // 获取分享升级返利用户状态:发送(3,1712) CMD_MB_Common_Query
        [commands.SUB_MB_ShareLotteryGetSpreadRebateStatus]: commonStructors.CMD_MB_Common_Query,
        // 获取分享升级返利用户状态:接收(3,1713) CMD_MB_ShareLotteryGetSpreadRebateStatusResult
        [commands.SUB_MB_ShareLotteryGetSpreadRebateStatus_RESULT]: [
            { t: "int64_t", k: "currentSpreadScore" },
            { t: "int64_t", k: "maxSpreadScore" },
            { t: "uint32_t", k: "payUserCount" },
        ],
        // 提取分享升级返利奖励:发送(3,1714) CMD_MB_ShareLotteryTakeSpreadRebate
        [commands.SUB_MB_ShareLotteryTakeSpreadRebate]: [
            { t: "uint32_t", k: "userID" },
            { t: "char16_t", k: "dynamicPass", s: lengths.LEN_PASSWORD },
            { t: "char16_t", k: "ip", s: lengths.LEN_IP },
        ],
        // 提取分享升级返利奖励:接收(3,1715) CMD_MB_ShareLotteryTakeSpreadRebateResult
        [commands.SUB_MB_ShareLotteryTakeSpreadRebate_RESULT]: [
            { t: "int64_t", k: "score" },
        ],
        // 获取分享升级返利配置:发送(3,1716) CMD_MB_Common_Query
        [commands.SUB_MB_ShareLotteryGetSpreadRebateConfig]: commonStructors.CMD_MB_Common_Query,
        // 获取分享升级返利配置:接收(3,1717) CMD_MB_ShareLotteryGetSpreadRebateConfigResult
        [commands.SUB_MB_ShareLotteryGetSpreadRebateConfig_RESULT]: [
            { t: "int64_t", k: "score", s: lengths.MAX_GROW_COUNT },
        ],
        // 获取【分享好友充值返利】配置:发送(3,1750) CMD_MB_Common_Query
        [commands.SUB_MB_SharePayRebateLoadConfig]: commonStructors.CMD_MB_Common_Query,
        // 获取【分享好友充值返利】配置:接收(3,1751) CMD_MB_SharePayRebateLoadConfigResult
        [commands.SUB_MB_SharePayRebateLoadConfig_RESULT]: [
            { t: "uint32_t", k: "value", s: 2 },
        ],
        // 获取【分享好友充值返利】状态:发送(3,1752) CMD_MB_Common_Query
        [commands.SUB_MB_SharePayRebateGetStatus]: commonStructors.CMD_MB_Common_Query,
        // 获取【分享好友充值返利】状态:接收(3,1753) CMD_MB_SharePayRebateGetStatusResult
        [commands.SUB_MB_SharePayRebateGetStatus_RESULT]: [
            { t: "int64_t", k: "score" },
            { t: "int64_t", k: "totalScore" },
            { t: "uint32_t", k: "totalFriendsCount" },
        ],
        // 获取【分享好友充值返利】记录:发送(3,1754) CMD_MB_SharePayRebateGetRecord
        [commands.SUB_MB_SharePayRebateGetRecord]: [
            { t: "uint32_t", k: "userID" },
            { t: "uint32_t", k: "pageIndex" },
            { t: "uint32_t", k: "pageSize" },
        ],
        // 获取【分享好友充值返利】记录:接收(3,1755) CMD_MB_SharePayRebateGetRecordResult
        [commands.SUB_MB_SharePayRebateGetRecord_RESULT]: [
            { t: "uint32_t", k: "pageIndex" },
            { t: "uint32_t", k: "pageSize" },
            { t: "uint32_t", k: "totalRecordCount" },
            { t: "uint16_t", k: "count" },
            {
                t: [
                    { t: "uint32_t", k: "gameID" },
                    { t: "int64_t", k: "payCash" },
                    { t: "int64_t", k: "rebateScore" },
                    { t: "uint8_t", k: "span" },
                    { t: "char16_t", k: "nickName", s: lengths.LEN_NICKNAME },
                ], k: "items", s: 50 
            },
        ],
        // 提取【分享好友充值返利】奖励:发送(3,1756) CMD_MB_SharePayRebateTakeReward
        [commands.SUB_MB_SharePayRebateTakeReward]: [
            { t: "uint32_t", k: "userID" },
            { t: "int64_t", k: "score" },
            { t: "char16_t", k: "dynamicPass", s: lengths.LEN_PASSWORD },
            { t: "char16_t", k: "clientIP", s: lengths.LEN_IP },
            { t: "char16_t", k: "machineCode", s: lengths.LEN_MACHINE_ID },
        ],
        // 提取【分享好友充值返利】奖励:接收(3,1757) CMD_MB_SharePayRebateTakeRewardResult
        [commands.SUB_MB_SharePayRebateTakeReward_RESULT]: [
            { t: "uint32_t", k: "errorCode" },
            { t: "int64_t", k: "score" },
        ],
        // 获取分享好友宝箱配置:发送(3,1760) CMD_MB_Common_Query
        [commands.SUB_MB_ShareTreasureChestLoadConfig]: commonStructors.CMD_MB_Common_Query,
        // 获取分享好友宝箱配置:接收(3,1761) CMD_MB_ShareTreasureChestLoadConfigResult
        [commands.SUB_MB_ShareTreasureChestLoadConfig_RESULT]: [
            {
                t: [
                    { t: "uint32_t", k: "friendsRequire" },
                    { t: "int64_t", k: "score" },
                ], k: "items", s: lengths.MAX_CHEST_COUNT 
            },
        ],
        // 获取分享好友宝箱状态:发送(3,1762) CMD_MB_Common_Query
        [commands.SUB_MB_ShareTreasureChestGetStatus]: commonStructors.CMD_MB_Common_Query,
        // 获取分享好友宝箱状态:接收(3,1763) CMD_MB_ShareTreasureChestGetStatusResult
        [commands.SUB_MB_ShareTreasureChestGetStatus_RESULT]: [
            { t: "int64_t", k: "status" },
            { t: "int64_t", k: "score" },
            { t: "int64_t", k: "totalScore" },
            { t: "uint32_t", k: "currentFriendCount" },
            { t: "uint32_t", k: "totalFriendCount" },
        ],
        // 提取分享好友宝箱奖励:发送(3,1764) CMD_MB_ShareTreasureChestTakeReward
        [commands.SUB_MB_ShareTreasureChestTakeReward]: [
            { t: "uint32_t", k: "userID" },
            { t: "uint8_t", k: "chestID" },
            { t: "int64_t", k: "chestScore" },
            { t: "char16_t", k: "dynamicPass", s: lengths.LEN_PASSWORD },
            { t: "char16_t", k: "clientIP", s: lengths.LEN_IP },
            { t: "char16_t", k: "machineCode", s: lengths.LEN_MACHINE_ID },
        ],
        // 提取分享好友宝箱奖励:接收(3,1765) CMD_MB_ShareTreasureChestTakeRewardResult
        [commands.SUB_MB_ShareTreasureChestTakeReward_RESULT]: [
            { t: "uint32_t", k: "errorCode" },
            { t: "int64_t", k: "takeScore" },
            { t: "int64_t", k: "status" },
            { t: "int64_t", k: "score" },
            { t: "int64_t", k: "totalScore" },
        ],
        // 获取活动配置:发送(3,1300) CMD_MB_GetActivityConfig
        [commands.SUB_MB_GetActivityConfig]: [
            { t: "uint32_t", k: "userID" },
            { t: "uint16_t", k: "count" },
        ],
        // 获取活动配置:接收(3,1301) CMD_MB_GetActivityConfigResult
        [commands.SUB_MB_GetActivityConfig_RESULT]: [
            { t: "uint32_t", k: "errorCode" },
            { t: "uint16_t", k: "count" },
            {
                t: [
                    { t: "char16_t", k: "title", s: 64 },
                    { t: "char16_t", k: "imgUrlMain", s: 128 },
                    { t: "char16_t", k: "imgUrlContent", s: 128 },
                ], k: "items", s: 0 
            },
        ],
        // 系统提示信息:发送(3,1290) CMD_MB_Common_Query
        [commands.SUB_MB_GetSystemNotice]: commonStructors.CMD_MB_Common_Query,
        // 系统提示信息:接收(3,1291) CMD_MB_GetSystemNoticeResult
        [commands.SUB_MB_GetSystemNotice_RESULT]: [
            { t: "uint32_t", k: "errorCode" },
            { t: "uint16_t", k: "count" },
            {
                t: [
                    { t: "char16_t", k: "title", s: 64 },
                    { t: "uint32_t", k: "keepSeconds" },
                    { t: "char16_t", k: "content", s: 4000 },
                ], k: "items", s: 0 
            },
        ],
        // 加载配置:发送(3,2180) CMD_MB_Common_Query
        [commands.SUB_MB_AlmzLoadConfig]: commonStructors.CMD_MB_Common_Query,
        // 加载配置:接收(3,2181) CMD_MB_AlmzLoadConfigResult
        [commands.SUB_MB_AlmzLoadConfig_RESULT]: [
            { t: "uint16_t", k: "items", s: lengths.MAX_GROW_COUNT },
        ],
        // 获取用户状态:发送(3,2182) CMD_MB_Common_Query
        [commands.SUB_MB_AlmzGetUserStatus]: commonStructors.CMD_MB_Common_Query,
        // 获取用户状态:接收(3,2183) CMD_MB_AlmzGetUserStatusResult
        [commands.SUB_MB_AlmzGetUserStatus_RESULT]: [
            {
                t: [
                    { t: "uint8_t", k: "status" },
                    { t: "int64_t", k: "lossScore" },
                    { t: "int64_t", k: "almzScore" },
                    { t: "uint8_t", k: "growLevel" },
                ], k: "yesterday"
            },
            {
                t: [
                    { t: "uint8_t", k: "status" },
                    { t: "int64_t", k: "lossScore" },
                    { t: "int64_t", k: "almzScore" },
                    { t: "uint8_t", k: "growLevel" },
                ], k: "today"
            },
        ],
        // 领取奖励:发送(3,2184) CMD_MB_Common_TakeScore
        [commands.SUB_MB_AlmzTakeReward]: commonStructors.CMD_MB_Common_TakeScore,
        // 领取奖励:接收(3,2185) CMD_MB_AlmzTakeRewardResult
        [commands.SUB_MB_AlmzTakeReward_RESULT]: [
            { t: "uint32_t", k: "errorCode" },
            { t: "int64_t", k: "score" },
        ],
        // 加载配置:发送(3,2200) CMD_MB_Common_Query
        [commands.SUB_MB_ExperienceScoreLoadConfig]: commonStructors.CMD_MB_Common_Query,
        // 加载配置:接收(3,2201) CMD_MB_ExperienceScoreLoadConfigResult
        [commands.SUB_MB_ExperienceScoreLoadConfig_RESULT]: [
            { t: "int64_t", k: "experienceScore" },
            { t: "int32_t", k: "experienceCount" },
            { t: "int64_t", k: "experienceLimitMin" },
        ],
        // 当前用户体验金状态:发送(3,2202) CMD_MB_Common_Query
        [commands.SUB_MB_ExperienceScoreGetUserStatus]: commonStructors.CMD_MB_Common_Query,
        // 当前用户体验金状态:接收(3,2203) CMD_MB_ExperienceScoreGetUserStatusResult
        [commands.SUB_MB_ExperienceScoreGetUserStatus_RESULT]: [
            { t: "int32_t", k: "experienceRestCount" },
        ],
        // 提取体验金奖励:发送(3,2204) CMD_MB_ExperienceScoreTakeReward
        [commands.SUB_MB_ExperienceScoreTakeReward]: [
            { t: "uint32_t", k: "userID" },
            { t: "char16_t", k: "dynamicPass", s: lengths.LEN_PASSWORD },
        ],
        // 提取体验金奖励:接收(3,2205) CMD_MB_ExperienceScoreTakeRewardResult
        [commands.SUB_MB_ExperienceScoreTakeReward_RESULT]: [
            { t: "uint32_t", k: "errorCode" },
            { t: "int32_t", k: "experienceRestCount" },
            { t: "int64_t", k: "score" },
            { t: "uint32_t", k: "userID" },
        ],
        // 获取平台客服URL:发送(3,1250) CMD_MB_Common_Query
        [commands.SUB_MB_GetCustomService]: commonStructors.CMD_MB_Common_Query,
        // 获取平台客服URL:接收(3,1251) CMD_MB_GetCustomServiceResult
        [commands.SUB_MB_GetCustomService_RESULT]: [
            { t: "uint32_t", k: "errorCode" },
            { t: "uint16_t", k: "count" },
            {
                t: [
                    { t: "uint8_t", k: "type" },
                    { t: "char16_t", k: "url", s: lengths.LEN_FACEURL },
                ], k: "items", s: 0 
            },
        ],
    },
    [commands.MDM_GP_CHAT]: {
        // 获取邮件列表:发送(51,100) CMD_C_GetMailList
        [commands.SUB_MAIL_GetMailList]: [
            { t: "uint32_t", k: "userID" },
            { t: "uint32_t", k: "pageIndex" },
            { t: "uint8_t", k: "pageSize" },
            { t: "uint8_t", k: "mailType" },
        ],
        // 获取邮件列表:接收(51,101) CMD_S_GetMailList
        [commands.SUB_MAIL_GetMailList_RESULT]: [
            { t: "uint8_t", k: "pageSize" },
            { t: "uint32_t", k: "pageIndex" },
            { t: "uint32_t", k: "recordCount" },
            { t: "uint32_t", k: "pageCount" },
            { t: "uint8_t", k: "itemCount" },
            {
                t: [
                    { t: "uint32_t", k: "mailID" },
                    { t: "uint32_t", k: "fromUserId" },
                    { t: "time_t", k: "timestamp" },
                    { t: "uint8_t", k: "type" },
                    { t: "uint8_t", k: "status" },
                    { t: "uint8_t", k: "hasAttachment" },
                    { t: "utf8", k: "title", s: lengths.LEN_MAIL_TITLE },
                ], k: "items", s: 0 
            },
        ],
        // 获取邮件明细:发送(51,102) CMD_C_MailDetails
        [commands.SUB_MAIL_Detail]: [
            { t: "uint32_t", k: "userID" },
            { t: "uint32_t", k: "mailID" },
        ],
        // 获取邮件明细:接收(51,103) CMD_S_MailDetails
        [commands.SUB_MAIL_Detail_RESULT]: [
            { t: "uint32_t", k: "errorCode" },
            { t: "uint32_t", k: "mailID" },
            { t: "uint8_t", k: "bMailType" },
            { t: "uint32_t", k: "fromUserID" },
            { t: "time_t", k: "timestamp" },
            {
                t: [
                    { t: "uint8_t", k: "type" },
                    { t: "int64_t", k: "value" },
                    { t: "uint8_t", k: "status" },
                ], k: "attachments", s: lengths.MAX_MAIL_ATTACHMENT_COUNT 
            },
            { t: "utf8", k: "title", s: lengths.LEN_MAIL_TITLE },
            { t: "utf8", k: "content", s: lengths.LEN_MAIL_CONTENT },
        ],
        // 删除邮件:发送(51,104) CMD_C_DelMail
        [commands.SUB_MAIL_Delete]: [
            { t: "uint32_t", k: "userID" },
            { t: "uint32_t", k: "mailID" },
        ],
        // 删除邮件:接收(51,105) CMD_S_DelMail
        [commands.SUB_MAIL_Delete_RESULT]: [
            { t: "uint32_t", k: "errorCode" },
            { t: "uint32_t", k: "mailID" },
        ],
        // 获取新邮件数量:发送(51,112) CMD_C_GetNewMailCount
        [commands.SUB_MAIL_GetNewMailCount]: [
            { t: "uint32_t", k: "userID" },
        ],
        // 获取新邮件数量:接收(51,113) CMD_S_GetNewMailCount
        [commands.SUB_MAIL_GetNewMailCount_RESULT]: [
            { t: "uint8_t", k: "count" },
        ],
    },
};
