<script lang="ts" setup>


import {useRouter} from "vue-router";

const router = useRouter()
const goBack = () => {
  router.push('/index')
}

</script>

<template>
  <el-page-header @back="goBack">
    <template #content>
      <span> About </span>
    </template>
  </el-page-header>
  <el-container class="container">
    <el-main>
      <el-card>
        <div class="about">
          <p>CSU-Index is a navigation that provides a list of useful links for students of Central South
            University.</p>
        </div>
      </el-card>
    </el-main>
  </el-container>
</template>

<style scoped>

</style>