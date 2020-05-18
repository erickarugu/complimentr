import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-note',
  template: `
    <p>
      note works!
    </p>
  `,
  styles: [
  ]
})
export class NoteComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

}
