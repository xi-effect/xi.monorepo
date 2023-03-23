import { CalendarT, TaskT, WeekDayT } from './types';

const deadlineTask: TaskT = { name: 'Название задания', description: '', deadline: true };
const conferenceTask: TaskT = {
  name: 'Название задания',
  description: '',
  deadline: true,
  type: 'conference',
};

const week: WeekDayT[] = [
  {
    name: 'пн',
    day: 24,
    tasks: [deadlineTask, conferenceTask],
  },
  {
    name: 'вт',
    day: 25,
    tasks: [deadlineTask],
  },
  {
    name: 'ср',
    day: 26,
    tasks: [deadlineTask, conferenceTask],
  },
  {
    name: 'чт',
    day: 27,
    tasks: [{ name: '', description: '', deadline: true }],
  },
  {
    name: 'пт',
    day: 28,
    tasks: [deadlineTask, deadlineTask],
  },
  {
    name: 'сб',
    day: 29,
    tasks: [conferenceTask],
  },
  {
    name: 'вс',
    day: 30,
    tasks: [deadlineTask, conferenceTask],
  },
];

export const data: CalendarT = {
  year: 2022,
  month: 'Октябрь',
  week,
  nextWeek: '',
  previousWeek: '',
};
