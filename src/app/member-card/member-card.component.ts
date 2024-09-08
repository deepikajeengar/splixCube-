import { Component, Input, EventEmitter, Output } from '@angular/core';
import { MembersService } from '../services/members.service';

@Component({
  selector: 'app-member-card',
  templateUrl: './member-card.component.html',
  styleUrls: ['./member-card.component.css']
})
export class MemberCardComponent {

  constructor(public memberService: MembersService) {

  }

  delMember(i:number) {
    this.memberService.delMember(i);
    alert("Member deleted")
  }

}
