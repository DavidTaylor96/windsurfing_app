import { Ionicons } from "@expo/vector-icons";
import * as Font from "expo-font";
import * as SplashScreen from "expo-splash-screen";
import * as React from "react";

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
          "space-mono": require("../assets/fonts/SpaceMono-Regular.ttf"),
          Poppins: {
            uri: "https://medayoci.fra1.cdn.digitaloceanspaces.com/fonts/Poppins/Poppins-Regular.ttf",
            display: Font.FontDisplay.FALLBACK,
          },
          "Poppins-Light": {
            uri: "https://medayoci.fra1.cdn.digitaloceanspaces.com/fonts/Poppins/Poppins-Light.ttf",
            display: Font.FontDisplay.FALLBACK,
          },
          "Poppins-Medium": {
            uri: "https://medayoci.fra1.cdn.digitaloceanspaces.com/fonts/Poppins/Poppins-Medium.ttf",
            display: Font.FontDisplay.FALLBACK,
          },
          "Poppins-SemiBold": {
            uri: "https://medayoci.fra1.cdn.digitaloceanspaces.com/fonts/Poppins/Poppins-SemiBold.ttf",
            display: Font.FontDisplay.FALLBACK,
          },
          "Poppins-Bold": {
            uri: "https://medayoci.fra1.cdn.digitaloceanspaces.com/fonts/Poppins/Poppins-Bold.ttf",
            display: Font.FontDisplay.FALLBACK,
          },
          "Poppins-Thin": {
            uri: "https://medayoci.fra1.cdn.digitaloceanspaces.com/fonts/Poppins/Poppins-Bold.ttf",
            display: Font.FontDisplay.FALLBACK,
          },
        });
        // Load fonts
        await Font.loadAsync({
          ...Ionicons.font,
          "space-mono": require("../assets/fonts/SpaceMono-Regular.ttf"),
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
