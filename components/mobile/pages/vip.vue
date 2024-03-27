<!-- @format -->

<template>
    <div class="mobile-vip w-full flex flex-col text-[12px]">
        <div
            v-if="isLogin"
            class="sticky bg-color-main-1-05 text-[12px] text-color-white flex items-center h-[52px] px-[15px] -top-[0.5px] shrink-0 z-[10]"
        >
            <div class="flex-1">
                <div class="!mb-[4px] text-[14px] vip-l-activate-title">VIP não ativado</div>
                <div class="text-[12px]">Depósito R$30,00 para ativar o VIP</div>
            </div>
            <button
                @click="openPopup('recharge')"
                class="h-[40px] font-bold bg-color-high-2 text-color-white px-[10px] rounded-[4px]"
            >
                Recarga
            </button>
        </div>
        <div v-if="!isLogin" class="mb-[25px] w-full">
            <div
                class="bg-cover relative bg-no-repeat h-0 pb-[48%] mobile-vip-bg"
                :style="{backgroundImage: `url(${vip1})`}"
            >
                <div class="absolute flex flex-col justify-between px-[20px] h-full w-full overflow-hidden">
                    <div
                        class="text-[12px] w-full text-color-text-0 line-clamp-3 text-ellipsis shrink-0 h-[38%] flex items-center"
                    >
                        Junte-se ao Clube VIP. Desbloqueie altos Cashbacks. Todos os tipos de presentes requintados.
                        Isso vai te surpreender!
                    </div>
                    <div class="w-[52%] flex-1 mt-[2px] flex flex-col justify-between pb-[4%]">
                        <button
                            @click="openPopup('login')"
                            class="bg-color-high-2 text-color-white font-bold text-[12px] h-[40px] rounded-[4px] px-[15px] w-[max-content] shrink-0"
                        >
                            Suba de nível para VIP
                        </button>
                    </div>
                </div>
            </div>
        </div>

        <div
            v-if="isLogin"
            class="mobile-vip-box w-full bg-no-repeat bg-cover h-0 pb-[48%] relative"
            :style="{backgroundImage: `url(${box})`}"
        >
            <div class="w-full h-full flex flex-col items-between">
                <div class="flex w-full justify-between">
                    <div>
                        <base-img
                            class="w-[160px] mx-auto"
                            :name="GetGrowUserStatusResult.growLevel"
                            type="png"
                            path="images/vip"
                        />
                    </div>

                    <div class="flex flex-col w-full justify-center gap-[10px] pr-[10px]">
                        <div>
                            <div>
                                <h2 class="text-[15px] font-bold">VIP{{ GetGrowUserStatusResult.growLevel }}</h2>
                            </div>
                        </div>
                        <div class="text-[10px]">
                            <div class="flex flex-row justify-between">
                                <span>RECARGA ACUMULADA</span>
                                <span
                                    >{{ formattedNum(GetGrowUserStatusResult.payCurrent) }}/{{
                                        formattedNum(GetGrowUserStatusResult.payRequire)
                                    }}</span
                                >
                            </div>
                            <div class="h-[6px] rounded-[3px] overflow-hidden relative my-[4px]">
                                <el-progress
                                    :percentage="
                                        (GetGrowUserStatusResult.payCurrent / GetGrowUserStatusResult.payRequire) * 100
                                    "
                                    color="#3764ff"
                                    :show-text="false"
                                />
                            </div>
                        </div>
                        <div class="text-[10px]">
                            <div class="flex flex-row justify-between">
                                <span>APOSTAS ACUMULADAS</span>
                                <span
                                    >{{ formattedNum(GetGrowUserStatusResult.betCurrent) }}/{{
                                        formattedNum(GetGrowUserStatusResult.betRequire)
                                    }}</span
                                >
                            </div>
                            <div class="h-[6px] rounded-[3px] overflow-hidden relative my-[4px]">
                                <el-progress
                                    :percentage="
                                        (GetGrowUserStatusResult.betCurrent / GetGrowUserStatusResult.betRequire) * 100
                                    "
                                    color="#3764ff"
                                    :show-text="false"
                                />
                            </div>
                        </div>
                    </div>
                </div>
                <div class="flex w-full justify-between font-bold mt-[5px]">
                    <p @click="VIPLevelFn" class="underline text-center flex-1">Nível VIP e Benefícios</p>
                    <div class="w-[50%] flex items-center relative">
                        <p>3574XP PARA VIP 4</p>
                        <i
                            class="inline-block h-[max-content] w-[max-content] icon sysicon-new-info-normal ml-[10px] text-[14px]"
                        ></i>
                    </div>
                </div>
            </div>
        </div>

        <div v-if="!isLogin" class="mb-[25px]">
            <h3 class="text-[15px] px-[15px] font-bold text-color-text-0 mb-[10px]">Passos</h3>
            <div class="min-h-[114px] relative z-[1] flex">
                <div class="w-full absolute top-[27.5px] left-0 setup-line"></div>
                <div class="relative flex flex-col justify-start items-center flex-1 top-[10px]">
                    <div class="rounded-[90px] bg-color-1 w-[86px] h-[36px]">
                        <div class="rounded-[90px] bg-color-text-2 opacity-[0.3] w-full h-full"></div>
                    </div>
                    <div
                        class="text-[12px] w-[76px] h-[26px] font-bold text-color-white rounded-[90px] bg-color-text-2 absolute top-[5px] left-0 right-0 mx-auto flex justify-center items-center z-[1]"
                    >
                        Passos1
                    </div>
                    <div class="text-[10px] text-color-text-1 text-center mt-[6px] px-[8px] py-[6px]">
                        Inscreva-se e ganhe recompensas exclusivas de VIP!
                    </div>
                </div>
                <div class="relative flex flex-col justify-start items-center flex-1 top-[10px]">
                    <div class="rounded-[90px] bg-color-1 w-[86px] h-[36px]">
                        <div class="rounded-[90px] bg-color-text-2 opacity-[0.3] w-full h-full"></div>
                    </div>
                    <div
                        class="text-[12px] w-[76px] h-[26px] font-bold text-color-white rounded-[90px] bg-color-text-2 absolute top-[5px] left-0 right-0 mx-auto flex justify-center items-center z-[1]"
                    >
                        Passos2
                    </div>
                    <div class="text-[10px] text-color-text-1 text-center mt-[6px] px-[8px] py-[6px] setup-center">
                        Aposte e ganhe pontos!
                    </div>
                </div>
                <div class="relative flex flex-col justify-start items-center flex-1 top-[10px]">
                    <div class="rounded-[90px] bg-color-1 w-[86px] h-[36px]">
                        <div class="rounded-[90px] bg-color-text-2 opacity-[0.3] w-full h-full"></div>
                    </div>
                    <div
                        class="text-[12px] w-[76px] h-[26px] font-bold text-color-white rounded-[90px] bg-color-text-2 absolute top-[5px] left-0 right-0 mx-auto flex justify-center items-center z-[1]"
                    >
                        Passos3
                    </div>
                    <div class="text-[10px] text-color-text-1 text-center mt-[6px] px-[8px] py-[6px]">
                        Desbloqueie Recompensas, Aumente Seus Benefícios!
                    </div>
                </div>
            </div>
        </div>

        <div v-if="isLogin" class="scrollX overflow-x-auto overflow-y-hidden w-full mb-[25px] pt-[6px] over bg-color-4">
            <div class="flex px-[15px] gap-[10px]">
                <div
                    v-for="(item, index) in vipList"
                    :key="index"
                    class="bg-color-main-1 relative h-[30px] w-[50px] text-color-0 leading-[30px] vip-level-item whitespace-nowrap px-[10px] flex-1 z-[2] rounded-[15px]"
                    :class="{active: activeIndex === item.value}"
                >
                    <p class="whitespace-nowrap w-full text-center">{{ item.text }}</p>
                </div>
            </div>
            <div class="bg-color-text-2 flex px-[15px] h-[10px] gap-[10px] mt-[6px] min-w-full w-[max-content]">
                <div
                    v-for="(item, index) in vipList"
                    :key="index"
                    class="relative h-[10px] w-[50px] flex-1 shrink-0 text-color-text-0 leading-[30px] bg-color-text-2 whitespace-nowrap px-[10px] z-[2] vip-level-item-tag"
                >
                    <p class="whitespace-nowrap w-full text-center select-none opacity-0 invisible">{{ item.text }}</p>
                </div>
            </div>
        </div>
        <div class="px-[15px]">
            <h3 class="text-[15px] font-bold text-color-text-0">
                VIP4 <span style="color: #516382">VIP Benefícios</span>
            </h3>
            <div class="actived rounded-[4px] pt-[10px] mt-[10px] flex flex-col">
                <div class="flex items-center flex-1 p-[10px]">
                    <div
                        class="w-[70px] h-[58px] mr-[16px] shrink-0 bg-no-repeat bg-cover vip-level-one"
                        :style="{backgroundImage: `url(${vip_jyjj_icon})`}"
                    ></div>
                    <div>
                        <div class="text-[14px] text-color-text-0 mb-[6px]">Resgate de hoje</div>
                        <p style="color: #97a8c7" class="text-[12px] w-full flex">
                            Bônus <span class="pl-[5px]" style="color: #fff; font-family: FZ"> R$ 3,00</span>
                        </p>
                    </div>
                </div>
                <button
                    style="background-color: #5e6063"
                    class="flex submit items-center min-h-[40px] justify-center w-full rounded-[4px] text-[13px] font-bold text-color-white"
                >
                    COLETAR
                </button>
            </div>

            <div class="actived rounded-[4px] pt-[10px] mt-[10px] flex flex-col">
                <div class="flex items-center flex-1 p-[10px]">
                    <div
                        class="w-[70px] h-[58px] mr-[16px] shrink-0 bg-no-repeat bg-cover vip-level-two"
                        :style="{backgroundImage: `url(${vip_jinbi1})`}"
                    ></div>
                    <div>
                        <div class="text-[14px] text-color-text-0 mb-[6px]">Resgate de hoje</div>
                        <p style="color: #97a8c7" class="text-[12px] w-full flex">
                            Bônus <span class="pl-[5px]" style="color: #fff; font-family: FZ"> R$ 3,00</span>
                        </p>
                    </div>
                </div>
                <button
                    style="background-color: #5e6063"
                    class="flex submit items-center min-h-[40px] justify-center w-full rounded-[4px] text-[13px] font-bold text-color-white"
                >
                    COLETAR
                </button>
            </div>
        </div>
    </div>
