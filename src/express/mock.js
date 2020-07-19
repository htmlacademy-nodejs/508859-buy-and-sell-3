'use strict';

const pageContentMain = {
  page: `main`,
  isAuth: true,
  categoryList: [
    {
      id: 1,
      img: {
        small: `/img/cat.jpg`,
        big: `/img/cat@2x.jpg 2x`
      },
      name: `Дом`,
      count: 81
    },
    {
      id: 2,
      img: {
        small: `/img/cat02.jpg`,
        big: `/img/cat02@2x.jpg 2x`
      },
      name: `Электроника`,
      count: 62
    },
    {
      id: 3,
      img: {
        small: `/img/cat03.jpg`,
        big: `/img/cat03@2x.jpg 2x`
      },
      name: `Одежда`,
      count: 106
    },
    {
      id: 4,
      img: {
        small: `/img/cat04.jpg`,
        big: `/img/cat04@2x.jpg 2x`
      },
      name: `Спорт/отдых`,
      count: 86
    },
    {
      id: 5,
      img: {
        small: `/img/cat05.jpg`,
        big: `/img/cat05@2x.jpg 2x`
      },
      name: `Авто`,
      count: 34
    },
    {
      id: 6,
      img: {
        small: `/img/cat06.jpg`,
        big: `/img/cat06@2x.jpg 2x`
      },
      name: `Книги`,
      count: 92
    }
  ],
  ticketList: [
    {
      id: `01`,
      img: {
        small: `/img/item01.jpg`,
        big: `/img/item01@2x.jpg 2x`
      },
      label: `КУПЛЮ`,
      categories: [`Дом`],
      title: `Монстера`,
      price: 1000,
      description: `Куплю монстеру зеленую в хорошем зеленом состоянии, буду поливать...`
    },
    {
      id: `02`,
      img: {
        small: `/img/item02.jpg`,
        big: `/img/item02@2x.jpg 2x`
      },
      label: `ПРОДАМ`,
      categories: [`Дом`],
      title: `Мое старое кресло`,
      price: 4000,
      description: `Продам свое старое кресло, чтобы сидеть и читать книги зимними...`
    },
    {
      id: `03`,
      img: {
        small: `/img/item03.jpg`,
        big: `/img/item03@2x.jpg 2x`
      },
      label: `ПРОДАМ`,
      categories: [`ЭЛЕКТРОНИКА`, `Дом`],
      title: `Дедушкины часы`,
      price: 45000,
      description: `Продаю дедушкины часы в прекрасном состоянии, ходят до...`
    },
    {
      id: `04`,
      img: {
        small: `/img/item04.jpg`,
        big: `/img/item04@2x.jpg 2x`
      },
      label: `Куплю`,
      categories: [`ЭЛЕКТРОНИКА`, `Дом`],
      title: `Кофеварка`,
      price: 2000,
      description: `Куплю вот такую итальянскую кофеварку, можно любой фирмы...`
    },
    {
      id: `05`,
      img: {
        small: `/img/item05.jpg`,
        big: `/img/item05@2x.jpg 2x`
      },
      label: `ПРОДАМ`,
      categories: [`Авто`, `ЭЛЕКТРОНИКА`],
      title: `Ленд Ровер`,
      price: 900000,
      description: `Куплю монстеру зеленую в хорошем зеленом состоянии, буду поливать...`
    },
    {
      id: `06`,
      img: {
        small: `/img/item06.jpg`,
        big: `/img/item06@2x.jpg 2x`
      },
      label: `ПРОДАМ`,
      categories: [`ЭЛЕКТРОНИКА`],
      title: `Ableton`,
      price: 88000,
      description: `Продам свое старое кресло, чтобы сидеть и читать книги зимними...`
    },
    {
      id: `07`,
      img: {
        small: `/img/item07.jpg`,
        big: `/img/item07@2x.jpg 2x`
      },
      label: `ПРОДАМ`,
      categories: [`Спорт и отдых`],
      title: `Доска`,
      price: 55000,
      description: `Продаю дедушкины часы в прекрасном состоянии, ходят до...`
    },
    {
      id: `08`,
      img: {
        small: `/img/item08.jpg`,
        big: `/img/item08@2x.jpg 2x`
      },
      label: `Куплю`,
      categories: [`ЭЛЕКТРОНИКА`],
      title: `Фотик Canon`,
      price: 32000,
      description: `Куплю вот такую итальянскую кофеварку, можно любой фирмы...`
    },
  ],
  favoriteList: [
    {
      id: `09`,
      img: {
        small: `/img/item09.jpg`,
        big: `/img/item09@2x.jpg 2x`
      },
      label: `Куплю`,
      categories: [`Дом`],
      title: `Монстера`,
      price: 1000,
      description: `Куплю монстеру зеленую в хорошем зеленом состоянии, буду поливать...`
    },
    {
      id: `10`,
      img: {
        small: `/img/item10.jpg`,
        big: `/img/item10@2x.jpg 2x`
      },
      label: `ПРОДАМ`,
      categories: [`Дом`],
      title: `Мое старое кресло`,
      price: 4000,
      description: `Продам свое старое кресло, чтобы сидеть и читать книги зимними...`
    },
    {
      id: `11`,
      img: {
        small: `/img/item011.jpg`,
        big: `/img/item11@2x.jpg 2x`
      },
      label: `ПРОДАМ`,
      categories: [`ЭЛЕКТРОНИКА`],
      title: `Дедушкины часы`,
      price: 45000,
      description: `Продаю дедушкины часы в прекрасном состоянии, ходят до...`
    },
    {
      id: `04`,
      img: {
        small: `/img/item04.jpg`,
        big: `/img/item04@2x.jpg 2x`
      },
      label: `Куплю`,
      categories: [`Дом`],
      title: `Кофеварка`,
      price: 2000,
      description: `Куплю вот такую итальянскую кофеварку, можно любой фирмы...`
    },
  ]
};

