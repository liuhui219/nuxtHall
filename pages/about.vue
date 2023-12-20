<!-- @format -->

<template><div>暂无数据</div></template>

<script setup>
  definePageMeta({
    auth: false,
    pageIndex: 2,
  });

  useSeoMeta({
    title: "我的神奇网站",
    ogTitle: "我的神奇网站",
    description: "这是我的神奇网站，让我告诉你关于它的一切。",
    ogDescription: "这是我的神奇网站，让我告诉你关于它的一切。",
    ogImage: "https://example.com/image.png",
    twitterCard: "summary_large_image",
  });

  const id = ref(1);

  const moreFn = () => {
    id.value++;
  };

  // 组件作为初始请求的一部分被渲染
  // 在服务器上预抓取数据，因为它比在客户端上更快。
  const {data, pending, error, refresh} = await useDefaultRequest.get("/quotes", null, {param1: id});
</script>

<style></style>
