import React, {useState} from 'react';
import {View, TextInput, Text, TouchableOpacity} from 'react-native';
import loginStyles from './login.styles';
import {useNavigation} from '@react-navigation/native';
import axios from 'axios';
import md5 from 'md5';

const Login = () => {
  const [userName, setUserName] = useState('');
  const [pass, setPass] = useState('');
  const navigation = useNavigation();

  const checkLogIn = () => {
    var checkInput = /\b(ALTER|CREATE|DELETE|DROP|EXEC(UTE){0,1}|INSERT( +INTO){0,1}|MERGE|SELECT|UPDATE|UNION( +ALL){0,1})\b/;
    // var encrName = RSA.encrypt(userName);
    axios
      .get('https://5ffaa6d687478d0017d9a747.mockapi.io/UserAcc')
      .then((res) => {
        var passInput = md5(pass);
        var data = res.data;
        console.log(res.data);
        for (let i = 0; i < data.length; i++) {
          if (
            data[i].Password === passInput &&
            checkInput.test(pass) === false
          ) {
            console.log('pass dung', i);
            if (
              data[i].Username === userName &&
              checkInput.test(userName) === false
              //checkName.test(encrName) === true
            ) {
              console.log('user dung', i);
              navigation.navigate('BeginScreen');
            } else {
              //alert('wrong username');
            }
          } else {
            // alert('wrong pass');
          }
        }
      });
  };

  return (
    <View style={loginStyles.container}>
      <Text style={loginStyles.title}>Login Form</Text>
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
          secureTextEntry={true}
          value={pass}
          onChangeText={(u) => setPass(u)}
        />
      </View>
      <View style={loginStyles.userName}>
        <TouchableOpacity
          onPress={() => {
            checkLogIn();
          }}>
          <Text style={loginStyles.logInButton}>{'LogIn'}</Text>
        </TouchableOpacity>
        <TouchableOpacity onPress={() => navigation.navigate('Register')}>
          <Text style={loginStyles.logInButton}>{'Register'}</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default Login;
