<template>
  <div id="app" class="flex justify-center">
    <div class="flex max-w-screen-xl">
      <sidebar class="1/4 flex-grow"/>
      <middle class="w-2/5 flex-grow" />
      <trends class="w-1/4 flex-grow" />
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