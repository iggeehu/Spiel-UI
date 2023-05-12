import { ReviewUser } from "./userTypes";

//different interfaces representing the review
export interface ReviewBrowse {
    id: string,
    user: ReviewUser,
    postedTime: Date,
    restaurantPic: URL,
    restaurantName: string,
    restaurantLocation: string,
    score: number,
    reviewTitle: string,
    reviewBody: string,
    bookmarkCount: number,
    commentCount: number,
    friendAvg: number,
  }
  

  
