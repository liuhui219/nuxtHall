<!-- @format -->

<template>
    <div class="share-panel gap-[10px]">
        <div class="share-panel-total">
            <div class="share-panel-total-box">
                <div class="flex">
                    <base-img class="w-[50px]" name="h5_daili1_rt_icon" type="png" path="images/share" />
                </div>
                <div class="share-panel-total-box-text"><span>Recompensa total</span><span>R$ 0,00</span></div>
            </div>
            <div class="share-panel-total-box">
                <div class="flex">
                    <base-img class="w-[50px]" name="h5_daili1_tda_icon" type="png" path="images/share" />
                </div>
                <div class="share-panel-total-box-text">
                    <span>Total de amigos</span
                    ><span class="flex gap-[5px]"
                        ><base-img class="w-[18px]" name="h5_daili3_renshu1_icon" type="png" path="images/share" />
                        0</span
                    >
                </div>
            </div>
        </div>
        <div class="grid grid-cols-4 gap-[5px] h-[129px]">
            <div><base-img class="w-full h-full" name="h5_daili1_tu1_bg" type="png" path="images/share" /></div>
            <div class="col-span-2 relative">
                <base-img class="w-full h-full" name="h5_daili1_tu2_bg" type="png" path="images/share" />
                <div class="w-full absolute flex flex-col justify-center items-center bottom-[10px]">
                    <div class="flex flex-row justify-center items-center">
                        <base-img
                            class="h-[18px] w-[27px] mr-[3px]"
                            name="h5_daili1_qian_icon"
                            type="png"
                            path="images/share"
                        />

                        <base-img
                            v-for="(item, index) in moneyList"
                            class="h-[20px]"
                            :name="item"
                            type="png"
                            path="images/share"
                        />
                    </div>
                    <div class="w-full px-[20px] flex flex-col pb-[5px]">
                        <span class="text-[8px] text-right">90%</span>
                        <el-progress :show-text="false" :percentage="90" />
                    </div>
                    <div class="w-full text-[7px] text-center">
                        Ainda e necessário <span>34.42</span> para sacar para o PIX
                    </div>
                </div>
            </div>
            <div><base-img class="w-full h-full" name="h5_daili1_tu3_bg" type="png" path="images/share" /></div>
        </div>
        <div class="w-full flex flex-col gap-[5px]">
            <div class="title">Convide via:</div>
            <div class="share-panel-Convide gap-[8px]">
                <div class="w-full share-panel-Convide-box">
                    <span class="text-[11px] pl-[10px]">Salvar a imagem</span>
                    <button class="text-[12px] font-black">Baixar</button>
                </div>
                <div class="w-full share-panel-Convide-box">
                    <span class="text-[11px] pl-[10px]">https://spread2.gngqyxxk.com/?t=2&d=KWkkjrB</span>
                    <button class="text-[12px] font-black">Copiar</button>
                </div>
                <div class="w-full relative flex justify-center items-center py-[15px]">
                    <span class="divider font-black text-[14px]">OU</span>
                </div>

                <div class="w-full flex flex-row justify-center items-center gap-[50px]">
                    <base-img
                        v-for="(item, index) in sharePic"
                        class="h-[40px] w-[40px]"
                        :name="item.pic"
                        type="png"
                        path="images/share"
                    />
                </div>
            </div>
        </div>
        <div class="w-full flex flex-col gap-[5px]">
            <div class="title">Prêmios</div>
            <div class="w-full flex flex-col gap-[10px]">
                <div class="share-panel-list flex flex-row" v-for="(item, index) in list">
                    <div class="flex flex-col flex-1 h-full py-[10px] justify-between">
                        <h1 class="share-panel-list-h1">{{ item.title }}</h1>
                        <span class="text-[10px] share-panel-list-text">{{ item.description }} </span>
                        <button @click="getDetailFn(item)">Detalhes</button>
                    </div>

                    <base-img class="h-[100px]" :name="item.pic" type="png" path="images/share" />
                </div>
            </div>
        </div>
    </div>
</template>

