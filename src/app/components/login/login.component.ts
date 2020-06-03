import { Component, OnInit } from '@angular/core';
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
      .img-box{
        text-align: center;
      }
      img{
        width: 40px;
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

  constructor(private authService: AuthService, private router: Router) {}

  ngOnInit(): void {}

  onSubmit() {
    this.loading = true;
    this.authService.SignIn(this.email,this.password)
    .then(
      (data) =>{console.log(data);this.loading=false;this.router.navigate(['/compliments'])},
      (error) =>{console.log(error);this.loading=false})
  }
}
