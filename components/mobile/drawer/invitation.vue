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
                        <div class="w-full flex flex-col">
                            <el-divider><span class="font-black">Convite ao baú</span> </el-divider>
                            <div class="w-full flex flex-row gap-[3px]">
                                <div class="mobile-total-box">
                                    <span class="text-[11px] text-center h-[30px] flex items-center"
                                        >Número de convidados</span
                                    >
                                    <span class="flex items-center text-[12px] font-black"
                                        ><base-img
                                            class="w-[18px] h-[13px] mr-[10px]"
                                            name="h5_daili3_renshu1_icon"
                                            type="png"
                                            path="images/share"
                                        />0</span
                                    >
                                </div>

                                <div class="mobile-total-box" style="color: #7eaabe">
                                    <span class="text-[11px] text-center h-[30px] flex items-center"
                                        >Número de pessoas válidas</span
                                    >
                                    <span class="flex items-center text-[12px] font-black"
                                        ><base-img
                                            class="w-[18px] h-[13px] mr-[10px]"
                                            name="h5_daili3_renshu2_icon"
                                            type="png"
                                            path="images/share"
                                        />0</span
                                    >
                                </div>

                                <div class="mobile-total-box" style="color: #c24c1e">
                                    <span class="text-[11px] text-center h-[30px] flex items-center"
                                        >Total de prêmios</span
                                    >
                                    <span class="flex items-center text-[12px] font-black"
                                        >R$:{{ formattedNum(0) }}</span
                                    >
                                </div>
                            </div>
                        </div>

                        <div class="w-full flex flex-col mt-[20px] gap-[10px]">
                            <div class="text-[12px]">
                                Quando você convida amigos, se eles alcançarem o
                                <span style="color: #d200ff">VIP1</span> ao recarregar, o número de pessoas ativas
                                aumentará em <span style="color: #ffcc00">+1</span>.
                            </div>
                            <div class="w-full grid grid-cols-2 gap-[10px]">
                                <div
                                    class="flex flex-row items-center justify-around invitation-box"
                                    v-for="(item, index) in invitationList"
                                    :key="index"
                                >
                                    <base-img class="w-[36%]" :name="item.pic" type="png" path="images/share" />
                                    <div class="flex flex-col items-center gap-[5px]">
                                        <span class="text-[12px] price">R$ {{ formattedNum(item.price) }}</span>
                                        <span class="text-[10px] flex items-center font-black"
                                            ><base-img
                                                class="w-[18px] h-[13px] mr-[5px]"
                                                name="h5_daili3_renshu2_icon"
                                                type="png"
                                                path="images/share"
                                            />0/1</span
                                        >
                                        <div class="Receber">Receber</div>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div class="flex flex-col gap-[10px] w-full mt-[20px]">
                            <div
                                class="flex Convidar items-center min-h-[40px] justify-center w-full rounded-[4px] text-[13px] font-bold text-color-white"
                            >
                                indicar a um desconhecido
                            </div>

                            <div
                                class="flex Convite items-center min-h-[40px] justify-center w-full rounded-[4px] text-[13px] font-bold text-color-white"
                            >
                                indicar um amigo
                            </div>
                        </div>

                        <div
                            class="flex flex-col text-[12px] gap-[5px] break-all mt-[20px] pb-[30px]"
                            style="color: #46516b"
                        >
                            <span>1.Cada convite de jogador com um comportamento de recarga é válido.</span>
                            <span>2.Cada recompensa de convite só pode ser reclamada uma vez pelo jogador.</span>
                            <span
                                >3.Após receber todas as recompensas de convite, as recompensas serão redefinidas. Os
                                jogadores podem continuar a convidar amigos para receber recompensas.</span
                            >
                        </div>
                    </div>
                </div>
            </template>
        </LazyMobileModelDrawer>
    </client-only>
</template>

<script setup lang="ts">
    const drawerDetail = useInvitation();
    const invitationList = [
        {pic: "h5_daili3_lihe1_icon", price: 15, num: 0},
        {pic: "h5_daili3_lihe2_icon", price: 15, num: 0},
        {pic: "h5_daili3_lihe3_icon", price: 15, num: 0},
        {pic: "h5_daili3_lihe4_icon", price: 15, num: 0},
        {pic: "h5_daili3_lihe5_icon", price: 15, num: 0},
        {pic: "h5_daili3_lihe6_icon", price: 15, num: 0},
        {pic: "h5_daili3_lihe7_icon", price: 15, num: 0},
        {pic: "h5_daili3_lihe8_icon", price: 15, num: 0},
    ];
    const openedFn = () => {};
    const closeFn = () => {
        drawerDetail.value = false;
    };
    const closedFn = () => {};
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
            box-shadow: 0px 1px 15px 0px rgba(0, 0, 0, 0.5);
            position: relative;
            z-index: 1;
        }

        .mobile-sign-content {
            width: 100%;
            background-color: #17191f;
            height: calc(100% - 60px);
            padding-bottom: env(safe-area-inset-bottom);
            overflow-x: hidden;
            position: relative;
            padding: 0 16px;
            box-sizing: border-box;

            .mobile-total-box {
                display: flex;
                gap: 5px;
                flex-direction: column;
                justify-content: center;
                align-items: center;
                flex: 1;
                height: 75px;
                background-image: linear-gradient(0deg, #3f3f3f82 0%, #17191f80 100%);
                border-style: solid;
                border-width: 1px;
                border-image-source: linear-gradient(180deg, rgb(127 127 127 / 0%) 0%, #9191918f 100%);
                border-image-slice: 1;
            }
            .mobile-total-box-text {
                color: #a44d46;
            }

            .invitation-box {
                background-image: url("~/assets/images/share/h5_daili3_xinxidi1_bg.png");
                width: 100%;
                background-repeat: no-repeat;
                background-size: cover;
                border-radius: 4px;
                aspect-ratio: 2.3 / 1;
                color: #c4d0e2;
                display: flex;
                align-items: center;
                .price {
                    font-family: FZ;
                }
                .Receber {
                    display: flex;
                    justify-content: center;
                    align-items: center;
                    color: #fff;
                    font-weight: bold;
                    font-size: 12px;
                    padding: 5px 14px;
                    border-radius: 4px;
                    background-image: linear-gradient(90deg, #629bcc 0%, #3460aa 100%),
                        linear-gradient(#53c16c, #53c16c);
                }
            }

            ::v-deep(.el-image__inner) {
                height: inherit !important;
            }

            .Convidar {
                background-image: linear-gradient(90deg, #62cc7a 0%, #34aa4e 100%), linear-gradient(#53c16c, #53c16c);
            }
            .Convite {
                background-image: linear-gradient(90deg, #629bcc 0%, #3460aa 100%), linear-gradient(#53c16c, #53c16c);
            }
        }

        ::v-deep(.el-divider__text) {
            background-color: #17191f;
            padding: 0 8px;
            word-break: break-all;
            width: max-content;
        }
    }
</style>
