 /*
    auto generation at 2024/3/13 16:52:25  
*/

// 基本协议模板定义(可自行修改)
interface INetPackTemplateDataRow {
    t: string | INetPackTemplateDataTable;      // type
    k: string;      // key
    s?: number | number[];     // length
}

// 类型重定义基本协议模板
type INetPackTemplateDataTable = Array<INetPackTemplateDataRow>;

interface INetPackTemplateDataSet {
    [key: number]: {
        [key: number]: INetPackTemplateDataTable
    }
}

interface INetPackTemplateCommonDataSet {
    [key: string]: INetPackTemplateDataTable
}


/* ---------------------------------------- 通用结构 ---------------------------------------- */

// 通用查询结构
interface CMD_MB_Common_Query {
    userID: number;                                   // 用户标识
}

// 通用查分结构
interface CMD_MB_Common_QueryScore {
    userID: number;                                   // 用户标识
    dynamicPass: string;                              // 动态密码
}

// 通用领奖结构
interface CMD_MB_Common_TakeScore {
    userID: number;                                   // 用户标识
    dynamicPass: string;                              // 动态密码
    clientIP: string;                                 // IP地址
    machineID: string;                                // 机器码
}

// 通用商品信息结构
interface tagProductInfo {
    productID: number;                                // 商品标识
    price: number;                                    // 价格
    awardType: number;                                // 奖励类型
    awardValue: number;                               // 奖励值
    attachType: number;                               // 附加类型
    attachValue: number;                              // 附加值
}

// 通用提现记录信息结构
interface tagWithdrawRecord {
    amount: number;                                   // 金额
    applyDate: number;                                // 提现日期
    status: number;                                   // 状态
    orderID: string;                                  // 订单标识
}

// 通用发送短信结构
interface CMD_GP_SendSmsCode {
    mobile: string;                                   // 手机号码
    userID: number;                                   // 用户标识
    smsType: number;                                  // 短信类型
    machineID: string;                                // 机器码
}

// 通用下单结构
interface CMD_MB_PlaceOrder {
    userID: number;                                   // 用户标识
    productID: number;                                // 商品标识
    price: number;                                    // 价格
    nickName: string;                                 // 用户昵称
    machineID: string;                                // 机器码
    ip: string;                                       // IP地址
    extends: string;                                  // 扩展内容
}

// 通用下单返回结构
interface CMD_MB_PlaceOrderResult {
    msg: string;                                      // json字符串
}

/* ---------------------------------------- 专用结构 ---------------------------------------- */

// 获取商品列表 (发送)
// 发送 SUB_MB_GetProductInfos (3,1210)
interface CMD_MB_GetProductInfos {
    userID: number;                                   // 用户标识
    dynamicPass: string;                              // 动态密码
    channelID: number;                                // 商品渠道标识
}

// 礼包类型明细
interface ProductTypeInfo {
    productTypeID: number;                            // 礼包类型标识
    productTypeName: string;                          // 礼包类型名称
    active: number;                                   // 是否激活
    productCount: number;                             // 商品数量
    productInfos: Array<tagProductInfo>;              // 商品列表
}

// 获取商品列表 (接收)
// 接收 SUB_MB_GetProductInfos_RESULT (3,1211)
interface CMD_MB_GetProductInfosResult {
    errorCode: number;                                // 全局通用错误码
    enable: number;                                   // 是否激活0:否,1:是
    productTypeCount: number;                         // 礼包类型数量
    productTypes: Array<ProductTypeInfo>;             // 礼包类型列表
}

// 查询某种礼包下商品的购买情况 (发送)
// 发送 SUB_MB_GetProductTypeActiveState (3,1212)
interface CMD_MB_GetProductTypeActiveState {
    userID: number;                                   // 用户标识
    dynamicPass: string;                              // 动态密码
}

// 礼包类型激活状态
interface tagActiveState {
    productTypeID: number;                            // 礼包类型标识
    active: number;                                   // 是否激活
}

// 查询某种礼包下商品的购买情况 (接收)
// 接收 SUB_MB_GetProductTypeActiveState_RESULT (3,1213)
interface CMD_MB_GetProductTypeActiveStateResult {
    errorCode: number;                                // 全局通用错误码
    productTypeCount: number;                         // 礼包类型数量
    results: Array<tagActiveState>;                   // 礼包类型激活状态列表
}

// 获取一次性商品购买情况 (发送)
// 发送 SUB_MB_GetProductActiveState (3,1216)
interface CMD_MB_GetProductActiveState {
    userID: number;                                   // 用户标识
    dynamicPass: string;                              // 动态密码
    productTypeID: number;                            // 礼包类型标识
}

// 获取一次性商品购买情况 (接收)
// 接收 SUB_MB_GetProductActiveState_RESULT (3,1217)
interface CMD_MB_GetProductActiveStateResult {
    productCount: number;                             // 商品数量
    actives: Array<number>;                           // 是否激活
}

// 获取用户当前可否提现 (发送)
// 发送 SUB_MB_GetWithdrawStatus (3,1220)
interface CMD_MB_GetWithdrawStatus {
    userID: number;                                   // 用户标识
    dynamicPass: string;                              // 动态密码
}

// 获取用户当前可否提现 (接收)
// 接收 SUB_MB_GetWithdrawStatus_RESULT (3,1221)
interface CMD_MB_GetWithdrawStatusResult {
    currentBetScore: number;                          // 当前下注金额
    requireBetScore: number;                          // 需求下注金额
    submitScore: number;                              // 提交金额
    totalPayCash: number;                             // 总充值金额
    totalWithdrawCash: number;                        // 总提现金额
}

// 获取提现配置 (接收)
// 接收 SUB_MB_GetWithdrawConfig_RESULT (3,1223)
interface CMD_MB_GetWithdrawConfigResult {
    errorCode: number;                                // 全局通用错误码
    url: string;                                      // 提现网址
    accountTypes: string;                             // 账户类型
    count: number;                                    // 数量
    items: Array<tagProductInfo>;                     // 商品信息列表
}

// 获取提现历史记录 (发送)
// 发送 SUB_MB_GetWithdrawHistoryAccount (3,1224)
interface CMD_MB_GetWithdrawHistoryAccount {
    userID: number;                                   // 用户标识
    dynamicPass: string;                              // 动态密码
}

// 历史提现账号信息
interface tagWithdrawAccountHistory {
    accountType: string;                              // 账号类型
    accountName: string;                              // 账号名称
    accountNumber: string;                            // 账号号码
    idNumber: string;                                 // 身份证号码
}

// 获取提现历史记录 (接收)
// 接收 SUB_MB_GetWithdrawHistoryAccount_RESULT (3,1225)
interface CMD_MB_GetWithdrawHistoryAccountResult {
    count: number;                                    // 数量
    history: tagWithdrawAccountHistory;               // 历史账号列表
}

// 获取提现记录 (发送)
// 发送 SUB_MB_GetWithdrawRecord (3,1226)
interface CMD_MB_GetWithdrawRecord {
    userID: number;                                   // 用户标识
    pageSize: number;                                 // 每页数量
    pageIndex: number;                                // 页号，从1开始
}

// 获取提现记录 (接收)
// 接收 SUB_MB_GetWithdrawRecord_RESULT (3,1227)
interface CMD_MB_GetWithdrawRecordResult {
    pageSize: number;                                 // 每页数量
    pageIndex: number;                                // 页号，从1开始
    recordCount: number;                              // 记录总数
    pageCount: number;                                // 总页数
    count: number;                                    // 数量
    items: Array<tagWithdrawRecord>;                  // 提现记录列表
}

// 平台客服信息
interface tagCustomServiceUrl {
    type: number;                                     // 客服类型 1:whatsapp/2:facebook/3:Telegram
    url: string;                                      // 客服链接地址
}

// 获取平台客服URL (接收)
// 接收 SUB_MB_GetCustomService_RESULT (3,1251)
interface CMD_MB_GetCustomServiceResult {
    errorCode: number;                                // 全局通用错误码
    count: number;                                    // 数量
    items: Array<tagCustomServiceUrl>;                // 平台客服列表
}

// 查询分享配置 (接收)
// 接收 SUB_MB_GetShareConfig_RESULT (3,1271)
interface CMD_MB_GetShareConfigResult {
    shareEnable: number;                              // 是否可以分享
    shareScore: number;                               // 分享可领取的奖励分数
    shareUserLimits: number;                          // 分享用户可领取次数
    shareMachineLimits: number;                       // 分享每机器可领取次数
    shareUrl: string;                                 // 分享网址
    shareTips: string;                                // 分享说明
}

