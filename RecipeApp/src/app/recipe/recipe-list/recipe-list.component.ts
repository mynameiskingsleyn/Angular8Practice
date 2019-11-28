import { Component, OnInit } from '@angular/core';
import { Recipe } from "../recipe.module";

@Component({
  selector: 'app-recipe-list',
  templateUrl: './recipe-list.component.html',
  styleUrls: ['./recipe-list.component.css']
})
export class RecipeListComponent implements OnInit {
    recipes: Recipe[] =[
        new Recipe('A test Recipe', 'This is a simple test','https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS0snUoPx_ZhoMv8mTvjWKmFa1rrTiPlFTrPXFWnufFNNjPW454&s'),
        new Recipe('Test recipe 2','Second test','')
    ];
  constructor() { }

  ngOnInit() {
  }

}
