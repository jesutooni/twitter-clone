<template>
  <div id="app" class="flex container h-screen w-full">

    <!-- Side bar -->
    <div class="lg:w-1/4 border-r border-lighter px-2 lg:px-8 py-2 flex justify-center lg:justify-end">
      <div class="w-3/4 flex flex-col justify-between">
        <div>
          <div class="h-12 w-12 hover:bg-blue-100 text-3xl cursor-pointer text-blue-200 rounded-full flex justify-center items-center">
            <i class="fab fa-twitter"></i>
          </div>

          <!-- Navigation -->
          <div>
            <button v-for="nav in navs" :key="nav.id" :class="`flex items-center py-2 px-4 mb-3 hover:bg-gray-200 rounded-full mr-auto ${ nav.id === 1  ? 'font-extrabold' : ''}`">
              <span class="iconify mr-4" :data-icon="nav.icon" data-width="26"></span>
              <p class="hidden lg:block text-lg text-left">{{ nav.title }}</p>
            </button>
          </div>
          <button class="text-white bg-blue-200 rounded-full font-semibold w-12 h-12 lg:h-auto lg:w-full p-3 hover:bg-blue-300">
            <span class="hidden lg:block">Tweet</span>
            <span class="iconify lg:hidden" data-icon="mdi:feather" data-width="28"></span>
          </button>
        </div>

        <button class="flex items-center justify-between lg:w-full hover:bg-gray-200 rounded-full p-2.5">
          <div class="flex">
            <img src="./assets/profile-img.jpg" class="w-10 h-10 rounded-full" alt="">
            <div class="hidden lg:block ml-3 text-left">
              <p class="text-sm font-bold">TheToniGrapher</p>
              <p class="text-sm">@jesutooni_</p>
            </div>
          </div>
          <i class="fas fa-ellipsis-h hidden lg:block"></i>
        </button>
      </div>
    </div>

    <!-- Main Section -->
    <main class="w-1/2 h-full"></main>

    <!-- Aside Section -->
    <aside class="w-1/3 h-full border-l border-lighter px-8 py-2 relative">
      <input type="text" class="rounded-full w-full p-2 pl-12 bg-cyan-100 focus:outline-none mb-4" placeholder="Search Twitter">
      <span class="iconify absolute left-0 top-0 mt-5 ml-12 text-cyan-400" data-icon="akar-icons:search"></span>

      <!-- Trend Table -->
      <div class="w-full bg-cyan-100 rounded-2xl overflow-hidden">
        <div class="flex items-center justify-between p-3">
          <p class="text-lg font-bold">Trends for You</p>
          <span class="iconify text-lg" data-icon="bytesize:settings"></span>
        </div>
        <div v-for="trend in trends" :key="trend.topic" class="flex justify-between hover:bg-gray-200 p-3 cursor-pointer">
          <div>
            <p class="text-sm text-cyan-400">{{ trend.top }}</p>
            <p class="text-sm font-bold">{{ trend.topic }}</p>
            <p class="text-sm text-cyan-400">{{ trend.bottom }}</p>
          </div>
          <div class="h-8 w-8 hover:bg-blue-100 rounded-full flex justify-center items-center">
            <i class="fas fa-ellipsis-h"></i>
          </div>
        </div>
        <div class="p-4 hover:bg-cyan-200 text-blue-200 cursor-pointer">Show more</div>
      </div>
      
    </aside>
    
  </div>
</template>

<script>

export default {
  name: 'App',
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
      ],
      trends: [
        {
          top: 'Trending in Nigeria', topic: '#TwitterBan', bottom: '9,334 Tweets'
        },
        {
          top: 'Football', topic: 'Manchester United', bottom: '25.8K Tweets'
        },
        {
          top: 'Movies & TV', topic: '#BBNaijaShineYaEye', bottom: '11K Tweets'
        },
        {
          top: 'Trending in Nigeria', topic: 'David Hundeyin', bottom: '30.6k Tweets'
        },
        {
          top: 'Movies', topic: '#SquidGames', bottom: '8744 Tweets'
        }
      ]
    }
  }
}
</script>

<style>

</style>
