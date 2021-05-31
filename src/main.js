import { createApp } from 'vue';
import App from './App.vue';
import router from './router'; 
import './assets/css/index.css';
import utils from './utils/utils/index';

// 注册根组件
const app = createApp(App);
app.config.globalProperties.$utils = utils;
app.use(utils);
app.use(router);
// 将根组件挂载到#app上
app.mount('#app');
