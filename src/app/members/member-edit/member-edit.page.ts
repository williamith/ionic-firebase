import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { MembersService } from '../shared/members.service';
import { ToastController, ActionSheetController } from '@ionic/angular';
import { Member } from '../shared/member';

@Component({
  selector: 'app-member-edit',
  templateUrl: './member-edit.page.html',
  styleUrls: ['./member-edit.page.scss'],
})
export class MemberEditPage implements OnInit {
  member: Member;
  memberId: any;

  constructor(private router: Router, private membersService: MembersService, public toastController: ToastController, public actionSheetController: ActionSheetController) {}

  ngOnInit() {
    this.member = this.membersService.member;
    this.memberId = this.membersService.memberId;
    console.log(this.member);
    console.log(this.memberId);
  }

  async presentActionSheet() {
    const actionSheet = await this.actionSheetController.create({
      buttons: [{
        text: 'Delete',
        role: 'destructive',
        icon: 'trash',
        handler: () => {
          this.membersService.deleteMember(this.membersService.member);
          this.router.navigate(['tabs/members']);
          this.presentToastWithOptions();
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
  // removeMember(member: Member) {
  //   this.membersService.deleteMember(member)
  //     .then(() => {
  //       this.router.navigate(['tabs/members']);
  //       this.presentToastWithOptions();
  //     })
  // }
}
