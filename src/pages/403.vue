<template>
  <div class="page">
    <div class="error-code">403</div>
    <div class="tips">抱歉, 服务器拒绝访问</div>
    <div class="action-area">
      <q-btn color="primary" label="返回" @click="() => {this.$router.back()}" />
      <q-btn color="primary" flat label="首页" @click="() => {this.$router.push('/')}"  />
    </div>
  </div>
</template>

<script>
export default {
  name: "404"
}
</script>

<style scoped lang="less">
.page {
  width: 100vw;
  height: 100vh;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  display : flex;
  .error-code {
    font-size: 300px;
    line-height: 350px;
  }
  .tips {
    color: #999999;
    font-size: 15px;
    margin-bottom: 60px;
  }
  .action-area {
    width: 200px;
    display: flex;
    flex-direction: row;
    justify-content: space-around;
  }
}
</style>