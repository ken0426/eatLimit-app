import { useNavigation } from '@react-navigation/native';
import React from 'react';
import { Image, Text } from 'react-native';
import { TouchableOpacity } from 'react-native-gesture-handler';
import { RegisterScreenNavigationProp } from '../../../type';

interface HeaderRightButtonProps {
  newAddButton: boolean;
}

const HeaderRightButton: React.FC<HeaderRightButtonProps> = ({
  newAddButton,
}) => {
  const navigation = useNavigation<RegisterScreenNavigationProp>();
  return newAddButton ? (
    <>
      <TouchableOpacity
        style={{
          alignItems: 'center',
          justifyContent: 'center',
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
        navigation.goBack();
      }}
    >
      <Text style={{ color: '#fff', fontSize: 18 }}>登録</Text>
    </TouchableOpacity>
  );
};

export default HeaderRightButton;
