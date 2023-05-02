<script setup>
import { ref, onMounted } from 'vue'
import About from '../components/About.vue'
import Music from '../components/Music.vue'
import Contact from '../components/Contact.vue'
import Videos from '../components/Videos.vue'

const activeSection = ref('')
const showButtons = ref(false)
const showVideo = ref(false)

const setSection = (section) => {
  activeSection.value === section ? activeSection.value = '' : activeSection.value = section
}

onMounted(() => {
  setTimeout(() => showButtons.value = true, 2000)
  setTimeout(() => showVideo.value = true, 300)
})

</script>

<template>
  <div
    class="fixed z-10 block aspect-video h-full w-full"
  >
    <div
      class="absolute z-20 h-full w-full bg-black transition-all duration-1000"
      :class="{'bg-black/10': showVideo}"
      @click="setSection('')"
    />
    <video
      autoplay
      muted
      loop
      playsinline
      class="h-full w-full overflow-hidden object-cover object-center"
    >
      <source
        src="../assets/whykai-video.mp4"
        type="video/mp4"
      >
    </video>
  </div>
  <section
    class="relative m-auto flex h-full w-full flex-auto flex-col justify-between gap-16 px-[3%] pb-8 md:overflow-hidden md:px-[8%] md:pb-12"
  >
    <img
      src="../assets/whykai-logo.png"
      class="relative z-30 mx-auto mt-8 w-60 opacity-90 md:mt-12 md:w-80"
      alt="Why Kai"
    >

    <About v-if="activeSection === 'about'" />
    <Music v-if="activeSection === 'music'" />
    <Contact v-if="activeSection === 'contact'" />
    <Videos v-if="activeSection === 'videos'" />

    <div
      class="z-30 flex w-full justify-center gap-4 opacity-0 transition-opacity duration-[3000ms] md:gap-16"
      :class="{'opacity-100': showButtons}"
    >
      <button
        class="relative text-base font-black uppercase tracking-widest text-gray-800 decoration-4 underline-offset-4 transition-all hover:underline focus-visible:ring md:text-xl"
        aria-label="Om"
        @click="setSection('about')"
      >
        About
      </button>
      <button
        class="relative text-base font-black uppercase tracking-widest text-gray-800 decoration-4 underline-offset-4 transition hover:underline focus-visible:ring md:text-xl"
        aria-label="Musikk"
        @click="setSection('music')"
      >
        Music
      </button>
      <button
        class="relative text-base font-black uppercase tracking-widest text-gray-800 decoration-4 underline-offset-4 transition hover:underline focus-visible:ring md:text-xl"
        aria-label="Video"
        @click="setSection('videos')"
      >
        Video
      </button>
      <button
        class="relative text-base font-black uppercase tracking-widest text-gray-800 decoration-4 underline-offset-4 transition hover:underline focus-visible:ring md:text-xl"
        aria-label="Kontakt"
        @click="setSection('contact')"
      >
        Contact
      </button>
    </div>
  </section>
</template>
