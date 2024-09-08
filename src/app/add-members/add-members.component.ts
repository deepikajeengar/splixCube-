import { Component, EventEmitter, Input, Output } from '@angular/core';
import { MembersService } from '../services/members.service';

@Component({
  selector: 'app-add-members',
  templateUrl: './add-members.component.html',
  styleUrls: ['./add-members.component.css']
})
export class AddMembersComponent {
  // @Input() name: string = '';
  // @Input() age: string = '';
  
  // @Output() addMember = new EventEmitter<{ name: string, age: string }>();

  // addMemberToList() {
  //   if (this.name.trim() && this.age.trim()) {
  //     this.addMember.emit({ name: this.name, age: this.age });
  //     this.name = '';
  //     this.age = '';
  //   }
  // }

  name: string = '';
  age: string = '';

  constructor(public membersService:MembersService) {

  }

  addMemberToList() {
    let data: any= {
      "name":this.name, "age":this.age
    }
    this.membersService.members.push(data)
  }
}
