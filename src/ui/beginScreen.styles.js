import React from 'react';
import {StyleSheet} from 'react-native';
import {scale, verticalScale, moderateScale} from 'react-native-size-matters';

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  topView: {
    width: scale(350),
    height: scale(390),
    justifyContent: 'center',
    alignItems: 'center',
  },
  title: {
    color: '#101ee6',
    fontSize: scale(75),
  },
  bottomView: {
    backgroundColor: '#40a6e6',
    borderTopLeftRadius: scale(300),
    borderTopRightRadius: scale(300),
    width: scale(600),
    height: scale(300),
    alignSelf: 'center',
    justifyContent: 'center',
    alignItems: 'center',
  },
  btn: {
    backgroundColor: 'lightblue',
    width: scale(150),
    height: scale(60),
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: scale(30),
  },
  btnText: {
    fontFamily: 'Segoe UI',
    fontSize: scale(30),
  },
});

export default styles;
