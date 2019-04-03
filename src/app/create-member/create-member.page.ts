import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ToastController } from '@ionic/angular';
import { AngularFireDatabase, AngularFireList } from 'angularfire2/database';
import { MembersService } from '../services/members/members.service';

@Component({
  selector: 'app-create-member',
  templateUrl: './create-member.page.html',
  styleUrls: ['./create-member.page.scss'],
})
export class CreateMemberPage implements OnInit {
  membership: any;
  memberList: AngularFireList<any>;

  dbRef = this.db.database.ref("Members");

  constructor(
    private router: Router,
    public toastController: ToastController,
    private membersService: MembersService,
    public db: AngularFireDatabase
  ) {
    this.memberList = db.list('Members');
  }

  ngOnInit() {
    this.membership = this.membersService.currentMembership;
  }

  goBackToMembersDirectoryPage() {
    this.router.navigate(['tabs/members/directory']);
  }

  createMember(
    firstName: string,
    lastName: string,
    email: string,
    phone: string,
    address1: string,
    address2: string,
    city: string,
    state: string,
    zip: string,
    title: string,
    company: string
  ) {
    // const newMemberRef = this.memberList.push({});

    this.dbRef.push({
      "First Name": firstName,
      "Last Name": lastName,
      "Email": email,
      "Phone": phone,
      "Membership": this.membership,
      "Address 1": address1,
      "Address 2": address2,
      "City": city,
      "State": state,
      "Zip": zip,
      "Title": title,
      "Company": company
    }).then( () => {
      this.router.navigate(['tabs/members/directory']);
      this.presentToastWithOptions();
    }, error => {
      console.log(error);
    });
  }

  async presentToastWithOptions() {
    const toast = await this.toastController.create({
      message: 'Member created successfully',
      showCloseButton: true,
      position: 'bottom',
      closeButtonText: 'Close',
      color: 'dark',
      duration: 3000
    });
    toast.present();
  }

}
