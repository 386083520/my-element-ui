<template>
  <transition name="el-alert-fade">
    <div class="el-alert"
         :class="[typeClass, center ? 'is-center' : '', 'is-' + effect]"
         v-show="visible"
         role="alert">
      <i class="el-alert__icon" :class="[ iconClass, isBigIcon ]" v-if="showIcon"></i>
      <div class="el-alert__content">
        <span class="el-alert__title" :class="[ isBoldTitle ]" v-if="title || $slots.title">
          <slot name="title">{{ title }}</slot>
        </span>
        <p class="el-alert__description" v-show="$slots.default && !description"><slot></slot></p>
        <p class="el-alert__description" v-show="description && !$slots.default">{{ description }}</p>
        <i class="el-alert__closebtn" :class="{ 'is-customed': closeText !== '', 'el-icon-close': closeText === '' }"  v-show="closable" @click="close()">{{closeText}}</i>
      </div>
    </div>
  </transition>
</template>

<script>
const TYPE_CLASSES_MAP = {
  'success': 'el-icon-success',
  'warning': 'el-icon-warning',
  'error': 'el-icon-error'
};
module.exports = {
  name: 'ElAlert',
  props: {
    title: {
      type: String,
      default: ''
    },
    closable: {
      type: Boolean,
      default: true
    },
    showIcon: Boolean,
    center: Boolean,
    description: {
      type: String,
      default: ''
    },
    type: {
      type: String,
      default: 'info'
    },
    effect: {
      type: String,
      default: 'light',
      validator: function(value) {
        return ['light', 'dark'].indexOf(value) !== -1;
      }
    },
    closeText: {
      type: String,
      default: ''
    }
  },
  computed: {
    typeClass() {
      return `el-alert--${ this.type }`;
    },
    iconClass() {
      return TYPE_CLASSES_MAP[this.type] || 'el-icon-info';
    },
    isBigIcon() {
      return this.description || this.$slots.default ? 'is-big' : '';
    },
    isBoldTitle() {
      return this.description || this.$slots.default ? 'is-bold' : '';
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
