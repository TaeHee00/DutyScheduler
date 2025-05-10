export interface Schedules {
  [year: string]: YearSchedule;
}

export interface YearSchedule {
  [month: string]: MonthSchedule;
}

export interface MonthSchedule {
  [day: string]: DaySchedule;
}

export interface DaySchedule {
  [group: string]: Schedule;
}

export interface Schedule {
  scheduleId: string;
  startTime: Date;
  endTime: Date;
  dutyMember: DutyMember;
}

export interface DutyMember {
  id: string;
  name: string;
  groups: DutyTimeGroup[];
}

export interface DutyTimeGroup {
  id: string;
  name: string;
}
