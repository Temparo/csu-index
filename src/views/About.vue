<script lang="ts" setup>
import {useRouter} from "vue-router";
import moveableTitle from "../components/moveableTitle.vue";

const router = useRouter()
const goBack = () => {
  router.push('/index')
}
</script>

<template>
  <el-page-header class="el-page-header" @back="goBack">
    <template #content>
      <el-breadcrumb separator-class="el-icon-arrow-right">
        <el-breadcrumb-item>About</el-breadcrumb-item>
      </el-breadcrumb>
    </template>
  </el-page-header>
  <el-container class="container">
    <el-header>
      <div class="headline text-9xl">
        <span
            class="cursor-text hover:ring-2 hover:ring-fuchsia-500 focus:ring-2 focus:ring-fuchsia-500 outline-0 bg-fuchsia-200/60 dark:bg-fuchsia-50/20 before:content-['<'] after:content-['/>'] after:ml-2">
          <a class="outline-0" contenteditable="true" href="https://csu-index.github.io/" target="_self">CSU</a>
        </span>
        <a class="inline-block p-1 relative z-10" href="https://csu-index.github.io/" target="_self">&nbsp;-&nbsp;</a>
        <moveableTitle/>
      </div>
    </el-header>
    <el-main>
      <el-card>
        <div class="about">
          <h1>CSU-Index是一个导航页，为中南大学学生提供常用网站链接</h1>
          <h1>我们的目标是“触手可及”，成为校内学习和科研最方便的导航站</h1>
        </div>
      </el-card>
      <el-card>
        <el-button @click="$router.push('feedback')">反馈</el-button>
      </el-card>
    </el-main>
  </el-container>
</template>

<style scoped>

</style>
