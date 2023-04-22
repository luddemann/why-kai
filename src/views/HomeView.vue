<script setup>
import { ref, onMounted } from 'vue'
import About from '../components/About.vue'
import Music from '../components/Music.vue'
import Contact from '../components/Contact.vue'
import Videos from '../components/Videos.vue'

const activeSection = ref('')
const showButtons = ref(false)

const setSection = (section) => {
  activeSection.value === section ? activeSection.value = '' : activeSection.value = section
}

onMounted(() => {
  setTimeout(() => showButtons.value = true, 2000)
})

</script>

<template>
  <div
    class="fixed z-10 block aspect-video h-full w-full"
  >
    <div
      class="absolute z-20 h-full w-full bg-black/10"
      @click="setSection('')"
    />
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
  <section
    class="relative m-auto flex h-screen max-h-screen w-full flex-col justify-between gap-8 p-[10px_3%] md:overflow-hidden md:p-[20px_8%]"
  >
    <img
      src="../assets/whykai-logo.png"
      class="relative z-30 mx-auto my-0 w-72"
      alt="Why Kai"
    >

    <About v-if="activeSection === 'about'" />
    <Music v-if="activeSection === 'music'" />
    <Contact v-if="activeSection === 'contact'" />
    <Videos v-if="activeSection === 'videos'" />

    <div
      class="z-30 flex w-full justify-center gap-8 opacity-0 transition-opacity duration-[3000ms] md:gap-24"
      :class="{'opacity-100': showButtons}"
    >
      <button
        class="group relative text-3xl font-black uppercase transition focus-visible:ring md:col-span-1 md:col-start-1"
        @click="setSection('about')"
      >
        <img
          src="../assets/about-figur.png"
          class="m-auto w-16 transition duration-500 group-hover:opacity-20 group-focus-visible:opacity-20"
          alt=""
        >
        <span class="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 text-base opacity-0 transition duration-500 group-hover:opacity-100 group-focus-visible:opacity-100 md:text-2xl">about</span>
      </button>
      <button
        class="group relative text-3xl font-black uppercase transition focus-visible:ring md:col-span-1 md:col-start-6"
        @click="setSection('music')"
      >
        <img
          src="../assets/music-figur.png"
          class="m-auto w-16 transition duration-500 group-hover:opacity-20 group-focus-visible:opacity-20"
          alt=""
        >
        <span class="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 text-base opacity-0 transition duration-500 group-hover:opacity-100 group-focus-visible:opacity-100 md:text-2xl">music</span>
      </button>
      <button
        class="group relative text-3xl font-black uppercase transition focus-visible:ring md:col-span-1 md:col-start-6"
        @click="setSection('videos')"
      >
        <img
          src="../assets/film-figur.png"
          class="m-auto w-14 transition duration-500 group-hover:opacity-20 group-focus-visible:opacity-20"
          alt=""
        >
        <span class="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 text-base opacity-0 transition duration-500 group-hover:opacity-100 group-focus-visible:opacity-100 md:text-2xl">videos</span>
      </button>
      <button
        class="group relative text-3xl font-black uppercase transition focus-visible:ring md:col-span-1 md:col-start-1"
        @click="setSection('contact')"
      >
        <img
          src="../assets/contact-figur.png"
          class="m-auto w-16 transition duration-500 group-hover:opacity-20 group-focus-visible:opacity-20"
          alt=""
        >
        <span class="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 text-base opacity-0 transition duration-500 group-hover:opacity-100 group-focus-visible:opacity-100 md:text-2xl">contact</span>
      </button>
    </div>
  </section>
</template>
