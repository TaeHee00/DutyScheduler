import styled from "styled-components";
import Sidebar from "../components/sidebar/Sidebar.tsx";

const MainContainer = styled.div`
    display: flex;
    flex-direction: row;
    align-items: flex-start;
    justify-content: flex-start;
    width: 100%;
`;

const ChangePage = () => {
  return (<MainContainer>
    <Sidebar />
    당직 변경 페이지
  </MainContainer>);
};

export default ChangePage;
