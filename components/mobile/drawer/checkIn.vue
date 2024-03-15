<!-- @format -->

<template>
    <client-only
        ><Lazy-el-dialog
            v-model="dialogVisible"
            modal-class="mobile-el-checkIn-dialog"
            :show-close="false"
            title=""
            width="100%"
            destroy-on-close
            center
            align-center
            @close="handleClose"
        >
            <template #header="{close, titleId, titleClass}">
                <div class="my-header">
                    <div
                        class="sticky top-0 z-[1] w-full flex items-center bg-color-linear-12 text-color-text-0 h-[44px] shrink-0"
                    >
                        <div class="flex-1 flex items-center">
                            <div class="flex items-center pl-[15px] shrink-0"></div>
                            <div class="text-[15px] font-bold">BONUS DIÁRIO</div>
                        </div>
                        <div
                            class="closeBtn absolute right-[0px] top-[12px] bottom-0 m-auto z-[1] pr-[16px] pl-[16px]"
                            @click="handleClose"
                        >
                            <el-icon size="22px"><component is="CloseBold"></component></el-icon>
                        </div>
                    </div>
                </div>
            </template>
            <div class="px-[15px] pt-[15px] w-full h-[600px] relative checkIn-main">
                <div class="w-full">
                    <div class="scrollX overflow-x-auto overflow-y-hidden overscroll-none w-full text-[12px]">
                        <div class="flex gap-[5px]">
                            <div
                                class="flex flex-col gap-[10px]"
                                v-for="(item, index) in vipList"
                                :key="index"
                                :class="{active: activeIndex === item.value}"
                            >
                                <div
                                    class="bg-color-main-1 scrollX-box relative text-color-0 p-[5px] w-[50px] vip-level-item whitespace-nowrap flex-1 z-[2] rounded-[4px]"
                                >
                                    <base-img
                                        :style="{transform: 'scale(' + item.scale + ')'}"
                                        class="w-[40px]"
                                        :name="item.value"
                                        type="png"
                                        path="images/vip"
                                    />
                                </div>
                                <p class="whitespace-nowrap w-full text-center font-black">{{ item.text }}</p>
                            </div>
                        </div>
                        <div
                            class="bg-color-text-2 progress flex h-[10px] gap-[5px] mt-[6px] min-w-full w-[max-content]"
                        >
                            <div
                                v-for="(item, index) in vipList"
                                :class="{activeText: activeIndex === item.value}"
                                :key="index"
                                class="relative h-[10px] flex-1 shrink-0 w-[50px] text-color-text-0 bg-color-text-2 whitespace-nowrap px-[25px] z-[2] vip-level-item-tag"
                            ></div>
                        </div>
                    </div>
                </div>

                <div class="w-full mt-[10px] grid grid-cols-3 gap-1">
                    <div
                        class="checkIn-box h-[100px] flex flex-col justify-center items-center relative"
                        v-for="(item, index) in checkList"
                        :class="'status' + item.status"
                        :key="item.value"
                    >
                        <div class="text-[12px] absolute left-0 top-0 px-[8px] py-[2px] checkIn-box-day">
                            {{ item.day }} Dia
                        </div>
                        <div class="flex flex-col justify-center items-center checkIn-box-price">
                            <div class="h-[40px] flex justify-center items-center relative">
                                <base-img class="w-[40px]" :name="item.pic" type="png" path="images/checkIn" />
                                <base-img
                                    v-if="item.status === '1'"
                                    class="w-[55px] !absolute left-[-6px]"
                                    name="alegou"
                                    type="png"
                                    path="images/checkIn"
                                />
                            </div>
                            <span class="text-[12px] font-black">{{ formattedNum(item.price) }}</span>
                        </div>

                        <button
                            class="btn flex submit h-[22px] items-center justify-center w-full text-[12px] absolute bottom-0"
                        >
                            <span v-if="item.status !== '3'">Check in</span>
                            <base-img
                                v-if="item.status === '3'"
                                class="!w-[12px]"
                                name="suo"
                                type="png"
                                path="images/checkIn"
                            />
                        </button>
                    </div>
                </div>
                <div class="w-full text-center text-[12px] mt-[5px]" style="color: #506383">
                    Ao alcançar a meta de check-ins consecutivos, você recebe uma recompensa extra
                </div>
                <div
                    class="w-full flex flex-row items-center justify-between checkIn-check relative py-[20px] mt-[10px]"
                >
                    <div class="flex flex-row items-center justify-between">
                        <div class="flex flex-col items-center text-[12px] gap-[5px]">
                            <span class="font-black absolute top-0 w-max" style="color: #f39d00">0 Dia</span>
                            <base-img class="w-[30px]" name="33" type="png" path="images/checkIn" />
                            <span class="absolute bottom-0 w-max"></span>
                        </div>
                    </div>
                    <div
                        v-for="(item, index) in checkDay"
                        :key="item.value"
                        class="flex flex-row w-full items-center justify-between ml-[-1px]"
                    >
                        <el-progress
                            style="flex: 1"
                            class="mr-[-3px]"
                            :percentage="item.percentage"
                            color="#3764ff"
                            :show-text="false"
                        />
                        <div class="flex flex-col items-center text-[12px] gap-[5px]">
                            <span class="font-black absolute top-0 w-max" style="color: #f39d00"
                                >{{ item.day }} Dia</span
                            >
                            <div class="w-[30px] relative">
                                <base-img
                                    v-if="item.status === '0'"
                                    class="w-[30px]"
                                    name="33"
                                    type="png"
                                    path="images/checkIn"
                                />
                                <base-img
                                    v-if="['1', '2'].includes(item.status)"
                                    class="w-[30px]"
                                    name="56"
                                    type="png"
                                    path="images/checkIn"
                                />
                                <base-img
                                    v-if="item.status === '1'"
                                    class="w-[30px] !absolute left-0 top-[-5px]"
                                    name="44"
                                    type="png"
                                    path="images/checkIn"
                                />
                            </div>

                            <span class="absolute bottom-1 w-max">{{ item.price }}</span>
                            <button
                                v-if="item.status === '1'"
                                class="flex checkIn-btn absolute submit items-center h-[24px] px-[6px] justify-center w-max rounded-[4px] text-[10px] font-bold text-color-white mt-[45px]"
                            >
                                <span class="font-black">Check in</span>
                            </button>
                        </div>
                    </div>
                </div>
                <div class="w-full text-center text-[12px] mt-[35px]" style="color: #506383">
                    Você pode obter um monte de moedas de ouro todos os dias
                </div>
            </div>
        </Lazy-el-dialog></client-only
    >
