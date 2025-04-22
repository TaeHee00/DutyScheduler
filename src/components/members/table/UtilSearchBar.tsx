import styled from "styled-components";
import searchIcon from "../../../assets/images/search.png";

const MainContainer = styled.div`
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: center;
    height: 100%;
    border: 1px solid #ccc;
    border-radius: 5px;
    width: 300px;
    height: 35px;
    padding: 0 10px;
    background-color: #ffffff;
    margin-right: 10px;
`;

const InputBox = styled.input`
    //border: 1px solid #ccc;
    //border-radius: 5px;
    border: none;
    width: 300px;
    height: 25px;
    font-size: 14px;
    font-family: "GmarketSans";
    
    &:focus {
        outline: none;
    }
`;

const SearchIcon = styled.img`
    widht: 25px;
    height: 25px;
    padding: 3px;
    cursor: pointer;
    
    &:hover {
        background-color: #ccc;
        border-radius: 5px;
    }
`;

const UtilSearchBar = () => {
  return (<MainContainer>
    <InputBox />
    <SearchIcon src={searchIcon}/>
  </MainContainer>);
};

export default UtilSearchBar;
