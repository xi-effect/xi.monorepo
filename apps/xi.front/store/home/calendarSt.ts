import { v4 } from 'uuid';

import { action, observable, makeObservable } from 'mobx';
import { CalendarT, TaskT, WeekDayT } from 'models/calendar';
import RootStore from '../rootStore';

class CalendarSt {
  rootStore: RootStore;

  constructor(rootStore: RootStore) {
    this.rootStore = rootStore;
    makeObservable(this);
  }

  @observable calendar: CalendarT | null = null;

  @action setCalendar = (data: CalendarT) => {
    this.calendar = data;
  };

  @action getCalendar = () => {
    this.setCalendar(calendarData.current);
  };

  @action getNextWeek = () => {
    this.setCalendar(calendarData[this.calendar?.nextWeek || '']);
  };

  @action getPrevWeek = () => {
    this.setCalendar(calendarData[this.calendar?.prevWeek || '']);
  };
}

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

const weekCurrent: WeekDayT[] = [
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
const weekNext: WeekDayT[] = [
  {
    name: 'пн',
    day: 1,
    tasks: [deadlineTask(), conferenceTask()],
  },
  {
    name: 'вт',
    day: 2,
    tasks: [deadlineTask()],
  },
  {
    name: 'ср',
    day: 3,
    tasks: [deadlineTask(), deadlineTask()],
  },
  {
    name: 'чт',
    day: 4,
    tasks: [],
  },
  {
    name: 'пт',
    day: 5,
    tasks: [deadlineTask(), conferenceTask()],
  },
  {
    name: 'сб',
    day: 6,
    tasks: [deadlineTask(), conferenceTask()],
  },
  {
    name: 'вс',
    day: 7,
    tasks: [conferenceTask(), conferenceTask()],
  },
];
const weekPrev: WeekDayT[] = [
  {
    name: 'пн',
    day: 17,
    tasks: [deadlineTask()],
  },
  {
    name: 'вт',
    day: 18,
    tasks: [conferenceTask()],
  },
  {
    name: 'ср',
    day: 19,
    tasks: [deadlineTask(), deadlineTask()],
  },
  {
    name: 'чт',
    day: 20,
    tasks: [conferenceTask(), conferenceTask()],
  },
  {
    name: 'пт',
    day: 21,
    tasks: [],
  },
  {
    name: 'сб',
    day: 22,
    tasks: [conferenceTask()],
  },
  {
    name: 'вс',
    day: 23,
    tasks: [conferenceTask(), conferenceTask()],
  },
];

const calendarCurrent: CalendarT = {
  year: 2022,
  month: 'Октябрь',
  week: weekCurrent,
  nextWeek: 'nextWeek',
  prevWeek: 'prevWeek',
  nextMonth: 'nextMonth',
  prevMonth: 'prevMonth',
};
const calendarNextWeek: CalendarT = {
  year: 2022,
  month: 'Ноябрь',
  week: weekNext,
  nextWeek: 'nextWeek',
  prevWeek: 'current',
  nextMonth: '',
  prevMonth: '',
};
const calendarPrevWeek: CalendarT = {
  year: 2022,
  month: 'Октябрь',
  week: weekPrev,
  nextWeek: 'current',
  prevWeek: 'prevWeek',
  nextMonth: '',
  prevMonth: '',
};

const calendarData = {
  current: calendarCurrent,
  nextWeek: calendarNextWeek,
  prevWeek: calendarPrevWeek,
};

export default CalendarSt;
