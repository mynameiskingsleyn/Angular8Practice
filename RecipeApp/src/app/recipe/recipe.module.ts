
// blue print of type script on what a recipe should look like
import {Ingredient} from "../shared/ingredient.model";

export class Recipe{
    public name: string;
    public description: string;
    public imagePath: string;
    public ingredients: Ingredient[];
    constructor(name: string, desc: string, imagePath: string, ingredients: Ingredient[]){
       this.name = name;
       this.description = desc;
       this.imagePath = imagePath;
       this.ingredients = ingredients;
    }

    getName(){
        return this.name;
    }

    getDescription(){
        return this.description
    }

    getImagePath(){
        return this.imagePath;
    }
}