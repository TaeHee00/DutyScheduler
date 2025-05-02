import {Server} from "../Server.ts";
import {Response} from "./Response.tsx";
import {getCookie} from "../../utils/Cookie.ts";

export const AuthService = () => {
  const login = (id: string, password: string)  => {
    if (id.trim() === "") {
      alert("아이디를 입력해주세요.");
      return;
    }
    if (password.trim() === "") {
      alert("비밀번호를 입력해주세요.");
      return;
    }

    fetch(`${Server.url}:${Server.port}/api/${Server.version}/members/login`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        id: id,
        password: password,
      }),
      credentials: "include",
    })
      .then((response) => response.json())
      .then((response: Response) => {
        console.log(response.data);
        console.log(response.status);
        const token = getCookie("ACCESS_TOKEN");
        if (!token) {
          alert("token error");
          return;
        }
        alert("Success");
      })
      .catch((error) => {
        alert(error);
      })
  }

  return { login };
}
