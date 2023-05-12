
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Page from './screens/Page';

import * as SplashScreen from 'expo-splash-screen';
import * as Font from 'expo-font';
import {useEffect, useState } from 'react';


SplashScreen.preventAutoHideAsync();

const Stack = createNativeStackNavigator();

function cacheFonts(fonts) {
  return fonts.map(font => Font.loadAsync(font));
}

const Nunito = {
Nunito: require('./assets/fonts/Nunito-Regular.ttf'),
NunitoBold: require('./assets/fonts/Nunito-Bold.ttf'),
}

function App() {
  const [appIsReady, setAppIsReady] = useState(false);
  useEffect(() => {
    async function loadResourcesAndDataAsync() {
      try {
        SplashScreen.preventAutoHideAsync();
        // const imageAssets = cacheImages([
        //   'https://www.google.com/images/branding/googlelogo/2x/googlelogo_color_272x92dp.png',
        //   require('./assets/images/circle.jpg'),
        // ]);
        const fontAssets = cacheFonts([Nunito]);
        await Promise.all([...fontAssets]);
      } catch (e) {
        // You might want to provide this error information to an error reporting service
        console.warn(e);
      } finally {
        setAppIsReady(true);
        SplashScreen.hideAsync();
      }
    }

    loadResourcesAndDataAsync();
  }, []);

  if (!appIsReady) {
    return null;
  }

    return (
     
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Page">
        <Stack.Screen name="Page" component={Page} />
      </Stack.Navigator>
    </NavigationContainer>
  )

  
}


export default App;
