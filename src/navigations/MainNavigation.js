import React from 'react';
import { Text, View, TouchableOpacity } from 'react-native';
import { Feather as Icon } from '@expo/vector-icons'
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import Menu, { MenuItem, MenuDivider } from 'react-native-material-menu';

import Chat from '../pages/Chat';
import Picture from '../pages/Picture';

import TabNavigation from './TabNavigation';

const AppStack = createStackNavigator();

class MainNavigation extends React.PureComponent {
  _menu = null;

  setMenu = ref => {
   this._menu = ref;
  }

  hideMenu = () => {
    this._menu.hide();
  }

  showMenu = () => {
    this._menu.show();
  }

  render() {
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
                <View style={{ flexDirection: 'row', padding: 15 }}>
                  <TouchableOpacity style={{ marginRight: 15 }}>
                    <Icon name="search" color='#fff' size={ 24 } /> 
                  </TouchableOpacity>
                  <Menu
                    ref={ this.setMenu }
                    button={<Icon onPress={ this.showMenu } name="more-vertical" color='#fff' size={ 24 } /> }
                  >
                    <MenuItem onPress={() => {} }>Novo grupo</MenuItem>
                    <MenuItem onPress={() => {} }>Nova transmissão</MenuItem>
                    <MenuItem onPress={() => {} }>WhatsApp Web</MenuItem>
                    <MenuItem onPress={() => {} }>Mensagens favoritas</MenuItem>
                    <MenuItem onPress={() => {} }>Configurações</MenuItem>
                  </Menu>
                </View>
              )
            }}
          />
          <AppStack.Screen name="Chat" component={ Chat } />
          <AppStack.Screen name="Picture" component={ Picture }/>
        </AppStack.Navigator>
      </NavigationContainer>
    );
  }
}

export default MainNavigation;