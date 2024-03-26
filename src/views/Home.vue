/* eslint-disable */
<template>
  <div class="HomePage">
    <TopHeader />
    <h1>Welcome to Our Company</h1>
    <h1 class="c_name">
      <a href="#" @click="goUserInfo">{{ username }}</a>
    </h1>
    <p>
      We are a leading company in the industry, providing innovative solutions
      to our clients.
    </p>
    <div class="services">
      <h2>Our Services</h2>
      <ul>
        <li>Service 1</li>
        <li>Service 2</li>
        <li>Service 3</li>
      </ul>
    </div>
    <div class="team">
      <h2>Our Team</h2>
      <ul>
        <li>Team Member 1</li>
        <li>Team Member 2</li>
        <li>Team Member 3</li>
      </ul>
    </div>
    <div class="contact">
      <h2>Contact Us</h2>
      <p>Feel free to reach out to us for any inquiries or collaborations.</p>
      <a href="#" @click="goAbout">Contact</a>
    </div>
  </div>
</template>

<script>
import TopHeader from './components/TopHeader.vue';

export default {
  name: "HomePage",
  components: {
    TopHeader
  },
  data() {
        return {
            username: '',
            password: ''
        }
    },
    methods: {
      goAbout() {
           this.$router.push('/about');
    },
    goUserInfo() {
      this.$router.push({
        path: '/userInfo',
        query: { username: this.username }
      });
    }
    },
    created() {
      console.log("HomePage mounted...");
      this.username = this.$route.query.username;
      console.log("username: ", this.username);

    },
};
</script>

<style scoped>
.c_name {
  color: #f50a0a;
}
/* Add any necessary styles for the HomePage component here */
</style>