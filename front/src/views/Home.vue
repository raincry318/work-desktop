<script setup>
import { ref, onMounted, getCurrentInstance } from "vue";
import applicationPage from './pages/application/Index.vue'
import worktextPage from './pages/worktext/Index.vue'
</script>

<template>
  <div class="home">
    <el-row>
      <el-col :span="8">
        <application-page></application-page>
      </el-col>
      <el-col :span="8">
        <worktext-page></worktext-page>
      </el-col>
      <el-col :span="8">
        
      </el-col>
    </el-row>
  </div>
</template>

<style lang="less" scoped>
.home {
    width: 100%;
    height: 100%;

    background-color: #77dd77;
}
</style>
