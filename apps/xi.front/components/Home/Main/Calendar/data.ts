import { v4 } from 'uuid';
import { CalendarT, TaskT, WeekDayT } from './types';

const deadlineTask: () => TaskT = () => ({
  id: v4(),
  name: 'Название задания',
  description: '',
  deadline: true,
});
const conferenceTask: () => TaskT = () => ({
  id: v4(),
  name: 'Название конференции',
  description: '',
  type: 'conference',
});

const week: WeekDayT[] = [
  {
    name: 'пн',
    day: 24,
    tasks: [deadlineTask(), conferenceTask()],
  },
  {
    name: 'вт',
    day: 25,
    tasks: [deadlineTask()],
  },
  {
    name: 'ср',
    day: 26,
    tasks: [deadlineTask(), conferenceTask()],
  },
  {
    name: 'чт',
    day: 27,
    tasks: [deadlineTask(), deadlineTask()],
  },
  {
    name: 'пт',
    day: 28,
    tasks: [conferenceTask()],
  },
  {
    name: 'сб',
    day: 29,
    tasks: [deadlineTask(), conferenceTask()],
  },
  {
    name: 'вс',
    day: 30,
    tasks: [],
  },
];

export const data: CalendarT = {
  year: 2022,
  month: 'Октябрь',
  week,
  nextWeek: '',
  previousWeek: '',
};

export const Weekends = ['сб', 'вс'];
