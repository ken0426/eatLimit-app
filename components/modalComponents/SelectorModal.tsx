import React from 'react';
import { Text, View } from 'react-native';
import { TouchableOpacity } from 'react-native-gesture-handler';
import Modal from 'react-native-modal';
import { theme } from '../../styles';

const SelectorModal = ({ isModal, setIsModal }) => {
  return (
    <Modal
      isVisible={isModal}
      backdropOpacity={0.4}
      style={{
        alignItems: 'center',
      }}
      onBackdropPress={() => setIsModal(!isModal)}
    >
      <View
        style={{
          width: 300,
          height: 200,
          backgroundColor: theme.colors.white,
          borderRadius: 20,
          alignItems: 'center',
          justifyContent: 'center',
        }}
      >
        <TouchableOpacity onPress={() => setIsModal(!isModal)}>
          <Text>閉じる</Text>
        </TouchableOpacity>
      </View>
    </Modal>
  );
};

export default SelectorModal;
