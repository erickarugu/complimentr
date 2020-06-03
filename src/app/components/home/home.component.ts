import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';
import { AuthService } from 'src/app/_helpers';

@Component({
  templateUrl: './home.component.html',
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
export class HomeComponent implements OnInit {
  @ViewChild('navBurger') navBurger: ElementRef;
  @ViewChild('navMenu') navMenu: ElementRef;

  user;
  constructor(private authService: AuthService) {

  }

  ngOnInit(): void {
    this.user = JSON.parse(localStorage.getItem('user'));
  }

  toggleNavbar(){
    this.navBurger.nativeElement.classList.toggle('is-active');
    this.navMenu.nativeElement.classList.toggle('is-active');
  }

  logOut() {
    this.authService.SignOut();
    this.user = '';
  }

}