const pageContentCategory = {
  page: `category`,
  isAuth: true,
  categoryList: [
    {
      id: 1,
      img: {
        small: `/img/cat.jpg`,
        big: `/img/cat@2x.jpg 2x`
      },
      name: `Дом`,
      count: 81
    },
    {
      id: 2,
      img: {
        small: `/img/cat02.jpg`,
        big: `/img/cat02@2x.jpg 2x`
      },
      isActive: true,
      name: `Электроника`,
      count: 62
    },
    {
      id: 3,
      img: {
        small: `/img/cat03.jpg`,
        big: `/img/cat03@2x.jpg 2x`
      },
      name: `Одежда`,
      count: 106
    },
    {
      id: 4,
      img: {
        small: `/img/cat04.jpg`,
        big: `/img/cat04@2x.jpg 2x`
      },
      name: `Спорт/отдых`,
      count: 86
    },
    {
      id: 5,
      img: {
        small: `/img/cat05.jpg`,
        big: `/img/cat05@2x.jpg 2x`
      },
      name: `Авто`,
      count: 34
    },
    {
      id: 6,
      img: {
        small: `/img/cat06.jpg`,
        big: `/img/cat06@2x.jpg 2x`
      },
      name: `Книги`,
      count: 92
    }
  ]
};

const pageContentComments = {
  page: `comments`,
  isAuth: true,
  tickets: [
    {
      id: `1`,
      name: `Ленд Ровер`,
      price: `₽ 900 000`,
      type: `ПРОДАМ`,
      comments: [
        {
          author: `Александр Бурый`,
          text: `А что с прогоном автомобиля? Также вижу на фото зимнюю резину. А летняя идет ли впридачу?`,
          avatar: {
            small: `/img/avatar03.jpg`,
            big: `/img/avatar03@2x.jpg 2x`
          }
        },
        {
          author: `Анатолий Хакимов`,
          text: `Хочу прийти посмотреть на авто в среду. Мой телефон 89254455566. Готовы принять?`,
          avatar: {
            small: `/img/avatar04.jpg`,
            big: `/img/avatar04@2x.jpg 2x`
          }
        },
        {
          author: `Георгий Шпиц`,
          text: `Что это за рухлядь? Стыдно такое даже фотографировать, не то, что продавать.`,
          avatar: {
            small: `/img/avatar02.jpg`,
            big: `/img/avatar02@2x.jpg 2x`
          }
        }
      ]
    },
    {
      id: `2`,
      name: `Ableton`,
      price: `₽ 900 000`,
      type: `ПРОДАМ`,
      comments: [
        {
          author: `Александр Бурый`,
          text: `А что с прогоном автомобиля? Также вижу на фото зимнюю резину. А летняя идет ли впридачу?`,
          avatar: {
            small: `/img/avatar03.jpg`,
            big: `/img/avatar03@2x.jpg 2x`
          }
        },
        {
          author: `Анатолий Хакимов`,
          text: `Хочу прийти посмотреть на авто в среду. Мой телефон 89254455566. Готовы принять?`,
          avatar: {
            small: `/img/avatar04.jpg`,
            big: `/img/avatar04@2x.jpg 2x`
          }
        },
        {
          author: `Георгий Шпиц`,
          text: `Что это за рухлядь? Стыдно такое даже фотографировать, не то, что продавать.`,
          avatar: {
            small: `/img/avatar02.jpg`,
            big: `/img/avatar02@2x.jpg 2x`
          }
        }
      ]
    },
  ]
};

