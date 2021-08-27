<template>
  <div class="el-alert"
       :class="[typeClass, 'is-' + effect]"
       v-show="visible">
    <div class="el-alert__content">
      <span>
        <slot name="title">{{ title }}</slot>
      </span>
      <i class="el-alert__closebtn" :class="{ 'is-customed': closeText !== '', 'el-icon-close': closeText === '' }" @click="close()">{{closeText}}</i>
    </div>
  </div>
</template>

<script>
export default {
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
    },
    closeText: {
      type: String,
      default: ''
    }
  },
  computed: {
    typeClass() {
      return `el-alert--${ this.type }`;
    }
  },
  data() {
    return {
      visible: true
    };
  },
  methods: {
    close() {
      this.visible = false;
      this.$emit('close');
    }
  },
};
</script>
