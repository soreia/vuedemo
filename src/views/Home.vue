/* eslint-disable */
<template>
  <div class="HomePage">
    <el-container>
      <el-header>
        <TopHeader />
      </el-header>
      <el-main>
        <div>
          <img alt="" src="../image/main.jpg" class="groot-ui-image-inner" style="width: 100%;">
        </div>
        <div>
          <img alt="" src="../image/main0.jpg" class="groot-ui-image-inner" style="width: 100%;">
        </div>
        <div>
          <img alt="" src="../image/main1.jpg" class="groot-ui-image-inner" style="width: 100%;">
        </div>
        <ContactMenu />
      </el-main
      >
      <el-footer>
        <div class="guarantee-item">
          <i class="icon-guarantee-new icon-safeguarding-rights"></i>
          <div>协助维权</div>
          <div class="c_name">蒙受经济损失，可申请XXX协助</div>
        </div>
      </el-footer>
    </el-container>
  </div>
</template>

<script>
import TopHeader from './components/TopHeader.vue';
import ContactMenu from './components/contactMenu.vue';
export default {
  name: "HomePage",
  components: {
    TopHeader,
    ContactMenu
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
.icon-safeguarding-rights{
    font-family: "icon-safeguarding-rights" !important;
    font-size: 13px;
    font-style: normal;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
}
.guarantee-item {
  margin-right: 5em;
    display: -webkit-box;
    display: -webkit-flex;
    display: -ms-flexbox;
    display: -moz-box;
    display: -moz-flex;
    display: flex;
    -webkit-box-align: center;
    -webkit-align-items: center;
    -moz-box-align: center;
    -moz-align-items: center;
    -ms-flex-align: center;
    align-items: center;
    cursor: pointer;
}
.c_name {
  color: #f50a0a;
}
/* Add any necessary styles for the HomePage component here */
</style>