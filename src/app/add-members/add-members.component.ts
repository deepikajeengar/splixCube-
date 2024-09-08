import { Component, EventEmitter, Input, Output } from '@angular/core';
import { MembersService } from '../services/members.service';

@Component({
  selector: 'app-add-members',
  templateUrl: './add-members.component.html',
  styleUrls: ['./add-members.component.css']
})
export class AddMembersComponent {
  name: string = '';
  age: string = '';

  constructor(public memberService: MembersService) {
  }

  addMemberToList() {
    if (this.name.trim() && this.age.trim()) {
      let x = { name: this.name, age: this.age }
      this.memberService.addMember(x);
      this.name = '';
      this.age = '';
    }
  }
}
