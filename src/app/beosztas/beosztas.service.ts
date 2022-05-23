import { Injectable } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/compat/auth';
import { AngularFirestore } from '@angular/fire/compat/firestore';
import firebase from 'firebase/compat/app';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class BeosztasService {
  
  constructor(private afAuth: AngularFireAuth, private db: AngularFirestore) { }

  getStages(): Observable<firebase.firestore.QuerySnapshot<unknown>>{
    return this.db.collection('stages').get();
  }

}
