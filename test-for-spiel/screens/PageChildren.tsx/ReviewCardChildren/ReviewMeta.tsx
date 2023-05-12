import { ReviewBrowse } from '../../../types/reviewTypes';
import { PixelRatio, StyleSheet, Text, View, Image, Pressable } from 'react-native';
import { CONSTANTS }  from '../CONSTANTS';
import { MessageIcon, BookmarkIcon } from '../../../assets/svg';

interface ReviewMetaProps {
  review: ReviewBrowse;
}


const ReviewMeta: React.FC<ReviewMetaProps> = (props) =>{
    const review: ReviewBrowse = props.review;
  return (
    <View style={styles.container}>
        <Image 
          style={styles.user1}
          source={require('../../../assets/images/User-1.png')} />
        <Image
          style={styles.user2}
          source={require('../../../assets/images/User-2.png')}  />
        <Image
          style={styles.user3}
          source={require('../../../assets/images/User-3.png')}  />
        <View style={styles.avgTextWrapper}>
          <Text style={styles.avgText}>Friend avg: + {review.friendAvg}/10</Text>
        </View>
        <Pressable>
            <View style={styles.messageIcon}>
            <MessageIcon />
            </View>
            <View style={styles.messageTextWrapper}>
              <Text style={styles.numericText}>{review.commentCount}</Text>
            </View>
        </Pressable>
        <Pressable>
            <View style={styles.bookmarkIcon}>
            <BookmarkIcon />
            </View>
            <View style={styles.bookmarkTextWrapper}>
            <Text style={styles.numericText}>{review.bookmarkCount}</Text>
            </View>
        </Pressable>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    position: 'absolute',
    top: PixelRatio.getPixelSizeForLayoutSize(700)-CONSTANTS.STATUS_BAR_HEIGHT-CONSTANTS.UPPER_NAV_BAR_HEIGHT,
    left: PixelRatio.getPixelSizeForLayoutSize(24),
  
  },
  user1: {
    position: 'absolute',
    height: PixelRatio.getPixelSizeForLayoutSize(32),
    width: PixelRatio.getPixelSizeForLayoutSize(32),
    left: PixelRatio.getPixelSizeForLayoutSize(48),
    top: 0,
    zIndex: 2
  },
  user2: {
    position: 'absolute',
    height: PixelRatio.getPixelSizeForLayoutSize(32),
    width: PixelRatio.getPixelSizeForLayoutSize(32),
    left: PixelRatio.getPixelSizeForLayoutSize(24),
    top: 0,
    zIndex:1
  },
  user3: {
    position: 'absolute',
    height: PixelRatio.getPixelSizeForLayoutSize(32),
    width: PixelRatio.getPixelSizeForLayoutSize(32),
    left: PixelRatio.getPixelSizeForLayoutSize(0),
    top: 0
  },
  avgText: {
    position: 'absolute',
    fontSize: PixelRatio.getPixelSizeForLayoutSize(12),
    fontFamily: "Nunito"
  },
  avgTextWrapper: {
    position: 'absolute',
    left: PixelRatio.getPixelSizeForLayoutSize(112)-CONSTANTS.UNIVERSAL_LEFT_MARGIN,
    width: PixelRatio.getPixelSizeForLayoutSize(114),
    top: PixelRatio.getPixelSizeForLayoutSize(8),
    backgroundColor: 'pink',

},
  messageIcon: {
    position: 'absolute',
    left: PixelRatio.getPixelSizeForLayoutSize(263)-CONSTANTS.UNIVERSAL_LEFT_MARGIN,
    top:PixelRatio.getPixelSizeForLayoutSize(8),
    zIndex:3 
  },
  messageTextWrapper: {
    position: 'absolute',
    left: PixelRatio.getPixelSizeForLayoutSize(288)-CONSTANTS.UNIVERSAL_LEFT_MARGIN,
    fontSize: PixelRatio.getPixelSizeForLayoutSize(12),
    top:PixelRatio.getPixelSizeForLayoutSize(8),
    fontFamily: "Nunito"
  },
  bookmarkIcon: {
    position: 'absolute',
    left: PixelRatio.getPixelSizeForLayoutSize(325)-CONSTANTS.UNIVERSAL_LEFT_MARGIN,
    top:PixelRatio.getPixelSizeForLayoutSize(8),
  },
  bookmarkTextWrapper: {
    position: 'absolute',
    left: PixelRatio.getPixelSizeForLayoutSize(349)-CONSTANTS.UNIVERSAL_LEFT_MARGIN,
    top:PixelRatio.getPixelSizeForLayoutSize(8),
  },
  numericText: {
    position: 'absolute',
    fontSize: PixelRatio.getPixelSizeForLayoutSize(12),
    fontFamily: "Nunito"
  }
})
  
  

export default ReviewMeta;