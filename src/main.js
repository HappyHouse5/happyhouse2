import Vue from "vue";
import App from "./App.vue";
import router from "./router";
import store from "./store";

Vue.config.productionTip = false;

// require('./assets/css/style.css');

// for bootstrap 5
import "bootstrap/dist/css/bootstrap.min.css"
import "bootstrap"

new Vue({
  router,
  store,
  render: (h) => h(App),
}).$mount("#app");

