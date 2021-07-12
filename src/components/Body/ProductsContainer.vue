<template>
  <intersect>
    <div class="max-width px-8 xl:px-16" style="position:relative">
      <div class="flex justify-between">
        <div
          id="fixed"
          class="w-1/6 h-screen hidden xl:flex items-center stickycss"
        >
          <ul>
            <li
              class="capitalize mb-2 transition"
              :class="index == 0 ? 'text-white font-semibold' : 'text-primary'"
            >
              Overview
            </li>
            <li
              class="capitalize mb-2 transition"
              :class="index == 1 ? 'text-white font-semibold' : 'text-primary'"
            >
              Provision
            </li>
            <li
              class="capitalize mb-2 transition"
              :class="index == 2 ? 'text-white font-bold' : 'text-primary'"
            >
              Secure
            </li>
            <li
              class="capitalize mb-2 transition"
              :class="index == 3 ? 'text-white font-bold' : 'text-primary'"
            >
              Connect
            </li>
            <li
              class="capitalize transition"
              :class="index == 4 ? 'text-white font-bold' : 'text-primary'"
            >
              Run
            </li>
          </ul>
        </div>
        <div class="w-full lg:w-5/12 flex flex-col items-center min-height-70">
          <div class="py-4 xl:py-24">
            <Hashicorp @scrollHashicorp="handleTarget" />
            <Provision @scrollProvision="handleTarget" />
            <Secure @scrollSecure="handleTarget" />
            <Connect @scrollConnect="handleTarget" />
            <Run @scrollRun="handleTarget" />
          </div>
        </div>
        <div
          class="hidden h-screen xl:flex items-center lg:block stickycss w-1/3"
        >
          <div class="">
            <img
              src="https://www.hashicorp.com/img/home/stack-full.png"
              class="transition-opacity"
              :class="
                index == 0
                  ? 'transition-opacity duration-1000 opacity-1'
                  : 'transition-opacity duration-1000 opacity-0'
              "
              alt=""
            />
            <img
              src="https://www.hashicorp.com/img/home/stack-provision.png"
              class=""
              :class="
                index == 1
                  ? 'transition-opacity duration-1000 opacity-1'
                  : 'transition-opacity duration-1000 opacity-0'
              "
              alt=""
            />
            <img
              src="https://www.hashicorp.com/img/home/stack-secure.png"
              class="transition"
              :class="
                index == 2
                  ? 'transition-opacity duration-1000 opacity-1'
                  : 'transition-opacity duration-1000 opacity-0'
              "
              alt=""
            />
            <img
              src="https://www.hashicorp.com/img/home/stack-connect.png"
              class="transition"
              :class="
                index == 3
                  ? 'transition-opacity duration-1000 opacity-1'
                  : 'transition-opacity duration-1000 opacity-0'
              "
              alt=""
            />
            <img
              src="https://www.hashicorp.com/img/home/stack-run.png"
              class="transition"
              :class="
                index == 4
                  ? 'transition-opacity duration-1000 opacity-1'
                  : 'transition-opacity duration-1000 opacity-0'
              "
              alt=""
            />
          </div>
        </div>
      </div>
    </div>
  </intersect>
</template>

<script>
import Hashicorp from "./HashiCorp.vue";
import Provision from "./Provision.vue";
import Secure from "./Secure.vue";
import Connect from "./Connect.vue";
import Run from "./Run.vue";
import Intersect from "vue-intersect";
export default {
  components: {
    Hashicorp,
    Provision,
    Secure,
    Connect,
    Run,
    Intersect,
  },
  data() {
    return {
      index: 0,
    };
  },
  methods: {
    handleTarget(index) {
      this.index = index;
    },
    addSticky() {
      let el = document.getElementById("fixed");
      el.classList.add("stickycss");
    },
    removeSticky() {
      let el = document.getElementById("fixed");
      el.classList.remove("stickycss");
    },
    // onChange(entry) {
    //   console.log(entry);
    // },
  },
};
</script>

<style scoped>
.stickycss {
  position: -webkit-sticky;
  position: sticky;
  top: 50px;
}
.stickycss img {
  position: absolute;
  top: 40px;
}
</style>