const pageContentSearch = {
  page: `search`,
  isAuth: true,
  countSearch: 2,
  searchList: [
    {
      id: `05`,
      img: {
        small: `/img/item05.jpg`,
        big: `/img/item05@2x.jpg 2x`
      },
      label: `ПРОДАМ`,
      categories: [`Авто`],
      title: `Ленд Ровер`,
      price: 900000,
      description: `Куплю монстеру зеленую в хорошем зеленом состоянии, буду поливать...`
    },
    {
      id: `16`,
      img: {
        small: `/img/item16.jpg`,
        big: `/img/item16@2x.jpg 2x`
      },
      label: `ПРОДАМ`,
      categories: [`Авто`],
      title: `Хонда`,
      price: 100000,
      description: `Куплю монстеру зеленую в хорошем зеленом состоянии, буду поливать...`
    },
  ],
  ticketList: [
    {
      id: `01`,
      img: {
        small: `/img/item01.jpg`,
        big: `/img/item01@2x.jpg 2x`
      },
      label: `КУПЛЮ`,
      categories: [`Дом`],
      title: `Монстера`,
      price: 1000,
      description: `Куплю монстеру зеленую в хорошем зеленом состоянии, буду поливать...`
    },
    {
      id: `02`,
      img: {
        small: `/img/item02.jpg`,
        big: `/img/item02@2x.jpg 2x`
      },
      label: `ПРОДАМ`,
      categories: [`Дом`],
      title: `Мое старое кресло`,
      price: 4000,
      description: `Продам свое старое кресло, чтобы сидеть и читать книги зимними...`
    },
    {
      id: `03`,
      img: {
        small: `/img/item03.jpg`,
        big: `/img/item03@2x.jpg 2x`
      },
      label: `ПРОДАМ`,
      categories: [`ЭЛЕКТРОНИКА`, `Дом`],
      title: `Дедушкины часы`,
      price: 45000,
      description: `Продаю дедушкины часы в прекрасном состоянии, ходят до...`
    },
    {
      id: `04`,
      img: {
        small: `/img/item04.jpg`,
        big: `/img/item04@2x.jpg 2x`
      },
      label: `Куплю`,
      categories: [`ЭЛЕКТРОНИКА`, `Дом`],
      title: `Кофеварка`,
      price: 2000,
      description: `Куплю вот такую итальянскую кофеварку, можно любой фирмы...`
    },
    {
      id: `05`,
      img: {
        small: `/img/item05.jpg`,
        big: `/img/item05@2x.jpg 2x`
      },
      label: `ПРОДАМ`,
      categories: [`Авто`, `ЭЛЕКТРОНИКА`],
      title: `Ленд Ровер`,
      price: 900000,
      description: `Куплю монстеру зеленую в хорошем зеленом состоянии, буду поливать...`
    },
    {
      id: `06`,
      img: {
        small: `/img/item06.jpg`,
        big: `/img/item06@2x.jpg 2x`
      },
      label: `ПРОДАМ`,
      categories: [`ЭЛЕКТРОНИКА`],
      title: `Ableton`,
      price: 88000,
      description: `Продам свое старое кресло, чтобы сидеть и читать книги зимними...`
    },
    {
      id: `07`,
      img: {
        small: `/img/item07.jpg`,
        big: `/img/item07@2x.jpg 2x`
      },
      label: `ПРОДАМ`,
      categories: [`Спорт и отдых`],
      title: `Доска`,
      price: 55000,
      description: `Продаю дедушкины часы в прекрасном состоянии, ходят до...`
    },
    {
      id: `08`,
      img: {
        small: `/img/item08.jpg`,
        big: `/img/item08@2x.jpg 2x`
      },
      label: `Куплю`,
      categories: [`ЭЛЕКТРОНИКА`],
      title: `Фотик Canon`,
      price: 32000,
      description: `Куплю вот такую итальянскую кофеварку, можно любой фирмы...`
    },
  ],
};

