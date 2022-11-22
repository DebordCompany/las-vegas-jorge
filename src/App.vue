<script setup>
import { RouterLink, RouterView } from "vue-router";
import navbarComponenteVue from "./components/navbarComponente.vue";
</script>

<template>
  <header class="header">
    <a href="/">Las vegas</a>
  </header>
  <navbarComponenteVue/>
  <RouterView />
</template>
