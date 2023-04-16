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
  <section class="absolute z-30 m-auto h-full w-full overflow-hidden p-[20px_8%]">
    <img
      src="../assets/whykai-logo.png"
      class="m-auto w-80"
      alt="Why Kai"
    >
    <div class="absolute left-0 grid w-full grid-cols-6 gap-y-48 px-12">
      <button
        class="group relative col-span-1 col-start-1 text-3xl font-black uppercase"
        @click="setSection('about')"
      >
        <img
          src="../assets/about-figur.png"
          class="m-auto w-24 transition group-hover:opacity-20"
          alt=""
        >
        <span class="absolute left-0 top-[40%] h-full w-full opacity-0 transition group-hover:opacity-100">about</span>
      </button>
      <button
        class="group relative col-span-1 col-start-6 text-3xl font-black uppercase"
        @click="setSection('music')"
      >
        <img
          src="../assets/music-figur.png"
          class="m-auto w-24 transition group-hover:opacity-20"
          alt=""
        >
        <span class="absolute left-0 top-[40%] h-full w-full opacity-0 transition group-hover:opacity-100">music</span>
      </button>
      <button class="col-span-1 col-start-1 text-3xl font-black uppercase">
        <img
          src="../assets/contact-figur.png"
          class="m-auto w-24"
          alt=""
        >
      </button>
      <button class="col-span-1 col-start-6 text-3xl font-black uppercase">
        <img
          src="../assets/film-figur.png"
          class="m-auto w-24"
          alt=""
        >
      </button>
    </div>
    <About v-if="activeSection === 'about'" />
    <Music v-if="activeSection === 'music'" />
  </section>
</template>
