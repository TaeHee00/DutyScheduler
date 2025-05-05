import styled from "styled-components";
import UtilSearchBar from "./UtilSearchBar.tsx";
import {useModal, ModalStyle} from "@lasbe/react-modal";
import {CreateGroupModal} from "../../modal/CreateGroupModal.tsx";

const MainContainer = styled.div`
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: space-between;
    width: 98%;
    padding: 0 10px;
`;

const SearchContainer = styled.div`
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: space-between;
    font-family: "GmarketSans";
    gap: 4px;
    color: #0A0A0A;
`;

const SearchCount = styled.span`
    font-size: 16px;
    font-weight: 700;
`;

const UtilButton = styled.button<{ highlight?: boolean }>`
    cursor: pointer;
    width: 120px;
    height: 35px;
    border-radius: 5px;
    color: ${({highlight}) => (highlight ? "white" : "#9F9F9F")};

    transition: color .15s ease-in-out, background-color .15s ease-in-out, border-color .15s ease-in-out, box-shadow .15s ease-in-out, -webkit-box-shadow .15s ease-in-out;

    //border: 1px solid #9a9a9a;
    border: ${({highlight}) => (highlight ? "none" : "1px solid #9F9F9F")};
    background-color: ${({highlight}) => (highlight ? "#5cc184" : "transparent")};

    &:hover {
        background-color: ${({highlight}) => (highlight ? "#53ae77" : "#ccc")};
    }

    //&.hightlight {
    //    border: none;
    //    color: #fff;
    //    
    //    &:hover {
    //        background-color: #53ae77;
    //    }
    //}
`;

const ButtonGroupContainer = styled.div`
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: center;
    gap: 10px;
`;

const TableUtils = ({ page }: { page: string }) => {
  const { openModal, closeModal } = useModal();

  return (<MainContainer>
    <SearchContainer>
      <UtilSearchBar/>
      {/* api 로딩중일때는 "검색중..." 띄우면 좋을듯 */}
      <SearchCount>6</SearchCount>명
    </SearchContainer>
    <ButtonGroupContainer>
      <UtilButton>삭제</UtilButton>
      <UtilButton
        highlight={true}
        onClick={() =>
          openModal({
            content: <CreateGroupModal closeModal={closeModal} />,
          })
        }
      >
        추가
      </UtilButton>
    </ButtonGroupContainer>
  </MainContainer>);
};

export default TableUtils;
