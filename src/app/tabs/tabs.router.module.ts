import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { TabsPage } from './tabs.page';

const routes: Routes = [
  {
    path: 'tabs',
    component: TabsPage,
    children: [
      {
        path: 'announcements',
        children: [
          {
            path: '',
            loadChildren: '../announcements/announcements.module#AnnouncementsPageModule'
          }
        ]
      },
      {
        path: 'events',
        children: [
          {
            path: '',
            loadChildren: '../events/events.module#EventsPageModule'
          }
        ]
      },
      {
        path: 'members/directory/create-member',
        children: [
          {
            path: '',
            loadChildren: '../create-member/create-member.module#CreateMemberPageModule'
          }
        ]
      },
      {
        path: 'members/directory',
        children: [
          {
            path: '',
            loadChildren: '../members-list/members-list.module#MembersListPageModule'
          }
        ]
      },
      {
        path: 'members',
        children: [
          {
            path: '',
            loadChildren: '../members/members.module#MembersPageModule'
          }
        ]
      },
      {
        path: '',
        redirectTo: '/tabs/announcements',
        pathMatch: 'full'
      }
    ]
  },
  {
    path: '',
    redirectTo: '/tabs/announcements',
    pathMatch: 'full'
  }
];

@NgModule({
  imports: [
    RouterModule.forChild(routes)
  ],
  exports: [RouterModule]
})
export class TabsPageRoutingModule {}
