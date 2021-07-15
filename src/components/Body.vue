<template>
  <div class="text-sm">
    <div class="bg-black">
      <div class="max-width text-white" style="position:relative">
        <!-- desktop carousel -->
        <div id="desktop-carousel">
          <Carousel
            :items="1"
            :nav="false"
            :dots="true"
            :infinityLoop="true"
            :margin="0"
            :autoplay="true"
            :autoPlayTimeOut="6000"
            :slideTransition="`linear`"
            :pullDrag="false"
            :touchDrag="false"
            :mouseDrag="false"
            :animateOut="'fadeOut'"
            :animateIn="'fadeIn'"
            @changed="animateContent"
          >
            <div
              class="carousel-1-div py-32 px-8"
              style="background:url('https://www.datocms-assets.com/2885/1611862831-pandora-slide.jpg')"
            >
              <section
                :class="
                  currentSlide == 0
                    ? 'transition-opacity delay-700 opacity-1'
                    : 'transition-opacity delay-700 opacity-0'
                "
              >
                <h4
                  class="capitalize p-2 text-sm font-semibold border border-primary inline-block"
                >
                  <span class="text-deep-blue tracking-wide">//</span>
                  infrastructure enables innovation
                </h4>
                <h2 class="text-4xl font-bold my-6">
                  At the speed of sound
                </h2>
                <div class="mb-4 flex items-center">
                  <svg
                    class="mr-4"
                    width="34"
                    height="34"
                    viewBox="0 0 34 34"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      fill-rule="evenodd"
                      clip-rule="evenodd"
                      d="M19.551 0v14.632h-5.293V9.17l-4.981 2.876v18.746l4.981 2.883v-14.59h5.293v5.425l4.981-2.876V2.876L19.551 0zm-5.293 0L1 7.649V26.02l4.981 2.876V10.524l8.277-4.778V0zM32.81 26.032L19.551 33.68v-5.746l8.277-4.779V4.785L32.81 7.66v18.372z"
                      fill="#fff"
                    ></path>
                  </svg>
                  <div class="border-l border-primary">
                    <img
                      src="https://www.datocms-assets.com/2885/1612205094-pandora-homepage-logo.svg"
                      class="ml-4"
                      alt=""
                    />
                  </div>
                </div>
                <div class="my-8 text-gray-300" style="max-width:490px">
                  <p class="m-0 leading-7">
                    Global leader in streaming music discovery strikes the right
                    chord using HashiCorp to accelerate application delivery
                    from days to minutes.
                  </p>
                </div>
                <div class="flex items-center font-semibold">
                  <router-link
                    :to="'/'"
                    class="tracking-wide cursor-pointer mr-12 bg-primary-blue p-4 capitalize inline-block"
                  >
                    read customer story
                  </router-link>
                  <ul class="flex items-center group">
                    <router-link :to="'/'" class="capitalize">
                      request demo
                    </router-link>
                    <svg
                      class="ml-1 transition-all transform group-hover:translate-x-1"
                      role="img"
                      width="24"
                      height="24"
                      viewBox="0 0 24 24"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M20 12L14 18M4 12H20H4ZM20 12L14 6L20 12Z"
                        stroke="white"
                        stroke-width="1.5"
                        stroke-linecap="round"
                        stroke-linejoin="round"
                      ></path>
                    </svg>
                  </ul>
                </div>
              </section>
              <div class="gradient"></div>
            </div>
            <div
              class="carousel-1-div py-32 px-8"
              style="background:url('https://www.datocms-assets.com/2885/1611862868-roblox-slide.jpg')"
            >
              <section
                :class="
                  currentSlide == 1
                    ? 'transition-opacity delay-700 opacity-1'
                    : 'transition-opacity  delay-700 opacity-0'
                "
              >
                <h4
                  class="capitalize p-2 text-sm font-semibold border border-primary inline-block"
                >
                  <span class="text-deep-blue tracking-wide">//</span>
                  infrastructure enables innovation
                </h4>
                <h2 class="text-4xl font-bold my-6">
                  The 100-million player platform
                </h2>
                <div class="mb-4 flex items-center">
                  <svg
                    class="mr-4"
                    width="34"
                    height="34"
                    viewBox="0 0 34 34"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      fill-rule="evenodd"
                      clip-rule="evenodd"
                      d="M19.551 0v14.632h-5.293V9.17l-4.981 2.876v18.746l4.981 2.883v-14.59h5.293v5.425l4.981-2.876V2.876L19.551 0zm-5.293 0L1 7.649V26.02l4.981 2.876V10.524l8.277-4.778V0zM32.81 26.032L19.551 33.68v-5.746l8.277-4.779V4.785L32.81 7.66v18.372z"
                      fill="#fff"
                    ></path>
                  </svg>
                  <div class="border-l border-primary">
                    <img
                      src="https://www.datocms-assets.com/2885/1612205007-roblox-homepage-logo.svg"
                      class="ml-4"
                      alt=""
                    />
                  </div>
                </div>
                <div class="my-8 text-gray-300" style="max-width:490px">
                  <p class="m-0 leading-7">
                    As Roblox grows and evolves rapidly, HashiCorp Nomad enables
                    them to scale their global gaming platform easily and
                    reliably
                  </p>
                </div>
                <div class="flex items-center font-semibold">
                  <router-link
                    :to="'/'"
                    class="tracking-wide cursor-pointer mr-12 bg-primary-blue p-4 capitalize inline-block"
                  >
                    read customer story
                  </router-link>
                  <ul class="flex items-center group">
                    <router-link :to="'/'" class="capitalize">
                      request demo
                    </router-link>
                    <svg
                      class="ml-1 transition-all transform group-hover:translate-x-1"
                      role="img"
                      width="24"
                      height="24"
                      viewBox="0 0 24 24"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M20 12L14 18M4 12H20H4ZM20 12L14 6L20 12Z"
                        stroke="white"
                        stroke-width="1.5"
                        stroke-linecap="round"
                        stroke-linejoin="round"
                      ></path>
                    </svg>
                  </ul>
                </div>
              </section>
              <div class="gradient"></div>
            </div>
            <div
              class="carousel-1-div py-32 px-8"
              style="background:url('https://www.datocms-assets.com/2885/1611862892-mercedes-slide.jpg')"
            >
              <section
                :class="
                  currentSlide == 2
                    ? 'transition-opacity delay-700 opacity-1'
                    : 'transition-opacity delay-700 opacity-0'
                "
              >
                <h4
                  class="capitalize p-2 text-sm font-semibold border border-primary inline-block"
                >
                  <span class="text-deep-blue tracking-wide">//</span>
                  infrastructure enables innovation
                </h4>
                <h2 class="text-4xl font-bold my-6">
                  On the road again
                </h2>
                <div class="mb-4 flex items-center">
                  <svg
                    class="mr-4"
                    width="34"
                    height="34"
                    viewBox="0 0 34 34"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      fill-rule="evenodd"
                      clip-rule="evenodd"
                      d="M19.551 0v14.632h-5.293V9.17l-4.981 2.876v18.746l4.981 2.883v-14.59h5.293v5.425l4.981-2.876V2.876L19.551 0zm-5.293 0L1 7.649V26.02l4.981 2.876V10.524l8.277-4.778V0zM32.81 26.032L19.551 33.68v-5.746l8.277-4.779V4.785L32.81 7.66v18.372z"
                      fill="#fff"
                    ></path>
                  </svg>
                  <div class="border-l border-primary">
                    <img
                      src="https://www.datocms-assets.com/2885/1612205115-mercedes-homepage-logo.svg"
                      class="ml-4"
                      alt=""
                    />
                  </div>
                </div>
                <div class="my-8 text-gray-300" style="max-width:490px">
                  <p class="m-0 leading-7">
                    Cars, Kubernetes, and HashiCorp Consul. How Mercedes-Benz
                    delivers on service networking to accelerate delivery of its
                    next-gen connected vehicles.
                  </p>
                </div>
                <div class="flex items-center font-semibold">
                  <router-link
                    :to="'/'"
                    class="tracking-wide cursor-pointer mr-12 bg-primary-blue p-4 capitalize inline-block"
                  >
                    read customer story
                  </router-link>
                  <ul class="flex items-center group">
                    <router-link :to="'/'" class="capitalize">
                      request demo
                    </router-link>
                    <svg
                      class="ml-1 transition-all transform group-hover:translate-x-1"
                      role="img"
                      width="24"
                      height="24"
                      viewBox="0 0 24 24"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M20 12L14 18M4 12H20H4ZM20 12L14 6L20 12Z"
                        stroke="white"
                        stroke-width="1.5"
                        stroke-linecap="round"
                        stroke-linejoin="round"
                      ></path>
                    </svg>
                  </ul>
                </div>
              </section>
              <div class="gradient"></div>
            </div>
          </Carousel>
        </div>
        <!-- mobile -->
        <div id="mobile-carousel">
          <Carousel
            v-show="screenWidth <= 768"
            :items="1"
            :nav="false"
            :dots="true"
            :infinityLoop="true"
            :margin="0"
            :autoplay="true"
            :pullDrag="false"
            :touchDrag="false"
            :mouseDrag="false"
            :autoPlayTimeOut="6000"
            :slideTransition="`linear`"
            :animateOut="'fadeOut'"
            :animateIn="'fadeIn'"
            @changed="animateContentMobile"
          >
            <div class="hero-mobile px-4 py-14">
              <section
                :class="
                  currentSlideMobile == 0
                    ? 'transition-opacity delay-700 opacity-1'
                    : 'transition-opacity delay-700 opacity-0'
                "
              >
                <h4
                  class="capitalize p-2 text-sm font-semibold border border-primary inline-block"
                >
                  <span class="text-deep-blue tracking-wider">//</span>
                  infrastructure enables innovation
                </h4>
                <h2 class="text-2xl xl:text-5xl font-bold my-6 xl:my-6">
                  At the speed of sound
                </h2>
                <div class="my-4 flex items-center">
                  <svg
                    class="mr-4"
                    width="34"
                    height="34"
                    viewBox="0 0 34 34"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      fill-rule="evenodd"
                      clip-rule="evenodd"
                      d="M19.551 0v14.632h-5.293V9.17l-4.981 2.876v18.746l4.981 2.883v-14.59h5.293v5.425l4.981-2.876V2.876L19.551 0zm-5.293 0L1 7.649V26.02l4.981 2.876V10.524l8.277-4.778V0zM32.81 26.032L19.551 33.68v-5.746l8.277-4.779V4.785L32.81 7.66v18.372z"
                      fill="#fff"
                    ></path>
                  </svg>
                  <div class="border-l border-primary">
                    <img
                      src="https://www.datocms-assets.com/2885/1612205094-pandora-homepage-logo.svg"
                      class="ml-3"
                      alt=""
                    />
                  </div>
                </div>
                <div class="my-4 text-gray-300" style="max-width:490px">
                  <p class="m-0 text-sm">
                    Global leader in streaming music discovery strikes the right
                    chord using HashiCorp to accelerate application delivery
                    from days to minutes.
                  </p>
                </div>
                <div class="xl:flex items-center font-semibold">
                  <router-link
                    :to="'/'"
                    class="my-4 xl:my-0 cursor-pointer xl:mr-12 bg-primary-blue p-4 capitalize inline-block"
                  >
                    read customer story
                  </router-link>
                  <ul class="flex my-4 items-center group">
                    <router-link :to="'/'" class="capitalize">
                      request demo
                    </router-link>
                    <svg
                      class="ml-1 transition-all transform group-hover:translate-x-1"
                      role="img"
                      width="24"
                      height="24"
                      viewBox="0 0 24 24"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M20 12L14 18M4 12H20H4ZM20 12L14 6L20 12Z"
                        stroke="white"
                        stroke-width="1.5"
                        stroke-linecap="round"
                        stroke-linejoin="round"
                      ></path>
                    </svg>
                  </ul>
                </div>
              </section>
              <img
                src="https://www.datocms-assets.com/2885/1611862831-pandora-slide.jpg"
                class="carousel-img"
                alt=""
              />
              <!-- <div class="gradient"></div> -->
            </div>
            <div class="hero-mobile px-4 py-14">
              <section
                :class="
                  currentSlideMobile == 1
                    ? 'transition-opacity delay-700 opacity-1'
                    : 'transition-opacity delay-700 opacity-0'
                "
              >
                <h4
                  class="capitalize p-2 text-sm font-semibold border border-primary inline-block"
                >
                  <span class="text-deep-blue tracking-wider">//</span>
                  infrastructure enables innovation
                </h4>
                <h2 class="text-2xl xl:text-5xl font-bold my-6 xl:my-6">
                  The 100-million player platform
                </h2>
                <div class="my-4 flex items-center">
                  <svg
                    class="mr-4"
                    width="34"
                    height="34"
                    viewBox="0 0 34 34"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      fill-rule="evenodd"
                      clip-rule="evenodd"
                      d="M19.551 0v14.632h-5.293V9.17l-4.981 2.876v18.746l4.981 2.883v-14.59h5.293v5.425l4.981-2.876V2.876L19.551 0zm-5.293 0L1 7.649V26.02l4.981 2.876V10.524l8.277-4.778V0zM32.81 26.032L19.551 33.68v-5.746l8.277-4.779V4.785L32.81 7.66v18.372z"
                      fill="#fff"
                    ></path>
                  </svg>
                  <div class="border-l border-primary">
                    <img
                      src="https://www.datocms-assets.com/2885/1612205007-roblox-homepage-logo.svg"
                      class="ml-3"
                      alt=""
                    />
                  </div>
                </div>
                <div class="my-4 text-gray-300 text-sm" style="max-width:490px">
                  <p class="m-0 text-sm">
                    As Roblox grows and evolves rapidly, HashiCorp Nomad enables
                    them to scale their global gaming platform easily and
                    reliably.
                  </p>
                </div>
                <div class="xl:flex items-center font-semibold">
                  <router-link
                    :to="'/'"
                    class="my-4 xl:my-0 cursor-pointer xl:mr-12 bg-primary-blue p-4 capitalize inline-block"
                  >
                    read customer story
                  </router-link>
                  <ul class="flex my-4 items-center group">
                    <router-link :to="'/'" class="capitalize">
                      request demo
                    </router-link>
                    <svg
                      class="ml-1 transition-all transform group-hover:translate-x-1"
                      role="img"
                      width="24"
                      height="24"
                      viewBox="0 0 24 24"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M20 12L14 18M4 12H20H4ZM20 12L14 6L20 12Z"
                        stroke="white"
                        stroke-width="1.5"
                        stroke-linecap="round"
                        stroke-linejoin="round"
                      ></path>
                    </svg>
                  </ul>
                </div>
              </section>
              <img
                src="https://www.datocms-assets.com/2885/1611862868-roblox-slide.jpg"
                class="carousel-img"
                alt=""
              />
              <!-- <div class="gradient"></div> -->
            </div>
            <div class="hero-mobile px-4 py-14">
              <section
                :class="
                  currentSlideMobile == 2
                    ? 'transition-opacity delay-700 opacity-1'
                    : 'transition-opacity delay-700 opacity-0'
                "
              >
                <h4
                  class="capitalize p-2 text-sm font-semibold border border-primary inline-block"
                >
                  <span class="text-deep-blue tracking-wider">//</span>
                  infrastructure enables innovation
                </h4>
                <h2 class="text-2xl xl:text-5xl font-bold my-6 xl:my-6">
                  On the road again
                </h2>
                <div class="my-4 flex items-center">
                  <svg
                    class="mr-4"
                    width="34"
                    height="34"
                    viewBox="0 0 34 34"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      fill-rule="evenodd"
                      clip-rule="evenodd"
                      d="M19.551 0v14.632h-5.293V9.17l-4.981 2.876v18.746l4.981 2.883v-14.59h5.293v5.425l4.981-2.876V2.876L19.551 0zm-5.293 0L1 7.649V26.02l4.981 2.876V10.524l8.277-4.778V0zM32.81 26.032L19.551 33.68v-5.746l8.277-4.779V4.785L32.81 7.66v18.372z"
                      fill="#fff"
                    ></path>
                  </svg>
                  <div class="border-l border-primary">
                    <img
                      src="https://www.datocms-assets.com/2885/1612205115-mercedes-homepage-logo.svg"
                      class="ml-3"
                      alt=""
                    />
                  </div>
                </div>
                <div class="my-4 text-gray-300 text-sm" style="max-width:490px">
                  <p class="m-0 xl:leading-8">
                    Cars, Kubernetes, and HashiCorp Consul. How Mercedes-Benz
                    delivers on service networking to accelerate delivery of its
                    next-gen connected vehicles.
                  </p>
                </div>
                <div class="xl:flex items-center font-semibold">
                  <router-link
                    :to="'/'"
                    class="my-4 xl:my-0 cursor-pointer xl:mr-12 bg-primary-blue p-4 capitalize inline-block"
                  >
                    read customer story
                  </router-link>
                  <ul class="flex my-4 items-center group">
                    <router-link :to="'/'" class="capitalize">
                      request demo
                    </router-link>
                    <svg
                      class="ml-1 transition-all transform group-hover:translate-x-1"
                      role="img"
                      width="24"
                      height="24"
                      viewBox="0 0 24 24"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M20 12L14 18M4 12H20H4ZM20 12L14 6L20 12Z"
                        stroke="white"
                        stroke-width="1.5"
                        stroke-linecap="round"
                        stroke-linejoin="round"
                      ></path>
                    </svg>
                  </ul>
                </div>
              </section>
              <img
                src="https://www.datocms-assets.com/2885/1611862892-mercedes-slide.jpg"
                class="carousel-img"
                alt=""
              />
              <!-- <div class="gradient"></div> -->
            </div>
          </Carousel>
        </div>
        <!-- end mobile -->
      </div>
    </div>
    <div class="bg-light-bg">
      <div
        class="flex justify-center max-width xl:px-8"
        style="margin:0 auto;width:100%"
      >
        <div
          class="bg-white w-full flex flex-col xl:flex-row z-10 responsive-margin"
        >
          <router-link
            :to="'/'"
            id="cards"
            class=" xl:hover:bg-primary-blue group"
          >
            <span
              class="text-gray-400 text-sm xl:group-hover:text-blue-300 block uppercase"
              >july 12 | live workshop</span
            >
            <p
              class="my-2 text-black text-lg xl:group-hover:text-white tracking-wide font-bold"
            >
              Join us for a hands-on workshop covering Terraform Cloud on AWS
            </p>
            <span
              class="text-primary-blue font-semibold xl:group-hover:text-white inline-block capitalize"
            >
              register now
            </span>
          </router-link>
          <router-link
            :to="'/'"
            id="cards"
            class=" xl:hover:bg-primary-blue group"
          >
            <span
              class="text-gray-400 text-sm xl:group-hover:text-blue-300 block uppercase"
              >on-demand</span
            >
            <p
              class="my-2 text-black text-lg xl:group-hover:text-white tracking-wide font-bold"
            >
              HashiConf Europe is a wrap. Watch this year's sessions on-demand
            </p>
            <span
              class="text-primary-blue font-semibold xl:group-hover:text-white inline-block capitalize"
            >
              Watch now
            </span>
          </router-link>
          <router-link
            :to="'/'"
            id="cards"
            class="xl:hover:bg-primary-blue group"
          >
            <span
              class="text-gray-400 text-sm xl:group-hover:text-blue-300 block uppercase"
              >july 15 | live webinar</span
            >
            <p
              class="my-2 text-black text-lg xl:group-hover:text-white tracking-wide font-bold"
            >
              Join HashiCorp and Obsidian for Virtual Strategy Day South Africa
            </p>
            <span
              class="text-primary-blue font-semibold xl:group-hover:text-white inline-block capitalize"
            >
              register now
            </span>
          </router-link>
        </div>
      </div>
    </div>
    <div class="bg-light-bg">
      <div class="max-width py-24 bg-light-bg">
        <ul id="trusted_business">
          <li>
            <img
              src="https://www.hashicorp.com/img/home/company-logos/adobe-black.svg"
              class="h-8 w-8 object-contain object-center"
              alt=""
            />
          </li>
          <li>
            <img
              src="https://www.hashicorp.com/img/home/company-logos/barclays-black.svg"
              class="h-6"
              alt=""
            />
          </li>
          <li>
            <img
              src="https://www.hashicorp.com/img/home/company-logos/pandora-black.svg"
              class="h-6"
              alt=""
            />
          </li>
          <li>
            <img
              src="https://www.hashicorp.com/img/home/company-logos/hulu-black.svg"
              class="h-6"
              alt=""
            />
          </li>
          <li>
            <img
              src="https://www.hashicorp.com/img/home/company-logos/sap-ariba-black.svg"
              class="h-6"
              alt=""
            />
          </li>
          <li>
            <img
              src="https://www.hashicorp.com/img/home/company-logos/progressive-black.svg"
              class="h-4"
              alt=""
            />
          </li>
        </ul>
      </div>
    </div>
    <div class="text-center px-6 xl:px-0" style="max-width:784px;margin:0 auto">
      <div class="pt-24 pb-12">
        <h4 class="text-black font-bold text-center text-2xl xl:text-4xl">
          Unlocking the cloud operating<br class="hidden xl:block" />
          model for enterprises
        </h4>
        <p class="mt-6 mb-4 text-center text-subtext text-lg">
          Enabling the world's largest company to deliver applications faster by
          helping transition from manual processes and ITIL practices to
          self-service automation and Devops practices.
        </p>
        <div class="flex items-center font-semibold justify-center group">
          <router-link
            :to="'/'"
            class="capitalize hover:no-underline text-primary-blue"
          >
            learn more
          </router-link>
          <svg
            class="ml-1 transition-all transform group-hover:translate-x-1"
            width="18"
            height="18"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M3 9h12m-4.5-4.5L15 9l-4.5 4.5"
              stroke="var(--brand,#2e71e5)"
            ></path>
          </svg>
        </div>
      </div>
    </div>
    <div class="max-width px-6 xl:px-16 pb-24">
      <div class="grid gap-8 grid-cols-1 xl:grid-cols-2">
        <div class="p-6 md:p-11 xl:p-10 flex flex-col lg:flex-row bg-light-bg">
          <img
            src="https://www.hashicorp.com/img/icons/home-solution-terraform.svg"
            class="mb-4 mr-6 xl:mr-8 xl:h-20 xl:w-20 h-12 w-12 object-contain object-center"
            alt=""
          />
          <div>
            <h4 class="text-lg xl:text-2xl">
              <strong>Infrastructure</strong>&nbsp;automation
            </h4>
            <p class="my-4">
              Automate provisioning, compliance and management of cloud
              infrastructure using a common workflow.
            </p>
            <div class="flex items-center">
              <span class="capitalize font-semibold text-primary-blue">
                explore terraform
              </span>
              <svg
                class="ml-1 transition-all transform group-hover:translate-x-1"
                width="18"
                height="18"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M3 9h12m-4.5-4.5L15 9l-4.5 4.5"
                  stroke="var(--brand,#2e71e5)"
                ></path>
              </svg>
            </div>
          </div>
        </div>
        <div class="p-6 md:p-11 xl:p-10 flex flex-col lg:flex-row bg-light-bg">
          <img
            src="https://www.hashicorp.com/img/icons/home-solution-vault.svg"
            class="mb-4 mr-6 xl:mr-8 xl:h-20 xl:w-20 h-12 w-12  object-contain object-center"
            alt=""
          />
          <div>
            <h4 class="text-lg xl:text-2xl">
              <strong>Security</strong>&nbsp;automation
            </h4>
            <p class="my-4">
              Manage secrets and protect sensitive data based on user and
              workload identity.
            </p>
            <div class="flex items-center">
              <span class="capitalize font-semibold text-primary-blue">
                explore vault
              </span>
              <svg
                class="ml-1 transition-all transform group-hover:translate-x-1"
                width="18"
                height="18"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M3 9h12m-4.5-4.5L15 9l-4.5 4.5"
                  stroke="var(--brand,#2e71e5)"
                ></path>
              </svg>
            </div>
          </div>
        </div>
        <div class="p-6 md:p-11 xl:p-10 flex flex-col lg:flex-row bg-light-bg">
          <img
            src="https://www.hashicorp.com/img/icons/home-solution-consul.svg"
            class="mb-4 mr-6 xl:mr-8 xl:h-20 xl:w-20 h-12 w-12  object-contain object-center"
            alt=""
          />
          <div>
            <h4 class="text-lg xl:text-2xl">
              <strong>Network</strong>&nbsp;automation
            </h4>
            <p class="my-4">
              Accelerate application delivery by automating the network,
              including physical devices, virtual appliances, and distributed
              service mesh.
            </p>
            <div class="flex items-center">
              <span class="capitalize font-semibold text-primary-blue">
                explore consul
              </span>
              <svg
                class="ml-1 transition-all transform group-hover:translate-x-1"
                width="18"
                height="18"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M3 9h12m-4.5-4.5L15 9l-4.5 4.5"
                  stroke="var(--brand,#2e71e5)"
                ></path>
              </svg>
            </div>
          </div>
        </div>
        <div class="p-6 md:p-11 xl:p-10 flex flex-col lg:flex-row bg-light-bg">
          <img
            src="https://www.hashicorp.com/img/icons/home-solution-nomad.svg"
            class="mb-4 mr-6 xl:mr-8 xl:h-20 xl:w-20 h-12 w-12  object-contain object-center"
            alt=""
          />
          <div>
            <h4 class="text-lg xl:text-2xl">
              <strong>Application</strong>&nbsp;automation
            </h4>
            <p class="my-4">
              Deploy any application and iterate safely with progressive
              delivery, failover strategies, and integrated security and
              network.
            </p>
            <div class="flex items-center">
              <span class="capitalize font-semibold text-primary-blue">
                explore nomad
              </span>
              <svg
                class="ml-1 transition-all transform group-hover:translate-x-1"
                width="18"
                height="18"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M3 9h12m-4.5-4.5L15 9l-4.5 4.5"
                  stroke="var(--brand,#2e71e5)"
                ></path>
              </svg>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div class="bg-black">
      <div
        class="text-center px-6 xl:px-0"
        style="max-width:784px;margin:0 auto"
      >
        <div class="pt-24 pb-12">
          <h4
            class="text-white capitalize text-2xl xl:text-4xl  font-bold text-center"
          >
            our products
          </h4>
          <p class="mt-6 mb-4 xl:text-center text-white text-lg">
            Delivering cloud infrastructure automation for operations, security,
            networking, and application delivery.
          </p>
        </div>
      </div>
      <Container />
    </div>
    <div class="text-center px-6 xl:px-0" style="max-width:784px;margin:0 auto">
      <div class="pt-24 pb-12">
        <h4
          class="text-black capitalize text-3xl xl:text-4xl  font-bold text-center"
        >
          our partners
        </h4>
        <p class="mt-6 mb-2 xl:text-center text-subtext text-lg">
          HashiCorp partners with the world’s top technology and solutions
          vendors, making it easier for organizations to provision, secure,
          connect, and run their applications in any environment.
        </p>
      </div>
      <div class="flex items-center font-semibold justify-center group">
        <router-link
          :to="'/'"
          class=" hover:no-underline transition hover:bg-blue-600 text-white p-4 bg-primary-blue"
        >
          Find a partner
        </router-link>
      </div>
    </div>
    <div class="text-center xl:px-0 max-width">
      <div class="pt-24 pb-12">
        <h4
          class="text-black capitalize text-3xl xl:text-4xl  font-bold text-center"
        >
          featured partners
        </h4>
        <ul id="featured_partners" class="flex flex-wrap justify-center my-6">
          <li
            class="m-2 border group hover:shadow-xl transition duration-150 transform hover:-translate-y-1 border-gray-300 cursor-pointer"
          >
            <router-link
              :to="'/'"
              class="py-8 px-16 xl:px-20 text-center block"
            >
              <svg
                width="200"
                height="80"
                viewBox="0 0 200 80"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path fill="#fff" d="M0 0h200v80H0z"></path>
                <path
                  d="M88.532 43.142l5.497 14.594h-2.792l-1.29-3.639h-5.752l-1.241 3.625h-2.768l5.497-14.594 2.85.014zm-1.506 2.71l-2.157 6.142h4.376l-2.147-6.142h-.072zm8.234 1.425h8.357v.987l-5.487 7.518h5.516v1.955h-8.77v-1.17l5.4-7.34h-5.015v-1.95zm18.865 0v10.46h-2.479V56.36h-.043a3.335 3.335 0 01-1.31 1.107 4.07 4.07 0 01-1.834.404 3.569 3.569 0 01-2.772-1.035c-.642-.686-.963-1.756-.963-3.21v-6.349h2.518v6.065a3.16 3.16 0 00.524 1.988 1.893 1.893 0 001.584.664 2.086 2.086 0 001.675-.736c.44-.543.666-1.228.635-1.926v-6.055h2.465zm7.417-.173a2.606 2.606 0 01.924.14v2.493a2.13 2.13 0 00-.563-.27 2.745 2.745 0 00-.9-.125 1.929 1.929 0 00-1.531.76 3.67 3.67 0 00-.626 2.354v5.295h-2.459V47.277h2.464v1.646h.039a2.885 2.885 0 011.02-1.338 2.74 2.74 0 011.632-.481zm9.79 7.995v2.026a5.295 5.295 0 01-1.598.626 8.975 8.975 0 01-2.108.24 4.852 4.852 0 01-3.716-1.414c-.886-.944-1.329-2.256-1.329-3.938a5.743 5.743 0 011.42-4.004 4.617 4.617 0 013.596-1.574 4.333 4.333 0 013.369 1.328c.802.886 1.204 2.108 1.204 3.668v1.194h-7.158c.111 1.049.448 1.785 1.011 2.2.645.44 1.415.66 2.195.625a5.176 5.176 0 001.689-.27 5.383 5.383 0 001.425-.707zm-1.579-3.653a2.745 2.745 0 00-.563-1.863 2.023 2.023 0 00-1.593-.64 2.3 2.3 0 00-1.588.635 3.25 3.25 0 00-.934 1.868h4.678zM96.85 23.08v14.595h-2.537V26.233h-.039l-4.529 11.442h-1.68l-4.64-11.442h-.029v11.442h-2.344V23.08h3.634l4.193 10.8h.072l4.423-10.815 3.476.015zm2.117 1.108a1.329 1.329 0 01.443-1.02 1.565 1.565 0 012.133 0 1.367 1.367 0 01.428 1.01 1.345 1.345 0 01-.438 1.01 1.52 1.52 0 01-1.069.405 1.477 1.477 0 01-1.063-.409 1.34 1.34 0 01-.434-.996zm2.715 3.022v10.465h-2.46V27.21h2.46zm7.47 8.664a3.444 3.444 0 001.213-.255 5.01 5.01 0 001.218-.674v2.306a4.96 4.96 0 01-1.338.51 7.246 7.246 0 01-1.641.173 4.982 4.982 0 01-5.213-5.198 5.967 5.967 0 011.487-4.149c.985-1.091 2.38-1.636 4.183-1.636a5.81 5.81 0 011.401.178c.389.09.766.229 1.121.413v2.359a5.171 5.171 0 00-1.165-.645 3.409 3.409 0 00-1.213-.226 3.089 3.089 0 00-2.353.962 3.567 3.567 0 00-.896 2.556 3.42 3.42 0 00.862 2.474 3.12 3.12 0 002.349.862l-.015-.01zm9.444-8.847c.177-.001.355.013.53.044.136.018.27.052.399.1v2.494a2.165 2.165 0 00-.568-.27 2.745 2.745 0 00-.9-.125 1.923 1.923 0 00-1.531.761 3.668 3.668 0 00-.621 2.358v5.295h-2.464V27.21h2.464v1.651h.039a2.89 2.89 0 011.02-1.338c.479-.33 1.05-.5 1.632-.486v-.01zm1.059 5.56a5.652 5.652 0 011.468-4.11c.963-1.012 2.318-1.517 4.067-1.517a5.012 5.012 0 013.851 1.444 5.508 5.508 0 011.381 3.942 5.568 5.568 0 01-1.468 4.053 5.287 5.287 0 01-3.985 1.507 5.223 5.223 0 01-3.851-1.444 5.298 5.298 0 01-1.463-3.866v-.01zm2.565-.082a3.736 3.736 0 00.742 2.503 2.655 2.655 0 002.127.866 2.483 2.483 0 002.046-.866 4.004 4.004 0 00.703-2.57 3.856 3.856 0 00-.727-2.547 2.523 2.523 0 00-2.06-.823 2.588 2.588 0 00-2.104.9 3.95 3.95 0 00-.727 2.547v-.01zm11.846-2.556a1.042 1.042 0 00.337.828 5.53 5.53 0 001.482.76 5.067 5.067 0 012.075 1.329c.4.508.61 1.14.592 1.786a2.879 2.879 0 01-1.131 2.373 4.814 4.814 0 01-3.071.895 7.344 7.344 0 01-1.444-.159 6.421 6.421 0 01-1.338-.404V34.95c.446.311.931.56 1.444.741a4.15 4.15 0 001.405.28c.424.026.848-.055 1.233-.236a.836.836 0 00.394-.785 1.095 1.095 0 00-.409-.861 6.347 6.347 0 00-1.564-.809 4.823 4.823 0 01-1.926-1.28 2.806 2.806 0 01-.567-1.81 2.852 2.852 0 011.126-2.325 4.447 4.447 0 012.912-.914c.413.005.826.047 1.232.125.39.064.773.168 1.141.313v2.344a5.244 5.244 0 00-1.141-.564 3.85 3.85 0 00-1.29-.23 1.895 1.895 0 00-1.097.274.868.868 0 00-.395.746v-.01zm5.545 2.638a5.652 5.652 0 011.468-4.11c.963-1.012 2.33-1.517 4.067-1.517a5.012 5.012 0 013.851 1.444 5.508 5.508 0 011.381 3.942 5.568 5.568 0 01-1.468 4.053 5.296 5.296 0 01-3.985 1.507 5.223 5.223 0 01-3.851-1.444 5.298 5.298 0 01-1.463-3.866v-.01zm2.565-.082a3.736 3.736 0 00.742 2.503 2.635 2.635 0 002.127.866 2.477 2.477 0 002.046-.866 4.004 4.004 0 00.703-2.57 3.856 3.856 0 00-.727-2.547 2.516 2.516 0 00-2.041-.823 2.58 2.58 0 00-2.104.9 3.945 3.945 0 00-.746 2.547v-.01zm16.366-3.288h-3.668v8.458h-2.493v-8.448h-1.748V27.21h1.748v-1.444a3.639 3.639 0 011.068-2.71 3.779 3.779 0 012.753-1.054c.266-.002.531.013.795.044.207.027.412.073.611.14v2.127a2.509 2.509 0 00-.429-.173 2.223 2.223 0 00-.702-.102 1.48 1.48 0 00-1.189.482c-.311.414-.46.928-.419 1.444v1.26h3.668v-2.363l2.474-.755v3.104h2.493v2.017h-2.493v4.895a2.05 2.05 0 00.351 1.362 1.4 1.4 0 001.102.4 1.53 1.53 0 00.515-.106 2.29 2.29 0 00.525-.24v2.035a2.822 2.822 0 01-.78.241 5.14 5.14 0 01-1.073.116 3.054 3.054 0 01-2.334-.833 3.526 3.526 0 01-.78-2.498l.005-5.381z"
                  fill="#737373"
                ></path>
                <path
                  d="M52.471 23.08H36v16.472h16.471V23.08z"
                  fill="#F25022"
                ></path>
                <path
                  d="M70.656 23.08H54.185v16.472h16.471V23.08z"
                  fill="#7FBA00"
                ></path>
                <path
                  d="M52.471 41.266h-16.47v16.47h16.47v-16.47z"
                  fill="#00A4EF"
                ></path>
                <path
                  d="M70.656 41.266H54.185v16.47h16.471v-16.47z"
                  fill="#FFB900"
                ></path>
              </svg>
            </router-link>
            <div
              class="flex items-center transition bg-gray-100 group-shover:bg-light-bg justify-center p-4 border-t"
            >
              <span class="text-gray-500 text-lg block"
                >Download whitepaper</span
              >
              <svg
                width="19"
                height="18"
                viewBox="0 0 19 18"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M2.75 12.75V15a1.5 1.5 0 001.5 1.5h10.5a1.5 1.5 0 001.5-1.5v-2.25M6.5 9l3 3 3-3m-3-7.5V12"
                  stroke="var(--gray-3,#727274)"
                  stroke-width="1.5"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                ></path>
              </svg>
            </div>
          </li>
          <li
            class="m-2 border group hover:shadow-xl transition duration-150 transform hover:-translate-y-1 border-gray-300 cursor-pointer"
          >
            <router-link
              :to="'/'"
              class="py-8 px-16 xl:px-20 text-center block"
            >
              <svg
                width="200"
                height="80"
                viewBox="0 0 200 80"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path fill="#fff" d="M0 0h200v80H0z"></path>
                <path
                  d="M85.834 39.527c0 .823.089 1.49.245 1.98.177.49.4 1.024.71 1.602a.968.968 0 01.156.512c0 .222-.133.445-.422.667l-1.4.934c-.2.134-.4.2-.578.2-.222 0-.445-.11-.667-.31a6.873 6.873 0 01-.8-1.046 17.6 17.6 0 01-.69-1.313c-1.733 2.047-3.911 3.07-6.534 3.07-1.867 0-3.357-.534-4.446-1.602-1.089-1.067-1.645-2.491-1.645-4.271 0-1.891.667-3.426 2.023-4.583s3.156-1.735 5.446-1.735c.756 0 1.534.067 2.356.178.822.111 1.667.289 2.556.49v-1.625c0-1.69-.355-2.87-1.044-3.56-.712-.689-1.912-1.023-3.624-1.023-.778 0-1.578.09-2.4.29-.823.2-1.623.444-2.4.756a6.36 6.36 0 01-.779.29 1.363 1.363 0 01-.356.066c-.31 0-.466-.223-.466-.69v-1.09c0-.356.044-.623.155-.778.111-.156.311-.312.623-.468.778-.4 1.711-.734 2.8-1 1.09-.29 2.245-.424 3.468-.424 2.645 0 4.579.601 5.824 1.802 1.222 1.202 1.845 3.026 1.845 5.473v7.208h.044zm-9.025 3.382c.734 0 1.49-.134 2.29-.4.8-.268 1.511-.757 2.112-1.425.355-.422.622-.89.755-1.423a7.996 7.996 0 00.223-1.936v-.934a18.562 18.562 0 00-2.045-.378c-.712-.09-1.4-.134-2.09-.134-1.489 0-2.578.29-3.312.89-.733.6-1.089 1.446-1.089 2.559 0 1.045.267 1.824.823 2.358.533.556 1.311.823 2.334.823zm17.85 2.403c-.4 0-.667-.067-.845-.223-.178-.133-.334-.445-.467-.868l-5.223-17.196c-.134-.445-.2-.735-.2-.89 0-.356.177-.557.533-.557h2.178c.423 0 .712.067.867.223.178.133.311.445.445.868l3.734 14.727 3.468-14.727c.11-.445.244-.735.422-.868.178-.134.489-.223.889-.223h1.778c.422 0 .711.067.889.223.178.133.334.445.423.868l3.512 14.905 3.845-14.905c.133-.445.289-.735.445-.868.177-.134.466-.223.866-.223h2.068c.355 0 .555.178.555.557 0 .11-.022.222-.044.355a3.148 3.148 0 01-.156.557l-5.357 17.197c-.133.445-.289.734-.466.867-.178.134-.467.223-.845.223h-1.912c-.422 0-.711-.067-.889-.223-.178-.155-.333-.445-.422-.89l-3.445-14.349L97.881 44.2c-.11.445-.244.734-.422.89-.178.156-.489.223-.889.223h-1.91zm28.562.6c-1.156 0-2.311-.133-3.423-.4-1.111-.267-1.978-.556-2.556-.89-.356-.2-.6-.423-.689-.623a1.57 1.57 0 01-.134-.623v-1.135c0-.467.178-.69.512-.69.133 0 .266.023.4.067.133.045.333.134.556.223.755.334 1.578.6 2.445.779.889.178 1.756.267 2.645.267 1.4 0 2.489-.245 3.245-.735.756-.489 1.156-1.2 1.156-2.113 0-.623-.2-1.135-.6-1.557-.4-.423-1.156-.801-2.245-1.157l-3.223-1.001c-1.623-.512-2.823-1.268-3.557-2.27-.733-.978-1.111-2.069-1.111-3.225 0-.935.2-1.758.6-2.47.4-.712.933-1.335 1.6-1.824.667-.512 1.423-.89 2.312-1.157.889-.267 1.823-.378 2.801-.378.489 0 1 .022 1.489.089.511.067.978.156 1.445.245a17.3 17.3 0 011.267.356c.4.133.711.267.933.4.312.178.534.356.667.556.134.178.2.423.2.734v1.046c0 .467-.178.712-.511.712-.178 0-.467-.09-.845-.267-1.267-.578-2.689-.868-4.267-.868-1.267 0-2.268.2-2.957.623-.689.423-1.044 1.068-1.044 1.98 0 .623.222 1.157.666 1.58.445.422 1.267.845 2.445 1.223l3.157 1.002c1.6.511 2.756 1.223 3.445 2.135.689.912 1.023 1.958 1.023 3.115 0 .956-.2 1.824-.578 2.58a5.982 5.982 0 01-1.623 1.958c-.689.556-1.511.957-2.467 1.246-1 .311-2.045.467-3.179.467z"
                  fill="#252F3E"
                ></path>
                <path
                  fill-rule="evenodd"
                  clip-rule="evenodd"
                  d="M127.422 56.724C120.109 62.13 109.484 65 100.349 65c-12.803 0-24.34-4.739-33.053-12.614-.689-.623-.067-1.468.756-.979 9.424 5.473 21.05 8.788 33.075 8.788 8.113 0 17.026-1.691 25.228-5.162 1.223-.556 2.268.801 1.067 1.691z"
                  fill="#F90"
                ></path>
                <path
                  fill-rule="evenodd"
                  clip-rule="evenodd"
                  d="M130.468 53.254c-.934-1.202-6.18-.579-8.558-.29-.711.09-.823-.533-.178-1 4.179-2.937 11.047-2.092 11.847-1.113.801 1.001-.222 7.875-4.134 11.168-.6.512-1.178.245-.911-.423.889-2.202 2.867-7.163 1.934-8.342z"
                  fill="#F90"
                ></path>
              </svg>
            </router-link>
            <div
              class="flex items-center transition bg-gray-100 group-shover:bg-light-bg justify-center p-4 border-t"
            >
              <span class="text-gray-500 text-lg block"
                >Download whitepaper</span
              >
              <svg
                width="19"
                height="18"
                viewBox="0 0 19 18"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M2.75 12.75V15a1.5 1.5 0 001.5 1.5h10.5a1.5 1.5 0 001.5-1.5v-2.25M6.5 9l3 3 3-3m-3-7.5V12"
                  stroke="var(--gray-3,#727274)"
                  stroke-width="1.5"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                ></path>
              </svg>
            </div>
          </li>
          <li
            class="m-2 border group hover:shadow-xl transition duration-150 transform hover:-translate-y-1 border-gray-300 cursor-pointer"
          >
            <router-link
              :to="'/'"
              class="py-8 px-16 xl:px-20 text-center block"
            >
              <svg
                width="200"
                height="80"
                viewBox="0 0 200 80"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path fill="#fff" d="M0 0h200v80H0z"></path>
                <path
                  d="M91.458 18.819a10.39 10.39 0 00-6.254 18.61l4.583-4.57c-.611-.256-1.112-.719-1.53-1.232a4.034 4.034 0 116.852-4.103l4.62-4.63a10.36 10.36 0 00-8.271-4.075z"
                  fill="#FBBC05"
                ></path>
                <path
                  d="M108.937 13.594c2.096 1.861 3.656 4.333 4.39 7.04a10.38 10.38 0 01-5.891 18.953h-7.989v-6.375h7.989a4.031 4.031 0 003.465-3.995 4.033 4.033 0 00-3.465-3.994v-.787a8.072 8.072 0 00-.745-3.494c-.506-1.095-1.274-1.992-2.203-2.76l4.449-4.588z"
                  fill="#4285F4"
                ></path>
                <path
                  d="M89.78 32.856a3.991 3.991 0 001.677.336h7.99v6.395h-7.99c-2.255.007-4.462-.803-6.265-2.158l4.587-4.573z"
                  fill="#34A853"
                ></path>
                <path
                  d="M55.144 65.884a7.06 7.06 0 01-5.164-11.963 1.14 1.14 0 00.11-.11 7.001 7.001 0 015.044-2.109 6.706 6.706 0 014.852 1.957l-1.402 1.402a4.943 4.943 0 00-3.44-1.402 4.884 4.884 0 00-3.6 1.543 5.125 5.125 0 007.181 7.313 4.17 4.17 0 001.009-2.38h-4.59v-1.977h6.496c.07.396.101.798.091 1.2a6.193 6.193 0 01-1.685 4.52 6.475 6.475 0 01-4.902 2.006zm15.201-1.28a4.6 4.6 0 110-6.527 4.69 4.69 0 010 6.526zm-5.043-1.292a2.474 2.474 0 003.5.142l.131-.132a2.693 2.693 0 00.757-2.017 2.785 2.785 0 00-.757-2.017 2.522 2.522 0 00-3.56-.081l-.081.07a2.784 2.784 0 00-.757 2.018 2.664 2.664 0 00.747 2.017h.02zm14.989 1.291a4.61 4.61 0 110-6.526 4.721 4.721 0 01-.02 6.526h.02zm-5.043-1.29a2.462 2.462 0 003.49.14l.11-.13a2.935 2.935 0 000-3.955 2.521 2.521 0 00-3.53-.09l-.07.07a2.683 2.683 0 00-.767 2.017 2.814 2.814 0 00.767 2.018v-.07zM86.868 70a4.105 4.105 0 01-2.492-.827 4.761 4.761 0 01-1.483-1.886l1.756-.727c.184.447.483.837.867 1.13.39.326.884.502 1.392.494a2.35 2.35 0 001.796-.686c.46-.566.684-1.29.625-2.017v-.656h-.07a2.895 2.895 0 01-2.391 1.009 4.226 4.226 0 01-3.107-1.27 4.428 4.428 0 01-1.382-3.178 4.367 4.367 0 011.342-3.228 4.207 4.207 0 013.026-1.392c.483.004.96.107 1.402.302.383.17.726.417 1.008.727h.071v-.727h1.927v8.15a4.842 4.842 0 01-1.22 3.572 4.378 4.378 0 01-3.108 1.19l.04.02zm.14-5.89a2.218 2.218 0 001.716-.767 2.764 2.764 0 00.716-1.957 2.865 2.865 0 00-.706-2.018 2.219 2.219 0 00-1.715-.766 2.39 2.39 0 00-1.806.766 2.824 2.824 0 00-.06 3.934 2.421 2.421 0 001.866.787l-.01.02zm7.566-11.873v13.385h-2.017V52.217l2.017.02zm5.457 13.668a4.388 4.388 0 01-3.228-1.302 4.782 4.782 0 010-6.526 4.186 4.186 0 014.6-1.009c.429.189.819.456 1.15.787.294.282.554.597.777.938.18.284.333.584.454.898l.201.514-6.133 2.522a2.31 2.31 0 002.209 1.402 2.594 2.594 0 002.24-1.28l1.543 1.008a5.42 5.42 0 01-1.473 1.402 4.175 4.175 0 01-2.35.595l.01.05zm-2.522-4.721l4.035-1.695a1.42 1.42 0 00-.625-.706 2.25 2.25 0 00-1.009-.262 2.522 2.522 0 00-2.4 2.663zm16.917 4.701a6.3 6.3 0 01-4.491-1.768 6.314 6.314 0 01-1.925-4.426v-.262a6.315 6.315 0 016.164-6.466h.252a5.75 5.75 0 014.549 2.018l-1.009 1.079a4.18 4.18 0 00-3.429-1.584 4.676 4.676 0 00-3.42 1.402 5.277 5.277 0 000 7.142 4.711 4.711 0 003.42 1.402 4.924 4.924 0 003.833-1.785l1.099 1.1a5.926 5.926 0 01-2.118 1.613 6.397 6.397 0 01-2.925.535zm7.918-.273h-1.634V53.225h1.594l.04 12.387zm2.562-7.455a4.429 4.429 0 016.254 0 4.844 4.844 0 010 6.436 4.448 4.448 0 01-6.254 0 4.844 4.844 0 010-6.436zm1.18 5.437a2.67 2.67 0 001.863.844 2.659 2.659 0 001.91-.733l.101-.1a3.412 3.412 0 000-4.449 2.655 2.655 0 00-3.753-.11l-.111.1a3.042 3.042 0 00-.817 2.23 3.08 3.08 0 00.828 2.208l-.021.01zm15.121 2.018h-1.524v-1.17c-.287.42-.671.767-1.119 1.009a3.139 3.139 0 01-1.584.423 3.026 3.026 0 01-2.411-1.008 3.786 3.786 0 01-.807-2.583V57.15h1.584v4.933c0 1.573.696 2.37 2.098 2.37a1.957 1.957 0 001.604-.767 2.9 2.9 0 00.575-1.876v-4.66h1.584v8.463zm5.396.272a3.72 3.72 0 01-2.794-1.28 4.956 4.956 0 010-6.436 3.74 3.74 0 014.519-.888c.465.234.864.58 1.16 1.009h.071l-.071-1.14v-3.924h1.584v12.387h-1.544v-1.17a3.106 3.106 0 01-1.16 1.009 3.569 3.569 0 01-1.765.433zm.252-1.392a2.581 2.581 0 001.917-.847c.535-.61.807-1.409.756-2.22a3.126 3.126 0 00-.756-2.238 2.595 2.595 0 00-3.662-.182l-.191.161a3.61 3.61 0 000 4.449 2.583 2.583 0 001.916.817l.02.06z"
                  fill="#5F6368"
                ></path>
                <path
                  d="M108.936 13.591l-4.446 4.592a7.948 7.948 0 00-10.893.828 1.907 1.907 0 01-.009.022 10.363 10.363 0 00-2.13-.214 10.39 10.39 0 00-5.856 1.875 1.018 1.018 0 01-.004-.1 14.342 14.342 0 0123.338-7.003z"
                  fill="#EA4335"
                ></path>
              </svg>
            </router-link>
            <div
              class="flex items-center transition bg-gray-100 group-shover:bg-light-bg justify-center p-4 border-t"
            >
              <span class="text-gray-500 text-lg block"
                >Download whitepaper</span
              >
              <svg
                width="19"
                height="18"
                viewBox="0 0 19 18"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M2.75 12.75V15a1.5 1.5 0 001.5 1.5h10.5a1.5 1.5 0 001.5-1.5v-2.25M6.5 9l3 3 3-3m-3-7.5V12"
                  stroke="var(--gray-3,#727274)"
                  stroke-width="1.5"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                ></path>
              </svg>
            </div>
          </li>
        </ul>
        <ul
          id="additional_partners"
          class="flex flex-wrap justify-center items-center my-6"
        >
          <li
            class="m-2 border group hover:shadow-xl transition duration-150 transform hover:-translate-y-1 border-gray-300 cursor-pointer px-4"
            style="max-width:140px;height:176px"
          >
            <router-link
              :to="'/'"
              class="flex h-full justify-center items-center"
            >
              <svg
                width="100"
                height="48"
                viewBox="0 0 92 48"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <g clip-path="url(#clip0)" fill="#049FD9">
                  <path
                    d="M44.92 32.14c-.126-.042-1.94-.506-3.88-.506-3.67 0-5.905 1.983-5.905 4.935 0 2.615 1.856 3.923 4.092 4.64.253.084.59.211.843.295.97.296 1.772.76 1.772 1.561 0 .886-.928 1.476-2.91 1.476-1.73 0-3.417-.506-3.755-.59v3.627c.211.042 2.194.422 4.303.422 3.037 0 6.538-1.35 6.538-5.315 0-1.94-1.181-3.711-3.754-4.513l-1.097-.337c-.675-.211-1.814-.549-1.814-1.519 0-.759.886-1.307 2.489-1.307 1.392 0 3.079.464 3.121.464V32.14h-.042zm33.744 7.677c0 2.32-1.771 4.176-4.133 4.176s-4.134-1.856-4.134-4.176c0-2.278 1.772-4.176 4.134-4.176s4.133 1.898 4.133 4.176zm-4.133-8.183c-4.85 0-8.352 3.67-8.352 8.183S69.68 48 74.531 48c4.85 0 8.351-3.67 8.351-8.183.042-4.513-3.458-8.183-8.351-8.183zM29.779 47.747H25.77v-15.86h4.008v15.86zm-9.491-15.564c-.38-.127-1.771-.549-3.627-.549-4.85 0-8.436 3.46-8.436 8.183 0 5.104 3.923 8.183 8.436 8.183 1.771 0 3.163-.422 3.627-.548v-4.26c-.169.084-1.476.843-3.374.843-2.657 0-4.387-1.856-4.387-4.218 0-2.404 1.772-4.218 4.387-4.218 1.898 0 3.205.76 3.374.844v-4.26zm41.547 0c-.38-.127-1.772-.549-3.628-.549-4.85 0-8.435 3.46-8.435 8.183 0 5.104 3.922 8.183 8.435 8.183 1.772 0 3.164-.422 3.628-.548v-4.26c-.169.084-1.477.843-3.375.843-2.657 0-4.386-1.856-4.386-4.218 0-2.404 1.771-4.218 4.386-4.218 1.898 0 3.206.76 3.375.844v-4.26zM25.771 1.982A1.98 1.98 0 0023.79 0a1.98 1.98 0 00-1.982 1.982v21.006a1.98 1.98 0 001.982 1.982 1.98 1.98 0 001.982-1.982V1.982zM14.848 9.448a1.98 1.98 0 00-1.982-1.982 1.98 1.98 0 00-1.983 1.982v9.617a1.98 1.98 0 001.983 1.982 1.98 1.98 0 001.982-1.982V9.448zM3.965 14.89a1.98 1.98 0 00-1.983-1.982A1.98 1.98 0 000 14.889v4.176a1.98 1.98 0 001.982 1.982 1.98 1.98 0 001.983-1.982v-4.176z"
                  ></path>
                  <path
                    d="M21.807 1.982A1.98 1.98 0 0123.789 0a1.98 1.98 0 011.983 1.982v21.006a1.98 1.98 0 01-1.983 1.982 1.98 1.98 0 01-1.982-1.982V1.982zm10.882 7.466a1.98 1.98 0 011.982-1.982 1.98 1.98 0 011.983 1.982v9.617a1.98 1.98 0 01-1.983 1.982 1.98 1.98 0 01-1.982-1.982V9.448zM43.57 14.89a1.98 1.98 0 011.983-1.982 1.98 1.98 0 011.982 1.982v4.176a1.98 1.98 0 01-1.982 1.982 1.98 1.98 0 01-1.983-1.982M65.336 1.982A1.98 1.98 0 0167.318 0a1.98 1.98 0 011.983 1.982v21.006a1.98 1.98 0 01-1.983 1.982 1.98 1.98 0 01-1.982-1.982V1.982zM76.26 9.448a1.98 1.98 0 011.983-1.982 1.98 1.98 0 011.982 1.982v9.617a1.98 1.98 0 01-1.982 1.982 1.98 1.98 0 01-1.983-1.982V9.448zm10.882 5.441a1.98 1.98 0 011.983-1.982 1.98 1.98 0 011.982 1.982v4.176a1.98 1.98 0 01-1.982 1.982 1.98 1.98 0 01-1.983-1.982v-4.176z"
                  ></path>
                  <path
                    d="M69.3 1.982A1.98 1.98 0 0067.319 0a1.98 1.98 0 00-1.982 1.982v21.006a1.98 1.98 0 001.982 1.982 1.98 1.98 0 001.983-1.982V1.982zM58.419 9.448a1.98 1.98 0 00-1.982-1.982 1.98 1.98 0 00-1.983 1.982v9.617a1.98 1.98 0 001.983 1.982 1.98 1.98 0 001.982-1.982V9.448zM47.536 14.89a1.98 1.98 0 00-1.982-1.982 1.98 1.98 0 00-1.983 1.982v4.176a1.98 1.98 0 001.983 1.982 1.98 1.98 0 001.982-1.982"
                  ></path>
                </g>
                <defs>
                  <clipPath id="clip0">
                    <path fill="#fff" d="M0 0h91.107v48H0z"></path>
                  </clipPath>
                </defs>
              </svg>
            </router-link>
          </li>
          <li
            class="m-2 border group hover:shadow-xl transition duration-150 transform hover:-translate-y-1 border-gray-300 cursor-pointer px-4"
            style="max-width:140px;height:176px"
          >
            <router-link
              :to="'/'"
              class="flex h-full justify-center items-center"
            >
              <img
                src="../assets/img/f5.png"
                class="h-16 w-36 object-contain object-center"
                alt=""
              />
            </router-link>
          </li>
          <li
            class="m-2 border group hover:shadow-xl transition duration-150 transform hover:-translate-y-1 border-gray-300 cursor-pointer px-4"
            style="max-width:140px;height:176px"
          >
            <router-link
              :to="'/'"
              class="flex h-full justify-center items-center"
            >
              <svg
                width="132"
                height="24"
                viewBox="0 0 132 24"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M55.758 4.407c-1.695 0-3.458.465-5.637 1.627l1.21 2.993c1.89-1.056 3.458-1.521 4.601-1.521 1.298 0 1.87.484 1.87 1.123v.049c0 .436-.35.678-1.211.775l-1.501.155c-3.739.397-5.279 2.024-5.279 4.27v.156c0 2.13 1.763 3.806 4.252 3.806 1.637 0 3.06-.688 3.922-1.908l.281 1.695h3.39v-7.68c0-3.652-2.092-5.54-5.898-5.54zm-.33 10.498c-1.258 0-1.85-.484-1.85-1.23v-.048c0-.659.378-1.143 1.744-1.346l.59-.087c.873-.126 1.405-.281 1.89-.582v.979c0 1.472-.92 2.315-2.373 2.315z"
                  fill="#000"
                ></path>
                <path
                  d="M23.884 4.494L19.544.155l-4.338 4.339 2.16 2.15L6.489 17.521l4.34 4.339 4.338-4.34-2.16-2.16L23.884 4.495z"
                  fill="#F04E23"
                ></path>
                <path
                  d="M10.876.158L.001 11.033l4.335 4.335L15.21 4.493 10.876.158zm15.164 6.49L15.164 17.523l4.336 4.335 10.875-10.875-4.335-4.335z"
                  fill="#F04E23"
                ></path>
                <path
                  d="M67.71 0h-3.855v17.608h3.854V0zM43.341 4.407c-1.753 0-3.157.775-3.932 1.985l-.29-1.772h-3.39v17.385h3.855V15.98c.736 1.133 2.12 1.85 3.767 1.85 3.08 0 5.589-2.732 5.589-6.49v-.435c-.01-3.778-2.519-6.5-5.599-6.5zm1.627 6.818c0 1.986-1.036 3.41-2.75 3.41s-2.75-1.434-2.75-3.41v-.223c0-1.985 1.036-3.409 2.75-3.409s2.75 1.434 2.75 3.41v.222zm74.712-6.818c-3.942 0-6.711 2.731-6.711 6.489v.436c0 3.767 2.769 6.489 6.711 6.489s6.712-2.732 6.712-6.49v-.435c0-3.768-2.77-6.49-6.712-6.49zm2.751 6.818c0 1.986-1.036 3.41-2.751 3.41-1.714 0-2.75-1.434-2.75-3.41v-.223c0-1.985 1.036-3.409 2.75-3.409 1.715 0 2.751 1.434 2.751 3.41v.222zm7.593-6.034v-.058c0-.378-.29-.64-.794-.64h-.881v2.025h.416V5.84h.465l.349.678h.465l-.427-.804c.262-.077.407-.271.407-.523zm-1.259-.33h.465c.261 0 .378.088.378.291v.02c0 .174-.107.29-.378.29h-.465v-.6z"
                  fill="#000"
                ></path>
                <path
                  d="M129.143 3.41c-1.191 0-2.092.9-2.092 2.091 0 1.191.901 2.092 2.092 2.092s2.092-.9 2.092-2.092c0-1.191-.901-2.092-2.092-2.092zm0 3.902c-1.036 0-1.782-.745-1.782-1.801s.746-1.802 1.782-1.802 1.782.746 1.782 1.802-.746 1.801-1.782 1.801zM101.627 0h-3.855v17.608h3.855V0zm7.593 14.634c-1.123 0-1.54-.552-1.54-1.743V7.593h4.533V4.62h-4.533V1.646l-3.854.582v11.04c0 3.013 1.54 4.553 4.62 4.553 1.365 0 2.973-.417 4.29-1.162l-1.104-2.732c-.755.427-1.84.707-2.412.707zM89.675 4.407c-1.694 0-3.457.465-5.636 1.627l1.21 2.993c1.889-1.056 3.458-1.521 4.6-1.521 1.299 0 1.87.484 1.87 1.123v.049c0 .436-.348.678-1.21.775l-1.502.155c-3.738.397-5.278 2.024-5.278 4.27v.156c0 2.13 1.763 3.806 4.252 3.806 1.636 0 3.06-.688 3.922-1.908l.281 1.695h3.39v-7.68c0-3.652-2.092-5.54-5.898-5.54zm-.329 10.498c-1.259 0-1.85-.484-1.85-1.23v-.048c0-.659.378-1.143 1.744-1.346l.59-.087c.872-.126 1.405-.281 1.89-.582v.979c0 1.472-.921 2.315-2.374 2.315zM76.136 4.407c-3.942 0-6.712 2.731-6.712 6.489v.436c0 3.767 2.77 6.489 6.712 6.489 3.941 0 6.711-2.732 6.711-6.49v-.435c.01-3.768-2.77-6.49-6.711-6.49zm2.75 6.818c0 1.986-1.036 3.41-2.75 3.41-1.715 0-2.751-1.434-2.751-3.41v-.223c0-1.985 1.036-3.409 2.75-3.409 1.715 0 2.751 1.434 2.751 3.41v.222zm13.017 9.511h.988l1.366 1.792h.01v-1.792h.91v3.167h-.96l-1.394-1.84h-.01v1.84h-.91v-3.167zm4.475 0h2.77l.038.765h-1.86v.436h1.463v.697h-1.462v.494h1.908l-.03.775h-2.827v-3.167zm4.794.814h-1.114l.039-.814h3.099l.039.814h-1.114v2.353h-.949V21.55zm2.828-.814h1.007l.523 2.199h.049l.668-2.199h.93l.658 2.199h.049l.503-2.199h.969l-.833 3.167h-1.24l-.581-1.908h-.029l-.591 1.908h-1.249L104 20.736zm6.053 1.579c0-1.037.698-1.676 1.811-1.676 1.114 0 1.812.65 1.812 1.676 0 1.036-.698 1.675-1.812 1.675-1.113.01-1.811-.639-1.811-1.675zm2.673 0c0-.552-.319-.872-.862-.872-.552 0-.862.33-.862.872 0 .552.32.871.862.871.543 0 .862-.32.862-.871zm1.976-1.579h1.85c.843 0 1.249.397 1.249 1.133 0 .504-.213.853-.619 1.017l.755 1.017h-1.075l-.581-.833h-.62v.833h-.949v-3.167h-.01zm1.724 1.588c.32 0 .426-.174.426-.416s-.116-.417-.426-.417h-.775v.834h.775zm2.615-1.588h.949v1.162h.388l.929-1.162h1.076l-1.221 1.52 1.288 1.637-.009.01h-1.104l-.959-1.22h-.388v1.22h-.949v-3.167zm4.136 2.954v-.872c.532.272 1.046.398 1.491.398.339 0 .514-.078.514-.243 0-.154-.117-.203-.795-.31-.745-.116-1.239-.338-1.239-.978 0-.59.523-1.046 1.54-1.046.406 0 .833.087 1.23.252v.862a2.826 2.826 0 00-1.288-.349c-.359 0-.504.088-.504.233 0 .184.223.203.775.3.745.126 1.239.34 1.239 1.007 0 .523-.387 1.037-1.51 1.037-.553.01-.988-.107-1.453-.29z"
                  fill="#000"
                ></path>
              </svg>
            </router-link>
          </li>
          <li
            class="m-2 border group hover:shadow-xl transition duration-150 transform hover:-translate-y-1 border-gray-300 cursor-pointer px-4"
            style="max-width:140px;height:176px"
          >
            <router-link
              :to="'/'"
              class="flex h-full justify-center items-center"
            >
              <svg
                width="132"
                height="57"
                viewBox="0 0 132 57"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <g fill="#100E0F">
                  <path
                    d="M25.423 26.279h-11.09a.52.52 0 00-.517.516v5.424a.52.52 0 00.517.52h4.325v6.74s-.972.33-3.665.33c-3.17 0-7.597-1.158-7.597-10.892 0-9.733 4.617-11.02 8.945-11.02 3.746 0 5.362.66 6.388.979a.519.519 0 00.62-.51l1.238-5.24a.484.484 0 00-.197-.403C23.972 12.421 21.428 11 15 11 7.597 11 0 14.152 0 29.295s8.697 17.404 16.026 17.404c6.07 0 9.749-2.594 9.749-2.594a.449.449 0 00.168-.393V26.8a.516.516 0 00-.52-.52zm57.168-13.447a.516.516 0 00-.499-.538h-6.23a.522.522 0 00-.55.538v12.054H65.58V12.832a.518.518 0 00-.517-.52h-6.23a.52.52 0 00-.532.52v32.665a.52.52 0 00.517.524h6.23a.52.52 0 00.517-.524V31.523h9.748v13.978a.52.52 0 00.517.524h6.26a.52.52 0 00.516-.524l-.014-32.669zm-49.41 8.342c2.225 0 4.028-1.822 4.028-4.068 0-2.247-1.803-4.068-4.028-4.068-2.224 0-4.027 1.82-4.027 4.068 0 2.246 1.803 4.067 4.027 4.067zm3.581 17.429V23.515a.52.52 0 00-.517-.52h-6.23a.598.598 0 00-.542.583V45.2c0 .634.396.825.909.825h5.614c.616 0 .766-.3.766-.836v-6.586zm69.562-15.557h-6.197a.522.522 0 00-.517.524v16.016a7.003 7.003 0 01-3.808 1.15c-2.235 0-2.829-1.015-2.829-3.203V23.567a.52.52 0 00-.516-.524h-6.29a.52.52 0 00-.516.524v15.026c0 6.497 3.62 8.088 8.605 8.088 4.086 0 7.385-2.258 7.385-2.258.052.447.128.891.227 1.33a.548.548 0 00.454.283h4.002a.52.52 0 00.517-.52v-21.95a.52.52 0 00-.517-.52zm16.943-.736a11.651 11.651 0 00-5.915 1.572v-11.05a.523.523 0 00-.318-.48.52.52 0 00-.199-.04h-6.263a.52.52 0 00-.517.52v32.665a.525.525 0 00.517.524h4.346a.517.517 0 00.455-.278c.125-.495.213-.999.264-1.507 0 0 2.565 2.427 7.41 2.427 5.691 0 8.957-2.888 8.957-12.963s-5.201-11.39-8.737-11.39zm-2.445 18.412a7.432 7.432 0 01-3.606-1.041V29.324a8.26 8.26 0 013.203-1.04c2.232-.202 4.398.472 4.398 5.797-.018 5.626-.99 6.736-3.995 6.644v-.003zm-66.11-17.73H50.03v-6.19c0-.235-.121-.367-.392-.367h-6.392c-.25 0-.366.11-.366.348v6.414s-3.2.773-3.416.835a.52.52 0 00-.367.499v4.03a.52.52 0 00.484.51h3.299v9.668c0 7.183 5.039 7.887 8.429 7.887a14.252 14.252 0 003.72-.612.483.483 0 00.293-.47v-4.42a.527.527 0 00-.517-.52c-.271 0-.971.11-1.69.11-2.301 0-3.082-1.07-3.082-2.455v-9.188h4.684a.52.52 0 00.517-.52v-5.036a.515.515 0 00-.52-.524z"
                  ></path>
                </g>
              </svg>
            </router-link>
          </li>
        </ul>
      </div>
    </div>
    <hr class="bg-gray-300 my-2" />
    <div class="px-6 xl:px-16 max-width">
      <div class="py-24 xl:flex xl:justify-between">
        <div class="w-full xl:w-1/3">
          <h4 class="text-black capitalize text-3xl xl:text-4xl mb-4 font-bold">
            ready to get<br class="hidden xl:block" />
            started?
          </h4>
        </div>
        <div class="w-full xl:w-8/12">
          <h4 class="text-primary text-xl mb-12">
            Request a demo or talk to our technical sales team to answer your
            questions.
          </h4>
          <div class="my-4">
            <router-link
              class="capitalize hover:no-underline transition hover:bg-blue-600 text-white mr-4 p-4 font-semibold bg-primary-blue"
              :to="'/'"
            >
              contact sales
            </router-link>
            <router-link
              class="capitalize border border-gray-300 hover:border-none hover:no-underline transition font-semibold hover:bg-gray-300 text-black p-4"
              :to="'/'"
            >
              request demo
            </router-link>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import Container from "./Body/ProductsContainer.vue";