</template>

<script setup lang="ts">
    import {commands} from "~/core/define";
    const {$importImage} = useNuxtApp();
    const activeIndex = ref(0);
    const dialogVisible = useVipLevel();
    const isLogin = useIsLogin();
    const loginInfo = ref<CMD_MB_LogonSuccess>();
    let ws: INetService;
    const UserStatus = reactive<CMD_MB_GetGrowUserStatus>({
        userID: 0,
        experienceRenderMode: 1,
    });
    const GetGrowUserStatusResult = ref<CMD_MB_GetGrowUserStatusResult>({
        growLevel: 0, // 成长等级/VIP等级
        payCurrent: 0, // 当前充值额
        payRequire: 0, // 需求充值额
        betCurrent: 0, // 当前下注额
        betRequire: 0, // 需求下注额
        dailyAddition: 0, // 当前等级日转盘加成
        dailyAdditionNext: 0, // 下个等级日转盘加成
        weeklyAddition: 0, // 当前等级周转盘加成
        weeklyAdditionNext: 0, // 下个等级周转盘加成
        monthlyAddition: 0, // 当前等级月转盘加成
        monthlyAdditionNext: 0, // 下个等级周转盘加成
    });
    const tagScoreInfo = useTagScoreInfo();
    const vipList = [
        {text: "VIP 0", value: 0},
        {text: "VIP 1", value: 1},
        {text: "VIP 2", value: 2},
        {text: "VIP 3", value: 3},
        {text: "VIP 4", value: 4},
        {text: "VIP 5", value: 5},
        {text: "VIP 6", value: 6},
        {text: "VIP 7", value: 7},
        {text: "VIP 8", value: 8},
        {text: "VIP 9", value: 9},
        {text: "VIP 10", value: 10},
        {text: "VIP 11", value: 11},
        {text: "VIP 12", value: 12},
        {text: "VIP 13", value: 13},
        {text: "VIP 14", value: 14},
        {text: "VIP 15", value: 15},
        {text: "VIP 16", value: 16},
        {text: "VIP 17", value: 17},
        {text: "VIP 18", value: 18},
        {text: "VIP 19", value: 19},
        {text: "VIP 20", value: 20},
    ];

    const box = $importImage("box", "png", "images/vip");
    const vip1 = $importImage("vip1", "png", "images/vip");
    const vip_jyjj_icon = $importImage("vip_jyjj_icon", "png", "images/vip");
    const vip_jinbi1 = $importImage("vip_jinbi1", "png", "images/vip");

    const VIPLevelFn = () => {
        dialogVisible.value = true;
    };

    const getGrowUserStatusFn = () => {
        return new Promise((resolve, reject) => {
            let {userID} = loginInfo.value as CMD_MB_LogonSuccess;
            UserStatus.userID = userID;
            getGrowUserStatus(UserStatus, "vip", (s: INetService, e: INetEventParam) => {
                if (e.scmd === commands.SUB_MB_GetGrowUserStatus_RESULT) {
                    GetGrowUserStatusResult.value = e.data as CMD_MB_GetGrowUserStatusResult;
                    activeIndex.value = GetGrowUserStatusResult.value.growLevel;
                    ws = s;
                    resolve(e.data);
                }
            });
        });
    };

    const init = () => {
        const loginInfos = getLoginInfo();
        loginInfo.value = loginInfos;

        let result = schedule([getGrowUserStatusFn], 2);
        result.then((res) => {});
    };

    const leave = () => {
        ws.off("vip");
    };
    onMounted(() => {
        init();
    });
    onActivated(() => {
        init();
    });

    onUnmounted(() => {
        leave();
    });

    onDeactivated(() => {
        leave();
    });
