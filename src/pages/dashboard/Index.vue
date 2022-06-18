<template>
  <q-img
      src="https://cdn.quasar.dev/img/parallax1.jpg"
      style="height: 100px"
  ></q-img>


  <q-btn @click="logout">注销</q-btn>
</template>

<script>
import { computed } from 'vue'
import { useStore } from 'vuex'

export default {
  name: "Index",
  setup() {
    const store = useStore();
    return {
      nickname: computed(() => store.state.user.nickname),
      logout: () => store.dispatch('user/logout').then(()=>{window.location.reload()})
    }
  }
}
</script>

<style scoped>

</style>