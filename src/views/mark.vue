<template>
  <div class="container">
    <el-form ref="form" :model="form" label-width="120px" class="form">
      <h2>免费领取专属方案</h2>
      <el-form-item>
        <el-input v-model="form.name" placeholder="你的昵称"></el-input>
      </el-form-item>
      <el-form-item>
        <el-input v-model="form.phone" placeholder="你的手机号"></el-input>
      </el-form-item>
      <el-form-item>
        <el-input
          type="textarea"
          v-model="form.requirement"
          placeholder="你的需求"
        ></el-input>
      </el-form-item>
      <el-form-item>
        <el-button type="primary" @click="onSubmit">领取方案</el-button>
      </el-form-item>
    </el-form>
  </div>
</template>

<script>
export default {
  name: "MarkPage",
  data() {
    return {
      form: {
        name: "",
        phone: "",
        requirement: "",
      },
    };
  },
  methods: {
    checkPhoneNum() {
      console.log("check phone number");
      if (!/^\d+$/.test(this.form.phone)) {
        this.$message.warning("Invalid phone number");
        return;
      }
      // Phone number is valid, continue with the logic
    },
    onSubmit() {
      this.checkPhoneNum();
      console.log("submit!", this.form);
      this.apiService
        .post("http://localhost:8091/addMark", {
          name: this.form.name,
          phone: this.form.phone,
          requirement: this.form.requirement,
        })
        .then((response) => {
          console.log(response.data);
        })
        .catch((error) => {
          console.error(error);
        });
    },
  },
};
</script>

<style scoped>
.container {
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100vh;
}

.form {
  width: 50%;
}
</style>