<template>
  <div id="app">
    <Navbar />
    <Body :slider="sliders" />
  </div>
</template>

<script>
import Navbar from "./components/Navbar.vue";
import Body from "./components/Body.vue";

export default {
  name: "App",
  components: {
    Navbar,
    Body,
  },
  data() {
    return {
      sliders: [
        "https://www.datocms-assets.com/2885/1611862831-pandora-slide.jpg",
        "https://www.datocms-assets.com/2885/1611862868-roblox-slide.jpg",
        "https://www.datocms-assets.com/2885/1611862892-mercedes-slide.jpg",
      ],
    };
  },
};
</script>

<style>
#app {
  font-family: "Metrophobic", sans-serif;
  -webkit-font-smoothing: antialiased;
}
</style>
