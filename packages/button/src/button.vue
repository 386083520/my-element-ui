<template>
    <button class="el-button">
        abc{{size}}
    </button>
</template>
<script>
    module.exports = {
        name: 'ElButton',
        props: {
            size: String
        }
    };
</script>
<style>
    .el-button {
        background: aquamarine;
    }
</style>
