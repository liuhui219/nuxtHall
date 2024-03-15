<!-- @format -->

<template>
    <client-only
        ><Lazy-el-dialog
            v-model="firstCharge"
            modal-class="mobile-el-firstCharge-dialog"
            :show-close="false"
            title=""
            width="100%"
            destroy-on-close
            center
            align-center
            @close="closeFn"
        >
            <div
                class="w-full bg-cover relative bg-no-repeat h-0 pb-[156%] firstCharge-bg"
                :style="{backgroundImage: `url(${libnaodikuang})`}"
            >
                <div class="absolute right-[6px] w-[15%] top-[13.5%]">
                    <base-img
                        @click="closeFn"
                        class="w-full h-fit"
                        name="h5_libao_guanbi_btn"
                        type="png"
                        path="images/recharge"
                    />
                </div>
                <div class="flex flex-col text-[12px] w-[70%] ml-[15%]">
                    <div class="Countdown"><span>Disponível em:</span></div>
                    <div class="w-full flex flex-row pl-[6%] mt-[5%]">
                        <base-img class="w-[39%] h-fit" name="h5_libao_jinbi3_icon" type="png" path="images/recharge" />
                        <div class="flex flex-col">
                            <base-img class="w-[75%]" name="h5_libao_pc_icon" type="png" path="images/recharge" />
                            <span class="text-[8px] mt-[-10px] ml-[8px] break-all"
                                >Comnre qualquer um destes nacotes de presente e eles desaparecerão
                                permanentemente.</span
                            >
                        </div>
                    </div>
                    <div class="w-full flex flex-row mt-[2.5%]">
                        <div
                            class="bg-cover relative bg-no-repeat h-0 w-[33.3%] pb-[47%] rule1-bg"
                            :style="{backgroundImage: `url(${h5_libao_shangpindi1_bg})`}"
                        >
                            <div class="flex justify-center mt-[24%]">
                                <base-img
                                    class="w-[60%]"
                                    name="h5_libao_jinbi1_icon"
                                    type="png"
                                    path="images/recharge"
                                />
                            </div>
                            <div class="flex justify-center flex-col items-center h-[0px] pb-[17%] mt-[12%]">
                                <h1 class="money">24.00</h1>
                                <span class="strike text-[10px] line-through">20.00</span>
                            </div>
                            <div class="flex justify-center items-center mt-[5%]">
                                <button
                                    class="flex btn1 items-center py-[3px] justify-center px-[10px] rounded-[4px] text-[10px] font-bold"
                                >
                                    R$ 20.00
                                </button>
                            </div>
                            <div
                                class="bg-cover white text-[10px] relative bg-no-repeat w-[55%] h-[32%] rule1-info-bg flex flex-col justify-center items-center"
                                :style="{backgroundImage: `url(${h5_libao_jiaobiao1_bg})`}"
                            >
                                <span class="flex justify-center items-center"
                                    >+<span class="money white">20</span>%</span
                                >
                                <span class="text-[8px] white leading-[4px] font-black">EXTRA</span>
                            </div>
                        </div>
                        <div
                            class="bg-cover relative bg-no-repeat h-0 w-[33.3%] pb-[47%] rule1-bg"
                            :style="{backgroundImage: `url(${h5_libao_shangpindi1_bg})`}"
                        >
                            <div class="flex justify-center mt-[24%]">
                                <base-img
                                    class="w-[60%]"
                                    name="h5_libao_jinbi2_icon"
                                    type="png"
                                    path="images/recharge"
                                />
                            </div>
                            <div class="flex justify-center flex-col items-center h-[0px] pb-[17%] mt-[12%]">
                                <h1 class="money">24.00</h1>
                                <span class="strike text-[10px] line-through">20.00</span>
                            </div>
                            <div class="flex justify-center items-center mt-[5%]">
                                <button
                                    class="flex btn1 items-center py-[3px] justify-center px-[10px] rounded-[4px] text-[10px] font-bold"
                                >
                                    R$ 20.00
                                </button>
                            </div>
                            <div
                                class="bg-cover white text-[10px] relative bg-no-repeat w-[55%] h-[32%] rule1-info-bg flex flex-col justify-center items-center"
                                :style="{backgroundImage: `url(${h5_libao_jiaobiao1_bg})`}"
                            >
                                <span class="flex justify-center items-center"
                                    >+<span class="money white">20</span>%</span
                                >
                                <span class="text-[8px] white leading-[4px] font-black">EXTRA</span>
                            </div>
                        </div>
                        <div
                            class="bg-cover relative bg-no-repeat h-0 w-[33.3%] pb-[47%] rule1-bg"
                            :style="{backgroundImage: `url(${h5_libao_shangpindi1_bg})`}"
                        >
                            <div class="flex justify-center mt-[24%]">
                                <base-img
                                    class="w-[63%]"
                                    name="h5_libao_jinbi3_icon"
                                    type="png"
                                    path="images/recharge"
                                />
                            </div>
                            <div class="flex justify-center flex-col items-center h-[0px] pb-[17%] mt-[12%]">
                                <h1 class="money">24.00</h1>
                                <span class="strike text-[10px] line-through">20.00</span>
                            </div>
                            <div class="flex justify-center items-center mt-[5%]">
                                <button
                                    class="flex btn1 items-center py-[3px] justify-center px-[10px] rounded-[4px] text-[10px] font-bold"
                                >
                                    R$ 20.00
                                </button>
                            </div>
                            <div
                                class="bg-cover white text-[10px] relative bg-no-repeat w-[55%] h-[32%] rule1-info-bg flex flex-col justify-center items-center"
                                :style="{backgroundImage: `url(${h5_libao_jiaobiao1_bg})`}"
                            >
                                <span class="flex justify-center items-center"
                                    >+<span class="money white">20</span>%</span
                                >
                                <span class="text-[8px] white leading-[4px] font-black">EXTRA</span>
                            </div>
                        </div>
                    </div>

                    <div class="w-full flex flex-row pl-[6%] mt-[6%]">
                        <base-img class="w-[30%] h-fit" name="h5_libao_jinbi6_icon" type="png" path="images/recharge" />
                        <div class="flex flex-col">
                            <base-img class="w-[75%]" name="h5_libao_dd_icon" type="png" path="images/recharge" />
                            <span class="text-[8px] mt-[-10px] ml-[8px] break-all"
                                >Compra limitada a uma vez por dia. reinicia no dia seguinte</span
                            >
                        </div>
                    </div>

                    <div class="w-full flex flex-row mt-[3%]">
                        <div
                            class="bg-cover relative bg-no-repeat h-0 w-[33.3%] pb-[47%] rule2-bg"
                            :style="{backgroundImage: `url(${h5_libao_shangpindi2_bg})`}"
                        >
                            <div class="flex justify-center mt-[24%]">
                                <base-img
                                    class="w-[60%]"
                                    name="h5_libao_jinbi4_icon"
                                    type="png"
                                    path="images/recharge"
                                />
                            </div>
                            <div class="flex justify-center flex-col items-center h-[0px] pb-[17%] mt-[15%]">
                                <h1 class="money">24.00</h1>
                                <span class="strike text-[10px] line-through">20.00</span>
                            </div>
                            <div class="flex justify-center items-center mt-[5%]">
                                <button
                                    class="flex btn2 items-center py-[3px] justify-center px-[10px] rounded-[4px] text-[10px] font-bold"
                                >
                                    R$ 20.00
                                </button>
                            </div>
                            <div
                                class="bg-cover white text-[10px] relative bg-no-repeat w-[54%] h-[35%] rule2-info-bg flex flex-col justify-center items-center"
                                :style="{backgroundImage: `url(${h5_libao_jiaobiao2_bg})`}"
                            >
                                <span class="flex justify-center items-center"
                                    >+<span class="money white">20</span>%</span
                                >
                                <span class="text-[8px] white leading-[4px] font-black">EXTRA</span>
                            </div>
                        </div>
                        <div
                            class="bg-cover relative bg-no-repeat h-0 w-[33.3%] pb-[47%] rule2-bg"
                            :style="{backgroundImage: `url(${h5_libao_shangpindi2_bg})`}"
                        >
                            <div class="flex justify-center mt-[24%]">
                                <base-img
                                    class="w-[60%]"
                                    name="h5_libao_jinbi5_icon"
                                    type="png"
                                    path="images/recharge"
                                />
                            </div>
                            <div class="flex justify-center flex-col items-center h-[0px] pb-[17%] mt-[15%]">
                                <h1 class="money">24.00</h1>
                                <span class="strike text-[10px] line-through">20.00</span>
                            </div>
                            <div class="flex justify-center items-center mt-[5%]">
                                <button
                                    class="flex btn2 items-center py-[3px] justify-center px-[10px] rounded-[4px] text-[10px] font-bold"
                                >
                                    R$ 20.00
                                </button>
                            </div>
                            <div
                                class="bg-cover white text-[10px] relative bg-no-repeat w-[54%] h-[35%] rule2-info-bg flex flex-col justify-center items-center"
                                :style="{backgroundImage: `url(${h5_libao_jiaobiao2_bg})`}"
                            >
                                <span class="flex justify-center items-center"
                                    >+<span class="money white">20</span>%</span
                                >
                                <span class="text-[8px] white leading-[4px] font-black">EXTRA</span>
                            </div>
                        </div>
                        <div
                            class="bg-cover relative bg-no-repeat h-0 w-[33.3%] pb-[47%] rule2-bg"
                            :style="{backgroundImage: `url(${h5_libao_shangpindi2_bg})`}"
                        >
                            <div class="flex justify-center mt-[24%]">
                                <base-img
                                    class="w-[60%]"
                                    name="h5_libao_jinbi6_icon"
                                    type="png"
                                    path="images/recharge"
                                />
                            </div>
                            <div class="flex justify-center flex-col items-center h-[0px] pb-[17%] mt-[15%]">
                                <h1 class="money">24.00</h1>
                                <span class="strike text-[10px] line-through">20.00</span>
                            </div>
                            <div class="flex justify-center items-center mt-[5%]">
                                <button
                                    class="flex btn2 items-center py-[3px] justify-center px-[10px] rounded-[4px] text-[10px] font-bold"
                                >
                                    R$ 20.00
                                </button>
                            </div>
                            <div
                                class="bg-cover white text-[10px] relative bg-no-repeat w-[54%] h-[35%] rule2-info-bg flex flex-col justify-center items-center"
                                :style="{backgroundImage: `url(${h5_libao_jiaobiao2_bg})`}"
                            >
                                <span class="flex justify-center items-center"
                                    >+<span class="money white">20</span>%</span
                                >
                                <span class="text-[8px] white leading-[4px] font-black">EXTRA</span>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </Lazy-el-dialog></client-only
    >
