import { Component, OnInit, ElementRef, ViewChild, EventEmitter, Output } from '@angular/core';
import {Ingredient } from '../../shared/ingredient.model';
import {ShoppingListService} from "../shopping-list.service";

@Component({
  selector: 'app-shopping-edit',
  templateUrl: './shopping-edit.component.html',
  styleUrls: ['./shopping-edit.component.css']
})
export class ShoppingEditComponent implements OnInit {

  @ViewChild('nameInput',{static:true}) nameInputRef: ElementRef;
    @ViewChild('amountInput',{static:true}) amountInputRef: ElementRef;
  //@Output() ingredientAdded = new EventEmitter<Ingredient>();
  constructor(private sLService: ShoppingListService) { }

  ngOnInit() {
  }

  onAddItem(){

      const ingName = this.nameInputRef.nativeElement.value;
      const ingAmount = this.amountInputRef.nativeElement.value;
        const newIngredent = new Ingredient(ingName,ingAmount);
        this.sLService.addIngredient(newIngredent);

  }

}
