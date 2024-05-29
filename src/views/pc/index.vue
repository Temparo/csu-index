<script lang="ts" setup>
import useUrlList from "../../hooks/useUrlList";
import {nanoid} from "nanoid";
import {toggleDark} from "../../hooks/useDarkMode.ts";
import dynamicLoadJs from "../../hooks/useScriptDetection.ts";
import {onMounted} from "vue";
import {useRouter} from "vue-router";
import DarkModeToggle from "../../components/darkModeToggle.vue";
import {device} from "../../router";
import {ElNotification} from "element-plus";
import 'element-plus/es/components/notification/style/css'
import moveableTitle from "../../components/moveableTitle.vue";

const {fullUrlBlock} = useUrlList()
const router = useRouter()

let appPadding: string
if (device === "pc") {
  appPadding = "1rem 1rem 1.5rem 1rem"
} else if (device === "mobile") {
  appPadding = "0"
}

const prompt = () => {
  ElNotification({
    title: "Oops,我被拦住了！＠_＠",
    message: "如果看到这条提示，说明您的浏览器开启了广告拦截，烦请您将本网站加入白名单，以便我们统计各个链接的点击情况，把更常用的置于前面，我们承诺不会关联您的任何个人信息",
    type: 'warning',
    position: 'top-right',
  })
}
onMounted(() => {
  const timerId = setTimeout(() => {
    prompt()
  }, 1500)
  dynamicLoadJs("https://cloud.umami.is/script.js", "f7ba7afc-e25f-413e-ab06-d77e6ed68eb7", () => {
    clearTimeout(timerId)
  })
})

</script>

<template>
  <el-container class="container">
    <el-header>
      <div class="headline text-4xl">
        <span
            class="color-action cursor-text hover:ring-2 hover:ring-fuchsia-500 focus:ring-2 focus:ring-fuchsia-500 outline-0 bg-fuchsia-200/60 dark:bg-fuchsia-50/20 before:content-['<'] after:content-['/>'] after:ml-2">
          <a href="https://csu-index.github.io/" target="_self">CSU</a>
        </span>
        <a href="https://csu-index.github.io/" target="_self">&nbsp;-&nbsp;</a>
        <moveableTitle/>
      </div>
      <div>
        <div class="right-items">
          <el-button class="fancy-button"
                     data-umami-event="visit github (only from pc)"
                     href="https://github.com/Temparo/csu-index"
                     link
                     tag="a"
                     target="_blank">GitHub
          </el-button>
          <el-button class="fancy-button"
                     data-umami-event="visit about (only from pc)"
                     link
                     @click="router.push('/about')">About
          </el-button>
        </div>
        <div class="dark-mode-toggle-scale right-items" @click="toggleDark()">
          <dark-mode-toggle></dark-mode-toggle>
        </div>
      </div>
    </el-header>
    <el-main>

      <el-row :gutter="16" align="middle" justify="space-evenly">
        <el-col v-for="{cardName,urlList} in fullUrlBlock " :lg="8" :md="12" :sm="12" :v-if="fullUrlBlock" :xl="8"
                :xs="24"
                class="card-col">
          <el-card :key="nanoid()" class="box-card" style="min-width: 21.3em;max-width: 38rem">


            <p slot="header" class="text-xl font-sans">{{ cardName }}</p>
            <!--                                <template #header>-->
            <!--                                  <div class="card-header text-2xl font-sans">-->
            <!--                                    <span>{{ cardName }}</span>-->
            <!--                                  </div>-->
            <!--                                </template>-->
            <el-popover
                v-for="url in urlList"
                :content="url.description"
                :disabled="!url.description"
                :width="200"
                placement="right-start"
                :show-after=200
                title=""
                trigger="hover"
            >
              <template #reference>
                <el-button
                    :key="url.id"
                    :data-umami-event-card="cardName"
                    :data-umami-event-url="url.text"
                    :href="url.url"
                    class="button"
                    data-umami-event="url click"
                    data-umami-event-device="pc"
                    plain
                    size="large"
                    style="margin: 6px 0.4em;
              padding: 6px 0.4em;width: 7.5em"
                    tag="a"
                    target="_blank"
                    text
                >
                  {{ url.text }}
                </el-button>
              </template>
            </el-popover>
          </el-card>
        </el-col>
      </el-row>
    </el-main>
    <el-footer>
      <div class="grid-content bg-purple-dark"></div>
      <p>Created by ZhuZhu.All rights reserved.</p>
    </el-footer>
  </el-container>
</template>

<style lang="scss" scoped>

.el-card {
  border-radius: 4px;
  --el-card-padding: 1rem 0.5rem;
  margin-bottom: 16px;
}

.grid-content {
  border-radius: 4px;
  min-height: 36px;
}

.container {
  margin: 0 auto;
  padding: v-bind(appPadding);
  text-align: center;
}

.button {
  font-size: 16px;
}


.fancy-button {
  color: #fff;
  background: linear-gradient(315deg, #42d392 25%, #647eff);
  border: none;
  padding: 5px 10px;
  margin: 5px;
  border-radius: 8px;
  cursor: pointer;
  text-decoration: inherit;
}

.fancy-button:hover {
  color: #C8EDED;
}

.el-main {
  padding: 1rem 0.5rem;
}

.el-header {
  height: 40px;
  display: flex;
  justify-content: space-between;
  align-items: center;

  > div {
    display: flex;
    align-items: center;

    span {
      margin-left: 15px;
    }
  }
}

.dark-mode-toggle-scale {
  transform: scale(0.25);
  margin: 0 -60px 0 -67px;
}

.right-items {
  display: flex;
  align-items: normal;
  justify-content: flex-end;
}

.headline {
  display: block;

}
</style>
