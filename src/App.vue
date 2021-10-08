<template>
  <div id="app" class="w-full flex justify-center">
    <div class="flex sm:max-w-screen-md md:max-w-screen-lg xl:max-w-screen-xl">
      <sidebar class="xl:w-1/5 "/>
      <middle class="w-1/2 flex-grow" />
      <trends class="w-1/3 flex-grow" />
    </div>
  </div>
</template>

<script>
import sidebar from './components/sidebar.vue';
import middle from './components/middle.vue';
import trends from './components/trends.vue';

export default {
  components: {
    sidebar,
    middle,
    trends
  }
  
}
</script>