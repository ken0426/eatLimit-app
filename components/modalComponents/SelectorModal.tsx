import React from 'react';
import { Text, View } from 'react-native';
import { TouchableOpacity } from 'react-native-gesture-handler';
import Modal from 'react-native-modal';
import { selectData } from '../../constants';
import { theme } from '../../styles';

const SelectorModal = ({
  isModal,
  setIsModal,
  radioData,
  setClassification,
  setKeepMethod,
  radioTextData,
  onPressSelect,
}) => {
  return (
    <Modal
      isVisible={isModal}
      backdropOpacity={0.4}
      style={{
        alignItems: 'center',
        height: 220,
        borderRadius: 14,
      }}
      onBackdropPress={() => setIsModal(!isModal)}
    >
      <View
        style={{
          width: 300,
          borderRadius: 14,
          paddingTop: 5,
          paddingBottom: 5,
          backgroundColor: theme.colors.white,
          alignItems: 'center',
        }}
      >
        {radioData.map((item: { buttonName: string }) => {
          return (
            <TouchableOpacity
              style={{
                flexDirection: 'row',
                justifyContent: 'space-between',
                backgroundColor: theme.colors.white,
                paddingLeft: 8,
                paddingRight: 8,
                paddingTop: 15,
                paddingBottom: 15,
                alignItems: 'center',
                borderColor: 'gray',
                width: 290,
              }}
              onPress={() => {
                radioData.forEach((data: { buttonName: string }) => {
                  if (item.buttonName === data.buttonName) {
                    if (onPressSelect === selectData.classification) {
                      setClassification(item.buttonName);
                    } else if (onPressSelect === selectData.keepMethod) {
                      setKeepMethod(item.buttonName);
                    }
                  }
                });
                setIsModal(!isModal);
              }}
              activeOpacity={1}
            >
              <Text style={{ fontSize: 28 }}>{item.buttonName}</Text>
              <View
                style={{
                  width: 25,
                  height: 25,
                  borderRadius: 50,
                  borderWidth: 1.2,
                  borderColor:
                    radioTextData === item.buttonName
                      ? theme.colors.selectBlue
                      : theme.colors.gray,
                  alignItems: 'center',
                  justifyContent: 'center',
                }}
              >
                {radioTextData === item.buttonName && (
                  <View
                    style={{
                      width: 12,
                      height: 12,
                      backgroundColor: theme.colors.selectBlue,
                      borderRadius: 50,
                    }}
                  ></View>
                )}
              </View>
            </TouchableOpacity>
          );
        })}
      </View>
    </Modal>
  );
};

export default SelectorModal;