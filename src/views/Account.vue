<template>
    <div>
        
        <el-table :data="tableData" style="width: 100%">
            <el-table-column prop="name" label="Name"></el-table-column>
            <el-table-column prop="email" label="Email"></el-table-column>
            <el-table-column prop="phone" label="Phone"></el-table-column>
        </el-table>
    </div>
</template>

<script>
export default {
    name: "AccountPage",
    data() {
        return {
            tableData: [
                { name: 'John Doe', email: 'john@example.com', phone: '1234567890' },
                { name: 'Jane Smith', email: 'jane@example.com', phone: '9876543210' },
                // Add more data here
            ]
        };
    }
};
</script>

<style>
/* Add custom styles here */
</style>