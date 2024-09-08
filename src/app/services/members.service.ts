import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class MembersService {
  
  members:any=[]

  constructor() { }

  addMember(data:any) {
    this.members.push(data)
  }

  delMember(i:number) {
    this.members.splice(i,1);
  }

}
