 --[[
    auto generation at 2024/3/22 15:50:40  
]]--

-- 货币类型
local CurrencyType = {
    GoldCoin = 1,   -- 金币(默认值)
    TCCoin = 2      -- TC币
}

-- 设备类型
local DeviceType = {
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

-- 协议号申明
local commands = {

    -- ========== 主命令 ========== 
    MDM_MB_LOGON = 8,                                       -- 登陆命令
    -- ---------- 子命令 ---------- 
    -- ---------- 登陆相关 ---------- 
    SUB_MB_LOGON_ACCOUNTS = 2,                              -- 账号登陆(发送)
    SUB_MB_REGISTER_ACCOUNTS = 3,                           -- 注册账号(发送)
    SUB_MB_LOGON_OTHERPLATFORM = 4,                         -- 三方登陆(发送)
    SUB_MB_LOGON_VISITOR = 5,                               -- 游客登陆(发送)
    SUB_MB_LOGON_MOBILE_EX = 7,                             -- 手机登陆（新）(发送)
    SUB_MB_RELOGON = 10,                                    -- 断线重登(发送/接收)
    SUB_MB_LOGON_EXIT = 11,                                 -- 登出(发送)
    SUB_MB_LOGON_EXIT_RESULT = 12,                          -- 登出(接收)
    -- ---------- 系统使用 ---------- 
    SUB_GP_SERVER_UTC_TIMESTAMP = 25,                       -- 获取服务器当前时间戳(发送)
    SUB_GP_SERVER_UTC_TIMESTAMP_RESULT = 26,                -- 获取服务器当前时间戳(接收)
    -- ---------- 登陆相关 ---------- 
    SUB_MB_LOGON_SUCCESS = 100,                             -- 账号登陆(接收)
    SUB_MB_LOGON_FAILURE = 101,                             -- 登陆失败(接收)
    SUB_MB_REGISTER_FAILURE = 102,                          -- 注册失败(接收)
    SUB_MB_REGISTER_SUCCESS = 103,                          -- 注册成功(接收)
    -- ---------- 系统使用 ---------- 
    SUB_MB_GetScoreInfo = 110,                              -- 获取当前积分(发送/接收)
    -- ---------- 登陆相关 ---------- 
    SUB_MB_SendSMSLogonCode = 120,                          -- 发送登陆短信(发送)
    SUB_MB_SendSMSLogonCodeResult = 121,                    -- 发送登陆短信(接收)
    SUB_MB_SendSMSResetPassword = 122,                      -- 发送重置密码短信(发送)
    SUB_MB_SendSMSResetPasswordResult = 123,                -- 发送重置密码短信(接收)
    SUB_MB_SendSMSRegisteUser = 124,                        -- 发送账号注册短信(发送)
    SUB_MB_SendSMSRegisteUserResult = 125,                  -- 发送账号注册短信(接收)
    SUB_MB_RESET_LOGON_PASSWORD = 130,                      -- 重置密码(发送)
    SUB_MB_RESET_LOGON_PASSWORD_RESULT = 131,               -- 重置密码(接收)
    SUB_MB_LOGON_ACCOUNTS_V6 = 602,                         -- IPv6-账号登陆(发送)
    SUB_MB_REGISTER_ACCOUNTS_V6 = 603,                      -- IPv6-注册账号(发送)
    SUB_MB_LOGON_OTHERPLATFORM_V6 = 604,                    -- IPv6-三方登陆(发送)
    SUB_MB_LOGON_VISITOR_V6 = 605,                          -- IPv6-游客登陆(发送)
    SUB_MB_LOGON_MOBILE_EX_V6 = 607,                        -- IPv6-手机登陆(发送)
    SUB_MB_RELOGON_V6 = 610,                                -- IPv6-断线重登(发送)

    -- ========== 主命令 ========== 
    MDM_MB_SERVER_LIST = 9,                                 -- 服务器列表
    -- ---------- 子命令 ---------- 
    -- ---------- 服务器列表 ---------- 
    SUB_MB_C_GET_SERVER_LIST = 500,                         -- 获取房间列表(发送)
    SUB_MB_S_SERVER_LIST = 501,                             -- 获取房间列表(接收)

    -- ========== 主命令 ========== 
    MDM_GP_USER_SERVICE = 3,                                -- 用户命令
    -- ---------- 子命令 ---------- 
    -- ---------- 其他 ---------- 
    SUB_GP_USER_FACE_INFO = 120,                            -- 修改人物头像(接收)
    SUB_GP_SYSTEM_FACE_INFO = 122,                          -- 修改人物头像(发送)
    -- ---------- 任务系统 ---------- 
    SUB_GP_TASK_LIST_EX = 230,                              -- 获取任务列表(发送)
    SUB_GP_TASK_LIST_EX_RESULT = 231,                       -- 获取任务列表(接收)
    SUB_GP_TaskRewardEx = 232,                              -- 领取任务奖励(发送)
    SUB_GP_TASK_REWARD_EX_RESULT = 233,                     -- 领取任务奖励(接收)
    -- ---------- 充值商城礼包 ---------- 
    SUB_MB_GetProductInfos = 1210,                          -- 获取商品列表(发送)
    SUB_MB_GetProductInfos_RESULT = 1211,                   -- 获取商品列表(接收)
    SUB_MB_GetProductTypeActiveState = 1212,                -- 查询某种礼包下商品的购买情况(发送)
    SUB_MB_GetProductTypeActiveState_RESULT = 1213,         -- 查询某种礼包下商品的购买情况(接收)
    SUB_MB_GetProductActiveState = 1216,                    -- 获取一次性商品购买情况(发送)
    SUB_MB_GetProductActiveState_RESULT = 1217,             -- 获取一次性商品购买情况(接收)
    -- ---------- 提现 ---------- 
    SUB_MB_GetWithdrawStatus = 1220,                        -- 获取用户当前可否提现(发送)
    SUB_MB_GetWithdrawStatus_RESULT = 1221,                 -- 获取用户当前可否提现(接收)
    SUB_MB_GetWithdrawConfig = 1222,                        -- 获取提现配置(发送)
    SUB_MB_GetWithdrawConfig_RESULT = 1223,                 -- 获取提现配置(接收)
    SUB_MB_GetWithdrawHistoryAccount = 1224,                -- 获取提现历史记录(发送)
    SUB_MB_GetWithdrawHistoryAccount_RESULT = 1225,         -- 获取提现历史记录(接收)
    SUB_MB_GetWithdrawRecord = 1226,                        -- 获取提现记录(发送)
    SUB_MB_GetWithdrawRecord_RESULT = 1227,                 -- 获取提现记录(接收)
    SUB_MB_GetLastWithdrawRecord = 1228,                    -- 获取最新一条提现记录(发送)
    SUB_MB_GetLastWithdrawRecord_RESULT = 1229,             -- 获取最新一条提现记录(接收)
    -- ---------- 任务系统 ---------- 
    SUB_MB_GetTaskActivenessConfig = 1230,                  -- 获取任务活跃度全局配置表(发送)
    SUB_MB_GetTaskActivenessConfig_RESULT = 1231,           -- 获取任务活跃度全局配置表(接收)
    SUB_MB_GetUserTaskActivenessStatus = 1232,              -- 获取当前可领奖励状态(发送)
    SUB_MB_GetUserTaskActivenessStatus_RESULT = 1233,       -- 获取当前可领奖励状态(接收)
    SUB_MB_ActivenessReward = 1234,                         -- 领取活跃度奖励(发送)
    SUB_MB_ActivenessReward_RESULT = 1235,                  -- 领取活跃度奖励(接收)
    -- ---------- 其他 ---------- 
    SUB_MB_GetRedDotStatus = 1240,                          -- 红点信息(发送)
    SUB_MB_GetRedDotStatus_RESULT = 1241,                   -- 红点信息(接收)
    SUB_MB_GetCustomService = 1250,                         -- 获取平台客服URL(发送)
    SUB_MB_GetCustomService_RESULT = 1251,                  -- 获取平台客服URL(接收)
    -- ---------- 假数据 ---------- 
    SUB_MB_GetOnlineUserInfo = 1260,                        -- 获取在线用户数量(发送)
    SUB_MB_GetOnlineUserInfo_RESULT = 1261,                 -- 获取在线用户数量(接收)
    SUB_MB_GetScrollMessage = 1262,                         -- 获取跑马灯滚动信息(发送)
    SUB_MB_GetScrollMessage_RESULT = 1263,                  -- 获取跑马灯滚动信息(接收)
    SUB_MB_GetH5TopScrollMessageInfo = 1264,                -- 获取H5顶部滚动信息(发送)
    SUB_MB_GetH5TopScrollMessageInfo_RESULT = 1265,         -- 获取H5顶部滚动信息(接收)
    -- ---------- 分享推荐好友 ---------- 
    SUB_MB_GetShareConfig = 1270,                           -- 查询分享配置(发送)
    SUB_MB_GetShareConfig_RESULT = 1271,                    -- 查询分享配置(接收)
    SUB_MB_UpdateShareCount = 1272,                         -- 更新分享入口点击次数(发送)
    SUB_MB_UpdateShareCount_RESULT = 1273,                  -- 更新分享入口点击次数(接收)
    SUB_MB_GetShareReward = 1274,                           -- 领取分享奖励(发送)
    SUB_MB_GetShareReward_RESULT = 1275,                    -- 领取分享奖励(接收)
    SUB_MB_GetShareRestLimits = 1276,                       -- 查询可分享剩余次数(发送)
    SUB_MB_GetShareRestLimits_RESULT = 1277,                -- 查询可分享剩余次数(接收)
    SUB_MB_GetMobiles = 1278,                               -- 从手机缓存中随机15个出来(发送)
    SUB_MB_GetMobiles_RESULT = 1279,                        -- 从手机缓存中随机15个出来(接收)
    -- ---------- 绑定手机 ---------- 
    SUB_MB_BindMobile = 1282,                               -- 绑定手机(发送)
    SUB_MB_BindMobile_RESULT = 1283,                        -- 绑定手机(接收)
    SUB_MB_GetBindMobileStatus = 1284,                      -- 获取手机绑定状态(发送)
    SUB_MB_GetBindMobileStatus_RESULT = 1285,               -- 获取手机绑定状态(接收)
    SUB_MB_TakeBindMobileReward = 1286,                     -- 领取手机绑定奖励(发送)
    SUB_MB_TakeBindMobileReward_RESULT = 1287,              -- 领取手机绑定奖励(接收)
    -- ---------- 系统提示信息 ---------- 
    SUB_MB_GetSystemNotice = 1290,                          -- 系统提示信息(发送)
    SUB_MB_GetSystemNotice_RESULT = 1291,                   -- 系统提示信息(接收)
    -- ---------- 系统活动宣传图 ---------- 
    SUB_MB_GetActivityConfig = 1300,                        -- 获取活动配置(发送)
    SUB_MB_GetActivityConfig_RESULT = 1301,                 -- 获取活动配置(接收)
    -- ---------- 银行操作 ---------- 
    SUB_MB_UserSaveScoreEx = 1310,                          -- 新协议(双货币)存入金币(发送)
    SUB_MB_UserSaveScoreEx_RESULT = 1311,                   -- 新协议(双货币)存入金币(接收)
    SUB_MB_UserTakeScoreEx = 1312,                          -- 新协议(双货币)取出金币(发送)
    SUB_MB_UserTakeScoreEx_RESULT = 1313,                   -- 新协议(双货币)取出金币(接收)
    -- ---------- 充值商城礼包 ---------- 
    SUB_MB_GetLastPayInfo = 1322,                           -- 查询最后一次充值订单信息(发送)
    SUB_MB_GetLastPayInfo_RESULT = 1323,                    -- 查询最后一次充值订单信息(接收)
    -- ---------- 成长礼包 ---------- 
    SUB_MB_GetGrowUserStatus = 1502,                        -- 获取用户成长等级当前状态(发送)
    SUB_MB_GetGrowUserStatus_RESULT = 1503,                 -- 获取用户成长等级当前状态(接收)
    SUB_MB_GetGrowGiftStatus = 1504,                        -- 获取用户成长礼包状态(发送)
    SUB_MB_GetGrowGiftStatus_RESULT = 1505,                 -- 获取用户成长礼包状态(接收)
    SUB_MB_TakeGrowGift = 1506,                             -- 领取用户成长礼包奖励(发送)
    SUB_MB_TakeGrowGift_RESULT = 1507,                      -- 领取用户成长礼包奖励(接收)
    SUB_MB_GetGrowLevelConfig2 = 1508,                      -- 获取成长等级配置(新版本)(发送)
    SUB_MB_GetGrowLevelConfig2_RESULT = 1509,               -- 获取成长等级配置(新版本)(接收)
    -- ---------- 大转盘(幸运转盘) ---------- 
    SUB_MB_GetLotteryCell = 1510,                           -- 获取转盘格子配置(发送)
    SUB_MB_GetLotteryCell_RESULT = 1511,                    -- 获取转盘格子配置(接收)
    SUB_MB_GetLotteryUserStatus = 1512,                     -- 获取用户当前的转盘状态(发送)
    SUB_MB_GetLotteryUserStatus_RESULT = 1513,              -- 获取用户当前的转盘状态(接收)
    SUB_MB_GetLotteryPlatformRecordNewest = 1514,           -- 获取平台中奖最新广播消息列表(发送)
    SUB_MB_GetLotteryPlatformRecordNewest_RESULT = 1515,    -- 获取平台中奖最新广播消息列表(接收)
    SUB_MB_GetLotteryPlatformRecordHistory = 1516,          -- 获取平台中奖历史广播消息列表(发送)
    SUB_MB_GetLotteryPlatformRecordHistory_RESULT = 1517,   -- 获取平台中奖历史广播消息列表(接收)
    SUB_MB_GetLotteryUserRecordHistory = 1518,              -- 获取用户自己中奖历史消息列表(发送)
    SUB_MB_GetLotteryUserRecordHistory_RESULT = 1519,       -- 获取用户自己中奖历史消息列表(接收)
    SUB_MB_LotterySbin = 1520,                              -- 转动转盘(发送)
    SUB_MB_LotterySbin_RESULT = 1521,                       -- 转动转盘(接收)
    SUB_MB_GetLotteryPresentConfig = 1522,                  -- 各种赠送方案配置(发送)
    SUB_MB_GetLotteryPresentConfig_RESULT = 1523,           -- 各种赠送方案配置(接收)
    -- ---------- 充值返利 ---------- 
    SUB_MB_GetPayRebateInfo = 1580,                         -- 获取用户状态信息(发送)
    SUB_MB_GetPayRebateInfo_RESULT = 1581,                  -- 获取用户状态信息(接收)
    SUB_MB_GetPayRebateReward = 1582,                       -- 领取返利奖励(发送)
    SUB_MB_GetPayRebateReward_RESULT = 1583,                -- 领取返利奖励(接收)
    -- ---------- 分享好友转盘 ---------- 
    SUB_MB_ShareLotteryGetItems = 1700,                     -- 获取分享转盘全部格子物品(发送)
    SUB_MB_ShareLotteryGetItems_RESULT = 1701,              -- 获取分享转盘全部格子物品(接收)
    SUB_MB_ShareLotteryGetUserStatus = 1702,                -- 获取分享转盘用户状态(发送)
    SUB_MB_ShareLotteryGetUserStatus_RESULT = 1703,         -- 获取分享转盘用户状态(接收)
    SUB_MB_ShareLotteryGetWithdrawHistory = 1704,           -- 获取分享提现历史记录开始(发送)
    SUB_MB_ShareLotteryGetWithdrawHistory_RESULT = 1705,    -- 获取分享提现历史记录开始(接收)
    SUB_MB_ShareLotteryGetInviteRecords = 1706,             -- 获取分享提现邀请记录(发送)
    SUB_MB_ShareLotteryGetInviteRecords_RESULT = 1707,      -- 获取分享提现邀请记录(接收)
    SUB_MB_ShareLotteryExecuteSbin = 1708,                  -- 执行分享转盘抽奖(发送)
    SUB_MB_ShareLotteryExecuteSbin_RESULT = 1709,           -- 执行分享转盘抽奖(接收)
    SUB_MB_ShareLotteryTakeReward = 1710,                   -- 提取分享提现奖励(发送)
    SUB_MB_ShareLotteryTakeReward_RESULT = 1711,            -- 提取分享提现奖励(接收)
    -- ---------- 分享好友升级返利 ---------- 
    SUB_MB_ShareLotteryGetSpreadRebateStatus = 1712,        -- 获取分享升级返利用户状态(发送)
    SUB_MB_ShareLotteryGetSpreadRebateStatus_RESULT = 1713, -- 获取分享升级返利用户状态(接收)
    SUB_MB_ShareLotteryTakeSpreadRebate = 1714,             -- 提取分享升级返利奖励(发送)
    SUB_MB_ShareLotteryTakeSpreadRebate_RESULT = 1715,      -- 提取分享升级返利奖励(接收)
    SUB_MB_ShareLotteryGetSpreadRebateConfig = 1716,        -- 获取分享升级返利配置(发送)
    SUB_MB_ShareLotteryGetSpreadRebateConfig_RESULT = 1717, -- 获取分享升级返利配置(接收)
    -- ---------- 分享好友转盘 ---------- 
    SUB_MB_ShareLotteryGetWithdrawStage = 1718,             -- 获取分享提现档位信息(发送)
    SUB_MB_ShareLotteryGetWithdrawStage_RESULT = 1719,      -- 获取分享提现档位信息(接收)
    SUB_MB_ShareLotterySetWithdrawStage = 1720,             -- 选择分享提现档位(发送)
    SUB_MB_ShareLotterySetWithdrawStage_RESULT = 1721,      -- 选择分享提现档位(接收)
    SUB_MB_ShareLotteryExecuteSbinContinuous = 1722,        -- 执行分享转盘连续抽奖(发送)
    SUB_MB_ShareLotteryExecuteSbinContinuous_RESULT = 1723, -- 执行分享转盘连续抽奖(接收)
    -- ---------- 分享充值返利 ---------- 
    SUB_MB_SharePayRebateLoadConfig = 1750,                 -- 获取【分享好友充值返利】配置(发送)
    SUB_MB_SharePayRebateLoadConfig_RESULT = 1751,          -- 获取【分享好友充值返利】配置(接收)
    SUB_MB_SharePayRebateGetStatus = 1752,                  -- 获取【分享好友充值返利】状态(发送)
    SUB_MB_SharePayRebateGetStatus_RESULT = 1753,           -- 获取【分享好友充值返利】状态(接收)
    SUB_MB_SharePayRebateGetRecord = 1754,                  -- 获取【分享好友充值返利】记录(发送)
    SUB_MB_SharePayRebateGetRecord_RESULT = 1755,           -- 获取【分享好友充值返利】记录(接收)
    SUB_MB_SharePayRebateTakeReward = 1756,                 -- 提取【分享好友充值返利】奖励(发送)
    SUB_MB_SharePayRebateTakeReward_RESULT = 1757,          -- 提取【分享好友充值返利】奖励(接收)
    -- ---------- 分享好友宝箱 ---------- 
    SUB_MB_ShareTreasureChestLoadConfig = 1760,             -- 获取分享好友宝箱配置(发送)
    SUB_MB_ShareTreasureChestLoadConfig_RESULT = 1761,      -- 获取分享好友宝箱配置(接收)
    SUB_MB_ShareTreasureChestGetStatus = 1762,              -- 获取分享好友宝箱状态(发送)
    SUB_MB_ShareTreasureChestGetStatus_RESULT = 1763,       -- 获取分享好友宝箱状态(接收)
    SUB_MB_ShareTreasureChestTakeReward = 1764,             -- 提取分享好友宝箱奖励(发送)
    SUB_MB_ShareTreasureChestTakeReward_RESULT = 1765,      -- 提取分享好友宝箱奖励(接收)
    -- ---------- 充值商城礼包 ---------- 
    SUB_MB_GetProductExtendFlag = 1780,                     -- 获取商城商品角标(发送)
    SUB_MB_GetProductExtendFlag_RESULT = 1781,              -- 获取商城商品角标(接收)
    -- ---------- 提现 ---------- 
    SUB_MB_GetWithdrawCashLimit = 1782,                     -- 获取提现限制配置(发送)
    SUB_MB_GetWithdrawCashLimit_RESULT = 1783,              -- 获取提现限制配置(接收)
    -- ---------- 充值商城礼包 ---------- 
    SUB_MB_PlacePayOrder = 2000,                            -- 充值下单(发送)
    SUB_MB_PlacePayOrder_RESULT = 2001,                     -- 充值下单(接收)
    -- ---------- 提现 ---------- 
    SUB_MB_PlaceWithdrawOrder = 2002,                       -- 提现下单(发送)
    SUB_MB_PlaceWithdrawOrder_RESULT = 2003,                -- 提现下单(接收)
    -- ---------- 低保(破产补助) ---------- 
    SUB_MB_BaseEnsureLoadConfig = 2100,                     -- 加载低保配置(发送)
    SUB_MB_BaseEnsureLoadConfig_RESULT = 2101,              -- 加载低保配置(接收)
    SUB_MB_BaseEnsureGetStatus = 2102,                      -- 获取用户低保状态(发送)
    SUB_MB_BaseEnsureGetStatus_RESULT = 2103,               -- 获取用户低保状态(接收)
    SUB_MB_BaseEnsureTakeReward = 2104,                     -- 领取低保奖励(发送)
    SUB_MB_BaseEnsureTakeReward_RESULT = 2105,              -- 领取低保奖励(接收)
    -- ---------- 弹窗策略 ---------- 
    SUB_MB_PopWinPolicyLoadConfig = 2120,                   -- 加载弹窗参数配置(发送)
    SUB_MB_PopWinPolicyLoadConfig_RESULT = 2121,            -- 加载弹窗参数配置(接收)
    SUB_MB_PopWinPolicyGetUserStatus = 2122,                -- 获取弹窗用户状态(发送)
    SUB_MB_PopWinPolicyGetUserStatus_RESULT = 2123,         -- 获取弹窗用户状态(接收)
    -- ---------- 签到 ---------- 
    SUB_MB_CheckInLoadConfig = 2140,                        -- 加载签到配置(发送)
    SUB_MB_CheckInLoadConfig_RESULT = 2141,                 -- 加载签到配置(接收)
    SUB_MB_CheckInGetUserStatus = 2142,                     -- 获取用户签到状态(发送)
    SUB_MB_CheckInGetUserStatus_RESULT = 2143,              -- 获取用户签到状态(接收)
    SUB_MB_CheckInDone = 2144,                              -- 执行签到领取奖励(发送)
    SUB_MB_CheckInDone_RESULT = 2145,                       -- 执行签到领取奖励(接收)
    SUB_MB_CheckInTakeSerialReward = 2146,                  -- 领取连续签到奖励(发送)
    SUB_MB_CheckInTakeSerialReward_RESULT = 2147,           -- 领取连续签到奖励(接收)
    -- ---------- 充值商城礼包 ---------- 
    SUB_MB_GetPayChannel = 2160,                            -- 获取支付/提现渠道(发送)
    SUB_MB_GetPayChannel_RESULT = 2161,                     -- 获取支付/提现渠道(接收)
    -- ---------- 救援金 ---------- 
    SUB_MB_AlmzLoadConfig = 2180,                           -- 加载配置(发送)
    SUB_MB_AlmzLoadConfig_RESULT = 2181,                    -- 加载配置(接收)
    SUB_MB_AlmzGetUserStatus = 2182,                        -- 获取用户状态(发送)
    SUB_MB_AlmzGetUserStatus_RESULT = 2183,                 -- 获取用户状态(接收)
    SUB_MB_AlmzTakeReward = 2184,                           -- 领取奖励(发送)
    SUB_MB_AlmzTakeReward_RESULT = 2185,                    -- 领取奖励(接收)
    -- ---------- 体验金 ---------- 
    SUB_MB_ExperienceScoreLoadConfig = 2200,                -- 加载配置(发送)
    SUB_MB_ExperienceScoreLoadConfig_RESULT = 2201,         -- 加载配置(接收)
    SUB_MB_ExperienceScoreGetUserStatus = 2202,             -- 当前用户体验金状态(发送)
    SUB_MB_ExperienceScoreGetUserStatus_RESULT = 2203,      -- 当前用户体验金状态(接收)
    SUB_MB_ExperienceScoreTakeReward = 2204,                -- 提取体验金奖励(发送)
    SUB_MB_ExperienceScoreTakeReward_RESULT = 2205,         -- 提取体验金奖励(接收)
    -- ---------- 充值商城礼包 ---------- 
    SUB_MB_QueryOrderStatusBatch = 2240,                    -- 查询充值结果(批量)(发送)
    SUB_MB_QueryOrderStatusBatch_RESULT = 2241,             -- 查询充值结果(批量)(接收)
    SUB_MB_GetProductActiveStateEx = 2242,                  -- 获取一次性商品购买情况Ex(发送)
    SUB_MB_GetProductActiveStateEx_RESULT = 2243,           -- 获取一次性商品购买情况Ex(接收)
    SUB_MB_GetProductInfosByType = 2244,                    -- 获取商品列表by礼包(发送)
    SUB_MB_GetProductInfosByType_RESULT = 2245,             -- 获取商品列表by礼包(接收)

    -- ========== 主命令 ========== 
    MDM_GP_CHAT = 51,                                       -- 邮件/聊天命令
    -- ---------- 子命令 ---------- 
    -- ---------- 邮件系统 ---------- 
    SUB_MAIL_GetMailList = 100,                             -- 获取邮件列表(发送)
    SUB_MAIL_GetMailList_RESULT = 101,                      -- 获取邮件列表(接收)
    SUB_MAIL_Detail = 102,                                  -- 获取邮件明细(发送)
    SUB_MAIL_Detail_RESULT = 103,                           -- 获取邮件明细(接收)
    SUB_MAIL_Delete = 104,                                  -- 删除邮件(发送)
    SUB_MAIL_Delete_RESULT = 105,                           -- 删除邮件(接收)
    SUB_MAIL_GetNewMailCount = 112,                         -- 获取新邮件数量(发送)
    SUB_MAIL_GetNewMailCount_RESULT = 113,                  -- 获取新邮件数量(接收)
};


-- 一些通用字段长度申明
local lengths = {
    MAX_SERAIL_CHECK_IN_COUNT= 4,                 -- 连续签到的奖励档位数量
    MAX_PAY_REBATE_DAYS= 7,                       -- 最大支付返利的天数
    LEN_PASSWORD= 33,                             -- 密码长度
    LEN_IP= 16,                                   -- IPv4地址长度
    LEN_IP_V6= 48,                                -- IPv6地址长度
    LEN_MACHINE_ID= 33,                           -- 机器码长度
    MAX_GROW_COUNT= 21,                           -- 成长等级数组的个数
    LEN_MD5= 33,                                  -- MD5加密长度
    MAX_ITEM_COUNT= 16,                           -- 大转盘物品栏目最大数量
    MAX_LOTTERY_COUNT= 3,                         -- 最大转盘数量
    LEN_NICKNAME= 32,                             -- 昵称长度
    LEN_INTERNATIONAL_MOBILE= 16,                 -- 国际化手机号码长度
    MAX_CHEST_COUNT= 8,                           -- 最大的分享宝箱个数
    SHARE_LOTTERY_STAGE_COUNT= 8,                 -- 分享转盘最大提现档位数量
    MAX_TASK_ACTIVENESS_COUNT= 4,                 -- 
    LEN_URL_SHORT= 256,                           -- 短URL长度
    LEN_ACCOUNTS= 32,                             -- 帐号长度
    LEN_MOBILE_CHECKCODE= 7,                      -- 手机验证码长度
    LEN_PRODUCT_TYPE_NAME= 16,                    -- 礼包名字的长度
    LEN_FACEURL= 256,                             -- 第三方图像URL最大长度 普通URL长度
    LEN_MOBILE_PHONE= 12,                         -- 传统移动电话长度
    LEN_USER_UIN= 33,                             -- 用户UIN长度
    LEN_COMPELLATION= 16,                         -- 真实名字长度
    PASS_LEN= 33,                                 -- 密码长度
    MAX_BATCH_ORDER_QUERY= 50,                    -- 批量查询订单的最大数量
    MAX_PRODUCT_COUNT= 21,                        -- 每个分类最大商品数量
    LEN_MAIL_TITLE= 256,                          -- 邮件标题最大长度
    MAX_MAIL_ATTACHMENT_COUNT= 5,                 -- 邮件附件数量
    LEN_MAIL_CONTENT= 1024,                       -- 邮件内容最大长度
    LEN_MAIL_TOPIC= 128,                          -- 邮件主题最大长度
    LEN_WEEK= 7,                                  -- 每个星期有几天
};


-- 可能被重复使用的结构
local commonStructors = {
    CMD_MB_Common_Query= {
        { t = "uint32_t", k = "userID" },                                                           -- 用户标识
    },
    CMD_MB_Common_QueryScore= {
        { t = "uint32_t", k = "userID" },                                                           -- 用户标识
        { t = "char16_t", k = "dynamicPass", s = lengths.LEN_PASSWORD },                            -- 动态密码
    },
    CMD_MB_Common_TakeScore= {
        { t = "uint32_t", k = "userID" },                                                           -- 用户标识
        { t = "char16_t", k = "dynamicPass", s = lengths.LEN_PASSWORD },                            -- 动态密码
        { t = "char16_t", k = "clientIP", s = lengths.LEN_IP },                                     -- IP地址
        { t = "char16_t", k = "machineID", s = lengths.LEN_MACHINE_ID },                            -- 机器码
    },
    tagProductInfo= {
        { t = "uint32_t", k = "productID" },                                                        -- 商品标识
        { t = "uint32_t", k = "price" },                                                            -- 价格
        { t = "uint8_t", k = "awardType" },                                                         -- 奖励类型
        { t = "int64_t", k = "awardValue" },                                                        -- 奖励值
        { t = "uint8_t", k = "attachType" },                                                        -- 附加类型
        { t = "int64_t", k = "attachValue" },                                                       -- 附加值
    },
    tagWithdrawRecord= {
        { t = "int32_t", k = "amount" },                                                            -- 金额
        { t = "time_t", k = "applyDate" },                                                          -- 提现日期
        { t = "uint32_t", k = "status" },                                                           -- 状态
        { t = "char16_t", k = "orderID", s = 33 },                                                  -- 订单标识
    },
    CMD_GP_SendSmsCode= {
        { t = "utf8", k = "mobile", s = lengths.LEN_INTERNATIONAL_MOBILE },                         -- 手机号码
        { t = "uint32_t", k = "userID" },                                                           -- 用户标识
        { t = "uint8_t", k = "smsType" },                                                           -- 短信类型
        { t = "char16_t", k = "machineID", s = lengths.LEN_MACHINE_ID },                            -- 机器码
    },
    CMD_MB_PlaceOrder= {
        { t = "uint32_t", k = "userID" },                                                           -- 用户标识
        { t = "uint32_t", k = "productID" },                                                        -- 商品标识
        { t = "int64_t", k = "price" },                                                             -- 价格
        { t = "utf8", k = "nickName", s = lengths.LEN_NICKNAME },                                   -- 用户昵称
        { t = "utf8", k = "machineID", s = lengths.LEN_MACHINE_ID },                                -- 机器码
        { t = "utf8", k = "ip", s = lengths.LEN_IP },                                               -- IP地址
        { t = "utf8", k = "extends", s = 1024 },                                                    -- 扩展内容
    },
    CMD_MB_PlaceOrderResult= {
        { t = "utf8", k = "msg", s = 1024 },                                                        -- json字符串
    },
};


-- 专属发送结构(因为接收与发送有相同的命令)
local sendStructors = {
    [commands.MDM_MB_LOGON]= {
        [commands.SUB_MB_RELOGON]= {
            { t = "uint32_t", k = "gameID" },                                                       -- 游戏标识
            { t = "char16_t", k = "dynamicPass", s = lengths.LEN_PASSWORD },                        -- 动态密码
            { t = "char16_t", k = "ip", s = lengths.LEN_IP },                                       -- IP地址
            { t = "char16_t", k = "machineID", s = lengths.LEN_MACHINE_ID },                        -- 机器码
        },
        [commands.SUB_MB_GetScoreInfo]= {
            { t = "uint32_t", k = "userID" },                                                       -- 用户标识
        },
    },
};


-- 专属发送结构(因为接收与发送有相同的命令)
local recvStructors = {
    [commands.MDM_MB_LOGON] = {
        [commands.SUB_MB_RELOGON] = {
            { t = "uint32_t", k = "errorCode" },                                                    -- 全局通用错误码
            { t = "uint32_t", k = "userID" },                                                       -- 用户标识
            { t = "uint32_t", k = "gameID" },                                                       -- 游戏标识
            { t = "char16_t", k = "dynamicPass", s = lengths.LEN_PASSWORD },                        -- 动态密码
            { t = "time_t", k = "regDate" },                                                        -- 注册日期
        },
        [commands.SUB_MB_GetScoreInfo] = {
            { t = "int64_t", k = "score" },                                                         -- 
            { t = "int64_t", k = "insureScore" },                                                   -- 
            { t = "int64_t", k = "tCCoin" },                                                        -- 
            { t = "int64_t", k = "tCCoinInsure" },                                                  -- 
            { t = "uint8_t", k = "growLevel" },                                                     -- VIP等级/成长等级
        },
    },
};

-- 协议结构申明(通用申明)
local structors = {
    [commands.MDM_MB_LOGON]= {
        -- 获取服务器当前时间戳:发送(8,25) CMD_MB_Common_Query
        [commands.SUB_GP_SERVER_UTC_TIMESTAMP] = commonStructors.CMD_MB_Common_Query,
        -- 获取服务器当前时间戳:接收(8,26) tagUTCTimestamp
        [commands.SUB_GP_SERVER_UTC_TIMESTAMP_RESULT] = {
            { t = "time_t", k = "timestamp" },                                                      -- 时间戳
            { t = "int32_t", k = "zone" },                                                          -- 时区
        },
        -- 获取当前积分:发送(8,110) CMD_MB_Common_Query
        [commands.SUB_MB_GetScoreInfo] = commonStructors.CMD_MB_Common_Query,
        -- 获取当前积分:接收(8,110) tagScoreInfo
        -- 账号登陆:发送(8,2) CMD_MB_LogonAccounts
        [commands.SUB_MB_LOGON_ACCOUNTS] = {
            { t = "uint16_t", k = "moduleID" },                                                     -- 模块标识(废弃)
            { t = "uint32_t", k = "plazaVersion" },                                                 -- 大厅版本(定值0x06070001)
            { t = "uint8_t", k = "deviceType" },                                                    -- 设备类型(参见DeviceType枚举)
            { t = "char16_t", k = "machineID", s = lengths.LEN_MACHINE_ID },                        -- 机器码
            { t = "char16_t", k = "accounts", s = lengths.LEN_ACCOUNTS },                           -- 用户账号
            { t = "char16_t", k = "password", s = lengths.LEN_MD5 },                                -- 登陆密码或者动态密码
            { t = "uint8_t", k = "ipAddr", s = 14 },                                                -- 加密后IP地址
            { t = "utf8", k = "channelName", s = 0 },                                               -- 推广渠道名称
            { t = "uint32_t", k = "spreadBindID" },                                                 -- 剪贴板绑定标识
        },
        -- 账号登陆:接收(8,100) CMD_MB_LogonSuccess
        [commands.SUB_MB_LOGON_SUCCESS] = {
            { t = "uint16_t", k = "faceID" },                                                       -- 图像标识
            { t = "uint8_t", k = "gender" },                                                        -- 性别(废弃)
            { t = "uint32_t", k = "customID" },                                                     -- 自定义头像标识(废弃)
            { t = "uint32_t", k = "userID" },                                                       -- 用户标识
            { t = "uint32_t", k = "gameID" },                                                       -- 游戏标识
            { t = "uint32_t", k = "experience" },                                                   -- 经验值(废弃)
            { t = "int64_t", k = "loveLiness" },                                                    -- 魅力值(废弃)
            { t = "char16_t", k = "accounts", s = lengths.LEN_ACCOUNTS },                           -- 用户账号
            { t = "char16_t", k = "nickName", s = lengths.LEN_NICKNAME },                           -- 用户昵称
            { t = "char16_t", k = "dynamicPass", s = lengths.LEN_PASSWORD },                        -- 动态密码
            { t = "int64_t", k = "userScore" },                                                     -- 用户背包金币
            { t = "int64_t", k = "tCCoin" },                                                        -- 用户TC币
            { t = "int64_t", k = "userInsure" },                                                    -- 用户银行金币
            { t = "int64_t", k = "tCCoinInsure" },                                                  -- 用户银行TC币
            { t = "uint8_t", k = "insureEnabled" },                                                 -- 是否开通银行
            { t = "uint8_t", k = "isAgent" },                                                       -- 是否俱乐部会长(废弃)
            { t = "uint8_t", k = "moorMachine" },                                                   -- 是否绑定机器(废弃)
            { t = "int64_t", k = "roomCard" },                                                      -- 房卡数量(废弃)
            { t = "uint32_t", k = "lockServerID" },                                                 -- 当前锁定的服务器标识
            { t = "uint32_t", k = "kindID" },                                                       -- 当前锁定的服务器类型标识
            { t = "uint32_t", k = "agentID" },                                                      -- 俱乐部标识(废弃)
            { t = "uint32_t", k = "userFlag" },                                                     -- 用户标识掩码
        },
        -- 注册账号:发送(8,3) CMD_MB_RegisterAccounts
        [commands.SUB_MB_REGISTER_ACCOUNTS] = {
            { t = "uint16_t", k = "moduleID" },                                                     -- 模块标识(废弃)
            { t = "uint32_t", k = "plazaVersion" },                                                 -- 大厅版本(定值0x06070001)
            { t = "uint8_t", k = "deviceType" },                                                    -- 设备类型(参见DeviceType枚举)
            { t = "char16_t", k = "machineID", s = lengths.LEN_MACHINE_ID },                        -- 机器码
            { t = "char16_t", k = "accounts", s = lengths.LEN_ACCOUNTS },                           -- 用户账号
            { t = "char16_t", k = "logonPass", s = lengths.LEN_MD5 },                               -- 登陆密码
            { t = "char16_t", k = "checkCode", s = lengths.LEN_MOBILE_CHECKCODE },                  -- 手机验证码
            { t = "char16_t", k = "nickName", s = lengths.LEN_NICKNAME },                           -- 用户昵称
            { t = "uint16_t", k = "faceID" },                                                       -- 图像标识
            { t = "uint8_t", k = "gender" },                                                        -- 性别
            { t = "uint8_t", k = "ipAddr", s = 14 },                                                -- 加密后IP地址
            { t = "utf8", k = "channelName", s = 0 },                                               -- 推广渠道名称
            { t = "uint32_t", k = "spreadBindID" },                                                 -- 剪贴板绑定标识
        },
        -- 注册账号:接收(8,100) CMD_MB_LogonSuccess
        -- 注册成功:接收(8,103) CMD_MB_Common_Query
        [commands.SUB_MB_REGISTER_SUCCESS] = commonStructors.CMD_MB_Common_Query,
        -- 注册失败:接收(8,102) CMD_GP_LogonFailure
        [commands.SUB_MB_REGISTER_FAILURE] = {
            { t = "int32_t", k = "resultCode" },                                                    -- 全局通用错误码
            { t = "char16_t", k = "describeString", s = 128 },                                      -- 错误描述
        },
        -- 三方登陆:发送(8,4) CMD_MB_LogonOtherPlatform
        [commands.SUB_MB_LOGON_OTHERPLATFORM] = {
            { t = "uint16_t", k = "moduleID" },                                                     -- 模块标识(废弃)
            { t = "uint32_t", k = "plazaVersion" },                                                 -- 大厅版本(定值0x06070001)
            { t = "uint8_t", k = "deviceType" },                                                    -- 设备类型(参见DeviceType枚举)
            { t = "uint8_t", k = "gender" },                                                        -- 性别
            { t = "uint8_t", k = "platformID" },                                                    -- 平台标识
            { t = "char16_t", k = "userUin", s = lengths.LEN_USER_UIN },                            -- 三方账号标识
            { t = "char16_t", k = "nickName", s = lengths.LEN_NICKNAME },                           -- 用户昵称
            { t = "char16_t", k = "compellation", s = lengths.LEN_COMPELLATION },                   -- 签名(废弃)
            { t = "char16_t", k = "machineID", s = lengths.LEN_MACHINE_ID },                        -- 机器码
            { t = "char16_t", k = "mobilePhone", s = lengths.LEN_MOBILE_PHONE },                    -- 手机号码
            { t = "uint8_t", k = "ipAddr", s = 33 },                                                -- 加密后IP地址
            { t = "char16_t", k = "accessToken", s = 0 },                                           -- 三方令牌
            { t = "char16_t", k = "email", s = 0 },                                                 -- 邮箱
            { t = "utf8", k = "channelName", s = 0 },                                               -- 推广渠道名称
            { t = "uint32_t", k = "spreadBindID" },                                                 -- 剪贴板绑定标识
        },
        -- 三方登陆:接收(8,100) CMD_MB_LogonSuccess
        -- 登陆失败:接收(8,101) CMD_GP_LogonFailure
        [commands.SUB_MB_LOGON_FAILURE] = {
            { t = "int32_t", k = "resultCode" },                                                    -- 全局通用错误码
            { t = "char16_t", k = "describeString", s = 128 },                                      -- 错误描述
        },
        -- 游客登陆:发送(8,5) CMD_MB_LogonVisitor
        [commands.SUB_MB_LOGON_VISITOR] = {
            { t = "uint16_t", k = "moduleID" },                                                     -- 模块标识(废弃)
            { t = "uint32_t", k = "plazaVersion" },                                                 -- 大厅版本(定值0x06070001)
            { t = "uint8_t", k = "deviceType" },                                                    -- 设备类型(参见DeviceType枚举)
            { t = "char16_t", k = "machineID", s = lengths.LEN_MACHINE_ID },                        -- 机器码
            { t = "char16_t", k = "mobilePhone", s = lengths.LEN_MOBILE_PHONE },                    -- 手机号码
            { t = "uint8_t", k = "ipAddr", s = 14 },                                                -- 加密后IP地址
            { t = "utf8", k = "channelName", s = 0 },                                               -- 推广渠道名称
            { t = "uint32_t", k = "spreadBindID" },                                                 -- 剪贴板绑定标识
        },
        -- 游客登陆:接收(8,100) CMD_MB_LogonSuccess
        -- 登陆失败:接收(8,101) CMD_GP_LogonFailure
        -- 手机登陆（新）:发送(8,7) CMD_MB_LogonMobileEx
        [commands.SUB_MB_LOGON_MOBILE_EX] = {
            { t = "uint16_t", k = "moduleID" },                                                     -- 模块标识(废弃)
            { t = "uint32_t", k = "plazaVersion" },                                                 -- 大厅版本(定值0x06070001)
            { t = "uint8_t", k = "deviceType" },                                                    -- 设备类型(参见DeviceType枚举)
            { t = "char16_t", k = "machineID", s = lengths.LEN_MACHINE_ID },                        -- 机器码
            { t = "char16_t", k = "mobilePhone", s = lengths.LEN_INTERNATIONAL_MOBILE },            -- 手机号码
            { t = "char16_t", k = "dynamicPass", s = lengths.LEN_PASSWORD },                        -- 动态密码
            { t = "uint8_t", k = "ipAddr", s = 14 },                                                -- 加密后IP地址
            { t = "utf8", k = "channelName", s = 0 },                                               -- 推广渠道名称
            { t = "uint32_t", k = "spreadBindID" },                                                 -- 剪贴板绑定标识
        },
        -- 手机登陆（新）:接收(8,100) CMD_MB_LogonSuccess
        -- 登陆失败:接收(8,101) CMD_GP_LogonFailure
        -- 断线重登:发送(8,10) CMD_MB_Relogon
        [commands.SUB_MB_RELOGON] = {
            { t = "uint32_t", k = "gameID" },                                                       -- 游戏标识
            { t = "char16_t", k = "dynamicPass", s = lengths.LEN_PASSWORD },                        -- 动态密码
            { t = "char16_t", k = "ip", s = lengths.LEN_IP },                                       -- IP地址
            { t = "char16_t", k = "machineID", s = lengths.LEN_MACHINE_ID },                        -- 机器码
        },
        -- 断线重登:接收(8,10) CMD_MB_RelogonResult
        -- 登出:发送(8,11) CMD_MB_LogonExit
        [commands.SUB_MB_LOGON_EXIT] = {
            { t = "uint32_t", k = "userID" },                                                       -- 用户标识
        },
        -- 登出:接收(8,12) CMD_MB_Common_Query
        [commands.SUB_MB_LOGON_EXIT_RESULT] = commonStructors.CMD_MB_Common_Query,
        -- 重置密码:发送(8,130) CMD_MB_ResetLogonPassword
        [commands.SUB_MB_RESET_LOGON_PASSWORD] = {
            { t = "char16_t", k = "accounts", s = lengths.LEN_ACCOUNTS },                           -- 用户账号
            { t = "char16_t", k = "checkCode", s = lengths.LEN_MOBILE_CHECKCODE },                  -- 手机验证码
            { t = "char16_t", k = "newPassword", s = lengths.LEN_PASSWORD },                        -- 新密码
        },
        -- 重置密码:接收(8,131) CMD_MB_ResetLogonPasswordResult
        [commands.SUB_MB_RESET_LOGON_PASSWORD_RESULT] = {
            { t = "uint32_t", k = "errorCode" },                                                    -- 全局通用错误码
        },
        -- 发送登陆短信:发送(8,120) CMD_GP_SendSmsCode
        [commands.SUB_MB_SendSMSLogonCode] = commonStructors.CMD_GP_SendSmsCode,
        -- 发送登陆短信:接收(8,121) CMD_GP_SendSmsCodeResult
        [commands.SUB_MB_SendSMSLogonCodeResult] = {
            { t = "uint32_t", k = "errorCode" },                                                    -- 全局通用错误码
            { t = "time_t", k = "timestamp" },                                                      -- 时间戳
            { t = "uint32_t", k = "restSecond" },                                                   -- 剩余秒数
        },
        -- 发送重置密码短信:发送(8,122) CMD_GP_SendSmsCode
        [commands.SUB_MB_SendSMSResetPassword] = commonStructors.CMD_GP_SendSmsCode,
        -- 发送重置密码短信:接收(8,123) CMD_GP_SendSmsCodeResult
        [commands.SUB_MB_SendSMSResetPasswordResult] = {
            { t = "uint32_t", k = "errorCode" },                                                    -- 全局通用错误码
            { t = "time_t", k = "timestamp" },                                                      -- 时间戳
            { t = "uint32_t", k = "restSecond" },                                                   -- 剩余秒数
        },
        -- 发送账号注册短信:发送(8,124) CMD_GP_SendSmsCode
        [commands.SUB_MB_SendSMSRegisteUser] = commonStructors.CMD_GP_SendSmsCode,
        -- 发送账号注册短信:接收(8,125) CMD_GP_SendSmsCodeResult
        [commands.SUB_MB_SendSMSRegisteUserResult] = {
            { t = "uint32_t", k = "errorCode" },                                                    -- 全局通用错误码
            { t = "time_t", k = "timestamp" },                                                      -- 时间戳
            { t = "uint32_t", k = "restSecond" },                                                   -- 剩余秒数
        },
        -- IPv6-账号登陆:发送(8,602) CMD_MB_LogonAccountsV6
        [commands.SUB_MB_LOGON_ACCOUNTS_V6] = {
            { t = "uint16_t", k = "moduleID" },                                                     -- 模块标识(废弃)
            { t = "uint32_t", k = "plazaVersion" },                                                 -- 大厅版本(定值0x06070001)
            { t = "uint8_t", k = "deviceType" },                                                    -- 设备类型(参见DeviceType枚举)
            { t = "char16_t", k = "machineID", s = lengths.LEN_MACHINE_ID },                        -- 机器码
            { t = "char16_t", k = "accounts", s = lengths.LEN_ACCOUNTS },                           -- 用户账号
            { t = "char16_t", k = "password", s = lengths.LEN_MD5 },                                -- 登陆密码或者动态密码
            { t = "utf8", k = "clientIP", s = lengths.LEN_IP_V6 },                                  -- IP地址
            { t = "utf8", k = "channelName", s = 1024 },                                            -- 推广渠道名称
        },
        -- IPv6-账号登陆:接收(8,100) CMD_MB_LogonSuccess
        -- IPv6-注册账号:发送(8,603) CMD_MB_RegisterAccountsV6
        [commands.SUB_MB_REGISTER_ACCOUNTS_V6] = {
            { t = "uint16_t", k = "moduleID" },                                                     -- 模块标识(废弃)
            { t = "uint32_t", k = "plazaVersion" },                                                 -- 大厅版本(定值0x06070001)
            { t = "uint8_t", k = "deviceType" },                                                    -- 设备类型(参见DeviceType枚举)
            { t = "char16_t", k = "machineID", s = lengths.LEN_MACHINE_ID },                        -- 机器码
            { t = "char16_t", k = "accounts", s = lengths.LEN_ACCOUNTS },                           -- 用户账号
            { t = "char16_t", k = "logonPass", s = lengths.LEN_MD5 },                               -- 登陆密码
            { t = "char16_t", k = "checkCode", s = lengths.LEN_MOBILE_CHECKCODE },                  -- 手机验证码
            { t = "char16_t", k = "nickName", s = lengths.LEN_NICKNAME },                           -- 用户昵称
            { t = "uint16_t", k = "faceID" },                                                       -- 图像标识
            { t = "uint8_t", k = "gender" },                                                        -- 性别
            { t = "utf8", k = "clientIP", s = lengths.LEN_IP_V6 },                                  -- IP地址
            { t = "utf8", k = "channelName", s = 1024 },                                            -- 推广渠道名称
        },
        -- IPv6-注册账号:接收(8,100) CMD_MB_LogonSuccess
        -- 注册成功:接收(8,103) CMD_MB_Common_Query
        -- 注册失败:接收(8,102) CMD_GP_LogonFailure
        -- IPv6-三方登陆:发送(8,604) CMD_MB_LogonOtherPlatformV6
        [commands.SUB_MB_LOGON_OTHERPLATFORM_V6] = {
            { t = "uint16_t", k = "moduleID" },                                                     -- 模块标识(废弃)
            { t = "uint32_t", k = "plazaVersion" },                                                 -- 大厅版本(定值0x06070001)
            { t = "uint8_t", k = "deviceType" },                                                    -- 设备类型(参见DeviceType枚举)
            { t = "uint8_t", k = "gender" },                                                        -- 性别
            { t = "uint8_t", k = "platformID" },                                                    -- 平台标识
            { t = "char16_t", k = "userUin", s = lengths.LEN_USER_UIN },                            -- 三方账号标识
            { t = "char16_t", k = "nickName", s = lengths.LEN_NICKNAME },                           -- 用户昵称
            { t = "char16_t", k = "compellation", s = lengths.LEN_COMPELLATION },                   -- 签名(废弃)
            { t = "char16_t", k = "machineID", s = lengths.LEN_MACHINE_ID },                        -- 机器码
            { t = "char16_t", k = "mobilePhone", s = lengths.LEN_MOBILE_PHONE },                    -- 手机号码
            { t = "utf8", k = "clientIP", s = lengths.LEN_IP_V6 },                                  -- IP地址
            { t = "char16_t", k = "accessToken", s = 1024 },                                        -- 三方令牌
        },
        -- IPv6-三方登陆:接收(8,100) CMD_MB_LogonSuccess
        -- 登陆失败:接收(8,101) CMD_GP_LogonFailure
        -- IPv6-游客登陆:发送(8,605) CMD_MB_LogonVisitorV6
        [commands.SUB_MB_LOGON_VISITOR_V6] = {
            { t = "uint16_t", k = "moduleID" },                                                     -- 模块标识(废弃)
            { t = "uint32_t", k = "plazaVersion" },                                                 -- 大厅版本(定值0x06070001)
            { t = "uint8_t", k = "deviceType" },                                                    -- 设备类型(参见DeviceType枚举)
            { t = "char16_t", k = "machineID", s = lengths.LEN_MACHINE_ID },                        -- 机器码
            { t = "char16_t", k = "mobilePhone", s = lengths.LEN_MOBILE_PHONE },                    -- 手机号码
            { t = "utf8", k = "clientIP", s = lengths.LEN_IP_V6 },                                  -- IP地址
            { t = "utf8", k = "channelName", s = 1024 },                                            -- 推广渠道名称
        },
        -- IPv6-游客登陆:接收(8,100) CMD_MB_LogonSuccess
        -- 登陆失败:接收(8,101) CMD_GP_LogonFailure
        -- IPv6-手机登陆:发送(8,607) CMD_MB_LogonMobileExV6
        [commands.SUB_MB_LOGON_MOBILE_EX_V6] = {
            { t = "uint16_t", k = "moduleID" },                                                     -- 模块标识(废弃)
            { t = "uint32_t", k = "plazaVersion" },                                                 -- 大厅版本(定值0x06070001)
            { t = "uint8_t", k = "deviceType" },                                                    -- 设备类型(参见DeviceType枚举)
            { t = "char16_t", k = "machineID", s = lengths.LEN_MACHINE_ID },                        -- 机器码
            { t = "char16_t", k = "mobilePhone", s = lengths.LEN_INTERNATIONAL_MOBILE },            -- 手机号码
            { t = "char16_t", k = "dynamicPass", s = lengths.LEN_PASSWORD },                        -- 动态密码
            { t = "utf8", k = "clientIP", s = lengths.LEN_IP_V6 },                                  -- IP地址
            { t = "utf8", k = "channelName", s = 1024 },                                            -- 推广渠道名称
        },
        -- IPv6-手机登陆:接收(8,100) CMD_MB_LogonSuccess
        -- 登陆失败:接收(8,101) CMD_GP_LogonFailure
        -- IPv6-断线重登:发送(8,610) CMD_MB_RelogonV6
        [commands.SUB_MB_RELOGON_V6] = {
            { t = "uint32_t", k = "gameID" },                                                       -- 游戏标识
            { t = "char16_t", k = "dynamicPass", s = lengths.LEN_PASSWORD },                        -- 动态密码
            { t = "utf8", k = "clientIP", s = lengths.LEN_IP_V6 },                                  -- IP地址
            { t = "char16_t", k = "machineID", s = lengths.LEN_MACHINE_ID },                        -- 机器码
        },
        -- IPv6-断线重登:接收(8,10) CMD_MB_RelogonResult
    },
    [commands.MDM_MB_SERVER_LIST]= {
        -- 获取房间列表:发送(9,500) CMD_MB_GetServerList
        [commands.SUB_MB_C_GET_SERVER_LIST] = {
            { t = "uint16_t", k = "kindID" },                                                       -- 游戏类型标识
        },
        -- 获取房间列表:接收(9,501) CMD_MB_GetServerListResult
        [commands.SUB_MB_S_SERVER_LIST] = {
            {
                t = {
                    { t = "uint16_t", k = "kindID" },                                               -- 分类标识
                    { t = "uint16_t", k = "sortID" },                                               -- 排序索引
                    { t = "uint16_t", k = "serverID" },                                             -- 房间索引
                    { t = "uint16_t", k = "serverKind" },                                           -- 房间类型
                    { t = "uint16_t", k = "serverType" },                                           -- 房间类型
                    { t = "int64_t", k = "cellScore" },                                             -- 单元积分
                    { t = "int64_t", k = "enterScore" },                                            -- 进入积分
                    { t = "uint32_t", k = "onLineCount" },                                          -- 在线人数
                    { t = "uint32_t", k = "androidCount" },                                         -- 机器人数
                    { t = "uint32_t", k = "fullCount" },                                            -- 满员人数
                    { t = "uint16_t", k = "tableCount" },                                           -- 桌子数目
                }, k = "items"                                                                      -- 房间列表
            },
        },
    },
    [commands.MDM_GP_USER_SERVICE]= {
        -- 加载低保配置:发送(3,2100) CMD_MB_Common_Query
        [commands.SUB_MB_BaseEnsureLoadConfig] = commonStructors.CMD_MB_Common_Query,
        -- 加载低保配置:接收(3,2101) CMD_MB_BaseEnsureLoadConfigResult
        [commands.SUB_MB_BaseEnsureLoadConfig_RESULT] = {
            { t = "int64_t", k = "scoreCondition", s = 2 },                                         -- 2次破产的条件，低于此值为破产
            {
                t = {
                    { t = "int64_t", k = "firstScore" },                                            -- 首次破产奖励金币
                    { t = "int64_t", k = "secondScore" },                                           -- 再次破产奖励金币
                }, k = "scoreReward", s = lengths.MAX_GROW_COUNT                                    -- 破产补助等级奖励列表
            },
        },
        -- 获取用户低保状态:发送(3,2102) CMD_MB_Common_Query
        [commands.SUB_MB_BaseEnsureGetStatus] = commonStructors.CMD_MB_Common_Query,
        -- 获取用户低保状态:接收(3,2103) CMD_MB_BaseEnsureGetStatusResult
        [commands.SUB_MB_BaseEnsureGetStatus_RESULT] = {
            { t = "uint32_t", k = "takeTimes" },                                                    -- 已经领取的次数(dwTakeTimes=2，表示今天已领完了)
            { t = "uint8_t", k = "isTodayPay" },                                                    -- 今天是否支付过了(只在dwTakeTimes=1的时候才生效)
            { t = "int64_t", k = "totalScore" },                                                    -- 用户总金币
            { t = "uint8_t", k = "isEnable" },                                                      -- 是否可领取
            { t = "uint8_t", k = "growLevel" },                                                     -- 成长等级/VIP等级
            { t = "int64_t", k = "rewardScore" },                                                   -- 这一次可领取的奖励金币
        },
        -- 领取低保奖励:发送(3,2104) CMD_MB_BaseEnsureTakeReward
        [commands.SUB_MB_BaseEnsureTakeReward] = {
            { t = "uint32_t", k = "userID" },                                                       -- 用户标识
            { t = "char16_t", k = "dynamicPass", s = lengths.LEN_PASSWORD },                        -- 动态密码
            { t = "char16_t", k = "clientIP", s = lengths.LEN_IP },                                 -- IP地址
            { t = "char16_t", k = "machineID", s = lengths.LEN_MACHINE_ID },                        -- 机器码
        },
        -- 领取低保奖励:接收(3,2105) CMD_MB_BaseEnsureTakeRewardResult
        [commands.SUB_MB_BaseEnsureTakeReward_RESULT] = {
            { t = "uint32_t", k = "errorCode" },                                                    -- 全局通用错误码
            { t = "int64_t", k = "score" },                                                         -- 当前领取到的金币数量
            { t = "uint32_t", k = "restTimes" },                                                    -- 剩余可领取低保的次数
        },
        -- 加载签到配置:发送(3,2140) CMD_MB_Common_Query
        [commands.SUB_MB_CheckInLoadConfig] = commonStructors.CMD_MB_Common_Query,
        -- 加载签到配置:接收(3,2141) CMD_MB_CheckInLoadConfigResult
        [commands.SUB_MB_CheckInLoadConfig_RESULT] = {
            {
                t = {
                    { t = "int64_t", k = "rewardGold", s = lengths.LEN_WEEK },                      -- 7天每天可领取的奖励
                    {
                        t = {
                            { t = "uint16_t", k = "days" },                                         -- 签到天数
                            { t = "int64_t", k = "score" },                                         -- 可领取的奖励
                        }, k = "serialCheckInReward", s = lengths.MAX_SERAIL_CHECK_IN_COUNT         -- 连续签到奖励
                    },
                }, k = "items", s = lengths.MAX_GROW_COUNT                                          -- 签到奖励数组
            },
        },
        -- 获取用户签到状态:发送(3,2142) CMD_MB_CheckInGetUserStatus
        [commands.SUB_MB_CheckInGetUserStatus] = {
            { t = "uint32_t", k = "userID" },                                                       -- 
        },
        -- 获取用户签到状态:接收(3,2143) CMD_MB_CheckInGetUserStatusResult
        [commands.SUB_MB_CheckInGetUserStatus_RESULT] = {
            { t = "uint16_t", k = "turnDays" },                                                     -- 普通签到本轮第几天[0-7]
            { t = "uint16_t", k = "seriesDays" },                                                   -- 连续签到天数[0,20]
            { t = "uint8_t", k = "bTodayChecked" },                                                 -- 今天是否签到了
            { t = "uint8_t", k = "allow" },                                                         -- 是否允许签到
            { t = "uint8_t", k = "seriesAllow", s = lengths.MAX_SERAIL_CHECK_IN_COUNT },            -- 是否有可领取连续签到的奖励
            { t = "int64_t", k = "payScore" },                                                      -- 今天充值总额
            { t = "int64_t", k = "payRequire" },                                                    -- 当前等级需求充值金额
            { t = "uint16_t", k = "payMultiple" },                                                  -- 签到充值后的赠送的倍数（与等级有关）
        },
        -- 执行签到领取奖励:发送(3,2144) CMD_MB_CheckInDone
        [commands.SUB_MB_CheckInDone] = {
            { t = "uint32_t", k = "userID" },                                                       -- 用户标识
            { t = "char16_t", k = "dynamicPass", s = lengths.LEN_PASSWORD },                        -- 动态密码
            { t = "char16_t", k = "machineID", s = lengths.LEN_MACHINE_ID },                        -- 机器码
            { t = "char16_t", k = "clientIP", s = lengths.LEN_IP },                                 -- IP地址
        },
        -- 执行签到领取奖励:接收(3,2145) CMD_MB_CheckInDoneResult
        [commands.SUB_MB_CheckInDone_RESULT] = {
            { t = "uint32_t", k = "errorCode" },                                                    -- 全局通用错误码
            { t = "int64_t", k = "score" },                                                         -- 金币
        },
        -- 领取连续签到奖励:发送(3,2146) CMD_MB_CheckInTakeSerialReward
        [commands.SUB_MB_CheckInTakeSerialReward] = {
            { t = "uint32_t", k = "userID" },                                                       -- 用户标识
            { t = "uint8_t", k = "index" },                                                         -- 领取第几个奖励[1,4]
            { t = "char16_t", k = "dynamicPass", s = lengths.LEN_PASSWORD },                        -- 动态密码
            { t = "char16_t", k = "ip", s = lengths.LEN_IP },                                       -- IP地址
        },
        -- 领取连续签到奖励:接收(3,2147) CMD_MB_CheckInTakeSerialRewardResult
        [commands.SUB_MB_CheckInTakeSerialReward_RESULT] = {
            { t = "uint32_t", k = "errorCode" },                                                    -- 全局通用错误码
            { t = "int64_t", k = "score" },                                                         -- 金币
        },
        -- 新协议(双货币)存入金币:发送(3,1310) CMD_MB_UserSaveScoreEx
        [commands.SUB_MB_UserSaveScoreEx] = {
            { t = "uint32_t", k = "userID" },                                                       -- 用户标识
            { t = "char16_t", k = "insurePass", s = lengths.LEN_PASSWORD },                         -- 银行密码
            { t = "uint8_t", k = "currencyType" },                                                  -- 货币类型
            { t = "int64_t", k = "score" },                                                         -- 存储金额数量
            { t = "uint32_t", k = "clientAddr" },                                                   -- IP地址数字格式
            { t = "char16_t", k = "machineID", s = lengths.LEN_MACHINE_ID },                        -- 机器码
        },
        -- 新协议(双货币)存入金币:接收(3,1311) CMD_MB_UserSaveScoreExResult
        [commands.SUB_MB_UserSaveScoreEx_RESULT] = {
            { t = "uint32_t", k = "resultCode" },                                                   -- 全局通用错误码
            { t = "uint8_t", k = "currencyType" },                                                  -- 货币类型
            { t = "int64_t", k = "score" },                                                         -- 存储金额数量
        },
        -- 新协议(双货币)取出金币:发送(3,1312) CMD_MB_UserTakeScoreEx
        [commands.SUB_MB_UserTakeScoreEx] = {
            { t = "uint32_t", k = "userID" },                                                       -- 用户标识
            { t = "char16_t", k = "insurePass", s = lengths.LEN_PASSWORD },                         -- 银行密码
            { t = "uint8_t", k = "currencyType" },                                                  -- 货币类型
            { t = "int64_t", k = "score" },                                                         -- 取款金额数量
            { t = "uint32_t", k = "clientAddr" },                                                   -- IP地址数字格式
            { t = "char16_t", k = "machineID", s = lengths.LEN_MACHINE_ID },                        -- 机器码
        },
        -- 新协议(双货币)取出金币:接收(3,1313) CMD_MB_UserTakeScoreExResult
        [commands.SUB_MB_UserTakeScoreEx_RESULT] = {
            { t = "uint32_t", k = "resultCode" },                                                   -- 全局通用错误码
            { t = "uint8_t", k = "currencyType" },                                                  -- 货币类型
            { t = "int64_t", k = "score" },                                                         -- 取款金额数量
        },
        -- 获取用户成长等级当前状态:发送(3,1502) CMD_MB_GetGrowUserStatus
        [commands.SUB_MB_GetGrowUserStatus] = {
            { t = "uint32_t", k = "userID" },                                                       -- 用户标识
            { t = "uint8_t", k = "experienceRenderMode" },                                          -- 经验值呈现模式 0为传统式(到达等级归零,杰总方案),1为累加式的(到达等级累加,A总方案)
        },
        -- 获取用户成长等级当前状态:接收(3,1503) CMD_MB_GetGrowUserStatusResult
        [commands.SUB_MB_GetGrowUserStatus_RESULT] = {
            { t = "uint8_t", k = "growLevel" },                                                     -- 成长等级/VIP等级
            { t = "uint32_t", k = "payCurrent" },                                                   -- 当前充值额
            { t = "uint32_t", k = "payRequire" },                                                   -- 需求充值额
            { t = "int64_t", k = "betCurrent" },                                                    -- 当前下注额
            { t = "int64_t", k = "betRequire" },                                                    -- 需求下注额
            { t = "uint16_t", k = "dailyAddition" },                                                -- 当前等级日转盘加成
            { t = "uint16_t", k = "dailyAdditionNext" },                                            -- 下个等级日转盘加成
            { t = "uint16_t", k = "weeklyAddition" },                                               -- 当前等级周转盘加成
            { t = "uint16_t", k = "weeklyAdditionNext" },                                           -- 下个等级周转盘加成
            { t = "uint16_t", k = "monthlyAddition" },                                              -- 当前等级月转盘加成
            { t = "uint16_t", k = "monthlyAdditionNext" },                                          -- 下个等级周转盘加成
        },
        -- 获取用户成长礼包状态:发送(3,1504) CMD_MB_Common_Query
        [commands.SUB_MB_GetGrowGiftStatus] = commonStructors.CMD_MB_Common_Query,
        -- 获取用户成长礼包状态:接收(3,1505) CMD_MB_GetGrowGiftStatusResult
        [commands.SUB_MB_GetGrowGiftStatus_RESULT] = {
            { t = "uint8_t", k = "growLevel" },                                                     -- 成长等级/VIP等级
            {
                t = {
                    { t = "uint8_t", k = "status" },                                                -- 当前奖励的状态：1未激活 2 可领取 3已领取 4可领取但时间未到
                    { t = "int64_t", k = "score" },                                                 -- 当前等级可领取的奖励，真金服需要除以100
                    { t = "int64_t", k = "nextScore" },                                             -- 下一级可领取到的奖励，真金服需要除以100
                    { t = "int64_t", k = "totalScore" },                                            -- 全部可领取的奖励
                }, k = "weekGift"                                                                   -- 周礼金
            },
            {
                t = {
                    { t = "uint8_t", k = "status" },                                                -- 当前奖励的状态：1未激活 2 可领取 3已领取 4可领取但时间未到
                    { t = "int64_t", k = "score" },                                                 -- 当前等级可领取的奖励，真金服需要除以100
                    { t = "int64_t", k = "nextScore" },                                             -- 下一级可领取到的奖励，真金服需要除以100
                    { t = "int64_t", k = "totalScore" },                                            -- 全部可领取的奖励
                }, k = "monthGift"                                                                  -- 月礼包
            },
            {
                t = {
                    { t = "uint8_t", k = "status" },                                                -- 当前奖励的状态：1未激活 2 可领取 3已领取 4可领取但时间未到
                    { t = "int64_t", k = "score" },                                                 -- 当前等级可领取的奖励，真金服需要除以100
                    { t = "int64_t", k = "nextScore" },                                             -- 下一级可领取到的奖励，真金服需要除以100
                    { t = "int64_t", k = "totalScore" },                                            -- 全部可领取的奖励
                }, k = "growGift"                                                                   -- 成长礼金
            },
        },
        -- 领取用户成长礼包奖励:发送(3,1506) CMD_MB_TakeGrowGift
        [commands.SUB_MB_TakeGrowGift] = {
            { t = "uint32_t", k = "userID" },                                                       -- 用户标识
            { t = "char16_t", k = "dynamicPass", s = lengths.LEN_PASSWORD },                        -- 动态密码
            { t = "char16_t", k = "ip", s = lengths.LEN_IP },                                       -- IP地址
            { t = "uint8_t", k = "typeID" },                                                        -- 1表示周礼金，2表示月礼金, 3表示成长礼金
        },
        -- 领取用户成长礼包奖励:接收(3,1507) CMD_MB_TakeGrowGiftResult
        [commands.SUB_MB_TakeGrowGift_RESULT] = {
            { t = "uint32_t", k = "errorCode" },                                                    -- 全局通用错误码
            { t = "uint8_t", k = "typeID" },                                                        -- 1表示周礼金，2表示月礼金, 3表示成长礼金
            { t = "uint16_t", k = "count" },                                                        -- 数量
            {
                t = {
                    { t = "uint8_t", k = "level" },                                                 -- 成长等级
                    { t = "int64_t", k = "score" },                                                 -- 奖励金币
                }, k = "items", s = 0                                                               -- 成长礼金奖励列表
            },
        },
        -- 获取成长等级配置(新版本):发送(3,1508) CMD_MB_Common_Query
        [commands.SUB_MB_GetGrowLevelConfig2] = commonStructors.CMD_MB_Common_Query,
        -- 获取成长等级配置(新版本):接收(3,1509) CMD_MB_GetGrowLevelConfig2Result
        [commands.SUB_MB_GetGrowLevelConfig2_RESULT] = {
            {
                t = {
                    { t = "uint8_t", k = "growLevel" },                                             -- 成长等级/VIP等级
                    { t = "int64_t", k = "betRequire" },                                            -- 成长到下一级需求打码量
                    { t = "uint32_t", k = "payRequire" },                                           -- 成长到下一级需求充值量
                    { t = "uint16_t", k = "dailyAddition" },                                        -- 当前等级日转盘加成百分比
                    { t = "uint16_t", k = "weeklyAddition" },                                       -- 当前等级周转盘加成百分比
                    { t = "uint16_t", k = "monthlyAddition" },                                      -- 当前等级月转盘加成百分比
                    { t = "int64_t", k = "weekGift" },                                              -- 成长周礼金
                    { t = "int64_t", k = "monthGift" },                                             -- 成长月礼包
                    { t = "int64_t", k = "growGift" },                                              -- 成长等级礼包
                    { t = "int64_t", k = "baseEnsureFirst" },                                       -- 破产补助首次奖励
                    { t = "int64_t", k = "baseEnsureSecond" },                                      -- 破产补助二次奖励
                }, k = "items", s = lengths.MAX_GROW_COUNT                                          -- 成长等级配置列表
            },
        },
        -- 获取转盘格子配置:发送(3,1510) CMD_MB_Common_Query
        [commands.SUB_MB_GetLotteryCell] = commonStructors.CMD_MB_Common_Query,
        -- 获取转盘格子配置:接收(3,1511) CMD_MB_GetLotteryCellResult
        [commands.SUB_MB_GetLotteryCell_RESULT] = {
            {
                t = {
                    {
                        t = {
                            { t = "uint32_t", k = "itemID" },                                       -- 物品标识
                            { t = "uint8_t", k = "levelRequire" },                                  -- 需求的成长等级
                            { t = "uint8_t", k = "currencyType" },                                  -- 货币类型
                            { t = "int64_t", k = "currencyValue" },                                 -- 奖励值
                            { t = "char16_t", k = "name", s = 32 },                                 -- 格子名称
                        }, k = "items", s = lengths.MAX_ITEM_COUNT                                  -- 大转盘格子列表
                    },
                }, k = "lotterys", s = lengths.MAX_LOTTERY_COUNT                                    -- 大转盘列表
            },
        },
        -- 获取用户当前的转盘状态:发送(3,1512) CMD_MB_GetLotteryUserStatus
        [commands.SUB_MB_GetLotteryUserStatus] = {
            { t = "uint32_t", k = "userID" },                                                       -- 用户标识
            { t = "uint16_t", k = "recordCount" },                                                  -- 记录数量
        },
        -- 获取用户当前的转盘状态:接收(3,1513) CMD_MB_GetLotteryUserStatusResult
        [commands.SUB_MB_GetLotteryUserStatus_RESULT] = {
            { t = "uint8_t", k = "growLevel" },                                                     -- 成长等级/VIP等级
            {
                t = {
                    { t = "uint16_t", k = "restCount" },                                            -- 剩余可使用次数
                    { t = "uint16_t", k = "addition" },                                             -- 当前等级可享受的加成比
                    { t = "uint32_t", k = "payProgressCurVal" },                                    -- 充值进度条-当前值
                    { t = "uint32_t", k = "payProgressMaxVal" },                                    -- 充值进度条-最大值
                    { t = "int64_t", k = "betProgressCurVal" },                                     -- 下注进度条-当前值
                    { t = "int64_t", k = "betProgressMaxVal" },                                     -- 下注进度条-最大值
                    { t = "uint8_t", k = "itemStatus", s = lengths.MAX_ITEM_COUNT },                -- 物品屏蔽表 0正常, 1屏蔽
                }, k = "lotterys", s = lengths.MAX_LOTTERY_COUNT                                    -- 转盘
            },
            { t = "uint8_t", k = "serialLogonDays" },                                               -- 连续登陆天数
            { t = "uint8_t", k = "logonAddition" },                                                 -- 连续登陆额外附加 百分值
            { t = "uint8_t", k = "logonDaysWeekCurVal" },                                           -- 本周已经登陆天数
            { t = "uint8_t", k = "logonDaysWeekMaxVal" },                                           -- 本周需求登陆天数
            { t = "uint8_t", k = "logonDaysMonthCurVal" },                                          -- 本月已经登陆天数
            { t = "uint8_t", k = "logonDaysMonthMaxVal" },                                          -- 本月需求登陆天数
            { t = "uint16_t", k = "recordCount" },                                                  -- 平台最新中奖历史记录数量
            {
                t = {
                    { t = "uint32_t", k = "queueIndex" },                                           -- 队列标识
                    { t = "time_t", k = "timestamp" },                                              -- 时间戳
                    { t = "uint8_t", k = "lotteryTypeID" },                                         -- 转盘类型 0日转盘,1周转盘,2月转盘
                    { t = "uint8_t", k = "itemIndex" },                                             -- 中奖的物品格子
                    { t = "uint8_t", k = "currencyType" },                                          -- 货币类型
                    { t = "int64_t", k = "currencyValue" },                                         -- 中奖的金币
                    { t = "int64_t", k = "additionValue" },                                         -- 附加的金币
                    { t = "char16_t", k = "nickName", s = lengths.LEN_NICKNAME },                   -- 用户昵称
                }, k = "items", s = 0                                                               -- 平台最新中奖历史记录
            },
        },
        -- 获取平台中奖最新广播消息列表:发送(3,1514) CMD_MB_GetLotteryPlatformRecordNewest
        [commands.SUB_MB_GetLotteryPlatformRecordNewest] = {
            { t = "uint32_t", k = "userID" },                                                       -- 用户标识
            { t = "uint16_t", k = "recordCount" },                                                  -- 记录数量
            { t = "uint32_t", k = "lowerBound" },                                                   -- 上一次提取的最大队列索引
            { t = "uint8_t", k = "lotteryType" },                                                   -- 转盘类型 0日转盘,1周转盘,2月转盘
        },
        -- 获取平台中奖最新广播消息列表:接收(3,1515) CMD_MB_GetLotteryPlatformRecordResult
        [commands.SUB_MB_GetLotteryPlatformRecordNewest_RESULT] = {
            { t = "uint16_t", k = "count" },                                                        -- 数量
            {
                t = {
                    { t = "uint32_t", k = "queueIndex" },                                           -- 队列标识
                    { t = "time_t", k = "timestamp" },                                              -- 时间戳
                    { t = "uint8_t", k = "lotteryTypeID" },                                         -- 转盘类型 0日转盘,1周转盘,2月转盘
                    { t = "uint8_t", k = "itemIndex" },                                             -- 中奖的物品格子
                    { t = "uint8_t", k = "currencyType" },                                          -- 货币类型
                    { t = "int64_t", k = "currencyValue" },                                         -- 中奖的金币
                    { t = "int64_t", k = "additionValue" },                                         -- 附加的金币
                    { t = "char16_t", k = "nickName", s = lengths.LEN_NICKNAME },                   -- 用户昵称
                }, k = "items", s = 0                                                               -- 记录列表
            },
        },
        -- 获取平台中奖历史广播消息列表:发送(3,1516) CMD_MB_GetLotteryPlatformRecordHistory
        [commands.SUB_MB_GetLotteryPlatformRecordHistory] = {
            { t = "uint16_t", k = "recordCount" },                                                  -- 记录数量
            { t = "uint32_t", k = "upperBound" },                                                   -- 上一次提取的最小队列索引
            { t = "uint8_t", k = "lotteryType" },                                                   -- 转盘类型 0日转盘,1周转盘,2月转盘
        },
        -- 获取平台中奖历史广播消息列表:接收(3,1517) CMD_MB_GetLotteryPlatformRecordResult
        [commands.SUB_MB_GetLotteryPlatformRecordHistory_RESULT] = {
            { t = "uint16_t", k = "count" },                                                        -- 数量
            {
                t = {
                    { t = "uint32_t", k = "queueIndex" },                                           -- 队列标识
                    { t = "time_t", k = "timestamp" },                                              -- 时间戳
                    { t = "uint8_t", k = "lotteryTypeID" },                                         -- 转盘类型 0日转盘,1周转盘,2月转盘
                    { t = "uint8_t", k = "itemIndex" },                                             -- 中奖的物品格子
                    { t = "uint8_t", k = "currencyType" },                                          -- 货币类型
                    { t = "int64_t", k = "currencyValue" },                                         -- 中奖的金币
                    { t = "int64_t", k = "additionValue" },                                         -- 附加的金币
                    { t = "char16_t", k = "nickName", s = lengths.LEN_NICKNAME },                   -- 用户昵称
                }, k = "items", s = 0                                                               -- 记录列表
            },
        },
        -- 获取用户自己中奖历史消息列表:发送(3,1518) CMD_MB_GetLotteryUserRecordHistory
        [commands.SUB_MB_GetLotteryUserRecordHistory] = {
            { t = "uint32_t", k = "userID" },                                                       -- 用户标识
            { t = "uint16_t", k = "pageSize" },                                                     -- 每页数量
            { t = "uint16_t", k = "pageIndex" },                                                    -- 页号，从1开始
        },
        -- 获取用户自己中奖历史消息列表:接收(3,1519) CMD_MB_GetLotteryUserRecordResult
        [commands.SUB_MB_GetLotteryUserRecordHistory_RESULT] = {
            { t = "uint16_t", k = "count" },                                                        -- 数量
            {
                t = {
                    { t = "time_t", k = "timestamp" },                                              -- 时间戳
                    { t = "uint8_t", k = "lotteryType" },                                           -- 转盘类型 0日转盘,1周转盘,2月转盘
                    { t = "uint8_t", k = "itemIndex" },                                             -- 中奖的物品格子
                    { t = "uint8_t", k = "currencyType" },                                          -- 货币类型
                    { t = "int64_t", k = "currencyValue" },                                         -- 基础奖励
                    { t = "int64_t", k = "additionValue" },                                         -- 附加奖励值
                }, k = "items", s = 0                                                               -- 中奖历史消息列表
            },
        },
        -- 转动转盘:发送(3,1520) CMD_MB_LotterySbin
        [commands.SUB_MB_LotterySbin] = {
            { t = "uint32_t", k = "userID" },                                                       -- 用户标识
            { t = "uint8_t", k = "lotteryType" },                                                   -- 转盘类型 0日转盘,1周转盘,2月转盘
            { t = "char16_t", k = "ip", s = lengths.LEN_IP },                                       -- IP地址
        },
        -- 转动转盘:接收(3,1521) CMD_MB_LotterySbinResult
        [commands.SUB_MB_LotterySbin_RESULT] = {
            { t = "uint32_t", k = "errorCode" },                                                    -- 全局通用错误码
            { t = "uint8_t", k = "lotteryType" },                                                   -- 转盘类型 0日转盘,1周转盘,2月转盘
            { t = "uint8_t", k = "itemIndex" },                                                     -- 中奖的物品格子
            { t = "uint8_t", k = "currencyType" },                                                  -- 货币类型
            { t = "int64_t", k = "currencyValue" },                                                 -- 基础奖励
            { t = "uint16_t", k = "additionPercent" },                                              -- 附加百分比
            { t = "int64_t", k = "additionValue" },                                                 -- 附加奖励值
            { t = "uint16_t", k = "restCount" },                                                    -- 剩余次数
        },
        -- 各种赠送方案配置:发送(3,1522) CMD_MB_Common_Query
        [commands.SUB_MB_GetLotteryPresentConfig] = commonStructors.CMD_MB_Common_Query,
        -- 各种赠送方案配置:接收(3,1523) CMD_MB_GetLotteryPresentConfigResult
        [commands.SUB_MB_GetLotteryPresentConfig_RESULT] = {
            { t = "uint16_t", k = "count" },                                                        -- 数量
            {
                t = {
                    { t = "uint8_t", k = "lotteryTypeID" },                                         -- 转盘类型 0日转盘,1周转盘,2月转盘
                    { t = "char16_t", k = "key", s = 16 },                                          -- 关键字
                    { t = "int64_t", k = "condition" },                                             -- 条件
                    { t = "uint8_t", k = "presentCount" },                                          -- 赠送次数
                }, k = "items", s = 0                                                               -- 赠送配置列表
            },
        },
        -- 绑定手机:发送(3,1282) CMD_MB_BindMobileNew
        [commands.SUB_MB_BindMobile] = {
            { t = "uint32_t", k = "userID" },                                                       -- 用户标识
            { t = "char16_t", k = "dynamicPass", s = lengths.LEN_PASSWORD },                        -- 动态密码
            { t = "char16_t", k = "mobile", s = 20 },                                               -- 手机号码
            { t = "char16_t", k = "logonPass", s = lengths.LEN_PASSWORD },                          -- 登陆密码
            { t = "char16_t", k = "checkCode", s = lengths.LEN_MOBILE_CHECKCODE },                  -- 手机验证码
            { t = "char16_t", k = "clientIP", s = lengths.LEN_IP },                                 -- IP地址
        },
        -- 绑定手机:接收(3,1283) CMD_MB_BindMobileResult
        [commands.SUB_MB_BindMobile_RESULT] = {
            { t = "uint32_t", k = "errorCode" },                                                    -- 全局通用错误码
            { t = "int64_t", k = "rewardScore" },                                                   -- 绑定手机奖励，扎花专用
        },
        -- 获取手机绑定状态:发送(3,1284) CMD_MB_Common_Query
        [commands.SUB_MB_GetBindMobileStatus] = commonStructors.CMD_MB_Common_Query,
        -- 获取手机绑定状态:接收(3,1285) CMD_MB_GetBindMobileStatusResult
        [commands.SUB_MB_GetBindMobileStatus_RESULT] = {
            { t = "uint8_t", k = "boBind" },                                                        -- 是否绑定了手机
            { t = "uint8_t", k = "boReward" },                                                      -- 是否领取了奖励
            { t = "uint8_t", k = "currencyType" },                                                  -- 货币类型
            { t = "int64_t", k = "rewardScore" },                                                   -- 可领取的奖励金额
        },
        -- 领取手机绑定奖励:发送(3,1286) CMD_MB_TakeBindMobileReward
        [commands.SUB_MB_TakeBindMobileReward] = {
            { t = "uint32_t", k = "userID" },                                                       -- 用户标识
            { t = "char16_t", k = "dynamicPass", s = lengths.LEN_PASSWORD },                        -- 动态密码
            { t = "char16_t", k = "iPAddress", s = lengths.LEN_IP },                                -- IP地址
        },
        -- 领取手机绑定奖励:接收(3,1287) CMD_MB_TakeBindMobileRewardResult
        [commands.SUB_MB_TakeBindMobileReward_RESULT] = {
            { t = "uint32_t", k = "errorCode" },                                                    -- 全局通用错误码
            { t = "uint8_t", k = "currencyType" },                                                  -- 货币类型
            { t = "int64_t", k = "rewardScore" },                                                   -- 奖励金额
        },
        -- 获取商品列表:发送(3,1210) CMD_MB_GetProductInfos
        [commands.SUB_MB_GetProductInfos] = {
            { t = "uint32_t", k = "userID" },                                                       -- 用户标识
            { t = "char16_t", k = "dynamicPass", s = lengths.LEN_PASSWORD },                        -- 动态密码
            { t = "uint32_t", k = "channelID" },                                                    -- 商品渠道标识
        },
        -- 获取商品列表:接收(3,1211) CMD_MB_GetProductInfosResult
        [commands.SUB_MB_GetProductInfos_RESULT] = {
            { t = "uint32_t", k = "errorCode" },                                                    -- 全局通用错误码
            { t = "uint8_t", k = "enable" },                                                        -- 是否激活0:否,1:是
            { t = "uint16_t", k = "productTypeCount" },                                             -- 礼包类型数量
            {
                t = {
                    { t = "uint32_t", k = "productTypeID" },                                        -- 礼包类型标识
                    { t = "char16_t", k = "productTypeName", s = lengths.LEN_PRODUCT_TYPE_NAME },   -- 礼包类型名称
                    { t = "uint8_t", k = "active" },                                                -- 是否激活
                    { t = "uint16_t", k = "productCount" },                                         -- 商品数量
                    {
                        t = {
                            { t = "uint32_t", k = "productID" },                                    -- 商品标识
                            { t = "uint32_t", k = "price" },                                        -- 价格
                            { t = "uint8_t", k = "awardType" },                                     -- 奖励类型
                            { t = "int64_t", k = "awardValue" },                                    -- 奖励值
                            { t = "uint8_t", k = "attachType" },                                    -- 附加类型
                            { t = "int64_t", k = "attachValue" },                                   -- 附加值
                        }, k = "productInfos", s = 0                                                -- 商品列表
                    },
                }, k = "productTypes", s = 0                                                        -- 礼包类型列表
            },
        },
        -- 查询某种礼包下商品的购买情况:发送(3,1212) CMD_MB_GetProductTypeActiveState
        [commands.SUB_MB_GetProductTypeActiveState] = {
            { t = "uint32_t", k = "userID" },                                                       -- 用户标识
            { t = "char16_t", k = "dynamicPass", s = lengths.LEN_PASSWORD },                        -- 动态密码
        },
        -- 查询某种礼包下商品的购买情况:接收(3,1213) CMD_MB_GetProductTypeActiveStateResult
        [commands.SUB_MB_GetProductTypeActiveState_RESULT] = {
            { t = "uint32_t", k = "errorCode" },                                                    -- 全局通用错误码
            { t = "uint16_t", k = "productTypeCount" },                                             -- 礼包类型数量
            {
                t = {
                    { t = "uint32_t", k = "productTypeID" },                                        -- 礼包类型标识
                    { t = "uint8_t", k = "active" },                                                -- 是否激活
                }, k = "results", s = 0                                                             -- 礼包类型激活状态列表
            },
        },
        -- 获取一次性商品购买情况:发送(3,1216) CMD_MB_GetProductActiveState
        [commands.SUB_MB_GetProductActiveState] = {
            { t = "uint32_t", k = "userID" },                                                       -- 用户标识
            { t = "char16_t", k = "dynamicPass", s = lengths.LEN_PASSWORD },                        -- 动态密码
            { t = "uint32_t", k = "productTypeID" },                                                -- 礼包类型标识
        },
        -- 获取一次性商品购买情况:接收(3,1217) CMD_MB_GetProductActiveStateResult
        [commands.SUB_MB_GetProductActiveState_RESULT] = {
            { t = "uint16_t", k = "productCount" },                                                 -- 商品数量
            { t = "uint8_t", k = "actives", s = 0 },                                                -- 是否激活
        },
        -- 获取商城商品角标:发送(3,1780) CMD_MB_GetProductExtendFlag
        [commands.SUB_MB_GetProductExtendFlag] = {
            { t = "uint32_t", k = "userID" },                                                       -- 用户标识
            { t = "char16_t", k = "typeName", s = 16 },                                             -- 目前是定值: shop 代表商城物品
            { t = "uint32_t", k = "channelID" },                                                    -- 充值渠道标识
        },
        -- 获取商城商品角标:接收(3,1781) CMD_MB_GetProductExtendFlagResult
        [commands.SUB_MB_GetProductExtendFlag_RESULT] = {
            { t = "uint32_t", k = "count" },                                                        -- 数量
            {
                t = {
                    { t = "uint32_t", k = "productID" },                                            -- 商品标识
                    { t = "uint32_t", k = "extendFlag" },                                           -- 扩展标识，1表示受欢迎的
                }, k = "items", s = 0                                                               -- 商城商品角标列表
            },
        },
        -- 获取支付/提现渠道:发送(3,2160) CMD_MB_Common_Query
        [commands.SUB_MB_GetPayChannel] = commonStructors.CMD_MB_Common_Query,
        -- 获取支付/提现渠道:接收(3,2161) CMD_MB_GetPayChannelResult
        [commands.SUB_MB_GetPayChannel_RESULT] = {
            { t = "uint16_t", k = "count" },                                                        -- 数量
            {
                t = {
                    { t = "uint32_t", k = "channelID" },                                            -- 充值渠道标识
                    { t = "char16_t", k = "channelName", s = 16 },                                  -- 充值渠道名称
                    { t = "int64_t", k = "minLimit" },                                              -- 提现限制最小值
                    { t = "int64_t", k = "maxLimit" },                                              -- 提现限制最大值
                    { t = "uint8_t", k = "boSupportWithdraw" },                                     -- 是否支持提现
                    { t = "char16_t", k = "supportBankCode", s = 256 },                             -- 银行码：cnpj|cpj
                    { t = "uint8_t", k = "defaultMask" },                                           -- 是否默认充值、提现渠道(废弃)
                }, k = "items", s = 0                                                               -- 充值渠道信息列表
            },
        },
        -- 查询充值结果(批量):发送(3,2240) CMD_MB_QueryOrderStatus
        [commands.SUB_MB_QueryOrderStatusBatch] = {
            { t = "uint32_t", k = "userID" },                                                       -- 用户标识
            { t = "uint16_t", k = "count" },                                                        -- 数量
            { t = "uint32_t", k = "onlineID", s = lengths.MAX_BATCH_ORDER_QUERY },                  -- 订单标识
        },
        -- 查询充值结果(批量):接收(3,2241) CMD_MB_QueryOrderStatusResult
        [commands.SUB_MB_QueryOrderStatusBatch_RESULT] = {
            { t = "uint32_t", k = "userID" },                                                       -- 用户标识
            { t = "uint16_t", k = "count" },                                                        -- 数量
            {
                t = {
                    { t = "uint32_t", k = "onlineID" },                                             -- 订单标识
                    { t = "uint8_t", k = "boSuccess" },                                             -- 是否成功
                    { t = "uint8_t", k = "boClosed" },                                              -- 是否关闭
                }, k = "items", s = lengths.MAX_BATCH_ORDER_QUERY                                   -- 批量查询结果列表
            },
        },
        -- 获取一次性商品购买情况Ex:发送(3,2242) CMD_MB_GetProductActiveState
        [commands.SUB_MB_GetProductActiveStateEx] = {
            { t = "uint32_t", k = "userID" },                                                       -- 用户标识
            { t = "char16_t", k = "dynamicPass", s = lengths.LEN_PASSWORD },                        -- 动态密码
            { t = "uint32_t", k = "productTypeID" },                                                -- 礼包类型标识
        },
        -- 获取一次性商品购买情况Ex:接收(3,2243) CMD_MB_GetProductActiveStateExResult
        [commands.SUB_MB_GetProductActiveStateEx_RESULT] = {
            { t = "uint32_t", k = "productType" },                                                  -- 礼包类型标识
            { t = "uint16_t", k = "productCount" },                                                 -- 商品数量
            { t = "uint8_t", k = "actives", s = 0 },                                                -- 是否激活0:否,1:是
        },
        -- 获取商品列表by礼包:发送(3,2244) CMD_MB_GetProductInfosByType
        [commands.SUB_MB_GetProductInfosByType] = {
            { t = "uint32_t", k = "channelID" },                                                    -- 推广渠道标识
            { t = "uint32_t", k = "productTypeID" },                                                -- 礼包类型标识
            { t = "uint32_t", k = "userID" },                                                       -- 用户标识
        },
        -- 获取商品列表by礼包:接收(3,2245) CMD_MB_GetProductInfosByTypeResult
        [commands.SUB_MB_GetProductInfosByType_RESULT] = {
            { t = "uint32_t", k = "userID" },                                                       -- 用户标识
            { t = "uint32_t", k = "productTypeID" },                                                -- 礼包类型标识
            { t = "uint16_t", k = "count" },                                                        -- 数量
            {
                t = {
                    { t = "uint32_t", k = "productID" },                                            -- 商品标识
                    { t = "uint32_t", k = "price" },                                                -- 价格
                    { t = "uint8_t", k = "awardType" },                                             -- 奖励类型
                    { t = "int64_t", k = "awardValue" },                                            -- 奖励值
                    { t = "uint8_t", k = "attachType" },                                            -- 附加类型
                    { t = "int64_t", k = "attachValue" },                                           -- 附加值
                }, k = "productInfos", s = 0                                                        -- 商品列表
            },
        },
        -- 查询最后一次充值订单信息:发送(3,1322) CMD_MB_GetLastPayInfo
        [commands.SUB_MB_GetLastPayInfo] = {
            { t = "uint32_t", k = "userID" },                                                       -- 用户标识
            { t = "char16_t", k = "dynamicPass", s = lengths.LEN_PASSWORD },                        -- 动态密码
            { t = "uint8_t", k = "currencyType" },                                                  -- 货币类型
        },
        -- 查询最后一次充值订单信息:接收(3,1323) CMD_MB_GetLastPayInfoResult
        [commands.SUB_MB_GetLastPayInfo_RESULT] = {
            { t = "uint32_t", k = "errorCode" },                                                    -- 全局通用错误码
            { t = "time_t", k = "dateTime" },                                                       -- 最后支付时间
            { t = "uint32_t", k = "payAmount" },                                                    -- 实际支付金额
            { t = "int64_t", k = "score" },                                                         -- 实际得到的游戏币
            { t = "uint32_t", k = "productTypeID" },                                                -- 礼包类型标识
            { t = "uint32_t", k = "productID" },                                                    -- 商品标识
        },
        -- 充值下单:发送(3,2000) CMD_MB_PlaceOrder
        [commands.SUB_MB_PlacePayOrder] = commonStructors.CMD_MB_PlaceOrder,
        -- 充值下单:接收(3,2001) CMD_MB_PlaceOrderResult
        [commands.SUB_MB_PlacePayOrder_RESULT] = commonStructors.CMD_MB_PlaceOrderResult,
        -- 获取提现配置:发送(3,1222) CMD_MB_Common_Query
        [commands.SUB_MB_GetWithdrawConfig] = commonStructors.CMD_MB_Common_Query,
        -- 获取提现配置:接收(3,1223) CMD_MB_GetWithdrawConfigResult
        [commands.SUB_MB_GetWithdrawConfig_RESULT] = {
            { t = "uint32_t", k = "errorCode" },                                                    -- 全局通用错误码
            { t = "char16_t", k = "url", s = lengths.LEN_URL_SHORT },                               -- 提现网址
            { t = "char16_t", k = "accountTypes", s = 64 },                                         -- 账户类型
            { t = "uint16_t", k = "count" },                                                        -- 数量
            {
                t = {
                    { t = "uint32_t", k = "productID" },                                            -- 商品标识
                    { t = "uint32_t", k = "price" },                                                -- 价格
                    { t = "uint8_t", k = "awardType" },                                             -- 奖励类型
                    { t = "int64_t", k = "awardValue" },                                            -- 奖励值
                    { t = "uint8_t", k = "attachType" },                                            -- 附加类型
                    { t = "int64_t", k = "attachValue" },                                           -- 附加值
                }, k = "items", s = 0                                                               -- 商品信息列表
            },
        },
        -- 获取提现历史记录:发送(3,1224) CMD_MB_GetWithdrawHistoryAccount
        [commands.SUB_MB_GetWithdrawHistoryAccount] = {
            { t = "uint32_t", k = "userID" },                                                       -- 用户标识
            { t = "char16_t", k = "dynamicPass", s = lengths.LEN_PASSWORD },                        -- 动态密码
        },
        -- 获取提现历史记录:接收(3,1225) CMD_MB_GetWithdrawHistoryAccountResult
        [commands.SUB_MB_GetWithdrawHistoryAccount_RESULT] = {
            { t = "uint16_t", k = "count" },                                                        -- 数量
            {
                t = {
                    { t = "char16_t", k = "accountType", s = 16 },                                  -- 账号类型
                    { t = "char16_t", k = "accountName", s = 50 },                                  -- 账号名称
                    { t = "char16_t", k = "accountNumber", s = 32 },                                -- 账号号码
                    { t = "char16_t", k = "idNumber", s = 32 },                                     -- 身份证号码
                }, k = "history", s = 0                                                             -- 历史账号列表
            },
        },
        -- 获取提现记录:发送(3,1226) CMD_MB_GetWithdrawRecord
        [commands.SUB_MB_GetWithdrawRecord] = {
            { t = "uint32_t", k = "userID" },                                                       -- 用户标识
            { t = "uint32_t", k = "pageSize" },                                                     -- 每页数量
            { t = "uint32_t", k = "pageIndex" },                                                    -- 页号，从1开始
        },
        -- 获取提现记录:接收(3,1227) CMD_MB_GetWithdrawRecordResult
        [commands.SUB_MB_GetWithdrawRecord_RESULT] = {
            { t = "uint32_t", k = "pageSize" },                                                     -- 每页数量
            { t = "uint32_t", k = "pageIndex" },                                                    -- 页号，从1开始
            { t = "uint32_t", k = "recordCount" },                                                  -- 记录总数
            { t = "uint32_t", k = "pageCount" },                                                    -- 总页数
            { t = "uint32_t", k = "count" },                                                        -- 数量
            {
                t = {
                    { t = "int32_t", k = "amount" },                                                -- 金额
                    { t = "time_t", k = "applyDate" },                                              -- 提现日期
                    { t = "uint32_t", k = "status" },                                               -- 状态
                    { t = "char16_t", k = "orderID", s = 33 },                                      -- 订单标识
                }, k = "items", s = 0                                                               -- 提现记录列表
            },
        },
        -- 提现下单:发送(3,2002) CMD_MB_PlaceOrder
        [commands.SUB_MB_PlaceWithdrawOrder] = commonStructors.CMD_MB_PlaceOrder,
        -- 提现下单:接收(3,2003) CMD_MB_PlaceOrderResult
        [commands.SUB_MB_PlaceWithdrawOrder_RESULT] = commonStructors.CMD_MB_PlaceOrderResult,
        -- 获取提现限制配置:发送(3,1782) CMD_MB_Common_Query
        [commands.SUB_MB_GetWithdrawCashLimit] = commonStructors.CMD_MB_Common_Query,
        -- 获取提现限制配置:接收(3,1783) CMD_MB_WithdrawLoadLimitConfigResult
        [commands.SUB_MB_GetWithdrawCashLimit_RESULT] = {
            { t = "int64_t", k = "limitMin" },                                                      -- 最小额度限制
            { t = "int64_t", k = "limitMax" },                                                      -- 最大额度限制
            {
                t = {
                    { t = "int64_t", k = "totalPayScore" },                                         -- 总充值金额
                    { t = "uint32_t", k = "dailyCount" },                                           -- 每个可提现次数
                    { t = "int64_t", k = "dailyFreeScore" },                                        -- 每日免费额度
                    { t = "int64_t", k = "scoreLimit" },                                            -- 提现金额限制
                }, k = "growLevellimit", s = lengths.MAX_GROW_COUNT                                 -- 每个成长等级的限制
            },
            { t = "uint8_t", k = "requireBindMobile" },                                             -- 是否需要绑定手机
        },
        -- 获取用户当前可否提现:发送(3,1220) CMD_MB_GetWithdrawStatus
        [commands.SUB_MB_GetWithdrawStatus] = {
            { t = "uint32_t", k = "userID" },                                                       -- 用户标识
            { t = "char16_t", k = "dynamicPass", s = lengths.LEN_PASSWORD },                        -- 动态密码
        },
        -- 获取用户当前可否提现:接收(3,1221) CMD_MB_GetWithdrawStatusResult
        [commands.SUB_MB_GetWithdrawStatus_RESULT] = {
            { t = "int64_t", k = "currentBetScore" },                                               -- 当前下注金额
            { t = "int64_t", k = "requireBetScore" },                                               -- 需求下注金额
            { t = "int64_t", k = "submitScore" },                                                   -- 提交金额
            { t = "int64_t", k = "totalPayCash" },                                                  -- 总充值金额
            { t = "int64_t", k = "totalWithdrawCash" },                                             -- 总提现金额
        },
        -- 获取最新一条提现记录:发送(3,1228) CMD_MB_Common_Query
        [commands.SUB_MB_GetLastWithdrawRecord] = commonStructors.CMD_MB_Common_Query,
        -- 获取最新一条提现记录:接收(3,1229) tagWithdrawRecord
        [commands.SUB_MB_GetLastWithdrawRecord_RESULT] = commonStructors.tagWithdrawRecord,
        -- 获取用户状态信息:发送(3,1580) CMD_MB_Common_Query
        [commands.SUB_MB_GetPayRebateInfo] = commonStructors.CMD_MB_Common_Query,
        -- 获取用户状态信息:接收(3,1581) CMD_MB_GetPayRebateInfoResult
        [commands.SUB_MB_GetPayRebateInfo_RESULT] = {
            { t = "uint16_t", k = "count" },                                                        -- 数量
            { t = "int64_t", k = "rebateScores", s = 0 },                                           -- 7日奖励列表(含当日) 可领取的奖励
        },
        -- 领取返利奖励:发送(3,1582) CMD_MB_GetPayRebateReward
        [commands.SUB_MB_GetPayRebateReward] = {
            { t = "uint32_t", k = "userID" },                                                       -- 用户标识
            { t = "char16_t", k = "dynamicPass", s = lengths.LEN_PASSWORD },                        -- 动态密码
            { t = "char16_t", k = "ip", s = lengths.LEN_IP },                                       -- IP地址
        },
        -- 领取返利奖励:接收(3,1583) CMD_MB_GetPayRebateRewardResult
        [commands.SUB_MB_GetPayRebateReward_RESULT] = {
            { t = "uint32_t", k = "errorCode" },                                                    -- 全局通用错误码
            { t = "int64_t", k = "rebateScore" },                                                   -- 此次领取的奖励，用于炸个花，如果错误，值为0
        },
        -- 加载弹窗参数配置:发送(3,2120) CMD_MB_Common_Query
        [commands.SUB_MB_PopWinPolicyLoadConfig] = commonStructors.CMD_MB_Common_Query,
        -- 加载弹窗参数配置:接收(3,2121) CMD_MB_PopWinPolicyLoadConfigResult
        [commands.SUB_MB_PopWinPolicyLoadConfig_RESULT] = {
            { t = "int64_t", k = "popWinPolicyBaseScore" },                                         -- 弹框引导：金额门槛
            { t = "int64_t", k = "popWinPolicyHistoryPayScore" },                                   -- 弹框引导：历史充值金额条件
            { t = "float", k = "fPopWinPolicyHistoryPayMultiple" },                                 -- 弹框引导：历史充值金额的倍数
            { t = "uint32_t", k = "popWinPolicyBigWinMultile" },                                    -- 弹框引导：高倍爆率触发倍数,默认10
        },
        -- 获取弹窗用户状态:发送(3,2122) CMD_MB_Common_Query
        [commands.SUB_MB_PopWinPolicyGetUserStatus] = commonStructors.CMD_MB_Common_Query,
        -- 获取弹窗用户状态:接收(3,2123) CMD_MB_PopWinPolicyGetUserStatusResult
        [commands.SUB_MB_PopWinPolicyGetUserStatus_RESULT] = {
            { t = "int64_t", k = "totalWithdrawScore" },                                            -- 用户总充值
            { t = "int64_t", k = "totalPayScore" },                                                 -- 用户总提现
            { t = "int64_t", k = "requireBetScore" },                                               -- 用户提现需求打码量
        },
        -- 查询分享配置:发送(3,1270) CMD_MB_Common_Query
        [commands.SUB_MB_GetShareConfig] = commonStructors.CMD_MB_Common_Query,
        -- 查询分享配置:接收(3,1271) CMD_MB_GetShareConfigResult
        [commands.SUB_MB_GetShareConfig_RESULT] = {
            { t = "uint8_t", k = "shareEnable" },                                                   -- 是否可以分享
            { t = "int64_t", k = "shareScore" },                                                    -- 分享可领取的奖励分数
            { t = "uint16_t", k = "shareUserLimits" },                                              -- 分享用户可领取次数
            { t = "uint16_t", k = "shareMachineLimits" },                                           -- 分享每机器可领取次数
            { t = "char16_t", k = "shareUrl", s = 256 },                                            -- 分享网址
            { t = "char16_t", k = "shareTips", s = 256 },                                           -- 分享说明
        },
        -- 更新分享入口点击次数:发送(3,1272) CMD_MB_UpdateShareCount
        [commands.SUB_MB_UpdateShareCount] = {
            { t = "uint32_t", k = "userID" },                                                       -- 用户标识
            { t = "char16_t", k = "machineID", s = lengths.LEN_MACHINE_ID },                        -- 机器码
        },
        -- 更新分享入口点击次数:接收(3,1273) CMD_MB_UpdateShareCountResult
        [commands.SUB_MB_UpdateShareCount_RESULT] = {
            { t = "uint32_t", k = "errorCode" },                                                    -- 全局通用错误码
            { t = "uint16_t", k = "restLimits" },                                                   -- 剩余次数
        },
        -- 领取分享奖励:发送(3,1274) CMD_MB_GetShareReward
        [commands.SUB_MB_GetShareReward] = {
            { t = "uint32_t", k = "userID" },                                                       -- 用户标识
            { t = "char16_t", k = "dynamicPass", s = lengths.LEN_PASSWORD },                        -- 动态密码
            { t = "char16_t", k = "machineID", s = lengths.LEN_MACHINE_ID },                        -- 机器码
            { t = "char16_t", k = "clientIP", s = lengths.LEN_IP },                                 -- IP地址
            { t = "uint8_t", k = "shareType" },                                                     -- 分享类型
        },
        -- 领取分享奖励:接收(3,1275) CMD_MB_GetShareRewardResult
        [commands.SUB_MB_GetShareReward_RESULT] = {
            { t = "uint32_t", k = "errorCode" },                                                    -- 全局通用错误码
            { t = "int64_t", k = "shareScore" },                                                    -- 领取的奖励分数
            { t = "uint16_t", k = "restLimits" },                                                   -- 剩余次数
        },
        -- 查询可分享剩余次数:发送(3,1276) CMD_MB_GetShareRestLimits
        [commands.SUB_MB_GetShareRestLimits] = {
            { t = "uint32_t", k = "userID" },                                                       -- 用户标识
            { t = "char16_t", k = "machineID", s = lengths.LEN_MACHINE_ID },                        -- 机器码
        },
        -- 查询可分享剩余次数:接收(3,1277) CMD_MB_GetShareRestLimitsResult
        [commands.SUB_MB_GetShareRestLimits_RESULT] = {
            { t = "uint32_t", k = "errorCode" },                                                    -- 全局通用错误码
            { t = "uint16_t", k = "restLimits" },                                                   -- 剩余次数
        },
        -- 从手机缓存中随机15个出来:发送(3,1278) CMD_MB_Common_Query
        [commands.SUB_MB_GetMobiles] = commonStructors.CMD_MB_Common_Query,
        -- 从手机缓存中随机15个出来:接收(3,1279) CMD_MB_GetMobilesResult
        [commands.SUB_MB_GetMobiles_RESULT] = {
            { t = "utf8", k = "mobiles", s = {45, lengths.LEN_INTERNATIONAL_MOBILE} },              -- 手机列表
        },
        -- 获取分享转盘全部格子物品:发送(3,1700) CMD_MB_Common_Query
        [commands.SUB_MB_ShareLotteryGetItems] = commonStructors.CMD_MB_Common_Query,
        -- 获取分享转盘全部格子物品:接收(3,1701) CMD_MB_ShareLotteryGetItemsResult
        [commands.SUB_MB_ShareLotteryGetItems_RESULT] = {
            { t = "uint16_t", k = "count" },                                                        -- 数量
            {
                t = {
                    { t = "uint32_t", k = "itemID" },                                               -- 格子配置标识
                    { t = "uint8_t", k = "itemIndex" },                                             -- 格子序号(从0开始)
                    { t = "uint8_t", k = "itemType" },                                              -- 格子类型
                    { t = "char16_t", k = "itemName", s = lengths.LEN_NICKNAME },                   -- 格子物品名称
                }, k = "items", s = 0                                                               -- 格子配置列表
            },
        },
        -- 获取分享转盘用户状态:发送(3,1702) CMD_MB_ShareLotteryGetUserStatus
        [commands.SUB_MB_ShareLotteryGetUserStatus] = {
            { t = "uint32_t", k = "userID" },                                                       -- 用户标识
            { t = "uint32_t", k = "pageSize" },                                                     -- 每页数量
            { t = "uint32_t", k = "pageIndex" },                                                    -- 页号，从1开始
        },
        -- 获取分享转盘用户状态:接收(3,1703) CMD_MB_ShareLotteryGetUserStatusResult
        [commands.SUB_MB_ShareLotteryGetUserStatus_RESULT] = {
            { t = "int64_t", k = "currentScore" },                                                  -- 当前累积的积分
            { t = "int64_t", k = "requireScore" },                                                  -- 需要的总现金
            { t = "uint32_t", k = "restCount" },                                                    -- 当前可抽奖的次数
            { t = "uint32_t", k = "stageID" },                                                      -- 提现档位ID,如果为0表示必须设置提现档位才能进行转盘抽奖
            { t = "uint32_t", k = "withdrawCount" },                                                -- 提现次数,如果为0表示用户从未提现过，即【新用户】
            { t = "int64_t", k = "scoreTimeExpired" },                                              -- 现金到期时间，为0则表示没有
            {
                t = {
                    { t = "uint32_t", k = "pageSize" },                                             -- 每页数量
                    { t = "uint32_t", k = "pageIndex" },                                            -- 页号，从1开始
                    { t = "uint32_t", k = "pageCount" },                                            -- 总页数
                    { t = "uint32_t", k = "recordCount" },                                          -- 记录总数
                    { t = "uint16_t", k = "count" },                                                -- 数量
                    {
                        t = {
                            { t = "uint16_t", k = "faceID" },                                       -- 图像标识
                            { t = "int64_t", k = "score" },                                         -- 分享提现的金币
                            { t = "time_t", k = "rewardDate" },                                     -- 分享提现的时间
                            { t = "char16_t", k = "nickName", s = lengths.LEN_NICKNAME },           -- 用户昵称
                        }, k = "items", s = 0                                                       -- 分享提现历史记录列表
                    },
                }, k = "history"                                                                    -- N条幸运玩家领取记录
            },
        },
        -- 获取分享提现历史记录开始:发送(3,1704) CMD_MB_ShareLotteryGetWithdrawHistory
        [commands.SUB_MB_ShareLotteryGetWithdrawHistory] = {
            { t = "uint32_t", k = "userID" },                                                       -- 用户标识
            { t = "uint32_t", k = "pageSize" },                                                     -- 每页数量
            { t = "uint32_t", k = "pageIndex" },                                                    -- 页号，从1开始
        },
        -- 获取分享提现历史记录开始:接收(3,1705) CMD_MB_ShareLotteryGetWithdrawHistoryResult
        [commands.SUB_MB_ShareLotteryGetWithdrawHistory_RESULT] = {
            { t = "uint32_t", k = "pageSize" },                                                     -- 每页数量
            { t = "uint32_t", k = "pageIndex" },                                                    -- 页号，从1开始
            { t = "uint32_t", k = "pageCount" },                                                    -- 总页数
            { t = "uint32_t", k = "recordCount" },                                                  -- 记录总数
            { t = "uint16_t", k = "count" },                                                        -- 数量
            {
                t = {
                    { t = "uint16_t", k = "faceID" },                                               -- 图像标识
                    { t = "int64_t", k = "score" },                                                 -- 分享提现的金币
                    { t = "time_t", k = "rewardDate" },                                             -- 分享提现的时间
                    { t = "char16_t", k = "nickName", s = lengths.LEN_NICKNAME },                   -- 用户昵称
                }, k = "items", s = 0                                                               -- 分享提现历史记录列表
            },
        },
        -- 获取分享提现邀请记录:发送(3,1706) CMD_MB_ShareLotteryGetInviteRecords
        [commands.SUB_MB_ShareLotteryGetInviteRecords] = {
            { t = "uint32_t", k = "userID" },                                                       -- 用户标识
            { t = "uint32_t", k = "pageSize" },                                                     -- 每页数量
            { t = "uint32_t", k = "pageIndex" },                                                    -- 页号，从1开始
        },
        -- 获取分享提现邀请记录:接收(3,1707) CMD_MB_ShareLotteryGetInviteRecordsResult
        [commands.SUB_MB_ShareLotteryGetInviteRecords_RESULT] = {
            { t = "uint32_t", k = "pageSize" },                                                     -- 每页数量
            { t = "uint32_t", k = "pageIndex" },                                                    -- 页号，从1开始
            { t = "uint32_t", k = "pageCount" },                                                    -- 总页数
            { t = "uint32_t", k = "recordCount" },                                                  -- 记录总数
            { t = "uint32_t", k = "bindCount" },                                                    -- 绑定手机的用户数
            { t = "uint32_t", k = "count" },                                                        -- 数量
            {
                t = {
                    { t = "uint16_t", k = "faceID" },                                               -- 图像标识
                    { t = "uint8_t", k = "isBindMobile" },                                          -- 是否绑定手机
                    { t = "uint8_t", k = "isBetScore" },                                            -- 打码量是否足够
                    { t = "time_t", k = "registeTime" },                                            -- 注册时间
                    { t = "char16_t", k = "nickName", s = lengths.LEN_NICKNAME },                   -- 用户昵称
                    { t = "uint8_t", k = "growLevel" },                                             -- 成长等级/VIP等级
                    { t = "int64_t", k = "spreadScore" },                                           -- 推广所得金币数量
                }, k = "items", s = 0                                                               -- 邀请记录列表
            },
        },
        -- 执行分享转盘抽奖:发送(3,1708) CMD_MB_ShareLotteryExecuteSbin
        [commands.SUB_MB_ShareLotteryExecuteSbin] = {
            { t = "uint32_t", k = "userID" },                                                       -- 用户标识
            { t = "char16_t", k = "dynamicPass", s = lengths.LEN_PASSWORD },                        -- 动态密码
            { t = "char16_t", k = "ip", s = lengths.LEN_IP },                                       -- IP地址
        },
        -- 执行分享转盘抽奖:接收(3,1709) CMD_MB_ShareLotteryExecuteSbinResult
        [commands.SUB_MB_ShareLotteryExecuteSbin_RESULT] = {
            { t = "uint32_t", k = "errorCode" },                                                    -- 全局通用错误码
            { t = "uint8_t", k = "itemIndex" },                                                     -- 中奖的格子号（从0开始）
            { t = "uint8_t", k = "itemType" },                                                      -- 中奖的格子类型(见物品定义中的格子类型说明)
            { t = "int64_t", k = "reward" },                                                        -- 中奖的值(免费次数/金币/现金)
            { t = "time_t", k = "scoreExpiredTime" },                                               -- 现金到期时间，为0则表示没有
        },
        -- 提取分享提现奖励:发送(3,1710) CMD_MB_ShareLotteryTakeReward
        [commands.SUB_MB_ShareLotteryTakeReward] = {
            { t = "uint32_t", k = "userID" },                                                       -- 用户标识
            { t = "char16_t", k = "dynamicPass", s = lengths.LEN_PASSWORD },                        -- 动态密码
            { t = "char16_t", k = "ip", s = lengths.LEN_IP },                                       -- IP地址
        },
        -- 提取分享提现奖励:接收(3,1711) CMD_MB_ShareLotteryTakeRewardResult
        [commands.SUB_MB_ShareLotteryTakeReward_RESULT] = {
            { t = "uint32_t", k = "errorCode" },                                                    -- 全局通用错误码
            { t = "int64_t", k = "score" },                                                         -- 当前收到的分数，炸花专用
            { t = "int64_t", k = "requireScore" },                                                  -- 下一次的需求分数，当前累积的会被清0
        },
        -- 获取分享提现档位信息:发送(3,1718) CMD_MB_Common_Query
        [commands.SUB_MB_ShareLotteryGetWithdrawStage] = commonStructors.CMD_MB_Common_Query,
        -- 获取分享提现档位信息:接收(3,1719) CMD_MB_ShareLotteryGetWithdrawStageResult
        [commands.SUB_MB_ShareLotteryGetWithdrawStage_RESULT] = {
            { t = "uint16_t", k = "count" },                                                        -- 数量
            {
                t = {
                    { t = "uint32_t", k = "stageID" },                                              -- 分享提现档位ID
                    { t = "int64_t", k = "stageScore" },                                            -- 分享提现档位积分
                    { t = "uint8_t", k = "newUserEnable" },                                         -- 是否允许新用户选择
                }, k = "items", s = lengths.SHARE_LOTTERY_STAGE_COUNT                               -- 档位信息列表
            },
        },
        -- 选择分享提现档位:发送(3,1720) CMD_MB_ShareLotterySetWithdrawStage
        [commands.SUB_MB_ShareLotterySetWithdrawStage] = {
            { t = "uint32_t", k = "userID" },                                                       -- 用户标识
            { t = "uint32_t", k = "stageID" },                                                      -- 分享提现档位ID
            { t = "int64_t", k = "stageScore" },                                                    -- 分享提现档位积分
            { t = "char16_t", k = "dynamicPass", s = lengths.LEN_PASSWORD },                        -- 动态密码
            { t = "char16_t", k = "ip", s = lengths.LEN_IP },                                       -- IP地址
        },
        -- 选择分享提现档位:接收(3,1721) CMD_MB_ShareLotterySetWithdrawStageResult
        [commands.SUB_MB_ShareLotterySetWithdrawStage_RESULT] = {
            { t = "uint32_t", k = "errorCode" },                                                    -- 全局通用错误码
            { t = "uint32_t", k = "stageID" },                                                      -- 分享提现档位ID
            { t = "int64_t", k = "stageScore" },                                                    -- 分享提现档位积分
        },
        -- 执行分享转盘连续抽奖:发送(3,1722) CMD_MB_ShareLotteryExecuteSbinContinuous
        [commands.SUB_MB_ShareLotteryExecuteSbinContinuous] = {
            { t = "uint32_t", k = "userID" },                                                       -- 用户标识
            { t = "uint16_t", k = "count" },                                                        -- 数量
            { t = "char16_t", k = "dynamicPass", s = lengths.LEN_PASSWORD },                        -- 动态密码
            { t = "char16_t", k = "ip", s = lengths.LEN_IP },                                       -- IP地址
        },
        -- 执行分享转盘连续抽奖:接收(3,1723) CMD_MB_ShareLotteryExecuteSbinContinuousResult
        [commands.SUB_MB_ShareLotteryExecuteSbinContinuous_RESULT] = {
            { t = "uint32_t", k = "errorCode" },                                                    -- 全局通用错误码
            { t = "uint16_t", k = "restCount" },                                                    -- 剩余抽奖次数
            { t = "int64_t", k = "totalCash" },                                                     -- 全部得奖的现金
            { t = "int64_t", k = "totalScore" },                                                    -- 全部得奖的金币
            { t = "uint16_t", k = "totalFreeCount" },                                               -- 全部得奖的免费次数
            { t = "time_t", k = "scoreExpiredTime" },                                               -- 现金到期时间，为0则表示没有
            { t = "uint16_t", k = "count" },                                                        -- 最大只能连抽100次(此值和提交上来的值不一定相同)
            {
                t = {
                    { t = "uint8_t", k = "itemIndex" },                                             -- 中奖的格子号（从0开始）
                    { t = "uint8_t", k = "itemType" },                                              -- 中奖的格子类型(见物品定义中的格子类型说明)
                    { t = "int64_t", k = "reward" },                                                -- 中奖的值(免费次数/金币/现金)
                }, k = "items", s = 0                                                               -- 抽奖结果
            },
        },
        -- 获取分享升级返利用户状态:发送(3,1712) CMD_MB_Common_Query
        [commands.SUB_MB_ShareLotteryGetSpreadRebateStatus] = commonStructors.CMD_MB_Common_Query,
        -- 获取分享升级返利用户状态:接收(3,1713) CMD_MB_ShareLotteryGetSpreadRebateStatusResult
        [commands.SUB_MB_ShareLotteryGetSpreadRebateStatus_RESULT] = {
            { t = "int64_t", k = "currentSpreadScore" },                                            -- 当前推荐奖励
            { t = "int64_t", k = "maxSpreadScore" },                                                -- 最高可领取的奖励(理论值)
            { t = "uint32_t", k = "payUserCount" },                                                 -- 已充值人数
        },
        -- 提取分享升级返利奖励:发送(3,1714) CMD_MB_ShareLotteryTakeSpreadRebate
        [commands.SUB_MB_ShareLotteryTakeSpreadRebate] = {
            { t = "uint32_t", k = "userID" },                                                       -- 用户标识
            { t = "char16_t", k = "dynamicPass", s = lengths.LEN_PASSWORD },                        -- 动态密码
            { t = "char16_t", k = "ip", s = lengths.LEN_IP },                                       -- IP地址
        },
        -- 提取分享升级返利奖励:接收(3,1715) CMD_MB_ShareLotteryTakeSpreadRebateResult
        [commands.SUB_MB_ShareLotteryTakeSpreadRebate_RESULT] = {
            { t = "int64_t", k = "score" },                                                         -- 奖励的分数
        },
        -- 获取分享升级返利配置:发送(3,1716) CMD_MB_Common_Query
        [commands.SUB_MB_ShareLotteryGetSpreadRebateConfig] = commonStructors.CMD_MB_Common_Query,
        -- 获取分享升级返利配置:接收(3,1717) CMD_MB_ShareLotteryGetSpreadRebateConfigResult
        [commands.SUB_MB_ShareLotteryGetSpreadRebateConfig_RESULT] = {
            { t = "int64_t", k = "score", s = lengths.MAX_GROW_COUNT },                             -- 返利的积分列表
        },
        -- 获取【分享好友充值返利】配置:发送(3,1750) CMD_MB_Common_Query
        [commands.SUB_MB_SharePayRebateLoadConfig] = commonStructors.CMD_MB_Common_Query,
        -- 获取【分享好友充值返利】配置:接收(3,1751) CMD_MB_SharePayRebateLoadConfigResult
        [commands.SUB_MB_SharePayRebateLoadConfig_RESULT] = {
            { t = "uint32_t", k = "value", s = 2 },                                                 -- [0]=下家分成百分比, [1]=下家的下家分成百分比
        },
        -- 获取【分享好友充值返利】状态:发送(3,1752) CMD_MB_Common_Query
        [commands.SUB_MB_SharePayRebateGetStatus] = commonStructors.CMD_MB_Common_Query,
        -- 获取【分享好友充值返利】状态:接收(3,1753) CMD_MB_SharePayRebateGetStatusResult
        [commands.SUB_MB_SharePayRebateGetStatus_RESULT] = {
            { t = "int64_t", k = "score" },                                                         -- 可领取的收益
            { t = "int64_t", k = "totalScore" },                                                    -- 总收益
            { t = "uint32_t", k = "totalFriendsCount" },                                            -- 总注册的下家人数
        },
        -- 获取【分享好友充值返利】记录:发送(3,1754) CMD_MB_SharePayRebateGetRecord
        [commands.SUB_MB_SharePayRebateGetRecord] = {
            { t = "uint32_t", k = "userID" },                                                       -- 用户标识
            { t = "uint32_t", k = "pageIndex" },                                                    -- 页号，从1开始
            { t = "uint32_t", k = "pageSize" },                                                     -- 每页数量
        },
        -- 获取【分享好友充值返利】记录:接收(3,1755) CMD_MB_SharePayRebateGetRecordResult
        [commands.SUB_MB_SharePayRebateGetRecord_RESULT] = {
            { t = "uint32_t", k = "pageIndex" },                                                    -- 页号，从1开始
            { t = "uint32_t", k = "pageSize" },                                                     -- 每页数量
            { t = "uint32_t", k = "totalRecordCount" },                                             -- 总记录数
            { t = "uint16_t", k = "count" },                                                        -- 数量
            {
                t = {
                    { t = "uint32_t", k = "gameID" },                                               -- 游戏标识
                    { t = "int64_t", k = "payCash" },                                               -- 支付金额
                    { t = "int64_t", k = "rebateScore" },                                           -- 返利金额
                    { t = "uint8_t", k = "span" },                                                  -- 差距，1表示直属下级,2代表下级的下级
                    { t = "char16_t", k = "nickName", s = lengths.LEN_NICKNAME },                   -- 下级用户的昵称
                }, k = "items", s = 0                                                               -- 记录列表
            },
        },
        -- 提取【分享好友充值返利】奖励:发送(3,1756) CMD_MB_SharePayRebateTakeReward
        [commands.SUB_MB_SharePayRebateTakeReward] = {
            { t = "uint32_t", k = "userID" },                                                       -- 用户标识
            { t = "int64_t", k = "score" },                                                         -- 领取的奖励
            { t = "char16_t", k = "dynamicPass", s = lengths.LEN_PASSWORD },                        -- 动态密码
            { t = "char16_t", k = "clientIP", s = lengths.LEN_IP },                                 -- IP地址
            { t = "char16_t", k = "machineCode", s = lengths.LEN_MACHINE_ID },                      -- 机器码
        },
        -- 提取【分享好友充值返利】奖励:接收(3,1757) CMD_MB_SharePayRebateTakeRewardResult
        [commands.SUB_MB_SharePayRebateTakeReward_RESULT] = {
            { t = "uint32_t", k = "errorCode" },                                                    -- 全局通用错误码
            { t = "int64_t", k = "score" },                                                         -- 领取到的奖励
        },
        -- 获取分享好友宝箱配置:发送(3,1760) CMD_MB_Common_Query
        [commands.SUB_MB_ShareTreasureChestLoadConfig] = commonStructors.CMD_MB_Common_Query,
        -- 获取分享好友宝箱配置:接收(3,1761) CMD_MB_ShareTreasureChestLoadConfigResult
        [commands.SUB_MB_ShareTreasureChestLoadConfig_RESULT] = {
            {
                t = {
                    { t = "uint32_t", k = "friendsRequire" },                                       -- 需求的拉新数量
                    { t = "int64_t", k = "score" },                                                 -- 可获得奖励金币
                }, k = "items", s = lengths.MAX_CHEST_COUNT                                         -- 宝箱配置列表
            },
        },
        -- 获取分享好友宝箱状态:发送(3,1762) CMD_MB_Common_Query
        [commands.SUB_MB_ShareTreasureChestGetStatus] = commonStructors.CMD_MB_Common_Query,
        -- 获取分享好友宝箱状态:接收(3,1763) CMD_MB_ShareTreasureChestGetStatusResult
        [commands.SUB_MB_ShareTreasureChestGetStatus_RESULT] = {
            { t = "int64_t", k = "status" },                                                        -- 宝箱状态
            { t = "int64_t", k = "score" },                                                         -- 当前轮可领取的积分
            { t = "int64_t", k = "totalScore" },                                                    -- 历史总积分(可领取+未领取)
            { t = "uint32_t", k = "currentFriendCount" },                                           -- 当前轮有效用户数量
            { t = "uint32_t", k = "totalFriendCount" },                                             -- 总拉新人数(含无效用户数量)
        },
        -- 提取分享好友宝箱奖励:发送(3,1764) CMD_MB_ShareTreasureChestTakeReward
        [commands.SUB_MB_ShareTreasureChestTakeReward] = {
            { t = "uint32_t", k = "userID" },                                                       -- 用户标识
            { t = "uint8_t", k = "chestID" },                                                       -- 宝箱ID [1-8]
            { t = "int64_t", k = "chestScore" },                                                    -- 宝箱奖励的金币
            { t = "char16_t", k = "dynamicPass", s = lengths.LEN_PASSWORD },                        -- 动态密码
            { t = "char16_t", k = "clientIP", s = lengths.LEN_IP },                                 -- IP地址
            { t = "char16_t", k = "machineCode", s = lengths.LEN_MACHINE_ID },                      -- 机器码
        },
        -- 提取分享好友宝箱奖励:接收(3,1765) CMD_MB_ShareTreasureChestTakeRewardResult
        [commands.SUB_MB_ShareTreasureChestTakeReward_RESULT] = {
            { t = "uint32_t", k = "errorCode" },                                                    -- 全局通用错误码
            { t = "int64_t", k = "takeScore" },                                                     -- 这一次操作领取到的奖励(炸化专用)
            { t = "int64_t", k = "status" },                                                        -- 宝箱状态(更新界面数据)
            { t = "int64_t", k = "score" },                                                         -- 当前轮可领取的积分(更新界面数据)
            { t = "int64_t", k = "totalScore" },                                                    -- 历史总积分(可领取+未领取)(更新界面数据)
        },
        -- 获取活动配置:发送(3,1300) CMD_MB_GetActivityConfig
        [commands.SUB_MB_GetActivityConfig] = {
            { t = "uint32_t", k = "userID" },                                                       -- 用户标识
            { t = "uint16_t", k = "count" },                                                        -- 数量
        },
        -- 获取活动配置:接收(3,1301) CMD_MB_GetActivityConfigResult
        [commands.SUB_MB_GetActivityConfig_RESULT] = {
            { t = "uint32_t", k = "errorCode" },                                                    -- 全局通用错误码
            { t = "uint16_t", k = "count" },                                                        -- 数量
            {
                t = {
                    { t = "char16_t", k = "title", s = 64 },                                        -- 活动标题
                    { t = "char16_t", k = "imgUrlMain", s = 128 },                                  -- 小图地址
                    { t = "char16_t", k = "imgUrlContent", s = 128 },                               -- 大图地址
                }, k = "items", s = 0                                                               -- 活动列表
            },
        },
        -- 系统提示信息:发送(3,1290) CMD_MB_Common_Query
        [commands.SUB_MB_GetSystemNotice] = commonStructors.CMD_MB_Common_Query,
        -- 系统提示信息:接收(3,1291) CMD_MB_GetSystemNoticeResult
        [commands.SUB_MB_GetSystemNotice_RESULT] = {
            { t = "uint32_t", k = "errorCode" },                                                    -- 全局通用错误码
            { t = "uint16_t", k = "count" },                                                        -- 数量
            {
                t = {
                    { t = "char16_t", k = "title", s = 64 },                                        -- 消息标题
                    { t = "uint32_t", k = "keepSeconds" },                                          -- 保留时长(秒)
                    { t = "char16_t", k = "content", s = 4000 },                                    -- 消息内容
                }, k = "items", s = 0                                                               -- 系统消息列表
            },
        },
        -- 获取任务列表:发送(3,230) CMD_GP_TaskListEx
        [commands.SUB_GP_TASK_LIST_EX] = {
            { t = "uint32_t", k = "userID" },                                                       -- 用户标识
            { t = "uint32_t", k = "taskTypeMask" },                                                 -- 任务类型掩码
            { t = "char16_t", k = "dynamicPass", s = lengths.LEN_PASSWORD },                        -- 动态密码
        },
        -- 获取任务列表:接收(3,231) CMD_GP_TaskListExResult
        [commands.SUB_GP_TASK_LIST_EX_RESULT] = {
            { t = "uint32_t", k = "errorCode" },                                                    -- 全局通用错误码
            { t = "uint32_t", k = "count" },                                                        -- 数量
            {
                t = {
                    { t = "int32_t", k = "taskID" },                                                -- 任务标识
                    { t = "int32_t", k = "taskType" },                                              -- 任务类型
                    { t = "int32_t", k = "taskStatus" },                                            -- 任务状态
                    { t = "int64_t", k = "taskCurProgress" },                                       -- 当前进度
                    { t = "int64_t", k = "taskMaxProgress" },                                       -- 最大进度
                    { t = "uint16_t", k = "taskOperationType" },                                    -- 操作类型
                    { t = "uint16_t", k = "taskOperationSubType" },                                 -- 操作子类型
                    { t = "uint16_t", k = "rewardType" },                                           -- 奖励类型
                    { t = "int64_t", k = "rewardValue" },                                           -- 奖励值
                    { t = "int32_t", k = "gameKindID" },                                            -- 游戏类型
                    { t = "char16_t", k = "taskDesc", s = 128 },                                    -- 任务描述
                }, k = "items", s = 0                                                               -- 任务列表
            },
        },
        -- 领取任务奖励:发送(3,232) CMD_GP_TaskRewardEx
        [commands.SUB_GP_TaskRewardEx] = {
            { t = "uint32_t", k = "userID" },                                                       -- 用户标识
            { t = "char16_t", k = "dynamicPass", s = lengths.LEN_PASSWORD },                        -- 动态密码
            { t = "uint32_t", k = "taskID" },                                                       -- 任务标识
            { t = "char16_t", k = "clientIP", s = 16 },                                             -- IP地址
        },
        -- 领取任务奖励:接收(3,233) CMD_GP_TaskListExResult
        [commands.SUB_GP_TASK_REWARD_EX_RESULT] = {
            { t = "uint32_t", k = "errorCode" },                                                    -- 全局通用错误码
            { t = "uint32_t", k = "count" },                                                        -- 数量
            {
                t = {
                    { t = "int32_t", k = "taskID" },                                                -- 任务标识
                    { t = "int32_t", k = "taskType" },                                              -- 任务类型
                    { t = "int32_t", k = "taskStatus" },                                            -- 任务状态
                    { t = "int64_t", k = "taskCurProgress" },                                       -- 当前进度
                    { t = "int64_t", k = "taskMaxProgress" },                                       -- 最大进度
                    { t = "uint16_t", k = "taskOperationType" },                                    -- 操作类型
                    { t = "uint16_t", k = "taskOperationSubType" },                                 -- 操作子类型
                    { t = "uint16_t", k = "rewardType" },                                           -- 奖励类型
                    { t = "int64_t", k = "rewardValue" },                                           -- 奖励值
                    { t = "int32_t", k = "gameKindID" },                                            -- 游戏类型
                    { t = "char16_t", k = "taskDesc", s = 128 },                                    -- 任务描述
                }, k = "items", s = 0                                                               -- 任务列表
            },
        },
        -- 获取任务活跃度全局配置表:发送(3,1230) CMD_MB_Common_Query
        [commands.SUB_MB_GetTaskActivenessConfig] = commonStructors.CMD_MB_Common_Query,
        -- 获取任务活跃度全局配置表:接收(3,1231) CMD_MB_GetTaskActivenessConfigResult
        [commands.SUB_MB_GetTaskActivenessConfig_RESULT] = {
            { t = "uint32_t", k = "errorCode" },                                                    -- 全局通用错误码
            { t = "uint16_t", k = "count" },                                                        -- 数量
            {
                t = {
                    { t = "uint32_t", k = "configID" },                                             -- 配置标识
                    { t = "uint32_t", k = "activeness" },                                           -- 是否激活
                    { t = "uint8_t", k = "rewardType" },                                            -- 奖励类型
                    { t = "int64_t", k = "rewardValue" },                                           -- 奖励值
                }, k = "items", s = 0                                                               -- 任务活跃度配置列表
            },
        },
        -- 获取当前可领奖励状态:发送(3,1232) CMD_MB_GetUserTaskActivenessStatus
        [commands.SUB_MB_GetUserTaskActivenessStatus] = {
            { t = "uint32_t", k = "userID" },                                                       -- 用户标识
            { t = "char16_t", k = "dynamicPass", s = lengths.LEN_PASSWORD },                        -- 动态密码
        },
        -- 获取当前可领奖励状态:接收(3,1233) CMD_MB_GetUserTaskActivenessStatusResult
        [commands.SUB_MB_GetUserTaskActivenessStatus_RESULT] = {
            { t = "uint32_t", k = "activeness" },                                                   -- 活跃度值
            { t = "uint16_t", k = "count" },                                                        -- 数量
            {
                t = {
                    { t = "uint32_t", k = "configID" },                                             -- 配置标识
                    { t = "uint8_t", k = "status" },                                                -- 任务状态
                }, k = "items", s = lengths.MAX_TASK_ACTIVENESS_COUNT                               -- 任务活跃度状态列表
            },
        },
        -- 领取活跃度奖励:发送(3,1234) CMD_MB_ActivenessReward
        [commands.SUB_MB_ActivenessReward] = {
            { t = "uint32_t", k = "userID" },                                                       -- 用户标识
            { t = "char16_t", k = "dynamicPass", s = lengths.LEN_PASSWORD },                        -- 动态密码
            { t = "uint32_t", k = "configID" },                                                     -- 配置标识
            { t = "char16_t", k = "clientIP", s = lengths.LEN_IP },                                 -- IP地址
        },
        -- 领取活跃度奖励:接收(3,1235) CMD_MB_ActivenessRewardResult
        [commands.SUB_MB_ActivenessReward_RESULT] = {
            { t = "uint32_t", k = "errorCode" },                                                    -- 全局通用错误码
            { t = "uint32_t", k = "configID" },                                                     -- 配置标识
            { t = "uint8_t", k = "rewardType" },                                                    -- 奖励类型
            { t = "int64_t", k = "rewardValue" },                                                   -- 奖励值
        },
        -- 加载配置:发送(3,2180) CMD_MB_Common_Query
        [commands.SUB_MB_AlmzLoadConfig] = commonStructors.CMD_MB_Common_Query,
        -- 加载配置:接收(3,2181) CMD_MB_AlmzLoadConfigResult
        [commands.SUB_MB_AlmzLoadConfig_RESULT] = {
            { t = "uint16_t", k = "items", s = lengths.MAX_GROW_COUNT },                            -- 救援金等级配置列表
        },
        -- 获取用户状态:发送(3,2182) CMD_MB_Common_Query
        [commands.SUB_MB_AlmzGetUserStatus] = commonStructors.CMD_MB_Common_Query,
        -- 获取用户状态:接收(3,2183) CMD_MB_AlmzGetUserStatusResult
        [commands.SUB_MB_AlmzGetUserStatus_RESULT] = {
            {
                t = {
                    { t = "uint8_t", k = "status" },                                                -- 状态
                    { t = "int64_t", k = "lossScore" },                                             -- 输的金币数
                    { t = "int64_t", k = "almzScore" },                                             -- 救援金奖励的金币数
                    { t = "uint8_t", k = "growLevel" },                                             -- 成长等级/VIP等级
                }, k = "yesterday"                                                                  -- 昨日状态
            },
            {
                t = {
                    { t = "uint8_t", k = "status" },                                                -- 状态
                    { t = "int64_t", k = "lossScore" },                                             -- 输的金币数
                    { t = "int64_t", k = "almzScore" },                                             -- 救援金奖励的金币数
                    { t = "uint8_t", k = "growLevel" },                                             -- 成长等级/VIP等级
                }, k = "today"                                                                      -- 今日状态
            },
        },
        -- 领取奖励:发送(3,2184) CMD_MB_Common_TakeScore
        [commands.SUB_MB_AlmzTakeReward] = commonStructors.CMD_MB_Common_TakeScore,
        -- 领取奖励:接收(3,2185) CMD_MB_AlmzTakeRewardResult
        [commands.SUB_MB_AlmzTakeReward_RESULT] = {
            { t = "uint32_t", k = "errorCode" },                                                    -- 全局通用错误码
            { t = "int64_t", k = "score" },                                                         -- 金币
        },
        -- 加载配置:发送(3,2200) CMD_MB_Common_Query
        [commands.SUB_MB_ExperienceScoreLoadConfig] = commonStructors.CMD_MB_Common_Query,
        -- 加载配置:接收(3,2201) CMD_MB_ExperienceScoreLoadConfigResult
        [commands.SUB_MB_ExperienceScoreLoadConfig_RESULT] = {
            { t = "int64_t", k = "experienceScore" },                                               -- 每次赠送体验金数量
            { t = "int32_t", k = "experienceCount" },                                               -- 每日赠送体验金总次数 -1为无限次
            { t = "int64_t", k = "experienceLimitMin" },                                            -- 体验金赠送门槛
        },
        -- 当前用户体验金状态:发送(3,2202) CMD_MB_Common_Query
        [commands.SUB_MB_ExperienceScoreGetUserStatus] = commonStructors.CMD_MB_Common_Query,
        -- 当前用户体验金状态:接收(3,2203) CMD_MB_ExperienceScoreGetUserStatusResult
        [commands.SUB_MB_ExperienceScoreGetUserStatus_RESULT] = {
            { t = "int32_t", k = "experienceRestCount" },                                           -- 剩余可领取体验金的次数
        },
        -- 提取体验金奖励:发送(3,2204) CMD_MB_ExperienceScoreTakeReward
        [commands.SUB_MB_ExperienceScoreTakeReward] = {
            { t = "uint32_t", k = "userID" },                                                       -- 用户标识
            { t = "char16_t", k = "dynamicPass", s = lengths.LEN_PASSWORD },                        -- 动态密码
        },
        -- 提取体验金奖励:接收(3,2205) CMD_MB_ExperienceScoreTakeRewardResult
        [commands.SUB_MB_ExperienceScoreTakeReward_RESULT] = {
            { t = "uint32_t", k = "errorCode" },                                                    -- 全局通用错误码
            { t = "int32_t", k = "experienceRestCount" },                                           -- 剩余可领取体验金的次数
            { t = "int64_t", k = "score" },                                                         -- 金币
            { t = "uint32_t", k = "userID" },                                                       -- 用户标识
        },
        -- 获取在线用户数量:发送(3,1260) CMD_MB_GetOnlineUserInfo
        [commands.SUB_MB_GetOnlineUserInfo] = {
            { t = "uint32_t", k = "userID" },                                                       -- 用户标识
            { t = "uint16_t", k = "kindID" },                                                       -- 游戏类型标识
        },
        -- 获取在线用户数量:接收(3,1261) CMD_MB_GetOnlineUserInfoResult
        [commands.SUB_MB_GetOnlineUserInfo_RESULT] = {
            { t = "uint16_t", k = "count" },                                                        -- 数量
            {
                t = {
                    { t = "uint16_t", k = "kindID" },                                               -- 游戏种类
                    { t = "uint16_t", k = "sortID" },                                               -- 排序ID
                    { t = "uint16_t", k = "serverKind" },                                           -- 服务类型
                    { t = "uint32_t", k = "onlineCount" },                                          -- 在线人数
                }, k = "items", s = 0                                                               -- 在线信息列表
            },
        },
        -- 获取跑马灯滚动信息:发送(3,1262) CMD_MB_GetScrollMessage
        [commands.SUB_MB_GetScrollMessage] = {
            { t = "uint32_t", k = "userID" },                                                       -- 用户标识
            { t = "uint32_t", k = "queueIndex" },                                                   -- 最大队列索引号
        },
        -- 获取跑马灯滚动信息:接收(3,1263) CMD_MB_GetScrollMessageResult
        [commands.SUB_MB_GetScrollMessage_RESULT] = {
            { t = "uint16_t", k = "count" },                                                        -- 数量
            {
                t = {
                    { t = "uint32_t", k = "queueIndex" },                                           -- 上一个最大索引号
                    { t = "char16_t", k = "nickName", s = lengths.LEN_NICKNAME },                   -- 用户昵称
                    { t = "int64_t", k = "score" },                                                 -- 爆分
                    { t = "uint16_t", k = "kindID" },                                               -- 游戏类型
                }, k = "items", s = 0                                                               -- 滚动消息列表
            },
        },
        -- 获取H5顶部滚动信息:发送(3,1264) CMD_MB_GetScrollMessage
        [commands.SUB_MB_GetH5TopScrollMessageInfo] = {
            { t = "uint32_t", k = "userID" },                                                       -- 用户标识
            { t = "uint32_t", k = "queueIndex" },                                                   -- 最大队列索引号
        },
        -- 获取H5顶部滚动信息:接收(3,1265) CMD_MB_GetH5TopScrollMessageResult
        [commands.SUB_MB_GetH5TopScrollMessageInfo_RESULT] = {
            { t = "uint16_t", k = "count" },                                                        -- 数量
            {
                t = {
                    { t = "uint32_t", k = "queueIndex" },                                           -- 队列索引号
                    { t = "char16_t", k = "nickName", s = lengths.LEN_NICKNAME },                   -- 用户昵称
                    { t = "int64_t", k = "score" },                                                 -- 充值/提现金额
                    { t = "uint8_t", k = "type" },                                                  -- 类型：1充值，2提现
                }, k = "items", s = 0                                                               -- 滚动消息列表
            },
        },
        -- 获取平台客服URL:发送(3,1250) CMD_MB_Common_Query
        [commands.SUB_MB_GetCustomService] = commonStructors.CMD_MB_Common_Query,
        -- 获取平台客服URL:接收(3,1251) CMD_MB_GetCustomServiceResult
        [commands.SUB_MB_GetCustomService_RESULT] = {
            { t = "uint32_t", k = "errorCode" },                                                    -- 全局通用错误码
            { t = "uint16_t", k = "count" },                                                        -- 数量
            {
                t = {
                    { t = "uint8_t", k = "type" },                                                  -- 客服类型 1:whatsapp/2:facebook/3:Telegram
                    { t = "char16_t", k = "url", s = lengths.LEN_FACEURL },                         -- 客服链接地址
                }, k = "items", s = 0                                                               -- 平台客服列表
            },
        },
        -- 修改人物头像:发送(3,122) CMD_GP_SystemFaceInfo
        [commands.SUB_GP_SYSTEM_FACE_INFO] = {
            { t = "uint16_t", k = "faceID" },                                                       -- 图像标识
            { t = "uint32_t", k = "userID" },                                                       -- 用户标识
            { t = "char16_t", k = "dynamicPass", s = lengths.LEN_PASSWORD },                        -- 动态密码
            { t = "char16_t", k = "machineID", s = lengths.LEN_MACHINE_ID },                        -- 机器码
        },
        -- 修改人物头像:接收(3,120) CMD_GP_UserFaceInfo
        [commands.SUB_GP_USER_FACE_INFO] = {
            { t = "uint16_t", k = "faceID" },                                                       -- 图像标识
            { t = "uint32_t", k = "customID" },                                                     -- 自定义头像标识(废弃)
        },
        -- 红点信息:发送(3,1240) CMD_MB_Common_Query
        [commands.SUB_MB_GetRedDotStatus] = commonStructors.CMD_MB_Common_Query,
        -- 红点信息:接收(3,1241) CMD_MB_GetRedDotStatusResult
        [commands.SUB_MB_GetRedDotStatus_RESULT] = {
            { t = "uint32_t", k = "errorCode" },                                                    -- 全局通用错误码
            { t = "uint16_t", k = "count" },                                                        -- 数量
            {
                t = {
                    { t = "uint8_t", k = "type" },                                                  -- 红点类型
                    { t = "uint8_t", k = "subType" },                                               -- 子类型
                    { t = "uint8_t", k = "count" },                                                 -- 红点数量
                    { t = "uint8_t", k = "method" },                                                -- 处理方式
                    { t = "uint8_t", k = "style" },                                                 -- 呈现样式
                }, k = "items", s = 0                                                               -- 红点列表
            },
        },
    },
    [commands.MDM_GP_CHAT]= {
        -- 获取邮件列表:发送(51,100) CMD_C_GetMailList
        [commands.SUB_MAIL_GetMailList] = {
            { t = "uint32_t", k = "userID" },                                                       -- 用户标识
            { t = "uint32_t", k = "pageIndex" },                                                    -- 页号，从1开始
            { t = "uint8_t", k = "pageSize" },                                                      -- 每页数量
            { t = "uint8_t", k = "mailType" },                                                      -- 邮件类型
        },
        -- 获取邮件列表:接收(51,101) CMD_S_GetMailList
        [commands.SUB_MAIL_GetMailList_RESULT] = {
            { t = "uint8_t", k = "pageSize" },                                                      -- 每页数量
            { t = "uint32_t", k = "pageIndex" },                                                    -- 页号，从1开始
            { t = "uint32_t", k = "recordCount" },                                                  -- 记录总数
            { t = "uint32_t", k = "pageCount" },                                                    -- 总页数
            { t = "uint8_t", k = "itemCount" },                                                     -- 附件数量
            {
                t = {
                    { t = "uint32_t", k = "mailID" },                                               -- 邮件标识
                    { t = "uint32_t", k = "fromUserId" },                                           -- 邮件发送人标识
                    { t = "time_t", k = "timestamp" },                                              -- 时间戳
                    { t = "uint8_t", k = "type" },                                                  -- 邮件类型
                    { t = "uint8_t", k = "status" },                                                -- 状态
                    { t = "uint8_t", k = "hasAttachment" },                                         -- 是否有附件
                    { t = "utf8", k = "title", s = lengths.LEN_MAIL_TITLE },                        -- 邮件标题
                }, k = "items", s = 0                                                               -- 邮件列表
            },
        },
        -- 获取邮件明细:发送(51,102) CMD_C_MailDetails
        [commands.SUB_MAIL_Detail] = {
            { t = "uint32_t", k = "userID" },                                                       -- 用户标识
            { t = "uint32_t", k = "mailID" },                                                       -- 邮件标识
        },
        -- 获取邮件明细:接收(51,103) CMD_S_MailDetails
        [commands.SUB_MAIL_Detail_RESULT] = {
            { t = "uint32_t", k = "errorCode" },                                                    -- 全局通用错误码
            { t = "uint32_t", k = "mailID" },                                                       -- 邮件标识
            { t = "uint8_t", k = "bMailType" },                                                     -- 邮件类型
            { t = "uint32_t", k = "fromUserID" },                                                   -- 邮件发送人标识
            { t = "time_t", k = "timestamp" },                                                      -- 时间戳
            {
                t = {
                    { t = "uint8_t", k = "type" },                                                  -- 附件类型
                    { t = "int64_t", k = "value" },                                                 -- 附件值
                    { t = "uint8_t", k = "status" },                                                -- 附件状态
                }, k = "attachments", s = lengths.MAX_MAIL_ATTACHMENT_COUNT                         -- 附件列表
            },
            { t = "utf8", k = "title", s = lengths.LEN_MAIL_TITLE },                                -- 邮件标题
            { t = "utf8", k = "content", s = lengths.LEN_MAIL_CONTENT },                            -- 邮件内容
        },
        -- 删除邮件:发送(51,104) CMD_C_DelMail
        [commands.SUB_MAIL_Delete] = {
            { t = "uint32_t", k = "userID" },                                                       -- 用户标识
            { t = "uint32_t", k = "mailID" },                                                       -- 邮件标识
        },
        -- 删除邮件:接收(51,105) CMD_S_DelMail
        [commands.SUB_MAIL_Delete_RESULT] = {
            { t = "uint32_t", k = "errorCode" },                                                    -- 全局通用错误码
            { t = "uint32_t", k = "mailID" },                                                       -- 邮件标识
        },
        -- 获取新邮件数量:发送(51,112) CMD_C_GetNewMailCount
        [commands.SUB_MAIL_GetNewMailCount] = {
            { t = "uint32_t", k = "userID" },                                                       -- 用户标识
        },
        -- 获取新邮件数量:接收(51,113) CMD_S_GetNewMailCount
        [commands.SUB_MAIL_GetNewMailCount_RESULT] = {
            { t = "uint8_t", k = "count" },                                                         -- 新邮件数量
        },
    },
};

NetCmdDefine = { 
    commands = commands,
    sendStructors = sendStructors,
    recvStructors = recvStructors,
    structors = structors
}