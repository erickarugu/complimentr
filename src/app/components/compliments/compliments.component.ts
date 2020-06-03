import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';
import { Compliment } from 'src/app/shared/services/compliment';
import { Observable } from 'rxjs';
import { AngularFirestore } from '@angular/fire/firestore';
import { AngularFirestoreCollection } from '@angular/fire/firestore';
import { first } from 'rxjs/operators';

@Component({
  templateUrl: './compliments.component.html',
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
      .compliment {
        min-width: 250px;
        transition: transform 0.3s ease;
      }
      .compliment:hover {
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
export class ComplimentsComponent implements OnInit {
  errorMessage;
  filterName;
  @ViewChild('modal') modal: ElementRef;
  notes: any;

  constructor(private afs: AngularFirestore) {}

  async ngOnInit() {
    this.notes = await this.initializeCompliments();
  }

  async initializeCompliments() {
    const notes = await this.afs
      .collection('notes')
      .valueChanges()
      .pipe(first())
      .toPromise();
    return notes;
  }

  async filterCompliments(name: string) {
    this.errorMessage = "";
    this.notes = await this.initializeCompliments();
    if (!name) return;
    this.notes = this.notes.filter(currentNote => {
      if (currentNote.name && name) {
        return currentNote.name.toLowerCase().indexOf(name.toLowerCase()) > -1;
      }
    });
    if(this.notes.length < 1){
     this.errorMessage = "😞...No Match Found...😞";
    }
    console.log(this.notes, this.errorMessage);
  }

  async toggleModal() {
    this.modal.nativeElement.classList.toggle('is-active');
    this.notes = await this.initializeCompliments();
  }
}
