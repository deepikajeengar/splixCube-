import { Component, Input,EventEmitter, Output} from '@angular/core';

@Component({
  selector: 'app-member-card',
  templateUrl: './member-card.component.html',
  styleUrls: ['./member-card.component.css']
})
export class MemberCardComponent {

@Input() member: any;  // Member should be an object, not an array.
  @Input() index: any;  // Index is a number.
  
  @Output() delete = new EventEmitter<number>(); // Emit the index for deletion.

  delMember() {
    this.delete.emit(this.index);  // Emit the index to the parent for deletion.
  }
}
