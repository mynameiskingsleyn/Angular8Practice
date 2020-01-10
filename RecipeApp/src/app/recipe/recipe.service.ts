import { EventEmitter, Injectable } from '@angular/core';
import { Recipe } from "./recipe.module";
import {Ingredient} from "../shared/ingredient.model";
import {ShoppingListService} from "../shopping-list/shopping-list.service";
@Injectable()
export class RecipeService {

    recipeSelected = new EventEmitter<Recipe>();
    private recipes: Recipe[] =[
        new Recipe('A testy Schnitzel', 'This is a simple test','https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS0snUoPx_ZhoMv8mTvjWKmFa1rrTiPlFTrPXFWnufFNNjPW454&s',[
            new Ingredient('Meet',1),
            new Ingredient('French fries',10),
            new Ingredient('Mange',10),

        ]),
        new Recipe('Big fat burger','Very fat fat burger','',[
            new Ingredient('Buns', 2),
            new Ingredient('Meat', 1)
        ])
    ];

    constructor(private slService: ShoppingListService){

    }

    getRecipes()
    {
        return this.recipes.slice();
    }

    addIngredientsToShoppingList(ingredients :Ingredient[]){
        console.log(ingredients);
        this.slService.addIngredients(ingredients)
    }
}