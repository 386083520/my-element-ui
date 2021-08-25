<template>
  <div class="el-alert"
       :class="[typeClass, 'is-' + effect]">
    <div class="el-alert__content">
      <span>
        <slot name="title">{{ title }}</slot>
      </span>
    </div>
  </div>
</template>

<script>
module.exports = {
  name: 'ElAlert',
  props: {
    title: {
      type: String,
      default: ''
    },
    type: {
      type: String,
      default: 'info'
    },
    effect: {
      type: String,
      default: 'light'
    }
  },
  computed: {
    typeClass() {
      return `el-alert--${ this.type }`;
    }
  }
};
</script>

<style>
  .el-alert {
    width: 100%;
    padding: 8px 16px;
    margin: 0;
    box-sizing: border-box;
    border-radius: 4px;
    background-color: #FFFFFF; }
  .el-alert--success.is-light {
    background-color: #f0f9eb;
    color: #67C23A; }
  .el-alert--success.is-dark {
    background-color: #67C23A;
    color: #FFFFFF; }
  .el-alert--info.is-light {
    background-color: #f4f4f5;
    color: #909399; }
  .el-alert--info.is-dark {
    background-color: #909399;
    color: #FFFFFF; }
  .el-alert--warning.is-light {
    background-color: #fdf6ec;
    color: #E6A23C; }
  .el-alert--warning.is-dark {
    background-color: #E6A23C;
    color: #FFFFFF; }
  .el-alert--error.is-light {
    background-color: #fef0f0;
    color: #F56C6C; }
  .el-alert--error.is-dark {
    background-color: #F56C6C;
    color: #FFFFFF; }
</style>
