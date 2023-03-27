import { createApp } from 'vue'
import App from './App.vue'
import vuetify from './plugins/vuetify'
import { loadFonts } from './plugins/webfontloader'

import { createRouter, createWebHistory } from "vue-router";

import LessonComponent from "./components/LessonComponent.vue";
import LessontableComponent from "./components/LessontableComponent.vue";
import FormularComponent from "./components/FormularComponent.vue";

const router = createRouter({
    history: createWebHistory(),
    mode: "history",
    routes: [
      { path: "/", component: LessonComponent },
      { path: "/lessontable", component: LessontableComponent },
      { path: "/form/:kurse", component: FormularComponent, props:true }
    ]
  });

loadFonts()

createApp(App)
  .use(vuetify)
  .use(router)
  .mount('#app')
