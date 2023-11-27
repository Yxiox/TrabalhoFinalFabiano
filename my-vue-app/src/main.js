import { createApp } from "vue";
import "./style.css";
import App from "./App.vue";

import { createRouter, createWebHistory } from "vue-router";
import Home from "./pages/Home.vue";
import Cart from "./pages/Cart.vue";

const routes = [
  { path: "/", component: Home },
  { path: "/cart", component: Cart }
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

createApp(App).use(router).mount("#app");