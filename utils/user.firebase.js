import { Alert } from 'react-native';
import { createUserWithEmailAndPassword } from 'firebase/auth';
import { getFirestore, doc, setDoc } from 'firebase/firestore';
import { AUTH, DB } from '../config/firebase';

export const signUpUser = async (email, password) => {
  try {
    const request = await createUserWithEmailAndPassword(AUTH, email, password);
    await addUserToFirestore(request.user);
    Alert.alert('Welcome :)');
  } catch (error) {
    Alert.alert(error);
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
    Alert.alert(error);
  }
};
