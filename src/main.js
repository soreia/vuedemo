import Vue from 'vue';
import VueRouter from 'vue-router';
import App from './App.vue'; // 导入 App 组件
import routes from './router'; // 导入路由配置

Vue.use(VueRouter);

const router = new VueRouter({
    mode: 'history',
    base: process.env.BASE_URL,
    routes
});

new Vue({
    router,
    render: h => h(App),
}).$mount('#app');