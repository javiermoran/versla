import { initializeApp } from 'firebase/app';
import {
  collection,
  DocumentData,
  Firestore,
  getDocs,
  getFirestore,
  QueryDocumentSnapshot,
  QuerySnapshot,
} from 'firebase/firestore/lite';
import { Observable, Subscriber } from 'rxjs';
import * as firebaseConfig from './firebase.conf.json';

const app = initializeApp(firebaseConfig);
const firestoreDB: Firestore = getFirestore(app);

function getCollectionDocs(collectionName: string): Observable<DocumentData[]> {
  const observable$ = new Observable((subscriber: Subscriber<any>): void => {
    const col = collection(firestoreDB, collectionName);
    getDocs(col)
      .then((snapshot: QuerySnapshot<DocumentData>): void => {
        const list = snapshot.docs.map(
          (doc: QueryDocumentSnapshot<DocumentData>): DocumentData => doc.data()
        );
        subscriber.next(list);
        subscriber.complete();
      })
      .catch((error: any): void => {
        subscriber.error(error);
      });
  });

  return observable$;
}

const FirebaseSDK = { getCollectionDocs };
export default FirebaseSDK;
