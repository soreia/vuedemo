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
import { useRouter } from "vue-router";
export default {
    name: 'AboutPage',
    setup() {
    const router = useRouter();
    //const username = ref("");

    // onMounted(() => {

    // //   username.value = "Liya.Su";
    // });
    const goHome = () => {
      // Perform login logic here
      console.log("goHome...");

      // After login logic, replace the current route with the home route
      router.replace({ name: "Home" });
    };

    return {
        goHome,
      // username
    };
  },
}
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