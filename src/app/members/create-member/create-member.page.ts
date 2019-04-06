import { Component, OnInit } from '@angular/core';
import { Member } from '../shared/member';
import { MembersService } from '../shared/members.service';
import { Router } from '@angular/router';
import { ToastController } from '@ionic/angular';

@Component({
  selector: 'app-create-member',
  templateUrl: './create-member.page.html',
  styleUrls: ['./create-member.page.scss'],
})
export class CreateMemberPage implements OnInit {
  member: Member = {firstName: '', lastName: '', email: '', phone: '', membership: this.membersService.membership, address1: '', address2: '', city: '', state: '', zip: '', title: '', company: ''}

  constructor(private membersService: MembersService, private router: Router, public toastController: ToastController) {}

  ngOnInit() {}

  viewMembersDirectoryPage() {
    this.router.navigate(['app/members/directory']);
  }

  createMember() {
    this.membersService.createMember(this.member)
      .then(memberRef => {
        console.log(`Member with id of ${memberRef.id} is added`);
        this.router.navigate(['app/members/directory']);
        this.presentToastMemberCreated();
      });
  }

  async presentToastMemberCreated() {
    const toast = await this.toastController.create({
      message: `Member added successfully`,
      showCloseButton: true,
      position: 'bottom',
      closeButtonText: 'Close',
      color: 'dark',
      duration: 3000
    });
    toast.present();
  }
}
