import { Component, OnInit } from '@angular/core';
import { AuthService } from 'src/app/_helpers';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styles: []
})
export class HeaderComponent implements OnInit {
  user;
  constructor(private authService: AuthService) {
    this.user = JSON.parse(localStorage.getItem('user'));
  }

  ngOnInit(): void {}

  logOut() {
    this.authService.SignOut();
    this.user = '';
  }
}
