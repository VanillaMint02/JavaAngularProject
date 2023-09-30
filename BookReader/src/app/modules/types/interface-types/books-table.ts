export interface BooksTable{
    id?:string;
    title?:string;
    authors?:string[];
    pagesNumber?:string;
    currentPage?:string;
    bookFinished?:string;
    genres?:string[]
}

export const booksTableHeader:[string,string][]=[["title",'Title'],["authors","Authors"],
["pagesNumber","Page Number"],["currentPage","Current Page"],["bookFinished","Finished?"],["genres","Genres"]];