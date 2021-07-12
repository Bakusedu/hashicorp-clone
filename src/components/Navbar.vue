<template>
  <div v-on-clickaway="closeNavBar">
    <header
      class="flex items-center border-none xl:border-b xl:border-gray-200 justify-between font-semibold text-base text-primary bg-white py-4 px-4"
    >
      <div class="flex items-center">
        <router-link :to="'/'" class="block mr-16">
          <div id="logo" class="hidden xl:block">
            <svg
              style="height:37px;width:unset"
              width="317"
              height="88"
              viewBox="0 0 317 88"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M107.692 64.421V47.4h-14.97v17.02h-7.623V24.06h7.622v16.602h14.971V24.06h7.622v40.36h-7.622zm35.567-.001h-6.053l-.548-1.996a16.137 16.137 0 01-8.789 2.607c-5.397 0-7.699-3.697-7.699-8.79 0-5.998 2.607-8.3 8.606-8.3h7.089v-3.095c0-3.27-.907-4.421-5.633-4.421a41.255 41.255 0 00-8.179.877l-.907-5.634a38.496 38.496 0 0110.122-1.395c9.269 0 11.998 3.27 11.998 10.672l-.007 19.476zm-7.394-11.151h-5.45c-2.424 0-3.087.663-3.087 2.912 0 2.058.663 2.973 2.972 2.973a11.629 11.629 0 005.572-1.525l-.007-4.36zm21.701 11.754a34.776 34.776 0 01-10.183-1.7l1.029-5.633a33.038 33.038 0 008.788 1.273c3.271 0 3.758-.762 3.758-2.973 0-1.814-.366-2.729-5.152-3.88-7.211-1.76-8.058-3.575-8.058-9.269 0-5.938 2.607-8.545 11.03-8.545 2.98.003 5.949.348 8.85 1.03l-.762 5.876a51.98 51.98 0 00-8.118-.846c-3.209 0-3.758.763-3.758 2.546 0 2.363.183 2.546 4.185 3.575 8.263 2.188 9.055 3.278 9.055 9.307 0 5.725-1.761 9.239-10.664 9.239zm32.663-.602V43.84c0-1.578-.663-2.363-2.363-2.363-1.814 0-5.031 1.09-7.699 2.485v20.459h-7.394V22.847l7.394-1.029v15.33a26.045 26.045 0 0110.786-2.852c4.909 0 6.662 3.453 6.662 8.728v21.397h-7.386zm12.844-33.692v-8.545h7.394v8.545h-7.394zm0 33.692V34.906h7.394v29.515h-7.394zM215.62 35.15c0-7.394 4.299-11.693 14.361-11.693 3.697 0 7.38.447 10.969 1.334l-.839 6.601a59.517 59.517 0 00-9.909-1.029c-5.275 0-6.967 1.822-6.967 6.098v15.512c0 4.3 1.7 6.098 6.967 6.098a59.506 59.506 0 009.909-1.029l.846 6.609a45.672 45.672 0 01-10.968 1.334c-10.062 0-14.361-4.3-14.361-11.693l-.008-18.142zm40.499 29.873c-10.123 0-12.844-5.572-12.844-11.632v-7.455c0-6.06 2.728-11.632 12.844-11.632 10.115 0 12.844 5.572 12.844 11.632v7.455c-.023 6.06-2.744 11.632-12.844 11.632zm0-24.392c-3.941 0-5.45 1.76-5.45 5.092v7.912c0 3.331 1.524 5.092 5.45 5.092 3.925 0 5.45-1.76 5.45-5.092v-7.943c-.015-3.33-1.532-5.092-5.45-5.092v.03zm32.457.457a57.835 57.835 0 00-7.821 4.3v19.056h-7.394V34.906h6.243l.488 3.27a33.064 33.064 0 017.76-3.88l.724 6.792zm28.035 13.515c0 6.548-2.911 10.42-9.756 10.42a40.76 40.76 0 01-7.882-.853v12.196l-7.394 1.029V34.906h5.877l.762 2.485a15.535 15.535 0 019.33-3.087c5.938 0 9.086 3.514 9.086 10.245l-.023 10.054zm-17.631 3.331c2.152.474 4.346.73 6.548.763 2.668 0 3.697-1.274 3.697-3.941V44.35c0-2.424-.907-3.758-3.636-3.758a10.46 10.46 0 00-6.609 2.668v14.673zM29.134 7L0 23.808v40.361l10.946 6.32V30.127l18.188-10.504V7z"
                fill="#000"
              ></path>
              <path
                d="M40.758 7v32.144H29.133V27.147l-10.945 6.319V74.65l10.946 6.335V48.932h11.624v11.914l10.946-6.312V13.32L40.758 7z"
                fill="#000"
              ></path>
              <path
                d="M40.758 81L69.89 64.192V23.831l-10.946-6.32v40.362L40.758 68.377V81z"
                fill="#000"
              ></path>
            </svg>
          </div>
          <div id="logo-mobile" class="block xl:hidden">
            <svg
              style="height:37px;width:unset"
              width="144"
              height="144"
              viewBox="0 0 144 144"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M63.348 17L20 42.002v60.069l16.282 9.401V51.404l27.066-15.62V17z"
                fill="#000"
              ></path>
              <path
                d="M80.652 17v47.835H63.348v-17.85l-16.292 9.402v61.285l16.292 9.42V79.394h17.304v17.732l16.282-9.4V26.4L80.652 17z"
                fill="#000"
              ></path>
              <path
                d="M80.652 127.112L124 102.109V42.041l-16.292-9.401v60.068l-27.056 15.62v18.784z"
                fill="#000"
              ></path>
            </svg>
          </div>
        </router-link>
        <div class="hidden xl:flex items-center">
          <ul
            @click="toggleProducts"
            class="mr-8 flex cursor-pointer items-center"
          >
            <li class="mr-2">Products</li>
            <Dropdown :open="products" />
          </ul>
          <ul
            @click="toggleSolutions"
            class="mr-8 flex cursor-pointer items-center"
          >
            <li class="mr-2">Solutions</li>
            <Dropdown :open="solutions" />
          </ul>
          <ul
            @click="toggleCompany"
            class="mr-8 flex cursor-pointer items-center"
          >
            <li class="mr-2">Company</li>
            <Dropdown :open="company" />
          </ul>
          <ul
            @click="togglePartners"
            class="mr-8 flex cursor-pointer items-center"
          >
            <li class="mr-2">Partners</li>
            <Dropdown :open="partners" />
          </ul>
          <ul class="mr-8 flex items-center">
            <li class="mr-2">
              <router-link :to="'/'" style="text-decoration:none"
                >Events</router-link
              >
            </li>
          </ul>
        </div>
      </div>
      <div class="hidden xl:flex items-center justify-evenly">
        <ul
          @click="toggleResources"
          class="mr-8 flex cursor-pointer items-center"
        >
          <li class="mr-2">Resources</li>
          <Dropdown :open="resources" />
        </ul>
        <ul
          @click="toggleSuccess"
          class="mr-8 flex cursor-pointer items-center"
        >
          <li class="mr-2">Success & Support</li>
          <Dropdown :open="success" />
        </ul>
        <ul>
          <li
            class="px-6 py-2 border transition hover:bg-light-bg cursor-pointer border-gray-300"
          >
            Contact sales
          </li>
        </ul>
      </div>
      <div class="block xl:hidden">
        <i
          v-show="!isActive"
          @click="openMobileNav"
          class="size fas fa-bars text-black cursor-pointer"
        ></i>
        <i
          v-show="isActive"
          @click="closeMobileNav"
          class="size fas fa-times text-black cursor-pointer"
        ></i>
      </div>
    </header>
    <!-- Mobile Navigation -->

    <div style="position:relative">
      <div
        id="mobileNav"
        class="font-semibold block xl:hidden absolute w-full bg-white"
        style="z-index:20;height:91vh;top:-2px"
        v-if="isActive"
      >
        <div class=" flex flex-col justify-between" style="height:inherit">
          <div class="flex flex-col px-8">
            <ul
              @click="toggleProducts"
              class="py-2 flex cursor-pointer justify-between items-center"
            >
              <li class="mr-2">Products</li>
              <Dropright />
            </ul>
            <ul
              @click="toggleSolutions"
              class="py-2 flex cursor-pointer justify-between items-center"
            >
              <li class="mr-2">Solutions</li>
              <Dropright />
            </ul>
            <ul
              @click="toggleCompany"
              class="py-2 flex cursor-pointer justify-between items-center"
            >
              <li class="mr-2">Company</li>
              <Dropright />
            </ul>
            <ul
              @click="togglePartners"
              class="py-2 flex cursor-pointer justify-between items-center"
            >
              <li class="mr-2">Partners</li>
              <Dropright />
            </ul>
            <ul class="py-2 flex cursor-pointer justify-between items-center">
              <li class="mr-2">
                <router-link :to="'/'" style="text-decoration:none"
                  >Events</router-link
                >
              </li>
            </ul>
            <ul
              @click="toggleResources"
              class="py-2 flex cursor-pointer justify-between items-center"
            >
              <li class="mr-2">Resources</li>
              <Dropright />
            </ul>
            <ul
              @click="toggleSuccess"
              class="py-2 flex cursor-pointer justify-between items-center"
            >
              <li class="mr-2">Success & Support</li>
              <Dropright />
            </ul>
          </div>
          <div class="flex flex-col">
            <ul class="mt-10 p-8 bg-light-bg">
              <li
                class="px-6 py-2 border transition text-center hover:bg-gray-200 cursor-pointer hover:border-none border-gray-300"
              >
                Contact sales
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
    <!-- Products mobile -->
    <div
      class="z-30 absolute w-full xl:hidden bg-white overflow-y-auto"
      :class="
        products
          ? 'transition-all animate__animated animate__slideInRight animate__faster opacity-1'
          : 'transition-all animate__animated animate__slideOutRight animate__faster'
      "
      style="height:75vh"
      v-show="products"
    >
      <div
        @click="toggleProducts"
        class="w-full px-8 z-30 border-b border-gray-300 bg-white"
        style="position:sticky;top:0px"
      >
        <div class="font-semibold py-4 z-10 xl:hidden">
          <div class="flex items-center w-full">
            <div class="mr-2">
              <Dropright :open="true" />
            </div>
            <h4>Products</h4>
          </div>
        </div>
      </div>
      <Products />
    </div>
    <!-- end products mobile -->
    <!-- Solutions mobile -->
    <div
      class="z-30 absolute w-full xl:hidden bg-white overflow-y-auto"
      :class="
        solutions
          ? 'transition-all animate__animated animate__slideInRight animate__faster'
          : 'transition-all animate__animated animate__slideOutRight animate__faster'
      "
      style="height:75vh"
      v-show="solutions"
    >
      <div
        @click="toggleSolutions"
        class="w-full px-8 z-30 border-b border-gray-300 bg-white"
        style="position:sticky;top:0px"
      >
        <div class="font-semibold py-4 z-10 xl:hidden">
          <div class="flex items-center w-full">
            <div class="mr-2">
              <Dropright :open="true" />
            </div>
            <h4>Solutions</h4>
          </div>
        </div>
      </div>
      <Solutions />
    </div>
    <!-- end solutions mobile -->
    <!-- Company mobile -->
    <div
      class="z-30 absolute w-full xl:hidden bg-white overflow-y-auto"
      :class="
        company
          ? 'transition-all animate__animated animate__slideInRight animate__faster'
          : 'transition-all animate__animated animate__slideOutRight animate__faster'
      "
      style="height:75vh"
      v-show="company"
    >
      <div
        @click="toggleCompany"
        class="w-full px-8 z-30 border-b border-gray-300 bg-white"
        style="position:sticky;top:0px"
      >
        <div class="font-semibold py-4 z-10 xl:hidden">
          <div class="flex items-center w-full">
            <div class="mr-2">
              <Dropright :open="true" />
            </div>
            <h4>Company</h4>
          </div>
        </div>
      </div>
      <Company />
    </div>
    <!-- end company mobile -->
    <!-- Partners mobile -->
    <div
      class="z-30 absolute w-full xl:hidden bg-white overflow-y-auto"
      :class="
        partners
          ? 'transition-all animate__animated animate__slideInRight animate__faster'
          : 'transition-all animate__animated animate__slideOutRight animate__faster'
      "
      style="height:75vh"
      v-show="partners"
    >
      <div
        @click="togglePartners"
        class="w-full px-8 z-30 border-b border-gray-300 bg-white"
        style="position:sticky;top:0px"
      >
        <div class="font-semibold py-4 z-10 xl:hidden">
          <div class="flex items-center w-full">
            <div class="mr-2">
              <Dropright :open="true" />
            </div>
            <h4>Partners</h4>
          </div>
        </div>
      </div>
      <Partners />
    </div>
    <!-- end partners mobile -->
    <!-- Resources mobile -->
    <div
      class="z-30 absolute w-full xl:hidden bg-white overflow-y-auto"
      :class="
        resources
          ? 'transition-all animate__animated animate__slideInRight animate__faster'
          : 'transition-all animate__animated animate__slideOutRight animate__faster'
      "
      style="height:75vh"
      v-show="resources"
    >
      <div
        @click="toggleResources"
        class="w-full px-8 z-30 border-b border-gray-300 bg-white"
        style="position:sticky;top:0px"
      >
        <div class="font-semibold py-4 z-10 xl:hidden">
          <div class="flex items-center w-full">
            <div class="mr-2">
              <Dropright :open="true" />
            </div>
            <h4>Resources</h4>
          </div>
        </div>
      </div>
      <Resources />
    </div>
    <!-- end resources mobile -->
    <!-- Success mobile -->
    <div
      class="z-30 absolute w-full xl:hidden bg-white overflow-y-auto"
      :class="
        success
          ? 'transition-all animate__animated animate__slideInRight animate__faster'
          : 'transition-all animate__animated animate__slideOutRight animate__faster'
      "
      style="height:75vh"
      v-show="success"
    >
      <div
        @click="toggleSuccess"
        class="w-full px-8 z-30 border-b border-gray-300 bg-white"
        style="position:sticky;top:0px"
      >
        <div class="font-semibold py-4 z-10 xl:hidden">
          <div class="flex items-center w-full">
            <div class="mr-2">
              <Dropright :open="true" />
            </div>
            <h4>Success</h4>
          </div>
        </div>
      </div>
      <Success />
    </div>
    <!-- end success mobile -->
    <!-- End Mobile Navigation -->
    <div style="position:relative" class="hidden xl:block">
      <Products v-show="products" />
      <Solutions v-show="solutions" />
      <Company v-show="company" />
      <Partners v-show="partners" />
      <Resources v-show="resources" />
      <Success v-show="success" />
    </div>
  </div>
