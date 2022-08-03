const sampleList = [
  {
    id: 1,
    title: '공지1',
    content: '월요일 공지입니다.',
  },
  {
    id: 2,
    title: '공지2',
    content: '화요일 공지입니다.',
  },
  {
    id: 3,
    title: '공지3',
    content: '수요일 공지입니다.',
  },
  {
    id: 4,
    title: '공지4',
    content: '목요일 공지입니다.',
  },
  {
    id: 5,
    title: '공지5',
    content: '금요일 공지입니다.',
  },
  {
    id: 6,
    title: '공지6',
    content: '토요일 공지입니다.',
  },
  {
    id: 7,
    title: '공지7',
    content: '일요일 공지입니다.',
  },
];

const activityJson: any[] = [];
Array.from(Array(15).keys()).map((e, idx) => {
  const rand = Math.floor(Math.random() * sampleList.length);
  activityJson.push({
    id: idx + 1,
    title: sampleList[rand].title,
    content: sampleList[rand].content,
  });
});

export { activityJson };
