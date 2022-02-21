import { Ionicons } from '@expo/vector-icons';
import * as Font from 'expo-font';
import * as SplashScreen from 'expo-splash-screen';
import * as React from 'react';

export default function useCachedResources() {
  const [isLoadingComplete, setLoadingComplete] = React.useState(false);

  // Load any resources or data that we need prior to rendering the app
  React.useEffect(() => {
    async function loadResourcesAndDataAsync() {
      try {
        SplashScreen.preventAutoHideAsync();

        // Load fonts
        await Font.loadAsync({
          ...Ionicons.font,
          'space-mono': require('../assets/fonts/SpaceMono-Regular.ttf'),
          'sora-bold': require('../assets/fonts/sora/Sora-Bold.ttf'),
          'sora-extra-bold': require('../assets/fonts/sora/Sora-ExtraBold.ttf'),
          'sora-extra-light': require('../assets/fonts/sora/Sora-ExtraLight.ttf'),
          'sora-light': require('../assets/fonts/sora/Sora-Light.ttf'),
          'sora-medium': require('../assets/fonts/sora/Sora-Medium.ttf'),
          'sora-regular': require('../assets/fonts/sora/Sora-Regular.ttf'),
          'sora-semi-bold': require('../assets/fonts/sora/Sora-SemiBold.ttf'),
          'sora-thin': require('../assets/fonts/sora/Sora-Thin.ttf'),
        });
      } catch (e) {
        // We might want to provide this error information to an error reporting service
        console.warn(e);
      } finally {
        setLoadingComplete(true);
        SplashScreen.hideAsync();
      }
    }

    loadResourcesAndDataAsync();
  }, []);

  return isLoadingComplete;
}