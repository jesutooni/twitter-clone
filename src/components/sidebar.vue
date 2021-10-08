<template>
  <div class=" border-r border-cyan-200 py-2 h-screen relative">
      <div class="">
        <div class="h-12 w-12 hover:bg-blue-100 transition duration-200 ease-in-out text-3xl cursor-pointer text-blue-200 rounded-full flex justify-center items-center">
          <i class="fab fa-twitter"></i>
        </div>

        <!-- Navigation -->
        <div class="">
          <div v-for="nav in navs" :key="nav.id" class="group cursor-pointer">
            <div :class="`inline-flex  xl:px-4 py-2 mb-3 px-2.5 group-hover:bg-gray-200 transition duration-200 ease-in-out rounded-full ${ nav.id === 1  ? 'font-extrabold' : ''}`">
              <span class="iconify" :data-icon="nav.icon" data-width="26"></span>
              <p class="hidden xl:block text-lg text-left ml-4">{{ nav.title }}</p>
            </div>
          </div>
        </div>
        <button @click="openTweet" class="text-white bg-blue-200 rounded-full font-semibold w-12 h-12 xl:h-auto xl:w-3/4 p-3 hover:bg-blue-300 transition duration-200 ease-in-out">
          <span class="hidden xl:block">Tweet</span>
          <span class="iconify xl:hidden" data-icon="mdi:feather" data-width="28"></span>
        </button>
      </div>

      <button class="flex items-center justify-between xl:w-full hover:bg-gray-200 transition duration-200 ease-in-out rounded-full xl:p-2.5 absolute bottom-0">
        <div class="flex">
          <img src="../assets/profile-img.jpg" class="w-10 h-10 rounded-full" alt="">
          <div class="hidden xl:block ml-3 text-left">
            <p class="text-sm font-bold">TheToniGrapher</p>
            <p class="text-sm">@jesutooni_</p>
          </div>
        </div>
        <i class="fas fa-ellipsis-h hidden xl:block"></i>
      </button>
  </div>
</template>

<script>
export default {
    data() {
        return {
            navs: [
                {
                icon: "bx:bxs-home-circle",
                title: 'Home', 
                id: 1
                },
                {
                icon: 'feather:hash', 
                title: 'Explore', 
                id: 2
                },
                {
                icon: 'cil:bell', 
                title: 'Notifications', 
                id: 3
                },
                {
                icon: 'akar-icons:envelope', 
                title: 'Messages', 
                id: 4
                },
                {
                icon: 'bi:bookmark', 
                title: 'Bookmarks', 
                id: 5
                },
                {
                icon: 'fluent:text-bullet-list-square-20-regular', 
                title: 'Lists', 
                id: 6
                },
                {
                icon: 'fa-regular:user', 
                title: 'Profile', 
                id: 7
                },
                {
                icon: 'ph:dots-three-circle', 
                title: 'More', 
                id: 8
                }
            ]
        }
    },
    computed: {
      makeTweet() {
        return this.$store.state.makeTweet;
      }
    },
    methods: {
      openTweet() {
        this.$store.commit('openTweet');
      }
    }
}
</script>

<style scoped>

</style>