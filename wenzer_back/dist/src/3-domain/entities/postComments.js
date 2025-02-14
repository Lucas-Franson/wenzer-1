"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.PostComments = void 0;
const domainBase_1 = __importDefault(require("./domainBase"));
const uuid_1 = require("uuid");
class PostComments extends domainBase_1.default {
    constructor(idUser, idPost, text, countViews, _id = (0, uuid_1.v4)(), created_at = new Date(), updated_at = new Date()) {
        super(_id, created_at, updated_at);
        this.idUser = idUser;
        this.idPost = idPost;
        this.text = text;
        this.countViews = countViews;
        this._id = _id;
        this.created_at = created_at;
        this.updated_at = updated_at;
    }
    validateObject() {
        if (this.idUser == null)
            throw new Error("Id do usuário deve ser preenchido.");
        if (this.idPost == null)
            throw new Error("Id do post deve ser preenchido.");
        if (this.text == null || this.text.trim() == '')
            throw new Error("Texto do comentário deve ser preenchido.");
        return true;
    }
}
exports.PostComments = PostComments;
//# sourceMappingURL=postComments.js.map