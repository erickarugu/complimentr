import { Component, OnInit } from '@angular/core';
import { AuthService } from 'src/app/_helpers';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styles: [
  ]
})
export class RegisterComponent implements OnInit {
  username;
  email;
  password;

  constructor(private authService: AuthService) { }

  ngOnInit(): void {
  }

  onSubmit(){
    this.authService.SignUp(this.email, this.password);
  }

}