</template>

<script setup lang="ts">
    const {locale, t} = useI18n();
    const dialogVisible = ref(false);
    const isLogin = useIsLogin();
    const route = useRoute();
    const activeIndex = ref("1");
    const vipList = [
        {text: "VIP 0", value: "0", scale: 1.5, price: "65.00", preferential: "20%"},
        {text: "VIP 1", value: "1", scale: 1.5, price: "65.00", preferential: "20%"},
        {text: "VIP 2", value: "2", scale: 1.5, price: "65.00", preferential: "20%"},
        {text: "VIP 3", value: "3", scale: 1.3, price: "65.00", preferential: "20%"},
        {text: "VIP 4", value: "4", scale: 1.3, price: "65.00", preferential: "20%"},
        {text: "VIP 5", value: "5", scale: 1.3, price: "65.00", preferential: "20%"},
        {text: "VIP 6", value: "6", scale: 1.3, price: "65.00", preferential: "20%"},
        {text: "VIP 7", value: "7", scale: 1.3, price: "65.00", preferential: "20%"},
        {text: "VIP 8", value: "8", scale: 1.3, price: "65.00", preferential: "20%"},
        {text: "VIP 9", value: "9", scale: 1.3, price: "65.00", preferential: "20%"},
        {text: "VIP 10", value: "10", scale: 1.3, price: "65.00", preferential: "20%"},
        {text: "VIP 11", value: "11", scale: 1.3, price: "65.00", preferential: "20%"},
        {text: "VIP 12", value: "12", scale: 1.3, price: "65.00", preferential: "20%"},
        {text: "VIP 13", value: "13", scale: 1.3, price: "65.00", preferential: "20%"},
        {text: "VIP 14", value: "14", scale: 1.2, price: "65.00", preferential: "20%"},
        {text: "VIP 15", value: "15", scale: 1.2, price: "65.00", preferential: "20%"},
        // {text: "VIP 16", value: "16", scale: 1.5, price: "65.00", preferential: "20%"},
        // {text: "VIP 17", value: "17", scale: 1.5, price: "65.00", preferential: "20%"},
        // {text: "VIP 18", value: "18", scale: 1.5, price: "65.00", preferential: "20%"},
        // {text: "VIP 19", value: "19", scale: 1.5, price: "65.00", preferential: "20%"},
        // {text: "VIP 20", value: "20", scale: 1.5, price: "65.00", preferential: "20%"},
    ];

    const checkList = [
        {
            day: "1",
            pic: "1",
            price: 1,
            value: "1",
            status: "1",
        },
        {
            day: "2",
            pic: "2",
            price: 2,
            value: "2",
            status: "1",
        },
        {
            day: "3",
            pic: "3",
            price: 3,
            value: "3",
            status: "2",
        },
        {
            day: "4",
            pic: "4",
            price: 4,
            value: "4",
            status: "3",
        },
        {
            day: "5",
            pic: "5",
            price: 5,
            value: "5",
            status: "3",
        },
        {
            day: "6",
            pic: "6",
            price: 6,
            value: "6",
            status: "3",
        },
        {
            day: "7",
            pic: "7",
            price: 7,
            value: "7",
            status: "3",
        },
    ];

    const checkDay = [
        {
            day: 7,
            price: 0,
            value: 1,
            status: "0",
            percentage: 100,
        },
        {
            day: 10,
            price: 0,
            value: 2,
            status: "1",
            percentage: 100,
        },
        {
            day: 15,
            price: 0,
            value: 3,
            status: "2",
            percentage: 0,
        },
        {
            day: 20,
            price: 0,
            value: 4,
            status: "2",
            percentage: 0,
        },
    ];
    const formattedNum = (num: number) => {
        return num.toLocaleString("de-DE", {
            minimumFractionDigits: 2,
            maximumFractionDigits: 2,
        });
    };
    const handleClose = () => {
        closePopup("checkIn");
    };

    watchEffect(() => {
        dialogVisible.value = getHashValue(route.hash) === "checkIn";
    });
