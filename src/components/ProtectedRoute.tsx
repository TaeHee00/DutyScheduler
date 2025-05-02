import {ReactNode} from "react";
import {Navigate} from "react-router";
import {getCookie} from "../utils/Cookie.ts";

export const ProtectedRoute = ({ children }: { children: ReactNode}) => {
  const token = getCookie("ACCESS_TOKEN");
  if (!token) {
    alert("로그인이 필요한 페이지입니다.")
    return <Navigate to="/login" />;
  }
  return children;
}
