<template>
  <div class="el-badge">
    <slot></slot>
    <sup
        v-show="!hidden && (content || content === 0 || isDot)"
        v-text="content">
    </sup>
  </div>
</template>

<script>
module.exports = {
  name: 'ElBadge',
  props: {
    value: [String, Number],
    max: Number,
    hidden: Boolean,
    isDot: Boolean
  },
  computed: {
    content() {
      if (this.isDot) return;
      const value = this.value;
      const max = this.max;
      if (typeof value === 'number' && typeof max === 'number') {
        return max < value ? `${max}+` : value;
      }
      return value
    }
  }
};
</script>
