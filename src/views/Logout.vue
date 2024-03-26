
<template>
    <div>
        <h1>Welcome</h1>
        <p>You have successfully logged out.</p>
        <button @click="login">Login</button>
    </div>
</template>

<script>
export default {
    name: 'LogOut',
    methods: {
        login() {
           this.$router.push('/login');
        }
    }
}
</script>

<style scoped>
/* Add your custom styles here */
</style>