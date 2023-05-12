import { View, Text, PixelRatio, StyleSheet } from 'react-native';
import { ReviewProps } from '../Page';
import UserInfo from './ReviewCardChildren/UserInfo';
import ReviewBody from './ReviewCardChildren/ReviewBody';
import ReviewMeta from './ReviewCardChildren/ReviewMeta';


const ReviewCard= (props: ReviewProps) =>(
    <View style={styles.container}>
        <UserInfo reviewUser={props.review.user} />
        <ReviewBody review={props.review} />
        <ReviewMeta review={props.review} />
    </View>
);

const styles = StyleSheet.create({
    container: {
        position: 'absolute',
        width:PixelRatio.getPixelSizeForLayoutSize(390),
        height: PixelRatio.getPixelSizeForLayoutSize(668),
        top: PixelRatio.getPixelSizeForLayoutSize(91),
        backgroundColor: '#FCFCFC',
    },
    // userInfo: {
    // },
    // reviewBody: {},
    // reviewMeta:{},
  
  });

export default ReviewCard