const pageContentMyTickets = {
  page: `my-tickets`,
  isAuth: true,
  ticketList: [
    {
      id: `06`,
      img: {
        small: `/img/item06.jpg`,
        big: `/img/item06@2x.jpg 2x`
      },
      label: `ПРОДАМ`,
      categories: [`ЭЛЕКТРОНИКА`],
      title: `Ableton`,
      price: 88
    },
    {
      id: `10`,
      img: {
        small: `/img/item10.jpg`,
        big: `/img/item10@2x.jpg 2x`
      },
      label: `ПРОДАМ`,
      categories: [`Дом`],
      title: `Мое старое кресло`,
      price: 4000
    },
    {
      id: `04`,
      img: {
        small: `/img/item04.jpg`,
        big: `/img/item04@2x.jpg 2x`
      },
      label: `ПРОДАМ`,
      categories: [`Дом`],
      title: `Кофеварка`,
      price: 2000
    },
    {
      id: `08`,
      img: {
        small: `/img/item08.jpg`,
        big: `/img/item08@2x.jpg 2x`
      },
      label: `Куплю`,
      categories: [`ЭЛЕКТРОНИКА`],
      title: `Фотик Canon`,
      price: 32000
    },
    {
      id: `01`,
      img: {
        small: `/img/item01.jpg`,
        big: `/img/item01@2x.jpg 2x`
      },
      label: `Куплю`,
      categories: [`Дом`],
      title: `Монстера`,
      price: 1000
    }
  ],
};

const pageContentTicket = {
  page: `ticket`,
  isAuth: true,
  ticket: {
    title: `Мое старое кресло`,
    price: 4000,
    img: {
      small: `/img/ticket.jpg`,
      big: `/img/ticket@2x.jpg 2x`
    },
    type: `ПРОДАМ`,
    text: `Продам свое старое кресло, чтобы сидеть и читать книги зимними вечерами. Ножки мягкие, мой пол не царапают. Кресло почти новое – продаю, т.к. надоел серый цвет. Можно, конечно, накинуть плед и спасти ситуацию, но я все-таки хочу просто другое кресло. В общем оно на самом деле удобное и с ним все хорошо, просто нам пора расстаться.`,
    datetime: `20 ноября 2019`,
    author: `Денис Шкатулкин`,
    contacts: `shkatulkin@ya.ru`,
    authorComment: {
      avatar: {
        small: `/img/avatar.jpg`,
        big: `/img/avatar@2x.jpg 2x`
      },
      name: `Вам слово`,
      text: `Нормальное вообще кресло! А как насч`
    },
    tags: [
      {
        id: `01`,
        img: {
          small: `/img/cat.jpg`,
          big: `/img/cat@2x.jpg 2x`
        },
        label: `Дом`
      },
      {
        id: `04`,
        img: {
          small: `/img/cat04.jpg`,
          big: `/img/cat04@2x.jpg 2x`
        },
        label: `Спорт и отдых`
      }
    ],
    comments: [
      {
        id: `01`,
        author: `Георгий Шпиц`,
        content: [`Что это за рухлядь? Стыдно такое даже фотографировать, не то, что продавать.`],
        avatar: {
          small: `/img/avatar02.jpg`,
          big: `/img/avatar02@2x.jpg 2x`
        }
      },
      {
        id: `03`,
        author: `Александр Бурый`,
        content: [
          `Что это за рухлядь? Стыдно такое даже фотографировать, не то, что продавать.`,
          `А можете доставить мне домой? Готов доплатить 300 сверху.`],
        avatar: {
          small: `/img/avatar03.jpg`,
          big: `/img/avatar03@2x.jpg 2x`
        }
      }
    ]
  }
};

const pageContentTicketEdit = {
  page: `ticket-edit`,
  isAuth: true,
  ticket: {
    name: `Мое старое кресло`,
    text: `Продам свое старое кресло, чтобы сидеть и читать книги зимними вечерами. Ножки мягкие, мой пол не царапают.`,
    price: 4000,
    img: {
      small: `/img/item02.jpg`,
      big: `/img/item02@2x.jpg 2x`
    },
    selectCategories: [
      {id: 1, name: `Дом`, isSelected: true},
      {id: 2, name: `Спорт и отдых`, isSelected: true},
      {id: 3, name: `Авто`, isSelected: false},
      {id: 4, name: `Электроника`, isSelected: false}
    ],
    switchList: [
      {
        name: `Куплю`,
        value: `buy`,
        isChecked: true
      },
      {
        name: `Продам`,
        value: `sell`,
        isChecked: false
      }
    ]
  }
};

module.exports = {
  pageContentMain,
  pageContentCategory,
  pageContentComments,
  pageContentSearch,
  pageContentMyTickets,
  pageContentTicket,
  pageContentTicketEdit
};
