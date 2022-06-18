<template>
  <q-layout view="hHh lpR fFf">

    <q-header elevated class="bg-primary text-white">
      <q-toolbar>
        <q-btn dense flat round icon="menu" @click="toggleLeftDrawer" />
        <q-toolbar-title class="title-font">VEXING</q-toolbar-title>

        <q-space/>

        <q-avatar color="white"  text-color="black">{{nicknameFirstWord}}</q-avatar>
      </q-toolbar>
    </q-header>

    <q-drawer show-if-above v-model="leftDrawerOpen" side="left"  bordered>
      <q-list  class="text-primary"  >
        <q-item
            clickable
            v-ripple
            active-class="menu-active"
            v-for="item in menusRouter"
            :key="item.meta.title"
            :active="item.name === route.name"
            :to="item.path"
        >
          <q-item-section avatar>
            <q-icon :name="item.meta.icon" />
          </q-item-section>

          <q-item-section>{{item.meta.title}}</q-item-section>
        </q-item>


      </q-list>
    </q-drawer>

    <q-page-container>
      <router-view/>
    </q-page-container>

  </q-layout>
</template>

<script>
import {computed, ref} from 'vue'
import { useStore } from "vuex";
import {menusRouter} from "../router/index.js";
import {useRoute} from "vue-router";

export default {

  name: "Layout",
  setup () {
    const leftDrawerOpen = ref(false)
    const store = useStore();
    const route = useRoute();

    return {
      nicknameFirstWord: computed(
          () => store.getters["user/nicknameFirstWord"]
      ),
      menusRouter,
      route,
      leftDrawerOpen,
      toggleLeftDrawer () {
        leftDrawerOpen.value = !leftDrawerOpen.value
      }
    }
  }
}

</script>

<style scoped>
.menu-active {
  color: darkblue;
}
.avatar-color {
  color: darkblue;
}

.title-font {
  font-family: "Droid Sans",serif;
  font-weight: bolder;
}

</style>