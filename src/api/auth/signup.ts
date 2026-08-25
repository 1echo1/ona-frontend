import axios from 'axios';
import axiosInstance from '../axios';

type SignUpResponse = {
  message: string;
  user_id: string;
  details: string;
};

type SignUpResult =
  | { success: true; data: SignUpResponse }
  | { success: false; errorCode: 'validation_error' | 'already_exists' | 'network_error' | 'unknown' };

export default async function SignUpRequest(email: string, password: string): Promise<SignUpResult> {
  try {
    const response = await axiosInstance.post<SignUpResponse>('auth/signup', { email, password });
    return { success: true, data: response.data };
  } catch (error) {
    if (axios.isAxiosError(error)) {
      if (!error.response) {
        return { success: false, errorCode: 'network_error' };
      }
      if (error.response.status === 400) {
        return { success: false, errorCode: 'already_exists' };
      }
      if (error.response.status === 422) {
        return { success: false, errorCode: 'validation_error' };
      }
    }
    return { success: false, errorCode: 'unknown' };
  }
}