<template>
  <div id="app" class="flex container h-screen w-full">

    <!-- Side bar -->
    <div class="w-1/4 border-r border-lighter p-8 py-2 flex justify-end">
      <div class="w-3/4">
        <div class="h-12 w-12 hover:bg-blue-100 text-3xl cursor-pointer text-blue-200 rounded-full flex justify-center items-center">
        <i class="fab fa-twitter"></i>
      </div>

        <!-- Navigation -->
        <div>
          <button v-for="nav in navs" :key="nav.id" :class="`flex items-center py-2 px-4 mb-3 hover:bg-gray-200 rounded-full mr-auto ${ nav.id === 1  ? 'font-extrabold' : ''}`">
            <i :class="`${ nav.icon } text-2xl mr-4 text-left w-8`"></i>
            <p class="text-lg text-left">{{ nav.title }}</p>
          </button>
        </div>
        <button class="text-white bg-blue-200 rounded-full font-semibold w-full p-3 hover:bg-blue-300">Tweet</button>
      </div>
    </div>
  </div>
</template>

<script>

export default {
  name: 'App',
  data() {
    return {
      navs: [
        {
          icon: 'fas fa-home',
          title: 'Home', 
          id: 1
        },
        {
          icon: 'fas fa-hashtag', 
          title: 'Explore', 
          id: 2
        },
        {
          icon: 'far fa-bell', 
          title: 'Notifications', 
          id: 3
        },
        {
          icon: 'far fa-envelope', 
          title: 'Messages', 
          id: 4
        },
        {
          icon: 'far fa-bookmark', 
          title: 'Bookmarks', 
          id: 5
        },
        {
          icon: 'far fa-list-alt', 
          title: 'Lists', 
          id: 6
        },
        {
          icon: 'far fa-user', 
          title: 'Profile', 
          id: 7
        },
        {
          icon: 'fas fa-ellipsis-h', 
          title: 'More', 
          id: 8
        }
      ]
    }
  }
}
</script>

<style>

</style>
