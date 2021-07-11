<template>
  <div class="text-base">
    <div class="bg-black">
      <div class="max-width text-white" style="position:relative">
        <!-- desktop carousel -->
        <div id="desktop-carousel">
          <div
            class="carousel-1-div py-32 px-16"
            style="background:url('https://www.datocms-assets.com/2885/1611862831-pandora-slide.jpg')"
          >
            <section>
              <h4
                class="capitalize p-2 text-sm font-semibold border border-primary inline-block"
              >
                <span class="text-deep-blue tracking-wider">//</span>
                infrastructure enables innovation
              </h4>
              <h2 class="text-5xl capitalize font-bold my-6">
                at the speed of sound
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
                <p class="m-0 leading-8">
                  Global leader in streaming music discovery strikes the right
                  chord using HashiCorp to accelerate application delivery from
                  days to minutes.
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
            <!-- <div class="gradient"></div> -->
          </div>
        </div>
        <!-- mobile -->
        <div id="mobile-carousel">
          <div class="hero-mobile">
            <img
              src="https://www.datocms-assets.com/2885/1611862831-pandora-slide.jpg"
              alt=""
            />
            <!-- <div class="gradient"></div> -->
          </div>
        </div>
        <!-- end mobile -->
      </div>
    </div>
    <div class="bg-light-bg">
      <div
        class="flex justify-center max-width  xl:px-16"
        style="margin:0 auto;width:100%"
      >
        <div
          class="bg-white w-full flex flex-col xl:flex-row xl:shadow-md z-10"
          style="margin-top:-50px"
        >
          <router-link
            :to="'/'"
            id="cards"
            class=" xl:hover:bg-primary-blue group"
          >
            <span
              class="text-gray-400 xl:group-hover:text-blue-300 block text-lg uppercase"
              >july 12 | live workshop</span
            >
            <p
              class="my-2 text-black xl:group-hover:text-white text-lg tracking-wide font-bold"
            >
              Join us for a hands-on workshop covering Terraform Cloud on AWS
            </p>
            <span
              class="text-primary-blue xl:group-hover:text-white inline-block text-lg capitalize"
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
              class="text-gray-400 xl:group-hover:text-blue-300 block text-lg uppercase"
              >on-demand</span
            >
            <p
              class="my-2 text-black xl:group-hover:text-white text-lg tracking-wide font-bold"
            >
              HashiConf Europe is a wrap. Watch this year's sessions on-demand
            </p>
            <span
              class="text-primary-blue xl:group-hover:text-white inline-block text-lg capitalize"
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
              class="text-gray-400 xl:group-hover:text-blue-300 block text-lg uppercase"
              >july 15 | live webinar</span
            >
            <p
              class="my-2 text-black xl:group-hover:text-white text-lg tracking-wide font-bold"
            >
              Join HashiCorp and Obsidian for Virtual Strategy Day South Africa
            </p>
            <span
              class="text-primary-blue xl:group-hover:text-white inline-block text-lg capitalize"
            >
              register now
            </span>
          </router-link>
        </div>
      </div>
    </div>
    <div class="bg-light-bg">
      <div class="max-width p-24 bg-light-bg">
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
        <h4 class="text-black font-bold text-center text-3xl xl:text-4xl">
          Unlocking the cloud operating<br />
          model for enterprises
        </h4>
        <p class="mt-6 mb-4 text-center text-primary text-xl">
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
    <div class="max-width px-8 xl:px-16 pb-24">
      <div class="grid gap-8 grid-cols-1 xl:grid-cols-2">
        <div class="p-6 md:p-11 xl:p-10 flex flex-col lg:flex-row bg-light-bg">
          <img
            src="https://www.hashicorp.com/img/icons/home-solution-terraform.svg"
            class="mb-4 mr-6 xl:mr-8 xl:h-20 xl:w-20 h-12 w-12 object-contain object-center"
            alt=""
          />
          <div>
            <h4 class="text-2xl">
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
            <h4 class="text-2xl"><strong>Security</strong>&nbsp;automation</h4>
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
            <h4 class="text-2xl"><strong>Network</strong>&nbsp;automation</h4>
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
            <h4 class="text-2xl">
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
            class="text-white capitalize text-3xl xl:text-4xl  font-bold text-center"
          >
            our products
          </h4>
          <p class="mt-6 mb-4 text-center text-white text-xl">
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
          class="text-white capitalize text-3xl xl:text-4xl  font-bold text-center"
        >
          our partners
        </h4>
        <p class="mt-6 mb-4 text-center text-white text-xl">
          HashiCorp partners with the world’s top technology and solutions
          vendors, making it easier for organizations to provision, secure,
          connect, and run their applications in any environment.
        </p>
      </div>
    </div>
  </div>
</template>

<script>
import Container from "./Body/ProductsContainer.vue";
// import Carousel from "vue-owl-carousel";
export default {
  components: {
    Container,
    // Carousel,
  },
};
</script>

<style scoped>
.gradient {
  position: absolute;
  top: 0px;
  height: 100%;
  width: 100%;
  background-image: linear-gradient(to right, transparent 80%, black);
}
#cards {
  padding: 32px;
  margin: 0px;
}
#cards:hover {
  text-decoration: none;
  transition-property: background, height, margin, padding, width;
  transition-duration: 0.3s, 0.3s, 0.3s, 0.3s, 0.3s;
  transition-timing-function: ease, ease, ease, ease, ease;
  transition-delay: 0s, 0s, 0s, 0s, 0s;
  margin: -8px;
  padding: 40px;
  /* width: 421px; */
}
#trusted_business {
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  list-style: none;
  margin: -30px 0;
  padding: 0;
}
#trusted_business li {
  align-items: center;
  display: flex;
  justify-content: center;
  margin: 30px 0;
  width: 25%;
}
.carousel-1-div {
  min-height: 362px;
  background-position-y: top !important;
  background-position-x: right !important;
  background-repeat: no-repeat !important;
  position: relative;
}
.stickycss img {
  position: absolute;
  top: 40px;
}
.min-height-70 {
  min-height: 70vh;
}
#mobile-carousel {
  display: none;
}
@media only screen and (max-width: 768px) {
  #trusted_business li {
    width: 50%;
  }
  #desktop-carousel {
    display: none;
  }
  #mobile-carousel {
    display: block;
  }
  .hero-mobile {
    min-height: 482px;
    position: relative;
  }
  .hero-mobile img {
    max-height: 188px;
    position: absolute;
    top: 0px;
    right: 0px;
  }
  .gradient {
    background-image: linear-gradient(45deg, black 60%, transparent 100%);
  }
}
@media screen and (max-width: 1119px) and (min-width: 768px) {
  .carousel-1-div {
    min-height: 482px;
  }
}
</style>
