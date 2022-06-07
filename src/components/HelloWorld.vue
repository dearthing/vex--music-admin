<script setup>
import { ref } from 'vue'
import {sayHello} from "../api/hello";


defineProps({
  msg: String
})

const count = ref(0)
const message = ref("VEX")

const hi =()=>{
  // 调用暴露的sayHello方法promise处理逻辑
  sayHello().then(response=>{
    console.log(response)
    message.value = "已请求"
  },error=>{
    console.log(error)
    message.value = "请求失败"
  })
}
</script>

<template>
  <h1>{{ message }}</h1>
  <q-btn color="primary" @click="count ++">点击次数 : {{count}}</q-btn>
  <br>
  <br>
  <q-btn style="background: #FF0080; color: white" @click="hi">请求接口</q-btn>
  <br>
  <br>
  <q-btn color="grey-4" text-color="purple" glossy unelevated icon="camera_enhance" label="Purple text" />
</template>

<style scoped>
a {
  color: #42b983;
}
</style>
