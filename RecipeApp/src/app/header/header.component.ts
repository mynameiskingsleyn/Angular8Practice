import { Component, EventEmitter, Output } from '@angular/core';

@Component({
    selector:'app-header',
    templateUrl: './header.component.html',
    styleUrls: ['./header.component.css']
})
export class HeaderComponent{

    on = 'gray';
    off = 'white';
    recipe :string ;
    shopping: string;
    constructor(){
        this.recipe = this.off;
        this.shopping = this.off;
    }
    // @Output() featureSelected = new EventEmitter<string>();
    // onSelect(feature: string){
    //     this.featureSelected.emit(feature);
    //     if(feature =='recipe'){
    //         this.recipe = this.on;
    //         this.shopping=this.off
    //     }else{
    //         this.shopping=this.on;
    //         this.recipe=this.off
    //     }
    // }

    getLinkBackground(feature) {
        if(feature =='recipe'){
            return this.recipe;
        }
        return this.shopping;
    }

}