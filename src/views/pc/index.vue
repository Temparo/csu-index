<script lang="ts" setup>
import useUrlList from "../../hooks/useUrlList";
import {nanoid} from "nanoid";
import {toggleDark} from "../../hooks/useDarkMode.ts";
import dynamicLoadJs from "../../hooks/useScriptDetection.ts";
import {onMounted} from "vue";
import {useRouter} from "vue-router";
import DarkModeToggle from "../../components/darkModeToggle.vue";

const {fullUrlBlock} = useUrlList()
onMounted(() => {
  dynamicLoadJs("https://cloud.umami.is/script.js", "f7ba7afc-e25f-413e-ab06-d77e6ed68eb7", () => {
    console.log("script test")

  })
})
const router = useRouter()
</script>

<template>
  <el-container class=".container">
    <el-header>
      <div class="headline">
        <span>
          <a href="https://csu-index.github.io/" target="_self">CSU-Index</a>
        </span>
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


            <p slot="header">{{ cardName }}</p>
            <!--                    <template #header>-->
            <!--                      <div class="card-header">-->
            <!--                        <span>{{ cardName }}</span>-->
            <!--                      </div>-->
            <!--                    </template>-->
            <el-button
                v-for="url in urlList"
                :key="url.id"
                :href="url.url"
                class="button"
                plain
                size="large"
                style="margin: 6px 0.4em;
              padding: 6px 0.4em;width: 7.5em"
                tag="a"
                target="_blank"
                text
                data-umami-event="url click"
                data-umami-event-device="pc"
                :data-umami-event-card="cardName"
                :data-umami-event-url="url.text"
            >
              {{ url.text }}
            </el-button>
          </el-card>
        </el-col>
      </el-row>
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
  --el-card-padding: 0.8rem 0.5rem;
  margin-bottom: 16px;
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

.el-main {
  padding: 1rem 0.5rem;
}

.el-header {
  height: 40px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  font-size: 24px;

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
</style>