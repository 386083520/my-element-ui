<template>
   <div class="headerWrapper">
      <div id="v3-banner">
         <template>
            您正在浏览基于 Vue 2.x 的 Element UI 文档;
            <a href="https://element-plus.org/#/zh-CN">点击这里</a> 查看 Vue 3.x 的升级版本
         </template>
      </div>
      <header class="header" ref="header">
         <div class="container">
            <h1><router-link :to="`/zh-CN`">
               <slot>
                  <img
                          src="../assets/images/element-logo.svg"
                          alt="element-logo"
                          class="nav-logo">
                  <img
                          src="../assets/images/element-logo-small.svg"
                          alt="element-logo"
                          class="nav-logo-small">
               </slot>
            </router-link>
            </h1>
            <ul class="nav">
               <li class="nav-item">
                  <router-link
                          active-class="active"
                          :to="`/zh-CN/guide`">指南
                  </router-link>
               </li>
               <li class="nav-item">
                  <router-link
                          active-class="active"
                          :to="`/zh-CN/component`">组件
                  </router-link>
               </li>
               <li
                       class="nav-item nav-item-theme"
               >
                  <router-link
                          active-class="active"
                          :to="`/zh-CN/theme`">主题
                  </router-link>
               </li>
               <li class="nav-item">
                  <router-link
                          active-class="active"
                          :to="`/zh-CN/resource`"
                          exact>资源
                  </router-link>
               </li>
            </ul>
         </div>
      </header>
   </div>
</template>

<script>
    export default {
        name: ""
    }
</script>

<style scoped lang="scss">
   .headerWrapper {
      height: 80px;
   }
   #v3-banner {
      background-color: #409EFF;
      min-height: 30px;
      padding: 5px 60px;
      z-index: 19;
      box-sizing: border-box;
      text-align: center;
      color: #eee;
   }
   #v3-banner a {
      color: #FFF;
      font-weight: bold;
   }
   .header {
      height: 80px;
      background-color: #fff;
      color: #fff;
      top: 0;
      left: 0;
      width: 100%;
      line-height: 80px;
      z-index: 100;
      position: relative;
      .container {
         height: 100%;
         box-sizing: border-box;
         border-bottom: 1px solid #DCDFE6;
      }
   }
   h1 {
      margin: 0;
      float: left;
      font-size: 32px;
      font-weight: normal;
      a {
         color: #333;
         text-decoration: none;
         display: block;
      }
   }
   .nav {
      float: right;
      height: 100%;
      line-height: 80px;
      background: transparent;
      padding: 0;
      margin: 0;
      &::before, &::after {
         display: table;
         content: "";
      }
      &::after {
         clear: both;
      }
   }
   .nav-item {
      margin: 0;
      float: left;
      list-style: none;
      position: relative;
      cursor: pointer;
      a {
         text-decoration: none;
         color: #1989FA;
         opacity: 0.5;
         display: block;
         padding: 0 22px;

         &.active,
         &:hover {
            opacity: 1;
         }

         &.active::after {
            content: '';
            display: inline-block;
            position: absolute;
            bottom: 0;
            left: calc(50% - 15px);
            width: 30px;
            height: 2px;
            background: #409EFF;
         }
      }
   }
</style>
