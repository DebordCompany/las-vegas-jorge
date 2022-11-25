import { createApp } from "vue";
import App from "./App.vue";
import router from "./router";

import "./assets/main.css";
import { doc } from "prettier";

const app = createApp(App);

app.use(router);

app.mount("#app");

const menu = document.querySelector("#menu");
const boton = document.querySelector("#boton");
const nav = document.querySelector(".nav");
const enlace = document.querySelectorAll("#enlace");
boton.addEventListener("click", () => {
  menu.classList.toggle("activo");
  nav.classList.toggle("activo_nav");
  console.log("click boton")
});

