<template>
    <div class="header">
      <div class="logo">Your Logo</div>
      <div class="user-info">
        <span class="username">Liya Su</span>
        <button class="logout-btn" @click="logout">Logout</button>
      </div>
      <div class="search-box">
        <input type="text" placeholder="Search..." />
        <button class="search-btn">Search</button>
      </div>
    </div>
  </template>
  
  <script>
export default {
  name: "TopHeader",
  components: {
  },
  data() {
        return {
        }
    },
    methods: {
      logout() {
           this.$router.push('/logout');
    },
    created() {
      console.log("HomePage mounted...");

    },
   }
};
  </script>
  <style>
  .header {
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding: 10px;
    background-color: #f2f2f2;
  }
  
  .logo {
    font-size: 24px;
    font-weight: bold;
  }
  
  .user-info {
    display: flex;
    align-items: center;
  }
  
  .username {
    margin-right: 10px;
  }
  
  .search-box {
    display: flex;
    align-items: center;
  }
  
  .search-box input {
    padding: 5px;
    margin-right: 10px;
  }
  
  .search-btn {
    padding: 5px 10px;
  }
  </style>