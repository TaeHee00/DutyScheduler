import './App.css'
import {Link} from "react-router";

function App() {

  return (
    <>
      <h2>메인 페이지</h2>
      <Link to={"/login"}>로그인</Link> <br/>
      <Link to={"/schedule"}>당직표</Link>
    </>
  )
}

export default App
