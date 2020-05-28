import { Component, OnInit } from '@angular/core';
import { AuthService } from 'src/app/_helpers';
import { Router } from '@angular/router';
import { AngularFireAuth } from '@angular/fire/auth';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styles: [
    `
      .section {
        height: 100vh;
        background: url(./../../assets/img/home-1.jpg);
        background-color: rgba(0, 0, 0, 0.5);
        background-blend-mode: overlay;
        background-size: cover;
        background-postion: center;
      }
      .columns {
        height: 90vh;
      }
    `
  ]
})
export class LoginComponent implements OnInit {
  email: string;
  password: string;
  submitted: false;
  loading: boolean = false;
  errors = '';

  constructor(public afAuth: AngularFireAuth, private router: Router) {}

  ngOnInit(): void {}

  onSubmit() {
    this.loading = true;
    this.afAuth
      .signInWithEmailAndPassword(this.email, this.password)
      .then(result => {
        this.router.navigate(['home']);
        this.loading = false;
      })
      .catch(err => {
        this.errors = 'Incorrect email or password';
        this.loading = false;
      });
  }
}
