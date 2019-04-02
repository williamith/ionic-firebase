import { MembersService } from './../services/members/members.service';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AngularFireDatabase, AngularFireList } from 'angularfire2/database';
import { HttpClient } from  "@angular/common/http";

@Component({
  selector: 'app-members-list',
  templateUrl: './members-list.page.html',
  styleUrls: ['./members-list.page.scss'],
})
export class MembersListPage implements OnInit {
  membership: any;
  members: any = [];
  url: string = 'https://gmisdatabase.firebaseio.com';

  constructor(
    private router: Router,
    private http: HttpClient,
    private membersService: MembersService,
    public afDatabase: AngularFireDatabase
  ) {}

  ngOnInit() {
    // Gets the membership variable saved in Members Service
    this.membership = this.membersService.currentMembership;

    this.http.get(`${this.url}/Members.json?orderBy="Membership"&equalTo="${this.membership}"`)
      .subscribe(response => {
        // Turns reponse into array of objects ignoring Firebase key
        this.members = Object.values(response);
      });
  }

  goBackToMembersPage() {
    this.router.navigate(['tabs/members']);
  }

  goToCreateMember() {
    this.router.navigate(['tabs/members/directory/create-member']);
  }

}
