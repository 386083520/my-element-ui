<template>
    <div class="page-container page-component">
        <div class="page-component__content">
            <router-view class="content"></router-view>
        </div>
    </div>
</template>

<script>
    export default {
        name: ""
    }
</script>

<style scoped lang="scss">
.page-component {
    box-sizing: border-box;
    height: 100%;

    &.page-container {
        padding: 0;
    }

    .page-component__content {
        padding-left: 270px;
        padding-bottom: 100px;
        box-sizing: border-box;
    }

    .content {
        padding-top: 50px;
    }
}
</style>