</template>

<script>
import Dropdown from "./Navbar/Dropdown";
import Dropright from "./Navbar/Dropright";
import Products from "./Navbar/Products";
import Solutions from "./Navbar/Solutions";
import Company from "./Navbar/Company";
import Partners from "./Navbar/Partners";
import Resources from "./Navbar/Resources";
import Success from "./Navbar/Success";
import { directive as onClickaway } from "vue-clickaway";
export default {
  directives: {
    onClickaway: onClickaway,
  },
  components: {
    Dropdown,
    Dropright,
    Products,
    Solutions,
    Company,
    Partners,
    Resources,
    Success,
  },
  data() {
    return {
      products: false,
      solutions: false,
      partners: false,
      company: false,
      resources: false,
      success: false,
      isActive: false,
    };
  },
  computed: {
    navOpen() {
      return (
        this.products ||
        this.solutions ||
        this.partners ||
        this.company ||
        this.resources ||
        this.success ||
        this.isActive
      );
    },
  },
  watch: {
    navOpen(isOpen) {
      if (isOpen) {
        return document
          .querySelector("body")
          .classList.add("overflow-y-hidden");
      }
      return document
        .querySelector("body")
        .classList.remove("overflow-y-hidden");
    },
  },
  methods: {
    toggleProducts() {
      this.products = !this.products;
      this.solutions = false;
      this.partners = false;
      this.company = false;
      this.resources = false;
      this.success = false;
    },
    toggleSolutions() {
      this.solutions = !this.solutions;
      this.products = false;
      this.partners = false;
      this.company = false;
      this.resources = false;
      this.success = false;
    },
    togglePartners() {
      this.partners = !this.partners;
      this.products = false;
      this.solutions = false;
      this.company = false;
      this.resources = false;
      this.success = false;
    },
    toggleCompany() {
      this.company = !this.company;
      this.products = false;
      this.solutions = false;
      this.partners = false;
      this.resources = false;
      this.success = false;
    },
    toggleResources() {
      this.resources = !this.resources;
      this.products = false;
      this.solutions = false;
      this.partners = false;
      this.company = false;
      this.success = false;
    },
    toggleSuccess() {
      this.success = !this.success;
      this.products = false;
      this.solutions = false;
      this.partners = false;
      this.company = false;
      this.resources = false;
    },
    openMobileNav() {
      this.isActive = true;
    },
    closeMobileNav() {
      this.isActive = false;
      this.closeNavBar();
    },
    closeNavBar() {
      this.success = false;
      this.products = false;
      this.solutions = false;
      this.partners = false;
      this.company = false;
      this.resources = false;
      this.isActive = false;
    },
  },
};
</script>

<style scoped>
.size {
  line-height: 22px;
  font-size: 22px;
  height: 22px;
  width: 22px;
}
svg {
  height: 20px;
  margin-right: 1rem;
  width: unset;
}
.nav-height {
  min-height: 402px;
  position: absolute;
  z-index: 3;
  background-color: white;
  right: 0;
  left: 0;
}
</style>
