import styled from "styled-components";
import {Link} from "react-router";

const MainContainer = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: flex-start;
    border-right: 1px #ccc solid;
    flex-shrink: 0;
    height: calc(100vh - 15px);
    padding-top: 15px;
`;

const Title = styled.span`
    font-family: "GmarketSans";
    font-weight: 700;
    font-size: 20px;
`;

const HorizontalRule = styled.hr`
    border: none;
    height: 1px;
    width: 100%;
    background-image: linear-gradient(
            to right,
            rgba(0, 0, 0, 0),
            cornflowerblue,
            rgba(0, 0, 0, 0)
    );
    margin: 0 70px 10px;
`;

const MenuButton = styled.button`
    background: none;
    border: none;
    cursor: pointer;
    font-family: "GmarketSans";
    font-size: 15px;
    letter-spacing: -0.3px;
    width: 120px;
    height: 40px;
    border-radius: 5px;
    margin-bottom: 3px;

    &:hover {
        background-color: #cacaca;
    }

    &.active {
        background-color: #eed6ff;
    }
`;

const checkPathame = (currentPathname: string, pathname: string) => {
  return currentPathname == pathname;
}

const Tabs = [
  {path: "/schedule", label: "당직표"},
  {path: "/statistics", label: "당직 현황"},
  {path: "/groups", label: "그룹 관리"},
  {path: "/members", label: "인원 관리"},
  {path: "/changes", label: "당직 변경"},
];

const Sidebar = () => {
  return (<MainContainer>
    <Title>당직표</Title>
    <HorizontalRule/>
    {
      Tabs.map((item) => (
        <Link to={item.path}>
          <MenuButton className={
            checkPathame(window.location.pathname, item.path) ?
              "active" : undefined
          }>{item.label}</MenuButton>
        </Link>
      ))
    }
  </MainContainer>);
};

export default Sidebar;
