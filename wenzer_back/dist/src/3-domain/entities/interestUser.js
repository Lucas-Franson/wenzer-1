"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.InterestUser = void 0;
const domainBase_1 = __importDefault(require("./domainBase"));
const uuid_1 = require("uuid");
class InterestUser extends domainBase_1.default {
    constructor(idInterest, idUser, _id = (0, uuid_1.v4)(), created_at = new Date(), updated_at = new Date()) {
        super(_id, created_at, updated_at);
        this.idInterest = idInterest;
        this.idUser = idUser;
        this._id = _id;
        this.created_at = created_at;
        this.updated_at = updated_at;
        this.validateObject = () => {
            return true;
        };
    }
}
exports.InterestUser = InterestUser;
//# sourceMappingURL=interestUser.js.map