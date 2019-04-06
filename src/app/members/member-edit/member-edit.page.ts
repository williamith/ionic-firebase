import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { MembersService } from '../shared/members.service';
import { Router } from '@angular/router';
import { ActionSheetController, ToastController } from '@ionic/angular';
import { Member } from '../shared/member';

@Component({
  selector: 'app-member-edit',
  templateUrl: './member-edit.page.html',
  styleUrls: ['./member-edit.page.scss'],
})
export class MemberEditPage implements OnInit {
  member: Member;

  constructor(
    private membersService: MembersService,
    public actionSheetController: ActionSheetController,
    private router: Router,
    public toastController: ToastController
  ) {}

  ngOnInit() {
    this.member = this.membersService.member;
  }

  async presentActionSheet() {
    const actionSheet = await this.actionSheetController.create({
      buttons: [{
        text: 'Delete',
        role: 'destructive',
        icon: 'trash',
        handler: () => {
          this.membersService.deleteMember(this.member.id)
            .then(memberRef => {
              this.router.navigate(['app/members/directory']);
              this.presentToastMemberDeleted();
            });
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

  async presentToastMemberDeleted() {
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
