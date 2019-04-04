import { AngularFireDatabase } from 'angularfire2/database';
import { environment } from './../../environments/environment';
import { HttpClient } from '@angular/common/http';
import { MembersService } from './../services/members/members.service';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ToastController, ActionSheetController } from '@ionic/angular';
import { Member } from '../models/member';

@Component({
  selector: 'app-member-edit',
  templateUrl: './member-edit.page.html',
  styleUrls: ['./member-edit.page.scss'],
})
export class MemberEditPage implements OnInit {
  member: Member;
  memberId: any;
  url: string = environment.firebaseConfig.databaseURL;

  dbRef = this.db.database.ref("Members");

  constructor(
    private router: Router,
    public toastController: ToastController,
    private membersService: MembersService,
    private http: HttpClient,
    public db: AngularFireDatabase,
    public actionSheetController: ActionSheetController
  ) { }

  ngOnInit() {
    this.member = this.membersService.currentMember;
    this.memberId = this.membersService.currentMemberId;
    console.log(this.member);
    console.log(this.memberId);
  }

  removeMember(member: Member) {
    this.membersService.deleteMember(member)
      .then(() => {
        this.router.navigate(['tabs/members']);
        this.presentToastWithOptions();
      })
  }

  async presentActionSheet() {
    const actionSheet = await this.actionSheetController.create({
      buttons: [{
        text: 'Delete',
        role: 'destructive',
        icon: 'trash',
        handler: () => {
          this.membersService.deleteMember(this.membersService.currentMember);
          this.router.navigate(['tabs/members']);
        }
      }, {
        text: 'Cancel',
        icon: 'close',
        role: 'cancel',
        handler: () => {
          console.log('Cancel clicked');
        }
      }]
    });
    await actionSheet.present();
  }

  async presentToastWithOptions() {
    const toast = await this.toastController.create({
      message: 'Member deleted successfully',
      showCloseButton: true,
      position: 'bottom',
      closeButtonText: 'Close',
      color: 'dark',
      duration: 3000
    });
    toast.present();
  }

}
