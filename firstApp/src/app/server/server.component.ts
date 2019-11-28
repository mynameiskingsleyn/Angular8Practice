import { Component } from '@angular/core';

@Component({
    selector: 'app-server',
    templateUrl: './server.component.html',
    styles: [`
        .online {
            color:gray();
            background-color:greenyellow;
            font-size: 1.75em;
        }
        .offline {
            color:black;
            background-color:orangered;
            font-size:2em;
        }
    `]
})
export class ServerComponent{

    serverId: number = 10;
    userName = "John";
    serverStatus: string = 'offline';


    constructor(){
        this.serverStatus = Math.random() > 0.5 ? 'Online' : 'offline';
    }
    getServerStatus(){
        return this.serverStatus;
    }

    getServerColor(){
        return this.getServerStatus() == 'Online' ? 'green' : 'red';
    }

    serverIsOnline(){
        return this.getServerStatus() == 'Online';
    }
    serverIsOffline(){
        return this.getServerStatus() == 'offline';
    }
    // resetUserName(){
    //     alert('clicked');
    //     this.userName='';
    // }

}