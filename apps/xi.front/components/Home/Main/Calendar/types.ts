export type TaskType = 'conference';

export type TaskT = {
  id: string;
  name: string;
  description: string;
  deadline?: boolean;
  type?: TaskType;
};

export type WeekendsNamesT = 'сб' | 'вс';
export type WeekdayNamesT = 'пн' | 'вт' | 'ср' | 'чт' | 'пт';
export type WeekDayT = {
  name: WeekendsNamesT | WeekdayNamesT;
  day: number;
  tasks: TaskT[];
};

export type CalendarT = {
  year: number;
  month: string;
  week: WeekDayT[];
  /* request to the next get next week */
  nextWeek: string;
  previousWeek: string;
};
