import {AuthService} from "../services/auth/AuthService.ts";
import {Link} from "react-router";
import {useState, ChangeEvent} from "react";

const LoginPage = () => {
  const [loginData, setLoginData] = useState({
    id: "",
    password: "",
  });

  const { login } = AuthService();

  const onChangeLoginData = (e: ChangeEvent<HTMLInputElement>) => {
    setLoginData((prev) => (
      {...prev, [e.target.name]: e.target.value}
    ))
  }

  return (<>
    <input
      placeholder={"아이디"}
      name="id"
      value={loginData.id}
      onChange={onChangeLoginData}
    />
    <input
      placeholder={"비밀번호"}
      name="password"
      value={loginData.password}
      onChange={onChangeLoginData}
      onKeyDown={e => {
        if (e.key === "Enter") {
          login(loginData.id, loginData.password);
        }
      }}
    />
    <button onClick={() => {
      login(loginData.id, loginData.password)
    }}>로그인</button>
    <Link to={"/"}>메인 페이지</Link>
  </>);
};

export default LoginPage;
