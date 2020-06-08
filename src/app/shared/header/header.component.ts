import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';
import { AuthService } from 'src/app/_helpers';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styles: []
})
export class HeaderComponent implements OnInit {
  @ViewChild('navBurger') navBurger: ElementRef;
  @ViewChild('navMenu') navMenu: ElementRef;

  user;
  constructor(private authService: AuthService){
    this.authService.currentUser.subscribe(currentUser => {
      this.user = currentUser;
      });
  }

  ngOnInit(): void {

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
