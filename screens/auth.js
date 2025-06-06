import {
  StyleSheet,
  Text,
  SafeAreaView,
  TextInput,
  Button,
  Alert,
  Pressable,
} from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';
import { AppStyle } from '../utils/constants';
import { useState } from 'react';

import ButtonCustom from '../components/button.custom';

import { signUpUser, signInUser } from '../utils/user.firebase';

export default function AuthScreen() {
  const [type, setType] = useState(true);
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleAuth = async () => {
    if (email === '' && password === '') {
      Alert.alert('Please check your credentials');
    }
    if (type) {
      await signUpUser(email, password);
    } else {
      await signInUser(email, password);
    }
  };

  return (
    <LinearGradient
      style={styles.constainer}
      colors={[AppStyle.safflower, AppStyle.hibiscus]}
    >
      <SafeAreaView style={styles.form}>
        <Text style={styles.title}>{type ? 'Sign up' : 'Sign in'}</Text>
        <TextInput
          style={styles.input}
          placeholderTextColor='#B0B0B0'
          placeholder='Enter email'
          autoCapitalize='none'
          keyboardType='email-address'
          textContentType='emailAddress'
          autoFocus={true}
          value={email}
          onChangeText={(text) => setEmail(text)}
        />
        <TextInput
          style={styles.input}
          placeholderTextColor='#B0B0B0'
          placeholder='Enter Password'
          autoCapitalize='none'
          autoCorrect={false}
          secureTextEntry={true}
          textContentType='password'
          value={password}
          onChangeText={(text) => setPassword(text)}
        />
        <ButtonCustom
          title={type ? 'Sign up' : 'Sign In'}
          onPress={handleAuth}
          light={true}
        />
        {/* <Button title={type ? 'Sign up' : 'Sign In'}  /> */}

        <Pressable
          style={{ flexDirection: 'row' }}
          onPress={() => setType(!type)}
        >
          <Text style={styles.textType}>
            {!type ? "Don't have an account ? " : 'Already have an account ? '}
          </Text>
          <Text style={[styles.textType, { fontWeight: 'bold' }]}>
            {!type ? 'Sign up' : 'Sign in'}
          </Text>
        </Pressable>
      </SafeAreaView>
    </LinearGradient>
  );
}

const styles = StyleSheet.create({
  constainer: {
    flex: 1,
  },
  form: {
    flex: 1,
    justifyContent: 'center',
    marginHorizontal: 40,
  },
  title: {
    fontFamily: 'Anton',
    fontSize: 50,
    fontWeight: 'bold',
    color: '#fffffe',
    paddingBottom: 20,
  },
  input: {
    backgroundColor: '#1E1E1E',
    borderWidth: 1,
    borderColor: AppStyle.borderColor,
    height: 50,
    marginBottom: 20,
    fontSize: 20,
    borderRadius: 8,
    padding: 10,
    color: '#FFFFFF',
  },
  textType: {
    fontSize: 20,
    marginTop: 20,
    color: '#fffffe',
  },
});
