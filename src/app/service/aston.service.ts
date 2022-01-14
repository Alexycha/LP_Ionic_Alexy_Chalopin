import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { AngularFirestore, AngularFirestoreCollection } from '@angular/fire/firestore';
import { Aston } from '../models/aston.model';

@Injectable({
  providedIn: 'root'
})
export class AstonService {
  private dbPath = '/astons';
  astonsRef: AngularFirestoreCollection<Aston>;

  constructor(
    private db: AngularFirestore
  ) {
    this.astonsRef = db.collection(this.dbPath);
  }

  getAllAstons(): any {
    return this.astonsRef.snapshotChanges().pipe(
      map((changes: any) => {
        return changes.map((doc: any) => {
          return ({ id: doc.payload.doc.id, ...doc.payload.doc.data() })
        })
      })
    );
  }

  saveNewAston(aston: Aston): any {
    return new Observable(obs => {
      this.astonsRef.add({ ...aston }).then(() => {
        obs.next();
      })
    })
  }

  get(id: any): any {
    return new Observable(obs => {
      this.astonsRef.doc(id).get().subscribe(res => {
        obs.next({ id: res.id, ...res.data() });
      });
    });
  }

  update(aston: Aston) {
    return new Observable(obs => {
      this.astonsRef.doc(aston.id).update(aston);
      obs.next();
    });
  }

  delete(id: any) {
    this.astonsRef.doc(id).delete();
  }
}

