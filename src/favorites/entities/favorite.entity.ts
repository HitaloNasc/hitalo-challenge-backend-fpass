import { Character } from '../../characters/entities';

export class Favorite {
    id: number;
    name: string;
    description: string;
    modified: string;
    resourceURI: string;

    constructor(params: Character) {
        this.id = params.id;
        this.name = params.name;
        this.description = params.description;
        this.modified = params.modified;
        this.resourceURI = params.resourceURI;
    }
}