// 更新分享入口点击次数 (发送)
// 发送 SUB_MB_UpdateShareCount (3,1272)
interface CMD_MB_UpdateShareCount {
    userID: number;                                   // 用户标识
    machineID: string;                                // 机器码
}

// 更新分享入口点击次数 (接收)
// 接收 SUB_MB_UpdateShareCount_RESULT (3,1273)
interface CMD_MB_UpdateShareCountResult {
    errorCode: number;                                // 全局通用错误码
    restLimits: number;                               // 剩余次数
}

// 领取分享奖励 (发送)
// 发送 SUB_MB_GetShareReward (3,1274)
interface CMD_MB_GetShareReward {
    userID: number;                                   // 用户标识
    dynamicPass: string;                              // 动态密码
    machineID: string;                                // 机器码
    clientIP: string;                                 // IP地址
    shareType: number;                                // 分享类型
}

// 领取分享奖励 (接收)
// 接收 SUB_MB_GetShareReward_RESULT (3,1275)
interface CMD_MB_GetShareRewardResult {
    errorCode: number;                                // 全局通用错误码
    shareScore: number;                               // 领取的奖励分数
    restLimits: number;                               // 剩余次数
}

// 查询可分享剩余次数 (发送)
// 发送 SUB_MB_GetShareRestLimits (3,1276)
interface CMD_MB_GetShareRestLimits {
    userID: number;                                   // 用户标识
    machineID: string;                                // 机器码
}

// 查询可分享剩余次数 (接收)
// 接收 SUB_MB_GetShareRestLimits_RESULT (3,1277)
interface CMD_MB_GetShareRestLimitsResult {
    errorCode: number;                                // 全局通用错误码
    restLimits: number;                               // 剩余次数
}

// 从手机缓存中随机15个出来 (接收)
// 接收 SUB_MB_GetMobiles_RESULT (3,1279)
interface CMD_MB_GetMobilesResult {
    mobiles: string;                                  // 手机列表
}

// 获取手机绑定状态 (接收)
// 接收 SUB_MB_GetBindMobileStatus_RESULT (3,1285)
interface CMD_MB_GetBindMobileStatusResult {
    boBind: number;                                   // 是否绑定了手机
    boReward: number;                                 // 是否领取了奖励
    currencyType: number;                             // 货币类型
    rewardScore: number;                              // 可领取的奖励金额
}

// 领取手机绑定奖励 (发送)
// 发送 SUB_MB_TakeBindMobileReward (3,1286)
interface CMD_MB_TakeBindMobileReward {
    userID: number;                                   // 用户标识
    dynamicPass: string;                              // 动态密码
    iPAddress: string;                                // IP地址
}

// 领取手机绑定奖励 (接收)
// 接收 SUB_MB_TakeBindMobileReward_RESULT (3,1287)
interface CMD_MB_TakeBindMobileRewardResult {
    errorCode: number;                                // 全局通用错误码
    currencyType: number;                             // 货币类型
    rewardScore: number;                              // 奖励金额
}

// 系统消息
interface tagSystemNotice {
    title: string;                                    // 消息标题
    keepSeconds: number;                              // 保留时长(秒)
    content: string;                                  // 消息内容
}

// 系统提示信息 (接收)
// 接收 SUB_MB_GetSystemNotice_RESULT (3,1291)
interface CMD_MB_GetSystemNoticeResult {
    errorCode: number;                                // 全局通用错误码
    count: number;                                    // 数量
    items: Array<tagSystemNotice>;                    // 系统消息列表
}

// 获取活动配置 (发送)
// 发送 SUB_MB_GetActivityConfig (3,1300)
interface CMD_MB_GetActivityConfig {
    userID: number;                                   // 用户标识
    count: number;                                    // 数量
}

// 获取活动配置
interface tagActivityConfig {
    title: string;                                    // 活动标题
    imgUrlMain: string;                               // 小图地址
    imgUrlContent: string;                            // 大图地址
}

// 获取活动配置 (接收)
// 接收 SUB_MB_GetActivityConfig_RESULT (3,1301)
interface CMD_MB_GetActivityConfigResult {
    errorCode: number;                                // 全局通用错误码
    count: number;                                    // 数量
    items: Array<tagActivityConfig>;                  // 活动列表
}

// 新协议(双货币)存入金币 (发送)
// 发送 SUB_MB_UserSaveScoreEx (3,1310)
interface CMD_MB_UserSaveScoreEx {
    userID: number;                                   // 用户标识
    insurePass: string;                               // 银行密码
    currencyType: number;                             // 货币类型
    score: number;                                    // 存储金额数量
    clientAddr: number;                               // IP地址数字格式
    machineID: string;                                // 机器码
}

// 新协议(双货币)存入金币 (接收)
// 接收 SUB_MB_UserSaveScoreEx_RESULT (3,1311)
interface CMD_MB_UserSaveScoreExResult {
    resultCode: number;                               // 全局通用错误码
    currencyType: number;                             // 货币类型
    score: number;                                    // 存储金额数量
}

// 新协议(双货币)取出金币 (发送)
// 发送 SUB_MB_UserTakeScoreEx (3,1312)
interface CMD_MB_UserTakeScoreEx {
    userID: number;                                   // 用户标识
    insurePass: string;                               // 银行密码
    currencyType: number;                             // 货币类型
    score: number;                                    // 取款金额数量
    clientAddr: number;                               // IP地址数字格式
    machineID: string;                                // 机器码
}

// 新协议(双货币)取出金币 (接收)
// 接收 SUB_MB_UserTakeScoreEx_RESULT (3,1313)
interface CMD_MB_UserTakeScoreExResult {
    resultCode: number;                               // 全局通用错误码
    currencyType: number;                             // 货币类型
    score: number;                                    // 取款金额数量
}

// 查询最后一次充值订单信息 (发送)
// 发送 SUB_MB_GetLastPayInfo (3,1322)
interface CMD_MB_GetLastPayInfo {
    userID: number;                                   // 用户标识
    dynamicPass: string;                              // 动态密码
    currencyType: number;                             // 货币类型
}

// 查询最后一次充值订单信息 (接收)
// 接收 SUB_MB_GetLastPayInfo_RESULT (3,1323)
interface CMD_MB_GetLastPayInfoResult {
    errorCode: number;                                // 全局通用错误码
    dateTime: number;                                 // 最后支付时间
    payAmount: number;                                // 实际支付金额
    score: number;                                    // 实际得到的游戏币
    productTypeID: number;                            // 礼包类型标识
    productID: number;                                // 商品标识
}

// 获取用户成长等级当前状态 (发送)
// 发送 SUB_MB_GetGrowUserStatus (3,1502)
interface CMD_MB_GetGrowUserStatus {
    userID: number;                                   // 用户标识
    experienceRenderMode: number;                     // 经验值呈现模式 0为传统式(到达等级归零,杰总方案),1为累加式的(到达等级累加,A总方案)
}

// 获取用户成长等级当前状态 (接收)
// 接收 SUB_MB_GetGrowUserStatus_RESULT (3,1503)
interface CMD_MB_GetGrowUserStatusResult {
    growLevel: number;                                // 成长等级/VIP等级
    payCurrent: number;                               // 当前充值额
    payRequire: number;                               // 需求充值额
    betCurrent: number;                               // 当前下注额
    betRequire: number;                               // 需求下注额
    dailyAddition: number;                            // 当前等级日转盘加成
    dailyAdditionNext: number;                        // 下个等级日转盘加成
    weeklyAddition: number;                           // 当前等级周转盘加成
    weeklyAdditionNext: number;                       // 下个等级周转盘加成
    monthlyAddition: number;                          // 当前等级月转盘加成
    monthlyAdditionNext: number;                      // 下个等级周转盘加成
}

// 成长礼金配置
interface tagGift {
    status: number;                                   // 当前奖励的状态：1未激活 2 可领取 3已领取 4可领取但时间未到
    score: number;                                    // 当前等级可领取的奖励，真金服需要除以100
    nextScore: number;                                // 下一级可领取到的奖励，真金服需要除以100
    totalScore: number;                               // 全部可领取的奖励
}

