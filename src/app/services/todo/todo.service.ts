import { Injectable } from '@angular/core';
import { addDoc, collection, collectionData, deleteDoc, doc, Firestore, query, where } from '@angular/fire/firestore';
import { Auth } from '@angular/fire/auth';
import { AuthService } from '../user/auth.service';


@Injectable({
  providedIn: 'root'
})
export class TodoService {

  constructor(
    private firestore: Firestore,
    private auth: AuthService) { }

  user = this.auth.getUser() //retrieving the current user object from the `AuthService` service
  userId = this.user ? this.user.uid.toString() : ''
  userCollection = collection(this.firestore, 'users')
  userSubcollectionRef = collection(this.userCollection, this.userId, 'todo') //Add current user uid as firestore document name

  get(state: string) {
    const q = query(this.userSubcollectionRef, where("state", "==", state));
    return collectionData(q, { idField: 'id' })
  }

  delete(id: string) {
    const docInstance = doc(this.userSubcollectionRef, id)
    deleteDoc(docInstance)
  }

  changeState(state: string, id: any, value: string) {
    const docInstance = doc(this.userSubcollectionRef, id)
    const dataToSave = { name: value, state: state }
    addDoc(this.userSubcollectionRef, dataToSave).then(() => {
      deleteDoc(docInstance)
    })
  }
}
