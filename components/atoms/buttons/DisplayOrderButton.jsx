import React from 'react';
import { Text, TouchableOpacity, View } from 'react-native';

const DisplayOrderButton = ({ buttonName, key, selectButton, onPress }) => {
  return (
    <View
      style={{
        backgroundColor: selectButton ? '#94DFF5' : 'white',
        borderRadius: '50%',
        justifyContent: 'center',
        alignItems: 'center',
        width: 85,
        height: 30,
        borderWidth: !selectButton && 1,
        borderColor: !selectButton && '#94DFF5',
      }}
    >
      <TouchableOpacity
        style={{
          width: '100%',
          height: '100%',
          justifyContent: 'center',
          alignItems: 'center',
        }}
        key={key}
        onPress={onPress}
      >
        <Text
          style={{
            color: selectButton ? 'white' : '#94DFF5',
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
