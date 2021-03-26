import React from 'react';
import {StyleSheet} from 'react-native';
import {scale} from 'react-native-size-matters';

const loginStyles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  title: {
    fontSize: 30,
    fontWeight: 'bold',
  },
  userName: {
    flexDirection: 'row',
    marginTop: 15,
  },
  usernameti: {
    height: 36,
    width: 200,
    borderWidth: 1,
  },
  txt: {
    width: 100,
  },
  logInButton: {
    fontSize: 20,
    marginTop: 15,
    margin: 70,
  },
  fingerbtn: {
    width: 300,
    height: 60,
    justifyContent: 'center',
    alignItems: 'center',
  },
});

export default loginStyles;
