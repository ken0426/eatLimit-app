import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
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
      style={styles.modal}
      onBackdropPress={() => setIsModal(!isModal)}
    >
      <View style={styles.modalArea}>
        {radioData.map((item: { buttonName: string }, key: number) => {
          return (
            <TouchableOpacity
              key={key}
              style={styles.selectArea}
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
              <Text style={{ fontSize: 28, fontFamily: 'HiraginoSans-W3' }}>
                {item.buttonName}
              </Text>
              <View
                style={[
                  styles.selectButtonOutside,
                  {
                    borderColor:
                      radioTextData === item.buttonName
                        ? theme.colors.selectBlue
                        : theme.colors.gray,
                  },
                ]}
              >
                {radioTextData === item.buttonName && (
                  <View style={styles.selectButtonInside}></View>
                )}
              </View>
            </TouchableOpacity>
          );
        })}
      </View>
    </Modal>
  );
};

const styles = StyleSheet.create({
  modal: {
    alignItems: 'center',
    height: 220,
    borderRadius: 14,
  },
  modalArea: {
    width: 300,
    borderRadius: 14,
    paddingTop: 5,
    paddingBottom: 5,
    backgroundColor: theme.colors.white,
    alignItems: 'center',
  },
  selectArea: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    backgroundColor: theme.colors.white,
    paddingLeft: 8,
    paddingRight: 8,
    paddingTop: 15,
    paddingBottom: 15,
    alignItems: 'center',
    borderColor: theme.colors.gray,
    width: 290,
  },
  selectText: { fontSize: 28 },
  selectButtonOutside: {
    width: 25,
    height: 25,
    borderRadius: 50,
    borderWidth: 1.2,
    justifyContent: 'center',
    alignItems: 'center',
  },
  selectButtonInside: {
    width: 12,
    height: 12,
    backgroundColor: theme.colors.selectBlue,
    borderRadius: 50,
  },
});

export default SelectorModal;
