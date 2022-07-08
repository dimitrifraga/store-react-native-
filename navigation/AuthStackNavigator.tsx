import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import IntroScreen from '../screens/Intro/IntroScreen';
import { AuthParamList } from '../types';

const AuthNavigator: React.FC = () => {
  const AuthStack = createStackNavigator<AuthParamList>();
  return (
    <AuthStack.Navigator screenOptions={{ headerShown: false }}>
      <AuthStack.Screen name="WelcomeScreen" component={IntroScreen} />
    </AuthStack.Navigator>
  );
};

export default AuthNavigator;
