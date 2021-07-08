<template>
  <div>
    <header
      class="flex items-center justify-between font-semibold text-sm text-primary bg-white py-4 px-8"
    >
      <div class="flex items-center">
        <router-link to="/" class="block mr-16">
          <div id="logo" class="hidden lg:block">
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
          <div id="logo-mobile" class="block lg:hidden">
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
        <div class="hidden lg:flex items-center">
          <ul class="mr-8 flex items-center">
            <li class="mr-2">Products</li>
            <Dropdown :open="products" />
          </ul>
          <ul class="mr-8 flex items-center">
            <li class="mr-2">Solutions</li>
            <Dropdown :open="solutions" />
          </ul>
          <ul class="mr-8 flex items-center">
            <li class="mr-2">Company</li>
            <Dropdown :open="company" />
          </ul>
          <ul class="mr-8 flex items-center">
            <li class="mr-2">Partners</li>
            <Dropdown :open="partners" />
          </ul>
          <ul class="mr-8 flex items-center">
            <li class="mr-2">Events</li>
            <Dropdown :open="events" />
          </ul>
        </div>
      </div>
      <div class="hidden lg:flex items-center justify-evenly">
        <ul class="mr-8 flex items-center">
          <li class="mr-2">Resources</li>
          <Dropdown :open="resources" />
        </ul>
        <ul class="mr-8 flex items-center">
          <li class="mr-2">Success & Support</li>
          <Dropdown :open="success" />
        </ul>
        <ul>
          <li class="px-6 py-2 border border-gray-300">Contact sales</li>
        </ul>
      </div>
      <div class="block lg:hidden">
        <i class="fas fa-bars size"></i>
      </div>
    </header>
    <div class="border-t text-primary text-sm border-gray-200">
      <div class="mx-16 my-6 flex">
        <div class="w-4/12">
          <div class="flex justify-between mb-8">
            <div class="w-1/2">
              <ul>
                <h4
                  class="uppercase font-bold text-gray-800 tracking-widest mb-2"
                >
                  infrastructure
                </h4>
                <ul class="flex items-center font-semibold my-2">
                  <svg
                    width="144"
                    height="144"
                    viewBox="0 0 144 144"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      fill-rule="evenodd"
                      clip-rule="evenodd"
                      d="M55.522 32.97l32.96 19.02v38.06l-32.96-19.03V32.97zM92.09 51.99v38.06l32.95-19.03V32.97L92.09 51.99zM18.96 11.73v38.05l32.95 19.03V30.76L18.96 11.73zm36.562 101.51l32.95 19.03V94.22l-32.95-19.03v38.05z"
                      fill="#7B42BC"
                    ></path>
                  </svg>
                  <router-link>
                    Terraform
                  </router-link>
                </ul>
                <ul class="flex items-center font-semibold my-2">
                  <svg
                    width="144"
                    height="144"
                    viewBox="0 0 144 144"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      fill-rule="evenodd"
                      clip-rule="evenodd"
                      d="M35.09 26.38L74.22 49v83.38l-39.13-22.62V26.38z"
                      fill="#02A8EF"
                    ></path>
                    <path
                      d="M93.6 36.13L51.06 11.62v17L80 45.34v51.05l13.61 7.82c8.421 4.86 15.311 2 15.311-6.47V60.28c-.01-8.42-6.92-19.28-15.32-24.15z"
                      fill="#02A8EF"
                    ></path>
                  </svg>
                  <router-link>
                    Packer
                  </router-link>
                </ul>
                <ul class="flex items-center font-semibold my-2">
                  <svg
                    width="144"
                    height="144"
                    viewBox="0 0 144 144"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M110.77 17.55L86.68 31.46V40L72 74.52 57.32 40v-8.54L33.23 17.55l-14.65 8.47v9.83l32.63 79.92 20.79 12 20.79-12 32.63-79.92v-9.83l-14.65-8.47z"
                      fill="#0E67ED"
                    ></path>
                    <path
                      d="M125.42 26.02l-24.09 13.9v8.55L81.77 92.19 72 97.83v29.94l20.79-12 32.63-79.92v-9.83zM57.32 40v-8.54l-14.66 8.46v8.55l19.57 43.72L72 86.55V74.52L57.32 40z"
                      fill="#0850C5"
                    ></path>
                  </svg>
                  <router-link>
                    Vagrant
                  </router-link>
                </ul>
              </ul>
            </div>
            <div class="w-1/2">
              <ul>
                <h4 class="uppercase font-bold tracking-widest text-gray-800">
                  security
                </h4>
                <ul class="flex font-semibold items-center my-2">
                  <svg
                    width="144"
                    height="144"
                    viewBox="0 0 144 144"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M16.88 21.15L71.8 131.4l55.321-110.25H16.881zm61.46 22.12h6.39v6.4h-6.39v-6.4zM65.61 68.84h-6.39v-6.39h6.39v6.39zm0-9.59h-6.39v-6.39h6.39v6.39zm0-9.58h-6.39v-6.4h6.39v6.4zm9.59 28.76h-6.4V72h6.4v6.43zm0-9.59h-6.4v-6.39h6.4v6.39zm0-9.59h-6.4v-6.39h6.4v6.39zm0-9.58h-6.4v-6.4h6.4v6.4zm3.14 3.19h6.39v6.39h-6.39v-6.39zm0 16v-6.41h6.39v6.39l-6.39.02z"
                      fill="#000"
                    ></path>
                  </svg>
                  <router-link>
                    Vault
                  </router-link>
                </ul>
                <ul class="flex font-semibold items-center my-2">
                  <svg
                    width="144"
                    height="144"
                    viewBox="0 0 144 144"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M44.83 125.83v-8.27h17.18v-5.11h-8.33v-8.32h39.33L74.74 72.49l18.27-31.65H52.7v43.89H31V19.15h74.67l12.46 21.58L99.8 72.49l18.7 32.4-12.09 20.94H44.83z"
                      fill="#F24C53"
                    ></path>
                    <path
                      d="M48.17 104.131h-8.32v8.32h8.32v-8.32zM39.32 117.5H31v8.32h8.32v-8.32z"
                      fill="#F24C53"
                    ></path>
                  </svg>
                  <router-link>
                    Boundary
                  </router-link>
                  <span
                    class="py-1 px-2 bg-gray-800 text-xs tracking-widest rounded-sm text-white uppercase ml-1"
                    >new</span
                  >
                </ul>
              </ul>
            </div>
          </div>
          <div class="flex justify-between">
            <div class="w-1/2">
              <ul>
                <h4
                  class="uppercase mb-2 font-bold tracking-widest text-gray-800"
                >
                  networking
                </h4>
                <ul class="flex items-center font-semibold my-2">
                  <svg
                    width="144"
                    height="144"
                    viewBox="0 0 144 144"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M72.53 128.7a54.787 54.787 0 01-45.258-23.85 54.784 54.784 0 019.368-72.355 54.78 54.78 0 0172.95 1.125l-13 13.6a36 36 0 100 53.43l13 13.6a54.638 54.638 0 01-37.06 14.45zm44.081-27.401a4.49 4.49 0 114.49-4.49 4.5 4.5 0 01-4.49 4.49z"
                      fill="#E03875"
                    ></path>
                    <path
                      d="M72.18 85.79A11.87 11.87 0 1184 73.93a11.88 11.88 0 01-11.82 11.86zm49.58.21a4.488 4.488 0 01-4.404-5.366 4.488 4.488 0 016.122-3.273 4.495 4.495 0 012.772 4.148 4.503 4.503 0 01-4.49 4.49zm-13.35-.56a4.488 4.488 0 01-4.4-5.385 4.487 4.487 0 013.555-3.515 4.49 4.49 0 11.845 8.9zm13.35-14.57a4.488 4.488 0 01-4.404-5.366 4.488 4.488 0 016.122-3.273 4.496 4.496 0 012.772 4.149 4.503 4.503 0 01-4.49 4.49zm-13.35.51a4.493 4.493 0 01-4.148-2.772 4.491 4.491 0 114.148 2.771zm8.461-15.61a4.49 4.49 0 11-.02-8.981 4.49 4.49 0 01.02 8.981z"
                      fill="#E03875"
                    ></path>
                  </svg>
                  <router-link>
                    Consul
                  </router-link>
                </ul>
              </ul>
            </div>
            <div class="w-1/2">
              <ul>
                <h4 class="uppercase font-bold tracking-widest text-gray-800">
                  applications
                </h4>
                <ul class="flex font-semibold items-center my-2">
                  <svg
                    width="144"
                    height="144"
                    viewBox="0 0 144 144"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M72 14L21.77 43v58L72 130l50.23-29V43L72 14zm22.38 63.78L81 85.51l-16.17-8.8v18.48l-15.2 9.64V66.19l12.06-7.38 16.73 8.82V48.76l16-9.59-.04 38.61z"
                      fill="#00CA8E"
                    ></path>
                  </svg>
                  <router-link>
                    Nomad
                  </router-link>
                </ul>
                <ul class="flex font-semibold items-center my-2">
                  <svg
                    width="144"
                    height="144"
                    viewBox="0 0 144 144"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M143.228 27.66l-17.79 30.81-17.79-30.81h35.58zM48.26 48.23H36.39l29.67 51.4-11.87 20.56L.77 27.66h59.36l29.68 51.41 5.93-10.28L72 27.66h23.74l11.88 20.57 11.87 20.56-29.68 51.4-41.55-71.96z"
                      fill="#14C6CB"
                    ></path>
                  </svg>
                  <router-link>
                    Waypoint
                  </router-link>
                  <span
                    class="py-1 px-2 bg-gray-800 text-xs tracking-widest rounded-sm text-white uppercase ml-1"
                    >new</span
                  >
                </ul>
              </ul>
            </div>
          </div>
        </div>
        <div class="w-8/12 border-l border-gray-300">
          <div class="ml-16">
            <div class="flex justify-between">
              <div class="w-2/3">
                <h4
                  class="uppercase tracking-widest font-bold text-gray-800 mb-2"
                >
                  hashicorp cloud platform
                </h4>
                <p
                  class="my-2 text-gray-500 tracking-wider"
                  style="font-weight:600"
                >
                  A fully managed platform to automate infrastructure<br />
                  on any cloud with Hashicorp products.
                </p>
                <div class="my-8">
                  <ul class="flex items-center font-semibold my-2">
                    <svg
                      width="144"
                      height="144"
                      viewBox="0 0 144 144"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        fill-rule="evenodd"
                        clip-rule="evenodd"
                        d="M55.522 32.97l32.96 19.02v38.06l-32.96-19.03V32.97zM92.09 51.99v38.06l32.95-19.03V32.97L92.09 51.99zM18.96 11.73v38.05l32.95 19.03V30.76L18.96 11.73zm36.562 101.51l32.95 19.03V94.22l-32.95-19.03v38.05z"
                        fill="#7B42BC"
                      ></path>
                    </svg>
                    <router-link>
                      Terraform Cloud
                    </router-link>
                  </ul>
                  <ul class="flex font-semibold items-center my-2">
                    <svg
                      width="144"
                      height="144"
                      viewBox="0 0 144 144"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M16.88 21.15L71.8 131.4l55.321-110.25H16.881zm61.46 22.12h6.39v6.4h-6.39v-6.4zM65.61 68.84h-6.39v-6.39h6.39v6.39zm0-9.59h-6.39v-6.39h6.39v6.39zm0-9.58h-6.39v-6.4h6.39v6.4zm9.59 28.76h-6.4V72h6.4v6.43zm0-9.59h-6.4v-6.39h6.4v6.39zm0-9.59h-6.4v-6.39h6.4v6.39zm0-9.58h-6.4v-6.4h6.4v6.4zm3.14 3.19h6.39v6.39h-6.39v-6.39zm0 16v-6.41h6.39v6.39l-6.39.02z"
                        fill="#000"
                      ></path>
                    </svg>
                    <router-link>
                      Vault
                    </router-link>
                  </ul>
                  <ul class="flex items-center font-semibold my-2">
                    <svg
                      width="144"
                      height="144"
                      viewBox="0 0 144 144"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M72.53 128.7a54.787 54.787 0 01-45.258-23.85 54.784 54.784 0 019.368-72.355 54.78 54.78 0 0172.95 1.125l-13 13.6a36 36 0 100 53.43l13 13.6a54.638 54.638 0 01-37.06 14.45zm44.081-27.401a4.49 4.49 0 114.49-4.49 4.5 4.5 0 01-4.49 4.49z"
                        fill="#E03875"
                      ></path>
                      <path
                        d="M72.18 85.79A11.87 11.87 0 1184 73.93a11.88 11.88 0 01-11.82 11.86zm49.58.21a4.488 4.488 0 01-4.404-5.366 4.488 4.488 0 016.122-3.273 4.495 4.495 0 012.772 4.148 4.503 4.503 0 01-4.49 4.49zm-13.35-.56a4.488 4.488 0 01-4.4-5.385 4.487 4.487 0 013.555-3.515 4.49 4.49 0 11.845 8.9zm13.35-14.57a4.488 4.488 0 01-4.404-5.366 4.488 4.488 0 016.122-3.273 4.496 4.496 0 012.772 4.149 4.503 4.503 0 01-4.49 4.49zm-13.35.51a4.493 4.493 0 01-4.148-2.772 4.491 4.491 0 114.148 2.771zm8.461-15.61a4.49 4.49 0 11-.02-8.981 4.49 4.49 0 01.02 8.981z"
                        fill="#E03875"
                      ></path>
                    </svg>
                    <router-link>
                      Consul
                    </router-link>
                  </ul>
                </div>
                <div class="my-2 font-semibold">
                  <router-link to="/">
                    Visit cloud.hashicorp.com
                  </router-link>
                  <i class="fas fa-arrow-right size"></i>
                </div>
              </div>
              <div class="w-5/12">
                <img
                  src="https://www.datocms-assets.com/2885/1620155314-blog-library-product-consul-azure-logomarks.jpg"
                  alt=""
                />
                <div class="px-10 pb-10 bg-light-bg">
                  <h4
                    style="font-size:17px"
                    class="font-bold mb-12 leading-8 text-gray-800 tracking-wide"
                  >
                    Deploy Hashicorp Consul Service on Azure
                  </h4>
                  <router-link to="/">
                    Get started
                  </router-link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import Dropdown from "./Navbar/Dropdown";
export default {
  data() {
    return {
      products: false,
      solutions: false,
      partners: false,
      company: false,
      events: false,
      resources: false,
      success: false,
    };
  },
  components: {
    Dropdown,
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
</style>
