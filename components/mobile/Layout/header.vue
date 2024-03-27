<!-- @format -->

<template>
    <header class="mobile-header fixed">
        <div
            v-if="tipShow && !isDesktop"
            class="down-tip flex items-center justify-between w-full text-[12px] whitespace-pre-wrap relative px-[10px]"
        >
            <span>{{ $t("H0033") }}</span>
            <el-button @click="downLoadFn" size="small" icon="Cellphone" color="#ffffff">{{ $t("H0034") }}</el-button>
            <button
                @click="closeTip"
                style="background: rgba(0, 0, 0, 0.3)"
                class="text-color-alpha-white-05 bg-color-alpha-black-03 rounded-br-[10px] w-[22px] h-[20px] flex items-center justify-center absolute top-0 left-0"
            >
                <el-icon><Close /></el-icon>
            </button>
        </div>
        <section class="mobile-header-main flex justify-between w-full px-[10px] h-full">
            <div class="left flex justify-center items-center">
                <base-img
                    @click="openPopup('menu')"
                    class="h-[20px] w-[23px] mr-[8px] logo"
                    name="h5_caidan_icon"
                    type="png"
                    path="images/home"
                />
                <base-img @click="goHome" class="h-[29px] w-[91px] logo" name="logo" type="png" path="images/logo" />
            </div>
            <div class="right tools-login">
                <template v-if="!isLogin"
                    ><el-button @click="openPopup('login')" size="large" type="primary" text class="!px-[10px]"
                        ><span class="uppercase font-bold text-[12px]">{{ $t("L1001") }}</span></el-button
                    >
                    <el-button
                        @click="openPopup('register')"
                        class="el-button-sign-up !ml-[2px] !px-[10px]"
                        size="large"
                        type="primary"
                        ><span class="uppercase font-bold text-[12px]">{{ $t("L1002") }}</span></el-button
                    ></template
                >

                <div class="flex items-center text-[11px]" v-else>
                    <div
                        @click="openPopup('recharge')"
                        class="h-[35px] px-[6px] py-[4px] flex items-center gap-[15px] font-bold rounded-[4px]"
                        style="background: #191b21"
                    >
                        <div class="flex items-center gap-[4px]">
                            <span style="color: #45d91e">R$</span
                            ><span class="whitespace-pre">{{ formattedNum(Number(tagScoreInfo.score)) }}</span>
                        </div>
                        <div
                            class="relative h-[27px] w-[27px] flex items-center justify-center rounded-[4px]"
                            style="background: #ff7300"
                        >
                            <BaseIcon name="plus" class="animate__animated text-[22px]" />
                        </div>
                    </div>
                    <div class="flex" @click="notificationFn">
                        <!---->
                        <div class="w-[35px] h-[35px] flex items-center justify-center relative">
                            <el-icon size="26px" color="#516382"><BellFilled /></el-icon>
                            <div
                                class="rounded-full shrink-0 text-color-white flex items-center justify-center font-bold w-[15px] h-[15px] text-[10px] absolute right-[4px] top-[4px]"
                                style="background: #45d91e"
                            >
                                6
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    </header>
</template>

<script setup lang="ts">
    import {useImage, useIntersectionObserver} from "@vueuse/core";
    import store from "store";
    const {locale, setLocale} = useI18n();
    const notification = useNotification();
    const tagScoreInfo = useTagScoreInfo();

    const {isAndroid, isApple, isDesktop} = useDevice();
    const avatar = ref("https://cube.elemecdn.com/0/88/03b0d39583f48206768a7534e55bcpng.png");
    const {isLoading} = useImage({src: avatar.value});

    const notificationFn = () => {
        notification.value = true;
    };

    const goHome = () => {
        navigateTo("/");
    };
    const errorHandler = () => {
        nextTick();
        return isLoading.value;
    };
    const tipShow = useTipShow();
    const router = useRouter();
    const isLogin = useIsLogin();
    const finish = ref(false);
    const route = useRoute();
    onMounted(() => {
        finish.value = true;
    });

    const setLang = async (item: {lang: boolean; code: string}) => {
        if (item.lang) {
            //locale.value = item.code;
            store.set("lang", item.code);
            setLocale(item.code);
        } else {
            store.remove("w_l_s_a");
            isLogin.value = false;
            router.push({path: "/"});
        }
    };
    const downLoadFn = () => {
        if (isApple) {
            openPopup("download");
        }
        if (isAndroid) {
            navigateTo("https://zjdown.easygameapi.com/patch/PresenteSlots20320.apk", {
                open: {
                    target: "_blank",
                },
            });
        }
    };
    const closeTip = () => {
        tipShow.value = false;
        store.set("sk_d_t_k", 1);
        document.documentElement.style.setProperty("--app-download-height", "0px");
    };
</script>

<style lang="scss" scoped>
    .mobile-header {
        top: 0;
        left: 50%;
        z-index: 300;
        width: 100%;
        max-width: var(--maxWidth);
        transform: translateX(-50%);
        background-color: var(--bg-background);
        box-shadow: 0px 1px 15px 0px rgba(0, 0, 0, 0.5);
        .down-tip {
            background: var(--background);
            height: var(--app-download-height, 0);
            .el-button {
                color: var(--el-color-primary);
            }
        }

        .mobile-header-main {
            width: 100%;
            display: flex;
            align-items: center;
            justify-content: space-between;
            height: var(--mobile-header-height);
        }
        .logo {
            cursor: pointer;
            flex-shrink: 0;
            .el-image__inner {
                height: 40px;
            }
        }
        .tools-login {
            align-items: center;
            display: flex;
            .el-button {
                color: #ffffff;
                height: 35px;
            }
        }

        .el-button-sign-up {
            background: var(--background);
            position: relative;
            // &::after {
            //   content: "";
            //   background-color: var(--el-color-primary);
            //   position: absolute;
            //   left: -16%;
            //   top: -7%;
            //   width: 132%;
            //   height: 114%;
            //   -moz-border-radius: 50%;
            //   border-radius: 50%;
            //   opacity: 0.7;
            //   z-index: 1;
            //   filter: blur(20px);
            // }
        }
    }

    .el-mobile-dropdown-popper {
        .el-scrollbar {
            width: 175px;
        }
        .el-dropdown-menu__item {
            height: 43px;
        }
    }
</style>
