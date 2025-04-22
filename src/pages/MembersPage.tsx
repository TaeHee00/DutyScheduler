import styled from "styled-components";
import Sidebar from "../components/sidebar/Sidebar.tsx";
import TableUtils from "../components/members/table/TableUtils.tsx";
import Header from "../components/header/Header.tsx";

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

const Members = [
  {"name": "김철수", "group": "A"},
  {"name": "나현영", "group": "B"},
  {"name": "이경하", "group": "A"},
  {"name": "김수지", "group": "B"},
  {"name": "남궁수", "group": "B"},
  {"name": "남궁현정", "group": "C"}
];

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
`;

const ActionButtonGroup = styled.div`
  display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: center;
    gap: 5px;
`;

const MembersPage = () => {
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
            Members.map(member =>
              <tr>
                <td>
                  <HiddenCheckbox id={member.name}/>
                  <StyledLabel htmlFor={member.name} />
                </td>
                <td>
                  <span>{member.name}</span>
                </td>
                <td>
                  <span>{member.group}그룹</span>
                </td>
                <td>
                  <ActionButtonGroup>
                    <ActionButton>정보</ActionButton>
                    <ActionButton>수정</ActionButton>
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
