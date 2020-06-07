import React, { useEffect } from 'react';
import { Image } from 'react-native';
import { useRoute,  } from '@react-navigation/native';

const Picture = ({ navigation }) => {
  useEffect(() => {
    navigation.setOptions({
      headerTransparent: true,
      headerTitle: ''
    })
  }, [])

  const route = useRoute();

  return(
    <Image style={{ flex: 1, }} source={{ uri: route.params.uri }} />
  )
}

export default Picture;