<!-- @format -->

<template>
    <LazyMobileModelDrawer
        :title="'vipCharge'"
        :header="false"
        :drawer="drawerDetail"
        :hash="'vipCharge'"
        :opened="openFn"
    >
        <template #body>
            <div class="mobile-sign">
                <div class="mobile-sign-header">
                    <div class="flex justify-start items-center">
                        <BaseIcon @click="closeFn" name="left" style="font-size: 26px" class="font-bold mr-[16px]" />
                        <base-img class="h-[29px] w-[91px] logo" name="logo" type="png" path="images/logo" />
                    </div>
                </div>

                <div class="mobile-sign-content px-[16px]">
                    <div class="py-[16px] w-full relative">
                        <div
                            class="mobile-sign-content-banner w-full bg-cover relative bg-no-repeat h-0 pb-[45%]"
                            :style="{backgroundImage: `url(${h5_libao_xinxika_bg})`}"
                        >
                            <div class="flex flex-row w-full justify-between">
                                <div class="flex flex-col pl-[16px] gap-[15px]">
                                    <div class="w-[52px] flex justify-center items-center relative">
                                        <base-img
                                            class="w-[52px]"
                                            name="h5_libao_hongsejiaobiao_bg"
                                            type="png"
                                            path="images/vip"
                                        />
                                        <div
                                            class="absolute top-[1px] flex flex-col justify-center items-center text-[10px]"
                                            style="color: #fff838"
                                        >
                                            <span
                                                class="text-[14px] flex justify-center items-center"
                                                style="font-family: FZ"
                                                >+30%</span
                                            >
                                            <span class="font-bold leading-[10px]">EXTRA</span>
                                        </div>
                                    </div>

                                    <div class="flex flex-row justify-between gap-[28px]">
                                        <div class="flex flex-col text-[10px] gap-[6px]" style="color: #fef888">
                                            <span>Valor líquido</span>
                                            <span class="break-all">Valor antes do desconto</span>
                                        </div>
                                        <div class="flex flex-col text-right">
                                            <span class="text-[16px]" style="font-family: FZ">65.00</span>
                                            <span class="text-[14px] strike">50.00</span>
                                        </div>
                                    </div>
                                </div>

                                <div>
                                    <base-img
                                        class="w-[136px]"
                                        name="h5_libao_jinbiv20_icon"
                                        type="png"
                                        path="images/vip"
                                    />
                                </div>
                            </div>
                            <div class="w-full px-[16px]">
                                <button
                                    class="flex submit items-center min-h-[40px] justify-center w-full rounded-[4px] text-[14px] text-color-white"
                                >
                                    <span style="font-family: FZ">R$ {{ formattedNum(50) }}</span>
                                </button>
                            </div>
                        </div>
                    </div>

                    <div class="w-full">
                        <div
                            class="scrollX overflow-x-auto overflow-y-hidden w-full mb-[25px] pb-[25px] over text-[12px]"
                        >
                            <div class="flex gap-[10px]">
                                <div class="flex flex-col gap-[10px]" v-for="(item, index) in vipList" :key="index">
                                    <div
                                        class="bg-color-main-1 relative text-color-0 p-[10px] w-[70px] vip-level-item whitespace-nowrap flex-1 z-[2] rounded-[4px]"
                                        :class="{active: activeIndex === item.value}"
                                    >
                                        <base-img
                                            :style="{transform: 'scale(' + item.scale + ')'}"
                                            class="w-[50px]"
                                            :name="item.value"
                                            type="png"
                                            path="images/vip"
                                        />
                                    </div>
                                    <p class="whitespace-nowrap w-full text-center">{{ item.price }}</p>
                                </div>
                            </div>
                            <div class="bg-color-text-2 flex h-[10px] gap-[10px] mt-[6px] min-w-full w-[max-content]">
                                <div
                                    v-for="(item, index) in vipList"
                                    :key="index"
                                    class="relative h-[10px] flex-1 shrink-0 w-[70px] text-color-text-0 bg-color-text-2 whitespace-nowrap px-[25px] z-[2] vip-level-item-tag"
                                >
                                    <p class="whitespace-nowrap w-full text-center mt-[17px]">
                                        {{ item.preferential }}
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>

                    <el-divider><span class="font-black">Recompensa diária</span> </el-divider>

                    <div class="flex flex-col gap-[10px] pb-[16px]">
                        <div
                            v-for="(item, index) in checkList"
                            :key="index"
                            class="vipCharge-box flex flex-row justify-between items-center p-[18px] rounded-[4px]"
                            :class="'status' + item.status"
                        >
                            <div class="flex flex-row justify-center items-center gap-[10px]">
                                <base-img
                                    v-if="item.status === '1'"
                                    class="w-[30px]"
                                    name="h5_libao_meirijiangli2_icon"
                                    type="png"
                                    path="images/vip"
                                />
                                <base-img
                                    v-else
                                    class="w-[30px]"
                                    name="h5_libao_meirijiangli1_icon"
                                    type="png"
                                    path="images/vip"
                                />
                                <span>Dia {{ item.day }}</span>
                            </div>
                            <span class="fontfamily text-[18px]">R$ {{ formattedNum(item.money) }}</span>
                            <div class="w-[100px] h-[32px] flex justify-end items-center vipCharge-box-info">
                                <base-img
                                    v-if="item.status === '0'"
                                    class="h-[37px] w-[70px]"
                                    name="h5_libao_recebeu_icon"
                                    type="png"
                                    path="images/vip"
                                />
                                <span
                                    v-if="item.status === '1'"
                                    class="flex flex-row justify-center items-center text-[14px] font-black"
                                    >Receber
                                    <el-icon class="iconRight pl-[10px]"
                                        ><i class="icon-right iconfont !text-[18px] !font-black"></i></el-icon
                                ></span>
                                <span
                                    v-if="item.status === '2'"
                                    class="flex flex-row justify-center items-center text-[14px]"
                                    >Não iniciado</span
                                >
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </template>
    </LazyMobileModelDrawer>
