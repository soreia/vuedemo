import Vue from 'vue';
import VueRouter from 'vue-router';
import App from './App.vue'; // 导入 App 组件
import routes from './router'; // 导入路由配置
import ElementUI from 'element-ui';
import 'element-ui/lib/theme-chalk/index.css';
import ApiService from './js/common/apiService';

Vue.use(VueRouter);
Vue.use(ElementUI);
Vue.prototype.$apiService = ApiService;  // 将 API 服务添加到 Vue 原型
const router = new VueRouter({
    mode: 'history',
    base: process.env.BASE_URL,
    routes
});

new Vue({
    router,
    render: h => h(App),
}).$mount('#app');