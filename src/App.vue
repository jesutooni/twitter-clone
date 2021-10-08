<template>
  <div id="app" class="w-full flex justify-center">
    <div class="flex sm:max-w-screen-md md:max-w-screen-lg xl:max-w-screen-xl">
      <sidebar class="xl:w-1/5 "/>
      <middle class="w-1/2 flex-grow" />
      <trends class="w-1/3 flex-grow" />
    </div>
    <tweet class="absolute sm:w-4/5 md:w-3/5 lg:w-1/2 xl:w-2/5 top-14 z-20" />
    <div v-if="makeTweet" @click="closeTweet" class="absolute inset-0 bg-gray-900 opacity-70 z-10"></div>
  </div>
</template>

<script>
import sidebar from './components/sidebar.vue';
import middle from './components/middle.vue';
import trends from './components/trends.vue';
import tweet from './components/tweet.vue'

export default {
  components: {
    sidebar,
    middle,
    trends,
    tweet
  },
  computed: {
    makeTweet() {
      return this.$store.state.makeTweet
    }
  },
  methods: {
    closeTweet() {
      this.$store.commit('closeTweet');
    }
  }
}
</script>

<style scoped>

</style>