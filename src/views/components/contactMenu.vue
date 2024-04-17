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
          <span @click="toggleDialog">在线咨询</span>
        </el-menu-item>
        <el-menu-item index="3">
          <i class="el-icon-time"></i>
          <span>立即预约</span>
        </el-menu-item>
      </el-menu>
    </div>

  </div>
  <auto-dialog v-model="dialogVisible" />
  </div>
  
</template>
<script>
import AutoDialog from './autoDialog';  // 导入 AutoDialog 组件
export default {
  name: 'contactMenu',
  components: {
    AutoDialog,
  },
  data() {
    return {
      phoneDialogVisible: false,
      dialogVisible: false,  // 控制 autoDialog 的显示状态
    };
  },
  methods: {
    updatePhoneDialogVisible() {
      this.phoneDialogVisible = true;
      this.$emit('updatePhoneDialogVisible', this.phoneDialogVisible);
    },
    toggleDialog() {
      this.dialogVisible = !this.dialogVisible;  // 切换 dialogVisible 的值
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