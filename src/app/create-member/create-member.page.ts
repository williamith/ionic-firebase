
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { MembersService } from '../services/members/members.service';
import { Member } from './../models/member';
import { ToastController } from '@ionic/angular';

@Component({
  selector: 'app-create-member',
  templateUrl: './create-member.page.html',
  styleUrls: ['./create-member.page.scss'],
})
export class CreateMemberPage implements OnInit {
  member: Member = {
    ['First Name']: '',
    ['Last Name']: '',
    ['Email']: '',
    ['Phone']: '',
    ['Membership']: '',
    ['Address Line 1']: '',
    ['Address Line 2']: '',
    ['City']: '',
    ['State']: '',
    ['Zip']: '',
    ['Title']: '',
    ['Company']: ''
  }

  constructor(
    private router: Router, private membersService: MembersService, public toastController: ToastController) {}

  ngOnInit() {
    this.member.Membership = this.membersService.currentMembership;
  }

  goBackToMembersDirectoryPage() {
    this.router.navigate(['tabs/members/directory']);
  }

  createMember() {
    this.membersService.createMember(this.member).then(ref => {
      console.log(ref.key);
      this.router.navigate(['tabs/members/directory']);
      this.presentToastWithOptions();
    })
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
