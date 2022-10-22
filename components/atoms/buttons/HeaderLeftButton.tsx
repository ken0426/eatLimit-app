import { useNavigation } from '@react-navigation/native';
import React from 'react';
import { Text } from 'react-native';
import { TouchableOpacity } from 'react-native-gesture-handler';
import { theme } from '../../../styles';

const HeaderLeftButton = ({ onPress }) => {
  return (
    <TouchableOpacity onPress={onPress} style={{ marginRight: 10 }}>
      <Text style={{ color: theme.colors.white, fontSize: 18 }}>
        キャンセル
      </Text>
    </TouchableOpacity>
  );
};

export default HeaderLeftButton;
