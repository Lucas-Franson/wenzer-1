import { IDomainBase } from './domainBase';
import { v4 as uuid } from 'uuid';
const util = require('util');

export class Connections implements IDomainBase {

    id: string = '';
    created_at: Date = new Date();
    updated_at: Date = new Date();

    constructor() {
        if (!this.id) {
            this.id = uuid();
        }
    }

    async validateObject(connections: Connections): Promise<boolean> {
        return true;
    }

}