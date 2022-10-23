import React from 'react';
import { Text, TouchableOpacity, View } from 'react-native';
import Modal from 'react-native-modal';
import { useDispatch } from 'react-redux';
import {
  setBeforeData,
  setIsAlertModal,
  setIsDataChange,
} from '../../redux/common/commonSlice';
import { theme } from '../../styles';

const AlertModal = ({ isAlertModal, navigation }) => {
  const dispatch = useDispatch();
  return (
    <Modal isVisible={isAlertModal} backdropOpacity={0.4}>
      <View
        style={{
          width: 350,
          height: 250,
          borderRadius: 30,
          backgroundColor: theme.colors.white,
          justifyContent: 'space-around',
          alignItems: 'center',
        }}
      >
        <Text style={{ fontSize: 20, textAlign: 'center' }}>
          変更内容が保存されていません。{'\n'}よろしいですか？
        </Text>
        <View style={{ flexDirection: 'row' }}>
          <TouchableOpacity onPress={() => dispatch(setIsAlertModal(false))}>
            <Text>キャンセル</Text>
          </TouchableOpacity>
          <TouchableOpacity
            onPress={() => {
              navigation.goBack();
              dispatch(setBeforeData(true));
              dispatch(setIsAlertModal(false));
              dispatch(setIsDataChange(false));
            }}
          >
            <Text>OK</Text>
          </TouchableOpacity>
        </View>
      </View>
    </Modal>
  );
};

export default AlertModal;
