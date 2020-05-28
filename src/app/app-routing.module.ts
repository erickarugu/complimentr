import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent, LoginComponent, NoteComponent, NotFoundComponent } from './components';
import { AuthGuard } from './shared';
import { SecureInnerPagesGuard } from './shared/guard/secure-inner-pages.guard';
import { AboutComponent } from './components/about/about.component';


const routes: Routes = [
  { path: '', pathMatch: 'full', redirectTo: 'home' },
  { path: 'about', component: AboutComponent },
  { path: 'home', component: HomeComponent, canActivate: [AuthGuard] },
  { path: 'login', component: LoginComponent, canActivate: [SecureInnerPagesGuard] },
  { path: 'note', component: NoteComponent, canActivate: [AuthGuard] },
  { path: '**', component: NotFoundComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
