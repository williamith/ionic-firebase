import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonicModule } from '@ionic/angular';
import { Routes, RouterModule } from '@angular/router';
import { MembersPage } from './members.page';

const routes: Routes = [
  { path: 'directory', loadChildren: '../members-list/members-list.module#MembersListModule' },
  { path: '', component: MembersPage }
];

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RouterModule.forChild(routes)
  ],
  declarations: [MembersPage]
})
export class MembersPageModule {}
