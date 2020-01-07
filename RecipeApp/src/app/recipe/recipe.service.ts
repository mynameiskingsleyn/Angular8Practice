import { EventEmitter } from '@angular/core';
import { Recipe } from "./recipe.module";
export class RecipeService {

    recipeSelected = new EventEmitter<Recipe>();
    private recipes: Recipe[] =[
        new Recipe('A test Recipe', 'This is a simple test','https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS0snUoPx_ZhoMv8mTvjWKmFa1rrTiPlFTrPXFWnufFNNjPW454&s'),
        new Recipe('Test recipe 2','Second test','')
    ];

    getRecipes()
    {
        return this.recipes.slice();
    }
}