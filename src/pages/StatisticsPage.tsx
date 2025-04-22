import styled from "styled-components";
import Sidebar from "../components/sidebar/Sidebar.tsx";

const MainContainer = styled.div`
  display: flex;
    flex-direction: row;
    align-items: flex-start;
    justify-content: flex-start;
    width: 100%;
`;

const StatisticsPage = () => {
  return (<MainContainer>
    <Sidebar />
    당직 현환 페이지
  </MainContainer>);
};

export default StatisticsPage;
