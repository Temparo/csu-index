<script lang="ts" setup>
import {nanoid} from "nanoid";
import {type UrlBlock} from "../types";

let urlList: UrlBlock = [
  {
    id: nanoid(),
    url: 'https://lib.csu.edu.cn/',
    text: '图书馆',
    note: ''
  },
  {
    id: nanoid(),
    url: 'https://my.csu.edu.cn/login/index.jsp',
    text: '信息门户'
  }]

let urlTest: UrlBlock = [
  {
    "id": nanoid(),
    "url": "https://lib.csu.edu.cn/",
    "text": "图书馆"
  },
  {
    "id": nanoid(),
    "url": "https://my.csu.edu.cn/login/index.jsp",
    "text": "信息门户"
  },
  {
    "id": nanoid(),
    "url": "https://faculty.csu.edu.cn/",
    "text": "教师信息查询"
  },
  {
    "id": nanoid(),
    "url": "https://54sh.csu.edu.cn/tntz/tntz.htm",
    "text": "升华网通知"
  },
  {
    "id": nanoid(),
    "url": "https://career.csu.edu.cn/",
    "text": "就业指导中心"
  },
  {
    "id": nanoid(),
    "url": "https://portpal.csu.edu.cn/",
    "text": "上网认证"
  },
  {
    "id": nanoid(),
    "url": "https://oa.csu.edu.cn/con/ggtz",
    "text": "校内通知"
  },
  {
    "id": nanoid(),
    "url": "https://ehall.csu.edu.cn/v2/site/index",
    "text": "办事大厅"
  },
  {
    "id": nanoid(),
    "url": "https://oa.csu.edu.cn/mailbox/#",
    "text": "校长信箱"
  },
  {
    "id": nanoid(),
    "url": "http://csujwc.its.csu.edu.cn/",
    "text": "本科生教务"
  },
  {
    "id": nanoid(),
    "url": "http://gms.csu.edu.cn/",
    "text": "研究生教务"
  },
  {
    "id": nanoid(),
    "url": "https://lms.csu.edu.cn/login",
    "text": "教学可视化"
  },
  {
    "id": nanoid(),
    "url": "https://ms.csu.edu.cn/",
    "text": "正版软件"
  }
]


</script>

<template>
  <col>
  <el-row :gutter="20">
    <el-col :span="8">

      <el-card>
        <p slot="header">常用链接</p>
        <el-button
            v-for="url in urlList"
            :key="url.id"
            :href="url.url"
            plain
            size="large"
            style="width: 100px; height: 50px;"
            tag="a"
            target="_blank"
            text
        >
          {{ url.text }}
        </el-button>
      </el-card>

    </el-col>
    <el-col :span="8">

      <el-card>
        <p slot="header">simple url test</p>

        <el-button
            v-for="url in urlTest"

            :key="url.id"
            :href="url.url"
            plain
            size="large"
            style="margin: 10px;padding: 10px; border:1px solid orange;"
            tag="a"
            target="_blank"
        >
          {{ url.text }}
        </el-button>
      </el-card>
    </el-col>
  </el-row>

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
</style>