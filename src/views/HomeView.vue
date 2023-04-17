<script setup>
import { ref } from 'vue'
import About from '../components/About.vue'
import Music from '../components/Music.vue'

const activeSection = ref('')

const setSection = (section) => {
  activeSection.value === section ? activeSection.value = '' : activeSection.value = section
}

</script>

<template>
  <div class="fixed z-10 block aspect-video h-full w-full">
    <div class="absolute z-20 h-full w-full bg-gray-900/10" />
    <video
      autoplay
      muted
      loop
      class="h-full w-full overflow-hidden object-cover object-center"
    >
      <source
        src="../assets/whykai-video.mp4"
        type="video/mp4"
      >
    </video>
  </div>
  <section class="absolute z-30 m-auto h-full w-full p-[10px_3%] md:overflow-hidden md:p-[20px_8%]">
    <img
      src="../assets/whykai-logo.png"
      class="m-auto -mt-10 w-80"
      alt="Why Kai"
    >
    <div class="absolute left-0 -mt-12 grid w-full grid-cols-4 gap-x-4 gap-y-[40%] md:mt-0 md:grid-cols-6 md:px-12">
      <button
        class="group relative text-3xl font-black uppercase transition focus-visible:ring md:col-span-1 md:col-start-1"
        @click="setSection('about')"
      >
        <img
          src="../assets/about-figur.png"
          class="m-auto w-12 transition duration-500 group-hover:opacity-20 group-focus-visible:opacity-20 md:w-24"
          alt=""
        >
        <span class="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 text-base opacity-0 transition duration-500 group-hover:opacity-100 group-focus-visible:opacity-100 md:text-5xl">about</span>
      </button>
      <button
        class="group relative text-3xl font-black uppercase transition focus-visible:ring md:col-span-1 md:col-start-6"
        @click="setSection('music')"
      >
        <img
          src="../assets/music-figur.png"
          class="m-auto w-12 transition duration-500 group-hover:opacity-20 group-focus-visible:opacity-20 md:w-24"
          alt=""
        >
        <span class="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 text-base opacity-0 transition duration-500 group-hover:opacity-100 group-focus-visible:opacity-100 md:text-5xl">music</span>
      </button>
      <button class="text-3xl font-black uppercase transition focus-visible:ring md:col-span-1 md:col-start-1">
        <img
          src="../assets/contact-figur.png"
          class="m-auto w-12 md:w-24"
          alt=""
        >
      </button>
      <button class="text-3xl font-black uppercase transition focus-visible:ring md:col-span-1 md:col-start-6">
        <img
          src="../assets/film-figur.png"
          class="m-auto w-12 md:w-24"
          alt=""
        >
      </button>
    </div>
    <About v-if="activeSection === 'about'" />
    <Music v-if="activeSection === 'music'" />
  </section>
</template>
