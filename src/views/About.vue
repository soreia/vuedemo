<template>
    <div>
        <a href="#" @click="goHome">Back to Home</a>
        <h1>Contact Us</h1>
        <p>Thank you for your interest in our company. Please feel free to contact us using the information below:</p>
        <ul>
            <li>Email: info@company.com</li>
            <li>Phone: 123-456-7890</li>
            <li>Address: 123 Main Street, City, State, Country</li>
        </ul>
    </div>
</template>

<script>
export default {
  name: "AboutPage",
  components: {
  },
  data() {
        return {
        }
    },
    methods: {
        goHome() {
           this.$router.push('/home');
    },
    created() {
      console.log("HomePage mounted...");

    },
   }
};
</script>

<style scoped>
h1 {
    color: #333;
}

p {
    margin-bottom: 20px;
}

ul {
    list-style-type: none;
    padding: 0;
}

li {
    margin-bottom: 10px;
}
</style>