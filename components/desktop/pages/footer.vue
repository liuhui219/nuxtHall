<!-- @format -->

<template>
  <footer class="home-footer-pc wrap gap-y-[36px]">
    <div class="flex w-full justify-between">
      <div class="logo">
        <base-img class="h-[50px] w-[130px]" name="logo-h" type="png" path="images/logo" />
        <div class="share flex w-full gap-[20px] mt-[16px] justify-center">
          <div class="share-icon w-[40px] h-[40px]" v-for="(item, index) in shareList" :key="index">
            <LazyBaseIcon :name="item.icon" />
          </div>
        </div>
      </div>
      <ul class="text-center w-[1000px] grid grid-cols-5 gap-x-[5%] gap-y-[40px] ml-[60px] grid-flow-col-dense">
        <li v-for="(item, index) in footList" :key="index">
          <h4 class="footer-title color-text-white uppercase mb-[12px] text-left">{{ item.title }}</h4>
          <div class="footer-link flex flex-col flex-wrap items-start gap-[8px] text-left text-[12px] pointer">
            <div v-for="(child, index) in item.children" :key="index">
              <LazyBaseIcon :name="child.icon" v-if="child.icon" /><span>{{ child.text }}</span>
            </div>
          </div>
        </li>
      </ul>
    </div>

    <div class="text-[14px] text-left">
      O site AFUN.com é operado pela Brilliant Star Services B.V. (registro nº 159982), com endereço em Julianaplein 36
      Curaçao. Este site é operado sob
      <strong class="text-second pointer" id="apg-text">número de licença: 8048/JAZ</strong> Emitido pelo Provedor de
      Serviços de Jogos, Autorizado e Regulamentado pelo Governo de Curaçao. Bstar Services LTD, Reg No. HE 430899
    </div>

    <div class="flex justify-center gap-[36px]">
      <Lazy-base-img
        v-for="(item, index) in ContactUs.images"
        :key="index"
        class="h-[50px] mr-[8px]"
        :name="item.name"
        :type="item.type"
        :path="item.path"
      />
    </div>

    <div class="copyright text-[20px]">Todos os direitos reservados 2023 ©</div>
  </footer>
</template>

<script setup>
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
    {
      title: "Contact Us",
      children: [
        {text: "marketing@afun.com", icon: "mail"},
        {text: "support@afun.com", icon: "mail"},
      ],
    },
  ];

  const ContactUs = {
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
  .home-footer-pc {
    width: 100%;
    display: flex;
    flex-direction: column;
    font-size: 12px;
    align-items: center;
    text-align: center;
    max-width: unset;
    padding: 32px 0 76px;
    .logo {
      flex: 1;
      text-align: left;
    }
    .footer-title {
      color: #97a8c7;
      font-size: 16px;
      font-weight: 700;
      margin-bottom: 8px;
    }
    .footer-link a {
      text-decoration: none;
    }
    .footer-link {
      color: var(--el-text-color-placeholder);
      & > div {
        display: flex;
        gap: 5px;
        margin-bottom: 5px;
        align-items: center;
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
</style>