// 获取用户成长礼包状态 (接收)
// 接收 SUB_MB_GetGrowGiftStatus_RESULT (3,1505)
interface CMD_MB_GetGrowGiftStatusResult {
    growLevel: number;                                // 成长等级/VIP等级
    weekGift: tagGift;                                // 周礼金
    monthGift: tagGift;                               // 月礼包
    growGift: tagGift;                                // 成长礼金
}

// 领取用户成长礼包奖励 (发送)
// 发送 SUB_MB_TakeGrowGift (3,1506)
interface CMD_MB_TakeGrowGift {
    userID: number;                                   // 用户标识
    dynamicPass: string;                              // 动态密码
    ip: string;                                       // IP地址
    typeID: number;                                   // 1表示周礼金，2表示月礼金, 3表示成长礼金
}

// 成长礼金奖励明细
interface tagLevelup {
    level: number;                                    // 成长等级
    score: number;                                    // 奖励金币
}

// 领取用户成长礼包奖励 (接收)
// 接收 SUB_MB_TakeGrowGift_RESULT (3,1507)
interface CMD_MB_TakeGrowGiftResult {
    errorCode: number;                                // 全局通用错误码
    typeID: number;                                   // 1表示周礼金，2表示月礼金, 3表示成长礼金
    count: number;                                    // 数量
    items: Array<tagLevelup>;                         // 成长礼金奖励列表
}

// 成长等级配置
interface tagGrowLevelConfigNew2 {
    growLevel: number;                                // 成长等级/VIP等级
    betRequire: number;                               // 成长到下一级需求打码量
    payRequire: number;                               // 成长到下一级需求充值量
    dailyAddition: number;                            // 当前等级日转盘加成百分比
    weeklyAddition: number;                           // 当前等级周转盘加成百分比
    monthlyAddition: number;                          // 当前等级月转盘加成百分比
    weekGift: number;                                 // 成长周礼金
    monthGift: number;                                // 成长月礼包
    growGift: number;                                 // 成长等级礼包
    baseEnsureFirst: number;                          // 破产补助首次奖励
    baseEnsureSecond: number;                         // 破产补助二次奖励
}

// 获取成长等级配置(新版本) (接收)
// 接收 SUB_MB_GetGrowLevelConfig2_RESULT (3,1509)
interface CMD_MB_GetGrowLevelConfig2Result {
    items: Array<tagGrowLevelConfigNew2>;             // 成长等级配置列表
}

// 大转盘格子明细
interface tagLotteryCellItem {
    itemID: number;                                   // 物品标识
    levelRequire: number;                             // 需求的成长等级
    currencyType: number;                             // 货币类型
    currencyValue: number;                            // 奖励值
    name: string;                                     // 格子名称
}

// 获取转盘格子配置
interface tagLotteryCell {
    items: Array<tagLotteryCellItem>;                 // 大转盘格子列表
}

// 获取转盘格子配置 (接收)
// 接收 SUB_MB_GetLotteryCell_RESULT (3,1511)
interface CMD_MB_GetLotteryCellResult {
    lotterys: Array<tagLotteryCell>;                  // 大转盘列表
}

// 获取用户当前的转盘状态 (发送)
// 发送 SUB_MB_GetLotteryUserStatus (3,1512)
interface CMD_MB_GetLotteryUserStatus {
    userID: number;                                   // 用户标识
    recordCount: number;                              // 记录数量
}

// 获取用户当前的转盘状态
interface tagLottery {
    restCount: number;                                // 剩余可使用次数
    addition: number;                                 // 当前等级可享受的加成比
    payProgressCurVal: number;                        // 充值进度条-当前值
    payProgressMaxVal: number;                        // 充值进度条-最大值
    betProgressCurVal: number;                        // 下注进度条-当前值
    betProgressMaxVal: number;                        // 下注进度条-最大值
    itemStatus: Array<number>;                        // 物品屏蔽表 0正常, 1屏蔽
}

// 大转盘中奖记录信息
interface tagLotteryPlatformRecord {
    queueIndex: number;                               // 队列标识
    timestamp: number;                                // 时间戳
    lotteryTypeID: number;                            // 转盘类型 0日转盘,1周转盘,2月转盘
    itemIndex: number;                                // 中奖的物品格子
    currencyType: number;                             // 货币类型
    currencyValue: number;                            // 中奖的金币
    additionValue: number;                            // 附加的金币
    nickName: string;                                 // 用户昵称
}

// 获取用户当前的转盘状态 (接收)
// 接收 SUB_MB_GetLotteryUserStatus_RESULT (3,1513)
interface CMD_MB_GetLotteryUserStatusResult {
    growLevel: number;                                // 成长等级/VIP等级
    lotterys: Array<tagLottery>;                      // 转盘
    serialLogonDays: number;                          // 连续登陆天数
    logonAddition: number;                            // 连续登陆额外附加 百分值
    logonDaysWeekCurVal: number;                      // 本周已经登陆天数
    logonDaysWeekMaxVal: number;                      // 本周需求登陆天数
    logonDaysMonthCurVal: number;                     // 本月已经登陆天数
    logonDaysMonthMaxVal: number;                     // 本月需求登陆天数
    recordCount: number;                              // 平台最新中奖历史记录数量
    items: Array<tagLotteryPlatformRecord>;           // 平台最新中奖历史记录
}

// 获取平台中奖最新广播消息列表 (发送)
// 发送 SUB_MB_GetLotteryPlatformRecordNewest (3,1514)
interface CMD_MB_GetLotteryPlatformRecordNewest {
    userID: number;                                   // 用户标识
    recordCount: number;                              // 记录数量
    lowerBound: number;                               // 上一次提取的最大队列索引
    lotteryType: number;                              // 转盘类型 0日转盘,1周转盘,2月转盘
}

// 获取平台中奖最新广播消息列表 (接收)
// 接收 SUB_MB_GetLotteryPlatformRecordNewest_RESULT (3,1515)
interface CMD_MB_GetLotteryPlatformRecordResult {
    count: number;                                    // 数量
    items: Array<tagLotteryPlatformRecord>;           // 记录列表
}

// 获取平台中奖历史广播消息列表 (发送)
// 发送 SUB_MB_GetLotteryPlatformRecordHistory (3,1516)
interface CMD_MB_GetLotteryPlatformRecordHistory {
    recordCount: number;                              // 记录数量
    upperBound: number;                               // 上一次提取的最小队列索引
    lotteryType: number;                              // 转盘类型 0日转盘,1周转盘,2月转盘
}

// 获取用户自己中奖历史消息列表 (发送)
// 发送 SUB_MB_GetLotteryUserRecordHistory (3,1518)
interface CMD_MB_GetLotteryUserRecordHistory {
    userID: number;                                   // 用户标识
    pageSize: number;                                 // 每页数量
    pageIndex: number;                                // 页号，从1开始
}

// 大转盘中奖信息
interface tagLotteryUserRecord {
    timestamp: number;                                // 时间戳
    lotteryType: number;                              // 转盘类型 0日转盘,1周转盘,2月转盘
    itemIndex: number;                                // 中奖的物品格子
    currencyType: number;                             // 货币类型
    currencyValue: number;                            // 基础奖励
    additionValue: number;                            // 附加奖励值
}

// 获取用户自己中奖历史消息列表 (接收)
// 接收 SUB_MB_GetLotteryUserRecordHistory_RESULT (3,1519)
interface CMD_MB_GetLotteryUserRecordResult {
    count: number;                                    // 数量
    items: Array<tagLotteryUserRecord>;               // 中奖历史消息列表
}

// 转动转盘 (发送)
// 发送 SUB_MB_LotterySbin (3,1520)
interface CMD_MB_LotterySbin {
    userID: number;                                   // 用户标识
    lotteryType: number;                              // 转盘类型 0日转盘,1周转盘,2月转盘
    ip: string;                                       // IP地址
}

// 转动转盘 (接收)
// 接收 SUB_MB_LotterySbin_RESULT (3,1521)
interface CMD_MB_LotterySbinResult {
    errorCode: number;                                // 全局通用错误码
    lotteryType: number;                              // 转盘类型 0日转盘,1周转盘,2月转盘
    itemIndex: number;                                // 中奖的物品格子
    currencyType: number;                             // 货币类型
    currencyValue: number;                            // 基础奖励
    additionPercent: number;                          // 附加百分比
    additionValue: number;                            // 附加奖励值
    restCount: number;                                // 剩余次数
}

