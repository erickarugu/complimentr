import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LoginComponent, NoteComponent, NotFoundComponent, FaqComponent, ComplimentsComponent, HomeComponent } from './components';
import { AuthGuard, SecureInnerPagesGuard } from './shared';

const routes: Routes = [
  { path: '', pathMatch: 'full', redirectTo: 'compliments' },
  { path: 'home', component: HomeComponent },
  { path: 'compliments', component: ComplimentsComponent,canActivate: [AuthGuard]},
  { path: 'login', component: LoginComponent, canActivate: [SecureInnerPagesGuard] },
  { path: 'note', component: NoteComponent },
  { path: 'faq', component: FaqComponent },
  { path: '**', component: NotFoundComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
