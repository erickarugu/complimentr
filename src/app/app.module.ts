import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AngularFireModule } from '@angular/fire';
import { AngularFirestoreModule } from '@angular/fire/firestore';
import { AngularFireAuthModule } from '@angular/fire/auth';
import { FormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent, FooterComponent, AuthGuard, ComplimentService, SecureInnerPagesGuard } from './shared';
import { LoginComponent, NotFoundComponent, NoteComponent, FaqComponent, ComplimentsComponent, HomeComponent } from './components';
import { environment } from 'src/environments/environment';
import { AuthService } from './_helpers';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    ComplimentsComponent,
    NoteComponent,
    NotFoundComponent,
    HeaderComponent,
    FooterComponent,
    HomeComponent,
    FaqComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    AppRoutingModule,
    AngularFireModule.initializeApp(environment.firebase),
    AngularFirestoreModule.enablePersistence(),
    AngularFireAuthModule
  ],
  providers: [AuthService,ComplimentService, AuthGuard, SecureInnerPagesGuard],
  bootstrap: [AppComponent]
})
export class AppModule { }
