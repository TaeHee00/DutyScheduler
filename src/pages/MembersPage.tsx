import styled from "styled-components";
import Sidebar from "../components/sidebar/Sidebar.tsx";
import TableUtils from "../components/members/table/TableUtils.tsx";
import Header from "../components/header/Header.tsx";
import {useModal} from "@lasbe/react-modal";
import {EditMemberModal} from "../components/modal/EditMemberModal.tsx";
import {MemberResponse} from "../services/member/MemberResponse.tsx";
import {useEffect, useState} from "react";
import {MemberService} from "../services/member/MemberService.ts";

const MainContainer = styled.div`
    display: flex;
    flex-direction: row;
    align-items: flex-start;
    justify-content: flex-start;
    width: 100%;
    height: 100%;
`;

const ManagementContainer = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    width: 100%;
    //padding: 0 10px;
    gap: 10px;
`;

const TableHeader = styled.div`
  display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: space-between;
    width: 100%;
    border-bottom: 1px solid #ccc;
    //padding: 10px 10px;
`;
// const Table = styled.div`
//   display: flex;
//     flex-direction: column;
//     align-items: center;
//     justify-content: center;
//     width: 100%;
//     height: 100%;
//     gap: 10px;
//     margin-top: 10px;
// `;

const Table = styled.table`
    width: 100%;
    border-collapse: collapse;
    
    tr {
        border: 1px solid #ccc;
        border-left: none;
        border-right: none;
    }
    
    tr, td, th {
        text-align: center;
        padding: 12px 0;
    }

    //border: 1px solid black;
    //border-spacing: 10px;
    //tr {
    //    border: 1px solid black;
    //    border-collapse: collapse;
    //}
`;

const TableItem = styled.div`
  display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: space-between;
    width: 100%;
    //padding: 10px 10px;
    //background-color: #ccc;
    border-bottom: 1px solid #ccc;
`;

const HiddenCheckbox = styled.input.attrs({ type: 'checkbox' })`
    display: none;
`;

// label에 커스텀 스타일 적용
const StyledLabel = styled.label`
  display: inline-block;
  width: 20px;
  height: 20px;
  border: 1px solid #707070;
    border-radius: 3px;
  position: relative;
  cursor: pointer;

  /* 체크됐을 때 체크 마크 표시 */
  ${HiddenCheckbox}:checked + &::after {
    content: '✔';
    font-size: 18px;
    width: 30px;
    height: 30px;
    text-align: center;
    position: absolute;
    left: -4px;
    top: -3px;
    line-height: 30px;
    color: #53ae77;
  }
`;

const ActionButton = styled.button`
  border: 1px solid #9F9F9F;
  background-color: transparent;
    cursor: pointer;
    border-radius: 5px;
    padding: 10px 20px;
    transition: color .15s ease-in-out, background-color .15s ease-in-out, border-color .15s ease-in-out, box-shadow .15s ease-in-out, -webkit-box-shadow .15s ease-in-out;
    
    &:hover {
        background-color: #ccc;
        border: 1px solid #ccc;
    }
    white-space: nowrap;
`;

const ActionButtonGroup = styled.div`
  display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: center;
    gap: 5px;
`;

const GroupTagBox = styled.div`
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: center;
    width: 100%;
  font-family: "GmarketSans";
    font-weight: bold;
    font-size: 13px;
    gap: 5px;
`;

const GroupTag = styled.div`
    border: 1px solid #ededed;
    border-radius: 100px;
    padding: 4px 15px;

    color: #171717;
    background-color: rgb(150, 255, 252);
`;

const MembersPage = () => {
  const { openModal, closeModal } = useModal();
  const [members, setMembers] = useState<MemberResponse[]>([]);
  const { getMemberList } = MemberService();

  const fetchMembers = async () => {
    try {
      const response = await getMemberList();
      setMembers(response.data);
      console.log(response.data);
    } catch (error) {
      console.error("인원 목록 불러오기 실패: ", error);
    }
  };

  const closeAndRefetchModal = () => {
    closeModal();
    setTimeout(() => {
      fetchMembers();
    }, 500);
  };

  useEffect(() => {
    fetchMembers();
  }, []);

  return (<MainContainer>
    <Sidebar />
    <ManagementContainer>
      <Header />
      <TableUtils />
      <Table>
        <colgroup>
          <col width="10%" />
          <col width="30%" />
          <col width="25%" />
          <col width="25%" />
        </colgroup>
        <thead>
          <tr>
            <th>
              <HiddenCheckbox id={"ALL"}/>
              <StyledLabel htmlFor={"ALL"} />
            </th>
            <th>
              <span>이름</span>
            </th>
            <th>
              <span>그룹</span>
            </th>
            <th>
              <span>작업</span>
            </th>
          </tr>
        </thead>
        <tbody>
          {
            members.map(member =>
              <tr>
                <td>
                  <HiddenCheckbox id={member.name}/>
                  <StyledLabel htmlFor={member.name} />
                </td>
                <td>
                  <span>{member.name}</span>
                </td>
                <td>
                  <GroupTagBox>
                    {member.groups.map((group) =>
                      <GroupTag>{group.name}</GroupTag>
                    )}
                  </GroupTagBox>
                </td>
                <td>
                  <ActionButtonGroup>
                    {/*<ActionButton>정보</ActionButton>*/}
                    <ActionButton
                        onClick={() => {
                          openModal({
                            content: <EditMemberModal member={member} closeModal={closeModal} closeRefetch={closeAndRefetchModal}/>,
                          })
                        }}
                    >
                      수정
                    </ActionButton>
                    <ActionButton>삭제</ActionButton>
                  </ActionButtonGroup>
                </td>
              </tr>
            )
          }
        </tbody>
        {/*{*/}
        {/*  Members.map((member) =>*/}
        {/*    <TableItem>*/}
        {/*      <HiddenCheckbox id={member.name}/>*/}
        {/*      <StyledLabel htmlFor={member.name} />*/}
        {/*      <span>{member.name}</span>*/}
        {/*      <span>{member.group}그룹</span>*/}
        {/*      <button>삭제</button>*/}
        {/*    </TableItem>*/}
        {/*  )*/}
        {/*}*/}
      </Table>
    </ManagementContainer>
  </MainContainer>);
};

export default MembersPage;
