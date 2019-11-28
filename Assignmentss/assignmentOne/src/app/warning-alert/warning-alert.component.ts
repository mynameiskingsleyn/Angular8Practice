import { Component } from '@angular/core'

@Component({
    selector: 'app-warning-alert',
    template: `
        <p> this is a warning alert , you are in danger</p>
    `,
    styles:[
        ` p{
            padding:20px;
            background:mistyrose;
            border:solid red 2px;
        }
            
        `
    ]
})

export class WarningAlertComponent{

}