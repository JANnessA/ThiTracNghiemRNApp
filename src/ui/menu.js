import React, {useState} from 'react';
import {View, TextInput, Text, TouchableOpacity} from 'react-native';
import styles from './menu.styles';
import {useNavigation} from '@react-navigation/native';

const Menu = () => {
  const navigation = useNavigation();

  return (
    <View style={styles.container}>
      <Text style={styles.title}>{'Quiz App'}</Text>
      <TouchableOpacity
        style={styles.btn}
        onPress={() => navigation.navigate('QuestionScreen')}>
        <Text>{'History'}</Text>
      </TouchableOpacity>
      <TouchableOpacity
        style={styles.btn}
        onPress={() => navigation.navigate('QuestionScreen')}>
        <Text>{'Sport'}</Text>
      </TouchableOpacity>
      <TouchableOpacity
        style={styles.btn}
        onPress={() => navigation.navigate('QuestionComputer')}>
        <Text>{'Science: Computer'}</Text>
      </TouchableOpacity>
      <TouchableOpacity
        style={styles.btn}
        onPress={() => navigation.navigate('QuestionArt')}>
        <Text>{'Art'}</Text>
      </TouchableOpacity>
      <TouchableOpacity
        style={styles.btn}
        onPress={() => navigation.navigate('QuestionGeo')}>
        <Text>{'Geography'}</Text>
      </TouchableOpacity>
    </View>
  );
};

export default Menu;
