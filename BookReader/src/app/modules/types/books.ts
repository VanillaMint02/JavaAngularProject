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

export const mockedBook:Book={
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
        id: "1",
        pageNumber: 1,
        pageContent: "This is the first page of the book. It contains the introduction and author's note.",
        pageTitle: "Introduction",
      },
      {
        id: "2",
        pageNumber: 2,
        pageContent: "Chapter 1: In the beginning, there was a story...",
        pageTitle: "Chapter 1: The Beginning",
      },
      {
        id: "3",
        pageNumber: 3,
        pageContent: "Chapter 2: The protagonist embarks on a thrilling adventure.",
        pageTitle: "Chapter 2: The Adventure Begins",
      },
      {
        id: "4",
        pageNumber: 4,
        pageContent: "Chapter 3: Unexpected twists and turns await our hero.",
        pageTitle: "Chapter 3: Twists and Turns",
      },
      {
        id: "5",
        pageNumber: 5,
        pageContent: "This is the last page of the book. Thank you for reading!",
        pageTitle: "Conclusion",
      },
    ],
    currentPage: {
      id: "1",
      pageNumber: 1,
      pageContent: "This is the first page of the book. It contains the introduction and author's note.",
      pageTitle: "Introduction",
    },
    bookFinished: false,
    pageNumber: 1,
    genres:["omae","wa","mou","shindeiru"],
  }