// 大转盘赠送方案配置
interface tagItem {
    lotteryTypeID: number;                            // 转盘类型 0日转盘,1周转盘,2月转盘
    key: string;                                      // 关键字
    condition: number;                                // 条件
    presentCount: number;                             // 赠送次数
}

// 各种赠送方案配置 (接收)
// 接收 SUB_MB_GetLotteryPresentConfig_RESULT (3,1523)
interface CMD_MB_GetLotteryPresentConfigResult {
    count: number;                                    // 数量
    items: Array<tagItem>;                            // 赠送配置列表
}

// 获取用户状态信息 (接收)
// 接收 SUB_MB_GetPayRebateInfo_RESULT (3,1581)
interface CMD_MB_GetPayRebateInfoResult {
    count: number;                                    // 数量
    rebateScores: Array<number>;                      // 7日奖励列表(含当日) 可领取的奖励
}

// 领取返利奖励 (发送)
// 发送 SUB_MB_GetPayRebateReward (3,1582)
interface CMD_MB_GetPayRebateReward {
    userID: number;                                   // 用户标识
    dynamicPass: string;                              // 动态密码
    ip: string;                                       // IP地址
}

// 领取返利奖励 (接收)
// 接收 SUB_MB_GetPayRebateReward_RESULT (3,1583)
interface CMD_MB_GetPayRebateRewardResult {
    errorCode: number;                                // 全局通用错误码
    rebateScore: number;                              // 此次领取的奖励，用于炸个花，如果错误，值为0
}

// 分享转盘格子配置
interface tagShareLotteryItem {
    itemID: number;                                   // 格子配置标识
    itemIndex: number;                                // 格子序号(从0开始)
    itemType: number;                                 // 格子类型
    itemName: string;                                 // 格子物品名称
}

// 获取分享转盘全部格子物品 (接收)
// 接收 SUB_MB_ShareLotteryGetItems_RESULT (3,1701)
interface CMD_MB_ShareLotteryGetItemsResult {
    count: number;                                    // 数量
    items: Array<tagShareLotteryItem>;                // 格子配置列表
}

// 获取分享转盘用户状态 (发送)
// 发送 SUB_MB_ShareLotteryGetUserStatus (3,1702)
interface CMD_MB_ShareLotteryGetUserStatus {
    userID: number;                                   // 用户标识
    pageSize: number;                                 // 每页数量
    pageIndex: number;                                // 页号，从1开始
}

// 分享提现信息
interface tagShareLotteryWithdrawHistory {
    faceID: number;                                   // 图像标识
    score: number;                                    // 分享提现的金币
    rewardDate: number;                               // 分享提现的时间
    nickName: string;                                 // 用户昵称
}

// 获取分享转盘用户状态
interface CMD_MB_ShareLotteryGetWithdrawHistoryResult {
    pageSize: number;                                 // 每页数量
    pageIndex: number;                                // 页号，从1开始
    pageCount: number;                                // 总页数
    recordCount: number;                              // 记录总数
    count: number;                                    // 数量
    items: Array<tagShareLotteryWithdrawHistory>;     // 分享提现历史记录列表
}

// 获取分享转盘用户状态 (接收)
// 接收 SUB_MB_ShareLotteryGetUserStatus_RESULT (3,1703)
interface CMD_MB_ShareLotteryGetUserStatusResult {
    currentScore: number;                             // 当前累积的积分
    requireScore: number;                             // 需要的总现金
    restCount: number;                                // 当前可抽奖的次数
    stageID: number;                                  // 提现档位ID,如果为0表示必须设置提现档位才能进行转盘抽奖
    withdrawCount: number;                            // 提现次数,如果为0表示用户从未提现过，即【新用户】
    scoreTimeExpired: number;                         // 现金到期时间，为0则表示没有
    history: CMD_MB_ShareLotteryGetWithdrawHistoryResult;// N条幸运玩家领取记录
}

// 获取分享提现历史记录开始 (发送)
// 发送 SUB_MB_ShareLotteryGetWithdrawHistory (3,1704)
interface CMD_MB_ShareLotteryGetWithdrawHistory {
    userID: number;                                   // 用户标识
    pageSize: number;                                 // 每页数量
    pageIndex: number;                                // 页号，从1开始
}

// 获取分享提现邀请记录 (发送)
// 发送 SUB_MB_ShareLotteryGetInviteRecords (3,1706)
interface CMD_MB_ShareLotteryGetInviteRecords {
    userID: number;                                   // 用户标识
    pageSize: number;                                 // 每页数量
    pageIndex: number;                                // 页号，从1开始
}

// 分享提现邀请记录信息
interface tagShareLotteryGetInviteRecordItem {
    faceID: number;                                   // 图像标识
    isBindMobile: number;                             // 是否绑定手机
    isBetScore: number;                               // 打码量是否足够
    registeTime: number;                              // 注册时间
    nickName: string;                                 // 用户昵称
    growLevel: number;                                // 成长等级/VIP等级
    spreadScore: number;                              // 推广所得金币数量
}

// 获取分享提现邀请记录 (接收)
// 接收 SUB_MB_ShareLotteryGetInviteRecords_RESULT (3,1707)
interface CMD_MB_ShareLotteryGetInviteRecordsResult {
    pageSize: number;                                 // 每页数量
    pageIndex: number;                                // 页号，从1开始
    pageCount: number;                                // 总页数
    recordCount: number;                              // 记录总数
    bindCount: number;                                // 绑定手机的用户数
    count: number;                                    // 数量
    items: Array<tagShareLotteryGetInviteRecordItem>; // 邀请记录列表
}

// 执行分享转盘抽奖 (发送)
// 发送 SUB_MB_ShareLotteryExecuteSbin (3,1708)
interface CMD_MB_ShareLotteryExecuteSbin {
    userID: number;                                   // 用户标识
    dynamicPass: string;                              // 动态密码
    ip: string;                                       // IP地址
}

// 执行分享转盘抽奖 (接收)
// 接收 SUB_MB_ShareLotteryExecuteSbin_RESULT (3,1709)
interface CMD_MB_ShareLotteryExecuteSbinResult {
    errorCode: number;                                // 全局通用错误码
    itemIndex: number;                                // 中奖的格子号（从0开始）
    itemType: number;                                 // 中奖的格子类型(见物品定义中的格子类型说明)
    reward: number;                                   // 中奖的值(免费次数/金币/现金)
    scoreExpiredTime: number;                         // 现金到期时间，为0则表示没有
}

// 提取分享提现奖励 (发送)
// 发送 SUB_MB_ShareLotteryTakeReward (3,1710)
interface CMD_MB_ShareLotteryTakeReward {
    userID: number;                                   // 用户标识
    dynamicPass: string;                              // 动态密码
    ip: string;                                       // IP地址
}

// 提取分享提现奖励 (接收)
// 接收 SUB_MB_ShareLotteryTakeReward_RESULT (3,1711)
interface CMD_MB_ShareLotteryTakeRewardResult {
    errorCode: number;                                // 全局通用错误码
    score: number;                                    // 当前收到的分数，炸花专用
    requireScore: number;                             // 下一次的需求分数，当前累积的会被清0
}

// 获取分享升级返利用户状态 (接收)
// 接收 SUB_MB_ShareLotteryGetSpreadRebateStatus_RESULT (3,1713)
interface CMD_MB_ShareLotteryGetSpreadRebateStatusResult {
    currentSpreadScore: number;                       // 当前推荐奖励
    maxSpreadScore: number;                           // 最高可领取的奖励(理论值)
    payUserCount: number;                             // 已充值人数
}

// 提取分享升级返利奖励 (发送)
// 发送 SUB_MB_ShareLotteryTakeSpreadRebate (3,1714)
interface CMD_MB_ShareLotteryTakeSpreadRebate {
    userID: number;                                   // 用户标识
    dynamicPass: string;                              // 动态密码
    ip: string;                                       // IP地址
}

// 提取分享升级返利奖励 (接收)
// 接收 SUB_MB_ShareLotteryTakeSpreadRebate_RESULT (3,1715)
interface CMD_MB_ShareLotteryTakeSpreadRebateResult {
    score: number;                                    // 奖励的分数
}

// 获取分享升级返利配置 (接收)
// 接收 SUB_MB_ShareLotteryGetSpreadRebateConfig_RESULT (3,1717)
interface CMD_MB_ShareLotteryGetSpreadRebateConfigResult {
    score: Array<number>;                             // 返利的积分列表
}

