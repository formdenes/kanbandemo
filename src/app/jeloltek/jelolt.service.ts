import { Injectable } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/compat/auth';
import { AngularFirestore, QuerySnapshot } from '@angular/fire/compat/firestore';
import firebase from 'firebase/compat/app';
import { Observable } from 'rxjs';
import { Jelolt } from './jelolt.model';
// import { getFirestore, collection } from 'firebase/firestore'

@Injectable({
  providedIn: 'root'
})
export class JeloltService {

  constructor(private afAuth: AngularFireAuth, private db: AngularFirestore) { }

  /**
   * Adds Jelolt to db
   * @param data Jelolt to add
   */
  async addJelolt(data: Jelolt) {
    // const user = await this.afAuth.currentUser;
    return this.db.collection('jeloltek').add({...data})
  }

  async addJelolts(data: Jelolt[]) {
    return data.forEach(jelolt => this.addJelolt(jelolt));
  }

  getJelolts(): Observable<firebase.firestore.QuerySnapshot<unknown>> {
    return this.db.collection('jeloltek').get();
  }

  getJeloltById(id:string): Observable<firebase.firestore.DocumentSnapshot<unknown>> {
    return this.db.collection('jeloltek').doc(id).get();
  }
}
