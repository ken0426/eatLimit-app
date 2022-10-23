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
          height: 250,
          borderRadius: 30,
          backgroundColor: theme.colors.white,
          justifyContent: 'space-around',
          alignItems: 'center',
          paddingTop: 25,
          paddingBottom: 20,
        }}
      >
        <Text style={{ fontSize: 22, textAlign: 'center' }}>
          {textMessage()}
        </Text>
        <View
          style={{
            flexDirection: 'row',
            justifyContent: 'space-around',
            width: '90%',
          }}
        >
          <TouchableOpacity
            style={{
              borderRadius: 50,
              borderWidth: 1,
              borderColor: theme.colors.rightBlue,
            }}
            onPress={() => dispatch(setIsAlertModal(false))}
          >
            <Text
              style={{
                width: 140,
                textAlign: 'center',
                color: theme.colors.rightBlue,
                fontSize: 20,
                padding: 15,
              }}
            >
              キャンセル
            </Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={{
              borderRadius: 50,
              backgroundColor: theme.colors.rightBlue,
            }}
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
            <Text
              style={{
                width: 140,
                textAlign: 'center',
                color: theme.colors.white,
                fontSize: 20,
                padding: 15,
              }}
            >
              OK
            </Text>
          </TouchableOpacity>
        </View>
      </View>
    </Modal>
  );
};

export default AlertModal;
