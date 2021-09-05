<template>
    <div>
        <div class="banner">
            <div class="banner-desc">
                <h1>网站快速成型工具</h1>
                <p>Element，一套为开发者、设计师和产品经理准备的基于 Vue 2.0 的桌面端组件库</p>
            </div>
        </div>
        <div class="jumbotron" ref="indexMainImg">
            <img src="../../../examples/assets/images/theme-index-blue.png" alt="">
        </div>
        <div class="cards">
            <ul class="container">
                <li>
                    <div class="card">
                        <img src="../../../examples/assets/images/guide.png" alt="">
                        <h3>指南</h3>
                        <p>了解设计指南，帮助产品设计人员搭建逻辑清晰、结构合理且高效易用的产品。</p>
                        <router-link
                                active-class="active"
                                to="/zh-CN/guide/design"
                                exact>查看详情
                        </router-link>
                    </div>
                </li>
                <li>
                    <div class="card">
                        <img src="../../../examples/assets/images/component.png" alt="">
                        <h3>组件</h3>
                        <p>使用组件 Demo 快速体验交互细节；使用前端框架封装的代码帮助工程师快速开发。</p>
                        <router-link
                                active-class="active"
                                to="/zh-CN/component/layout"
                                exact>查看详情
                        </router-link>
                    </div>
                </li>
                <li>
                    <div class="card">
                        <img src="../../../examples/assets/images/theme-index-icon.svg" alt="">
                        <h3>主题</h3>
                        <p>在线主题编辑器，可视化定制和管理站点主题、组件样式</p>
                        <router-link
                                active-class="active"
                                to="/zh-CN/theme"
                                exact>查看详情
                        </router-link>
                    </div>
                </li>
                <li>
                    <div class="card">
                        <img src="../../../examples/assets/images/resource.png" alt="">
                        <h3>资源</h3>
                        <p>下载相关资源，用其快速搭建页面原型或高保真视觉稿，提升产品设计效率。</p>
                        <router-link
                                active-class="active"
                                to="/zh-CN/resource"
                                exact>查看详情
                        </router-link>
                    </div>
                </li>
            </ul>
        </div>
    </div>
</template>

<script>
    export default {
        name: ""
    }
</script>

<style scoped lang="scss">
    .banner {
        text-align: center;
        .banner-desc {
            padding-top: 50px;

            h1 {
                font-size: 34px;
                margin: 0;
                line-height: 48px;
                color: #555;
            }

            p {
                font-size: 18px;
                line-height: 28px;
                color: #888;
                margin: 10px 0 5px;
            }
        }
    }
    .jumbotron {
        width: 890px;
        margin: 30px auto;
        position: relative;
        img {
            width: 100%;
        }
    }
    .cards {
        margin: 0 auto 110px;
        width: 1140px;

        .container {
            padding: 0;
            margin: 0 -11px;
            width: auto;
            &::before, &::after {
                display: table;
                content: "";
            }
            &::after {
                clear: both;
            }
        }


        li {
            width: 25%;
            padding: 0 19px;
            box-sizing: border-box;
            float: left;
            list-style: none;
        }

        img {
            width: 160px;
            height: 120px;
        }
    }
    .card {
        height: 430px;
        width: 100%;
        background:#ffffff;
        border:1px solid #eaeefb;
        border-radius:5px;
        box-sizing: border-box;
        text-align: center;
        position: relative;
        transition: all .3s ease-in-out;
        bottom: 0;

        img {
            margin: 66px auto 60px;
        }
        h3 {
            margin: 0;
            font-size: 18px;
            color: #1f2f3d;
            font-weight: normal;
        }
        p {
            font-size: 14px;
            color: #99a9bf;
            padding: 0 25px;
            line-height: 20px;
        }
        a {
            height: 53px;
            line-height: 52px;
            font-size: 14px;
            color: #409EFF;
            text-align: center;
            border: 0;
            border-top: 1px solid #eaeefb;
            padding: 0;
            cursor: pointer;
            width: 100%;
            position: absolute;
            bottom: 0;
            left: 0;
            background-color: #fff;
            border-radius: 0 0 5px 5px;
            transition: all .3s;
            text-decoration: none;
            display: block;

            &:hover {
                color: #fff;
                background: #409EFF;
            }
        }
        &:hover {
            bottom: 6px;
            box-shadow: 0 6px 18px 0 rgba(232,237,250,0.50);
        }
    }
</style>
