import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AngularFireDatabase, AngularFireList } from 'angularfire2/database';

@Component({
  selector: 'app-create-member',
  templateUrl: './create-member.page.html',
  styleUrls: ['./create-member.page.scss'],
})
export class CreateMemberPage implements OnInit {
  memberList: AngularFireList<any>;

  constructor(
    private router: Router,
    public afDatabase: AngularFireDatabase
  ) {
    this.memberList = afDatabase.list('Members');
  }

  ngOnInit() {
  }

  goBackToMembersDirectoryPage() {
    this.router.navigate(['tabs/members/directory']);
  }

  createMember(
    firstName: string,
    lastName: string,
    email: string,
    phone: string,
    membership: string,
    address1: string,
    city: string,
    state: string,
    zip: string,
    title: string,
    company: string
  ) {
    const newMemberRef = this.memberList.push({});

    newMemberRef.set({
      "First Name": firstName,
      "Last Name": lastName,
      "Email": email,
      "Phone": phone,
      "Membership": membership,
      "Address 1": address1,
      "City": city,
      "State": state,
      "Zip": zip,
      "Title": title,
      "Company": company
    }).then(newMemberRef => {
      this.router.navigate(['tabs/members/directory']);
    }, error => {
      console.log(error);
    });
  }

}
