import Vue from 'vue';
import Vuex from 'vuex';

Vue.use(Vuex);

export const store = new Vuex.Store ({
    state: {
        makeTweet: false,
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
    },
    mutations: {
        openTweet: state => {
            state.makeTweet = true
        },
        closeTweet: state => {
            state.makeTweet = false
        }
    }
})