</template>

<script setup>
    import * as spine from "@esotericsoftware/spine-player";
    const {$importImage} = useNuxtApp();
    const route = useRoute();
    const router = useRouter();
    const drawerDetail = ref(false);
    const activeIndex = ref("1");
    onMounted(() => {
        //   let anim = lottie.loadAnimation({
        //     path: "./lottie/lianxudengru.json",
        //     loop: true,
        //     autoplay: true,
        //     renderer: "svg",
        //     container: document.querySelector(".container"),
        //   });
        //   anim.play();
    });

    const openFn = () => {
        // new spine.SpinePlayer("container", {
        //   // jsonUrl: "./lottie/anniu.json", //json文件
        //   // atlasUrl: "./lottie/anniu.atlas",
        //   jsonUrl: "https://esotericsoftware.com/files/examples/4.0/spineboy/export/spineboy-pro.json", //json文件
        //   atlasUrl: "https://esotericsoftware.com/files/examples/4.0/spineboy/export/spineboy-pma.atlas",
        //   premultipliedAlpha: true,
        //   animation: "run",
        //   alpha: true,
        //   showControls: false,
        // });
    };

    const vipList = [
        {text: "VIP 0", value: "0", scale: 1.8, price: "65.00", preferential: "20%"},
        {text: "VIP 1", value: "1", scale: 1.8, price: "65.00", preferential: "20%"},
        {text: "VIP 2", value: "2", scale: 1.8, price: "65.00", preferential: "20%"},
        {text: "VIP 3", value: "3", scale: 1.7, price: "65.00", preferential: "20%"},
        {text: "VIP 4", value: "4", scale: 1.7, price: "65.00", preferential: "20%"},
        {text: "VIP 5", value: "5", scale: 1.7, price: "65.00", preferential: "20%"},
        {text: "VIP 6", value: "6", scale: 1.7, price: "65.00", preferential: "20%"},
        {text: "VIP 7", value: "7", scale: 1.7, price: "65.00", preferential: "20%"},
        {text: "VIP 8", value: "8", scale: 1.7, price: "65.00", preferential: "20%"},
        {text: "VIP 9", value: "9", scale: 1.7, price: "65.00", preferential: "20%"},
        {text: "VIP 10", value: "10", scale: 1.7, price: "65.00", preferential: "20%"},
        {text: "VIP 11", value: "11", scale: 1.7, price: "65.00", preferential: "20%"},
        {text: "VIP 12", value: "12", scale: 1.7, price: "65.00", preferential: "20%"},
        {text: "VIP 13", value: "13", scale: 1.7, price: "65.00", preferential: "20%"},
        {text: "VIP 14", value: "14", scale: 1.6, price: "65.00", preferential: "20%"},
        {text: "VIP 15", value: "15", scale: 1.6, price: "65.00", preferential: "20%"},
        // {text: "VIP 16", value: "16", scale: 1.5, price: "65.00", preferential: "20%"},
        // {text: "VIP 17", value: "17", scale: 1.5, price: "65.00", preferential: "20%"},
        // {text: "VIP 18", value: "18", scale: 1.5, price: "65.00", preferential: "20%"},
        // {text: "VIP 19", value: "19", scale: 1.5, price: "65.00", preferential: "20%"},
        // {text: "VIP 20", value: "20", scale: 1.5, price: "65.00", preferential: "20%"},
    ];

    const checkList = [
        {day: "1", money: 5, value: 1, status: "0"},
        {day: "2", money: 5, value: 2, status: "1"},
        {day: "3", money: 5, value: 3, status: "2"},
        {day: "4", money: 5, value: 4, status: "2"},
    ];

    const formattedNum = (num) => {
        return num.toLocaleString("de-DE", {
            minimumFractionDigits: 2,
            maximumFractionDigits: 2,
        });
    };
    const closeFn = () => {
        closePopup("vipCharge");
    };
    const h5_libao_xinxika_bg = $importImage("h5_libao_xinxika_bg", "png", "images/vip");
    watchEffect(() => {
        drawerDetail.value = getHashValue(route.hash) === "vipCharge";
    });