import Carousel from "vue-owl-carousel";
export default {
  components: {
    Container,
    Carousel,
  },
  data() {
    return {
      currentSlide: 0,
      currentSlideMobile: 0,
      autoplay: true,
    };
  },
  methods: {
    animateContent(event) {
      this.currentSlide = event.item.index;
    },
    animateContentMobile(event) {
      this.currentSlideMobile = event.item.index;
    },
  },
  computed: {
    screenWidth() {
      return this.$data.$screenSize.width;
    },
  },
};
</script>

<style>
.gradient {
  position: absolute;
  top: 0px;
  right: 0px;
  height: 100%;
  width: 30%;
  background-image: linear-gradient(to right, transparent 80%, black);
}
.responsive-margin {
  margin-top: -50px;
}
#cards {
  padding: 30px;
  margin: 0px;
}
#cards:hover {
  text-decoration: none;
  transition-property: background, height, margin, padding, width;
  transition-duration: 0.3s, 0.3s, 0.3s, 0.3s, 0.3s;
  transition-timing-function: ease, ease, ease, ease, ease;
  transition-delay: 0s, 0s, 0s, 0s, 0s;
  margin: -6px;
  padding: 36px;
  /* width: 421px; */
}
#trusted_business {
  display: flex;
  flex-wrap: wrap;
  justify-content: space-around;
  list-style: none;
  margin: -30px 0;
  padding: 0;
}
.owl-dots {
  position: absolute !important;
  top: 314px !important;
  right: 60px !important;
  display: flex !important;
  flex-direction: column !important;
}
.owl-dots button:first-child:before {
  content: "PANDORA";
}
.owl-dots button:nth-child(2):before {
  content: "ROBLOX";
}
.owl-dots button:nth-child(3):before {
  content: "MERCEDES";
}
.owl-dots .owl-dot {
  color: #727274 !important;
  font-weight: bold !important;
}
.owl-dots .active {
  color: white !important;
}
.owl-dots .owl-dot span {
  visibility: hidden;
}
#trusted_business li {
  align-items: center;
  display: flex;
  justify-content: center;
  margin: 30px 0;
  width: auto;
}
#featured_partners li {
  max-width: 360px;
  min-width: 265px;
}
.carousel-1-div {
  min-height: 362px;
  background-position-y: top !important;
  background-position-x: right !important;
  background-repeat: no-repeat !important;
  position: relative;
}
.min-height-70 {
  min-height: 70vh;
}
#mobile-carousel {
  display: none;
}
@media screen and (min-width: 100px) and (max-width: 320px) {
  .owl-dots {
    position: absolute !important;
    bottom: -112px !important;
    left: 17px !important;
    display: flex !important;
    flex-direction: row !important;
  }
  .responsive-margin {
    margin-top: 0px;
  }
  .owl-dots .owl-dot {
    margin-right: 25px;
  }
  #cards:hover {
    padding: 30px;
    margin: 0px;
  }
  #trusted_business li {
    width: 50%;
  }
  #desktop-carousel {
    display: none;
  }
  #mobile-carousel {
    display: block;
    height: 94vh;
  }
  .hero-mobile {
    min-height: 482px;
    position: relative;
  }
  .hero-mobile .carousel-img {
    max-height: 188px;
    position: absolute;
    top: 0px;
    right: 0px;
    z-index: -1;
    object-fit: contain;
    object-position: right;
  }
  .gradient {
    background-image: linear-gradient(45deg, black 60%, transparent 100%);
  }
}
@media screen and (min-width: 321px) and (max-width: 768px) {
  .owl-dots {
    position: absolute !important;
    bottom: -190px !important;
    left: 18px !important;
    display: flex !important;
    flex-direction: row !important;
  }
  .responsive-margin {
    margin-top: 0px;
  }
  .owl-dots .owl-dot {
    margin-right: 25px;
  }
  #cards:hover {
    padding: 30px;
    margin: 0px;
  }
  #trusted_business li {
    width: 50%;
  }
  #desktop-carousel {
    display: none;
  }
  #mobile-carousel {
    display: block;
    height: 94vh;
  }
  .hero-mobile {
    min-height: 482px;
    position: relative;
  }
  .hero-mobile .carousel-img {
    max-height: 188px;
    position: absolute;
    top: 0px;
    right: 0px;
    z-index: -1;
    object-fit: contain;
    object-position: right;
  }
  .gradient {
    background-image: linear-gradient(45deg, black 60%, transparent 100%);
  }
}
@media screen and (min-width: 768px) and (max-width: 1119px) {
  .carousel-1-div {
    min-height: 482px;
  }
}
</style>
