import { useEffect } from 'react';

/// FONTS
import { useFonts } from 'expo-font';
import * as SplashScreen from 'expo-splash-screen';

import AppContextProvider from './store/appContext';

/// ROOT NAVIGATIOR
import RootNavigator from './navigation/rootNavigation';

SplashScreen.preventAutoHideAsync();

export default function App() {
  const [loaded, error] = useFonts({
    Anton: require('./assets/fonts/Anton.ttf'),
    Pacifico: require('./assets/fonts/Pacifico.ttf'),
  });

  useEffect(() => {
    if (loaded || error) {
      SplashScreen.hideAsync();
    }
  }, [loaded, error]);

  if (!loaded && !error) {
    return null;
  }

  return (
    <AppContextProvider>
      <RootNavigator />
    </AppContextProvider>
  );
}
