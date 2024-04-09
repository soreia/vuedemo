<template>
    <div class="user-info">
        <div class="sidebar">
            <!-- 左侧菜单 -->
            <ul>
                <li><a href="#">个人信息</a></li>
                <li><a href="#">设置</a></li>
                <li><a href="#">退出</a></li>
            </ul>
        </div>
    </div>
</template>

<style>
.user-info {
    display: flex;
}

.sidebar {
    width: 200px;
    background-color: #f0f0f0;
    padding: 20px;
}

.content {
    flex: 1;
    padding: 20px;
}
</style>