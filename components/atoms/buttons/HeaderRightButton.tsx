import { useNavigation } from '@react-navigation/native';
import React from 'react';
import { Image, Text } from 'react-native';
import { TouchableOpacity } from 'react-native-gesture-handler';
import { theme } from '../../../styles';
import { RegisterScreenNavigationProp } from '../../../type';

interface HeaderRightButtonProps {
  newAddButton: boolean;
  rightButtonText?: string;
}

const HeaderRightButton: React.FC<HeaderRightButtonProps> = ({
  newAddButton,
  rightButtonText,
}) => {
  const navigation = useNavigation<RegisterScreenNavigationProp>();
  return newAddButton ? (
    <>
      <TouchableOpacity
        style={{
          alignItems: 'center',
        }}
        onPress={() => {
          navigation.navigate('registerScreen');
        }}
      >
        <Image
          style={{ width: 22, height: 22 }}
          source={require('../../../images/add-Image.png')}
        />
      </TouchableOpacity>
    </>
  ) : (
    <TouchableOpacity
      onPress={() => {
        rightButtonText === '登録'
          ? navigation.goBack()
          : // : navigation.navigate('updateRegisterScreen');
            navigation.navigate('registerScreen');
      }}
    >
      <Text style={{ color: theme.colors.white, fontSize: 18 }}>
        {rightButtonText}
      </Text>
    </TouchableOpacity>
  );
};

export default HeaderRightButton;
