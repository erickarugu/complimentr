import { Component, OnInit } from '@angular/core';
import { AngularFirestore } from '@angular/fire/firestore';
import { Router } from '@angular/router';
@Component({
  selector: 'app-note',
  templateUrl: './note.component.html',
  styles: []
})
export class NoteComponent implements OnInit {
  name: string;
  color: string;
  loading: boolean = false;
  message: string="";
  _db: AngularFirestore;

  constructor(public db: AngularFirestore, private router: Router) {
    this._db = db;
  }

  ngOnInit(): void {}

  addCompliment() {
    this.loading = true;
    if (this.name && this.color && this.message) {
      let complimentsCollection = this._db.collection('notes');
      complimentsCollection.add({color: this.color, message: this.message});
      this.loading = false;
    }
  }
}
