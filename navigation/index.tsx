import React, { useEffect } from 'react';
import { AsyncStorage, ColorSchemeName } from 'react-native';
import { useDispatch, useSelector } from 'react-redux';
import {
  NavigationContainer,
  DefaultTheme,
  DarkTheme,
} from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

import BottomTabNavigator from './BottomTabNavigator';
import AuthStackNavigator from './AuthStackNavigator';
import { IRootState } from '../reducers';
import { RootStackParamList } from '../types';
import { authLoginUserSuccess } from '../actions/authActions';

const Stack = createStackNavigator<RootStackParamList>();

const RootNavigator: React.FC = () => {
  return (
    <Stack.Navigator screenOptions={{ headerShown: false }} initialRouteName="Root">
      <Stack.Screen name="Root" component={BottomTabNavigator} />
    </Stack.Navigator>
  );
};

const AuthNavigator: React.FC = () => {
  return (
    <Stack.Navigator screenOptions={{ headerShown: false }}>
      <Stack.Screen name="Auth" component={AuthStackNavigator} />
    </Stack.Navigator>
  );
};

export interface INavigationProps {
  colorScheme: ColorSchemeName;
}

const Navigation: React.FC<INavigationProps> = (props) => {
  const authData = useSelector((state: IRootState) => state.auth);
  const isAuthenticated = authData.isAuthenticated;
  const { colorScheme } = props;
  return (
    <NavigationContainer
      theme={colorScheme === 'dark' ? DarkTheme : DefaultTheme}
    >
      {isAuthenticated ? <RootNavigator /> : <AuthNavigator />}
    </NavigationContainer>
  );
};

export default Navigation;