</script>

<style lang="scss">
    .mobile-el-checkIn-dialog {
        backdrop-filter: blur(12px);
        .el-dialog {
            width: calc(100% - 40px);
            max-width: calc(var(--maxWidth) - 40px);
            border-radius: 8px;
            overflow: hidden;
        }
        .el-dialog__header {
            margin: 0 !important;
            padding: 0 !important;
        }
        .el-dialog__body {
            padding: 0 !important;
            background: #1d2027;
        }
        .checkIn-main {
            padding-bottom: 15px;
            overflow-x: hidden;
        }
        .scrollX {
            .bg-color-text-2 {
                background: #33353f;
            }
        }

        .vip-level-item {
            background: #33353f;
            &::after {
                background: #33353f;
                bottom: -4px;
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
        .active {
            color: #3eb158;
            .scrollX-box {
                background: #274333;
                border: solid 1px #4cf76c;

                &::after {
                    background: #274333;
                    bottom: -5px;
                    content: "";
                    height: 8px;
                    left: 0;
                    margin: auto;
                    position: absolute;
                    right: 0;
                    border-right: solid 1px #4cf76c;
                    border-bottom: solid 1px #4cf76c;
                    -webkit-transform: rotate(45deg);
                    -moz-transform: rotate(45deg);
                    -ms-transform: rotate(45deg);
                    -o-transform: rotate(45deg);
                    transform: rotate(45deg);
                    width: 8px;
                    z-index: -1;
                }
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
        .activeText {
            &:after {
                content: "";
                font-size: 15px;
                font-weight: 900;
                height: 5px;
                inset: 0;
                line-height: 5px;
                margin: auto;
                position: absolute;
                width: 5px;
                box-shadow: 0px 0px 6px 2px #4eff00;
                background: #00ff38;
                border-radius: 50%;
            }
        }
        .bg-color-linear-12 {
            background: linear-gradient(270deg, #1d2027, #1b2746);
        }

        .progress {
            &::before {
                content: "";
                background: #33353f;
                position: absolute;
                left: 0;
                width: 15px;
                height: 10px;
            }
            &::after {
                content: "";
                background: #33353f;
                position: absolute;
                right: 0;
                width: 15px;
                height: 10px;
            }
        }

        .checkIn-box {
            border-radius: 4px;
            border: solid 1px #464953;
            color: #ffffff;
            &:nth-child(7) {
                grid-column: span 3 / span 3;
                .checkIn-box-price {
                    flex-direction: row-reverse;
                    margin-bottom: 18px;
                    gap: 10px;
                }

                .el-image {
                    width: 80px;
                    left: 0;
                }
            }
        }

        .checkIn-box-day {
            background-color: #33353f;
            border-radius: 4px 0 4px 0;
            color: #ffffff;
            font-weight: bold;
        }

        .btn {
            background-color: #464953;
            border-radius: 0px 0px 4px 4px;
        }
        .status1 {
            color: #a1a2a3;
        }
        .status2 {
            background-image: linear-gradient(0deg, #3c201f 0%, #1f1f25 100%), linear-gradient(#000000, #000000);
            // border-color: #f88a2d;
            color: #ffde00;
            .checkIn-box-day {
                background-color: #ffa800;
            }
            .btn {
                color: #ffffff;
                background-image: linear-gradient(90deg, #5ed404 0%, #38b20d 100%), linear-gradient(#000000, #000000);
            }
        }

        .status3 {
            .btn {
                background-color: #1a4a04;
            }
        }
        .checkIn-check {
            position: relative;
            &::before {
                content: "";
                width: 99%;
                height: 6px;
                position: absolute;
                left: 2px;
                background-color: #363637;
            }
        }
        .checkIn-btn {
            background-image: linear-gradient(90deg, #5ed404 0%, #38b20d 100%), linear-gradient(#53c16c, #53c16c);
        }
        .el-progress-bar__inner {
            border-radius: 0 100px 100px 0;
        }
        .el-progress-bar__outer {
            border-radius: 0;
        }
    }
</style>
