import React, { useEffect, useState } from 'react';
import { Text, Image, View } from 'react-native';

import styles from './styles';
import api from '../../services/api';

const ChatRow = ({ username }) => {
  const [ user, setUser ] = useState({});

  const loadUser = async () => {
    const response = await api.get(`/users/${username.login}`);

    setUser(response.data);
  }

  useEffect(() => {
    loadUser();
  }, [username])

  return(
    <View style={ styles.container } >
      <Image style={ styles.avatar } source={{ uri: user.avatar_url }} />
      <View style={ styles.textContainer } >
        <Text style={ styles.name } >{ user.login }</Text>
        <Text ellipsizeMode="tail" numberOfLines={ 1 } style={ styles.bio } >{ user.bio }</Text>
      </View>
    </View>
  );
}

export default ChatRow;