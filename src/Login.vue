<template>
    <div>
        <div   class="form-group">
            <label for="username">Username</label>
            <input type="text" id="username" v-model="username" required>
        </div>
        <div class="form-group">
            <label for="password">Password</label>
            <input type="password" id="password" v-model="password" required>
        </div>
        <button @click="login">Login</button>
    </div>
</template>

<script>

export default {
    name: 'UserLogin',
    data() {
        return {
            username: '',
            password: ''
        }
    },
    methods: {
        login() {
            this.$router.push({
                path: '/home',
                query: { username: this.username }
            });
        }
    },
    mounted() {
        console.log("UserLogin mounted...");
    }
}
</script>