// 分享提现档位信息
interface tagWithdrawStage {
    stageID: number;                                  // 分享提现档位ID
    stageScore: number;                               // 分享提现档位积分
    newUserEnable: number;                            // 是否允许新用户选择
}

// 获取分享提现档位信息 (接收)
// 接收 SUB_MB_ShareLotteryGetWithdrawStage_RESULT (3,1719)
interface CMD_MB_ShareLotteryGetWithdrawStageResult {
    count: number;                                    // 数量
    items: Array<tagWithdrawStage>;                   // 档位信息列表
}

// 选择分享提现档位 (发送)
// 发送 SUB_MB_ShareLotterySetWithdrawStage (3,1720)
interface CMD_MB_ShareLotterySetWithdrawStage {
    userID: number;                                   // 用户标识
    stageID: number;                                  // 分享提现档位ID
    stageScore: number;                               // 分享提现档位积分
    dynamicPass: string;                              // 动态密码
    ip: string;                                       // IP地址
}

// 选择分享提现档位 (接收)
// 接收 SUB_MB_ShareLotterySetWithdrawStage_RESULT (3,1721)
interface CMD_MB_ShareLotterySetWithdrawStageResult {
    errorCode: number;                                // 全局通用错误码
    stageID: number;                                  // 分享提现档位ID
    stageScore: number;                               // 分享提现档位积分
}

// 执行分享转盘连续抽奖 (发送)
// 发送 SUB_MB_ShareLotteryExecuteSbinContinuous (3,1722)
interface CMD_MB_ShareLotteryExecuteSbinContinuous {
    userID: number;                                   // 用户标识
    count: number;                                    // 数量
    dynamicPass: string;                              // 动态密码
    ip: string;                                       // IP地址
}

// 执行分享转盘连续抽奖
interface tagSpinResult {
    itemIndex: number;                                // 中奖的格子号（从0开始）
    itemType: number;                                 // 中奖的格子类型(见物品定义中的格子类型说明)
    reward: number;                                   // 中奖的值(免费次数/金币/现金)
}

// 执行分享转盘连续抽奖 (接收)
// 接收 SUB_MB_ShareLotteryExecuteSbinContinuous_RESULT (3,1723)
interface CMD_MB_ShareLotteryExecuteSbinContinuousResult {
    errorCode: number;                                // 全局通用错误码
    restCount: number;                                // 剩余抽奖次数
    totalCash: number;                                // 全部得奖的现金
    totalScore: number;                               // 全部得奖的金币
    totalFreeCount: number;                           // 全部得奖的免费次数
    scoreExpiredTime: number;                         // 现金到期时间，为0则表示没有
    count: number;                                    // 最大只能连抽100次(此值和提交上来的值不一定相同)
    items: Array<tagSpinResult>;                      // 抽奖结果
}

// 获取【分享好友充值返利】配置 (接收)
// 接收 SUB_MB_SharePayRebateLoadConfig_RESULT (3,1751)
interface CMD_MB_SharePayRebateLoadConfigResult {
    value: Array<number>;                             // [0]=下家分成百分比, [1]=下家的下家分成百分比
}

// 获取【分享好友充值返利】状态 (接收)
// 接收 SUB_MB_SharePayRebateGetStatus_RESULT (3,1753)
interface CMD_MB_SharePayRebateGetStatusResult {
    score: number;                                    // 可领取的收益
    totalScore: number;                               // 总收益
    totalFriendsCount: number;                        // 总注册的下家人数
}

// 获取【分享好友充值返利】记录 (发送)
// 发送 SUB_MB_SharePayRebateGetRecord (3,1754)
interface CMD_MB_SharePayRebateGetRecord {
    userID: number;                                   // 用户标识
    pageIndex: number;                                // 页号，从1开始
    pageSize: number;                                 // 每页数量
}

// 获取【分享好友充值返利】记录
interface tagRecordSharePayRebate {
    gameID: number;                                   // 游戏标识
    payCash: number;                                  // 支付金额
    rebateScore: number;                              // 返利金额
    span: number;                                     // 差距，1表示直属下级,2代表下级的下级
    nickName: string;                                 // 下级用户的昵称
}

// 获取【分享好友充值返利】记录 (接收)
// 接收 SUB_MB_SharePayRebateGetRecord_RESULT (3,1755)
interface CMD_MB_SharePayRebateGetRecordResult {
    pageIndex: number;                                // 页号，从1开始
    pageSize: number;                                 // 每页数量
    totalRecordCount: number;                         // 总记录数
    count: number;                                    // 数量
    items: Array<tagRecordSharePayRebate>;            // 记录列表
}

// 提取【分享好友充值返利】奖励 (发送)
// 发送 SUB_MB_SharePayRebateTakeReward (3,1756)
interface CMD_MB_SharePayRebateTakeReward {
    userID: number;                                   // 用户标识
    score: number;                                    // 领取的奖励
    dynamicPass: string;                              // 动态密码
    clientIP: string;                                 // IP地址
    machineCode: string;                              // 机器码
}

// 提取【分享好友充值返利】奖励 (接收)
// 接收 SUB_MB_SharePayRebateTakeReward_RESULT (3,1757)
interface CMD_MB_SharePayRebateTakeRewardResult {
    errorCode: number;                                // 全局通用错误码
    score: number;                                    // 领取到的奖励
}

// 推广宝箱配置
interface tagChestConfig {
    friendsRequire: number;                           // 需求的拉新数量
    score: number;                                    // 可获得奖励金币
}

// 获取分享好友宝箱配置 (接收)
// 接收 SUB_MB_ShareTreasureChestLoadConfig_RESULT (3,1761)
interface CMD_MB_ShareTreasureChestLoadConfigResult {
    items: Array<tagChestConfig>;                     // 宝箱配置列表
}

// 获取分享好友宝箱状态 (接收)
// 接收 SUB_MB_ShareTreasureChestGetStatus_RESULT (3,1763)
interface CMD_MB_ShareTreasureChestGetStatusResult {
    status: number;                                   // 宝箱状态
    score: number;                                    // 当前轮可领取的积分
    totalScore: number;                               // 历史总积分(可领取+未领取)
    currentFriendCount: number;                       // 当前轮有效用户数量
    totalFriendCount: number;                         // 总拉新人数(含无效用户数量)
}

// 提取分享好友宝箱奖励 (发送)
// 发送 SUB_MB_ShareTreasureChestTakeReward (3,1764)
interface CMD_MB_ShareTreasureChestTakeReward {
    userID: number;                                   // 用户标识
    chestID: number;                                  // 宝箱ID [1-8]
    chestScore: number;                               // 宝箱奖励的金币
    dynamicPass: string;                              // 动态密码
    clientIP: string;                                 // IP地址
    machineCode: string;                              // 机器码
}

// 提取分享好友宝箱奖励 (接收)
// 接收 SUB_MB_ShareTreasureChestTakeReward_RESULT (3,1765)
interface CMD_MB_ShareTreasureChestTakeRewardResult {
    errorCode: number;                                // 全局通用错误码
    takeScore: number;                                // 这一次操作领取到的奖励(炸化专用)
    status: number;                                   // 宝箱状态(更新界面数据)
    score: number;                                    // 当前轮可领取的积分(更新界面数据)
    totalScore: number;                               // 历史总积分(可领取+未领取)(更新界面数据)
}

// 获取商城商品角标 (发送)
// 发送 SUB_MB_GetProductExtendFlag (3,1780)
interface CMD_MB_GetProductExtendFlag {
    userID: number;                                   // 用户标识
    typeName: string;                                 // 目前是定值: shop 代表商城物品
    channelID: number;                                // 充值渠道标识
}

// 获取商城商品角标
interface tagProductExtendFlag {
    productID: number;                                // 商品标识
    extendFlag: number;                               // 扩展标识，1表示受欢迎的
}

// 获取商城商品角标 (接收)
// 接收 SUB_MB_GetProductExtendFlag_RESULT (3,1781)
interface CMD_MB_GetProductExtendFlagResult {
    count: number;                                    // 数量
    items: Array<tagProductExtendFlag>;               // 商城商品角标列表
}

// 提现限制配置
interface tagWithdrawLimit {
    totalPayScore: number;                            // 总充值金额
    dailyCount: number;                               // 每个可提现次数
    dailyFreeScore: number;                           // 每日免费额度
    scoreLimit: number;                               // 提现金额限制
}

