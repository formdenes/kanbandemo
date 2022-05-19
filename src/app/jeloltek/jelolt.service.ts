import { Injectable } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/compat/auth';
import { AngularFirestore } from '@angular/fire/compat/firestore';
import firebase from 'firebase/compat/app';
import { switchMap, map } from 'rxjs/operators';
import { Jelolt } from './jelolt.model';

@Injectable({
  providedIn: 'root'
})
export class JeloltService {

  constructor(private afAuth: AngularFireAuth, private db: AngularFirestore) { }

  async addJelolt(data: Jelolt) {
    const user = await this.afAuth.currentUser;
    return this.db.collection('jeloltek').add({...data})
  }
}
