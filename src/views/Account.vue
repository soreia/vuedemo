<template>
    <div class="account">
        <h1 class="title">免费领取专属方案</h1>      
        <div class="form">
            <el-input v-model="nickname" placeholder="你的昵称"></el-input>
            <el-input v-model="phone" placeholder="你的电话"></el-input>
            <el-input v-model="demand" type="textarea" placeholder="你的需求" style="width:300px;margin-bottom:30px"></el-input>
            <el-button type="primary" @click="submit">领取方案</el-button>
        </div>
    </div>
</template>

<script>
export default {
    name: 'UserAccount',  // 修改组件名为 "UserAccount"
    data() {
        return {
            nickname: '',
            phone: '',
            demand: ''
        };
    },
    methods: {
        submit() {
            // 处理提交逻辑
            this.apiService.post('http://localhost:8091/usercomment', {
                nickname: this.nickname,
                phone: this.phone,
                demand: this.demand
            }).then(response => {
                // handle response
                console.log(response);
            }).catch(error => {
                // handle error
                console.log(error);
            });
        }
    }
};
</script>

<style scoped>
.account {
    text-align: center;
}

.title {
    font-size: 24px;
    margin-bottom: 20px;
}

.form {
    display: flex;
    flex-direction: column;
    align-items: center;
    margin-bottom: 20px;
}

.el-input {
    width: 300px;
    margin-bottom: 10px;
}

.el-button {
    width: 120px;
}
</style>