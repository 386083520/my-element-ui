<template>
    <div
       class="demo-block"
       :class="[{ 'hover': hovering }]"
       @mouseenter="hovering = true"
       @mouseleave="hovering = false"
    >
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
        name: "",
        data() {
            return {
                hovering: false
            }
        }
    }
</script>

<style scoped lang="scss">
    .demo-block {
        border: solid 1px #ebebeb;
        border-radius: 3px;
        transition: .2s;
        &.hover {
            box-shadow: 0 0 8px 0 rgba(232, 237, 250, .6), 0 2px 4px 0 rgba(232, 237, 250, .5);
        }
        .source {
            padding: 24px;
        }
        .meta {
            background-color: #fafafa;
            border-top: solid 1px #eaeefb;
            overflow: hidden;
            transition: height .2s;
        }
        .description {
            padding: 20px;
            box-sizing: border-box;
            border: solid 1px #ebebeb;
            border-radius: 3px;
            font-size: 14px;
            line-height: 22px;
            color: #666;
            word-break: break-word;
            margin: 10px;
            background-color: #fff;

            p {
                margin: 0;
                line-height: 26px;
            }

            code {
                color: #5e6d82;
                background-color: #e6effb;
                margin: 0 4px;
                display: inline-block;
                padding: 1px 5px;
                font-size: 12px;
                border-radius: 3px;
                height: 18px;
                line-height: 18px;
            }
        }
        .highlight {
            pre {
                margin: 0;
            }

            code.hljs {
                margin: 0;
                border: none;
                max-height: none;
                border-radius: 0;

                &::before {
                    content: none;
                }
            }
        }
    }
</style>
