import React, { useState, useEffect } from 'react';
import { RectButton } from 'react-native-gesture-handler';
import { AsyncStorage, View, ScrollView } from 'react-native';

import api from '../../services/api';

import styles from './styles';
import ChatRow from '../../components/ChatRow';

const ChatList = () => {
  const [ users, setUsers ] = useState([]);

  const username = 'felixvicent';

  useEffect(() => {
    loadUsers();
  }, [])

  const loadUsers = async () => {
    const response = await api.get(`/users/${username}/following`);

    setUsers(response.data);
  }

  const getUsers = async () => {
    try {
      const users = await AsyncStorage.getItem('users');

      if(users === null) {
        return;
      }

    console.log(users);
    }
    catch (error) {
      console.log(error)
    }
  }

  return (
    <ScrollView>
      { users.map(user => (
        <RectButton  key={ user.id } >
          <ChatRow username={ user } />
        </RectButton>
      )) }
    </ScrollView>
  );
}

export default ChatList;