// 获取提现限制配置 (接收)
// 接收 SUB_MB_GetWithdrawCashLimit_RESULT (3,1783)
interface CMD_MB_WithdrawLoadLimitConfigResult {
    limitMin: number;                                 // 最小额度限制
    limitMax: number;                                 // 最大额度限制
    growLevellimit: tagWithdrawLimit;                 // 每个成长等级的限制
    requireBindMobile: number;                        // 是否需要绑定手机
}

// 破产补助配置
interface tagBaseEnsureConfig {
    firstScore: number;                               // 首次破产奖励金币
    secondScore: number;                              // 再次破产奖励金币
}

// 加载低保配置 (接收)
// 接收 SUB_MB_BaseEnsureLoadConfig_RESULT (3,2101)
interface CMD_MB_BaseEnsureLoadConfigResult {
    scoreCondition: Array<number>;                    // 2次破产的条件，低于此值为破产
    scoreReward: Array<tagBaseEnsureConfig>;          // 破产补助等级奖励列表
}

// 获取用户低保状态 (接收)
// 接收 SUB_MB_BaseEnsureGetStatus_RESULT (3,2103)
interface CMD_MB_BaseEnsureGetStatusResult {
    takeTimes: number;                                // 已经领取的次数(dwTakeTimes=2，表示今天已领完了)
    isTodayPay: number;                               // 今天是否支付过了(只在dwTakeTimes=1的时候才生效)
    totalScore: number;                               // 用户总金币
    isEnable: number;                                 // 是否可领取
    growLevel: number;                                // 成长等级/VIP等级
    rewardScore: number;                              // 这一次可领取的奖励金币
}

// 领取低保奖励 (发送)
// 发送 SUB_MB_BaseEnsureTakeReward (3,2104)
interface CMD_MB_BaseEnsureTakeReward {
    userID: number;                                   // 用户标识
    dynamicPass: string;                              // 动态密码
    clientIP: string;                                 // IP地址
    machineID: string;                                // 机器码
}

// 领取低保奖励 (接收)
// 接收 SUB_MB_BaseEnsureTakeReward_RESULT (3,2105)
interface CMD_MB_BaseEnsureTakeRewardResult {
    errorCode: number;                                // 全局通用错误码
    score: number;                                    // 当前领取到的金币数量
    restTimes: number;                                // 剩余可领取低保的次数
}

// 加载弹窗参数配置 (接收)
// 接收 SUB_MB_PopWinPolicyLoadConfig_RESULT (3,2121)
interface CMD_MB_PopWinPolicyLoadConfigResult {
    popWinPolicyBaseScore: number;                    // 弹框引导：金额门槛
    popWinPolicyHistoryPayScore: number;              // 弹框引导：历史充值金额条件
    fPopWinPolicyHistoryPayMultiple: number;          // 弹框引导：历史充值金额的倍数
    popWinPolicyBigWinMultile: number;                // 弹框引导：高倍爆率触发倍数,默认10
}

// 获取弹窗用户状态 (接收)
// 接收 SUB_MB_PopWinPolicyGetUserStatus_RESULT (3,2123)
interface CMD_MB_PopWinPolicyGetUserStatusResult {
    totalWithdrawScore: number;                       // 用户总充值
    totalPayScore: number;                            // 用户总提现
    requireBetScore: number;                          // 用户提现需求打码量
}

// 连续签到明细
interface tagSerialCheckInConfig {
    days: number;                                     // 签到天数
    score: number;                                    // 可领取的奖励
}

// 加载签到配置
interface tagCheckInLoadConfig {
    rewardGold: Array<number>;                        // 7天每天可领取的奖励
    serialCheckInReward: Array<tagSerialCheckInConfig>;// 连续签到奖励
}

// 加载签到配置 (接收)
// 接收 SUB_MB_CheckInLoadConfig_RESULT (3,2141)
interface CMD_MB_CheckInLoadConfigResult {
    items: Array<tagCheckInLoadConfig>;               // 签到奖励数组
}

// 获取用户签到状态 (发送)
// 发送 SUB_MB_CheckInGetUserStatus (3,2142)
interface CMD_MB_CheckInGetUserStatus {
    userID: number;                                   // 
}

// 获取用户签到状态 (接收)
// 接收 SUB_MB_CheckInGetUserStatus_RESULT (3,2143)
interface CMD_MB_CheckInGetUserStatusResult {
    turnDays: number;                                 // 普通签到本轮第几天[0-7]
    seriesDays: number;                               // 连续签到天数[0,20]
    bTodayChecked: boolean;                           // 今天是否签到了
    allow: number;                                    // 是否允许签到
    seriesAllow: Array<number>;                       // 是否有可领取连续签到的奖励
    payScore: number;                                 // 今天充值总额
    payRequire: number;                               // 当前等级需求充值金额
}

// 执行签到领取奖励 (发送)
// 发送 SUB_MB_CheckInDone (3,2144)
interface CMD_MB_CheckInDone {
    userID: number;                                   // 用户标识
    dynamicPass: string;                              // 动态密码
    machineID: string;                                // 机器码
    clientIP: string;                                 // IP地址
}

// 执行签到领取奖励 (接收)
// 接收 SUB_MB_CheckInDone_RESULT (3,2145)
interface CMD_MB_CheckInDoneResult {
    errorCode: number;                                // 全局通用错误码
    score: number;                                    // 金币
}

// 领取连续签到奖励 (发送)
// 发送 SUB_MB_CheckInTakeSerialReward (3,2146)
interface CMD_MB_CheckInTakeSerialReward {
    userID: number;                                   // 用户标识
    index: number;                                    // 领取第几个奖励[1,4]
    dynamicPass: string;                              // 动态密码
    ip: string;                                       // IP地址
}

// 领取连续签到奖励 (接收)
// 接收 SUB_MB_CheckInTakeSerialReward_RESULT (3,2147)
interface CMD_MB_CheckInTakeSerialRewardResult {
    errorCode: number;                                // 全局通用错误码
    score: number;                                    // 金币
}

// 充值渠道信息
interface tagPayChannel {
    channelID: number;                                // 充值渠道标识
    channelName: string;                              // 充值渠道名称
    minLimit: number;                                 // 提现限制最小值
    maxLimit: number;                                 // 提现限制最大值
    boSupportWithdraw: boolean;                       // 是否支持提现
    supportBankCode: string;                          // 银行码：cnpj|cpj
    defaultMask: number;                              // 是否默认充值、提现渠道(废弃)
}

// 获取支付/提现渠道 (接收)
// 接收 SUB_MB_GetPayChannel_RESULT (3,2161)
interface CMD_MB_GetPayChannelResult {
    count: number;                                    // 数量
    items: Array<tagPayChannel>;                      // 充值渠道信息列表
}

// 加载配置 (接收)
// 接收 SUB_MB_AlmzLoadConfig_RESULT (3,2181)
interface CMD_MB_AlmzLoadConfigResult {
    items: Array<number>;                             // 救援金等级配置列表
}

// 救援金状态
interface tagDailyStatus {
    status: number;                                   // 状态
    lossScore: number;                                // 输的金币数
    almzScore: number;                                // 救援金奖励的金币数
    growLevel: number;                                // 成长等级/VIP等级
}

// 获取用户状态 (接收)
// 接收 SUB_MB_AlmzGetUserStatus_RESULT (3,2183)
interface CMD_MB_AlmzGetUserStatusResult {
    yesterday: tagDailyStatus;                        // 昨日状态
    today: tagDailyStatus;                            // 今日状态
}

// 领取奖励 (接收)
// 接收 SUB_MB_AlmzTakeReward_RESULT (3,2185)
interface CMD_MB_AlmzTakeRewardResult {
    errorCode: number;                                // 全局通用错误码
    score: number;                                    // 金币
}

// 加载配置 (接收)
// 接收 SUB_MB_ExperienceScoreLoadConfig_RESULT (3,2201)
interface CMD_MB_ExperienceScoreLoadConfigResult {
    experienceScore: number;                          // 每次赠送体验金数量
    experienceCount: number;                          // 每日赠送体验金总次数 -1为无限次
    experienceLimitMin: number;                       // 体验金赠送门槛
}

