import React, { useState, useEffect } from 'react';
import { Text, View, TouchableOpacity } from 'react-native';
import { Feather as Icon } from '@expo/vector-icons';
import { Camera } from 'expo-camera';
import * as MediaLibrary from 'expo-media-library';

import styles from './styles';

const CameraScreen = ({ navigation }) => {
  const [hasCameraPermission, setHasCameraPermission] = useState(null);
  const [hasCameraRollPermission, setHasCameraRollPermission] = useState(null);
  const [type, setType] = useState(Camera.Constants.Type.front);
  const [ flash, setFlash ] = useState(Camera.Constants.FlashMode.on);
  const [cameraRef, setCameraRef] = useState(null);

  useEffect(() => {
    (async () => {
      const { status } = await MediaLibrary.requestPermissionsAsync();
      setHasCameraRollPermission(status === 'granted');
    })();
  }, []);

  useEffect(() => {
    (async () => {
      const { status } = await Camera.requestPermissionsAsync();
      setHasCameraPermission(status === 'granted');
    })();
  }, []);

  if (hasCameraPermission === null) {
    return <View />;
  }
  if (hasCameraPermission === false) {
    return <Text>No access to camera</Text>;
  }

  const handleCameraType = () => {
    if(type === Camera.Constants.Type.front) {
      setType(Camera.Constants.Type.back);
    }
    else {
      setType(Camera.Constants.Type.front);
    }
  }

  const handleCameraFlash = () => {
    if(flash === Camera.Constants.FlashMode.on) {
      setFlash(Camera.Constants.FlashMode.off)
    }
    else{
      setFlash(Camera.Constants.FlashMode.on)
    }
  }

  const takePicture = async () => {
    if(cameraRef) {
      let { uri } = await cameraRef.takePictureAsync();
      const asset = await  MediaLibrary.createAssetAsync(uri);

      navigation.navigate('Picture', { uri: asset.uri });
    }
  }

  return (
    <View style={ styles.container } >
      <Camera
        style={ styles.cameraContainer }
        type={ type }
        flashMode={ flash }
        ref={ ref => {
          setCameraRef(ref)
        } }
      >
        <View style={ styles.cameraContent } >
          <View style={ styles.buttons } >
            <TouchableOpacity  onPress={ handleCameraFlash }>
              <Icon name={ flash === Camera.Constants.FlashMode.off ? "zap-off" : "zap" } color="#fff" size={ 30 } />
            </TouchableOpacity>
            <TouchableOpacity  onPress={ takePicture } >
              <Icon name="circle" color="#fff" size={ 90 } />
            </TouchableOpacity>
            <TouchableOpacity onPress={ handleCameraType } >
              <Icon name="camera" color="#fff" size={ 30 } />
            </TouchableOpacity>
          </View>
        </View>
      </Camera>
    </View>
  );
}

export default CameraScreen;