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
  import { useRouter } from "vue-router";
  export default {
      name: 'TopHeader',
      setup() {
      const router = useRouter();
  
      const logout = () => {
        // Perform login logic here
        console.log("logout...");
  
        // After login logic, replace the current route with the home route
        router.push('/logout');
        //router.replace({ name: "logout" });
      };
  
      return {
        logout,
      };
    },
  }
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