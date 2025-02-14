import { Email } from "./EmailAbstract";
import { promisify } from 'util';
import fs from 'fs';
import { User } from "../../entities/user";
const readFile = promisify(fs.readFile);

export class EmailResetPassword extends Email {
    constructor(user: User, address: string) {
        super(
            '"Wenzer" <wenzer.marketing@gmail.com>',
            user.email,
            'Redefinicação de senha',
            `Olá! Segue o link de redefinição de senha: ${address}`,
            ''
            );
    }

    async prepareHTML(link: string): Promise<void> {
        const _self = this;
        const text = await readFile(
            __dirname + "/views/Alterar_Senha.html", 
            'utf8').then((data: string) => {
            _self.Html = data.replace('$_URL_UPDATE_$', link);
        });
    }
}