<template>
  <div>
    <i
      class="fas fa-chevron-down size"
      :class="
        open
          ? 'transform rotate-180 transition'
          : 'transform rotate-0 transition'
      "
    ></i>
  </div>
</template>

<script>
export default {
  props: ["open"],
};
</script>

<style scoped>
.size {
  line-height: 10px;
  font-size: 10px;
  height: 10px;
  width: 10px;
}
</style>
