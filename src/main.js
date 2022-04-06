import {createApp} from 'vue';
import ElementPlus from 'element-plus';
import App from './App.vue';
import router from "./router";

createApp(App)
  .use(router)
  .use(ElementPlus)
  .mount('#app')
