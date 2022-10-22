import { useNavigation } from '@react-navigation/native';
import React from 'react';
import { Image, Text } from 'react-native';
import { TouchableOpacity } from 'react-native-gesture-handler';
import { theme } from '../../../styles';
import { RegisterScreenNavigationProp } from '../../../type';

interface HeaderRightButtonProps {
  newAddButton: boolean;
  rightButtonText?: string;
  onPress: () => void;
}

const HeaderRightButton: React.FC<HeaderRightButtonProps> = ({
  newAddButton,
  rightButtonText,
  onPress,
}) => {
  return newAddButton ? (
    <>
      <TouchableOpacity
        style={{
          alignItems: 'center',
        }}
        onPress={onPress}
      >
        <Image
          style={{ width: 22, height: 22 }}
          source={require('../../../images/add-Image.png')}
        />
      </TouchableOpacity>
    </>
  ) : (
    <TouchableOpacity onPress={onPress}>
      <Text style={{ color: theme.colors.white, fontSize: 18 }}>
        {rightButtonText}
      </Text>
    </TouchableOpacity>
  );
};

export default HeaderRightButton;
