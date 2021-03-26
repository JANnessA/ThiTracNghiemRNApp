import * as React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';

//screen
import BeginScreen from '../ui/beginScreen';
import QuestionScreen from '../ui/questionScreen';
import Login from '../ui/Login';
import Register from '../ui/Register';
import Menu from '../ui/menu';
import QuestionHis from '../ui/questionScreen';
import QuestionComputer from '../ui/questionScreen';
import QuestionArt from '../ui/questionScreen';
import QuestionGeo from '../ui/questionScreen';

const Stack = createStackNavigator();

const Navigation = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator headerMode="none">
        <Stack.Screen name="Login" component={Login} />
        <Stack.Screen name="Register" component={Register} />
        <Stack.Screen name="BeginScreen" component={BeginScreen} />
        <Stack.Screen name="Menu" component={Menu} />
        <Stack.Screen name="QuestionScreen" component={QuestionScreen} />
        <Stack.Screen name="QuestionHis" component={QuestionHis} />
        <Stack.Screen name="QuestionComputer" component={QuestionComputer} />
        <Stack.Screen name="QuestionArt" component={QuestionArt} />
        <Stack.Screen name="QuestionGeo" component={QuestionGeo} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default Navigation;
