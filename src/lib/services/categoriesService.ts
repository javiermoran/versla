import {
  collection,
  DocumentData,
  query,
  where,
} from 'firebase/firestore/lite';
import { Observable } from 'rxjs';
import FirebaseSDK from '../firebase/firebaseSDK';
import ICategory from '../models/ICategory';

const getCategories = (organizationId: string): Observable<DocumentData[]> => {
  const organizationsQuery = query(
    collection(FirebaseSDK.firestoreDB, 'categories'),
    where('categoryId', '==', organizationId)
  );
  return FirebaseSDK.getCollectionDocs(organizationsQuery);
};

const createCategory = (category: ICategory): Observable<any> => {
  return FirebaseSDK.createCollectionDocument('categories', category);
};

export { getCategories, createCategory };
