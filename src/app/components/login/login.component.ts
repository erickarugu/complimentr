import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';
import { AuthService } from 'src/app/_helpers';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styles: [
    `
      .section {
        min-height: 100vh;
        background-color: rgba(255, 255, 255, 0.9);
        background-blend-mode: overlay;
        background-size: cover;
      }
      .columns {
        height: 90vh;
        display: flex;
      }
      .img-box {
        text-align: center;
      }
      img {
        width: 40px;
      }
      img:hover {
        cursor: pointer;
      }
    `,
  ],
})
export class LoginComponent implements OnInit {
  email: string;
  password: string;
  submitted: false;
  loading = false;
  errors = '';
  @ViewChild('modal') modal: ElementRef;

  constructor(private authService: AuthService, private router: Router) {}

  ngOnInit(): void {}

  onSubmit() {
    this.loading = true;
    this.errors = '';
    this.authService.SignIn(this.email, this.password).then(
      (data) => {
        console.log(data);
        this.loading = false;
        this.router.navigate(['/compliments']);
      },
      (error) => {
        console.log(error.code);
        this.checkErrorType(error);
        this.loading = false;
      }
    );
  }

  checkErrorType(error) {
    if (error.code === 'auth/invalid-email') {
      return (this.errors = 'Invalid Email type');
    }
    if (error.code === 'auth/user-not-found') {
      return (this.errors = 'Email not registered');
    }
    if (error.code === 'auth/wrong-password') {
      return (this.errors = 'Wrong password');
    } else {
      return 'An error occurred. Please try again.';
    }
  }

  async toggleModal() {
    this.modal.nativeElement.classList.toggle('is-active');
  }

  loginWithGoogle() {
    this.authService.doGoogleLogin().then(
      (data) => {
        console.log(data);
        this.loading = false;
        this.router.navigate(['/compliments']);
      },
      (error) => {
        console.log(error.code);
        this.checkErrorType(error);
        this.loading = false;
      }
    );
  }
}
