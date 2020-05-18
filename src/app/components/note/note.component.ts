import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-note',
  templateUrl: './note.component.html',
  styles: [
  ]
})
export class NoteComponent implements OnInit {
  name: string;
  loading: boolean = false;
  message: string;

  constructor() { }

  ngOnInit(): void {
  }

  onSubmit(){}

}
