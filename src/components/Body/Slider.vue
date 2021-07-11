<template>
  <Carousel
    :items="1"
    :nav="false"
    :dots="false"
    :loop="true"
    :margin="0"
    :autoplay="true"
    :pullDrag="false"
    :touchDrag="false"
    :mouseDrag="false"
    :slideTransition="`linear`"
    :animateOut="'fadeOut'"
    :animateIn="'fadeIn'"
    @changed="animateContent"
  >
    <div
      class="carousel-1-div"
      style="background:url('https://www.datocms-assets.com/2885/1611862831-pandora-slide.jpg')"
    >
      <section class="py-10 px-20">
        <h4 class="text-white ">
          How are you
        </h4>
      </section>
      <div class="gradient"></div>
    </div>
    transition duration-500 ease-in-out bg-blue-600 hover:bg-red-600 transform hover:-translate-y-1 hover:scale-110 ...">
  Hover me
    <!-- <div
              class="carousel-1-div"
              style="background:url('https://www.datocms-assets.com/2885/1611862868-roblox-slide.jpg')"
            >
              <div class="px-8">
                <h4 class="text-white">Hello</h4>
              </div>
              <div class="gradient"></div>
            </div>
            <div
              class="carousel-1-div"
              style="background:url('https://www.datocms-assets.com/2885/1611862892-mercedes-slide.jpg')"
            >
              <div class="px-8">
                <h4 class="text-white">Yes</h4>
              </div>
              <div class="gradient"></div>
            </div> -->
  </Carousel>
</template>

<script>
export default {};
</script>

<style></style>
