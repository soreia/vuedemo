<template>
  <div>
    <el-form>
      <el-form-item label="Username">
        <el-input v-model="username" required></el-input>
      </el-form-item>
      <el-form-item label="Password">
        <el-input type="password" v-model="password" required></el-input>
      </el-form-item>
      <el-button type="primary" @click="login">Login</el-button>
    </el-form>
  </div>
</template>

<script>
import apiService from './js/common/apiService';

export default {
    name: 'UserLogin',
    data() {
        return {
            username: '',
            password: '',
        }
    },
    methods: {
    async login() {
      try {
        const response = await apiService.post('/login', {
          username: this.username,
          password: this.password
        });

        // 根据响应判断登录是否成功
        if (response.data.success) {
          // 登录成功，跳转到主页
          this.$router.push({
                path: '/home',
                query: { username: this.username }
            });
        } else {
            this.$router.push({
                path: '/error',
                query: { errorMessage: 'Login failed' }
            });
          // 登录失败，显示错误消息
          console.log('Login failed');
        }
      } catch (error) {
        // 请求失败，显示错误消息
        console.log('An error occurred');
      }
    }
},
    mounted() {
        console.log("UserLogin mounted...");
    }
}
</script>
