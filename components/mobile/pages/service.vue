<!-- @format -->

<template>
  <div class="mobile-service">
    <div class="mobile-service-header">
      <div class="text">Serviço ao cliente</div>
    </div>
    <div class="mobile-service-content">
      <div class="dec">
        Depois de receber seus comentários, nossa equipe de atendimento ao cliente responderá o mais rápido possivel
        durante o horário de trabalho, seja paciente, obrigado!
      </div>
      <div>Nosso horário de trabalho: <span>de segunda a sexta</span></div>
    </div>
    <div>
      <button
        class="button-color flex items-center min-h-[40px] justify-center w-full text-[13px] rounded-[4px] font-bold text-color-white mt-[5px]"
      >
        <base-img class="w-[24px] h-[24px] mr-[8px]" name="1" type="png" path="images/profile" />Live Chat
      </button>
      <button
        class="button-color flex items-center min-h-[40px] justify-center w-full text-[13px] rounded-[4px] font-bold text-color-white mt-[5px]"
      >
        <base-img class="w-[24px] h-[24px] mr-[8px]" name="2" type="png" path="images/profile" />Live Chat
      </button>
    </div>
  </div>
</template>

<script setup lang="ts"></script>

<style lang="scss" scoped>
  .mobile-service {
    width: 100%;
    display: flex;
    flex-direction: column;
    padding: 0 10px;
    .mobile-service-header {
      width: 100%;
      height: 60px;
      display: flex;
      justify-content: center;
      align-items: center;

      background-image: linear-gradient(0deg, #1d3065 0%, #1c2643 36%, #1a1b20 100%), linear-gradient(#53c16c, #53c16c);
      .text {
        font-weight: bold;
        color: #fff;
        font-size: 14px;
      }
    }
    .mobile-service-content {
      margin-top: 2px;
      background-color: #313642;
      padding: 18px;
      border-radius: 4px;
      font-size: 14px;
      text-align: center;
      display: flex;
      flex-direction: column;
      gap: 20px;
      span {
        color: #3fb80c;
      }
    }
    .button-color {
      background-image: linear-gradient(90deg, #5ed404 0%, #38b20d 100%), linear-gradient(#53c16c, #53c16c);
    }
  }
</style>
