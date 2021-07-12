<template>
  <intersect @enter="onChange" :threshold="[1]">
    <div class="py-10 xl:py-24">
      <h4 class="text-white capitalize font-bold text-3xl xl:text-4xl mb-6">
        The HashiCorp Stack
      </h4>
      <p class="text-primary-text text-lg">
        Our tools provide a control plane for each layer of the cloud, enabling
        enterprises to make the shift to a cloud operating model. Each product
        addresses specific technical and organizational challenges of cloud
        infrastructure automation.
      </p>
    </div>
  </intersect>
</template>

<script>
import Intersect from "vue-intersect";
export default {
  components: {
    Intersect,
  },
  methods: {
    onChange() {
      // if (entry.isIntersecting) {
      //   console.log(entry);
      // }
      this.$emit("scrollHashicorp", 0);
    },
  },
};
</script>

<style></style>
