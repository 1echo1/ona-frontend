import { useAuth } from '@/context/auth/authProvider';
import { Redirect } from 'expo-router';
import HomeScreen from './home';

export default function Index() {
  const { auth } = useAuth();
  const isConnected = !!auth.token;

  if (!isConnected) {
    return <Redirect href="/auth/login" />;
  }

  return <HomeScreen />;
}