// 当前用户体验金状态 (接收)
// 接收 SUB_MB_ExperienceScoreGetUserStatus_RESULT (3,2203)
interface CMD_MB_ExperienceScoreGetUserStatusResult {
    experienceRestCount: number;                      // 剩余可领取体验金的次数
}

// 提取体验金奖励 (发送)
// 发送 SUB_MB_ExperienceScoreTakeReward (3,2204)
interface CMD_MB_ExperienceScoreTakeReward {
    userID: number;                                   // 用户标识
    dynamicPass: string;                              // 动态密码
}

// 提取体验金奖励 (接收)
// 接收 SUB_MB_ExperienceScoreTakeReward_RESULT (3,2205)
interface CMD_MB_ExperienceScoreTakeRewardResult {
    errorCode: number;                                // 全局通用错误码
    experienceRestCount: number;                      // 剩余可领取体验金的次数
    score: number;                                    // 金币
    userID: number;                                   // 用户标识
}

// 查询充值结果(批量) (发送)
// 发送 SUB_MB_QueryOrderStatusBatch (3,2240)
interface CMD_MB_QueryOrderStatus {
    userID: number;                                   // 用户标识
    count: number;                                    // 数量
    onlineID: Array<number>;                          // 订单标识
}

// 订单查询结果
interface tagResult {
    onlineID: number;                                 // 订单标识
    boSuccess: number;                                // 是否成功
    boClosed: number;                                 // 是否关闭
}

// 查询充值结果(批量) (接收)
// 接收 SUB_MB_QueryOrderStatusBatch_RESULT (3,2241)
interface CMD_MB_QueryOrderStatusResult {
    userID: number;                                   // 用户标识
    count: number;                                    // 数量
    items: Array<tagResult>;                          // 批量查询结果列表
}

// 获取一次性商品购买情况Ex (接收)
// 接收 SUB_MB_GetProductActiveStateEx_RESULT (3,2243)
interface CMD_MB_GetProductActiveStateExResult {
    productType: number;                              // 礼包类型标识
    productCount: number;                             // 商品数量
    actives: Array<number>;                           // 是否激活0:否,1:是
}

// 获取商品列表by礼包 (发送)
// 发送 SUB_MB_GetProductInfosByType (3,2244)
interface CMD_MB_GetProductInfosByType {
    channelID: number;                                // 推广渠道标识
    productTypeID: number;                            // 礼包类型标识
    userID: number;                                   // 用户标识
}

// 获取商品列表by礼包 (接收)
// 接收 SUB_MB_GetProductInfosByType_RESULT (3,2245)
interface CMD_MB_GetProductInfosByTypeResult {
    userID: number;                                   // 用户标识
    productTypeID: number;                            // 礼包类型标识
    count: number;                                    // 数量
    productInfos: Array<tagProductInfo>;              // 商品列表
}

// 获取邮件列表 (发送)
// 发送 SUB_MAIL_GetMailList (51,100)
interface CMD_C_GetMailList {
    userID: number;                                   // 用户标识
    pageIndex: number;                                // 页号，从1开始
    pageSize: number;                                 // 每页数量
    mailType: number;                                 // 邮件类型
}

// 邮件信息
interface tagMailSummary {
    mailID: number;                                   // 邮件标识
    fromUserId: number;                               // 邮件发送人标识
    timestamp: number;                                // 时间戳
    type: number;                                     // 邮件类型
    status: number;                                   // 状态
    hasAttachment: number;                            // 是否有附件
    title: string;                                    // 邮件标题
}

// 获取邮件列表 (接收)
// 接收 SUB_MAIL_GetMailList_RESULT (51,101)
interface CMD_S_GetMailList {
    pageSize: number;                                 // 每页数量
    pageIndex: number;                                // 页号，从1开始
    recordCount: number;                              // 记录总数
    pageCount: number;                                // 总页数
    itemCount: number;                                // 附件数量
    items: Array<tagMailSummary>;                     // 邮件列表
}

// 获取邮件明细 (发送)
// 发送 SUB_MAIL_Detail (51,102)
interface CMD_C_MailDetails {
    userID: number;                                   // 用户标识
    mailID: number;                                   // 邮件标识
}

// 邮件附件信息
interface tagMailAttachment {
    type: number;                                     // 附件类型
    value: number;                                    // 附件值
    status: number;                                   // 附件状态
}

// 获取邮件明细 (接收)
// 接收 SUB_MAIL_Detail_RESULT (51,103)
interface CMD_S_MailDetails {
    errorCode: number;                                // 全局通用错误码
    mailID: number;                                   // 邮件标识
    bMailType: number;                                // 邮件类型
    fromUserID: number;                               // 邮件发送人标识
    timestamp: number;                                // 时间戳
    attachments: Array<tagMailAttachment>;            // 附件列表
    title: string;                                    // 邮件标题
    content: string;                                  // 邮件内容
}

// 删除邮件 (发送)
// 发送 SUB_MAIL_Delete (51,104)
interface CMD_C_DelMail {
    userID: number;                                   // 用户标识
    mailID: number;                                   // 邮件标识
}

// 删除邮件 (接收)
// 接收 SUB_MAIL_Delete_RESULT (51,105)
interface CMD_S_DelMail {
    errorCode: number;                                // 全局通用错误码
    mailID: number;                                   // 邮件标识
}

// 获取新邮件数量 (发送)
// 发送 SUB_MAIL_GetNewMailCount (51,112)
interface CMD_C_GetNewMailCount {
    userID: number;                                   // 用户标识
}

// 获取新邮件数量 (接收)
// 接收 SUB_MAIL_GetNewMailCount_RESULT (51,113)
interface CMD_S_GetNewMailCount {
    count: number;                                    // 新邮件数量
}

// 账号登陆 (发送)
// 发送 SUB_MB_LOGON_ACCOUNTS (8,2)
interface CMD_MB_LogonAccounts {
    moduleID: number;                                 // 模块标识(废弃)
    plazaVersion: number;                             // 大厅版本(定值0x06070001)
    deviceType: number;                               // 设备类型(参见DeviceType枚举)
    machineID: string;                                // 机器码
    accounts: string;                                 // 用户账号
    password: string;                                 // 登陆密码或者动态密码
    ipAddr: Array<number>;                            // 加密后IP地址
    channelName: string;                              // 推广渠道名称
    spreadBindID: number;                             // 剪贴板绑定标识
}

// 账号登陆 (接收)
// 接收 SUB_MB_LOGON_SUCCESS (8,100)
interface CMD_MB_LogonSuccess {
    faceID: number;                                   // 图像标识
    gender: number;                                   // 性别(废弃)
    customID: number;                                 // 自定义头像标识(废弃)
    userID: number;                                   // 用户标识
    gameID: number;                                   // 游戏标识
    experience: number;                               // 经验值(废弃)
    loveLiness: number;                               // 魅力值(废弃)
    accounts: string;                                 // 用户账号
    nickName: string;                                 // 用户昵称
    dynamicPass: string;                              // 动态密码
    userScore: number;                                // 用户背包金币
    tCCoin: number;                                   // 用户TC币
    userInsure: number;                               // 用户银行金币
    tCCoinInsure: number;                             // 用户银行TC币
    insureEnabled: number;                            // 是否开通银行
    isAgent: number;                                  // 是否俱乐部会长(废弃)
    moorMachine: number;                              // 是否绑定机器(废弃)
    roomCard: number;                                 // 房卡数量(废弃)
    lockServerID: number;                             // 当前锁定的服务器标识
    kindID: number;                                   // 当前锁定的服务器类型标识
    agentID: number;                                  // 俱乐部标识(废弃)
    userFlag: number;                                 // 用户标识掩码
}

// 注册账号 (发送)
// 发送 SUB_MB_REGISTER_ACCOUNTS (8,3)
interface CMD_MB_RegisterAccounts {
    moduleID: number;                                 // 模块标识(废弃)
    plazaVersion: number;                             // 大厅版本(定值0x06070001)
    deviceType: number;                               // 设备类型(参见DeviceType枚举)
    machineID: string;                                // 机器码
    accounts: string;                                 // 用户账号
    logonPass: string;                                // 登陆密码
    checkCode: string;                                // 手机验证码
    nickName: string;                                 // 用户昵称
    faceID: number;                                   // 图像标识
    gender: number;                                   // 性别
    ipAddr: Array<number>;                            // 加密后IP地址
    channelName: string;                              // 推广渠道名称
    spreadBindID: number;                             // 剪贴板绑定标识
}

