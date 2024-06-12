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
          <h1>CSU-Index是一个导航页，为中南大学师生提供学习和科研的常用网站链接</h1>
        </div>
      </el-card>
      <el-card>
        <el-button
            link
            size="large"
            @click="$router.push('feedback')">反馈
        </el-button>
        <el-button
            href="https://github.com/Temparo/csu-index/issues/new"
            link
            size="large"
            tag="a"
            target="_blank">Github 反馈
        </el-button>
      </el-card>
      <el-alert
          center
          description="你可以获得：１.成为项目的贡献者之一　　　　２.收获作者的支持与赞美（虽然好像没什么用）　　　　３.在简历上增添一笔"
          title="此网站目前需要一个页面设计及图标设计方面的人才，作者是学工科的，这方面能力实在不足，如果你有兴趣和时间，欢迎加入！"
          type="success"
      />
      <el-alert
          center
          title="作者暂未完成反馈页面的搭建，如有问题可发送至反馈邮箱diabeted@outlook.com或使用Github反馈"
          type="warning"
      />
    </el-main>
  </el-container>
</template>

<style scoped>
.el-header {
  --el-header-height: 8rem;
}
</style>
