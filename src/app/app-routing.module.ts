import { NgModule }             from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { AuthGuard } from './core/auth-guard.service';

import { LoginComponent } from './login/login.component';
import { DashboardComponent }   from './dashboard/dashboard.component';
import { LibraryComponent } from './library/library.component';
import { SongDetailComponent } from './song/song-detail/song-detail.component';
import { MixesComponent } from './mix/mixes/mixes.component';
import { MixDetailComponent } from './mix/mix-detail/mix-detail.component';

const routes: Routes = [
  { path: '', redirectTo: '/dashboard', pathMatch: 'full' },
  { path: 'login', component: LoginComponent },
  { path: 'dashboard',  component: DashboardComponent, canActivate: [AuthGuard] },
  { path: 'library', component: LibraryComponent, canActivate: [AuthGuard] },
  { path: 'song/:id', component: SongDetailComponent, canActivate: [AuthGuard] },
  { path: 'song', component: SongDetailComponent, canActivate: [AuthGuard] },
  { path: 'mixes', component: MixesComponent, canActivate: [AuthGuard] },
  { path: 'mix/:id', component: MixDetailComponent, canActivate: [AuthGuard] }
];

@NgModule({
  imports: [ RouterModule.forRoot(routes) ],
  exports: [ RouterModule ]
})
export class AppRoutingModule {}