<!-- @format -->

<template>
    <div class="mobile-regostro">
        <div class="mobile-total">
            <div class="mobile-total-box">
                <span class="text-[11px]">Pessoas efetivas:</span>
                <span class="flex items-center text-[12px] font-black"
                    ><base-img
                        class="w-[18px] h-[13px] mr-[10px]"
                        name="h5_daili3_renshu1_icon"
                        type="png"
                        path="images/share"
                    />0</span
                >
            </div>
            <div class="mobile-total-box mobile-total-box-text">
                <span class="text-[11px] w-[50%] text-center">Número total de convidados:</span>
                <span class="flex items-center text-[12px] font-black"
                    ><base-img
                        class="w-[18px] h-[13px] mr-[10px]"
                        name="h5_daili3_renshu1_icon"
                        type="png"
                        path="images/share"
                    />1000</span
                >
            </div>
        </div>

        <div class="mobile-regostro-table gap-[10px]">
            <div class="text-[8px] flex flex-row justify-center items-center gap-[10px] px-[5px]">
                <span
                    class="flex flex-row justify-center break-all text-center"
                    :style="{width: item.w, flex: item.flex}"
                    v-for="(item, index) in header"
                    >{{ item.text }}</span
                >
            </div>
            <div class="flex flex-col mobile-regostro-table-scroll gap-[5px]">
                <div
                    class="text-[8px] mobile-regostro-table-list w-full flex flex-row justify-center items-center gap-[10px]"
                    v-for="(item, index) in List"
                >
                    <span class="flex flex-row justify-center items-center w-[70px]"
                        ><base-img class="w-[28px] h-[28px] mr-[5px]" name="w" type="png" path="images/profile" /><span
                            class="text-ellipsis overflow-hidden flex-1"
                            >{{ item.name }}</span
                        ></span
                    >
                    <span class="flex flex-row justify-center break-all text-center flex-1">{{ item.date }}</span>
                    <span class="flex flex-row justify-center break-all text-center w-[56px]"
                        ><base-img class="h-[10px] w-[10px]" name="h5_daili5_cha_icon" type="png" path="images/share"
                    /></span>
                    <span class="flex flex-row justify-center break-all text-center w-[56px]"
                        ><base-img class="h-[10px] w-[13px]" name="h5_daili5_dui_icon" type="png" path="images/share"
                    /></span>
                    <span class="flex flex-row justify-center break-all text-center w-[35px]"
                        ><base-img class="w-full" :name="item.vip" type="png" path="images/vip"
                    /></span>
                </div>
            </div>
        </div>

        <div class="flex flex-col gap-[10px] absolute bottom-0 w-full">
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
</template>

<script setup lang="ts">
    const header = [
        {text: "Nome (nick) do amigo convidado", value: 0, w: "70px"},
        {text: "Data do cadastro", value: 1, flex: 1},
        {text: "Verificou número de celular", value: 2, w: "56px"},
        {text: "A recompensa è elegivel", value: 3, w: "56px"},
        {text: "VIP", value: 4, w: "40px"},
    ];

    const List = [
        {name: "afsdfdsfafsdfdsf", date: "24/8/2023 18:45:06", Verified: "1", reward: "1", vip: "15"},
        {name: "afsdfdsf", date: "24/8/2023 18:45:06", Verified: "1", reward: "1", vip: "1"},
        {name: "afsdfdsf", date: "24/8/2023 18:45:06", Verified: "1", reward: "1", vip: "1"},
        {name: "afsdfdsf", date: "24/8/2023 18:45:06", Verified: "1", reward: "1", vip: "1"},
        {name: "afsdfdsf", date: "24/8/2023 18:45:06", Verified: "1", reward: "1", vip: "1"},
        {name: "afsdfdsf", date: "24/8/2023 18:45:06", Verified: "1", reward: "1", vip: "1"},
        {name: "afsdfdsf", date: "24/8/2023 18:45:06", Verified: "1", reward: "1", vip: "1"},
        {name: "afsdfdsf", date: "24/8/2023 18:45:06", Verified: "1", reward: "1", vip: "1"},
        {name: "afsdfdsf", date: "24/8/2023 18:45:06", Verified: "1", reward: "1", vip: "1"},
        {name: "afsdfdsf", date: "24/8/2023 18:45:06", Verified: "1", reward: "1", vip: "1"},
        {name: "afsdfdsf", date: "24/8/2023 18:45:06", Verified: "1", reward: "1", vip: "1"},
        {name: "afsdfdsf", date: "24/8/2023 18:45:06", Verified: "1", reward: "1", vip: "1"},
        {name: "afsdfdsf", date: "24/8/2023 18:45:06", Verified: "1", reward: "1", vip: "1"},
        {name: "afsdfdsf", date: "24/8/2023 18:45:06", Verified: "1", reward: "1", vip: "1"},
        {name: "afsdfdsf", date: "24/8/2023 18:45:06", Verified: "1", reward: "1", vip: "1"},
        {name: "afsdfdsf", date: "24/8/2023 18:45:06", Verified: "1", reward: "1", vip: "1"},
    ];

    onMounted(() => {
        let mainH = document.querySelector(".mobile-container-main")?.getBoundingClientRect().height + "px";
        let mobileRegostro = document.querySelector(".mobile-regostro");
        mobileRegostro.style.height = `calc(${mainH} - 150px - 56px - var(--app-download-height, 0px) - env(safe-area-inset-bottom))`;
    });
</script>

<style lang="scss" scoped>
    .mobile-regostro {
        width: 100%;
        height: calc(100vh - 150px - 56px - env(safe-area-inset-bottom) - var(--app-download-height, 0px));

        position: relative;
        display: flex;
        flex-direction: column;
        .mobile-total {
            display: flex;
            flex-direction: row;
            width: 100%;
            gap: 5px;
            .mobile-total-box {
                display: flex;
                gap: 5px;
                flex-direction: row;
                justify-content: center;
                align-items: center;
                width: 50%;
                height: 45px;
                background-image: linear-gradient(0deg, #3f3f3f82 0%, #17191f80 100%);
                border-style: solid;
                border-width: 1px;
                border-image-source: linear-gradient(180deg, rgb(127 127 127 / 0%) 0%, #9191918f 100%);
                border-image-slice: 1;
            }
            .mobile-total-box-text {
                color: #a44d46;
            }
        }
        .mobile-regostro-table {
            width: 100%;
            background-color: #1b1d23;
            border-radius: 4px;
            margin-top: 10px;
            height: calc(100% - 155px);
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

        .Convidar {
            background-image: linear-gradient(90deg, #62cc7a 0%, #34aa4e 100%), linear-gradient(#53c16c, #53c16c);
        }
        .Convite {
            background-image: linear-gradient(90deg, #629bcc 0%, #3460aa 100%), linear-gradient(#53c16c, #53c16c);
        }
    }
</style>
