import Home from '../views/Home.vue'
import About from '../views/About.vue'
import Login from '../Login.vue'
import Logout from '../views/Logout.vue'
import UserInfo from '../views/components/UserInfo.vue'
import Error from '../views/Error.vue'
const routes = [
    {
        path: '/home',
        name: 'Home',
        component: Home
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
        path: '/userInfo',
        name: 'UserInfo',
        component: UserInfo
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