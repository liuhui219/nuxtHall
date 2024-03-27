<!-- @format -->

<template>
    <client-only
        ><LazyMobileModelDrawer
            :title="'raffleWheel'"
            :header="false"
            :drawer="drawerDetail"
            :hash="'raffleWheel'"
            :opened="openedFn"
            :closed="closedFn"
        >
            <template #body>
                <div class="mobile-sign">
                    <div class="mobile-sign-header">
                        <div class="flex justify-start items-center">
                            <BaseIcon
                                @click="closeFn"
                                name="left"
                                style="font-size: 26px"
                                class="font-bold mr-[16px]"
                            />
                            <base-img class="h-[29px] w-[91px] logo" name="logo" type="png" path="images/logo" />
                        </div>
                    </div>

                    <div class="mobile-sign-content">
                        <div class="flex flex-col gap-[10px]">
                            <el-divider><span class="font-black">Roleta de sorteio</span> </el-divider>
                            <div class="mobile-sign-header-bg relative">
                                <base-img class="w-full" name="h5_daili2_kadi_bg" type="png" path="images/share" />
                                <div
                                    class="w-full h-full absolute top-0 left-0 flex flex-col justify-around px-[16px] pt-[8px]"
                                >
                                    <div class="w-full flex justify-center items-center text-[18px] font-black">
                                        Recba <span class="px-[8px] money font-thin"> R$200.00 </span> de graca
                                    </div>
                                    <div class="w-full money text-[34px]">R$200.00</div>
                                    <div class="flex flex-col gap-[5px]">
                                        <div class="flex felx-row justify-between items-center font-black">
                                            <span>Ainda necessrio <span class="money font-thin">R$200.00</span></span>
                                            <span>60%</span>
                                        </div>
                                        <el-progress :percentage="50" color="#49f54d" :show-text="false" />
                                    </div>
                                </div>
                            </div>

                            <div
                                class="flex Receber items-center min-h-[40px] justify-center w-full rounded-[4px] text-[13px] font-bold text-color-white mt-[10px]"
                            >
                                Receber
                            </div>
                        </div>
                        <div class="flex flex-col mt-[20px]">
                            <div class="flex flex-col text-[12px] gap-[5px] break-all" style="color: #46516b">
                                <span>1.Você precisa convidar amigos para ter a chance de participar do sorteio.</span>
                                <span
                                    >2.Você deve acumular o valor total para o sorteio dentro do tempo especificado. Se
                                    ultrapassar o prazo, será zerado.</span
                                >
                            </div>
                        </div>

                        <div class="flex flex-col w-full mt-[20px]">
                            <div class="w-full relative">
                                <base-img class="w-full" name="h5_daili2_zhuanpan_zp1" type="png" path="images/share" />
                                <div
                                    id="capture"
                                    class="absolute w-[81%] top-[49%] left-[50.1%] translate-x-[-50%] translate-y-[-49%]"
                                >
                                    <div ref="rotateSpin" class="w-full h-full rotateSpin">
                                        <base-img
                                            class="w-full !block"
                                            name="h5_daili2_zhuanpan_zp2"
                                            type="png"
                                            path="images/share"
                                        />
                                        <div class="w-full h-full absolute top-0 left-0">
                                            <div class="w-full h-full relative">
                                                <div
                                                    v-for="(item, index) in list"
                                                    :key="index"
                                                    class="absolute z-[10] flex items-center"
                                                    :style="`width:50%;height:100%;transform-origin: 100%;transform: rotate(${
                                                        rotateAngle * index + 90
                                                    }deg);`"
                                                >
                                                    <div
                                                        class="flex flex-col items-center rotate-[-90deg] justify-center w-[75%] h-[100%]"
                                                    >
                                                        <base-img
                                                            class="w-full"
                                                            :name="item.pic"
                                                            type="png"
                                                            path="images/share"
                                                        />
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div class="absolute w-full top-0 p-[37%] pt-[33%]">
                                    <base-img
                                        class="w-full"
                                        name="h5_daili2_zhuanpan_zp3"
                                        type="png"
                                        path="images/share"
                                    />
                                </div>
                                <div
                                    class="absolute w-full bottom-[-2%] px-[8%] flex flex-row justify-between items-end left-0"
                                >
                                    <div class="w-[36%]">
                                        <base-img
                                            class="w-full"
                                            name="h5_daili2_zhuanpan_dijinbi"
                                            type="png"
                                            path="images/share"
                                        />
                                    </div>
                                    <div class="transform-gpu w-[36%]" style="transform: rotateY(180deg)">
                                        <base-img
                                            class="w-full"
                                            name="h5_daili2_zhuanpan_dijinbi"
                                            type="png"
                                            path="images/share"
                                        />
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div class="flex flex-col gap-[10px] w-full mt-[-8px] relative">
                            <div
                                @click="spinFn"
                                class="flex Convidar items-center min-h-[40px] justify-center w-full rounded-[4px] text-[13px] font-bold text-color-white"
                            >
                                Spin
                            </div>

                            <div
                                class="flex Convite items-center min-h-[40px] justify-center w-full rounded-[4px] text-[13px] font-bold text-color-white"
                            >
                                Tudo Dentro
                            </div>
                        </div>

                        <div class="w-full flex flex-col newsList">
                            <el-divider><span class="font-black">Registro de ganhos</span> </el-divider>
                            <div class="w-full flex flex-col h-[235px]">
                                <swiper
                                    :modules="[SwiperAutoplay, SwiperPagination]"
                                    :direction="'vertical'"
                                    :slides-per-view="5"
                                    :space-between="2"
                                    :allowTouchMove="false"
                                    :slides-per-group="1"
                                    :loop="true"
                                    :autoplay="{
                                        delay: 3 * 1000,
                                        disableOnInteraction: false,
                                    }"
                                    class="w-full"
                                >
                                    <swiper-slide
                                        v-for="(item, index) in mewsList"
                                        :key="index"
                                        class="!w-full flex justify-center !h-[45px]"
                                    >
                                        <div
                                            class="w-full !h-[45px] flex flex-row items-center justify-between px-[10px] text-[12px] newsList-box"
                                            :key="index"
                                        >
                                            <div class="flex flex-row items-center justify-center gap-[15px]">
                                                <base-img class="w-[34px]" name="w" type="png" path="images/profile" />
                                                <span>{{ item.text }}</span>
                                            </div>

                                            <span class="font-black price">R$:{{ item.price }}</span>
                                        </div>
                                    </swiper-slide>
                                    <div class="absolute left-0 bottom-[0px] z-[1] w-full h-[80px] bg-color"></div>
                                </swiper>
                            </div>
                        </div>
                    </div>
                </div>
            </template>
        </LazyMobileModelDrawer>
    </client-only>
</template>

<script setup lang="ts">
    import {useThrottleFn} from "@vueuse/core";
    const drawerDetail = useRaffleWheel();
    const rotateSpin = ref(null);
    let count = ref(1);
    const list = reactive([
        {name: "BONUS AMOUNT", pic: "h5_daili2_zhuanpan_tubiao1", value: 0, angleStart: -30, angleEnd: 30},
        {name: "GOLD COIN", pic: "h5_daili2_zhuanpan_tubiao2", value: 1, angleStart: 271, angleEnd: 330},
        {name: "BONUS AMOUNT", pic: "h5_daili2_zhuanpan_tubiao6", value: 2, angleStart: 211, angleEnd: 270},
        {name: "GOLD COIN", pic: "h5_daili2_zhuanpan_tubiao5", value: 3, angleStart: 151, angleEnd: 210},
        {name: "LUCKY FREE", pic: "h5_daili2_zhuanpan_tubiao4", value: 4, angleStart: 91, angleEnd: 150},
        {name: "LUCKY FREE", pic: "h5_daili2_zhuanpan_tubiao3", value: 5, angleStart: 31, angleEnd: 90},
    ]);

    const mewsList = [
        {pic: "", text: "dfgfdg", price: 1200},
        {pic: "", text: "dfgfdg", price: 2200},
        {pic: "", text: "dfgfdg", price: 3200},
        {pic: "", text: "dfgfdg", price: 4200},
        {pic: "", text: "dfgfdg", price: 5200},
        {pic: "", text: "dfgfdg", price: 6200},
        {pic: "", text: "dfgfdg", price: 7200},
        {pic: "", text: "dfgfdg", price: 8200},
        {pic: "", text: "dfgfdg", price: 9200},
        {pic: "", text: "dfgfdg", price: 10200},
    ];

    const rotateAngle = ref(360 / list.length);

    const spinFn = useThrottleFn(() => {
        let rotateSpins = document.querySelector(".rotateSpin");
        let base = 2160 * count.value++; //先转满360×6圈
        let result = getRandom(151, 210); // 最后一圈角度，获取-30到330的随机数
        let angelEnd = base + result; // 结束角度数，负数代表逆时针旋转
        rotateSpins.style.transform = "rotate(" + angelEnd + "deg)";
        // rotateSpins.addEventListener("transitionend", function () {
        //     rotateSpins.removeAttribute("style");
        // });
    }, 5000);

    const closeFn = () => {
        drawerDetail.value = false;
    };
    const openedFn = () => {};
    const closedFn = () => {};
</script>

<style lang="scss" scoped>
    .mobile-sign {
        width: 100%;
        height: 100%;
        display: flex;
        flex-direction: column;
        .mobile-sign-header {
            width: 100%;
            height: 60px;
            padding: 0 15px;
            display: flex;
            background-color: #25262b;
            flex-direction: row;
            justify-content: space-between;
            align-items: center;
            box-shadow: 0px 1px 15px 0px rgba(0, 0, 0, 0.5);
            position: relative;
            z-index: 1;
        }

        .mobile-sign-content {
            width: 100%;

            background-color: #17191f;
            height: calc(100% - 60px - env(safe-area-inset-bottom));
            padding-bottom: env(safe-area-inset-bottom);
            overflow-x: hidden;
            position: relative;
            padding: 0 16px;
            box-sizing: border-box;
            .mobile-sign-header-bg {
                width: 100%;
                .money {
                    font-family: FZ;
                    color: #4dfa74;
                }
            }

            .Receber {
                background-image: linear-gradient(90deg, #62cc7a 0%, #34aa4e 100%), linear-gradient(#53c16c, #53c16c);
            }
            .rotateSpin {
                transition: transform 4s;
                transition-timing-function: cubic-bezier(0.19, 0.59, 0.25, 1);
            }
        }

        ::v-deep(.el-divider__text) {
            background-color: #17191f;
            padding: 0 8px;
            word-break: break-all;
            width: max-content;
        }

        ::v-deep(.el-image__inner) {
            height: inherit !important;
        }

        .newsList {
            border-radius: 4px;
            background-color: #1b1d23;
            margin-top: 10px;
            padding: 10px;
            .newsList-box {
                background-color: #21232b;
                border-radius: 4px;
                .price {
                    color: #41f645;
                }
            }
        }

        .Convidar {
            background-image: linear-gradient(90deg, #62cc7a 0%, #34aa4e 100%), linear-gradient(#53c16c, #53c16c);
        }
        .Convite {
            background-image: linear-gradient(90deg, #629bcc 0%, #3460aa 100%), linear-gradient(#53c16c, #53c16c);
        }

        .bg-color {
            background-image: linear-gradient(180deg, transparent, #161a22);
        }
    }
</style>
