import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

import Chat from '../pages/Chat';

const AppStack = createStackNavigator();

const MainNavigation = () => {
  return (
    <NavigationContainer>
      <AppStack.Navigator>
        <AppStack.Screen name="Chat" component={ Chat } />
      </AppStack.Navigator>
    </NavigationContainer>
  );
}

export default MainNavigation;