<script setup lang="ts">
    const moneyList = ref(["1", "2", ",", "6", "6"]);
    const sharePic = [
        {
            pic: "h5_daili1_f_btn",
            value: 0,
        },
        {
            pic: "h5_daili1_feiji_btn",
            value: 1,
        },
        {
            pic: "h5_daili1_dianhua_btn",
            value: 2,
        },
    ];
    const list = [
        {
            title: "Roleta de sorteio",
            description: "Receba R$ 200 de graça Parabéns pela sua boa sorte você ganhou",
            pic: "h5_daili1_zhuanpan_icon",
            value: 0,
        },
        {
            title: "Convite ao baú",
            description:
                "Quando você convida amigos, se eles alcançarem o VIP1 ao recarregar,o número de pessoas ativas aumentará em +1.",
            pic: "h5_daili1_cab_icon",
            value: 1,
        },
        {
            title: "Reembolso de recarga",
            description: "Seu amigo recarregar, você receberá um reembolso de 2% do valor recarregado",
            pic: "h5_daili1_rdr_icon",
            value: 2,
        },
    ];

    const getDetailFn = (item: {value: number}) => {
        const drawerDetail = useRaffleWheel();
        const invitation = useInvitation();
        const rechargeRefund = useRechargeRefund();
        if (item.value === 0) {
            drawerDetail.value = true;
        }
        if (item.value === 1) {
            invitation.value = true;
        }
        if (item.value === 2) {
            rechargeRefund.value = true;
        }
    };

    onActivated(() => {
        console.log(123);
    });

    onUnmounted(() => {});
    onDeactivated(() => {
        console.log(456);
    });
</script>

<style lang="scss" scoped>
    .share-panel {
        width: 100%;
        display: flex;
        flex-direction: column;
        .share-panel-total {
            display: flex;
            flex-direction: row;
            width: 100%;
            gap: 10px;
            .share-panel-total-box {
                display: flex;
                flex-direction: row;
                background-color: #262830;
                align-items: center;
                width: 50%;
                padding: 15px 10px;
                border-radius: 4px;
                .share-panel-total-box-text {
                    font-size: 12px;
                    height: 100%;
                    display: flex;
                    flex-direction: column;
                    justify-content: space-around;
                    padding-left: 5px;
                    span:nth-child(2) {
                        color: #f0b71e;
                        font-weight: bold;
                    }
                }
            }
        }
        ::v-deep(.el-progress-bar__outer) {
            border: 1px solid #ea3cff;
            background-color: transparent;
        }
        ::v-deep(.el-progress-bar__inner) {
            background-image: linear-gradient(90deg, #24c2b1 0%, #40c76c 50%, #fef646 100%);
        }

        .title {
            font-weight: bold;
            font-size: 12px;
        }
        .share-panel-Convide {
            width: 100%;
            border-radius: 4px;
            padding: 10px;
            display: flex;
            flex-direction: column;
            background-image: linear-gradient(0deg, #1d3064 0%, #1a1b21 100%);
            .share-panel-Convide-box {
                border-radius: 4px;
                background-color: #0f1015;
                height: 40px;
                display: flex;
                flex-direction: row;
                align-items: center;
                justify-content: space-between;
                span {
                    color: #626779;
                }
                button {
                    background-image: linear-gradient(90deg, #629bcc 0%, #3460aa 100%),
                        linear-gradient(#53c16c, #53c16c);
                    height: calc(100% - 4px);
                    margin: 2px 2px;
                    border-radius: 4px;
                    width: 65px;
                }
            }
        }
        .divider {
            display: flex;
            justify-content: center;
            align-items: center;
            &::before {
                content: "";
                width: 45%;
                height: 2px;
                background-color: #40475b;
                position: absolute;
                left: 0;
            }
            &::after {
                content: "";
                width: 45%;
                height: 2px;
                background-color: #40475b;
                position: absolute;
                right: 0;
            }
        }
        .share-panel-list {
            background-image: url("~/assets/images/share/h5_daili1_rukoudi_bg.png");
            width: 100%;
            background-repeat: no-repeat;
            background-size: cover;

            aspect-ratio: 2.9 / 1;

            display: flex;
            align-items: center;
            padding-left: 15px;
            .share-panel-list-h1 {
                color: #f9f9fb;
                font-size: 16px;
            }
            .share-panel-list-text {
                color: #646f8b;
            }
            button {
                width: 120px;
                height: 34px;
                border-radius: 4px;
                font-size: 14px;
                font-weight: bold;
                background-image: linear-gradient(90deg, #62cc7a 0%, #34aa4e 100%), linear-gradient(#53c16c, #53c16c);
            }
        }
        ::v-deep(.el-divider__text) {
            background-color: transparent;
            padding: 0 8px;
        }
        ::v-deep(.el-image__inner) {
            width: inherit !important;
        }
    }
</style>
