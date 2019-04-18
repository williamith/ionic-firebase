import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';
import { AuthGuard } from './login/shared/auth.guard';

const routes: Routes = [
  { path: '', loadChildren: './login/login.module#LoginPageModule' },
  { path: 'app', loadChildren: './tabs/tabs.module#TabsPageModule', canLoad: [AuthGuard] },
  { path: 'sponsors', loadChildren: './sponsors/sponsors.module#SponsorsPageModule', canLoad: [AuthGuard] }

];

@NgModule({
  declarations: [],
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule {}
