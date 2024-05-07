<script lang="ts" setup>
import {ref} from "vue";
import useUrlList from "../hooks/useUrlList";

const {urlList1, urlList2} = useUrlList()
const size = ref(20)


</script>

<template>
  <el-container class=".container">
    <el-main>

      <el-space
          :size="size"
          alignment="stretch"
          wrap>

        <el-card style="width: 380px">
          <p slot="header">常用链接</p>
          <el-button
              v-for="url in urlList1"
              :key="url.id"
              :href="url.url"
              plain
              size="large"
              style="margin: 10px;padding: 10px;width: 90px"
              tag="a"
              target="_blank"
              text
          >
            {{ url.text }}
          </el-button>
        </el-card>

        <el-card style="width: 380px">
          <p slot="header">simple url test</p>

          <el-button
              v-for="url in urlList2"
              :key="url.id"
              :href="url.url"
              plain
              size="large"
              style="margin: 10px;padding: 10px;width: 90px"
              tag="a"
              target="_blank"
              text
          >
            {{ url.text }}
          </el-button>
        </el-card>
      </el-space>
    </el-main>
  </el-container>
</template>

<style lang="scss" scoped>

.el-card {
  border-radius: 4px;
}


.el-row {
  margin-bottom: 20px;
}

.el-row:last-child {
  margin-bottom: 0;
}

.el-col {
  border-radius: 4px;
}

.grid-content {
  border-radius: 4px;
  min-height: 36px;
}

.container {
  max-width: 1200px;
  margin: 0 auto;
}
</style>