<script setup lang="ts">
import {RouterLink, RouterView} from 'vue-router'
</script>

<template>
  <RouterLink :to="{path: '/index'}"></RouterLink>
  <RouterView></RouterView>
  <!--  <element-test></element-test>-->
</template>

<style scoped>
</style>
