//utilities
import React from 'react';
import { StatusBar } from 'expo-status-bar';
import { SafeAreaView, PixelRatio, StyleSheet, Text, View, Button,
  Platform, } from 'react-native';
//types
import { ReviewBrowse} from '../types/reviewTypes';
import { ReviewUser } from '../types/userTypes';
//child components
import UpperNavBar from './PageChildren.tsx/UpperNavBar';
import Navbar from './PageChildren.tsx/Navbar';
import ReviewCard from './PageChildren.tsx/ReviewCard';
import { CONSTANTS } from './PageChildren.tsx/CONSTANTS';
import { UpperNavDropIcon } from '../assets/svg';

//type declarations for Page and Review Props
//The props are not actually used. But they'd have been used IRL to pass the review feeds
export interface PageProps {
  feed: ReviewBrowse[]
}
export interface ReviewProps {
  review: ReviewBrowse
}

//manually populate review content which would've been fetched from Redux IRL
const currUser: ReviewUser = {
  userID: "1",
  userName: "David Keating",
  userHandle: "@out_in_the_outback",
  profilePic: new URL("https://i.imgur.com/0y8Ftya.jpg"),
  lastActive: "4hr"
  }

const currReview: ReviewBrowse = {
  id: "2",
  user: currUser,
  postedTime: new Date(),
  restaurantPic: new URL("https://i.imgur.com/0y8Ftya.jpg"),
  restaurantName: "La Ristorante",
  restaurantLocation: "New York, NY • Place",
  score: 10,
  reviewTitle: "One of my fav places of all time!",
  reviewBody: "I've been here about 1500 times in my life. Small gig, family-owned. Love the mom & pop who r...",
  bookmarkCount: 32,
  commentCount: 25,
  friendAvg:8.6
}

//actually passed into Page component instead of props
const currFeed: ReviewBrowse[] = [
  currReview
]

export const Page: React.FC<PageProps> = (props) =>{
    const feed=currFeed
  return (
    <SafeAreaView style={styles.container}>
          <StatusBar style={styles.statusBar} />
          <UpperNavBar style={styles.upperNavBar} />
          {/* This review card would've been in a flatlist IRL, since we'd be scrolling many review cards */}
          <ReviewCard review={feed[0]} style={styles.reviewCard} />  
          <Navbar style={styles.navBar}/>  

    </SafeAreaView>
  );
}



const styles = StyleSheet.create({
  container: {
    position: 'relative',
    width: CONSTANTS.SCREEN_WIDTH,
    height: CONSTANTS.SCREEN_HEIGHT,
    backgroundColor: 'white',
    fontFamily: 'Nunito',
  },
  statusBar: {
    width: CONSTANTS.SCREEN_WIDTH,
    height: CONSTANTS.STATUS_BAR_HEIGHT
  },
  upperNavBar: {
    position: 'absolute',
    width: CONSTANTS.SCREEN_WIDTH,
    height: CONSTANTS.UPPER_NAV_BAR_HEIGHT
  },
  reviewCard: {
    position: 'absolute',
    width: CONSTANTS.SCREEN_WIDTH,
    height: CONSTANTS.REVIEW_CARD_HEIGHT,
    top: CONSTANTS.UPPER_NAV_BAR_HEIGHT+CONSTANTS.STATUS_BAR_HEIGHT,
    backgroundColor:"powderblue"
  },
  navBar:{
    position: 'absolute',
    width:CONSTANTS.SCREEN_WIDTH,
    height: CONSTANTS.NAV_BAR_HEIGHT,
  }
 

});

export default Page