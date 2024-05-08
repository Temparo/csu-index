<script setup lang="ts">
import {RouterLink, RouterView} from 'vue-router'
import VueLogo from "./components/VueLogo.vue";
</script>

<template>
  <RouterLink :to="{path: '/index'}"></RouterLink>
  <RouterView></RouterView>
  <!--  <element-test></element-test>-->
  <!--    <HelloWorld msg="Vite + Vue" />-->
  <VueLogo/>
</template>

<style scoped>

</style>
