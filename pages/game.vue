<!-- @format -->

<template>
  <DesktopPagesGame v-if="$device.isDesktop" />
  <MobilePagesGame v-else />
</template>

<script setup></script>

<style></style>
