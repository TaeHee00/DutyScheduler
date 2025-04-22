import styled from "styled-components";
import SearchBar from "./SearchBar.tsx";

const MainContainer = styled.div`
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: center;
    width: 100%;
    height: 50px;
    border-bottom: 1px solid #ccc;
    background-color: #f4f4f4;
`;

const Header = () => {
  return (<MainContainer>
    <SearchBar />
  </MainContainer>);
};

export default Header;
