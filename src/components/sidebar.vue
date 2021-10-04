<template>
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
            <img src="../assets/profile-img.jpg" class="w-10 h-10 rounded-full" alt="">
            <div class="hidden lg:block ml-3 text-left">
              <p class="text-sm font-bold">TheToniGrapher</p>
              <p class="text-sm">@jesutooni_</p>
            </div>
          </div>
          <i class="fas fa-ellipsis-h hidden lg:block"></i>
        </button>
      </div>
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
    }
}
</script>

<style scoped>

</style>