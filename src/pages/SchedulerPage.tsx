import {JSX} from "react";
import styled from "styled-components";
import {DutyGroupProps} from "../components/sidebar/SidebarProps.ts";
import Sidebar from "../components/sidebar/Sidebar.tsx";
import Header from "../components/header/Header.tsx";


const weeks = ["월", "화", "수", "목", "금", "토", "일"];
// 월요일 = 1, 화요일 = 2, 수요일 =3, 목요일 = 4, 금요일 = 5, 토요일 6, 일요일 7
// firstDay = 수요일 3
// 주말 포함 Toggle기능

const MainContainer = styled.div`
    display: flex;
    flex-direction: row;
    align-items: flex-start;
    justify-content: flex-start;
    width: 100%;
`;

const SchedulerContainer = styled.div`
    margin: 0 20px;
    width: 96%;
    flex: 1;
`;

const WeekCell = styled.div`
    border: 1px solid #ccc;
    margin: 2px;
    padding: 5px;
    height: 20px;
    width: 100%;
    min-width: 81px;
    border-radius: 8px;

    font-family: GmarketSans;
    font-weight: 700;

    color: ${({content}) => {
        if (content === "토") {
            return "#5c77fb";
        } else if (content === "일") {
            return "#ff6060";
        }
        return "#121212";
    }}

`;
const DayCell = styled.div`
    display: flex;
    flex-direction: column;
    border: 1px solid #ccc;
    margin: 2px;
    padding: 5px;
    height: 130px;
    width: 100%;
    border-radius: 8px;
    gap: 2px;
    min-width: 81px;
`;
const WeekGroup = styled.div`
    width: 100%;
    height: 100%;
    display: flex;
    flex-direction: row;
    justify-content: start;
    align-items: center;
`;
const DayGroup = styled.div`
    width: 100%;
    height: 100%;
    display: flex;
    flex-direction: row;
    justify-content: start;
    align-items: center;
`;
const WeekDayGroup = styled.div`
    width: 100%;
    height: 100%;
    display: flex;
    flex-direction: column;
    justify-content: start;
    align-items: start;
`;
const ScheduleBlock = styled.div`
    width: 100%;
    height: 28px;
    display: flex;
    flex-direction: row;
    justify-content: start;
    align-items: center;
    text-align: center;
    vertical-align: middle;
    //border: 1px solid #ccc;
    background-color: #EAEAEA;
    color: #121212;
    font-family: GmarketSans;
    letter-spacing: 0;
    font-weight: 300;
    border-radius: 5px;
    padding-left: 3px;
    white-space: nowrap;
`;
const DutyGroup = styled.div<DutyGroupProps>`
    font-family: NEXONFootballGothic;
    font-weight: 300;
    width: 15px;
    height: 20px;
    text-align: center;
    //vertical-align: middle;
    background-color: #ff7f7f;
    color: #F0F0F0;
    border-radius: 3px;
    margin-right: 5px;
    
    background-color: ${({group}) => {
      if (group === "A") {
        return "#32a3ff";
      } else if (group === "B") {
        return "#ffe944";
      } else if (group === "C") {
          return "#ff7f7f";
      }
      return "transparent";
    }}
`;

const CurrentDate = styled.h2`
    font-family: NEXONFootballGothic;
    font-weight: 700;
`;

const MainContentContainer = styled.div`
  display: flex;
    flex-direction: column;
    width: 100%;
    height: 100%;
`;

const SchedulerPage = () => {
  const today = new Date();
  const month = today.getMonth() + 1;
  // 0으로 하면 이전달의 마지막 날
  const lastMonthDay = new Date(today.getFullYear(), month, 0).getDate();
  // setCurrentDate(prev => new Date(prev.getFullYear(), prev.getMonth() + 1, 1));
  today.setDate(1);
  const firstDay = today.getDay();

  return (<MainContainer>
    <Sidebar />
    <MainContentContainer>
      <Header />
      <SchedulerContainer>
        <CurrentDate>{today.getFullYear()}년 {month}월</CurrentDate>
        <WeekGroup>
          {weekCellGen()}
        </WeekGroup>
        <WeekDayGroup>
          {dayCellGen(lastMonthDay, firstDay)}
        </WeekDayGroup>
      </SchedulerContainer>
    </MainContentContainer>
  </MainContainer>);
};

const weekCellGen = (): JSX.Element[] => {
  const result: JSX.Element[] = [];
  for (let i = 0; i < 7; i++) {
    result.push(<WeekCell content={weeks[i]}>{weeks[i]}</WeekCell>);
  }
  return result;
}
const dayCellGen = (lastDay: number, firstDay: number) => {
  const weeks: JSX.Element[] = [];
  let currentWeek: JSX.Element[] = [];
  const prevDay: number = firstDay - 1;
  for (let i = 1; i <= prevDay; i++) {
    currentWeek.push(<DayCell>&nbsp;</DayCell>)
  }
  // 1일부터 마지막 날짜까지 반복
  for (let day = 1; day <= lastDay; day++) {
    currentWeek.push(<DayCell key={day}>
      {day}
      <ScheduleBlock>
        <DutyGroup group={"A"}>
          A
        </DutyGroup>
        김가영
      </ScheduleBlock>
      <ScheduleBlock>
        <DutyGroup group={"B"}>
          B
        </DutyGroup>
        김나영
      </ScheduleBlock>
      <ScheduleBlock>
        <DutyGroup group={"C"}>
          C
        </DutyGroup>
        김다영
      </ScheduleBlock>
    </DayCell>);

    // 7일마다 새로운 주 생성
    if (currentWeek.length === 7) {
      weeks.push(<DayGroup>{currentWeek}</DayGroup>);
      currentWeek = [];
    }
  }

  // 남은 날짜 처리 (마지막 주가 7일 미만인 경우)
  if (currentWeek.length > 0) {
    const blankCell = 7 - currentWeek.length;
    for (let i = 0; i < blankCell; i++) {
      currentWeek.push(<DayCell>&nbsp;</DayCell>);
    }
    weeks.push(<DayGroup>{currentWeek}</DayGroup>);
  }

  return weeks;
}

export default SchedulerPage;
