

import { Pressable, SafeAreaView, PixelRatio, StyleSheet, Text, View, Button } from 'react-native';
import { ProfileIcon, SparkIcon, ListsIcon, HomeIcon, FriendsIcon, CreateIcon } from '../../assets/svg';


const NAVBAR_TEXT_TOP = PixelRatio.getPixelSizeForLayoutSize(44);

const Navbar: React.FC = () =>{

  return (
    <SafeAreaView style={styles.container}>
      <Pressable>
        <View style={styles.homeIcon}>
            <HomeIcon />
          </View>
        <View style={styles.textHome}><Text style={styles.text}>Home</Text></View>
      </Pressable>

      <Pressable>
        <View style={styles.friendsIcon}>
            <FriendsIcon />
          </View>
        <View style={styles.textFriends}><Text style={styles.text}>Friends</Text></View>
      </Pressable>

      <Pressable>
       <View style={styles.createIcon}>
          <CreateIcon />
        </View>
        <View style={styles.textCreate}><Text style={styles.text}>Create</Text></View>
      </Pressable>

       <Pressable>
        <View style={styles.listsIcon}>
          <ListsIcon />
        </View>
        <View style={styles.textLists}><Text style={styles.text}>Lists</Text></View>
      </Pressable> 

      <Pressable>
        <View style={styles.profileIcon}>
          <ProfileIcon />
        </View>
        <View style={styles.textProfile}><Text style={styles.text}>Profile</Text></View>
      </Pressable> 

    </SafeAreaView>
  );
}

const styles = StyleSheet.create({  
    container: { 
      position: 'absolute',
      width:PixelRatio.getPixelSizeForLayoutSize(390),
      height: PixelRatio.getPixelSizeForLayoutSize(51),
      left: 0,
      top: PixelRatio.getPixelSizeForLayoutSize(759),
      borderTopWidth: PixelRatio.getPixelSizeForLayoutSize(1),
      borderColor: '#DDDDDD',
      borderStyle: 'solid'},

     homeIcon:{
      position: 'absolute',
      left: PixelRatio.getPixelSizeForLayoutSize(33.25),
      top: PixelRatio.getPixelSizeForLayoutSize(9),
      width: PixelRatio.getPixelSizeForLayoutSize(36),
      height: PixelRatio.getPixelSizeForLayoutSize(36),

    },
    friendsIcon:{
      position: 'absolute',
      left: PixelRatio.getPixelSizeForLayoutSize(109.25),
      top: PixelRatio.getPixelSizeForLayoutSize(9),
      width: PixelRatio.getPixelSizeForLayoutSize(36),
      height: PixelRatio.getPixelSizeForLayoutSize(36),

    },
    createIcon:{
      position: 'absolute',
      left: PixelRatio.getPixelSizeForLayoutSize(190.5),
      top: PixelRatio.getPixelSizeForLayoutSize(9.5),
      width: PixelRatio.getPixelSizeForLayoutSize(36),
      height: PixelRatio.getPixelSizeForLayoutSize(36),


    },
    listsIcon: {
      position: 'absolute',
      left: PixelRatio.getPixelSizeForLayoutSize(263.5),
      top: PixelRatio.getPixelSizeForLayoutSize(-5),
      width: PixelRatio.getPixelSizeForLayoutSize(36),
      height: PixelRatio.getPixelSizeForLayoutSize(36),
      color: '#717171',
      // backgroundColor: 'powderblue',

    },
    profileIcon:{
      position: 'absolute',
      top: PixelRatio.getPixelSizeForLayoutSize(-17),
      width: PixelRatio.getPixelSizeForLayoutSize(36),
      height: PixelRatio.getPixelSizeForLayoutSize(36),
      left: PixelRatio.getPixelSizeForLayoutSize(339.5),
      right: PixelRatio.getPixelSizeForLayoutSize(3.25),

      // backgroundColor: 'pink',
    },
    textHome: {
      position: 'absolute',
      top: NAVBAR_TEXT_TOP,
      left: PixelRatio.getPixelSizeForLayoutSize(33.25),
      
    },
    textFriends:{
      position: 'absolute',
      top: NAVBAR_TEXT_TOP,
      left: PixelRatio.getPixelSizeForLayoutSize(105),
      fontSize: PixelRatio.getPixelSizeForLayoutSize(12),

    },
    textCreate:{
      top: NAVBAR_TEXT_TOP,
      fontSize: PixelRatio.getPixelSizeForLayoutSize(12),
      left: PixelRatio.getPixelSizeForLayoutSize(185),
  
    },
    textLists:{
      top: NAVBAR_TEXT_TOP-14,
      fontSize: PixelRatio.getPixelSizeForLayoutSize(12),
      left: PixelRatio.getPixelSizeForLayoutSize(268)-4,
    },
    textProfile:{
      top: NAVBAR_TEXT_TOP-28,
      fontSize: PixelRatio.getPixelSizeForLayoutSize(12),
      left: PixelRatio.getPixelSizeForLayoutSize(336),
    },
    text:{
      fontSize: PixelRatio.getPixelSizeForLayoutSize(12),
      color: '#717171',
    },


  });

export default Navbar