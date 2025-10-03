<script lang="ts" setup>
import {useRouter} from 'vue-router';
import {useAwesomeUrls} from '../hooks/useAwesomeUrls';

const router = useRouter();
const {urls} = useAwesomeUrls();

const goBack = () => {
  router.push('/index');
};
</script>

<template>
  <el-page-header class="el-page-header" @back="goBack">
    <template #content>
      <el-breadcrumb separator-class="el-icon-arrow-right">
        <el-breadcrumb-item>中南有趣的开源项目</el-breadcrumb-item>
      </el-breadcrumb>
    </template>
  </el-page-header>
  <el-container class="container">
    <el-main>
      <el-row :gutter="20">
        <el-col v-for="(url, index) in urls" :key="index" :xs="24" :sm="12" :md="8">
          <el-card class="url-card" shadow="hover">
            <h3>{{ url.text }}</h3>
            <p v-if="url.description">{{ url.description }}</p>
            <el-link :href="url.url" target="_blank">{{ url.url }}</el-link>
          </el-card>
        </el-col>
      </el-row>
    </el-main>
  </el-container>
</template>

<style scoped>
.container {
  padding: 20px;
}

.url-card {
  margin-bottom: 20px;
  border-radius: 10px;
  overflow: hidden;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  min-height: 160px; /* Set minimum height instead of fixed height */
}

.url-card h3 {
  font-size: 18px; /* Adjust title size for better responsiveness */
  margin-bottom: 8px;
  line-height: 1.3;
  word-wrap: break-word;
}

.url-card p {
  font-size: 14px;
  color: #666;
  margin-bottom: 12px;
  line-height: 1.4;
  flex-grow: 1; /* Allow description to take available space */
  word-wrap: break-word;
}

.url-card .el-link {
  font-size: 14px;
  color: #409eff;
  margin-top: auto; /* Push the link to the bottom */
  word-wrap: break-word;
  display: block;
}
</style>
