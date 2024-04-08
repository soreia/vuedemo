<template>
  <div class="error-page">
    <h1>Error</h1>
    <p>Oops! Something went wrong.</p>
    <p>{{ errorMessage }}</p>
    <a href="#" @click="goLogin">Go back to Login</a>
  </div>
</template>

<script>
export default {
    name: 'ErrorPage',
    data() {
        return {
            errorMessage: this.$route.query.errorMessage
        }
    },
    methods: {
        created() {
            console.log("ErrorPage created...");    
        },
        goLogin() {
            this.$router.push('/login');
        }
   }
}
</script>

<style scoped>
.error-page {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  height: 100vh;
  font-size: 24px;
  color: red;
}
</style>