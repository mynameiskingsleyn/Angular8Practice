import {Ingredient} from "../shared/ingredient.model";
import {EventEmitter} from "@angular/core";


export class ShoppingListService {

    ingredientsChanged = new EventEmitter<Ingredient[]>();
    private ingredients: Ingredient[] = [
        new Ingredient('Apples',5),
        new Ingredient('Oranges',10),
        new Ingredient('Tomatoes',5)
    ];

    addIngredient(ingredient: Ingredient){
        let temp = this.ingredients;
        let count = 0;
        let loc = -1;
        let name = ingredient.name;
        for(let item of temp){
            if (item.name == name){
               loc = count;
               break;
            }
            count++;
        }
        if(loc >= 0){
            this.ingredients[loc].amount = parseInt(this.ingredients[loc].amount) + parseInt(ingredient.amount);
        }else{
            this.ingredients.push(ingredient);
        }


        this.ingredientsChanged.emit(this.ingredients.slice());
    }

    getIngredients(){
        return this.ingredients.slice();
        //return this.ingredients;
    }

}