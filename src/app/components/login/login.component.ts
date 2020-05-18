import { Component, OnInit } from '@angular/core';
import { AuthService } from 'src/app/_helpers';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styles: [
  ]
})
export class LoginComponent implements OnInit {
  email: string;
  password: string;
  submitted: false;
  loading: boolean= false;

  constructor(private authService: AuthService, private router: Router) { }

  ngOnInit(): void {
  }

  onSubmit(){
    this.loading = true;
    if(this.email && this.password){
      this.authService.SignIn(this.email, this.password)
        .then(result => {
          console.log(result);
        });
    }
  }

}
