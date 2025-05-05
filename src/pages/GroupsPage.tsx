import styled from "styled-components";
import Sidebar from "../components/sidebar/Sidebar.tsx";
import TableUtils from "../components/members/table/TableUtils.tsx";
import Header from "../components/header/Header.tsx";
import { useModal } from "@lasbe/react-modal";
import {useState, useEffect} from "react";
import {GroupService} from "../services/group/GroupService.ts";
import {GroupResponse} from "../services/group/GroupResponse.tsx";

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

const getRandomDate = (start: Date, end: Date): Date => {
  const startDate = start.getTime();
  const endDate = end.getTime();

  return new Date(startDate + Math.random() * (endDate - startDate));
};

const toDateFormatting = (strDate: string): string => {
  const date = new Date(strDate);
  const year = date.getFullYear();
  const month = (date.getMonth() + 1).toString().padStart(2, "0");
  const day = date.getDate().toString().padStart(2, "0");
  const hours = date.getHours().toString().padStart(2, "0");
  const minutes = date.getMinutes().toString().padStart(2, "0");

  return `${year}-${month}-${day} ${hours}:${minutes}`;
}

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

const GroupsPage = () => {
  const [groups, setGroups] = useState<GroupResponse[]>([]);
  const { getGroupList } = GroupService();

  useEffect(() => {
    const fetchGroups = async () => {
      try {
        const response = await getGroupList();
        setGroups(response.data);
      } catch (error) {
        console.error("그룹 목록 불러오기 실패:", error);
      }
    };

    fetchGroups();
  }, []);

  return (<MainContainer>
    <Sidebar />
    <ManagementContainer>
      <Header />
      <TableUtils />
      <Table>
        <colgroup>
          <col width="25%" />
          <col width="10%" />
          <col width="35%" />
          <col width="20%" />
        </colgroup>
        <thead>
          <tr>
            <th>
              <span>그룹명</span>
            </th>
            <th>
              <span>인원수</span>
            </th>
            <th>
              <span>생성일</span>
            </th>
            <th>
              <span>작업</span>
            </th>
          </tr>
        </thead>
        <tbody>
          {
            groups.map(group =>
              <tr>
                <td>
                  <span>{group.name}</span>
                </td>
                <td>
                  <span>{group.count} 명</span>
                </td>
                <td>
                  <span>{toDateFormatting(group.createdAt)}</span>
                  {/*<span>{group.createdAt}</span>*/}
                </td>
                <td>
                  <ActionButtonGroup>
                    <ActionButton>수정</ActionButton>
                    <ActionButton>삭제</ActionButton>
                  </ActionButtonGroup>
                </td>
              </tr>
            )
          }
        </tbody>
      </Table>
    </ManagementContainer>
  </MainContainer>);
};

export default GroupsPage;
