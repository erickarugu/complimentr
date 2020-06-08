import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { AngularFirestore } from '@angular/fire/firestore';
import { Router } from '@angular/router';
@Component({
  selector: 'app-note',
  templateUrl: './note.component.html',
  styles: [
    `
      @media screen and (max-width: 540px) {
        .modal-content,
        .modal-card {
          width: auto;
        }
      }
    `,
  ],
})
export class NoteComponent implements OnInit {
  @Output() closeBtn: EventEmitter<any> = new EventEmitter<any>();
  name: string;
  color: string;
  loading = false;
  message = '';
  database: AngularFirestore;

  constructor(public db: AngularFirestore, private router: Router) {
    this.database = db;
  }

  ngOnInit(): void {}

  addCompliment(form) {
    this.loading = true;
    if (this.name && this.color && this.message) {
      const complimentsCollection = this.database.collection('notes');
      complimentsCollection.add({
        color: this.color,
        name: this.name,
        message: this.message,
      });
      this.loading = false;
      form.resetForm();
      this.getTheme();
    }
  }

  closeModal() {
    this.closeBtn.emit();
  }
  getTheme() {
    if (this.color === 'is-warning') {
      return 'has-background-warning';
    }
    if (this.color === 'is-danger') {
      return 'has-background-danger';
    }
    if (this.color === 'is-success') {
      return 'has-background-success';
    }
    if (this.color === 'is-dark') {
      return 'has-background-dark';
    } else {
      return 'has-background-info';
    }
  }
}
