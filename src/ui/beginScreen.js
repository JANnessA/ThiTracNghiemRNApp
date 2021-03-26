import React from 'react';
import {View, TouchableOpacity, ImageBackground, Text} from 'react-native';
import styles from './beginScreen.styles';
//1
import {useNavigation} from '@react-navigation/native';

const BeginScreen = () => {
  //1
  const navigation = useNavigation();
  return (
    <ImageBackground
      source={require('../asset/ex.jpg')}
      style={styles.container}>
      <View style={styles.topView}>
        <Text style={styles.title}>{'Quiz App'}</Text>
      </View>
      <View style={styles.bottomView}>
        <TouchableOpacity
          style={styles.btn}
          onPress={() => navigation.navigate('Menu')}>
          <Text style={styles.btnText}>{'Start'}</Text>
        </TouchableOpacity>
      </View>
    </ImageBackground>
  );
};

export default BeginScreen;
