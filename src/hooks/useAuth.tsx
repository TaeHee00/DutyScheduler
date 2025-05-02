import {useAuthState} from "../services/auth/useAuthState.tsx";

export const useAuth = () => {
  const { data: authData } = useAuthState();


  if (!authData.token) {
    throw new Error("useAuth must be used within an AuthProvider");
  }
  return authData.token;
}
