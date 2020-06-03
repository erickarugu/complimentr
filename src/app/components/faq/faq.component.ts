import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';

@Component({
  selector: 'app-faq',
  templateUrl: './faq.component.html',
  styles: [
    `main{
      min-height: 100vh;
      background: rgba(255, 255, 255, 0.9);
    }
    .main{
      display: flex;
      align-items: center;
      justify-content: space-around ;
      height: 40vh;
      background: url(./../../assets/img/main.jpg);
      background-color: rgba(0,0,0,0.5);
      background-position: center;
      background-size: cover;
      background-blend-mode: overlay;
      overflow: hidden;
      border-bottom-left-radius: 20px;
      padding: auto 20px;
    }
     .top-hr{
      border: 2px dotted #000;
      width: 30%;
      margin-left: auto;
      margin-right: auto;
    }
    .accordions {
        padding-top: 5vh;
        padding-bottom: 5vh;
      }
      .columns {
        justify-content: center;
      }
    `
  ]
})
export class FaqComponent implements OnInit {
  constructor() {}

  ngOnInit(): void {}

  async toggleAccordion(accordion) {
    accordion.classList.toggle('is-active');
  }
}
