import React, { useCallback, useEffect, useState } from 'react';
import { StatusBar, SafeAreaView, View } from 'react-native';
import { Montserrat_400Regular, Montserrat_700Bold } from '@expo-google-fonts/montserrat';
import * as SplashScreen from 'expo-splash-screen';
import * as Font from 'expo-font';

import Cesta from './src/telas/Cesta';
import mock from './src/mocks/cesta';

export default function App() {
  const [appIsReady, setAppIsReady] = useState(false);

  useEffect(() => {
    async function prepare() {
      try {
        await Font.loadAsync({
          "MontserratRegular": Montserrat_400Regular,
          "MontserratBold": Montserrat_700Bold,
        });
        await new Promise(resolve => setTimeout(resolve, 2000));
      } catch (e) {
        console.warn(e);
      } finally {
        setAppIsReady(true);
      }
    }

    prepare();
  }, []);

  const onLayoutRootView = useCallback(async () => {
    if (appIsReady) {
      await SplashScreen.hideAsync();
    }
  }, [appIsReady]);

  if (!appIsReady) {
    return null;
  }

  return (
    <SafeAreaView style={{ fex: 1 }}>
      <View onLayout={onLayoutRootView}>
        <StatusBar />
        <Cesta {...mock} />
      </View>
    </SafeAreaView>
  );
}
