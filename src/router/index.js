import Home from '../views/Home.vue'
import About from '../views/About.vue'
import Login from '../Login.vue'
import Logout from '../views/Logout.vue'
import phoneDialog from '../views/components/phoneDialog.vue'
import Error from '../views/Error.vue'
import Account from '../views/Account.vue'
import AutoDialog from '../views/components/autoDialog.vue';  // 导入 AutoDialog 组件

const routes = [
    {
        path: '/autoDialog',
        name: 'AutoDialog',
        component: AutoDialog,
      },
    {
        path: '/phoneDialog',
        name: 'phoneDialog',
        component: phoneDialog
    },
    {
        path: '/home',
        name: 'Home',
        component: Home
    },
    {
        path: '/account',
        name: 'Account',
        component: Account
    },
    {
        path: '/login',
        name: 'Login',
        component: Login
    },
    {
        path: '/logout',
        name: 'logout',
        component: Logout
    },
    {
        path: '/about',
        name: 'About',
        component: About
    },
    {
        path: '/error',
        name: 'Error',
        component: Error
    }
]

export default routes;