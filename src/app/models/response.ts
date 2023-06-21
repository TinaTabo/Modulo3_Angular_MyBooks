import { Book } from "./book";
import { User } from "./user";

export class Response {
    constructor(public error:boolean,
                public code:number,
                public message:string,
                public data:Book[],
                public result:User[]
                ){}
}
