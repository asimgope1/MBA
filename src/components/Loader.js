import { View, Animated, TouchableOpacity, Text, Image, Modal } from 'react-native';
import React, { useState, useEffect } from 'react';
import { ICON, PENDING } from '../constants/imagepath';
import { BLACK } from '../constants/color';

const Loader = () => {
  const [rotation] = useState(new Animated.Value(0));

  useEffect(() => {
    Animated.loop(
      Animated.timing(rotation, {
        toValue: 1,
        duration: 3000,
        useNativeDriver: true,
      })
    ).start();
  }, []);

  const rotateY = rotation.interpolate({
    inputRange: [0, 1],
    outputRange: ['0deg', '360deg'],
  });

  return (

    <Modal>
    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center',backgroundColor:BLACK }}>
      <Animated.View
        style={{
          width: 100,
          height: 100,
         
          transform: [{ perspective: 200 }, { rotateY }],
        }}>
        <Image
        source={ICON}
        style={{width: 100,
          height: 100, }}
      />
    </Animated.View>
    </View>
    </Modal>
  );
};

export default Loader;
