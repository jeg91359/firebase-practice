import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { AngularFirestore } from '@angular/fire/firestore';

@Injectable({
  providedIn: 'root'
})
export class BlogpostsService {
  items: any;

   //items: Observable<any[]>;
   
  constructor(private firestore: AngularFirestore) {

  }

  getItems() : Observable<any>{
    return this.firestore.collection("blogposts").get();
    
    // this.firestore.collection("blogposts").get().then(function(querySnapshot) {
    //   querySnapshot.forEach(function(doc) {
    //     console.log(doc.id, " => ", doc.data());
    //   });
    // });
  }
  
}
