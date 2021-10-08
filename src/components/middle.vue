<template>
    <div class="h-screen overflow-auto">
        <div class="px-5 py-3 border-b border-cyan-200 flex items-center justify-between">
            <h1 class="text-xl font-bold">Home</h1>
            <div class="h-8 w-8 hover:bg-gray-200 transition duration-200 ease-in-out cursor-pointer rounded-full flex justify-center items-center">
                <span class="iconify text-xl" data-icon="majesticons:sparkles-line"></span>
            </div>
        </div>

        <div class="px-5 py-3 border-b border-cyan-200 flex">
            <div>
                <img src="../assets/profile-img.jpg" alt="img" class="w-11 h-10 mt-1 rounded-full">
            </div>
            <form @submit.prevent="addTweet" class="w-full px-4 relative">
                <input class="w-full mt-3 pb-3 text-xl focus:outline-none" placeholder="What's happening?" v-model="createdTweet.tweet" @focus="inputOnFocus">
                <div v-if="inputFocus" class="flex items-center text-blue-200 border-b border-cyan-200 pb-3">
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
        <div class="flex flex-col-reverse">
            <div v-for="tweets in newTweets" :key="tweets.tweet" class="w-full p-4 border-b cursor-pointer hover:bg-cyan-100 flex">
                <div class="flex-none mr-4">
                    <img src="../assets/profile-img.jpg" alt="" class="h-12 w-12 rounded-full flex-none">
                </div>
                <div class="w-full">
                    <div class="flex items-center w-full">
                        <p class="font-bold">TheToniGrapher</p>
                        <p class="text-sm text-cyan-400 ml-2">@jesutooni_</p>
                        <span class="iconify text-cyan-400" data-icon="entypo:dot-single" data-width="15"></span>
                        <p class="text-sm text-cyan-400">Now</p>
                        <i class="fas fa-ellipsis-h text-cyan-400 ml-auto"></i>
                    </div>
                    <p>{{ tweets.tweet }}</p>
                    <div class="w-4/5 flex items-center justify-between mt-4">
                        <div class="flex items-center text-sm text-cyan-400 group">
                            <span class="iconify mr-2.5 group-hover:text-blue-400" data-icon="ri:chat-1-line" data-width="21" data-flip="horizontal"></span>
                        </div>
                        <div class="flex items-center text-sm text-cyan-400 group">
                            <span class="iconify mr-2.5 group-hover:text-green-400" data-icon="system-uicons:retweet" data-width="21"></span>
                        </div>
                        <div class="flex items-center text-sm text-cyan-400 group">
                            <i class="far fa-heart mr-2.5 group-hover:text-pink-500"></i>
                        </div>
                        <div class="flex items-center text-sm text-cyan-400 group">
                            <span class="iconify group-hover:text-blue-400" data-icon="iconoir:share-ios" data-width="21"></span>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <div v-for="tweets in timelineTweets" :key="tweets.tweet" class="w-full p-4 border-b cursor-pointer hover:bg-cyan-100 flex">
            <div class="flex-none mr-4">
                <img :src="tweets.src" alt="" class="h-12 w-12 rounded-full flex-none">
            </div>
            <div class="w-full">
                <div class="flex items-center w-full">
                    <p class="font-bold">{{ tweets.name }}</p>
                    <p class="text-sm text-cyan-400 ml-2">@{{ tweets.username }}</p>
                    <span class="iconify text-cyan-400" data-icon="entypo:dot-single" data-width="15"></span>
                    <p class="text-sm text-cyan-400">{{ tweets.tweetTime }}</p>
                    <i class="fas fa-ellipsis-h text-cyan-400 ml-auto"></i>
                </div>
                <p>{{ tweets.tweet }}</p>
                <div class="w-4/5 flex items-center justify-between mt-4">
                    <div class="flex items-center text-sm text-cyan-400 group">
                        <span class="iconify mr-2.5 group-hover:text-blue-400" data-icon="ri:chat-1-line" data-width="21" data-flip="horizontal"></span>
                        <p class="group-hover:text-blue-400">{{ tweets.replies }}</p>
                    </div>
                    <div class="flex items-center text-sm text-cyan-400 group">
                        <span class="iconify mr-2.5 group-hover:text-green-400" data-icon="system-uicons:retweet" data-width="21"></span>
                        <p class="group-hover:text-green-400">{{ tweets.retweets }}</p>
                    </div>
                    <div class="flex items-center text-sm text-cyan-400 group">
                        <i class="far fa-heart mr-2.5 group-hover:text-pink-500"></i>
                        <p class="group-hover:text-pink-500">{{ tweets.likes }}</p>
                    </div>
                    <div class="flex items-center text-sm text-cyan-400 group">
                        <span class="iconify group-hover:text-blue-400" data-icon="iconoir:share-ios" data-width="21"></span>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    data() {
        return {
            inputFocus: false,
            timelineTweets: [
                {
                    src: require('../assets/ejiro.jpg'),
                    name: 'uncle eru', 
                    username: 'EjiroOloko', 
                    tweetTime: '6h', 
                    tweet: 'masters in canada this time next year sha. ' + 'God of convocation, nysc and apple go run am normal', 
                    replies: '', 
                    retweets: '2', 
                    likes: '1'
                },
                {
                    src: require('../assets/fact.jpg'),
                    name: 'Fact', 
                    username: 'Fact', 
                    tweetTime: '8h', 
                    tweet: "Some friends aren't really friends... They're family.", 
                    replies: '233', 
                    retweets: '1.7K', 
                    likes: '2.8K'
                },
                {
                    src: require('../assets/joseph.jpg'),
                    name: 'Jay', 
                    username: 'josephetb_', 
                    tweetTime: '13h', 
                    tweet: 'I could do a hundred good things and only be remembered for one bad thing', 
                    replies: '4', 
                    retweets: '22', 
                    likes: '37'
                },
                {
                    src: require('../assets/triumph.jpg'),
                    name: 'Triumph Urias', 
                    username: 'mista_triumph', 
                    tweetTime: 'Oct 4', 
                    tweet: 'Omo e be like na until tomorrow with this WhatsApp issue oh...', 
                    replies: '', 
                    retweets: '', 
                    likes: '3'
                },
                {
                    src: require('../assets/tobi.jpg'),
                    name: 'T.', 
                    username: 'tobiojenike', 
                    tweetTime: 'Oct 5', 
                    tweet: 'Slow music and wine >>>', 
                    replies: '6', 
                    retweets: '24', 
                    likes: '55'
                },
                {
                    src: require('../assets/olise.jpg'),
                    name: 'Eden', 
                    username: 'oliseyenum_', 
                    tweetTime: 'Oct 4', 
                    tweet: 'I need brentford to win this game please', 
                    replies: '3', 
                    retweets: '12', 
                    likes: '17'
                },
                {
                    src: require('../assets/profile-img.jpg'),
                    name: 'TheToniGrapher', 
                    username: 'jesutooni_', 
                    tweetTime: 'Oct 2', 
                    tweet: 'I think I should clone twitter', 
                    replies: '4', 
                    retweets: '17', 
                    likes: '24'
                }
            ],
            newTweets: [
                {tweet: 'You can tweet on my behalf as well. Try it'}
            ],
            createdTweet: [
                {tweet: ''}
            ]
        }
    },
    methods: {
        inputOnFocus() {
            this.inputFocus = true
        },
        addTweet () {
            let yourTweet = {
                tweet: this.createdTweet.tweet
            };
            this.newTweets.push (yourTweet);
            this.createdTweet.tweet = ''
        }
    },
    computed: {
        isDisabled() {
            return this.createdTweet.tweet;
        }
    }
}
</script>

<style scoped>

</style>