import { Redirect } from 'expo-router';
import HomeScreen from './home';

export default function Index() {
  const  isConnected  = false;

  if (!isConnected) {
    return <Redirect href="/auth/login" />;
  }

  return <HomeScreen />;
}

