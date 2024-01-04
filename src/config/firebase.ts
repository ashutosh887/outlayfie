import {initializeApp} from 'firebase/app';
import * as firebaseAuthModule from 'firebase/auth';
import {getFirestore, collection} from 'firebase/firestore';
import ReactNativeAsyncStorage from '@react-native-async-storage/async-storage';

const getReactNativePersistence = (firebaseAuthModule as any)
  .getReactNativePersistence;

const firebaseConfig = {
  apiKey: 'FIREBASE_API_KEY',
  authDomain: 'FIREBASE_AUTH_DOMAIN',
  projectId: 'FIREBASE_PROJECT_ID',
  storageBucket: 'FIREBASE_STORAGE_BUCKET',
  messagingSenderId: 'FIREBASE_SENDER_ID',
  appId: 'FIREBASE_APP_ID',
  measurementId: 'FIREBASE_MEASUREMENT_ID',
};

const firebaseApp = initializeApp(firebaseConfig);

export const firebaseAuth = firebaseAuthModule.initializeAuth(firebaseApp, {
  persistence: getReactNativePersistence(ReactNativeAsyncStorage),
});

export const firebaseDB = getFirestore(firebaseApp);

export const firebaseTripsRef = collection(firebaseDB, 'trips');

export const firebaseExpensesRef = collection(firebaseDB, 'expenses');

export default firebaseApp;
