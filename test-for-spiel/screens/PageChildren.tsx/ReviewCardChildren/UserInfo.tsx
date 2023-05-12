import { StyleSheet, Text, View, PixelRatio, Image, Pressable} from 'react-native';
import { ReviewBrowse } from '../../../types/reviewTypes';
import { ReviewUser } from '../../../types/userTypes';
import { CONSTANTS } from '../CONSTANTS';
import { Svg, Path } from 'react-native-svg';

interface UserProps {
  reviewUser: ReviewUser,
}

const UserInfo: React.FC<UserProps> = (props) =>{
  const user: ReviewUser = props.reviewUser;
  return (
    <Pressable style={styles.container}>
        <Image 
          style={styles.img}
          source={require('../../../assets/images/profile.png')} />
        <Text style={styles.name}>{user.userName}</Text>
        <Text style={styles.userHandle}>{user.userHandle+" • "+user.lastActive} </Text>
        <View style={styles.dotSvg}>
          <Svg xmlns="http://www.w3.org/2000/svg" 
          fill="none" viewBox="0 0 24 24"
          strokeWidth={1.5} stroke="currentColor" 
          height="24"
          width="24"
          >
          <Path strokeLinecap="round" strokeLinejoin="round" d="M6.75 12a.75.75 0 11-1.5 0 .75.75 0 011.5 0zM12.75 12a.75.75 0 11-1.5 0 .75.75 0 011.5 0zM18.75 12a.75.75 0 11-1.5 0 .75.75 0 011.5 0z" />
          </Svg>
        </View>
    </Pressable>
  );
}

const styles=StyleSheet.create({
  container: {
    position: 'absolute',
    width:"100%",
    height: PixelRatio.getPixelSizeForLayoutSize(48),
    top: PixelRatio.getPixelSizeForLayoutSize(115)-CONSTANTS.UPPER_NAV_BAR_HEIGHT-CONSTANTS.STATUS_BAR_HEIGHT, 
  },
  img: {
    position: 'absolute',
    width: PixelRatio.getPixelSizeForLayoutSize(48),
    height: PixelRatio.getPixelSizeForLayoutSize(48),
    borderRadius: "50%",
    left: PixelRatio.getPixelSizeForLayoutSize(24),
  },
  name: {
    position: 'absolute',
    top: PixelRatio.getPixelSizeForLayoutSize(29-24),
    left: PixelRatio.getPixelSizeForLayoutSize(80),
    lineHeight: PixelRatio.getPixelSizeForLayoutSize(19.1),
    fontFamily: "NunitoBold",
    fontSize: PixelRatio.getPixelSizeForLayoutSize(14),
  },
  userHandle: {
    position: 'absolute',
    left: PixelRatio.getPixelSizeForLayoutSize(80),
    top: PixelRatio.getPixelSizeForLayoutSize(24)+2,
    fontSize: PixelRatio.getPixelSizeForLayoutSize(12),
    color: "#717171",

  },
  dotSvg: {
    left: PixelRatio.getPixelSizeForLayoutSize(342),
    top: CONSTANTS.UPPER_NAV_BAR_HEIGHT - CONSTANTS.STATUS_BAR_HEIGHT+4
  }
  

});
export default UserInfo