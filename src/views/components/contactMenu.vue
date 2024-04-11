<template>
  <div>
    <div class="user-info">
    <div class="sidebar">
      <el-menu
        default-active="1-4-1"
        class="el-menu-vertical-demo"
      >
        <el-menu-item index="1">
          <i class="el-icon-phone"></i>
            <span @click="updatePhoneDialogVisible">免费回话</span>
        </el-menu-item>
        <el-menu-item index="2">
          <i class="el-icon-chat-dot-round"></i>
          <span>在线咨询</span>
        </el-menu-item>
        <el-menu-item index="3">
          <i class="el-icon-time"></i>
          <span>立即预约</span>
        </el-menu-item>
      </el-menu>
    </div>

  </div>
  </div>
  
</template>
<script>
export default {
  name: 'contactMenu',
  components: {},
  data() {
    return {
      phoneDialogVisible: false,
    };
  },
  methods: {
    updatePhoneDialogVisible() {
      this.phoneDialogVisible = true;
      this.$emit('updatePhoneDialogVisible', this.phoneDialogVisible);
    },
  },
};
</script>

<style>
.user-info {
  display: flex;
}

.sidebar {
  width: 150px;
  background-color: #f0f0f0;
  padding: 5px;
}

.content {
  flex: 1;
  padding: 5px;
}
</style>