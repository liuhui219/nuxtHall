<!-- @format -->

<template>
    <div class="mobile-share">
        <div class="shrink-0 sticky top-0 z-10">
            <div class="tabs flex h-[46px] w-full text-[12px] z-[1] relative overflow-x-auto text-[12px]">
                <div
                    class="tab-item flex-[1] min-w-[20%] flex items-center justify-center relative z-[2]"
                    :class="{active: activeName === item.value}"
                    v-for="(item, index) in tabList"
                    :key="index"
                    @click="tabHandleFn(item)"
                >
                    <div class="text flex items-center justify-center">
                        <div class="relative">{{ item.text }}</div>
                    </div>
                </div>
            </div>
        </div>
        <div>
            <template v-for="(item, index) in components">
                <keep-alive
                    ><Suspense v-if="activeComponent === item.name">
                        <component :is="item.component" />

                        <template #fallback>
                            <baseLoading :http="true"></baseLoading>
                        </template> </Suspense
                ></keep-alive>
            </template>
        </div>
    </div>
</template>

<script setup lang="ts">
    const activeName = ref("1");
    const activeComponent = ref("PANEL");
    const components = shallowRef<any>();
    const component = ref();
    let tabList = [
        {
            text: "PANEL",
            value: "1",
        },
        {
            text: "REGOSTRO",
            value: "2",
        },
        {
            text: "TUTORIAL",
            value: "3",
        },
    ];

    const tabHandleFn = (item: {value: string; text: string}) => {
        activeName.value = item.value;
        activeComponent.value = item.text;
    };

    onMounted(() => {
        const modulesFiles: any = import.meta.glob("~/components/mobile/share/*.vue");
        const modules: {component: new () => globalThis.ComponentPublicInstance; name: string}[] = [];
        Object.keys(modulesFiles).forEach((modulePath) => {
            const result: any = modulePath.match(/.*\/(.+).vue$/);
            const value = modulesFiles[modulePath];
            modules.push({component: defineAsyncComponent(value), name: result[1]});
        });
        components.value = [...modules];
    });
</script>

<style lang="scss" scoped>
    .mobile-share {
        width: 100%;
        display: flex;
        flex-direction: column;
        padding: 0 10px;
        gap: 10px;
        padding-bottom: 30px;
        .tabs {
            background: #191b21;
            color: #97a8c7;
            gap: 5px;
            .tab-item {
                background-image: linear-gradient(0deg, #1e2028 0%, #1c1e24 36%, #1a1b20 100%),
                    linear-gradient(#53c16c, #53c16c);
            }
            .active {
                background: linear-gradient(
                    180deg,
                    rgba(40, 106, 255, 0) 31.77%,
                    rgba(40, 106, 255, 0.2) 80.21%,
                    rgba(40, 106, 255, 0.3) 94.78%,
                    #286aff 94.79%
                );
                .text {
                    font-weight: bold;
                    color: #fff;
                }
            }
        }
    }
</style>
