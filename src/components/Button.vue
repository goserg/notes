<template>
  <button
    class="button"
    :class="{
      button__float_top: float_top,
      button__float_right: float_right,
      button__stick_right: stick_right,
      button_color_main: color_main  
      }"
    @click="$emit('click')"
  >
    <slot></slot>
  </button>
</template>

<script>
export default {
  props: {
    float_top: Boolean,
    float_right: Boolean,
    stick_right: Boolean,
    color_main: Boolean
  }
}
</script>

<style lang="scss" scoped>
  .button {
    background: transparent;
    border: 0;
    outline: 0;
    color: #9EC862;
    height: 2rem;
    font-size: 1rem;
    line-height: 2rem;
    transition: transform 0.1s ease;
    &:hover {
      transform: scale(1.1);
    }
    &:focus {
      outline: 1px solid;
    }
  }
  .button_color_main {
    background: #9EC862;
    color: white;
  }

  .button__float_top {
    position: absolute;
    top: 1rem;
  }
  .button__float_right {
    position: absolute;
    right: 1rem;
  }
  .button__stick_right {
    margin-left: auto;
  }
</style>
