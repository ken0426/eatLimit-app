import React from 'react';
import { Text, TouchableOpacity, View } from 'react-native';

const DisplayOrderButton = ({ buttonName }) => {
  return (
    <View
      style={{
        backgroundColor: '#94DFF5',
        borderRadius: '50%',
        justifyContent: 'center',
        alignItems: 'center',
        width: 85,
        height: 30,
      }}
    >
      <TouchableOpacity
        style={{
          width: '100%',
          height: '100%',
          justifyContent: 'center',
          alignItems: 'center',
        }}
      >
        <Text
          style={{
            color: 'white',
            fontSize: 15,
            fontWeight: 'bold',
          }}
        >
          {buttonName}
        </Text>
      </TouchableOpacity>
    </View>
  );
};

export default DisplayOrderButton;
