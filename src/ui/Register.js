import React, {useState} from 'react';
import {View, TextInput, Text, TouchableOpacity} from 'react-native';
import loginStyles from './login.styles';
import {useNavigation} from '@react-navigation/native';
import axios from 'axios';
import md5 from 'md5';

const Register = () => {
  const [userName, setUserName] = useState('');
  const [pass, setPass] = useState('');
  const [phone, setPhone] = useState('');
  const [gmail, setGmail] = useState('');
  const navigation = useNavigation();

  // //generate key
  // var RSAKey = require('react-native-rsa');
  // const bits = 1024;
  // const exponent = '10001'; // must be a string
  // var rsa = new RSAKey();
  // var r = rsa.generate(bits, exponent);
  // var publicKey = rsa.RSAGetPublicString(); // return json encoded string
  // //var privateKey = rsa.RSAGetPrivateString();

  // //encrypt
  // var rsa = new RSAKey();
  // rsa.setPublicString(publicKey);
  // const encryptData = (data) => {
  //   return rsa.encrypt(data);
  // };

  const check = () => {
    var checkInput = /\b(ALTER|CREATE|DELETE|DROP|EXEC(UTE){0,1}|INSERT( +INTO){0,1}|MERGE|SELECT|UPDATE|UNION( +ALL){0,1})\b/;
    if (
      checkInput.test(userName) === true &&
      checkInput.test(pass) === true &&
      checkInput.test(phone) === true &&
      checkInput.test(gmail) === true
    ) {
      console.log('f');
    } else {
      RegisterUser();
      //alert('You can not using special word/letter');
    }
  };

  const RegisterUser = () => {
    const passMd5 = md5(pass);
    axios
      .post('https://5ffaa6d687478d0017d9a747.mockapi.io/UserAcc', {
        // Username: encryptData(userName),
        // Password: passMd5,
        // PhoneNumber: encryptData(phone),
        // Gmail: encryptData(gmail),
        Username: userName,
        Password: passMd5,
        PhoneNumber: phone,
        Gmail: gmail,
      })
      .then(() => {
        alert('Success');
        navigation.navigate('Login');
      })
      .catch(function (error) {
        console.log(error);
      });
  };

  return (
    <View style={loginStyles.container}>
      <Text style={loginStyles.title}>Register Form</Text>
      <View style={loginStyles.userName}>
        <Text style={loginStyles.txt}>Name</Text>
        <TextInput
          style={loginStyles.usernameti}
          value={userName}
          onChangeText={(u) => setUserName(u)}
        />
      </View>
      <View style={loginStyles.userName}>
        <Text style={loginStyles.txt}>Password</Text>
        <TextInput
          style={loginStyles.usernameti}
          value={pass}
          onChangeText={(u) => setPass(u)}
          secureTextEntry={true}
        />
      </View>
      <View style={loginStyles.userName}>
        <Text style={loginStyles.txt}>Phone</Text>
        <TextInput
          style={loginStyles.usernameti}
          value={phone}
          onChangeText={(u) => setPhone(u)}
          keyboardType={'numeric'}
        />
      </View>
      <View style={loginStyles.userName}>
        <Text style={loginStyles.txt}>Gmail</Text>
        <TextInput
          style={loginStyles.usernameti}
          value={gmail}
          onChangeText={(u) => setGmail(u)}
          keyboardType={'email-address'}
        />
      </View>
      <View style={loginStyles.userName}>
        <TouchableOpacity onPress={() => navigation.navigate('Login')}>
          <Text style={loginStyles.logInButton}>{'LogIn'}</Text>
        </TouchableOpacity>
        <TouchableOpacity
          onPress={() => {
            check();
          }}>
          <Text style={loginStyles.logInButton}>{'Register'}</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default Register;
