import { initializeApp } from 'firebase/app';
import { initializeAuth, getReactNativePersistence } from 'firebase/auth';
import { getFirestore } from 'firebase/firestore';
import AsyncStorage from '@react-native-async-storage/async-storage';

const firebaseConfig = {
  apiKey: 'AIzaSyBrBtvPAKQ9K7BBl3r-ZVZrA4PATjEkJ94',
  authDomain: 'event-organizer-18101.firebaseapp.com',
  projectId: 'event-organizer-18101',
  storageBucket: 'event-organizer-18101.firebasestorage.app',
  messagingSenderId: '291651262924',
  appId: '1:291651262924:web:20c517dc3f8b42d9112569',
  measurementId: 'G-3Q49PPNG96',
};

const app = initializeApp(firebaseConfig);
const DB = getFirestore();
const AUTH = initializeAuth(app, {
  persistence: getReactNativePersistence(AsyncStorage),
});

export { DB, AUTH };
