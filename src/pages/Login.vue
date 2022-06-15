<template>
  <div class="login-page">
    <q-card class="login-page-content">
      <div class="title">VEX</div>
      <q-card-section>
        <form @submit="onSubmit(username, password)"  class="q-gutter-md" >
          <q-input
              ref="nameRef"
              filled
              v-model="username"
              label="用户名 : "
              lazy-rules
          />

          <q-input
              ref="ageRef"
              filled
              type="password"
              v-model="password"
              label="密码 : "
              lazy-rules
          />

          <q-toggle  label="记住我"  model-value="true"/>

          <div>
            <q-btn class="full-width" label="登录" type="submit" color="primary" />
          </div>
    </form>
      </q-card-section>
   </q-card>
  </div>

</template>

<script>

import { ref } from 'vue'
import {useQuasar} from "quasar";
import {useStore} from "vuex";
import {useRoute, useRouter} from "vue-router";

export default {
  name: "Login",
  setup () {
    const $q = useQuasar();
    const username = ref('');
    const password = ref('');
    const router = useRouter();
    const route = useRoute();

    const store = useStore();
    const onSubmit = (username,password) => {
      store.dispatch('user/login',{username,password}).then(()=>{
        router.push({ path: route.query.redirect || '/' });
      })
    }
    return {
      username,
      password,
      onSubmit,
    }
  }
}
</script>

<style scoped lang = less>
.login-page {
  background-image:url(../assets/background.png);

  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 100vw;
  height: 100vh;

  .login-page-content {
    .title {
      font-family: "Droid Sans",serif;
      font-size: 50px;
      text-align: center;
      margin-bottom: 10px;
    }
    width: 400px;
    padding: 20px;
  }
}
</style>