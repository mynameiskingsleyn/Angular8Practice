import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule} from '@angular/forms';

import { ServerComponent } from "./server.component";

@NgModule({
    declarations: [
        ServerComponent
    ],
    imports: [
        BrowserModule, FormsModule
    ],
    providers: [],
    bootstrap: [ServerComponent]
})
export class ServerModule {

}