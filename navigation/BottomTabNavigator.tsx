import * as React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { createStackNavigator } from '@react-navigation/stack';
import { useSelector } from 'react-redux';
import { BottomTabParamList } from '../types';
import { IRootState } from '../reducers';
import { Image, Text, View } from 'react-native';


const BottomTabNavigator: React.FC = () => {
  const BottomStack = createBottomTabNavigator<BottomTabParamList>();

  return (
    <BottomStack.Navigator initialRouteName="Home" tabBarOptions={{
      showLabel: false,
      activeTintColor: 'tomato',
      inactiveTintColor: 'gray',
    }}
    >
    </BottomStack.Navigator>
  );
};

const RootNavigator: React.FC = () => {
  const RootStack = createStackNavigator()
  return (
    <RootStack.Navigator
      headerMode='none'
    >
      <RootStack.Screen
        name='BottomNav'
        component={BottomTabNavigator}
      />
     
    </RootStack.Navigator>
  )
}

export default RootNavigator;
