<template>
    <div  class="el-card" :class="shadow ? 'is-' + shadow + '-shadow' : 'is-always-shadow'">
        <div class="el-card__header">
            header
        </div>
        <div class="el-card__body" :style="bodyStyle">
            <slot></slot>
        </div>
    </div>
</template>

<script>
    module.exports = {
        name: 'ElCard',
        props: {
            bodyStyle: {},
            shadow: {
                type: String
            }
        }
    };
</script>
<style>
    .el-card {
        border-radius: 4px;
        border: 1px solid #EBEEF5;
        background-color: #FFFFFF;
        overflow: hidden;
        color: #303133;
        transition: 0.3s; }
    .el-card.is-always-shadow {
        box-shadow: 0 2px 12px 0 rgba(0, 0, 0, 0.1); }
    .el-card.is-hover-shadow:hover, .el-card.is-hover-shadow:focus {
        box-shadow: 0 2px 12px 0 rgba(0, 0, 0, 0.1); }
</style>
