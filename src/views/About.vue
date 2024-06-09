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
      <el-breadcrumb separator-class="el-icon-arrow-right">
        <el-breadcrumb-item>About</el-breadcrumb-item>
      </el-breadcrumb>
    </template>
  </el-page-header>
  <el-container class="container">
    <el-main>
      <el-card>
        <div class="about">
          <h2>CSU-Index是一个导航页，为中南大学学生提供常用网站链接</h2>
        </div>
      </el-card>
    </el-main>
  </el-container>
</template>

<style scoped>

</style>
