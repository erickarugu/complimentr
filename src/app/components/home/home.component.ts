import { Component, OnInit } from '@angular/core';
import { Compliment } from 'src/app/shared/services/compliment';
import { Observable } from 'rxjs';
import { AngularFirestore } from '@angular/fire/firestore';
import { AngularFirestoreCollection } from '@angular/fire/firestore';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styles: [
    `
      .section {
        height: 100%;
        min-height: 100vh;
        background: url(./../../assets/img/bg.png);
        background-size: cover;
        background-postion: center;
      }
      .columns {
        display: flex;
        flex-flow: row wrap;
      }
      .compliment{
        min-width: 250px;
        transition: transform .3s ease;
      }
      .compliment:hover{
        transform: translateY(-2px);
        cursor: pointer;
        transform: rotate(2deg);
      }
      .message-body {
        font-family: 'Shadows Into Light Two', cursive;
        font-size: 20px;
      }
    `
  ]
})
export class HomeComponent implements OnInit {
  notesCollection: AngularFirestoreCollection<Compliment>;
  notes: Observable<Compliment[]>;

  constructor(private afs: AngularFirestore) {}

  ngOnInit(): void {
    this.notesCollection = this.afs.collection('notes');
    this.notes = this.notesCollection.valueChanges();
  }


}
