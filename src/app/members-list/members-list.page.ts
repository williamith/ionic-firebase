import { map } from 'rxjs/operators';
import { MembersService } from './../services/members/members.service';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AngularFireDatabase } from 'angularfire2/database';
import { Observable } from 'rxjs';
import { Member } from '../models/member';

@Component({
  selector: 'app-members-list',
  templateUrl: './members-list.page.html',
  styleUrls: ['./members-list.page.scss'],
})
export class MembersListPage implements OnInit {
  members$: Observable<Member[]>;
  membership: string;
  membersArray: Member[] = [];

  observable: any;
  constructor(
    private router: Router,
    private membersService: MembersService,
    public db: AngularFireDatabase
  ) { }

  ngOnInit() {
    this.membership = this.membersService.currentMembership;

    this.members$ = this.membersService.membersRef.snapshotChanges().pipe(
      map(actions => {
        return actions.map(a => {
          const data = a.payload.val() as Member;
          const id = a.payload.key;
          this.membersArray.push({
            key: id,
            ['First Name']: data['First Name'],
            ['Last Name']: data['Last Name'],
            ['Email']: data['Email'],
            ['Phone']: data['Phone'],
            ['Membership']: data['Membership'],
            ['Address Line 1']: data['Address Line 1'],
            ['Address Line 2']: data['Address Line 2'],
            ['City']: data['City'],
            ['State']: data['State'],
            ['Zip']: data['Zip'],
            ['Title']: data['Title'],
            ['Company']: data['Company']
          });
          return { id, ...data };
        });
      }));

    console.log(this.membersArray);
  }

  goToCreateMember() {
    this.router.navigate(['tabs/members/directory/create-member']);
  }

  goToMemberDetailsPage(index: any) {
    this.membersService.currentMember = this.membersArray[index];
    // this.membersService.currentMemberId = this.membersArray[index].key;
    this.router.navigate(['tabs/members/directory/member-detail']);
    // console.log(this.membersService.currentMember.key);
    // console.log(this.membersService.currentMember['First Name']);
  }

}
