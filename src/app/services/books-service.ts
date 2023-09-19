import { Injectable } from "@angular/core";
import { Author } from "../modules/types/authors";

@Injectable()
export class BookService{

    convertAuthorsToString(authors:Author[]):string[]{
        const authorNames:string[]=[];
        authors.forEach(author=>{
            authorNames.push(author.name!);
        })
        return authorNames;
    }
}