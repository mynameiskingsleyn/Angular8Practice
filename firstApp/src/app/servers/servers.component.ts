import { Component, OnInit } from '@angular/core';

@Component({
  selector: '[app-servers]',
  templateUrl: './servers.component.html',
  styleUrls: ['./servers.component.css']
})
export class ServersComponent implements OnInit {
     allowNewServer = false;
     serverCreation = "No data was created";
     serverName ='Testserver';
     serverCreated = false;
     servers = ['Testserver','Testserver 2'];
    constructor() {
        setTimeout( ()=>{
            this.allowNewServer=true; //alert('yes man')
        }, 3000);

    }

    ngOnInit() {
    }

    onCreateServer(){
        this.servers.push(this.serverName);
         this.serverCreation = "Server was created "+this.serverName;
         this.serverCreated =true;
    }
    onUpdateServerName(event:any){
         console.log(event);
         this.serverName = (<HTMLInputElement>event.target).value
    }

}