</template>

<script setup lang="ts">
    const {$importImage} = useNuxtApp();
    const {locale, t} = useI18n();
    const firstCharge = useFirstCharge();
    const isLogin = useIsLogin();
    const route = useRoute();
    const libnaodikuang = $importImage("libnaodikuang", "png", "images/recharge");
    const h5_libao_shangpindi1_bg = $importImage("h5_libao_shangpindi1_bg", "png", "images/recharge");
    const h5_libao_jiaobiao1_bg = $importImage("h5_libao_jiaobiao1_bg", "png", "images/recharge");
    const h5_libao_jiaobiao2_bg = $importImage("h5_libao_jiaobiao2_bg", "png", "images/recharge");
    const h5_libao_shangpindi2_bg = $importImage("h5_libao_shangpindi2_bg", "png", "images/recharge");
    const closeFn = () => {
        firstCharge.value = false;
    };
</script>

<style lang="scss">
    .mobile-el-firstCharge-dialog {
        backdrop-filter: blur(12px);
        .el-dialog {
            background: transparent;
            box-shadow: none;
            width: 100%;
            max-width: calc(var(--maxWidth) - 40px);
            border-radius: 10px;

            .el-dialog__header {
                display: none !important;
            }
            .el-dialog__body {
                padding: 0 !important;
                background: transparent;
            }

            .firstCharge-bg {
                background-position-x: -17px;
            }

            .rule1-info-bg {
                position: absolute;
                top: -2px;
                right: -6px;
            }
            .rule2-info-bg {
                position: absolute;
                top: -2px;
                right: -3px;
            }

            .Countdown {
                display: flex;
                justify-content: center;
                margin-top: 54%;
            }
            .money {
                color: #f87045;
                font-family: FZ;
                font-size: 16px;
            }

            .strike {
                position: relative;
                text-decoration: line-through;
                /* 调整删除线的颜色，如果需要的话 */
                color: #c1773c;
                padding: 0 5px;
                line-height: 4px;
            }

            .strike:before {
                content: "";
                position: absolute;
                left: 0;
                top: 50%;
                width: 100%;
                height: 1px; /* 删除线的高度 */
                background: #c1773c; /* 删除线的颜色 */
                transform: translateY(-50%);
            }

            .btn1 {
                background-image: linear-gradient(90deg, #5dc876 0%, #35ab4e 100%), linear-gradient(#53c16c, #53c16c);
                color: white;
            }
            .btn2 {
                background-image: linear-gradient(90deg, #cb5ad5 0%, #9124be 100%), linear-gradient(#d95f1c, #d95f1c);
                color: white;
            }
            .white {
                color: white;
            }
        }
    }
</style>
