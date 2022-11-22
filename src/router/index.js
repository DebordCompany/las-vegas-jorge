import { createRouter, createWebHistory } from "vue-router";
import inicio from "../views/inicio.vue";
import galeria from "../views/galeria.vue";
import carta from "../views/carta.vue";


const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: "/",
      name: "inicio",
      component: inicio,
    },
    {
      path: "/galeria",
      name: "galeria",
      // route level code-splitting
      // this generates a separate chunk (About.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: galeria,
    },
    {
      path: "/carta",
      name: "carta",
      // route level code-splitting
      // this generates a separate chunk (About.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: carta,
    },
  ],
});

export default router;
