import Vue from "vue"
import App from "Components/App.vue"
import router from "./router"
import store from "./vuex/store"
import "Services/pwa/registerServiceWorker"
import "Assets/scss/main.scss"

Vue.config.productionTip = false;

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount("#app");
