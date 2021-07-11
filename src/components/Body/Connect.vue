<template>
  <intersect @enter="onChange" :threshold="[1]">
    <div class="py-10 xl:py-24">
      <svg
        class="h-16"
        style="position:relative;left:-33px"
        xmlns="http://www.w3.org/2000/svg"
        width="241"
        height="88"
        viewBox="0 0 241 88"
        fill="none"
      >
        <path
          d="M87.469 34.75c0-7.38 4.3-11.68 14.34-11.68 3.707-.001 7.4.445 11 1.33l-.85 6.6a58.997 58.997 0 00-9.86-1c-5.27 0-7 1.81-7 6.11v15.46c0 4.29 1.69 6.11 7 6.11a58.997 58.997 0 009.86-1l.85 6.6a46.002 46.002 0 01-11 1.33c-10 0-14.34-4.3-14.34-11.68V34.75zm41.628 29.83c-10.11 0-12.82-5.58-12.82-11.58v-7.48c0-6 2.72-11.62 12.83-11.62s12.82 5.57 12.82 11.62V53c-.01 6-2.73 11.58-12.83 11.58zm0-24.39c-3.94 0-5.45 1.76-5.45 5.09v7.92c0 3.33 1.51 5.08 5.45 5.08 3.94 0 5.44-1.75 5.44-5.08v-7.92c0-3.28-1.51-5.09-5.44-5.09zM164.367 64V43.4c0-1.57-.67-2.36-2.36-2.36s-5 1.09-7.69 2.48V64h-7.379V34.51h5.629l.71 2.49a29.496 29.496 0 0111.8-3.09c4.9 0 6.661 3.45 6.661 8.71V64h-7.371zm22.561.58a34.655 34.655 0 01-10.16-1.7l1-5.62a33.18 33.18 0 008.77 1.27c3.27 0 3.75-.73 3.75-3 0-1.81-.36-2.72-5.14-3.87-7.2-1.75-8.05-3.57-8.05-9.26 0-5.93 2.6-8.53 11-8.53a38.51 38.51 0 018.83 1l-.65 5.93a52.382 52.382 0 00-8.11-.85c-3.21 0-3.75.73-3.75 2.54 0 2.36.18 2.54 4.18 3.57 8.22 2.18 9 3.27 9 9.32-.02 5.69-1.77 9.2-10.67 9.2zm22.87-30.07v20.57c0 1.57.66 2.36 2.36 2.36 1.7 0 5-1.09 7.68-2.48V34.51h7.38V64h-5.62l-.73-2.48a29.443 29.443 0 01-11.8 3.09c-4.9 0-6.65-3.45-6.65-8.72V34.51h7.38zM233.566 64V22.47l7.38-1V64h-7.38z"
          fill="#fff"
        />
        <path
          d="M31.778 75.59a31.759 31.759 0 1121.5-55.12l-7.51 7.88a20.87 20.87 0 100 31l7.51 7.85a31.66 31.66 0 01-21.5 8.39zm25.56-15.89a2.6 2.6 0 110-5.2 2.6 2.6 0 010 5.2z"
          fill="#E03875"
        />
        <path
          d="M31.577 50.711a6.88 6.88 0 110-13.76 6.88 6.88 0 010 13.76zm28.75.099a2.6 2.6 0 112.6-2.6 2.61 2.61 0 01-2.6 2.6zm-7.739-.3a2.6 2.6 0 110-5.2 2.6 2.6 0 010 5.2zm7.739-8.45a2.6 2.6 0 112.6-2.6 2.61 2.61 0 01-2.6 2.6zm-7.739.3a2.6 2.6 0 110-5.2 2.6 2.6 0 010 5.2zm4.899-9.05a2.6 2.6 0 110-5.2 2.6 2.6 0 010 5.2z"
          fill="#E03875"
        />
      </svg>
      <p class="text-primary my-6 text-lg">
        Automate service-based networking in the cloud.
      </p>
      <ul class="flex text-white items-center font-semibold mb-3 group">
        <router-link :to="'/'" class="hover:no-underline">
          Service discovery
        </router-link>
        <svg
          class="ml-1 transition-all transform group-hover:translate-x-1"
          width="18"
          height="18"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            class="group-hover:stroke-purple"
            d="M3 9h12m-4.5-4.5L15 9l-4.5 4.5"
            stroke="var(--gray-2,#343536)"
          ></path>
        </svg>
      </ul>
      <ul class="flex text-white items-center font-semibold mb-3 group">
        <router-link :to="'/'" class="hover:no-underline">
          Service mesh
        </router-link>
        <svg
          class="ml-1 transition-all transform group-hover:translate-x-1"
          width="18"
          height="18"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            class="group-hover:stroke-purple"
            d="M3 9h12m-4.5-4.5L15 9l-4.5 4.5"
            stroke="var(--gray-2,#343536)"
          ></path>
        </svg>
      </ul>
      <hr class="bg-primary w-8  border-primary my-8" />
      <ul class="flex text-white items-center font-semibold mb-3 group">
        <router-link :to="'/'" class="hover:no-underline">
          Learn more
        </router-link>
      </ul>
      <ul class="flex text-white items-center font-semibold mb-3 group">
        <router-link :to="'/'" class="hover:no-underline">
          Get started
        </router-link>
      </ul>
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
      this.$emit("scrollConnect", 3);
    },
  },
};
</script>

<style></style>
