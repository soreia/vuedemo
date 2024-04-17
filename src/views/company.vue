<template>
  <div>
    <div class="company">
      <h1>自助查询上海注册公司代理记账流程费用-不办个体</h1>
      <div class="form-row">
        <div class="form-item">
          <div>业务需求 *</div>
          <el-select v-model="business" placeholder="请选择业务需求">
            <el-option
              :label="option"
              :value="option"
              v-for="option in [
                '在上海注册新公司',
                '上海需要代理记账',
                '上海注册公司和代理记账都需要',
              ]"
              :key="option"
            ></el-option>
          </el-select>
        </div>
        <div class="form-item">
          <div>所在区域 *</div>
          <el-select v-model="city" placeholder="所在区域">
            <el-option
              :label="option"
              :value="option"
              v-for="option in ['北京', '上海', '广州']"
              :key="option"
            ></el-option>
            <!-- Add more options for other cities here -->
          </el-select>
        </div>
      </div>
      <div class="form-row">
        <div class="form-item">
          <div>联系电话 *</div>
          <el-input v-model="phone" placeholder="联系电话"></el-input>
        </div>
        <div class="form-item">
          <div>短信验证 *</div>
          <el-input v-model="verificationCode" placeholder="短信验证">
            <template #append>
              <el-button @click="getVerificationCode">获取验证码</el-button>
            </template>
          </el-input>
        </div>
      </div>
      <el-button type="primary" @click="submit">提交</el-button>
    </div>
    <div class="carousel">
      <transition :name="direction">
        <img :key="currentImage" :src="images[currentImage]" alt="" />
      </transition>
      <!-- <button @click="prev">Previous</button>
      <button @click="next">Next</button> -->
    </div>
  </div>
</template>
<script>
export default {
  name: "CompanyRegistration",
  data() {
    return {
      business: "",
      city: "",
      phone: "",
      verificationCode: "",
      currentImage: 0,
      oldScrollY: 0,
      images: [
        require("../image/b1.jpg"),
        require("../image/b2.jpg"),
        // More images...
      ],
      direction: "forward",
    };
  },
  created() {

  },
    mounted() {
     this.autoPlay();
    },  
  methods: {
    getVerificationCode() {
      // Implement the logic to get the verification code
    },
    submit() {
      // Implement the logic to submit the form
      this.validatePhoneNumber();

      this.$message.info(
        "Submitting company registration information...business" +
          this.business +
          "city" +
          this.city +
          "phone" +
          this.phone +
          "verificationCode" +
          this.verificationCode
      );

      this.apiService
        .post("http://localhost:8091/addCompany", {
          business: this.business,
          city: this.city,
          phone: this.phone,
          verificationCode: this.verificationCode,
        })
        .then((response) => {
          // Handle the response from the server
          this.$message.success(
            "Company registration successful" + response.data
          );
        })
        .catch((error) => {
          // Handle any errors that occur during the request
          this.$message.error("Company registration failed" + error);
        });
    },
    validatePhoneNumber() {
      const phoneNumberRegex = /^\d+$/;
      if (phoneNumberRegex.test(this.phone)) {
        // Phone number is valid
        // Implement your logic here
      } else {
        // Phone number is invalid
        this.$message.warning("Phone number is invalid");
      }
    },
    next() {
      this.direction = "forward";
      this.oldScrollY = window.scrollY;
      this.currentImage = (this.currentImage + 1) % this.images.length;
      this.$nextTick(() => {
        window.scrollTo(0, this.oldScrollY);
      });
    },
    prev() {
      this.direction = "backward";
      this.oldScrollY = window.scrollY;
      this.currentImage =
        (this.currentImage + this.images.length - 1) % this.images.length;
      this.$nextTick(() => {
        window.scrollTo(0, this.oldScrollY);
      });
    },
    autoPlay() {
      setInterval(() => {
        this.next();
      }, 3000);
    },
    // Implement the logic to validate the phone number
  },
};
</script>
<style scoped>
/* Add your styles here */
.company {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  height: 500px;
  position: relative;
}

.form-row {
  display: flex;
  justify-content: space-between;
  margin-bottom: 20px;
}

.form-item {
  flex: 1;
  margin-right: 10px;
}
.carousel {
  width: 100%;
  position: relative;
  overflow: hidden;
}
</style>
