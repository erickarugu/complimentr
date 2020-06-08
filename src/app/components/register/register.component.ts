import { Component, OnInit } from '@angular/core';
import { AuthService } from 'src/app/_helpers';
import { Router } from '@angular/router';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styles: [
    `
      .section {
        min-height: 100vh;
        background-color: rgba(255, 255, 255, 0.9);
        background-blend-mode: overlay;
        background-size: cover;
      }
      .columns {
        min-height: 90vh;
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
export class RegisterComponent implements OnInit {
  email: string;
  password: string;
  c_password: string;
  submitted: false;
  loading: boolean = false;
  errors = '';

  constructor(private authService: AuthService, private router: Router) {}

  ngOnInit(): void {}

  onSubmit() {
    this.loading = true;
    this.errors = '';
    if (this.password !== this.c_password) {
      this.loading = false;
      return (this.errors = "Passwords don't match!");
    }
    if (this.password.length < 5) {
      this.loading = false;
      return (this.errors = 'Password must have atleast 5 characters!');
    }
    if (this.email && this.password) {
      this.authService.Register(this.email, this.password).then(
        (data) => {
          console.log(data);
          this.loading = false;
          this.router.navigate(['/login']);
        },
        (error) => {
          console.log(error.code);
          this.loading = false;
          this.checkErrorType(error);
        }
      );
    }
  }

  checkErrorType(error) {
    if (error.code === 'auth/invalid-email')
      return (this.errors = 'Invalid Email type');
    if (error.code === 'auth/email-already-in-use')
      return (this.errors = 'Email Already registered');
    else return 'An error occurred. Please try again.';
  }

  loginWithGoogle(){
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
