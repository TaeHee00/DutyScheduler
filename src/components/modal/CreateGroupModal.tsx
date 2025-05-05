import styled from "styled-components";
import {GroupService} from "../../services/group/GroupService.ts";
import { useState } from "react";

const Header = styled.span`
  font-family: "GmarketSans";
    width: 100%;
    font-size: 18px;
    font-weight: bold;
`;

const Body = styled.div`
  font-family: "GmarketSans";
  width: 100%;
  font-size: 16px;
    gap: 10px;
`;

const Input = styled.input`
    font-family: "GmarketSans";
    width: calc(100% - 17px);
    font-size: 14px;
    padding: 5px 7px;
    margin-top: 7px;
    margin-bottom: 50px;
    border: 1px solid #9f9f9f;
    border-radius: 5px;

    &:focus {
        outline: none;
    }

    &::placeholder {
        color: #c5bcbc;
    }
`;

const Footer = styled.div`
    display: flex;
    flex-direction: row;
    width: 100%;
    gap: 10px;
`;

const Button = styled.button<{ highlight?: boolean }>`
  cursor: pointer;
    width: 100%;
    height: 35px;
    border-radius: 5px;
    color: ${({highlight}) => (highlight ? "white" : "#9F9F9F")};

    transition: color .15s ease-in-out, background-color .15s ease-in-out, border-color .15s ease-in-out, box-shadow .15s ease-in-out, -webkit-box-shadow .15s ease-in-out;

    border: ${({highlight}) => (highlight ? "none" : "1px solid #9F9F9F")};
    background-color: ${({highlight}) => (highlight ? "#5cc184" : "transparent")};
    
    &:hover {
        background-color: ${({highlight}) => (highlight ? "#53ae77" : "#ccc")};
    }
`;

export const CreateGroupModal = ({ closeModal }: { closeModal: () => void }) => {
  const [groupName, setGroupName] = useState("");
  const { createGroup } = GroupService();

  return (<>
    <Header>그룹 추가</Header>
    <Body>
      1. 그룹명을 입력해주세요.
      <Input
        placeholder={"예시: A"}
        name="groupName"
        value={groupName}
        onChange={(e) => setGroupName(e.target.value)}
      />
      <Footer>
        <Button
          highlight={true}
          onClick={() => {
            createGroup(groupName);
          }}
        >
          추가
        </Button>
        <Button
          onClick={() => closeModal()}
        >
          닫기
        </Button>
      </Footer>
    </Body>
  </>)
}
