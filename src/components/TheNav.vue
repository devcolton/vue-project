<script setup lang="ts">
import '@/assets/css/nav.css'
import { ref } from 'vue'
import {
  Document,
  Menu as IconMenu,
  Location,
  Setting,
} from '@element-plus/icons-vue'

const isCollapse = ref(true)
// const handleOpen = (key: string, keyPath: string[]) => {
//   console.log(key, keyPath)
// }
// const handleClose = (key: string, keyPath: string[]) => {
//   console.log(key, keyPath)
// }
</script>

<template>
  <nav>
    <!-- <el-radio-group v-model="isCollapse" style="margin-bottom: 20px">
      <el-radio-button :value="false">expand</el-radio-button>
      <el-radio-button :value="true">collapse</el-radio-button>
    </el-radio-group> -->
    <el-menu
      :router="true"
      :default-active="$route.path"
      :collapse="isCollapse"
    >
      <el-menu-item index="/dashboard">
        <el-icon><location /></el-icon>
        <template #title>대시보드</template>
      </el-menu-item>
      <el-menu-item index="/unit">
        <el-icon><location /></el-icon>
        <template #title>장치관리</template>
      </el-menu-item>
      <el-menu-item index="/cctv">
        <el-icon><icon-menu /></el-icon>
        <template #title>CCTV</template>
      </el-menu-item>
      <el-menu-item index="/statistics">
        <el-icon><document /></el-icon>
        <template #title>기간별 누적데이터</template>
      </el-menu-item>
      <el-menu-item index="/setting">
        <el-icon><setting /></el-icon>
        <template #title>환경설정</template>
      </el-menu-item>
    </el-menu>
  </nav>
</template>

<style scoped>
  nav ul {
    height: 100%;
    display: flex;
    flex-direction: column;
    justify-content: center;
    background-color: #082622;
  }

  nav ul li {
    color: #fff;
  }
</style>
