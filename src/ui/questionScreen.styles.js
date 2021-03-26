import React from 'react';
import {StyleSheet} from 'react-native';
import {scale, verticalScale, moderateScale} from 'react-native-size-matters';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    margin: scale(16),
    alignItems: 'center',
    justifyContent: 'center',
  },
  ques: {
    fontFamily: 'Segoe UI',
    fontSize: scale(25),
  },
  txtQues: {
    fontFamily: 'Segoe UI',
    fontSize: scale(20),
    fontWeight: 'bold',
  },
  textAns: {
    marginBottom: scale(5),
    fontFamily: 'Segoe UI',
    fontSize: scale(17),
  },
  button: {
    backgroundColor: 'lightblue',
    width: scale(150),
    height: scale(60),
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: scale(30),
  },
  textbtn: {
    fontFamily: 'Segoe UI',
    fontSize: scale(30),
  },
  btn: {
    width: 200,
    height: 60,
    borderWidth: 1,
    backgroundColor: 'pink',
    padding: 20,
    justifyContent: 'center',
    alignItems: 'center',
  },
  btnText: {
    fontSize: 20,
  },
});

export default styles;
