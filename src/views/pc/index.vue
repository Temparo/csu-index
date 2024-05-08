<script lang="ts" setup>
import {ref} from "vue";
import useUrlList from "../../hooks/useUrlList";
import {nanoid} from "nanoid";

const {fullUrlBlock} = useUrlList()
const size = ref(18)

</script>

<template>
  <el-container class=".container">
    <el-main>

      <el-space
          :size="size"
          alignment="stretch"
          wrap
      >
        <el-card v-for="{cardName,urlList} in fullUrlBlock "
                 :key="nanoid()" class="box-card"
                 style="width: 18.5rem">


          <p slot="header">{{ cardName }}</p>
          <!--          <template #header>-->
          <!--            <div class="card-header">-->
          <!--              <span>{{ cardName }}</span>-->
          <!--            </div>-->
          <!--          </template>-->


          <el-button
              v-for="url in urlList"
              :key="url.id"
              :href="url.url"
              plain
              size="large"
              style="margin: 10px 5px;
              padding: 10px;width: 100px"
              tag="a"
              target="_blank"
              text
          >
            {{ url.text }}
          </el-button>
        </el-card>
      </el-space>
    </el-main>
    <el-footer>
      <div class="grid-content bg-purple-dark"></div>
      <p>Created by Zhuzhu.This is for PC.All rights reserved.</p>
    </el-footer>
  </el-container>
</template>

<style lang="scss" scoped>

.el-card {
  border-radius: 4px;
  --el-card-padding: 20px;
}


.grid-content {
  border-radius: 4px;
  min-height: 36px;
}

.container {
  //max-width: 1200px;
  margin: 0 auto;
}
</style>