import { createSlug } from './utils.js'

export class Ingredient {
    constructor(i) {
        this.name = i.name;
        this.slug = createSlug(i.name);
        this.unit = (i.unit != undefined) ? i.unit : 'oz'
    }
    key() {
        return this.slug;
    }
}
