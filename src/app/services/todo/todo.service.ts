import { Injectable } from '@angular/core';
import { addDoc, collection, collectionData, deleteDoc, doc, Firestore, query, where } from '@angular/fire/firestore';

@Injectable({
  providedIn: 'root'
})
export class TodoService {

  constructor(private firestore: Firestore) { }

  get(state:string) {
    const collectionInstance = collection(this.firestore, 'todo')
    const q = query(collectionInstance, where("state", "==", state));
    return collectionData(q, { idField: 'id' })
  }

  delete(id: string) {
    const docInstance = doc(this.firestore, 'todo', id)
    deleteDoc(docInstance)
  }

  changeState(state: string, id: any, value: string) {
    const collectionInstance = collection(this.firestore, 'todo')
    const docInstance = doc(this.firestore, 'todo', id)
    const dataToSave = { name: value, state: state }
    addDoc(collectionInstance, dataToSave).then(()=>{
      deleteDoc(docInstance)
    })
  }
}
