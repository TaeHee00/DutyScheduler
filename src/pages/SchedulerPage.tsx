import {JSX, useState} from "react";
import styled from "styled-components";

const weeks = ["월", "화", "수", "목", "금", "토", "일"];
// 월요일 = 1, 화요일 = 2, 수요일 =3, 목요일 = 4, 금요일 = 5, 토요일 6, 일요일 7
// firstDay = 수요일 3
// 주말 포함 Toggle기능

const WeekCell = styled.div`
  border: 1px solid #ccc;
  margin: 2px;
  padding: 5px;
  height: 30px;
  width: 100px;
    border-radius: 8px;
`;
const DayCell = styled.div`
    display: flex;
    flex-direction: column;
  border: 1px solid #ccc;
  margin: 2px;
  padding: 5px;
  height: 100px;
  width: 100px;
    border-radius: 8px;
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
  display: flex;
    flex-direction: row;
    justify-content: start;
    align-items: start;
    border: 1px solid #ccc;
    
`;

const SchedulerPage = () => {
  const today = new Date();
  const month = today.getMonth() + 1;
  // 0으로 하면 이전달의 마지막 날
  const lastMonthDay = new Date(today.getFullYear(), month, 0).getDate();
  // setCurrentDate(prev => new Date(prev.getFullYear(), prev.getMonth() + 1, 1));
  today.setDate(1);
  const firstDay = today.getDay();


  return (<>
    <div>
      <h2>{today.getFullYear()}년 {month}월</h2>
      <WeekGroup>
        {weekCellGen()}
      </WeekGroup>
      <WeekDayGroup>
        {dayCellGen(lastMonthDay, firstDay)}
      </WeekDayGroup>
    </div>
  </>);
};

const weekCellGen = () : JSX.Element[] => {
  const result: JSX.Element[] = [];
  for (let i = 0; i < 7; i++) {
    result.push(<WeekCell>{weeks[i]}</WeekCell>);
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
      <ScheduleBlock>A | 노무현</ScheduleBlock>
      <ScheduleBlock>B | 박무현</ScheduleBlock>
      <ScheduleBlock>C | 논무현</ScheduleBlock>
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
