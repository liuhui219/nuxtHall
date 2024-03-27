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
                            <el-divider><span class="font-black">Reembolso de recarga</span> </el-divider>
                            <div class="w-full flex flex-row gap-[3px]">
                                <div class="mobile-total-box">
                                    <span class="text-[11px] text-center h-[30px] flex items-center"
                                        >Número de convidados</span
                                    >
                                    <span class="flex items-center text-[13px] font-black"
                                        ><base-img
                                            class="w-[18px] h-[13px] mr-[10px]"
                                            name="h5_daili3_renshu1_icon"
                                            type="png"
                                            path="images/share"
                                        />0</span
                                    >
                                </div>
                                <div class="mobile-total-box">
                                    <span
                                        style="color: #a44d46"
                                        class="text-[11px] text-center h-[30px] flex items-center"
                                        >Receita total de promoção</span
                                    >
                                    <span style="color: #c24c1e; font-family: FZ" class="flex items-center text-[13px]"
                                        >R$:{{ formattedNum(0) }}</span
                                    >
                                </div>
                                <div class="mobile-total-box">
                                    <span style="color: #ef6e01" class="text-[11px] text-center flex items-center"
                                        >Pode ser resgatado</span
                                    >
                                    <span
                                        style="color: #e1c113; font-family: FZ"
                                        class="flex flex-col items-center text-[13px]"
                                        >R$:{{ formattedNum(0) }}
                                    </span>
                                    <div class="Receber">Receber</div>
                                </div>
                            </div>
                        </div>
                        <div class="flex flex-col text-[12px] gap-[5px] mt-[10px] break-all" style="color: #adadaf">
                            <span
                                >1. Seu amigo recarregar, você receberá um
                                <span style="color: #e6a711">reembolso de 2% do valor recarregado</span>.</span
                            >
                            <span
                                >2. Os jogadores C e D convidados pelos seus amigos. se elesfizerem uma recarga,<span
                                    style="color: #10b8b2"
                                    >você receberá um lucro de 1%</span
                                >.</span
                            >
                        </div>
                        <div class="flex flex-col rechargeRefundList">
                            <div class="w-full relative flex justify-center items-center py-[15px]">
                                <span class="divider text-[12px]">Prêmio obtido</span>
                            </div>
                            <div class="mobile-regostro-table gap-[10px]">
                                <div class="text-[12px] grid grid-cols-3 gap-[10px] px-[5px]" style="color: #3b4358">
                                    <span
                                        class="flex flex-row justify-center break-all text-center flex-1"
                                        v-for="(item, index) in header"
                                        >{{ item.text }}</span
                                    >
                                </div>
                                <div class="flex flex-col mobile-regostro-table-scroll overscroll-none gap-[5px]">
                                    <div
                                        class="text-[12px] mobile-regostro-table-list w-full grid grid-cols-3 gap-[10px]"
                                        v-for="(item, index) in List"
                                    >
                                        <span class="flex flex-row justify-center items-center"
                                            ><base-img
                                                class="w-[28px] h-[28px] mr-[5px]"
                                                name="w"
                                                type="png"
                                                path="images/profile"
                                            /><span class="text-ellipsis overflow-hidden flex-1">{{
                                                item.name
                                            }}</span></span
                                        >
                                        <span class="flex flex-row justify-center break-all items-center text-center"
                                            ><base-img
                                                class="w-[18px] h-[13px] mr-[10px]"
                                                name="h5_daili3_renshu2_icon"
                                                type="png"
                                                path="images/share"
                                            />{{ item.Valor }}</span
                                        >
                                        <span
                                            style="color: #41f645"
                                            class="flex flex-row justify-center break-all items-center font-black text-center"
                                            >R$:{{ formattedNum(item.price) }}</span
                                        >
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div class="flex flex-col gap-[10px] w-full">
                            <div
                                class="flex Convidar items-center min-h-[40px] justify-center w-full rounded-[4px] text-[13px] font-bold text-color-white"
                            >
                                Convidar amigos
                            </div>

                            <div
                                class="flex Convite items-center min-h-[40px] justify-center w-full rounded-[4px] text-[13px] font-bold text-color-white"
                            >
                                Convite aleatório
                            </div>
                        </div>
                    </div>
                </div>
            </template>
        </LazyMobileModelDrawer>
    </client-only>
