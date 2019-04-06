import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { TabsPage } from './tabs.page';

const routes: Routes = [
  { path: '',
    component: TabsPage,
    children: [
      { path: 'announcements', loadChildren: '../announcements/announcements.module#AnnouncementsPageModule' },
      { path: 'events', loadChildren: '../events/events.module#EventsPageModule' },
      { path: 'members', loadChildren: '../members/members.module#MembersPageModule' },
      { path: '**', redirectTo: 'announcements', pathMatch: 'full' }
    ]
  }
];

@NgModule({
  imports: [
    RouterModule.forChild(routes)
  ],
  exports: [RouterModule]
})
export class TabsPageRoutingModule {}
