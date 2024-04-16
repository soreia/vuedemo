/* eslint-disable */
<template>
  <el-dialog
    title="电话通信"
    width="30%"
    v-model:visible="localDialogVisible"
  >
    <div>免费回电</div>
    <div>请放心接听 服务时间全天24小时</div>
    <el-input v-model="input1" placeholder="请输入你的手机号"></el-input>
    <el-input style='width: 70%;' v-model="input2" placeholder="请输入短信验证码">
    </el-input>
    <el-button icon="el-icon-search" style='width: 30%;'>验证码</el-button>
    <el-input  type="textarea" v-model="input3" placeholder="请输入咨询内容">
    </el-input>
    <span class="dialog-footer">
      <el-button @click="closeDialog">免费回电</el-button>
    </span>
  </el-dialog>
</template>
<script>
  export default {
    name: 'phoneDialog',
    props: {
        phoneDialogVisible: Boolean,
    },
    data() {
      return {
        input1: '',
        input2: '',
        input3: '',
        localDialogVisible: false,  // 创建一个新的数据属性
      };
    },
    watch: {
    phoneDialogVisible(newVal, oldVal) {
      console.log(`this is Dialog ----phoneDialogVisible changed from ${oldVal} to ${newVal}`);
      // 在这里添加你需要执行的代码
      this.localDialogVisible=newVal
    },
  },
    methods: {
    closeDialog() {
    console.log('this is Dialog ----closeDialog');
    this.savePhoneMessage();
    this.localDialogVisible = false; 
    this.$emit('updatePhoneDialogVisible', this.localDialogVisible); 
  },
  savePhoneMessage(){
    this.$apiService.post('http://localhost:8091/api/savePhoneMessage', {
      phoneNum: this.input1,
      phoneMessage: this.input3
    }).then(response => {
       return response.data;
      // handle response
    }).catch(error => {
      // handle error
      console.log(error);
      this.submitStatus =false;
    });


  }

},
  }
</script>