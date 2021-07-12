<template>
  <div class="bg-black pt-24 px-6">
    <div class="w-full xl:w-6/12">
      <form action="">
        <div class="mb-3">
          <input
            type="text"
            placeholder="Email address"
            class="border mb-3 xl:mb-0 w-full xl:w-6/12 bg-footer-input mr-2 border-primary rounded-sm p-4"
          />
          <button
            type="submit"
            class="text-white w-full xl:w-5/12 font-semibold p-4 bg-primary-blue"
          >
            Subscribe to Newsletter
          </button>
        </div>
        <div>
          <label id="checkbox">
            <input type="checkbox" name="" class="mr-2" id="" />
            <span class="text-white" for="">I agree to HashiCorp's</span>
          </label>
          <router-link class="text-primary-blue capitalize" :to="'/'">
            privacy policy
          </router-link>
        </div>
      </form>
    </div>
    <div
      class="my-12 py-6 border-t border-b border-primary xl:flex justify-between"
    >
      <div>
        <svg
          style="height:50px;width:100px"
          width="317"
          height="88"
          viewBox="0 0 317 88"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M107.692 64.421V47.4h-14.97v17.02h-7.623V24.06h7.622v16.602h14.971V24.06h7.622v40.36h-7.622zm35.567-.001h-6.053l-.548-1.996a16.137 16.137 0 01-8.789 2.607c-5.397 0-7.699-3.697-7.699-8.79 0-5.998 2.607-8.3 8.606-8.3h7.089v-3.095c0-3.27-.907-4.421-5.633-4.421a41.255 41.255 0 00-8.179.877l-.907-5.634a38.496 38.496 0 0110.122-1.395c9.269 0 11.998 3.27 11.998 10.672l-.007 19.476zm-7.394-11.151h-5.45c-2.424 0-3.087.663-3.087 2.912 0 2.058.663 2.973 2.972 2.973a11.629 11.629 0 005.572-1.525l-.007-4.36zm21.701 11.754a34.776 34.776 0 01-10.183-1.7l1.029-5.633a33.038 33.038 0 008.788 1.273c3.271 0 3.758-.762 3.758-2.973 0-1.814-.366-2.729-5.152-3.88-7.211-1.76-8.058-3.575-8.058-9.269 0-5.938 2.607-8.545 11.03-8.545 2.98.003 5.949.348 8.85 1.03l-.762 5.876a51.98 51.98 0 00-8.118-.846c-3.209 0-3.758.763-3.758 2.546 0 2.363.183 2.546 4.185 3.575 8.263 2.188 9.055 3.278 9.055 9.307 0 5.725-1.761 9.239-10.664 9.239zm32.663-.602V43.84c0-1.578-.663-2.363-2.363-2.363-1.814 0-5.031 1.09-7.699 2.485v20.459h-7.394V22.847l7.394-1.029v15.33a26.045 26.045 0 0110.786-2.852c4.909 0 6.662 3.453 6.662 8.728v21.397h-7.386zm12.844-33.692v-8.545h7.394v8.545h-7.394zm0 33.692V34.906h7.394v29.515h-7.394zM215.62 35.15c0-7.394 4.299-11.693 14.361-11.693 3.697 0 7.38.447 10.969 1.334l-.839 6.601a59.517 59.517 0 00-9.909-1.029c-5.275 0-6.967 1.822-6.967 6.098v15.512c0 4.3 1.7 6.098 6.967 6.098a59.506 59.506 0 009.909-1.029l.846 6.609a45.672 45.672 0 01-10.968 1.334c-10.062 0-14.361-4.3-14.361-11.693l-.008-18.142zm40.499 29.873c-10.123 0-12.844-5.572-12.844-11.632v-7.455c0-6.06 2.728-11.632 12.844-11.632 10.115 0 12.844 5.572 12.844 11.632v7.455c-.023 6.06-2.744 11.632-12.844 11.632zm0-24.392c-3.941 0-5.45 1.76-5.45 5.092v7.912c0 3.331 1.524 5.092 5.45 5.092 3.925 0 5.45-1.76 5.45-5.092v-7.943c-.015-3.33-1.532-5.092-5.45-5.092v.03zm32.457.457a57.835 57.835 0 00-7.821 4.3v19.056h-7.394V34.906h6.243l.488 3.27a33.064 33.064 0 017.76-3.88l.724 6.792zm28.035 13.515c0 6.548-2.911 10.42-9.756 10.42a40.76 40.76 0 01-7.882-.853v12.196l-7.394 1.029V34.906h5.877l.762 2.485a15.535 15.535 0 019.33-3.087c5.938 0 9.086 3.514 9.086 10.245l-.023 10.054zm-17.631 3.331c2.152.474 4.346.73 6.548.763 2.668 0 3.697-1.274 3.697-3.941V44.35c0-2.424-.907-3.758-3.636-3.758a10.46 10.46 0 00-6.609 2.668v14.673zM29.134 7L0 23.808v40.361l10.946 6.32V30.127l18.188-10.504V7z"
            fill="#fff"
          ></path>
          <path
            d="M40.758 7v32.144H29.133V27.147l-10.945 6.319V74.65l10.946 6.335V48.932h11.624v11.914l10.946-6.312V13.32L40.758 7z"
            fill="#fff"
          ></path>
          <path
            d="M40.758 81L69.89 64.192V23.831l-10.946-6.32v40.362L40.758 68.377V81z"
            fill="#fff"
          ></path>
        </svg>
      </div>
      <ul class="flex items-center">
        <li>
          <router-link :to="'/'">
            <svg
              class="cursor-pointer group"
              width="22"
              height="21"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                class="transition group-hover:fill-white"
                d="M10.999 0C4.926 0 0 4.82 0 10.766c0 4.757 3.152 8.791 7.523 10.215.55.1.75-.233.75-.519 0-.255-.009-.932-.014-1.83-3.06.65-3.706-1.444-3.706-1.444-.5-1.244-1.221-1.575-1.221-1.575-.999-.667.075-.654.075-.654 1.105.076 1.685 1.11 1.685 1.11.981 1.644 2.575 1.17 3.202.894.1-.696.384-1.17.698-1.44-2.442-.27-5.01-1.195-5.01-5.32 0-1.175.428-2.137 1.132-2.889-.114-.272-.491-1.367.108-2.849 0 0 .923-.29 3.025 1.104.877-.24 1.818-.358 2.753-.363.935.005 1.876.123 2.754.363 2.1-1.393 3.022-1.104 3.022-1.104.6 1.482.223 2.577.11 2.85.705.751 1.13 1.713 1.13 2.888 0 4.136-2.572 5.046-5.022 5.312.395.333.747.99.747 1.994 0 1.439-.014 2.6-.014 2.953 0 .288.199.623.756.518C18.851 19.553 22 15.521 22 10.766 22 4.82 17.074 0 10.999 0"
                fill="#D0D2D5"
                fill-rule="evenodd"
              ></path>
            </svg>
          </router-link>
        </li>
        <li class="ml-4">
          <router-link :to="'/'">
            <svg
              class="cursor-pointer group"
              width="24"
              height="20"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                class="transition group-hover:fill-white"
                d="M24 2.368a9.641 9.641 0 0 1-2.828.794A5.045 5.045 0 0 0 23.337.37a9.72 9.72 0 0 1-3.127 1.226A4.859 4.859 0 0 0 16.616 0c-2.719 0-4.924 2.261-4.924 5.049 0 .396.044.781.128 1.15C7.728 5.99 4.099 3.98 1.671.924a5.124 5.124 0 0 0-.667 2.539c0 1.751.869 3.297 2.191 4.203a4.844 4.844 0 0 1-2.231-.632v.063c0 2.446 1.697 4.487 3.95 4.95a4.844 4.844 0 0 1-2.224.087c.627 2.006 2.445 3.466 4.6 3.507A9.732 9.732 0 0 1 0 17.731 13.696 13.696 0 0 0 7.548 20c9.057 0 14.009-7.693 14.009-14.366 0-.218-.005-.435-.014-.652A10.157 10.157 0 0 0 24 2.368"
                fill="#D0D2D5"
                fill-rule="evenodd"
              ></path>
            </svg>
          </router-link>
        </li>
        <li class="ml-4">
          <router-link :to="'/'">
            <svg
              class="cursor-pointer group"
              width="24"
              height="17"
              xmlns="http://www.w3.org/2000/svg"
              fill="#D0D2D5"
            >
              <path
                class="transition group-hover:fill-white"
                d="M9.522 11.553V4.81l6.484 3.383-6.484 3.36zM23.76 3.641s-.235-1.654-.954-2.382C21.893.303 20.87.3 20.401.243 17.043 0 12.005 0 12.005 0h-.01S6.957 0 3.599.243c-.47.055-1.492.06-2.406 1.016C.474 1.987.24 3.641.24 3.641S0 5.584 0 7.525v1.821c0 1.943.24 3.885.24 3.885s.234 1.654.953 2.382c.914.956 2.113.926 2.647 1.026 1.92.184 8.16.241 8.16.241s5.043-.007 8.401-.25c.47-.057 1.492-.061 2.405-1.017.72-.728.954-2.382.954-2.382s.24-1.942.24-3.885v-1.82c0-1.942-.24-3.885-.24-3.885z"
                fill-rule="evenodd"
              ></path>
            </svg>
          </router-link>
        </li>
        <li class="ml-4">
          <router-link :to="'/'">
            <svg
              class="cursor-pointer group"
              width="24"
              height="24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                class="transition group-hover:fill-white"
                d="M20.452 20.45h-3.56v-5.57c0-1.328-.022-3.036-1.85-3.036-1.851 0-2.134 1.447-2.134 2.941v5.665H9.352V8.997h3.413v1.566h.049c.474-.9 1.636-1.85 3.367-1.85 3.605 0 4.27 2.371 4.27 5.456v6.281zM5.339 7.432a2.063 2.063 0 1 1 0-4.128 2.065 2.065 0 0 1 0 4.128zM7.12 20.45H3.557V8.997H7.12V20.45zM23 0H1a1 1 0 0 0-1 1v22a1 1 0 0 0 1 1h22a1 1 0 0 0 1-1V1a1 1 0 0 0-1-1z"
                fill="#D0D2D5"
                fill-rule="evenodd"
              ></path>
            </svg>
          </router-link>
        </li>
        <li class="ml-4">
          <router-link :to="'/'">
            <svg
              class="cursor-pointer group"
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              viewBox="0 0 192.3 412"
            >
              <path
                class="transition group-hover:fill-white"
                d="M63.37 21.23C79.44 5.93 102.29.76 123.85.12c22.8-.21 45.59-.12 68.38-.12q.13 36.08 0 72.16h-44.21c-9.34-.58-18.94 6.5-20.64 15.76-.22 16.09-.08 32.2-.07 48.29 21.61.09 43.22 0 64.83.05-1.58 23.28-4.47 46.46-7.86 69.54-19.09.18-38.19 0-57.27.1-.17 68.67.09 137.33-.13 206-28.35.12-56.72-.05-85.07.08-.54-68.67 0-137.38-.29-206.07-13.83-.14-27.67.1-41.5-.12.05-23.09 0-46.17 0-69.25 13.82-.17 27.65 0 41.48-.1.42-22.44-.42-44.91.44-67.33 1.39-17.73 8.15-35.62 21.43-47.88z"
                fill="#d0d2d5"
                data-name="#020201ff"
              ></path>
            </svg>
          </router-link>
        </li>
        <li class="ml-4">
          <router-link :to="'/'">
            <svg
              class="cursor-pointer group"
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              viewBox="0 0 97.75 97.75"
            >
              <path
                class="transition group-hover:fill-white"
                fill="#d0d2d5"
                d="M46.77 47.62c.1-1.28.05-2.56.07-3.84l-.34-.08-1.75 4.94c1.8.53 1.91.51 2.02-1.02zm33.5 5.26c3.94-2 5.85-6.33 4.35-10.17-3.12 2.7-3.62 6.44-4.35 10.17zm-45-5.03c0-1.39-.06-2.69-.09-4l-.36-.09a26.41 26.41 0 0 0-1 2.55c-.36 1.45-.32 1.46 1.45 1.54z"
              ></path>
              <path
                fill="#d0d2d5"
                d="M48.88 0a48.88 48.88 0 1 0 48.87 48.88A48.88 48.88 0 0 0 48.88 0zM26.51 57.94c-.69.2-.91-.06-1.1-.71-1.11-3.69-2.28-7.36-3.48-11.23-.07.49-.15.9-.17 1.31-.12 2.23-.21 4.47-.33 6.7a4.21 4.21 0 0 1-.31 1.56 1.7 1.7 0 0 1-1 .75c-.53.16-1.15.06-1.68.22-1.37.41-2.11-.29-2.73-1.36-.77-1.31-1.59-2.6-2.39-3.89h-.17c.15 1.19.29 2.38.48 3.56a1.11 1.11 0 0 1-.76 1.34c-.13.05-.25.13-.38.18-2.65 1-3.16.66-3.58-2.11a64.13 64.13 0 0 1-.32-12 .94.94 0 0 1 .49-.65 5.76 5.76 0 0 1 1.43-.4c2-.32 2.47-.06 3.38 1.67l2.7 5.19c.12.23.27.46.45.76.41-1.92.69-3.73 1.19-5.49a44.27 44.27 0 0 1 1.81-4.87 1.28 1.28 0 0 1 1-.58 8.3 8.3 0 0 1 2.84.28 2.51 2.51 0 0 1 1.22 1.54c.6 2.08 1.07 4.19 1.56 6.3.85 3.69 1.67 7.38 2.53 11.18-.77.25-1.73.47-2.68.75zm5.08-1.38a5 5 0 0 1-2.51-4.67 27.33 27.33 0 0 1 .63-7.15c.53-1.89 1.84-3.09 3.23-4.35s2.73-.77 4.24-.51c1.67.29 2 1.39 2.05 2.72.13 2.33.59 4.65 0 7-.14.59-.32.89-.94.86l-5-.26a6.35 6.35 0 0 0 .71 4.51 2.52 2.52 0 0 0 3.58.93 3.3 3.3 0 0 1 3.88.85c-2.53 1.79-7.36 1.67-9.87.07zm15.79.79c-.76-.16-1.56-.15-2.31-.35a6 6 0 0 1-4.48-5.94 16.8 16.8 0 0 1 1.71-7.75 21 21 0 0 1 3.57-4.56c.23-.26 1-.26 1.4-.14A14.59 14.59 0 0 1 50 39.66a1.42 1.42 0 0 1 .65 1.08c-.08 1.51-.3 3-.44 4.52-.17 1.79-.31 3.58-.48 5.48-1.64 1-3.43.4-5.24.15-.58 1.77.25 3 1.27 4.19a2.57 2.57 0 0 0 3 .63 19.75 19.75 0 0 0 1.85-1 1.53 1.53 0 0 1 1-.09 1.43 1.43 0 0 1 1.19 1.48c-1.7.9-3.39 1.69-5.42 1.25zm16-8c-1.24.17-2.49.35-3.73.51-.44.06-.81 0-.76.71.09 1.19 0 2.4.06 3.6s.09 2.4.15 3.72l-2.83.47c-.08-1.4-.14-2.72-.23-4s-.21-2.67-.33-4.12c-.91-.05-1.75-.12-2.59-.14s-1.35-.26-1.27-1.16.64-1.19 1.47-1.14l2.17.1c-.29-2.79-.62-5.43-.82-8.07a57 57 0 0 1-.17-5.74c0-2 .92-2.5 2.76-1.68s1.79 1 1.75 3c-.07 3.11.12 6.23.16 9.35 0 .68-.2 1.37-.23 2.06a2.28 2.28 0 0 0 .29.81c.14-.22.4-.42.41-.65.06-.66.49-.91.92-.58 1.06.81 2 1.76 3 2.65zm8.14 6.75a3.14 3.14 0 0 1-1.39 1 11.52 11.52 0 0 1-2.85.25 2.11 2.11 0 0 1-2-1.77c-.56-2.51-1-5.06-1.4-7.6a10.92 10.92 0 0 1-.07-2.23c0-1.05.53-1.38 1.54-1.06.3.1.59.26.88.38 2 .86 1.91.92 1.93 3s.22 4.25.35 6.38a4.41 4.41 0 0 0 .25.82 8.59 8.59 0 0 0 2.93-7.07c0-.63-.22-1.26-.19-1.88A2.22 2.22 0 0 1 72 45c.18-.19.73-.15 1.06-.06a11.34 11.34 0 0 1 1.46.63 2.23 2.23 0 0 1 1.34 2.52c-.08 2.45-1.31 4.28-2.81 6-.59.72-1.05 1.44-1.58 2.04zm14.85-3.69c-1.37 1.16-2.75 2.33-4.2 3.4a8 8 0 0 1-2 .75c-.44 1.94-.18 4.72.88 9.08-1.1 0-2.19.1-3.27.06-.18 0-.45-.51-.5-.81-.4-2.62-.75-5.25-1.15-7.87a2.24 2.24 0 0 0-.6-1.23c-.92-.87-.85-1.53.29-2.12a1.13 1.13 0 0 0 .4-.75c.48-2.35.79-4.75 1.41-7.07A8.77 8.77 0 0 1 82.18 40a4.18 4.18 0 0 1 2.32-.15c.71.11 1.37.6 2.08.77 1.94.45 2.41 2 2.58 3.6.36 3.19-.28 6.07-2.84 8.22z"
              ></path>
            </svg>
          </router-link>
        </li>
      </ul>
    </div>
    <div class="xl:flex  justify-between text-sm text-primary">
      <div class="w-full xl:w-5/12">
        <div class="grid gap-8 grid-cols-2 xl:grid-cols-2">
          <div class="py-4">
            <h4 class="uppercase text-xs font-semibold">Provision</h4>
            <span class="block my-2 text-white capitalize"
              >multi-choice infrastructure</span
            >
            <ul class="flex items-center text-white font-semibold my-3">
              <svg
                class="mr-2"
                width="24"
                height="24"
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
              <router-link class="font-bold" :to="'/'">
                Terraform
              </router-link>
            </ul>
          </div>
          <div class="py-4">
            <h4 class="uppercase text-xs font-semibold">Secure</h4>
            <span class="block my-2 text-white capitalize"
              >multi-cloud security</span
            >
            <ul class="flex font-semibold items-center my-3">
              <svg
                width="24"
                height="24"
                viewBox="0 0 144 144"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  style="fill:white"
                  d="M16.88 21.15L71.8 131.4l55.321-110.25H16.881zm61.46 22.12h6.39v6.4h-6.39v-6.4zM65.61 68.84h-6.39v-6.39h6.39v6.39zm0-9.59h-6.39v-6.39h6.39v6.39zm0-9.58h-6.39v-6.4h6.39v6.4zm9.59 28.76h-6.4V72h6.4v6.43zm0-9.59h-6.4v-6.39h6.4v6.39zm0-9.59h-6.4v-6.39h6.4v6.39zm0-9.58h-6.4v-6.4h6.4v6.4zm3.14 3.19h6.39v6.39h-6.39v-6.39zm0 16v-6.41h6.39v6.39l-6.39.02z"
                  fill="#000"
                ></path>
              </svg>
              <router-link class="text-white font-semibold" :to="'/'">
                Vault
              </router-link>
            </ul>
          </div>
          <div class="py-4">
            <h4 class="uppercase text-xs font-semibold">Connect</h4>
            <span class="block my-2 text-white capitalize"
              >multi-cloud networking</span
            >
            <ul class="flex font-semibold items-center my-3">
              <svg
                class="mr-2"
                width="24"
                height="24"
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
              <router-link class="text-white font-semibold" :to="'/'">
                Consul
              </router-link>
            </ul>
          </div>
          <div class="py-4">
            <h4 class="uppercase text-xs font-semibold">Run</h4>
            <span class="block my-2 text-white capitalize"
              >multi-cloud ochestration</span
            >
            <ul class="flex font-semibold items-center my-3">
              <svg
                class="mr-2"
                width="24"
                height="24"
                viewBox="0 0 144 144"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M72 14L21.77 43v58L72 130l50.23-29V43L72 14zm22.38 63.78L81 85.51l-16.17-8.8v18.48l-15.2 9.64V66.19l12.06-7.38 16.73 8.82V48.76l16-9.59-.04 38.61z"
                  fill="#00CA8E"
                ></path>
              </svg>
              <router-link class="text-white font-semibold" :to="'/'">
                Nomad
              </router-link>
            </ul>
          </div>
        </div>
      </div>
      <div class="w-full xl:w-1/2">
        <div
          class="capitalize grid gap-3 grid-cols-2 lg:grid-cols-3 xl:grid-cols-3"
        >
          <div class="py-4">
            <h4 class="uppercase text-xs font-semibold">Products</h4>
            <router-link :to="'/'">
              <span class="block my-2 text-gray-300 hover:text-white capitalize"
                >terraform</span
              >
            </router-link>
            <router-link :to="'/'">
              <span class="block my-2 text-gray-300 hover:text-white capitalize"
                >vault</span
              >
            </router-link>
            <router-link :to="'/'">
              <span class="block my-2 text-gray-300 hover:text-white capitalize"
                >consul</span
              >
            </router-link>
            <router-link :to="'/'">
              <span class="block my-2 text-gray-300 hover:text-white capitalize"
                >nomad</span
              >
            </router-link>
            <router-link :to="'/'">
              <span class="block my-2 text-gray-300 hover:text-white capitalize"
                >vagant</span
              >
            </router-link>
            <router-link :to="'/'">
              <span class="block my-2 text-gray-300 hover:text-white capitalize"
                >packer</span
              >
            </router-link>
            <router-link class="flex items-center" :to="'/'">
              <span class="block my-2 text-gray-300 hover:text-white capitalize"
                >boundary</span
              >
              <span
                class="py-1 px-2 bg-footer-input text-xs tracking-widest font-semibold rounded-sm text-white uppercase ml-1"
                >new</span
              >
            </router-link>
            <router-link class="flex items-center" :to="'/'">
              <span class="block my-2 text-gray-300 hover:text-white capitalize"
                >waypoint</span
              >
              <span
                class="py-1 px-2 bg-footer-input text-xs tracking-widest font-semibold rounded-sm text-white uppercase ml-1"
                >new</span
              >
            </router-link>
            <router-link :to="'/'">
              <span class="block my-2 text-gray-300 hover:text-white capitalize"
                >sentinel</span
              >
            </router-link>
          </div>
          <div class="py-4">
            <h4 class="uppercase text-xs font-semibold">Resources</h4>
            <router-link :to="'/'">
              <span class="block my-2 text-gray-300 hover:text-white capitalize"
                >blog</span
              >
            </router-link>
            <router-link :to="'/'">
              <span class="block my-2 text-gray-300 hover:text-white capitalize"
                >tutorials</span
              >
            </router-link>
            <router-link :to="'/'">
              <span class="block my-2 text-gray-300 hover:text-white capitalize"
                >community</span
              >
            </router-link>
            <router-link :to="'/'">
              <span class="block my-2 text-gray-300 hover:text-white capitalize"
                >events</span
              >
            </router-link>
            <router-link :to="'/'">
              <span class="block my-2 text-gray-300 hover:text-white capitalize"
                >integrations</span
              >
            </router-link>
            <router-link :to="'/'">
              <span class="block my-2 text-gray-300 hover:text-white capitalize"
                >library</span
              >
            </router-link>
            <router-link class="flex items-center" :to="'/'">
              <span class="block my-2 text-gray-300 hover:text-white capitalize"
                >partners</span
              >
            </router-link>
            <router-link class="flex items-center" :to="'/'">
              <span class="block my-2 text-gray-300 hover:text-white capitalize"
                >podcast</span
              >
            </router-link>
            <router-link :to="'/'">
              <span class="block my-2 text-gray-300 hover:text-white capitalize"
                >support</span
              >
            </router-link>
            <router-link :to="'/'">
              <span class="block my-2 text-gray-300 hover:text-white capitalize"
                >training</span
              >
            </router-link>
          </div>
          <div class="py-4">
            <h4 class="uppercase text-xs font-semibold">Company</h4>
            <router-link :to="'/'">
              <span class="block my-2 text-gray-300 hover:text-white capitalize"
                >about us</span
              >
            </router-link>
            <router-link class="flex items-center" :to="'/'">
              <span class="block my-2 text-gray-300 hover:text-white capitalize"
                >jobs</span
              >
              <span
                class="py-1 px-2 bg-footer-input text-xs tracking-widest font-semibold rounded-sm text-white uppercase ml-1"
                >we're hiring</span
              >
            </router-link>
            <router-link :to="'/'">
              <span class="block my-2 text-gray-300 hover:text-white capitalize"
                >press center</span
              >
            </router-link>
            <router-link :to="'/'">
              <span class="block my-2 text-gray-300 hover:text-white capitalize"
                >brand</span
              >
            </router-link>
            <router-link :to="'/'">
              <span class="block my-2 text-gray-300 hover:text-white capitalize"
                >Contact us</span
              >
            </router-link>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {};
</script>

<style>
input[type="text"]::-webkit-input-placeholder {
  color: gray;
}
a:hover {
  text-decoration: none;
}
</style>
