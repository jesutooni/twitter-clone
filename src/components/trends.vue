<template>
    <div class="h-full hidden lg:block border-l border-lighter px-8 py-2 relative">
        <div class="mb-4">
            <input type="text" class="rounded-full w-full p-2 pl-12 bg-cyan-100 focus:outline-none" placeholder="Search Twitter">
            <span class="iconify absolute left-0 top-0 mt-5 ml-12 text-cyan-400" data-icon="akar-icons:search"></span>
        </div>

      <!-- Trend Table -->
      <div class="w-full bg-cyan-100 rounded-2xl overflow-hidden">
        <div class="flex items-center justify-between p-3">
          <p class="text-lg font-bold">Trends for You</p>
          <span class="iconify text-lg" data-icon="bytesize:settings"></span>
        </div>
        <div v-for="trend in trends" :key="trend.topic" class="flex justify-between hover:bg-gray-200 transition duration-300 ease-in-out p-3 cursor-pointer">
          <div>
            <p class="text-sm text-cyan-400">{{ trend.top }}</p>
            <p class="text-sm font-bold">{{ trend.topic }}</p>
            <p class="text-sm text-cyan-400">{{ trend.bottom }}</p>
          </div>
          <div class="h-8 w-8 rounded-full flex justify-center items-center">
            <i class="fas fa-ellipsis-h"></i>
          </div>
        </div>
        <div class="p-4 hover:bg-cyan-200 text-blue-200 cursor-pointer">Show more</div>
      </div>
      
      <!-- Follow Suggestions -->
      <div class="w-full bg-cyan-100 rounded-2xl overflow-hidden mt-4">
        <div class="p-3">
          <p class="text-lg font-bold">Who to follow</p>
        </div>
        <div v-for="follow in Follows" :key="follow.name" class="flex hover:bg-gray-200 p-3 transition duration-300 ease-in-out cursor-pointer">
            <div class="flex">
            <img :src="follow.src" class="w-12 h-12 rounded-full" alt="">
            <div class="block ml-3 text-left">
              <p class="text-sm font-bold">{{ follow.name }}</p>
              <p class="text-sm">@{{ follow.username }}</p>
            </div>
          </div>
          <button class="text-sm text-white bg-black font-extrabold px-4 rounded-full border-2 ml-auto">Follow</button>
        </div>
        <div class="p-4 hover:bg-cyan-200 text-blue-200 cursor-pointer">Show more</div>
      </div>
    </div>
    
</template>

<script>
export default {
    data() {
        return {
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
            ],
            Follows: [
                {name: 'HNG Internship 8.0', username: 'hnginternship', src: require('../assets/hng.jpg')},
                {name: 'Dr. Chinonso Egemba', username: 'aproko_doctor', src: require('../assets/aproko_doctor.jpg')},
                {name: 'Pastor Emmanuel Iren', username: 'pst_iren', src: require('../assets/pst_iren.jpg')}
            ]
        }
    }
}
</script>