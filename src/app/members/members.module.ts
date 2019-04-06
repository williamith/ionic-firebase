import { IonicModule } from '@ionic/angular';
import { RouterModule, Routes } from '@angular/router';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { MembersPage } from './members.page';
import { MembersListPage } from './members-list/members-list.page';
import { CreateMemberPage } from './create-member/create-member.page';
import { MemberDetailPage } from './member-detail/member-detail.page';
import { MemberEditPage } from './member-edit/member-edit.page';

const routes: Routes = [
  { path: 'directory/member-edit', component: MemberEditPage},
  { path: 'directory/member-detail', component: MemberDetailPage},
  { path: 'directory/new', component: CreateMemberPage},
  { path: 'directory', component: MembersListPage},
  { path: '', component: MembersPage }
];

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RouterModule.forChild(routes)
  ],
  declarations: [
    MemberEditPage,
    MemberDetailPage,
    CreateMemberPage,
    MembersListPage,
    MembersPage
  ]
})
export class MembersPageModule {}
