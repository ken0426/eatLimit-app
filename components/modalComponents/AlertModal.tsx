import React from 'react';
import { Text, TouchableOpacity, View } from 'react-native';
import Modal from 'react-native-modal';
import { useDispatch, useSelector } from 'react-redux';
import {
  setBeforeData,
  setIsDataChange,
} from '../../redux/common/commonRegisterSlice';
import { setIsAlertModal } from '../../redux/common/commonSlice';
import { RootState } from '../../redux/store';
import { theme } from '../../styles';

const AlertModal = ({ isAlertModal, navigation }) => {
  const dispatch = useDispatch();
  const { selectScreen } = useSelector((state: RootState) => state.common);

  const textMessage = () => {
    if (selectScreen === 'registerScreen') {
      return `新規登録をしていません。\nよろしいですか？`;
    } else if (selectScreen === 'upDataRegisterScreen') {
      return `変更内容が保存されていません。\nよろしいですか？`;
    }
  };

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
          {textMessage()}
        </Text>
        <View style={{ flexDirection: 'row' }}>
          <TouchableOpacity onPress={() => dispatch(setIsAlertModal(false))}>
            <Text>キャンセル</Text>
          </TouchableOpacity>
          <TouchableOpacity
            onPress={() => {
              navigation.goBack();
              if (selectScreen === 'registerScreen') {
                dispatch(setBeforeData(false));
              } else if (selectScreen === 'upDataRegisterScreen') {
                dispatch(setBeforeData(true));
              }
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
