import Vue from "vue";
import VueResource from "vue-resource";
import App from "./App.vue";
import router from "./router";
import store from "./store";
import colors from "./assets/css/colors.css";
import styles from "./assets/css/style.css";

Vue.config.productionTip = false;
Vue.use(VueResource);

new Vue({
  router,
  store,
  colors,
  styles,
  render: h => h(App)
}).$mount("#app");
