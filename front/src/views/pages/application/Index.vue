<!--
 * @Author: FengDaKang 31929672+raincry318@users.noreply.github.com
 * @Date: 2023-07-15 17:30:11
 * @LastEditors: fengdakang
 * @LastEditTime: 2023-07-15 22:04:37
 * @FilePath: \front\src\views\pages\application\Index.vue
 * @Description: 这是默认设置,请设置`customMade`, 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
-->
<script setup>
import { ref, onMounted, getCurrentInstance } from "vue";

const testClick = async () => {
  window.electronAPI.setTitle('XXX')
  
}

</script>

<template>
  <div class="application-page">
    <el-card class="e-work-card">
      <template #header>
        <div class="card-header" >
          <el-button @click="testClick"></el-button>
        </div>
      </template>
    </el-card>
  </div>
</template>

<style lang="less" scoped>
.application-page {
    width: 100%;
    height: 100%;
    padding: 20px;

    background-color: #77dd77;

    .card-header {
      height: 40px;
    }
}
</style>
