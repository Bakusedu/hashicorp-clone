<template>
  <div class="nav-height text-primary text-sm">
    <div class="max-width">
      <div class="hidden xl:block">
        <div class="pt-6 flex justify-between" style="min-height:inherit">
          <div class="w-4/12">
            <div class="flex justify-between mb-8 h-full">
              <div class="w-1/2 flex flex-col justify-between">
                <ul>
                  <h4
                    class="uppercase font-bold text-xs text-black tracking-widest mb-6"
                  >
                    company
                  </h4>
                  <ul class="flex items-center font-semibold my-2">
                    <router-link class="capitalize" :to="'/'">
                      about us
                    </router-link>
                  </ul>
                  <ul class="flex items-center font-semibold my-2">
                    <router-link class="capitalize" :to="'/'">
                      jobs
                    </router-link>
                  </ul>
                  <ul class="flex items-center font-semibold my-2">
                    <router-link class="capitalize" :to="'/'">
                      our priciples
                    </router-link>
                  </ul>
                  <ul class="flex items-center font-semibold my-2">
                    <router-link class="capitalize" :to="'/'">
                      tao of hashicorp
                    </router-link>
                  </ul>
                  <ul class="flex items-center font-semibold my-2">
                    <router-link class="capitalize" :to="'/'">
                      blog
                    </router-link>
                  </ul>
                  <ul class="flex items-center font-semibold my-2">
                    <router-link class="capitalize" :to="'/'">
                      press
                    </router-link>
                  </ul>
                  <ul class="flex items-center font-semibold my-2">
                    <router-link class="capitalize" :to="'/'">
                      contact us
                    </router-link>
                  </ul>
                </ul>
                <ul class="flex font-semibold items-center group">
                  <router-link :to="'/'">
                    We're hiring
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
                </ul>
              </div>
              <div class="w-1/2">
                <ul>
                  <h4
                    class="uppercase font-bold text-xs text-black tracking-widest mb-6"
                  >
                    events
                  </h4>
                  <ul class="flex font-semibold items-center my-2">
                    <router-link :to="'/'">
                      HashiConf
                    </router-link>
                  </ul>
                  <ul class="flex font-semibold items-center my-2">
                    <router-link class="capitalize" :to="'/'">
                      webinars
                    </router-link>
                  </ul>
                  <ul class="flex font-semibold items-center my-2">
                    <router-link class="capitalize" :to="'/'">
                      workshops
                    </router-link>
                  </ul>
                  <ul class="flex font-semibold items-center my-2">
                    <router-link class="capitalize" :to="'/'">
                      view all events
                    </router-link>
                  </ul>
                </ul>
              </div>
            </div>
          </div>
          <div class="w-1/2">
            <div class="flex justify-between h-full">
              <div class="w-space-between group">
                <router-link :to="'/'">
                  <img
                    src="https://www.datocms-assets.com/2885/1574101490-hashicorp-hiring-2x.png"
                    alt=""
                    class="h-40 w-full object-cover object-center"
                  />
                  <div
                    class="px-8 py-5 card-height bg-light-bg flex flex-col justify-between"
                  >
                    <h4 class="font-bold text-base leading-6 tracking-wide">
                      Join us to build industry-leading open source tools and
                      enterprise products
                    </h4>
                    <span
                      class="group-hover:underline text-link-underline font-semibold"
                    >
                      View all open positions
                    </span>
                  </div>
                </router-link>
              </div>
              <div class="w-space-between group" style="min-height:343px">
                <router-link :to="'/'">
                  <img
                    src="https://www.datocms-assets.com/2885/1574812910-swag-promo.jpg"
                    alt=""
                    class="h-40 w-full object-cover object-center"
                  />
                  <div
                    class="px-8 py-5 card-height bg-light-bg flex flex-col justify-between"
                  >
                    <h4
                      class="font-bold text-base mb-12 leading-6 tracking-wide"
                    >
                      Anouncing the HashiCorp store
                    </h4>
                    <span
                      class="group-hover:underline text-link-underline font-semibold"
                    >
                      Visit the store
                    </span>
                  </div>
                </router-link>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div class="block xl:hidden">
        <div class="mt-10 px-8 flex flex-col" style="min-height:inherit">
          <div class="w-full">
            <ul class="mb-8">
              <h4
                class="uppercase font-bold text-gray-800 tracking-widest mb-6"
              >
                company
              </h4>
              <ul class="flex items-center font-semibold my-2">
                <router-link class="capitalize" :to="'/'">
                  about us
                </router-link>
              </ul>
              <ul class="flex items-center font-semibold my-2">
                <router-link class="capitalize" :to="'/'">
                  jobs
                </router-link>
              </ul>
              <ul class="flex items-center font-semibold my-2">
                <router-link class="capitalize" :to="'/'">
                  our priciples
                </router-link>
              </ul>
              <ul class="flex items-center font-semibold my-2">
                <router-link class="capitalize" :to="'/'">
                  tao of hashicorp
                </router-link>
              </ul>
              <ul class="flex items-center font-semibold my-2">
                <router-link class="capitalize" :to="'/'">
                  blog
                </router-link>
              </ul>
              <ul class="flex items-center font-semibold my-2">
                <router-link class="capitalize" :to="'/'">
                  press
                </router-link>
              </ul>
              <ul class="flex items-center font-semibold my-2">
                <router-link class="capitalize" :to="'/'">
                  contact us
                </router-link>
              </ul>
            </ul>
            <ul>
              <h4
                class="uppercase font-bold tracking-widest text-gray-800 mb-6"
              >
                events
              </h4>
              <ul class="flex font-semibold uppercase items-center my-2">
                <router-link :to="'/'">
                  hashi conf
                </router-link>
              </ul>
              <ul class="flex font-semibold items-center my-2">
                <router-link class="capitalize" :to="'/'">
                  webinars
                </router-link>
              </ul>
              <ul class="flex font-semibold items-center my-2">
                <router-link class="capitalize" :to="'/'">
                  workshops
                </router-link>
              </ul>
              <ul class="flex font-semibold items-center my-2">
                <router-link class="capitalize" :to="'/'">
                  view all events
                </router-link>
              </ul>
            </ul>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {};
</script>

<style></style>
