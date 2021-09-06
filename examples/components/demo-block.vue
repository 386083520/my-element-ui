<template>
    <div>
        <div class="source">
            <slot name="source"></slot>
        </div>
        <div class="meta" ref="meta">
            <div class="description" v-if="$slots.default">
                <slot></slot>
            </div>
            <div class="highlight">
                <slot name="highlight"></slot>
            </div>
        </div>
    </div>
</template>

<script>
    export default {
        name: ""
    }
</script>

<style scoped>

</style>
