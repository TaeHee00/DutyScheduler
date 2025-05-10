import {JSX} from "react";
import styled from "styled-components";
import {DutyGroupProps} from "../components/sidebar/SidebarProps.ts";
import Sidebar from "../components/sidebar/Sidebar.tsx";
import Header from "../components/header/Header.tsx";
import {Schedules} from "../services/schedule/Schedules.ts";


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
    max-width: 950px;
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

const Schedules: Schedules = {
  "2025": {
    "05": {
      "01": {
        "A": {
          "scheduleId": "a1160721-bb47-45b9-a08c-a1fdabc479c3",
          "startTime": new Date(),
          "endTime": new Date(),
          "dutyMember": {
            "id": "8e7c26ef-fb77-4360-9d36-404e39387d93",
            "name": "남궁수",
            "groups": [
              {
                "id": "c13414b4-3257-4802-b25d-cdba52d4d91e",
                "name": "A",
              }
            ],
          }
        },
        "B": {
          "scheduleId": "58300a47-e2e5-4743-945c-c622adc056fa",
          "startTime": new Date(),
          "endTime": new Date(),
          "dutyMember": {
            "id": "b655bd28-74c0-41d5-80dd-73939b9d34d7",
            "name": "남궁현정",
            "groups": [
              {
                "id": "987773b5-443f-453e-8ead-b3ff727ff901",
                "name": "A",
              }
            ],
          }
        },
        "C": {
          "scheduleId": "fd821b88-c547-4af0-ac03-471837767819",
          "startTime": new Date(),
          "endTime": new Date(),
          "dutyMember": {
            "id": "75a6e94e-ab10-400f-b011-3655b02cf081",
            "name": "이경하",
            "groups": [
              {
                "id": "05c39480-39a5-4e14-a2c2-3780e99b86aa",
                "name": "A",
              }
            ],
          }
        },
      },
      "02": {
        "A": {
          "scheduleId": "5978be57-9215-4044-a686-fc7986aa95d5",
          "startTime": new Date(),
          "endTime": new Date(),
          "dutyMember": {
            "id": "d9c07537-bd39-445a-b386-2496360e13ec",
            "name": "김철수",
            "groups": [
              {
                "id": "718d59fa-7ce6-49dd-b5cd-86a47c247a36",
                "name": "A",
              }
            ],
          }
        },
        "B": {
          "scheduleId": "df7cec7a-0bdb-4355-9e91-fada6535adac",
          "startTime": new Date(),
          "endTime": new Date(),
          "dutyMember": {
            "id": "80b01547-696d-4ece-9770-da54a2c8e072",
            "name": "남궁수",
            "groups": [
              {
                "id": "397338cf-d93a-4488-b713-d5ebb29155b5",
                "name": "A",
              }
            ],
          }
        },
        "C": {
          "scheduleId": "0c738b4d-d211-4af0-becc-ec260289a5e1",
          "startTime": new Date(),
          "endTime": new Date(),
          "dutyMember": {
            "id": "94d1fdc1-e5c6-450a-a4e1-b0ca9a33067a",
            "name": "남궁현정",
            "groups": [
              {
                "id": "09d01297-3b48-43e2-9986-db4fe830b079",
                "name": "A",
              }
            ],
          }
        },
      },
    }
  }
};

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
          {dayCellGen(
            lastMonthDay,
            firstDay,
            today.getFullYear().toString(),
            month.toString().padStart(2, '0'),
          )}
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
const dayCellGen = (
  lastDay: number,
  firstDay: number,
  year: string,
  month: string,
) => {
  const weeks: JSX.Element[] = [];
  let currentWeek: JSX.Element[] = [];
  const prevDay: number = firstDay - 1;
  for (let i = 1; i <= prevDay; i++) {
    currentWeek.push(<DayCell>&nbsp;</DayCell>)
  }

  // 1일부터 마지막 날짜까지 반복
  for (let day = 1; day <= lastDay; day++) {
    currentWeek.push(
      <DayCell key={day}>
        {day.toString()}
        {
          Schedules[year][month][day.toString().padStart(2, '0')] && (
            <>
              {Schedules[year][month][day.toString().padStart(2, '0')]["A"] && (
                <ScheduleBlock>
                  <DutyGroup group="A">A</DutyGroup>
                  {Schedules[year][month][day.toString().padStart(2, '0')]["A"].dutyMember.name}
                </ScheduleBlock>
              )}
              {Schedules[year][month][day.toString().padStart(2, '0')]["B"] && (
                <ScheduleBlock>
                  <DutyGroup group="B">B</DutyGroup>
                  {Schedules[year][month][day.toString().padStart(2, '0')]["B"].dutyMember.name}
                </ScheduleBlock>
              )}
              {Schedules[year][month][day.toString().padStart(2, '0')]["C"] && (
                <ScheduleBlock>
                  <DutyGroup group="C">C</DutyGroup>
                  {Schedules[year][month][day.toString().padStart(2, '0')]["C"].dutyMember.name}
                </ScheduleBlock>
              )}
            </>
          )
        }
      </DayCell>
    );

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
