import { ICharacter } from '../interfaces/character.interface';

export class Character {
    id: number;
    name: string;
    description: string;
    modified: string;
    resourceURI: string;

    constructor(params: ICharacter) {
        this.id = params.id;
        this.name = params.name;
        this.description = params.description;
        this.modified = params.modified;
        this.resourceURI = params.resourceURI;
    }
}
