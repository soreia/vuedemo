<template>
    <div>
        <el-dialog v-model:visible="dialogVisible" title="Dialog Title">
            <el-form ref="form" :model="form" label-width="100px">
                <el-form-item label="业务需求">
                    <el-select v-model="form.selectedBusiness" placeholder="请选择业务需求">
                        <el-option
                            v-for="business in businessOptions"
                            :key="business.value"
                            :label="business.label"
                            :value="business.value"
                        ></el-option>
                    </el-select>
                </el-form-item>

                <el-form-item label="业务所在区域">
                    <el-select v-model="form.selectedRegion" placeholder="请选择业务所在区域">
                        <el-option
                            v-for="region in regionOptions"
                            :key="region.value"
                            :label="region.label"
                            :value="region.value"
                        ></el-option>
                    </el-select>
                </el-form-item>

                <el-form-item label="联系电话">
                    <el-input v-model="form.phoneNumber" placeholder="请输入联系电话"></el-input>
                </el-form-item>
            </el-form>
        </el-dialog>
    </div>
</template>

<script>
export default {
    data() {
        return {
            dialogVisible: false,
            form: {
                selectedBusiness: '',
                selectedRegion: '',
                phoneNumber: '',
                verificationCode: '',
            },
            businessOptions: [
                { value: 'option1', label: '选项1' },
                { value: 'option2', label: '选项2' },
                { value: 'option3', label: '选项3' },
            ],
            regionOptions: [
                { value: 'beijing', label: '北京' },
                { value: 'shanghai', label: '上海' },
                { value: 'guangzhou', label: '广州' },
                { value: 'shenzhen', label: '深圳' },
                { value: 'chengdu', label: '成都' },
                { value: 'wuhan', label: '武汉' },
                { value: 'chongqing', label: '重庆' },
                { value: 'tianjin', label: '天津' },
                { value: 'nanjing', label: '南京' },
                { value: 'hangzhou', label: '杭州' },
                { value: 'xian', label: '西安' },
                { value: 'suzhou', label: '苏州' },
                { value: 'qingdao', label: '青岛' },
                { value: 'dalian', label: '大连' },
                { value: 'shenyang', label: '沈阳' },
                { value: 'jinan', label: '济南' },
                { value: 'zhengzhou', label: '郑州' },
                { value: 'changsha', label: '长沙' },
                { value: 'fuzhou', label: '福州' },
                { value: 'haikou', label: '海口' },
                { value: 'nanning', label: '南宁' },
                { value: 'guiyang', label: '贵阳' },
                { value: 'kunming', label: '昆明' },
                { value: 'lanzhou', label: '兰州' },
                { value: 'xiamen', label: '厦门' },
                { value: 'wulumuqi', label: '乌鲁木齐' },
                { value: 'lasa', label: '拉萨' },
                { value: 'yinchuan', label: '银川' },
                { value: 'taiyuan', label: '太原' },
                { value: 'hefei', label: '合肥' },
                { value: 'nanchang', label: '南昌' },
                { value: 'changchun', label: '长春' },
                { value: 'harbin', label: '哈尔滨' },
                { value: 'shijiazhuang', label: '石家庄' },
                { value: 'urumqi', label: '乌鲁木齐' },
                { value: 'xining', label: '西宁' },
                { value: 'taipei', label: '台北' },
                { value: 'hongkong', label: '香港' },
                { value: 'macau', label: '澳门' },
            ],
        };
    },
    methods: {
        submitForm() {
            // Handle form submission logic here
            console.log(this.form);
        },
        getVerificationCode() {
            // Handle getting verification code logic here
            console.log('Getting verification code');
        },
    },
};
</script>

<style scoped>
/* Add your custom styles here */
</style>