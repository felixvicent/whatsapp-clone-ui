import React from 'react';
import { View } from 'react-native';
import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';
import { Feather as Icon } from '@expo/vector-icons'

import Camera from '../pages/Camera';
import ChatList from '../pages/ChatList';
import Status from '../pages/Status';
import Call from '../pages/Call';

const AppTab = createMaterialTopTabNavigator();

const TabNavigation = () => {
  return (
    <AppTab.Navigator
      tabBarOptions={{
        tabStyle: {
          width: 'auto',
          paddingHorizontal: 22,
        },
        showIcon: true,
        indicatorStyle: {
          backgroundColor: '#fff'
        },
        labelStyle: {
          color: '#fff',
        },
        style: {
          backgroundColor: '#075e54',
        }
      }}
    >
      <AppTab.Screen
        name="Camera"
        component={ Camera }
        options={{
          title: () => <View><Icon name="camera" color='#fff' size={ 20 } /></View>,
        }}
      />
      <AppTab.Screen
        name="ChatList"
        component={ ChatList }
        options={{ title: 'CONVERSAS' }}
      />
      <AppTab.Screen
        name="Status"
        component={ Status }
        options={{ title: 'STATUS' }}
      />
      <AppTab.Screen
        name="Call"
        component={ Call }
        options={{ title: 'CHAMADAS' }}
      />
    </AppTab.Navigator>
  );
}

export default TabNavigation;