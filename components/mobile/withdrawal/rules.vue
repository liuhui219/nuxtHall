<!-- @format -->

<template>
  <div class="rules">
    <div class="rules-title">Ilustrar</div>
    <div class="rules-content">
      saques de jogo dependem de limite deapostas, e see você não conseguir fazer um levantamento do seu dinheiro, você
      pode ire jogar o jogo para aumentar seu limite de apostas. Se você tiver alguma dúvida, pergunta à nossa equipe de
      atendimento ao cliente à tempo
    </div>
  </div>
</template>

<script setup lang="ts"></script>

<style lang="scss" scoped>
  .rules {
    width: 100%;
    height: 100%;
    background-color: #25262b;
    .rules-title {
      width: 100%;
      height: 36px;
      background-color: #36373b;
      font-size: 14px;
      display: flex;
      align-items: center;
      padding-left: 30px;
      position: relative;
      margin-top: 8px;
      &::before {
        content: "";
        position: absolute;
        left: 15px;
        top: 50%;
        transform: translateY(-50%);
        width: 8px;
        height: 8px;
        border-radius: 50%;
        background-color: var(--el-color-primary);
        border: 1px solid var(--el-text-color-primary);
      }
    }

    .rules-content {
      padding: 50px 20px;
      width: 100%;
      display: flex;
      justify-content: center;
      align-items: center;
      text-align: center;
      font-size: 14px;
      color: #99a7b4;
    }
  }
</style>
