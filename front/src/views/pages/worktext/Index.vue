<!--
 * @Author: fengdakang
 * @Date: 2023-07-15 18:01:31
 * @LastEditors: fengdakang
 * @LastEditTime: 2023-07-15 18:11:18
 * @Description: 
 * @FilePath: \front\src\views\pages\worktext\Index.vue
-->
<script setup>
import '@wangeditor/editor/dist/css/style.css'
import { ref, shallowRef, onMounted, onBeforeUnmount } from "vue";

import { Editor, Toolbar } from '@wangeditor/editor-for-vue'

let valueHtml = ref('')
const editorRef = shallowRef()

// 模拟 ajax 异步获取内容
onMounted(() => {
    setTimeout(() => {
        valueHtml.value = '<p>模拟 Ajax 异步设置内容</p>'
    }, 1500)
})

const toolbarConfig = {}
const editorConfig = { placeholder: '请输入内容...' }

// 组件销毁时，也及时销毁编辑器
onBeforeUnmount(() => {
    const editor = editorRef.value
    if (editor == null) return
    editor.destroy()
})

const handleCreated = (editor) => {
  editorRef.value = editor // 记录 editor 实例，重要！
}
</script>

<template>
  <div class="worktext-page">
    <el-card class="e-work-card">
      <template #header>
        <div class="card-header">
        </div>
      </template>
      <Toolbar
        style="border-bottom: 1px solid #ccc"
        :editor="editorRef"
        :defaultConfig="toolbarConfig"
        :mode="mode"
      />
      <Editor
        style="height: 500px; overflow-y: hidden;"
        v-model="valueHtml"
        :defaultConfig="editorConfig"
        :mode="mode"
        @onCreated="handleCreated"
      />
    </el-card>
  </div>
</template>

<style lang="less" scoped>
.worktext-page {
    width: 100%;
    height: 100%;
    padding: 20px;

    background-color: #77dd77;
}
</style>
