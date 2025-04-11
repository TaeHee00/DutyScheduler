import {AuthService} from "../services/auth/AuthService.ts";
import {Link} from "react-router";

const LoginPage = () => {
  return (<>
    <input placeholder={"아이디"} />
    <input placeholder={"비밀번호"}/>
    <button onClick={() => {
      if (AuthService.login("admin", "admin")) {
        alert("로그인 성공");
      } else {
        alert("로그인 실패");
      }
    }}>로그인</button>
    <Link to={"/"}>메인 페이지</Link>
  </>);
};

export default LoginPage;
