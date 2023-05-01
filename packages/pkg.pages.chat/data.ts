import { ChatInfoT, ChatMessagesT } from './types';

export const chatInfo: ChatInfoT = {
  id: 'chat_1',
  name: '4Д — БЖ',
  host: { username: 'Кастырин И.И.', avatar: null },
};

export const chatMessages: ChatMessagesT = {
  id: 'chat_1',
  messages: [
    {
      date: '2023-03-18',
      messages: [
        {
          id: 'message1',
          createdTime: '2023-03-18T16:43:00',
          type: 'text',
          text: `Термодина́мика (греч. θέρμη — «тепло», δύναμις — «сила») — раздел физики, 
    изучающий наиболее общие свойства макроскопических систем и способы передачи и превращения энергии в таких системах.
    В термодинамике изучаются состояния и процессы, для описания которых можно ввести понятие температуры. 
    Термодинамика — это феноменологическая наука, опирающаяся на обобщения опытных фактов. Процессы, происходящие в 
    термодинамических системах, описываются макроскопическими величинами (температура, давление, концентрации компонентов), 
    которые вводятся для описания систем, состоящих из большого числа частиц, и не применимы к отдельным молекулам и атомам, 
    в отличие, например, от величин, вводимых в механике или электродинамике.`,
          author: {
            username: 'Игорь Букшев',
            avatar: null,
          },
        },
      ],
    },
    {
      date: '2023-03-19',
      messages: [
        {
          id: 'message2',
          createdTime: '2023-03-19T09:35:00',
          type: 'text',
          text: 'Привет! Нужна твоя помощь.',
          author: {
            username: 'Игорь Букшев',
            avatar: null,
          },
        },
        {
          id: 'message3',
          createdTime: '2023-03-19T18:14:00',
          type: 'text',
          text: 'Окс',
          author: {
            username: 'Михаил Морозов',
            avatar: null,
          },
        },
      ],
    },
    {
      date: '2023-03-20',
      messages: [
        {
          id: 'message4',
          createdTime: '2023-03-20T10:35:00',
          type: 'file',
          text: 'File',
          author: {
            username: 'Игорь Букшев',
            avatar: null,
          },
        },
      ],
    },
  ],
  next: '',
};

export const chatMessagesHistory: ChatMessagesT = {
  id: 'chat_1',
  messages: [
    {
      date: '2023-03-14',
      messages: [
        {
          id: 'message5',
          createdTime: '2023-03-14T15:03:00',
          type: 'text',
          text: 'Какое задание по физике?',
          author: {
            username: 'Игорь Букшев',
            avatar: null,
          },
        },
        {
          id: 'message5',
          createdTime: '2023-03-14T15:05:05',
          type: 'text',
          text: 'Непрерывность тока и закон Кирхгофа. Надо решить несколько задач и ответить на несколько вопросов.',
          author: {
            username: 'Михаил Морозов',
            avatar: null,
          },
        },
        {
          id: 'message5',
          createdTime: '2023-03-14T15:05:08',
          type: 'text',
          text: 'Спасибо',
          author: {
            username: 'Игорь Букшев',
            avatar: null,
          },
        },
      ],
    },
    {
      date: '2023-03-15',
      messages: [
        {
          id: 'message5',
          createdTime: '2023-03-15T15:03:00',
          type: 'text',
          text: 'Всем привет! Что задали?',
          author: {
            username: 'Игорь Букшев',
            avatar: null,
          },
        },
      ],
    },
    {
      date: '2023-03-16',
      messages: [
        {
          id: 'message2',
          createdTime: '2023-03-16T09:35:00',
          type: 'text',
          text: 'Привет! Нужна твоя помощь.',
          author: {
            username: 'Игорь Букшев',
            avatar: null,
          },
        },
        {
          id: 'message3',
          createdTime: '2023-03-16T18:14:00',
          type: 'text',
          text: 'Окс',
          author: {
            username: 'Михаил Морозов',
            avatar: null,
          },
        },
      ],
    },
    {
      date: '2023-03-17',
      messages: [
        {
          id: 'message5',
          createdTime: '2023-03-17T15:03:00',
          type: 'text',
          text: 'Всем привет! Что задали?',
          author: {
            username: 'Игорь Букшев',
            avatar: null,
          },
        },
        {
          id: 'message4',
          createdTime: '2023-03-17T10:35:00',
          type: 'file',
          text: 'File',
          author: {
            username: 'Игорь Букшев',
            avatar: null,
          },
        },
      ],
    },
  ],
  next: '',
};
