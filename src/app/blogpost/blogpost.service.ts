import { Injectable } from '@angular/core';
import { AngularFirestore } from '@angular/fire/firestore';

@Injectable({
  providedIn: 'root'
})
export class BlogpostService {

  constructor(private firestore: AngularFirestore) { }


  getBlogPost(id: string){
    console.log('id', id);
    return this.firestore.collection("blogposts").doc(id).snapshotChanges();
  }

}
