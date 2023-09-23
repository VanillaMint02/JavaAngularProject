import { Author } from './authors';
import { Page } from './pages';

export interface Book {
  id?: string;
  title?: string;
  authors?: Author[];
  pages?: Page[];
  currentPage?: Page;
  pageNumber?: number;
  bookFinished?: boolean;
  genres?:string[];
}

export const mockBook: Book[] = [
  {
    id: '111',
    title: 'mockedTitle',
    authors: [
      {
        name: 'MockName',
        yearOfBirth: 'Someday',
        yearOfDeath: 'I do not know',
        genres: ['horror', 'jobless', 'reincarnation'],
      },
      {
        name: 'MockName',
        yearOfBirth: 'Someday',
        yearOfDeath: 'I do not know',
        genres: ['horror', 'jobless', 'reincarnation'],
      },
      {
        name: 'MockName',
        yearOfBirth: 'Someday',
        yearOfDeath: 'I do not know',
        genres: ['horror', 'jobless', 'reincarnation'],
      },
      {
        name: 'MockName',
        yearOfBirth: 'Someday',
        yearOfDeath: 'I do not know',
        genres: ['horror', 'jobless', 'reincarnation'],
      },
    ],
    pages: [
      {
        pageNumber: 1,
        pageContent: 'Lorem Ipsum',
        pageTitle: 'Loorem Ipsum',
      },
    ],
    currentPage: {
      pageNumber: 1,
      pageContent: 'Lorem Ipsum',
      pageTitle: 'Loorem Ipsum',
    },
    bookFinished: false,
    pageNumber: 1,
    genres:["omae","wa","mou","shindeiru"],
  }, {
    id: '111',
    title: 'mockedTitle',
    authors: [
      {
        name: 'MockName',
        yearOfBirth: 'Someday',
        yearOfDeath: 'I do not know',
        genres: ['horror', 'jobless', 'reincarnation'],
      },
      {
        name: 'MockName',
        yearOfBirth: 'Someday',
        yearOfDeath: 'I do not know',
        genres: ['horror', 'jobless', 'reincarnation'],
      },
      {
        name: 'MockName',
        yearOfBirth: 'Someday',
        yearOfDeath: 'I do not know',
        genres: ['horror', 'jobless', 'reincarnation'],
      },
      {
        name: 'MockName',
        yearOfBirth: 'Someday',
        yearOfDeath: 'I do not know',
        genres: ['horror', 'jobless', 'reincarnation'],
      },
    ],
    pages: [
      {
        pageNumber: 1,
        pageContent: 'Lorem Ipsum',
        pageTitle: 'Loorem Ipsum',
      },
    ],
    currentPage: {
      pageNumber: 1,
      pageContent: 'Lorem Ipsum',
      pageTitle: 'Loorem Ipsum',
    },
    bookFinished: false,
    pageNumber: 1,
    genres:["omae","wa","mou","shindeiru"],
  }, {
    id: '111',
    title: 'mockedTitle',
    authors: [
      {
        name: 'MockName',
        yearOfBirth: 'Someday',
        yearOfDeath: 'I do not know',
        genres: ['horror', 'jobless', 'reincarnation'],
      },
      {
        name: 'MockName',
        yearOfBirth: 'Someday',
        yearOfDeath: 'I do not know',
        genres: ['horror', 'jobless', 'reincarnation'],
      },
      {
        name: 'MockName',
        yearOfBirth: 'Someday',
        yearOfDeath: 'I do not know',
        genres: ['horror', 'jobless', 'reincarnation'],
      },
      {
        name: 'MockName',
        yearOfBirth: 'Someday',
        yearOfDeath: 'I do not know',
        genres: ['horror', 'jobless', 'reincarnation'],
      },
    ],
    pages: [
      {
        pageNumber: 1,
        pageContent: 'Lorem Ipsum',
        pageTitle: 'Loorem Ipsum',
      },
    ],
    currentPage: {
      pageNumber: 1,
      pageContent: 'Lorem Ipsum',
      pageTitle: 'Loorem Ipsum',
    },
    bookFinished: false,
    pageNumber: 1,
    genres:["omae","wa","mou","shindeiru"],
  }, {
    id: '111',
    title: 'mockedTitle',
    authors: [
      {
        name: 'MockName',
        yearOfBirth: 'Someday',
        yearOfDeath: 'I do not know',
        genres: ['horror', 'jobless', 'reincarnation'],
      },
      {
        name: 'MockName',
        yearOfBirth: 'Someday',
        yearOfDeath: 'I do not know',
        genres: ['horror', 'jobless', 'reincarnation'],
      },
      {
        name: 'MockName',
        yearOfBirth: 'Someday',
        yearOfDeath: 'I do not know',
        genres: ['horror', 'jobless', 'reincarnation'],
      },
      {
        name: 'MockName',
        yearOfBirth: 'Someday',
        yearOfDeath: 'I do not know',
        genres: ['horror', 'jobless', 'reincarnation'],
      },
    ],
    pages: [
      {
        pageNumber: 1,
        pageContent: 'Lorem Ipsum',
        pageTitle: 'Loorem Ipsum',
      },
    ],
    currentPage: {
      pageNumber: 1,
      pageContent: 'Lorem Ipsum',
      pageTitle: 'Loorem Ipsum',
    },
    bookFinished: false,
    pageNumber: 1,
    genres:["omae","wa","mou","shindeiru"],
  }, {
    id: '111',
    title: 'mockedTitle',
    authors: [
      {
        name: 'MockName',
        yearOfBirth: 'Someday',
        yearOfDeath: 'I do not know',
        genres: ['horror', 'jobless', 'reincarnation'],
      },
      {
        name: 'MockName',
        yearOfBirth: 'Someday',
        yearOfDeath: 'I do not know',
        genres: ['horror', 'jobless', 'reincarnation'],
      },
      {
        name: 'MockName',
        yearOfBirth: 'Someday',
        yearOfDeath: 'I do not know',
        genres: ['horror', 'jobless', 'reincarnation'],
      },
      {
        name: 'MockName',
        yearOfBirth: 'Someday',
        yearOfDeath: 'I do not know',
        genres: ['horror', 'jobless', 'reincarnation'],
      },
    ],
    pages: [
      {
        pageNumber: 1,
        pageContent: 'Lorem Ipsum',
        pageTitle: 'Loorem Ipsum',
      },
    ],
    currentPage: {
      pageNumber: 1,
      pageContent: 'Lorem Ipsum',
      pageTitle: 'Loorem Ipsum',
    },
    bookFinished: false,
    pageNumber: 1,
    genres:["omae","wa","mou","shindeiru"],
  }, {
    id: '111',
    title: 'mockedTitle',
    authors: [
      {
        name: 'MockName',
        yearOfBirth: 'Someday',
        yearOfDeath: 'I do not know',
        genres: ['horror', 'jobless', 'reincarnation'],
      },
      {
        name: 'MockName',
        yearOfBirth: 'Someday',
        yearOfDeath: 'I do not know',
        genres: ['horror', 'jobless', 'reincarnation'],
      },
      {
        name: 'MockName',
        yearOfBirth: 'Someday',
        yearOfDeath: 'I do not know',
        genres: ['horror', 'jobless', 'reincarnation'],
      },
      {
        name: 'MockName',
        yearOfBirth: 'Someday',
        yearOfDeath: 'I do not know',
        genres: ['horror', 'jobless', 'reincarnation'],
      },
    ],
    pages: [
      {
        pageNumber: 1,
        pageContent: 'Lorem Ipsum',
        pageTitle: 'Loorem Ipsum',
      },
    ],
    currentPage: {
      pageNumber: 1,
      pageContent: 'Lorem Ipsum',
      pageTitle: 'Loorem Ipsum',
    },
    bookFinished: false,
    pageNumber: 1,
    genres:["omae","wa","mou","shindeiru"],
  }, {
    id: '111',
    title: 'mockedTitle',
    authors: [
      {
        name: 'MockName',
        yearOfBirth: 'Someday',
        yearOfDeath: 'I do not know',
        genres: ['horror', 'jobless', 'reincarnation'],
      },
      {
        name: 'MockName',
        yearOfBirth: 'Someday',
        yearOfDeath: 'I do not know',
        genres: ['horror', 'jobless', 'reincarnation'],
      },
      {
        name: 'MockName',
        yearOfBirth: 'Someday',
        yearOfDeath: 'I do not know',
        genres: ['horror', 'jobless', 'reincarnation'],
      },
      {
        name: 'MockName',
        yearOfBirth: 'Someday',
        yearOfDeath: 'I do not know',
        genres: ['horror', 'jobless', 'reincarnation'],
      },
    ],
    pages: [
      {
        pageNumber: 1,
        pageContent: 'Lorem Ipsum',
        pageTitle: 'Loorem Ipsum',
      },
    ],
    currentPage: {
      pageNumber: 1,
      pageContent: 'Lorem Ipsum',
      pageTitle: 'Loorem Ipsum',
    },
    bookFinished: false,
    pageNumber: 1,
    genres:["omae","wa","mou","shindeiru"],
  }, {
    id: '111',
    title: 'mockedTitle',
    authors: [
      {
        name: 'MockName',
        yearOfBirth: 'Someday',
        yearOfDeath: 'I do not know',
        genres: ['horror', 'jobless', 'reincarnation'],
      },
      {
        name: 'MockName',
        yearOfBirth: 'Someday',
        yearOfDeath: 'I do not know',
        genres: ['horror', 'jobless', 'reincarnation'],
      },
      {
        name: 'MockName',
        yearOfBirth: 'Someday',
        yearOfDeath: 'I do not know',
        genres: ['horror', 'jobless', 'reincarnation'],
      },
      {
        name: 'MockName',
        yearOfBirth: 'Someday',
        yearOfDeath: 'I do not know',
        genres: ['horror', 'jobless', 'reincarnation'],
      },
    ],
    pages: [
      {
        pageNumber: 1,
        pageContent: 'Lorem Ipsum',
        pageTitle: 'Loorem Ipsum',
      },
    ],
    currentPage: {
      pageNumber: 1,
      pageContent: 'Lorem Ipsum',
      pageTitle: 'Loorem Ipsum',
    },
    bookFinished: false,
    pageNumber: 1,
    genres:["omae","wa","mou","shindeiru"],
  }, {
    id: '111',
    title: 'mockedTitle',
    authors: [
      {
        name: 'MockName',
        yearOfBirth: 'Someday',
        yearOfDeath: 'I do not know',
        genres: ['horror', 'jobless', 'reincarnation'],
      },
      {
        name: 'MockName',
        yearOfBirth: 'Someday',
        yearOfDeath: 'I do not know',
        genres: ['horror', 'jobless', 'reincarnation'],
      },
      {
        name: 'MockName',
        yearOfBirth: 'Someday',
        yearOfDeath: 'I do not know',
        genres: ['horror', 'jobless', 'reincarnation'],
      },
      {
        name: 'MockName',
        yearOfBirth: 'Someday',
        yearOfDeath: 'I do not know',
        genres: ['horror', 'jobless', 'reincarnation'],
      },
    ],
    pages: [
      {
        pageNumber: 1,
        pageContent: 'Lorem Ipsum',
        pageTitle: 'Loorem Ipsum',
      },
    ],
    currentPage: {
      pageNumber: 1,
      pageContent: 'Lorem Ipsum',
      pageTitle: 'Loorem Ipsum',
    },
    bookFinished: false,
    pageNumber: 1,
    genres:["omae","wa","mou","shindeiru"],
  },
];
