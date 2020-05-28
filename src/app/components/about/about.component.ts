import { Component, OnInit } from '@angular/core';
import { AuthService } from 'src/app/_helpers';

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styles: [`
  .hero{
    background: url(./../../assets/img/main.png);
    background-color: rgba(125,4,195,0.5);
    background-blend-mode: overlay;
    /* background: hsl(278, 96%, 50%); */
    background-size: cover;
    background-postion: center;

  }
  `
  ]
})
export class AboutComponent implements OnInit {
  user;
  constructor(private authService: AuthService) {

  }

  ngOnInit(): void {
    this.user = JSON.parse(localStorage.getItem('user'));
  }

  logOut() {
    this.authService.SignOut();
    this.user = '';
  }

}
