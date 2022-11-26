<script setup>
import { RouterLink, RouterView } from "vue-router";
import navbarComponenteVue from "./components/navbarComponente.vue";
import footerComponente from "./components/footerComponente.vue"
</script>

<template>
  <header class="header">
    <RouterLink id="enlace" to="/">Las Vegas</RouterLink>
  </header>
  <navbarComponenteVue/>
  <RouterView />
  <footerComponente>
    
  </footerComponente>
</template>
