<!--
 * @Author: FengDaKang 31929672+raincry318@users.noreply.github.com
 * @Date: 2023-07-15 17:30:11
 * @LastEditors: fengdakang
 * @LastEditTime: 2023-07-17 00:15:54
 * @FilePath: \front\src\views\pages\application\Index.vue
 * @Description: 这是默认设置,请设置`customMade`, 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
-->
<script setup>
import { ref, onMounted, getCurrentInstance } from "vue";

const testClick = async () => {
  window.electronAPI.controller('XXX')
  let result = await window.electronAPI.reController('XXX')
  console.log('vue=>', result)
}

const addApp = async () => {
  window.electronAPI.controller('XXX')
  let result = await window.electronAPI.reController('XXX')
  console.log('vue=>', result)
}
const beforeAppUpload = async (UploadRawFile) => {
  // 正则表达式
  let params = {
    className: 'appController',
    funcName: 'addApp',
    params: {
      name: UploadRawFile.name,
      path: UploadRawFile.path
    }
  }
  let result = await window.electronAPI.common(params)
  console.log('result=>', result)
  return false 
} 
</script>

<template>
  <div class="application-page">
    <el-card class="e-work-card">
      <template #header>
        <div class="card-header" >
          应用列表
          <el-upload
            ref="appUpload"
            action="#"
            show-file-list="false"
            :limit="1"
            accept=".exe, .link"
            :before-upload="beforeAppUpload"
          >
            <el-button type="primary">添加</el-button>
          </el-upload>
        </div>
      </template>
      <div class="applications-div">
        <div class="application-item">

        </div>
      </div>
    </el-card>
  </div>
</template>

<style lang="less" scoped>
.application-page {
    height: 100%;
    padding: 20px;

    background-color: #77dd77;

    .card-header {
      display: flex;
      align-items: center;
      justify-content: space-between;
    }
}
</style>
