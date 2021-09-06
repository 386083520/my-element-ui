<template>
    <section class="content element-doc">
        <h2>Alert 警告</h2>
        <p>用于页面中展示重要的提示信息。</p>
        <h3>基本用法</h3>
        <p>页面中的非浮层元素，不会自动消失。</p>
        <demo-block>
            <div><p>Alert 组件提供四种主题，由<code>type</code>属性指定，默认值为<code>info</code>。</p>
            </div>
            <template slot="source">
                <element-demo0/>
            </template>
            <pre><code class="language-html">&lt;template&gt;
  &lt;div&gt;this is a demo&lt;/div&gt;
&lt;/template&gt;
</code></pre>
        </demo-block>
    </section>
</template>
<script>
    export default {
        name: 'component-doc',
        components: {
            "element-demo0": (function () {

                var render = function () {
                    var _vm = this
                    var _h = _vm.$createElement
                    var _c = _vm._self._c || _h
                    return _c("div", [[_c("div", [_vm._v("this is a demo")])]], 2)
                }
                var staticRenderFns = []
                render._withStripped = true


                const democomponentExport = {}
                return {
                    render,
                    staticRenderFns,
                    ...democomponentExport
                }
            })(),
        }
    }
</script>
