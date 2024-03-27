<!-- @format -->

<template>
    <div class="mobile-tutorial">
        <el-divider><span class="font-black">Roleta de sorteio</span> </el-divider>
        <div class="text-[11px] flex flex-col gap-[10px] break-all">
            <span>1.Você precisa convidar amigos para ter a chance de participar do sorteio.</span>
            <span
                >2.Você deve acumular o valor total para o sorteio dentro do tempo especificado. Se ultrapassar o prazo,
                será zerado.</span
            >
        </div>
        <el-divider><span class="font-black">Convite ao baú</span> </el-divider>
        <div class="text-[11px] flex flex-col gap-[10px] break-all">
            <span
                >Quando você convida amigos, se eles alcançarem o <span class="green">VIP1</span> ao recarregar, o
                número de pessoas ativas aumentará em <span class="yellow">+1</span>.</span
            >
            <span>1.Cada convite de jogador com um comportamento de recarga é válido.</span>
            <span>2.Cada recompensa de convite só pode ser reclamada uma vez pelo jogador.</span>
            <span
                >3.Após receber todas as recompensas de convite, as recompensas serão redefinidas. Os jogadores podem
                continuar a convidar amigos para receber recompensas.</span
            >
        </div>
        <el-divider><span class="font-black">Reembolso de recarga</span> </el-divider>
        <div class="text-[11px] flex flex-col gap-[10px] break-all">
            <span
                >1. Seu amigo recarregar, você
                <span class="yellow">receberá um reembolso de 2% do valor recarregado</span>.</span
            >
            <span
                >2. Os jogadores C e D convidados pelos seus amigos. se elesfizerem uma recarga,<span
                    style="color: rgb(16 184 178)"
                    >você receberá um lucro de 1%</span
                >.</span
            >
        </div>
        <el-divider><span class="font-black">Regras de convite</span> </el-divider>
        <div class="text-[11px] flex flex-col gap-[10px] break-all">
            <base-img class="w-[82%]" name="h5_daili6_shutu_icon" type="png" path="images/share" />
            <span
                >1. <span class="yellow">Compartilhe o link</span> de download com seus amigos. Se eles baixarem e
                fizerem uma recarga, <span class="blue">você receberá</span>.</span
            >
            <span
                >2. Os seus <span class="green">amigos convidados A e B</span>, se eles fizerem uma recarga, você
                receberá um lucro de <span class="yellow">2%</span>.</span
            >
            <span
                >3. Os <span class="blue">jogadores C e D</span> convidados pelos seus amigos, se eles fizerem uma
                recarga, você receberá um lucro de <span class="yellow">1%</span>.</span
            >
        </div>
    </div>
</template>

<script setup lang="ts"></script>

<style lang="scss" scoped>
    .mobile-tutorial {
        width: 100%;
        display: flex;
        flex-direction: column;
        padding: 15px;
        padding-top: 0;
        color: #adadaf;

        ::v-deep(.el-divider__text) {
            background-color: #141414;
            padding: 0 8px;
            word-break: break-all;
            width: max-content;
        }
        .green {
            color: #0ad910;
            font-weight: bold;
        }
        .yellow {
            color: #e6a711;
            font-weight: bold;
        }
        .blue {
            color: #10c9e4;
            font-weight: bold;
        }
    }
</style>
