
const { Prisma } = require('@prisma/client');

const user = [
    {
        id: '',
        name: 'John Doe',
        email: 'john.doe@example.com',
        image: '/images/user.png',
        createdCourses: [],
        ownedCourses: [],
        lessons: [],
    },
];

const course = [
    {
        id: '',
        name: 'Html',
        image: '/images/html-5.svg',
        presentation: 'Things you can wear on your head',
        users: [],
        lessons: []  
    },
    {
        id: '',
        name: 'JavaScript',
        image: '/images/javascript.svg',
        presentation: 'Things you can wear on your feet',
        users: [],
        lessons: []  
    },
    {
        id: '',
        name: 'React',
        image: '/images/react.svg',
        presentation: 'Things you wear on the top half of your body',
        users: [],
        lessons: []  
    },
];

const lesson = [
  {
    id: '',  
    name: 'Cool helmet.',
    rank: '',
    content: 'A nice helmet to wear on your head',
    state: PUBLIC,
    course: '',
    users: ['abc', 'def', 'ghi', 'jkl']
  },
  {
    id: '',  
    name: 'Grey T-Shirt',
    rank: '',
    content: 'A nice shirt that you can wear on your body',
    state: PUBLIC,
    course: '',
    users: ['abc', 'def', 'ghi', 'jkl']
  },
  {
    id: '',  
    name: 'JavaScript',
    rank: '',
    content: 'Cool socks that you can wear on your feet',
    state: PUBLIC,
    course: '',
    users: ['abc', 'def', 'ghi', 'jkl']
  },
  {
    id: '',  
    name: 'Sweatshirt',
    rank: '',
    content: 'Cool sweatshirt that you can wear on your body',
    state: PUBLIC,
    course: '',
    users: ['abc', 'def', 'ghi', 'jkl']
  },
];

const courseOnUser = [
    {
        id: '',
        userId: '',
        courseId: '',
        createdAt: '',
        canceledAt: '',
        course: 'Html',
        user: [] 
    },
    {
        id: '',
        userId: '',
        courseId: '',
        createdAt: '',
        canceledAt: '',
        course: 'Socks',
        user: [] 
    },
    {
        id: '',
        userId: '',
        courseId: '',
        createdAt: '',
        canceledAt: '',
        course: 'React',
        user: [] 
    },
];

const lessonOnUser = [
    {
        id: '',
        name: 'Cool helmet.',
        userId: '',
        lessonId: '',
        progress: '',
        createdAt: '',
        lesson: '',
        user: ['abc', 'def', 'ghi', 'jkl']
    },
    {
        id: '',
        name: 'Grey T-Shirt',
        userId: '',
        lessonId: '',
        progress: '',
        createdAt: '',
        lesson: '',
        user: ['abc', 'def', 'ghi', 'jkl']
    },
    {
        id: '',
        name: 'Socks',
        userId: '',
        lessonId: '',
        progress: '',
        createdAt: '',
        lesson: '',
        user: ['abc', 'def', 'ghi', 'jkl']
    },
    {
        id: '',
        name: 'Sweatshirt',
        userId: '',
        lessonId: '',
        progress: '',
        createdAt: '',
        lesson: '',
        user: ['abc', 'def', 'ghi', 'jkl']
    },
  ];

module.exports = {
  user,
  course,
  lesson,
  courseOnUser,
  lessonOnUser
};
