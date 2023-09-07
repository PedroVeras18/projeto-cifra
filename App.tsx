import { StatusBar } from 'react-native';

import { Routes } from '@routes/index';
import { Loading } from '@components/Loading';
import { useFonts } from 'expo-font';
import { TamaguiProvider } from 'tamagui';
import config from './tamagui.config'

export default function App() {
  const [loaded] = useFonts({
    Inter: require('@tamagui/font-inter/otf/Inter-Medium.otf'),
    InterBold: require('@tamagui/font-inter/otf/Inter-Bold.otf'),
  })

  return (
    <TamaguiProvider config={config}>
      <StatusBar
        barStyle="light-content"
        backgroundColor="transparent"
        translucent
      />
      {loaded ? <Routes /> : <Loading />}
    </TamaguiProvider>
  );
}