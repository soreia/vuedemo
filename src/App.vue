<template>
  <div id="app">
    <el-container>
      <el-header>
        <TopHeader />
      </el-header>
      <el-main>
        <router-view></router-view>
        <ContactMenu 
        class="contactMenu" 
        @updatePhoneDialogVisible="updatePhoneDialogVisible" />
        <PhoneDialog 
        :phoneDialogVisible ="phoneDialogVisible" 
        @updatePhoneDialogVisible="updatePhoneDialogVisible"
        />
      </el-main>
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
import TopHeader from './views/components/TopHeader.vue';
import ContactMenu from './views/components/contactMenu.vue';
import PhoneDialog from './views/components/phoneDialog.vue';
export default {
  name: 'App',
  data: function() {
    return {
      phoneDialogVisible: false
    }
  },
  components: {
    TopHeader,
    ContactMenu,
    PhoneDialog
  },
  watch: {
    phoneDialogVisible(newVal, oldVal) {
      console.log(`phoneDialogVisible changed from ${oldVal} to ${newVal}`);
      // 在这里添加你需要执行的代码
    },
  },
  methods: {
    updatePhoneDialogVisible(newVal) {
      this.phoneDialogVisible = newVal;
    },
  },
  mounted() {
    this.$router.push('/home');
  }
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
}
.contactMenu {
  position: fixed;
  top: 50%;
  right: 28px;
}
</style>