</template>

<script setup lang="ts">
    const drawerDetail = useRechargeRefund();
    const header = [
        {text: "Nome", value: 0},
        {text: "Valor", value: 1},
        {text: "Recompensa", value: 2},
    ];

    const List = [
        {name: "afsdfdsfafsdfdsf", Valor: "99", price: 1},
        {name: "afsdfdsfafsdfdsf", Valor: "99", price: 1},
        {name: "afsdfdsfafsdfdsf", Valor: "99", price: 1},
        {name: "afsdfdsfafsdfdsf", Valor: "99", price: 1},
        {name: "afsdfdsfafsdfdsf", Valor: "99", price: 1},
        {name: "afsdfdsfafsdfdsf", Valor: "99", price: 1},
        {name: "afsdfdsfafsdfdsf", Valor: "99", price: 1},
        {name: "afsdfdsfafsdfdsf", Valor: "99", price: 1},
        {name: "afsdfdsfafsdfdsf", Valor: "99", price: 1},
        {name: "afsdfdsfafsdfdsf", Valor: "99", price: 1},
        {name: "afsdfdsfafsdfdsf", Valor: "99", price: 1},
        {name: "afsdfdsfafsdfdsf", Valor: "99", price: 1},
        {name: "afsdfdsfafsdfdsf", Valor: "99", price: 1},
    ];
    const openedFn = () => {};
    const closedFn = () => {};
    const closeFn = () => {
        drawerDetail.value = false;
    };
</script>

<style lang="scss" scoped>
    .mobile-sign {
        width: 100%;
        height: 100%;
        display: flex;
        flex-direction: column;
        background-color: #17191f;

        .mobile-sign-header {
            width: 100%;
            height: 60px;
            padding: 0 15px;
            background-color: #25262b;
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
            height: calc(100% - 60px - env(safe-area-inset-bottom));
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
            .Receber {
                display: flex;
                justify-content: center;
                align-items: center;
                color: #fff;
                font-weight: bold;
                font-size: 10px;
                padding: 5px 14px;
                border-radius: 4px;
                background-image: linear-gradient(90deg, #629bcc 0%, #3460aa 100%), linear-gradient(#53c16c, #53c16c);
            }

            .rechargeRefundList {
                width: 100%;
                height: calc(100% - 300px);
                background-color: #1b1d23;
                border-radius: 4px;
                padding: 5px;
            }

            .Convidar {
                background-image: linear-gradient(90deg, #62cc7a 0%, #34aa4e 100%), linear-gradient(#53c16c, #53c16c);
            }
            .Convite {
                background-image: linear-gradient(90deg, #629bcc 0%, #3460aa 100%), linear-gradient(#53c16c, #53c16c);
            }

            .mobile-regostro-table {
                width: 100%;
                background-color: #1b1d23;
                border-radius: 4px;

                height: calc(100% - 40px);
                padding: 5px 5px;
                display: flex;
                flex-direction: column;
                .mobile-regostro-table-scroll {
                    height: calc(100% - 30px);
                    overflow-x: hidden;
                }
                .mobile-regostro-table-list {
                    padding: 5px 5px;
                    background-color: #21232b;
                    border-radius: 4px;
                }
            }

            .divider {
                display: flex;
                justify-content: center;
                align-items: center;
                &::before {
                    content: "";
                    width: 35%;
                    height: 1px;
                    background-color: #40475b;
                    position: absolute;
                    left: 0;
                }
                &::after {
                    content: "";
                    width: 35%;
                    height: 1px;
                    background-color: #40475b;
                    position: absolute;
                    right: 0;
                }
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
