<template>
  <div>
    <i
      class="size cursor-pointer"
      :class="open ? 'fas fa-chevron-left' : 'fas fa-chevron-right'"
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
