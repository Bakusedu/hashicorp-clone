<template>
  <div class="nav-height text-primary text-sm">
    <div class="max-width">
      <div class="hidden xl:block">
        <div class="mx-8 pt-6 pb-8 flex" style="min-height:inherit">
          <div class="w-4/12">
            <div class="flex justify-between mb-8">
              <div class="w-1/2">
                <ul>
                  <h4
                    class="uppercase font-bold text-gray-800 tracking-widest mb-6"
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
                    <router-link :to="'/'">
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
                    <router-link :to="'/'">
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
                    <router-link :to="'/'">
                      Vagrant
                    </router-link>
                  </ul>
                </ul>
              </div>
              <div class="w-1/2">
                <ul>
                  <h4
                    class="uppercase font-bold tracking-widest text-gray-800 mb-6"
                  >
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
                    <router-link :to="'/'">
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
                    <router-link :to="'/'">
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
                    class="uppercase mb-6 font-bold tracking-widest text-gray-800"
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
                    <router-link :to="'/'">
                      Consul
                    </router-link>
                  </ul>
                </ul>
              </div>
              <div class="w-1/2">
                <ul>
                  <h4
                    class="uppercase mb-6 font-bold tracking-widest text-gray-800"
                  >
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
                    <router-link :to="'/'">
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
                    <router-link :to="'/'">
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
          <div id="column-divider"></div>
          <div class="w-8/12" style="height:inherit">
            <div class="ml-16 h-full">
              <div class="flex justify-between h-full">
                <div class="w-2/3">
                  <h4
                    class="uppercase mb-6 tracking-widest font-bold text-gray-800"
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
                      <router-link :to="'/'">
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
                      <router-link :to="'/'">
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
                      <router-link :to="'/'">
                        Consul
                      </router-link>
                    </ul>
                  </div>
                  <div class="my-2 flex items-center font-semibold group">
                    <router-link :to="'/'">
                      Visit cloud.hashicorp.com
                    </router-link>
                    <svg
                      style="height:12px"
                      class="ml-1 transition-all transform group-hover:translate-x-1"
                      width="14"
                      height="12"
                      viewBox="0 0 14 12"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M13.675 5.7C13.6 5.625 13.6 5.55 13.525 5.475L9.025 0.975C8.725 0.675 8.275 0.675 7.975 0.975C7.675 1.275 7.675 1.725 7.975 2.025L11.2 5.25H1C0.55 5.25 0.25 5.55 0.25 6C0.25 6.45 0.55 6.75 1 6.75H11.2L7.975 9.975C7.675 10.275 7.675 10.725 7.975 11.025C8.125 11.175 8.35 11.25 8.5 11.25C8.65 11.25 8.875 11.175 9.025 11.025L13.525 6.525C13.6 6.45 13.675 6.375 13.675 6.3C13.75 6.075 13.75 5.925 13.675 5.7Z"
                        fill="var(--gray-1,#1d1e1f)"
                      ></path>
                    </svg>
                  </div>
                </div>
                <div class="w-5/12">
                  <img
                    src="https://www.datocms-assets.com/2885/1620155314-blog-library-product-consul-azure-logomarks.jpg"
                    alt=""
                    class="h-40 w-full"
                  />
                  <div
                    class="px-10 py-6 card-height bg-light-bg flex flex-col justify-between"
                  >
                    <h4
                      class="font-bold text-base mb-12 leading-6 text-gray-800 tracking-wide"
                    >
                      Deploy Hashicorp Consul Service on Azure
                    </h4>
                    <router-link :to="'/'">
                      Get started
                    </router-link>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div class="block font-semibold xl:hidden">
        <div class="mt-10 px-8 flex flex-col" style="min-height:inherit">
          <div class="w-full">
            <div class="mb-8">
              <div class="w-full mb-8">
                <ul>
                  <h4
                    class="uppercase font-bold text-gray-800 tracking-widest mb-6"
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
                    <router-link :to="'/'">
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
                    <router-link :to="'/'">
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
                    <router-link :to="'/'">
                      Vagrant
                    </router-link>
                  </ul>
                </ul>
              </div>
              <div class="w-full">
                <ul>
                  <h4
                    class="uppercase font-bold tracking-widest text-gray-800 mb-6"
                  >
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
                    <router-link :to="'/'">
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
                    <router-link :to="'/'">
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
            <div class="w-full mb-8">
              <ul>
                <h4
                  class="uppercase mb-6 font-bold tracking-widest text-gray-800"
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
                  <router-link :to="'/'">
                    Consul
                  </router-link>
                </ul>
              </ul>
            </div>
            <div class="w-full mb-8">
              <ul>
                <h4
                  class="uppercase mb-6 font-bold tracking-widest text-gray-800"
                >
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
                  <router-link :to="'/'">
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
                  <router-link :to="'/'">
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
          <div class="w-full" style="height:inherit">
            <div class="flex justify-between h-full">
              <div class="w-full">
                <h4
                  class="uppercase mb-6 tracking-widest font-bold text-gray-800"
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
                    <router-link :to="'/'">
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
                    <router-link :to="'/'">
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
                    <router-link :to="'/'">
                      Consul
                    </router-link>
                  </ul>
                </div>
                <div class="hidden">
                  <router-link :to="'/'">
                    Visit cloud.hashicorp.com
                  </router-link>
                  <svg
                    style="height:12px"
                    class="ml-1 transition-all transform group-hover:translate-x-1"
                    width="14"
                    height="12"
                    viewBox="0 0 14 12"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M13.675 5.7C13.6 5.625 13.6 5.55 13.525 5.475L9.025 0.975C8.725 0.675 8.275 0.675 7.975 0.975C7.675 1.275 7.675 1.725 7.975 2.025L11.2 5.25H1C0.55 5.25 0.25 5.55 0.25 6C0.25 6.45 0.55 6.75 1 6.75H11.2L7.975 9.975C7.675 10.275 7.675 10.725 7.975 11.025C8.125 11.175 8.35 11.25 8.5 11.25C8.65 11.25 8.875 11.175 9.025 11.025L13.525 6.525C13.6 6.45 13.675 6.375 13.675 6.3C13.75 6.075 13.75 5.925 13.675 5.7Z"
                      fill="var(--gray-1,#1d1e1f)"
                    ></path>
                  </svg>
                </div>
              </div>
              <div class="hidden">
                <img
                  src="https://www.datocms-assets.com/2885/1620155314-blog-library-product-consul-azure-logomarks.jpg"
                  alt=""
                  class="h-40 w-full"
                />
                <div
                  class="px-10 py-6 card-height bg-light-bg flex flex-col justify-between"
                >
                  <h4
                    class="font-bold text-base mb-12 leading-6 text-gray-800 tracking-wide"
                  >
                    Deploy Hashicorp Consul Service on Azure
                  </h4>
                  <router-link :to="'/'">
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
export default {};
</script>

<style scoped>
#column-divider {
  border-left: 1px solid lightgray;
  height: 280px;
}
svg {
  height: 20px;
  margin-right: 1rem;
  width: unset;
}
</style>
