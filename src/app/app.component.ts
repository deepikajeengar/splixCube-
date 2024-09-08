import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'learn';
  name:string="";
  age="";
  members: any = [];

  addMember(event: any) {
    let newMember = {name: event.name, age: event.age};
    this.members.push(newMember);
    console.log(this.members);
  }

  delMember(i: number) {
    //  code that will remove index i item from array
    this.members.splice(i,1);
  }
  
}

