import DomainBase from './domainBase';
import { v4 as uuid } from 'uuid';

export class Interests extends DomainBase {

    constructor(
        public _name: string,
        public _id: string = uuid(),
        public _created_at: Date = new Date(),
        public _updated_at: Date = new Date()
    ) {
        
        super(_id, _created_at, _updated_at);
    }

    validateObject = () => {
        return true;
    }

}