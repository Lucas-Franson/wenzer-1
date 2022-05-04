import { IUserRepository } from "../../4-infra/irepositories/IuserRepository";
import { User } from "../entities/user";
import { IUserService } from "../Iservices/IUserService";
import { ProfileViewModel } from "../../1-presentation/viewmodel/ProfileViewModel";
import { IConnectionRepository } from "../../4-infra/irepositories/IconnectionRepository";
import { Connections } from "../entities/conections";
import { Db } from "mongodb";
export default class UserService implements IUserService {
    private readonly userRepository;
    private readonly connectionRepository;
    constructor(userRepository: IUserRepository, connectionRepository: IConnectionRepository);
    findUserByEmail(email: string): Promise<User | null>;
    findUserByToken(token: string): Promise<User | null>;
    findUserById(userId: string): Promise<User | null>;
    create(user: User): Promise<string>;
    updateUserByProfile(user: User, profile: ProfileViewModel): Promise<void>;
    updateUser(user: User): Promise<void>;
    updateUserNewPwd(user: User, pwd: string): Promise<void>;
    updateUserPhoto(user: User, photo: any): Promise<void>;
    sendEmailOfVerification(user: User): Promise<void>;
    sendEmailOfResetPassword(user: User): Promise<void>;
    validPasswordOfUser(pwdSent: string, pwdSaved: string): Promise<boolean>;
    validateUserEmail(user: User): Promise<void>;
    verifyPassword(password: string, passwordHash: string): Promise<boolean>;
    generatePasswordHash(password: string): Promise<string>;
    setPostAsGoodIdea(idUser: string, idPost: string, userPostExist: boolean): Promise<void>;
    getAllUsersByArrOfIds(idUserArr: string[]): Promise<User[]>;
    getConnectionFromUsers(userId: string, idUserToFollow: string): Promise<Connections | null>;
    createConnection(userId: string, idUserToFollow: string): Promise<void>;
    deleteConnection(idConnection: string): Promise<void>;
    getConnections(idUser: string): Promise<any>;
    getFriendRequest(userId: string): Promise<{
        _id: string;
        created_at: Date;
        name: string;
    }[]>;
    search(userId: string, search: string): Promise<User[]>;
    findUserByIdWebService(userId: string, dbo: Db): Promise<User | null>;
}
