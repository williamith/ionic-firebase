import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class MembersService {
  currentMembership: any;
  constructor() { }

  createMember(firstName: string, lastName: string,  email: string, phone: string, membership: string, address1: string, city: string, state: string, zip: string, title: string, company: string) {
  }

  readMembers() {
    
  }

}
