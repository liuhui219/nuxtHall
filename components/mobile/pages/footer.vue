<!-- @format -->

<template>
  <div class="mobile-footer gap-y-[24px] px-[10px]">
    <Lazy-base-img class="h-[40px] w-[104px] logo" name="logo-h" type="avif" path="images/logo" />
    <div class="company-introduction">
      O site AFUN.com é operado pela Brilliant Star Services B.V. (registro nº 159982), com endereço em Julianaplein 36
      Curaçao. Este site é operado sob <strong id="apg-text">número de licença: 8048/JAZ</strong> Emitido pelo Provedor
      de Serviços de Jogos, Autorizado e Regulamentado pelo Governo de Curaçao. Bstar Services LTD, Reg No. HE 430899
    </div>
    <div class="flex flex-wrap justify-between gap-y-[20px] w-full">
      <div
        v-for="(item, index) in footList"
        :key="index"
        class="shrink-0 flex flex-col gap-[15px] items-start w-[45%] overflow-hidden"
      >
        <h4 class="footer-title uppercase">{{ item.title }}</h4>
        <el-button v-for="(child, i) in item.children" :key="i" link>{{ child.text }}</el-button>
      </div>
    </div>

    <div class="Contact w-full flex flex-col">
      <h4 class="footer-title uppercase">{{ ContactUs.title }}</h4>
      <div class="flex flex-wrap items-center justify-between gap-y-[20px] w-full">
        <div class="Contact-mails items-start w-[45%] overflow-hidden">
          <div v-for="(item, index) in ContactUs.emails" :key="index">
            <LazyBaseIcon :name="item.icon" /><span>{{ item.text }}</span>
          </div>
        </div>
        <div class="Contact-mails items-start w-[50%] justify-between overflow-hidden flex flex-row">
          <Lazy-base-img
            v-for="(item, index) in ContactUs.images"
            :key="index"
            class="w-[70px] mr-[8px]"
            :name="item.name"
            :type="item.type"
            :path="item.path"
          />
        </div>
      </div>
    </div>

    <div class="share flex w-full gap-[20px] justify-center">
      <div class="share-icon w-[50px] h-[50px]" v-for="(item, index) in shareList" :key="index">
        <LazyBaseIcon :name="item.icon" />
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
  const footList = [
    {
      title: "Top Games",
      children: [
        {
          text: "AFUN Originals",
        },
        {
          text: "Live",
        },
        {
          text: "Slot",
        },
        {
          text: "Special",
        },
        {
          text: "Shows",
        },
        {
          text: "BetBy",
        },
        {
          text: "Poly Sports",
        },
      ],
    },
    {
      title: "Promo",
      children: [
        {
          text: "Promotions",
        },
        {
          text: "Lucky wheel",
        },
        {
          text: "Promo code",
        },
        {
          text: "Refer and Earn",
        },
      ],
    },
    {
      title: "About Us",
      children: [
        {
          text: "About AFUN",
        },
        {
          text: "Join Us",
        },
        {
          text: "Terms of Service",
        },
        {
          text: "Responsible Gaming",
        },
      ],
    },
    {
      title: "Help",
      children: [
        {
          text: "Fairness",
        },
        {
          text: "AML",
        },
        {
          text: "Dispute Resolution",
        },
        {
          text: "Terms of Bonus",
        },
      ],
    },
  ];

  const ContactUs = {
    title: "Contact Us",
    emails: [
      {text: "marketing@afun.com", icon: "mail"},
      {text: "support@afun.com", icon: "mail"},
    ],
    images: [
      {
        name: "valid",
        type: "png",
        path: "images/home",
      },
      {
        name: "18",
        type: "png",
        path: "images/home",
      },
    ],
  };

  const shareList = [
    {
      text: "telegram",
      icon: "telegram",
    },
    {
      text: "twitter",
      icon: "tuite",
    },
    {
      text: "instagram",
      icon: "instagram",
    },
    {
      text: "discord",
      icon: "discord",
    },
  ];
</script>

<style lang="scss" scoped>
  .mobile-footer {
    width: 100%;
    display: flex;
    font-size: 12px;
    flex-direction: column;
    color: var(--el-text-color-placeholder);
    padding: 30px 16px 32px;
    align-items: flex-start;
    justify-content: flex-start;
    .footer-title {
      font-size: 14px;
      font-weight: 700;
      margin-bottom: 8px;
      color: var(--el-text-color-regular);
    }

    .el-button.is-link {
      margin: 0;
      padding: 0;
      font-size: 12px;
      color: var(--el-text-color-placeholder);
    }

    .el-button > span {
      font-size: 12px;
    }

    .Contact-mails {
      color: var(--el-color-primary);
      & > div {
        display: flex;
        gap: 5px;
        margin-bottom: 5px;
      }
    }

    .share-icon {
      border: 1px solid var(--el-color-info-dark-2);
      display: flex;
      color: var(--el-color-primary);
      justify-content: center;
      align-items: center;
      border-radius: var(--border-radius);
      i {
        font-size: 22px;
      }
    }
  }
  .uppercase {
    text-transform: uppercase;
  }
</style>
