<template>
    <div v-if="makeTweet" class="">
        <div class="bg-white rounded-2xl">
            <div @click="closeTweet" class="w-8 h-8 rounded-full flex justify-center items-center hover:bg-gray-200 transition duration-200 ease-in-out mx-2 my-1  cursor-pointer">
                <span class="iconify" data-icon="akar-icons:cross" data-width="19"></span>
            </div>
            <div class="flex px-5 py-3 border-t border-cyan-200">
                <div>
                    <img src="../assets/profile-img.jpg" alt="img" class="w-11 h-10 mt-1 rounded-full">
                </div>
                <form @submit.prevent="addTweet(); closeTweet();" class="w-full px-4 relative">
                    <input class="w-full mt-3 mb-10 pb-3 text-xl focus:outline-none" placeholder="What's happening?" v-model="createdTweet.tweet">
                    <div class="flex items-center mt-12 text-blue-200 border-b border-cyan-200 pb-3">
                        <i class="mr-2 fas fa-globe-americas"></i>
                        <p class="font-bold text-sm">Everyone can reply</p>
                    </div>
                    <div class="flex items-center justify-between mt-3">
                        <div class="text-lg flex text-blue-200">
                            <span class="iconify mx-2 cursor-pointer" data-icon="clarity:image-gallery-line" data-width="20"></span>
                            <span class="iconify mx-2 cursor-pointer" data-icon="fluent:gif-20-regular" data-width="20"></span>
                            <span class="iconify mx-2 cursor-pointer" data-icon="ph:chart-bar" data-width="20" data-rotate="90deg"></span>
                            <span class="iconify mx-2 cursor-pointer" data-icon="la:smile-solid" data-width="20"></span>
                            <span class="iconify mx-2 cursor-pointer" data-icon="tabler:calendar-time" data-width="20"></span>
                        </div>
                        <button type="submit" :disabled="!isDisabled" class="h-10 px-4 text-white font-semibold bg-blue-200 hover:bg-blue-300 focus:outline-none rounded-full">Tweet</button>
                    </div>
                </form>
            </div>
        </div>
        
    </div>
</template>

<script>
export default {
    data() {
        return {
            createdTweet: [
                {tweet: ''}
            ]
        }
    },
    methods: {
        addTweet () {
            let yourTweet = {
                tweet: this.createdTweet.tweet
            };
            this.newTweets.push (yourTweet);
            this.createdTweet.tweet = '';
        },
        closeTweet() {
            this.$store.commit('closeTweet');
        }
    },
    computed: {
        makeTweet() {
            return this.$store.state.makeTweet;
        },
        newTweets() {
           return this.$store.state.newTweets;
        },
        isDisabled() {
            return this.createdTweet.tweet;
        }
    }
}
</script>

<style scoped>

</style>