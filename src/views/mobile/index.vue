<script lang="ts" setup>
import {onMounted, ref} from "vue";
import useUrlList from "../../hooks/useUrlList";
import {nanoid} from "nanoid";
import dynamicLoadJs from "../../hooks/useScriptDetection.ts";
import {ElNotification} from "element-plus";
import 'element-plus/es/components/notification/style/css'

const {fullUrlBlock} = useUrlList()
const size = ref(18)

const prompt = () => {
  ElNotification({
    title: "Oops,我被拦住了！＠_＠",
    message: "如果看到这条提示，说明您的浏览器开启了广告拦截，烦请您将本网站加入白名单，以便我们统计各个链接的点击情况，把更常用的置于前面，我们承诺不会关联您的任何个人信息,谢谢！",
    type: 'warning',
  })
}

onMounted(() => {
  const timerId = setTimeout(() => {
    prompt()
  }, 2000)
  dynamicLoadJs("https://cloud.umami.is/script.js", "f7ba7afc-e25f-413e-ab06-d77e6ed68eb7", () => {
    clearTimeout(timerId)
  })
})
</script>

<template>
  <el-container class="container">
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
.container {
  padding: 1rem 0 1rem 0;
}

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

.el-main {
  padding: 0
}
</style>