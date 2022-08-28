import { initializeApp } from 'firebase/app';
import {
  getAuth,
  GoogleAuthProvider,
  signInWithPopup,
  onAuthStateChanged,
  signOut,
} from 'firebase/auth';
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

function authStateChange(callbackFn: any): any {
  const auth = getAuth();
  return onAuthStateChanged(auth, callbackFn);
}

function login(): void {
  const provider = new GoogleAuthProvider();
  provider.addScope('https://www.googleapis.com/auth/contacts.readonly');
  const auth = getAuth();
  signInWithPopup(auth, provider);
}

function logout(): Promise<any> {
  const auth = getAuth();
  return signOut(auth);
}

function getCollectionDocs(query: any = {}): Observable<DocumentData[]> {
  const observable$ = new Observable((subscriber: Subscriber<any>): void => {
    getDocs(query)
      .then((snapshot: QuerySnapshot<any>): void => {
        const list = snapshot.docs.map(
          (doc: QueryDocumentSnapshot<DocumentData>): DocumentData => doc.data()
        );
        subscriber.next(list);
        subscriber.complete();
      })
      .catch((error: any): void => {
        subscriber.error(error);
        subscriber.complete();
      });
  });

  return observable$;
}

const FirebaseSDK = {
  firestoreDB,
  getCollectionDocs,
  login,
  logout,
  authStateChange,
};
export default FirebaseSDK;
