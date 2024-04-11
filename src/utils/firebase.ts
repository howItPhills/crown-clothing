import { initializeApp } from "firebase/app";
import {
  getAuth,
  signInWithPopup,
  GoogleAuthProvider,
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  updateProfile,
  signOut,
  onAuthStateChanged,
  User,
  NextOrObserver,
} from "firebase/auth";
import {
  collection,
  doc,
  getDoc,
  getDocs,
  getFirestore,
  query,
  setDoc,
  writeBatch,
} from "firebase/firestore";
import { getErrorMessage } from "./utilityFunctions";
import { ShopItemType } from "../contexts/ShopContext";

const firebaseConfig = {
  apiKey: "AIzaSyCE8svbAwCQ74OjixhZ3f1Wg3sqmYk-PtI",
  authDomain: "crown-clothing-db-2024.firebaseapp.com",
  projectId: "crown-clothing-db-2024",
  storageBucket: "crown-clothing-db-2024.appspot.com",
  messagingSenderId: "701611578804",
  appId: "1:701611578804:web:d297b459f2d1bb6bd30ee1",
};

initializeApp(firebaseConfig);

// AUTH OBJECT
export const auth = getAuth();

// DATABASE
const db = getFirestore();

// AUTH STATE CHANGE LISTENER
export const onAuthStateChangeListener = (callback: NextOrObserver<User>) =>
  onAuthStateChanged(auth, callback);

// PROVIDER FOR GOOGLE SIGN IN
const googleProvider = new GoogleAuthProvider();
googleProvider.setCustomParameters({
  prompt: "select_account",
});

export const signInWithGooglePopup = async () => {
  const { user } = await signInWithPopup(auth, googleProvider);
  await createUserDocument(user);
};

// SIGN IN WITH EMAIL AND PASSWORD
export const signIn = async (email: string, password: string) => {
  await signInWithEmailAndPassword(auth, email, password);
};

// SIGN OUT
export const signOutUser = async () => await signOut(auth);

// SIGN UP WITH EMAIL AND PASSWORD
export const signUpNewUser = async (
  email: string,
  password: string,
  displayName: string,
) => {
  const { user } = await createUserWithEmailAndPassword(auth, email, password);
  await updateProfile(user, { displayName }); //ADDING displayName to auth cuz createUserWithEmailAndPassword doesn't
  await createUserDocument(user);
};

// CREATING A DOCUMENT FOR A NEW USER IN DATABASE
export const createUserDocument = async (user: User) => {
  const { displayName, uid, email } = user;

  const userDocRef = doc(db, "users", uid);

  const userSnapshot = await getDoc(userDocRef);

  if (!userSnapshot.exists()) {
    try {
      const createdAt = new Date();
      await setDoc(userDocRef, {
        displayName,
        email,
        createdAt,
      });
    } catch (error) {
      console.log(getErrorMessage(error));
    }
  }

  return userDocRef;
};

// CREATING A NEW COLLECTION FOR A SHOP DATA
type ShopDataType = {
  title: string;
  items: ShopItemType[];
};

export const addCollectionAndDocuments = async (
  collectionKey: string,
  shopData: ShopDataType[],
) => {
  const batch = writeBatch(db);

  shopData.forEach((object) => {
    const objectDocRef = doc(db, collectionKey, object.title.toLowerCase());
    batch.set(objectDocRef, object);
  });

  await batch.commit();
  console.log("done");
};

// FETCHING THE SHOP DATA FROM FIRESTORE
export const getCollectionsAndDocuments = async () => {
  const collectionRef = collection(db, "collections");
  const queryObj = query(collectionRef);

  const querySnapshot = await getDocs(queryObj);

  const collectionsArr = querySnapshot.docs.map((querySnap) =>
    querySnap.data(),
  );
  return collectionsArr;
};
