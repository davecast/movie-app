import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import { useFonts } from 'expo-font';
import { Stack } from 'expo-router';
import 'react-native-reanimated';
import { SafeAreaProvider, SafeAreaView } from 'react-native-safe-area-context';

import './global.css';

const queryClient = new QueryClient()

export default function RootLayout() {

  const [loaded] = useFonts({
    SpaceMono: require('../assets/fonts/SpaceMono-Regular.ttf'),
  });

  if (!loaded) {
    // Async font loading only occurs in development.
    return null;
  }

  return (
    <QueryClientProvider client={queryClient}>
      <SafeAreaProvider>
        <SafeAreaView className='flex-1' edges={['left', 'right']}>
          <Stack 
            screenOptions={{
              headerShown: false,
              headerShadowVisible: false,
            }}
          />
        </SafeAreaView>
      </SafeAreaProvider>
    </QueryClientProvider>
  );
}
