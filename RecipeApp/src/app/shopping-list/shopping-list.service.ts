import {Ingredient} from "../shared/ingredient.model";
import {EventEmitter} from "@angular/core";
import {Subject} from "rxjs/internal/Subject";


export class ShoppingListService {

    //ingredientsChanged = new EventEmitter<Ingredient[]>();
    ingredientsChanged = new Subject<Ingredient[]>();
    private ingredients: Ingredient[] = [
        new Ingredient('Apples',5),
        new Ingredient('Oranges',10),
        new Ingredient('Tomatoes',5)
    ];

    addIngredient(ingredient: Ingredient,emiting = true){
        let temp = this.ingredients;
        let count = 0;
        let loc = -1;
        var amount = 0;
        let name = ingredient.name;
        amount = amount + ingredient.amount;
        if(isNaN(amount) || amount<1){
            amount = 1;
            ingredient.setAmout(amount);
            console.log(ingredient.amount);
        }
        for(let item of temp){
            if (item.name == name){
               loc = count;
               break;
            }
            count++;
        }
        if(loc >= 0){

            this.ingredients[loc].amount = this.ingredients[loc].amount +ingredient.amount;
        }else{
            this.ingredients.push(ingredient);
        }

        if(emiting){
            //this.ingredientsChanged.emit(this.ingredients.slice());
            this.ingredientsChanged.next(this.ingredients.slice());
        }

    }

    getIngredients(){
        return this.ingredients.slice();
        //return this.ingredients;
    }

    addIngredients(ingredients: Ingredient[]){
        //this.ingredients.push(...ingredients);
        //this.ingredientsChanged.emit(this.ingredients.slice());
        for(let ingredient of ingredients){
            this.addIngredient(ingredient,false);
        }
        this.ingredientsChanged.next(this.ingredients.slice());
    }

}