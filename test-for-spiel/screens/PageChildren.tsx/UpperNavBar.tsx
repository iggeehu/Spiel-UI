import { CONSTANTS } from './CONSTANTS';
import { Pressable, PixelRatio, StyleSheet, Text, View } from 'react-native';
import Svg, { Path } from "react-native-svg"
import { MapIcon, ProfileIcon, SparkIcon, UpperNavDropIcon, ListsIcon } from '../../assets/svg';

interface HeaderProps {
}

const UpperNavBar: React.FC<HeaderProps> = (props) =>{
  return (
    <Pressable style={styles.container}>

      <View style={styles.sparkleIcon}>
       <SparkIcon />
      </View>
      <View style={styles.navItem}>
        <Text style={styles.navText}>All Categories</Text>
      </View>
      <View style={styles.upperNavDropIcon}>
        <UpperNavDropIcon />
      </View>
    </Pressable>
  );
}

export default UpperNavBar;


const styles = StyleSheet.create({
  container:{
    position: 'absolute',
    width: CONSTANTS.SCREEN_WIDTH,
    height: CONSTANTS.UPPER_NAV_BAR_HEIGHT,
    left: 0,
    top: CONSTANTS.STATUS_BAR_HEIGHT,

  },
  sparkleIcon:{
    position: 'absolute',
    left: PixelRatio.getPixelSizeForLayoutSize(24),
    top: PixelRatio.getPixelSizeForLayoutSize(10),
    width: PixelRatio.getPixelSizeForLayoutSize(24),
    height: PixelRatio.getPixelSizeForLayoutSize(24),
    // backgroundColor: "red",
  },  
  navItem: {
    position: 'absolute',
    width: PixelRatio.getPixelSizeForLayoutSize(120),
    height: PixelRatio.getPixelSizeForLayoutSize(22),
    //top and left values here are different from figma specs
    left:PixelRatio.getPixelSizeForLayoutSize(59),
    top: PixelRatio.getPixelSizeForLayoutSize(13),
    // backgroundColor: "blue",
  },
  navText:{
    fontFamily: 'NunitoBold',
    fontWeight: 'bold',
    fontStyle: 'normal',
    fontSize:PixelRatio.getPixelSizeForLayoutSize(16),
    lineHeight: PixelRatio.getPixelSizeForLayoutSize(21.82),
    color: "black",
    // backgroundColor: "yellow",
  },
  upperNavDropIcon:{
    left: PixelRatio.getPixelSizeForLayoutSize(165),
    top: PixelRatio.getPixelSizeForLayoutSize(19),
  }
});


