/* eslint-disable */
<template>
  <div class="header">
    <img class="logo" src="../../image/logo.png" />
    <div class="title">易涛企业</div>
    <el-tag type="danger" effect="dark" class="server">企业服务<br/>一站解决</el-tag>
    <div class="safe"></div>
    <div class="topmenu">
    <el-menu
      :default-active="activeIndex2"
      class="el-menu-demo"
      mode="horizontal"
      @select="handleSelect"
      active-text-color="#ffd04b"
    >
      <el-menu-item index="1">首页</el-menu-item>
      <el-menu-item index="2">代理记账</el-menu-item>
      <el-menu-item index="3">0元开公司</el-menu-item>
      <el-menu-item index="4">专利/版权</el-menu-item>
      <el-menu-item index="5">商标注册</el-menu-item>
      <el-menu-item index="6">资质许可</el-menu-item>
      <el-button type="primary" style="margin-top: 10px;">免费电话</el-button>
    </el-menu>
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
  <style scoped>
  .topmenu{
    position: absolute;
    right: 70px
  }
  .server{
    font-size: 8px !important;
    height: 32px !important;
    line-height: 16px !important;
  }
.safe {
  height: 34px;
  width: 90px;
  background:url('../../image/icon-safeguard.PNG') no-repeat;
  margin-right: 10px;
  margin-left: 10px;
}
.header {
  display: flex;
  align-items: center;
  padding-left: 30px;
  padding-right: 30px;
  margin-top: 10px;
  border-bottom: 1px solid #ebeef5;
  height: 59px;
}
.title {
  font-size: 18px;
  font-weight: bold;
  margin-right: 10px;
}
.logo {
  font-size: 24px;
  font-weight: bold;
  height: 40px;
  width: 40px;
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