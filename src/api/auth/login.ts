import axios from "axios";
import axiosInstance from "../axios";

type LoginResponse = {
  access_token: string;
  token_type: string;
};

type LoginResult =
  | { success: true; data: LoginResponse }
  | {
      success: false;
      errorCode: "invalid_credentials" | "network_error" | "unknown";
    };

export default async function LoginRequest(
  email: string,
  password: string,
): Promise<LoginResult> {
  try {
    const response = await axiosInstance.post<LoginResponse>("auth/login", {
      email,
      password,
    });
    return { success: true, data: response.data };
  } catch (error) {
    if (axios.isAxiosError(error)) {
      if (!error.response) {
        return { success: false, errorCode: "network_error" };
      }
      if (error.response.status === 401) {
        return { success: false, errorCode: "invalid_credentials" };
      }
    }
    return { success: false, errorCode: "unknown" };
  }
}
