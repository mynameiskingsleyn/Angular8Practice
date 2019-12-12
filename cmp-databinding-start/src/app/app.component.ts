import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  serverElements = [];
  canSee = true;
  oddNumbers = [1,3 ,5];
  evenNumber = [2, 3];
  onlyOdd = false;
  value = 10;

  ngOnInit(){
      this.canSee = true;
  }

  onServerAdded(serverData: {serverName: string, serverContent: string}){
     this.serverElements.push({
        type: 'server',
        name: serverData.serverName,
        content: serverData.serverContent
     });
  }

  onBluePrintAdded(blueprintData: {serverName: string, serverContent: string}){
      this.serverElements.push({
          type: 'blueprint',
          name: blueprintData.serverName,
          content: blueprintData.serverContent
      });
  }


}