</script>

<style lang="scss" scoped>
    .mobile-sign {
        width: 100%;
        height: 100%;
        display: flex;
        flex-direction: column;
        background-color: #25262b;
        .mobile-sign-header {
            width: 100%;
            height: 60px;
            padding: 0 15px;
            display: flex;
            flex-direction: row;
            justify-content: space-between;
            align-items: center;
            // box-shadow: 0px 1px 15px 0px rgba(0, 0, 0, 0.5);
            position: relative;
            z-index: 1;
        }

        .mobile-sign-content {
            width: 100%;
            background-color: #000;
            height: 100%;
            padding-bottom: env(safe-area-inset-bottom);
            overflow-x: hidden;
            position: relative;
            box-sizing: border-box;

            .strike {
                position: relative;
                font-weight: bold;
                color: #c1773c;
                padding: 0 5px;
                margin-right: -5px;
            }

            .strike:before {
                content: "";
                content: "";
                position: absolute;
                left: 0px;
                top: 50%;
                width: 100%;
                height: 1px;
                background: #fff838;
                transform: rotate(353deg) translateY(-50%);
            }

            .submit {
                background-image: linear-gradient(90deg, #5dc876 0%, #35ab4e 100%), linear-gradient(#53c16c, #53c16c);
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
            .vipCharge-box {
                .vipCharge-box-info {
                    border-left: 1px solid #33353d;
                }
            }
            .status0 {
                border: solid 1px #3b3e46;
            }
            .status1 {
                border: solid 1px #4cf76c;
                color: #5bc774;
                .vipCharge-box-info {
                    border-left: 1px solid #5bc774;
                }
            }
            .status2 {
                border: solid 1px #3b3e46;
                color: #6f748d;
            }
            .fontfamily {
                font-family: FZ;
            }
        }
        ::v-deep(.el-divider__text) {
            background-color: #000;
            padding: 0 8px;
        }
    }
</style>
