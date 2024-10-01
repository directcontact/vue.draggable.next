import { createApp } from "vue";
import App from "./App.vue";
import { createRouter, createWebHashHistory } from "vue-router";

import rawDisplayer from "./components/infra/raw-displayer.vue";
import cloneOnControl from "./components/clone-on-control.vue";
import Clone from "./components/clone.vue";
import CustomClone from "./components/custom-clone.vue";

import routes from "./route";
import store from "./store";
import ElementPlus from "element-plus";
import "bootstrap/dist/css/bootstrap.min.css";
import "font-awesome/css/font-awesome.css";
import "element-plus/lib/theme-chalk/index.css";

const router = createRouter({
  history: createWebHashHistory("/vue.draggable.next/"),
  routes,
});

const app = createApp(App)
  .use(store)
  .use(router)
  .use(ElementPlus)
  .component("rawDisplayer", rawDisplayer)
  .component("CloneOnControl", cloneOnControl);

router.isReady().then(() => app.mount("#app"));
