import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { TabsPage } from './tabs.page';

const routes: Routes = [
  {
    path: 'app',
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
        redirectTo: '/app/announcements',
        pathMatch: 'full'
      }
    ]
  },
  {
    path: '',
    redirectTo: '/app/announcements',
    pathMatch: 'full'
  }
];

@NgModule({
  imports: [
    RouterModule.forChild(routes)
  ],
  exports: [RouterModule]
})
export class TabsPageRoutingModule { }
