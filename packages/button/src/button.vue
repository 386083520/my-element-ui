<template>
    <button class="el-button">
        abc{{size}}
    </button>
</template>
<script>
    export default {
        name: 'ElButton',
        props: {
            size: String
        }
    };
</script>
