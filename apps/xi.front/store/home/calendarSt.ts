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
    this.setCalendar(calendarData.oct_4);
  };

  @action getNextWeek = () => {
    this.setCalendar(calendarData[this.calendar?.nextWeek || '']);
  };

  @action getPrevWeek = () => {
    this.setCalendar(calendarData[this.calendar?.prevWeek || '']);
  };

  @action getNextMonth = () => {
    this.setCalendar(calendarData[this.calendar?.nextMonth || '']);
  };

  @action getPrevMonth = () => {
    this.setCalendar(calendarData[this.calendar?.prevMonth || '']);
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

const sepWeek5: WeekDayT[] = [
  {
    name: 'пн',
    day: 26,
    tasks: [],
  },
  {
    name: 'вт',
    day: 27,
    tasks: [deadlineTask()],
  },
  {
    name: 'ср',
    day: 28,
    tasks: [conferenceTask()],
  },
  {
    name: 'чт',
    day: 29,
    tasks: [deadlineTask()],
  },
  {
    name: 'пт',
    day: 30,
    tasks: [conferenceTask()],
  },
  {
    name: 'сб',
    day: 1,
    tasks: [],
  },
  {
    name: 'вс',
    day: 2,
    tasks: [],
  },
];
const octWeek1: WeekDayT[] = [
  {
    name: 'пн',
    day: 3,
    tasks: [deadlineTask()],
  },
  {
    name: 'вт',
    day: 4,
    tasks: [],
  },
  {
    name: 'ср',
    day: 5,
    tasks: [conferenceTask()],
  },
  {
    name: 'чт',
    day: 6,
    tasks: [deadlineTask(), conferenceTask()],
  },
  {
    name: 'пт',
    day: 7,
    tasks: [conferenceTask()],
  },
  {
    name: 'сб',
    day: 8,
    tasks: [],
  },
  {
    name: 'вс',
    day: 9,
    tasks: [conferenceTask()],
  },
];
const octWeek2: WeekDayT[] = [
  {
    name: 'пн',
    day: 10,
    tasks: [deadlineTask()],
  },
  {
    name: 'вт',
    day: 11,
    tasks: [],
  },
  {
    name: 'ср',
    day: 12,
    tasks: [conferenceTask(), conferenceTask()],
  },
  {
    name: 'чт',
    day: 13,
    tasks: [],
  },
  {
    name: 'пт',
    day: 14,
    tasks: [deadlineTask()],
  },
  {
    name: 'сб',
    day: 15,
    tasks: [],
  },
  {
    name: 'вс',
    day: 16,
    tasks: [conferenceTask()],
  },
];
const octWeek3: WeekDayT[] = [
  {
    name: 'пн',
    day: 17,
    tasks: [],
  },
  {
    name: 'вт',
    day: 18,
    tasks: [deadlineTask(), conferenceTask()],
  },
  {
    name: 'ср',
    day: 19,
    tasks: [deadlineTask(), conferenceTask()],
  },
  {
    name: 'чт',
    day: 20,
    tasks: [conferenceTask()],
  },
  {
    name: 'пт',
    day: 21,
    tasks: [],
  },
  {
    name: 'сб',
    day: 22,
    tasks: [deadlineTask(), deadlineTask()],
  },
  {
    name: 'вс',
    day: 23,
    tasks: [],
  },
];
const octWeek4: WeekDayT[] = [
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
    current: true,
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
const novWeek1: WeekDayT[] = [
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

const calendarSepWeek5: CalendarT = {
  year: 2022,
  month: 'Сентябрь',
  week: sepWeek5,
  nextWeek: 'oct_1',
  prevWeek: 'sep_5',
  nextMonth: 'nov_1',
  prevMonth: 'sep_5',
};
const calendarOctWeek1: CalendarT = {
  year: 2022,
  month: 'Октябрь',
  week: octWeek1,
  nextWeek: 'oct_2',
  prevWeek: 'sep_5',
  nextMonth: 'nov_1',
  prevMonth: 'sep_5',
};
const calendarOctWeek2: CalendarT = {
  year: 2022,
  month: 'Октябрь',
  week: octWeek2,
  nextWeek: 'oct_3',
  prevWeek: 'oct_1',
  nextMonth: 'nov_1',
  prevMonth: 'sep_5',
};
const calendarOctWeek3: CalendarT = {
  year: 2022,
  month: 'Октябрь',
  week: octWeek3,
  nextWeek: 'oct_4',
  prevWeek: 'oct_2',
  nextMonth: 'nov_1',
  prevMonth: 'sep_5',
};
const calendarOctWeek4: CalendarT = {
  year: 2022,
  month: 'Октябрь',
  week: octWeek4,
  nextWeek: 'nov_1',
  prevWeek: 'oct_3',
  nextMonth: 'nov_1',
  prevMonth: 'sep_5',
};
const calendarNovWeek1: CalendarT = {
  year: 2022,
  month: 'Ноябрь',
  week: novWeek1,
  nextWeek: 'nov_1',
  prevWeek: 'oct_4',
  nextMonth: 'nov_1',
  prevMonth: 'sep_5',
};

const calendarData = {
  sep_5: calendarSepWeek5,
  oct_1: calendarOctWeek1,
  oct_2: calendarOctWeek2,
  oct_3: calendarOctWeek3,
  oct_4: calendarOctWeek4,
  nov_1: calendarNovWeek1,
};

export default CalendarSt;
