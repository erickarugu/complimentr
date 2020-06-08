import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {
  LoginComponent,
  NotFoundComponent,
  FaqComponent,
  ComplimentsComponent,
  HomeComponent,
  RegisterComponent,
  GalleryComponent,
} from './components';
import { AuthGuard, SecureInnerPagesGuard } from './shared';

const routes: Routes = [
  { path: '', pathMatch: 'full', redirectTo: 'compliments' },
  { path: 'home', component: HomeComponent },
  { path: 'compliments', component: ComplimentsComponent },
  { path: 'gallery', component: GalleryComponent, canActivate: [AuthGuard] },
  {
    path: 'login',
    component: LoginComponent,
    canActivate: [SecureInnerPagesGuard],
  },
  {
    path: 'register',
    component: RegisterComponent,
    canActivate: [SecureInnerPagesGuard],
  },
  { path: 'faq', component: FaqComponent },
  { path: '**', component: NotFoundComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
