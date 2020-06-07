import React from 'react';
import { Text, View, TouchableOpacity } from 'react-native';
import { Feather as Icon } from '@expo/vector-icons'
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

import Chat from '../pages/Chat';
import TabNavigation from './TabNavigation';

const AppStack = createStackNavigator();

const MainNavigation = () => {
  return (
    <NavigationContainer>
      <AppStack.Navigator
        screenOptions={{
          headerStyle: {
            backgroundColor: '#075e54'
          },
          headerTintColor: '#fff'
        }}
      >
        <AppStack.Screen
          name="Tabs"
          component={ TabNavigation }
          options={{
            title: 'WhatsApp',
            cardStyle: { backgroundColor: '#0f0' },
            headerRight: () => (
              <View style={{ flexDirection: 'row' }}>
                <TouchableOpacity>
                  <Icon name="search" color='#fff' size={ 24 } /> 
                </TouchableOpacity>
                <TouchableOpacity style={{ marginHorizontal: 15 }}>
                  <Icon name="more-vertical" color='#fff' size={ 24 } /> 
                </TouchableOpacity>
              </View>
            )
          }}
        />
        <AppStack.Screen name="Chat" component={ Chat } />
      </AppStack.Navigator>
    </NavigationContainer>
  );
}

export default MainNavigation;