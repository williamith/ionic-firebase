import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { MembersService } from '../shared/members.service';
import { Member } from '../shared/member';
import { AngularFireDatabase } from 'angularfire2/database';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

@Component({
  selector: 'app-members-list',
  templateUrl: './members-list.page.html',
  styleUrls: ['./members-list.page.scss'],
})
export class MembersListPage implements OnInit {
  members: Observable<any[]>;
  membership: string;
  membersArray: Member[] = [];
  observable: any;

  constructor(private router: Router, private membersService: MembersService, public db: AngularFireDatabase) {}

  ngOnInit() {
    console.log(this.membersService.readMembers());

    // this.membership = this.membersService.membership;

    // this.members$ = this.membersService.membersRef.snapshotChanges().pipe(
    //   map(actions => {
    //     return actions.map(a => {
    //       const data = a.payload.val() as Member;
    //       const id = a.payload.key;
    //       this.membersArray.push({
    //         key: id,
    //         ['First Name']: data['First Name'],
    //         ['Last Name']: data['Last Name'],
    //         ['Email']: data['Email'],
    //         ['Phone']: data['Phone'],
    //         ['Membership']: data['Membership'],
    //         ['Address Line 1']: data['Address Line 1'],
    //         ['Address Line 2']: data['Address Line 2'],
    //         ['City']: data['City'],
    //         ['State']: data['State'],
    //         ['Zip']: data['Zip'],
    //         ['Title']: data['Title'],
    //         ['Company']: data['Company']
    //       });
    //       return { id, ...data };
    //     });
    //   }));
    // console.log(this.membersArray);
  }

  goToCreateMember() {
    this.router.navigate(['tabs/members/directory/create-member']);
  }

  goToMemberDetailsPage(index: any) {
    this.membersService.member = this.membersArray[index];
    this.router.navigate(['tabs/members/directory/member-detail']);
  }
}
