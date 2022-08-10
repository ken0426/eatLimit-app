import React from 'react';
import { Modal, StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import {
  displayOrderButton,
  displayOrderDayButton,
  displayOrderIsImageButton,
} from '../../constants';
import DisplayOrderButton from '../atoms/buttons/DisplayOrderButton';

const HomeScreenSortModal = ({ isModal, setIsModal }) => {
  return (
    /** グレーの背景 */
    <View style={(styles.centerPosition, { flex: 1 })}>
      <Modal transparent={true} visible={isModal}>
        <View style={styles.modalBackColor}>
          {/* モーダル */}
          <Modal animationType='slide' transparent={true} visible={isModal}>
            <View style={styles.modalBox}>
              {/* 仮の表示 */}
              <View
                style={{
                  width: '100%',
                  height: '100%',
                  alignItems: 'center',
                  justifyContent: 'space-between',
                }}
              >
                <View style={{ width: '100%' }}>
                  <Text style={styles.selectTitle}>表示順</Text>
                  <View style={styles.selectButtonRadio}>
                    {displayOrderButton.map((item, key) => {
                      return (
                        <DisplayOrderButton
                          buttonName={item.buttonName}
                          key={key}
                          onPress={() =>
                            alert(`これは【${item.buttonName}】ボタンです`)
                          }
                        />
                      );
                    })}
                  </View>
                  <Text style={styles.selectTitle}>表示設定</Text>
                  <View
                    style={{
                      width: '100%',
                      alignItems: 'center',
                      justifyContent: 'center',
                    }}
                  >
                    <Text style={{ marginTop: 10, fontSize: 18 }}>
                      日付表示
                    </Text>
                    <View style={styles.selectButton}>
                      {displayOrderDayButton.map((item, key) => {
                        return (
                          <DisplayOrderButton
                            buttonName={item.buttonName}
                            key={key}
                            onPress={() =>
                              alert(`これは【${item.buttonName}】ボタンです`)
                            }
                          />
                        );
                      })}
                    </View>
                    <Text style={{ marginTop: 10, fontSize: 18 }}>
                      カテゴリ
                    </Text>
                    <View style={styles.selectButton}>
                      {displayOrderButton.map((item, key) => {
                        return (
                          <DisplayOrderButton
                            buttonName={item.buttonName}
                            key={key}
                            onPress={() =>
                              alert(`これは【${item.buttonName}】ボタンです`)
                            }
                          />
                        );
                      })}
                    </View>
                    <Text style={{ marginTop: 10, fontSize: 18 }}>
                      画像なし
                    </Text>
                    <View style={styles.selectButton}>
                      {displayOrderIsImageButton.map((item, key) => {
                        return (
                          <DisplayOrderButton
                            buttonName={item.buttonName}
                            key={key}
                            onPress={() =>
                              alert(`これは【${item.buttonName}】ボタンです`)
                            }
                          />
                        );
                      })}
                    </View>
                  </View>
                </View>
                <View style={styles.finishButton}>
                  <TouchableOpacity
                    style={{
                      width: '100%',
                      height: '100%',
                      justifyContent: 'center',
                      alignItems: 'center',
                    }}
                    onPress={() => setIsModal(!isModal)}
                  >
                    <Text
                      style={{
                        color: 'white',
                        fontSize: 30,
                        fontWeight: 'bold',
                      }}
                    >
                      完了
                    </Text>
                  </TouchableOpacity>
                </View>
              </View>
            </View>
          </Modal>
        </View>
      </Modal>
    </View>
  );
};

const styles = StyleSheet.create({
  centerPosition: {
    alignItems: 'center',
    justifyContent: 'center',
  },
  modalBackColor: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'rgba(0,0,0,0.5)',
    alignItems: 'center',
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 4,
  },
  modalBox: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    marginTop: 120,
    marginBottom: 120,
    marginLeft: 20,
    marginRight: 20,
    backgroundColor: 'white',
    borderRadius: 20,
    paddingTop: 35,
    paddingBottom: 15,
    paddingLeft: 15,
    paddingRight: 15,
    alignItems: 'flex-end',
    flexDirection: 'row',
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 4,
  },
  selectTitle: {
    fontWeight: 'bold',
    textAlign: 'center',
    fontSize: 30,
  },
  selectButtonRadio: {
    flexDirection: 'row',
    marginTop: 20,
    justifyContent: 'space-around',
    paddingBottom: 20,
    borderBottomColor: 'black',
    borderBottomWidth: 1,
    marginBottom: 20,
  },
  selectButton: {
    width: '100%',
    flexDirection: 'row',
    marginTop: 20,
    justifyContent: 'space-around',
    paddingBottom: 10,
  },
  finishButton: {
    width: '70%',
    height: 50,
    backgroundColor: '#FF0000',
    borderRadius: '50%',
    justifyContent: 'center',
    alignItems: 'center',
    shadowColor: '#000',
    shadowOpacity: 0.25,
    shadowOffset: {
      width: 0,
      height: 2,
    },
  },
});

export default HomeScreenSortModal;
