import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  { path: '', loadChildren: './tabs/tabs.module#TabsPageModule' },
  { path: 'directory', loadChildren: './members-list/members-list.module#MembersListPageModule' },
  { path: 'members', loadChildren: './members/members.module#MembersPageModule' },  { path: 'create-member', loadChildren: './create-member/create-member.module#CreateMemberPageModule' }


];
@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule {}
