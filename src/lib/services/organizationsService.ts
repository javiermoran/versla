import {
  collection,
  DocumentData,
  query,
  where,
} from 'firebase/firestore/lite';
import { Observable } from 'rxjs';
import FirebaseSDK from '../firebase/firebaseSDK';

const getOrganizations = (userId: string): Observable<DocumentData[]> => {
  const organizationsQuery = query(
    collection(FirebaseSDK.firestoreDB, 'organization'),
    where('members', 'array-contains', userId)
  );
  return FirebaseSDK.getCollectionDocs(organizationsQuery);
};

export { getOrganizations };
