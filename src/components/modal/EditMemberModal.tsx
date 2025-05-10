import styled from "styled-components";
import {GroupService} from "../../services/group/GroupService.ts";
import {useState, ChangeEvent, useEffect} from "react";
import {GroupResponse} from "../../services/group/GroupResponse.tsx";
import {MemberResponse} from "../../services/member/MemberResponse.tsx";
import {EditGroup} from "../../services/group/EditGroup.ts";
import {MemberService} from "../../services/member/MemberService.ts";

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
    margin-top: 25px;
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

const GroupBox = styled.div`
    display: flex;
    flex-direction: row;
    align-items: center;
    //justify-content: center;
    text-align: center;
    margin-top: 5px;
    gap: 10px;
`;

interface EditMemberModalProps {
  member: MemberResponse;
  closeModal: () => void;
  closeRefetch: () => void;
}

export const EditMemberModal = ({ member, closeModal, closeRefetch }: EditMemberModalProps) => {
  const [memberData, setMemberData] = useState<MemberResponse>(member);
  const [groups, setGroups] = useState<EditGroup[]>([]);
  const { getGroupList } = GroupService();
  const { editMember } = MemberService();

  const onChangeMemberData = (e: ChangeEvent<HTMLInputElement>) => {
    setMemberData((prev) => ({...prev, [e.target.name]: e.target.value}));
  }

  const handleCheck = (id: string) => {
    setGroups((prevGroups) => {
      return prevGroups.map((prevGroup) =>
        prevGroup.id === id ? {...prevGroup, isChecked: !prevGroup.isChecked} : prevGroup
      );
    });
  }

  useEffect(() => {
    const fetchGroups = async () => {
      try {
        const response = await getGroupList();
        response.data.map((item) => {
          const matchedGroup = memberData.groups.find(group => group.id === item.id);
          if (matchedGroup) {
            setGroups((prev) => [...prev, {id: item.id, name: item.name, isChecked: true}])
          } else {
            setGroups((prev) => [...prev, {id: item.id, name: item.name, isChecked: false}])
          }
        });
      } catch (error) {
        console.error("그룹 목록 불러오기 실패:", error);
      }
    };

    fetchGroups();
  }, []);

  return (<>
    <Header>{member.name} 정보 수정</Header>
    <Body>
      이름
      <Input
        placeholder={"예시: 김철수"}
        name="name"
        value={memberData.name}
        onChange={onChangeMemberData}
      />
      그룹
      {groups.map((group) => {
        return <GroupBox>
          <HiddenCheckbox
            id={group.id}
            checked={group.isChecked}
            onChange={() => {handleCheck(group.id)}}
          />
          <StyledLabel htmlFor={group.id} />
          {group.name}
        </GroupBox>
      })}
      <Footer>
        <Button
          highlight={true}
          onClick={() => {
            try {
              editMember({
                memberId: memberData.id,
                memberName: memberData.name,
                groups: groups,
              });
              closeRefetch();
            } catch (error) {
              alert(error);
            }
          }}
        >
          수정
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