// 注册账号 (接收)
// 接收 SUB_MB_LOGON_SUCCESS (8,100)
interface CMD_GP_LogonFailure {
    resultCode: number;                               // 全局通用错误码
    describeString: string;                           // 错误描述
}

// 三方登陆 (发送)
// 发送 SUB_MB_LOGON_OTHERPLATFORM (8,4)
interface CMD_MB_LogonOtherPlatform {
    moduleID: number;                                 // 模块标识(废弃)
    plazaVersion: number;                             // 大厅版本(定值0x06070001)
    deviceType: number;                               // 设备类型(参见DeviceType枚举)
    gender: number;                                   // 性别
    platformID: number;                               // 平台标识
    userUin: string;                                  // 三方账号标识
    nickName: string;                                 // 用户昵称
    compellation: string;                             // 签名(废弃)
    machineID: string;                                // 机器码
    mobilePhone: string;                              // 手机号码
    ipAddr: Array<number>;                            // 加密后IP地址
    accessToken: string;                              // 三方令牌
    email: string;                                    // 邮箱
    channelName: string;                              // 推广渠道名称
    spreadBindID: number;                             // 剪贴板绑定标识
}

// 游客登陆 (发送)
// 发送 SUB_MB_LOGON_VISITOR (8,5)
interface CMD_MB_LogonVisitor {
    moduleID: number;                                 // 模块标识(废弃)
    plazaVersion: number;                             // 大厅版本(定值0x06070001)
    deviceType: number;                               // 设备类型(参见DeviceType枚举)
    machineID: string;                                // 机器码
    mobilePhone: string;                              // 手机号码
    ipAddr: Array<number>;                            // 加密后IP地址
    channelName: string;                              // 推广渠道名称
    spreadBindID: number;                             // 剪贴板绑定标识
}

// 手机登陆（新） (发送)
// 发送 SUB_MB_LOGON_MOBILE_EX (8,7)
interface CMD_MB_LogonMobileEx {
    moduleID: number;                                 // 模块标识(废弃)
    plazaVersion: number;                             // 大厅版本(定值0x06070001)
    deviceType: number;                               // 设备类型(参见DeviceType枚举)
    machineID: string;                                // 机器码
    mobilePhone: string;                              // 手机号码
    dynamicPass: string;                              // 动态密码
    ipAddr: Array<number>;                            // 加密后IP地址
    channelName: string;                              // 推广渠道名称
    spreadBindID: number;                             // 剪贴板绑定标识
}

// 断线重登 (发送)
// 发送 SUB_MB_RELOGON (8,10)
interface CMD_MB_Relogon {
    gameID: number;                                   // 游戏标识
    dynamicPass: string;                              // 动态密码
    ip: string;                                       // IP地址
    machineID: string;                                // 机器码
}

// 断线重登 (接收)
// 接收 SUB_MB_RELOGON (8,10)
interface CMD_MB_RelogonResult {
    errorCode: number;                                // 全局通用错误码
    userID: number;                                   // 用户标识
    gameID: number;                                   // 游戏标识
    dynamicPass: string;                              // 动态密码
    regDate: number;                                  // 注册日期
}

// 登出 (发送)
// 发送 SUB_MB_LOGON_EXIT (8,11)
interface CMD_MB_LogonExit {
    userID: number;                                   // 用户标识
}

// 获取服务器当前时间戳 (接收)
// 接收 SUB_GP_SERVER_UTC_TIMESTAMP_RESULT (8,26)
interface tagUTCTimestamp {
    timestamp: number;                                // 时间戳
    zone: number;                                     // 时区
}

// 获取当前积分 (接收)
// 接收 SUB_MB_GetScoreInfo (8,110)
interface tagScoreInfo {
    score: number;                                    // 
    insureScore: number;                              // 
    tCCoin: number;                                   // 
    tCCoinInsure: number;                             // 
    growLevel: number;                                // VIP等级/成长等级
}

// 发送登陆短信 (接收)
// 接收 SUB_MB_SendSMSLogonCodeResult (8,121)
interface CMD_GP_SendSmsCodeResult {
    errorCode: number;                                // 全局通用错误码
    timestamp: number;                                // 时间戳
    restSecond: number;                               // 剩余秒数
}

// 重置密码 (发送)
// 发送 SUB_MB_RESET_LOGON_PASSWORD (8,130)
interface CMD_MB_ResetLogonPassword {
    accounts: string;                                 // 用户账号
    checkCode: string;                                // 手机验证码
    newPassword: string;                              // 新密码
}

// 重置密码 (接收)
// 接收 SUB_MB_RESET_LOGON_PASSWORD_RESULT (8,131)
interface CMD_MB_ResetLogonPasswordResult {
    errorCode: number;                                // 全局通用错误码
}

// IPv6-账号登陆 (发送)
// 发送 SUB_MB_LOGON_ACCOUNTS_V6 (8,602)
interface CMD_MB_LogonAccountsV6 {
    moduleID: number;                                 // 模块标识(废弃)
    plazaVersion: number;                             // 大厅版本(定值0x06070001)
    deviceType: number;                               // 设备类型(参见DeviceType枚举)
    machineID: string;                                // 机器码
    accounts: string;                                 // 用户账号
    password: string;                                 // 
    clientIP: string;                                 // IP地址
    channelName: string;                              // 推广渠道名称
}

// IPv6-注册账号 (发送)
// 发送 SUB_MB_REGISTER_ACCOUNTS_V6 (8,603)
interface CMD_MB_RegisterAccountsV6 {
    moduleID: number;                                 // 模块标识(废弃)
    plazaVersion: number;                             // 大厅版本(定值0x06070001)
    deviceType: number;                               // 设备类型(参见DeviceType枚举)
    machineID: string;                                // 机器码
    accounts: string;                                 // 用户账号
    logonPass: string;                                // 登陆密码
    checkCode: string;                                // 手机验证码
    nickName: string;                                 // 用户昵称
    faceID: number;                                   // 图像标识
    gender: number;                                   // 性别
    clientIP: string;                                 // IP地址
    channelName: string;                              // 推广渠道名称
}

// IPv6-三方登陆 (发送)
// 发送 SUB_MB_LOGON_OTHERPLATFORM_V6 (8,604)
interface CMD_MB_LogonOtherPlatformV6 {
    moduleID: number;                                 // 模块标识(废弃)
    plazaVersion: number;                             // 大厅版本(定值0x06070001)
    deviceType: number;                               // 设备类型(参见DeviceType枚举)
    gender: number;                                   // 性别
    platformID: number;                               // 平台标识
    userUin: string;                                  // 三方账号标识
    nickName: string;                                 // 用户昵称
    compellation: string;                             // 签名(废弃)
    machineID: string;                                // 机器码
    mobilePhone: string;                              // 手机号码
    clientIP: string;                                 // IP地址
    accessToken: string;                              // 三方令牌
}

// IPv6-游客登陆 (发送)
// 发送 SUB_MB_LOGON_VISITOR_V6 (8,605)
interface CMD_MB_LogonVisitorV6 {
    moduleID: number;                                 // 模块标识(废弃)
    plazaVersion: number;                             // 大厅版本(定值0x06070001)
    deviceType: number;                               // 设备类型(参见DeviceType枚举)
    machineID: string;                                // 机器码
    mobilePhone: string;                              // 手机号码
    clientIP: string;                                 // IP地址
    channelName: string;                              // 推广渠道名称
}

// IPv6-手机登陆 (发送)
// 发送 SUB_MB_LOGON_MOBILE_EX_V6 (8,607)
interface CMD_MB_LogonMobileExV6 {
    moduleID: number;                                 // 模块标识(废弃)
    plazaVersion: number;                             // 大厅版本(定值0x06070001)
    deviceType: number;                               // 设备类型(参见DeviceType枚举)
    machineID: string;                                // 机器码
    mobilePhone: string;                              // 手机号码
    dynamicPass: string;                              // 动态密码
    clientIP: string;                                 // IP地址
    channelName: string;                              // 推广渠道名称
}

// IPv6-断线重登 (发送)
// 发送 SUB_MB_RELOGON_V6 (8,610)
interface CMD_MB_RelogonV6 {
    gameID: number;                                   // 游戏标识
    dynamicPass: string;                              // 动态密码
    clientIP: string;                                 // IP地址
    machineID: string;                                // 机器码
}