</script>

<style lang="scss" scoped>
    .mobile-vip {
        padding-bottom: 30px;

        .scrollX {
            background: #1d2027;
            .bg-color-text-2 {
                background: #516382;
            }
        }
        .active {
            background: #286aff;
            &::after {
                background: #286aff;
                bottom: -3px;
                content: "";
                height: 8px;
                left: 0;
                margin: auto;
                position: absolute;
                right: 0;
                -webkit-transform: rotate(45deg);
                -moz-transform: rotate(45deg);
                -ms-transform: rotate(45deg);
                -o-transform: rotate(45deg);
                transform: rotate(45deg);
                width: 8px;
                z-index: -1;
            }
        }

        .vip-level-item-tag:after {
            color: #15161c;
            content: "\b7";
            font-size: 15px;
            font-weight: 900;
            height: 10px;
            inset: 0;
            line-height: 10px;
            margin: auto;
            position: absolute;
            width: 10px;
        }

        .actived {
            background-image: linear-gradient(
                    180deg,
                    rgba(191, 194, 254, 0.96) 0%,
                    rgba(110, 117, 163, 0.96) 0%,
                    rgba(29, 40, 72, 0.96) 0%,
                    rgba(30, 37, 57, 0.97) 75%,
                    rgba(30, 33, 42, 0.97) 100%
                ),
                linear-gradient(#313642, #313642);
        }

        .bg-color-1 {
            background: #15161c;
        }
        .bg-color-text-2 {
            background: #516382;
        }
        .text-color-white {
            color: #fff;
        }
        .text-color-text-1 {
            color: #97a8c7;
        }
        .setup-line {
            border: 1px dashed #516382;
        }
        .bg-color-high-2 {
            background: #ff7300;
        }
        .bg-color-main-1-05 {
            background: rgb(40 65 145);
        }
        .setup-center {
            border-left: 1px solid #23262f;
            border-right: 1px solid #23262f;
        }
    }
</style>
