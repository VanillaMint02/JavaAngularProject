export interface BooksTable{
    id?:string;
    title?:string;
    authors?:string[];
    pagesNumber?:string;
    currentPage?:string;
    bookFinished?:string;
    genres?:string[]
}
export const booksTableHeader:BooksTable={
    title:'Title',
    authors:['Authors'],
    pagesNumber:'Page Number',
    currentPage:'Current Page',
    bookFinished:'Finished?',
    genres:["genres"]
}