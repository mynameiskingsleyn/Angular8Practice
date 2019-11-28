import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
  //   styles: [ `
  //       h3{ color: yellowgreen;}
  //   `
  //
  //   ]
})
export class AppComponent {
  name = 'Kingsley';
  log = [];

  onToggleDetails(){
      //this.log.push(this.log.length + 1);
      this.log.push(new Date())
  }

  onRemoveServer(index: int ){
      return this.log.splice(index,1);
  }
}
