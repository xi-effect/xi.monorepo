export type TaskType = 'conference';

export type TaskT = {
  name: string;
  description: string;
  deadline?: boolean;
  type?: TaskType;
};

export type WeekDayT = {
  name: string;
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
