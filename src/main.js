import { createApp } from "vue";
import { createWebHistory, createRouter } from "vue-router";
import Vue from 'vue'
import VueGtag from 'vue-gtag'

// views

import Landing from './views/Landing.vue'

// styles

import "@fortawesome/fontawesome-free/css/all.min.css";

// mouting point for the whole app

import App from "@/App.vue";

// routes

const routes = [
  {
    path: "/landing",
    component: Landing,
  },
  { path: "/:pathMatch(.*)*", redirect: "/landing" },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

createApp(App).use(router).mount("#app");

Vue.use(VueGtag, {
  config: {
    id: 'G-TYVMZG9483',
  },
}, router)

this.$gtag.event('main.js', { method: 'enter' })