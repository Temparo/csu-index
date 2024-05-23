<script lang="ts" setup>
import useUrlList from "../../hooks/useUrlList";
import {nanoid} from "nanoid";
import {toggleDark} from "../../hooks/dark.ts";

const {fullUrlBlock} = useUrlList()

</script>

<template>
  <el-container class=".container">
    <el-header>
      <div>
        <span>
          <a href="https://csu-index.github.io/" target="_self">CSU-Index</a>
        </span>
      </div>
      <div>
        <el-button
            href="https://github.com/Temparo/csu-index"
            link
            tag="a"
            target="_blank">GitHub
        </el-button>
        <el-button link
        >About
        </el-button>
        <el-menu>
          <el-menu-item h="full" @click="toggleDark()">

            <button
                class="border-none w-full bg-transparent cursor-pointer"
            >
              <i i="dark:ep-moon ep-sunny"/>
            </button>
          </el-menu-item>
        </el-menu>
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
</style>