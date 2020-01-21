import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from  '@angular/forms';
import { NgModule } from '@angular/core';

import { HeaderComponent } from "./header/header.component";

import { AppComponent } from './app.component';
import { RecipeComponent } from './recipe/recipe.component';
import { RecipeListComponent } from './recipe/recipe-list/recipe-list.component';
import { RecipeDetailComponent } from './recipe/recipe-detail/recipe-detail.component';
import { RecipeItemComponent } from './recipe/recipe-list/recipe-item/recipe-item.component';
import { ShoppingListComponent } from './shopping-list/shopping-list.component';
import { ShoppingEditComponent } from './shopping-list/shopping-edit/shopping-edit.component';
import {DropdownDirective} from "./shared/dropdown.directives";
import { RecipeService } from "./recipe/recipe.service";
import {ShoppingListService} from "./shopping-list/shopping-list.service";
import {RouterModule} from "@angular/router";
import {AppRoutingModule} from "./app-routing.module";
import {RecipeStartComponent} from "./recipe/recipe-start/recipe-start.component";
import {RecipeEditComponent} from "./recipe/recipe-edit/recipe-edit.component";

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    RecipeComponent,
    RecipeListComponent,
    RecipeDetailComponent,
    RecipeItemComponent,
    ShoppingListComponent,
    ShoppingEditComponent,
    DropdownDirective,
    RecipeStartComponent,
    RecipeEditComponent
  ],
  imports: [
    BrowserModule,
    FormsModule, AppRoutingModule
  ],
  providers: [ ShoppingListService ],
  bootstrap: [AppComponent]
})
export class AppModule { }
