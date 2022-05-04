import DomainBase from "./domainBase";
export declare class UserCommentGoodIdea extends DomainBase {
    idUser: string;
    idPostComment: string;
    _id: string;
    created_at: Date;
    updated_at: Date;
    constructor(idUser: string, idPostComment: string, _id?: string, created_at?: Date, updated_at?: Date);
    validateObject(): boolean;
}
