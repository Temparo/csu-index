<script lang="ts" setup>
import {onMounted, ref} from "vue";
import useUrlList from "../../hooks/useUrlList";
import {nanoid} from "nanoid";
import dynamicLoadJs from "../../hooks/useScriptDetection.ts";

const {fullUrlBlock} = useUrlList()
const size = ref(18)
onMounted(() => {
  dynamicLoadJs("https://cloud.umami.is/script.js", "f7ba7afc-e25f-413e-ab06-d77e6ed68eb7", () => {
    console.log("script test")

  })
})
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
                 style="width: 20rem">

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
              style="margin: 5px 5px;
              padding: 5px;width: 90px"
              tag="a"
              target="_blank"
              text
              data-umami-event="url click"
              data-umami-event-device="mobile"
              :data-umami-event-card="cardName"
              :data-umami-event-url="url.text"
          >
            {{ url.text }}
          </el-button>
        </el-card>
      </el-space>
    </el-main>
    <el-footer>
      <div class="grid-content bg-purple-dark"></div>
      <p>Created by Zhuzhu mobile.All rights reserved.</p>
    </el-footer>
  </el-container>
</template>

<style lang="scss" scoped>

.el-card {
  border-radius: 4px;
  --el-card-padding: 10px;
}


.grid-content {
  border-radius: 4px;
  min-height: 36px;
}

.el-space {
  align-items: center;
  justify-content: center;
}
</style>