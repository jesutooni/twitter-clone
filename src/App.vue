<template>
  <div id="app" class="flex container h-screen w-full">
    <sidebar />
    <middle class="w-1/2" />
    <trends class="w-1/3 border border-2 border-red-700" />
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