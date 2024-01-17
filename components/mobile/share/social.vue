<!-- @format -->

<template>
  <div class="social">
    <div class="social-cont" v-for="(item, index) in List" :key="index">
      <div class="social-label">{{ item.title }}</div>
      <div class="social-main">
        <div class="social-box" v-for="(info, i) in item.children">
          <div class="social-box-info">
            <span><BaseIcon :name="info.icon" /></span>
            <span>{{ info.text }}</span>
          </div>
          <BaseIcon name="right" />
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
  const {locale, t} = useI18n();
  const List = ref([
    {title: t("H0027"), children: [{icon: "tupian", text: t("H0030")}]},
    {title: t("H0028"), children: [{icon: "huixingzhen", text: t("H0031")}]},
    {
      title: t("H0029"),
      children: [
        {icon: "whatsapp", text: "WhatsApp"},
        {icon: "telegram1", text: "Telegram"},
        {icon: "messenger", text: "FB Messenger"},
      ],
    },
  ]);
</script>

<style lang="scss" scoped>
  .social {
    width: 100%;
    height: 100%;
    background: #25262b;
    padding: 20px 8px;
    gap: 10px;
    display: flex;
    flex-direction: column;
    .social-cont {
      background: #36373b;
      width: 100%;
      border-radius: 4px;
      padding: 6px;
      padding-top: 20px;
      display: flex;
      flex-direction: column;
      gap: 20px;
      .social-label {
        font-size: 14px;
        position: relative;
        padding-left: 20px;
        &::before {
          content: "";
          position: absolute;
          left: 5px;
          top: 50%;
          transform: translateY(-50%);
          width: 8px;
          height: 8px;
          border-radius: 50%;
          background-color: var(--el-color-primary);
          border: 1px solid var(--el-text-color-primary);
        }
      }

      .social-main {
        width: 100%;
        display: flex;
        flex-direction: column;
        gap: 6px;
      }
      .social-box {
        width: 100%;

        height: 50px;
        display: flex;
        flex-direction: row;
        align-items: center;
        padding: 0 10px;
        font-size: 14px;
        border-radius: 4px;
        &:nth-child(2n + 1) {
          background: #45464a;
        }

        .social-box-info {
          width: 100%;
          display: flex;
          flex-direction: row;
          align-items: center;
          gap: 10px;
          .icon {
            font-size: 28px;
            color: var(--el-color-primary);
            font-weight: bold;
          }

          .icon-whatsapp {
            position: relative;
            z-index: 1;
            &::after {
              content: "";
              position: absolute;
              left: 5px;
              top: 50%;
              transform: translateY(-50%);
              width: 20px;
              height: 20px;
              border-radius: 50%;
              background-color: #ffffff;
              z-index: -1;
            }
          }
          .icon-telegram1,
          .icon-messenger {
            color: #1b9ede;
            position: relative;
            z-index: 1;
            &::after {
              content: "";
              position: absolute;
              left: 5px;
              top: 50%;
              transform: translateY(-50%);
              width: 20px;
              height: 20px;
              border-radius: 50%;
              background-color: #ffffff;
              z-index: -1;
            }
          }
        }

        .icon-right {
          font-size: 22px;
        }
      }
    }
  }
</style>
