<template>
  <el-space direction="horizontal" wrap>
    <el-card key="banana" class="box-card">
      <template #header>
        <div class="card-header">
          <span>test button</span>
          <el-button class="button" @click="showAnother">Another Test</el-button>
        </div>
      </template>
      <div v-for="o in 4" :key="o" class="text item">
        {{ height + "x" + width }}
      </div>
    </el-card>
    <el-card key="cli" class="box-card">
      <template #header>
        <div class="card-header">
          <span>Card name </span>
          <el-button class="button">Operation button</el-button>
        </div>
      </template>
      <div v-for="o in 4" :key="o" class="text item">
        {{ 'List item ' + o }}
      </div>
    </el-card>
  </el-space>
</template>
<script lang="ts" setup>
import useScreenSize from "../hooks/useScreenSize.ts";

const {width, height} = useScreenSize()

function showAnother() {
  console.log("这是长" + height.value)
  console.log("这是宽" + width.value)
}


</script>