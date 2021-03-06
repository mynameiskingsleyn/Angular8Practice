import { Component, OnInit } from '@angular/core';
import {ActivatedRoute, Params} from "@angular/router";

@Component({
  selector: 'app-recipe-edit',
  templateUrl: './recipe-edit.component.html',
  styleUrls: ['./recipe-edit.component.css']
})
export class RecipeEditComponent implements OnInit {

  protected id: number;
  editeMode = false;
  constructor(private route:ActivatedRoute) { }

  ngOnInit() {
      this.route.params
          .subscribe(
              (params: Params) => {
                  this.id = +params['id'];
                  this.editeMode = params['id'] != null;
              }
          )
  }

}
