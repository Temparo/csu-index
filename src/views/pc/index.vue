<script lang="ts" setup>
import useUrlList from "../../hooks/useUrlList";
import {nanoid} from "nanoid";

const {fullUrlBlock} = useUrlList()

</script>

<template>
  <el-container class=".container">
    <el-main>

      <el-space
          :fill-ratio="30"
          alignment="stretch"
          wrap
          size="large">
        <el-card v-for="{cardName,urlList} in fullUrlBlock "
                 :key="nanoid()" class="box-card"
                 style="min-width: 430px;max-width: 30vw"
        >


          <p slot="header">{{ cardName }}</p>
          <!--                    <template #header>-->
          <!--                      <div class="card-header">-->
          <!--                        <span>{{ cardName }}</span>-->
          <!--                      </div>-->
          <!--                    </template>-->


          <el-button
              class="button"
              v-for="url in urlList"
              :key="url.id"
              :href="url.url"
              plain
              size="large"
              style="margin: 10px 5px;
              padding: 10px;width: 120px"
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
      <p>Created by Zhuzhu.All rights reserved.</p>
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
  margin: 0 auto;
}

.button {
  font-size: 16px;
}

</style>