import { Alert } from 'react-native';
import {
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
} from 'firebase/auth';

import { doc, setDoc } from 'firebase/firestore';
import { AUTH, DB } from '../config/firebase';

import Toast from 'react-native-root-toast';

export const signUpUser = async (email, password) => {
  try {
    const request = await createUserWithEmailAndPassword(AUTH, email, password);
    await addUserToFirestore(request.user);
    Toast.show('Welcome :)');
    // Alert.alert('Welcome :)');
  } catch (error) {
    Toast.show('Oops, try again');
    // Alert.alert(error);
  }
};

export const signInUser = async (email, password) => {
  try {
    await signInWithEmailAndPassword(AUTH, email, password);
    Toast.show('Welcome back!');
    // Alert.alert('Welcome back!');
  } catch (error) {
    Toast.show('Oops, try again');
    // Alert.alert(error);
  }
};

export const addUserToFirestore = async (user) => {
  const userId = user.uid;
  const userDocRef = doc(DB, 'users', userId);
  const newUser = {
    uid: user.uid,
    email: user.email,
    firstname: '',
    lastname: '',
  };
  try {
    await setDoc(userDocRef, newUser);
  } catch (error) {
    Toast.show('Something went wrong');
    // Alert.alert(error);
  }
};
