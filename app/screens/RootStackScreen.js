import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import SplashScreen from './auth/SplashScreen';
import SignUpScreen from './auth/SignUpScreen';
import SingInScreen from './auth/SignInScreen';

const RootStack = createStackNavigator();

const RootStackScreen = () => (
  <RootStack.Navigator headerMode={'none'}>
    <RootStack.Screen name={'Splash'} component={SplashScreen} />
    <RootStack.Screen name={'SingIn'} component={SingInScreen} />
    <RootStack.Screen name={'SignUp'} component={SignUpScreen} />
  </RootStack.Navigator>
);
export default RootStackScreen;
