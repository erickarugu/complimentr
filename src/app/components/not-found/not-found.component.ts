import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-not-found',
  template: `
    <app-header></app-header>
    <main></main>
  `,
  styles: [
    `
      main {
        width: 100vw;
        height: 100vh;
        background: url(./../../assets/img/not-found.jpg);
        background-position: center;
        background-size: cover;
      }
    `
  ]
})
export class NotFoundComponent implements OnInit {
  constructor() {}

  ngOnInit(): void {}
}
