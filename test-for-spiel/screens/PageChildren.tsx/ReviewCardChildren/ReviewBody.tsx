import { StyleSheet, Text, View, PixelRatio, Image } from 'react-native';
import { CONSTANTS } from '../CONSTANTS';
import { ReviewBrowse } from '../../../types/reviewTypes';
import { Svg } from 'react-native-svg';
import { MapIcon } from '../../../assets/svg';

interface ReviewBodyProps  {
    review: ReviewBrowse,
}



const ReviewBody: React.FC<ReviewBodyProps> = (props) =>{
    const review: ReviewBrowse = props.review;
  return (
    <View style={styles.container}>
        <Image 
          style={styles.restoImg}
          source={require('../../../assets/images/resto-pic.png')} />
        <Text style={styles.restoName}>{review.restaurantName}</Text>
        <Text style={styles.restoLocation}>{review.restaurantLocation}</Text>
        <View style={styles.mapIcon}>
          <MapIcon />
        </View>
        <View style={styles.ratingWrapper}>
        <Text style={styles.ratingText}>10/10</Text>
          </View>
          <View style={styles.divisionLine} />
        <View style={styles.titleWrapper}>
          <Text style={styles.titleText}>{review.reviewTitle}</Text>
        </View>
        <View style={styles.bodyWrapper}>
          <Text style={styles.bodyText}>{review.reviewBody}</Text>
        </View>
    </View>

  );
}

const styles=StyleSheet.create({
  container: {
    position: 'absolute',
    left: PixelRatio.getPixelSizeForLayoutSize(24),
    width: PixelRatio.getPixelSizeForLayoutSize(342),
    height: CONSTANTS.REVIEW_BODY_HEIGHT,
    top: PixelRatio.getPixelSizeForLayoutSize(179)-CONSTANTS.UPPER_NAV_BAR_HEIGHT-CONSTANTS.STATUS_BAR_HEIGHT, 
    borderRadius: PixelRatio.getPixelSizeForLayoutSize(30),
    backgroundColor: "white",
    boxShadow: "0px 2px 20px rgba(0, 0, 0, 0.1)",
  },
  restoImg: {
    position: 'absolute',
    width: CONSTANTS.IMAGE_WIDTH,
    height: CONSTANTS.IMAGE_HEIGHT,
    top: PixelRatio.getPixelSizeForLayoutSize(0),
    borderTopLeftRadius: PixelRatio.getPixelSizeForLayoutSize(30),
    borderTopRightRadius: PixelRatio.getPixelSizeForLayoutSize(30),
  },
  restoName: {
    position: 'absolute',
    top: PixelRatio.getPixelSizeForLayoutSize(17)+CONSTANTS.IMAGE_HEIGHT,
    left: PixelRatio.getPixelSizeForLayoutSize(16),
    fontFamily: "NunitoBold",
    fontSize: PixelRatio.getPixelSizeForLayoutSize(20),
    lineHeight: PixelRatio.getPixelSizeForLayoutSize(27),

  },
  restoLocation:{
    position: 'absolute',
    top: PixelRatio.getPixelSizeForLayoutSize(342+20+17)+6,
    left: PixelRatio.getPixelSizeForLayoutSize(16),
    fontFamily: "NunitoBold",
    fontSize: PixelRatio.getPixelSizeForLayoutSize(14),
    color:"#2DD4CA",
    lineHeight: PixelRatio.getPixelSizeForLayoutSize(19),
  },
  mapIcon:{
    position: 'absolute',
    left: PixelRatio.getPixelSizeForLayoutSize(289),
    top: PixelRatio.getPixelSizeForLayoutSize(355.25),
  },
  ratingWrapper:{
    left: PixelRatio.getPixelSizeForLayoutSize(271),
    top: PixelRatio.getPixelSizeForLayoutSize(380)-1,
  },
  ratingText:{
    fontSize: PixelRatio.getPixelSizeForLayoutSize(20),
    color: "#2DD4CA",
    fontFamily: "NunitoBold",
  },
  divisionLine:{
    borderBottomColor: '#DDDDDD',
    width: PixelRatio.getPixelSizeForLayoutSize(310),
    left: PixelRatio.getPixelSizeForLayoutSize(16),
    borderBottomWidth: StyleSheet.hairlineWidth,
    alignSelf: 'stretch',
    top: PixelRatio.getPixelSizeForLayoutSize(385)

  },
  titleWrapper:{
    top: PixelRatio.getPixelSizeForLayoutSize(390),
    left: PixelRatio.getPixelSizeForLayoutSize(16),
  },
  titleText:{
    fontFamily: "NunitoBold",
    fontSize: PixelRatio.getPixelSizeForLayoutSize(14),
  },
  bodyWrapper:{
    top: PixelRatio.getPixelSizeForLayoutSize(388)+3,
    left: PixelRatio.getPixelSizeForLayoutSize(16),
    width: PixelRatio.getPixelSizeForLayoutSize(310),
  },
  bodyText: {
    fontFamily: "Nunito",
    fontSize: PixelRatio.getPixelSizeForLayoutSize(14),
  }

})

export default ReviewBody;