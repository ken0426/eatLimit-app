import React, { useState } from 'react';
import {
  Modal,
  ScrollView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import {
  CATEGORY_ID,
  displayOrderButton,
  displayOrderCategoryButton,
  displayOrderDayButton,
  displayOrderIsImageButton,
} from '../../constants';
import DisplayOrderButton from '../atoms/buttons/DisplayOrderButton';

const HomeScreenSortModal = ({
  isModal,
  setIsModal,
  setIsOptionDisplayButton,
  setIsOptionDisplayImageButton,
  setExpiration,
  setExpiry,
  setPurchase,
  setRegister,
}) => {
  /** カテゴリ表示の消費期限が選択されているかのフラグ */
  const [isExpiration, setIsExpiration] = useState(false);

  /** カテゴリ表示の賞味期限が選択されているかのフラグ */
  const [isExpiry, setIsExpiry] = useState(false);

  /** カテゴリ表示の購入日が選択されているかのフラグ */
  const [isPurchase, setIsPurchase] = useState(false);

  /** カテゴリ表示の登録日が選択されているかのフラグ */
  const [isRegister, setIsRegister] = useState(false);

  /** モーダルの日付表示のフラグ（trueの場合は「日付のみ」） */
  const [optionSelectDisplayButton, setOptionSelectDisplayButton] =
    useState(true);

  /** モーダルの画像表示のフラグ（trueの場合は「画像あり」） */
  const [optionSelectDisplayImageButton, setOptionSelectDisplayImageButton] =
    useState(true);

  /** モーダルの日付表示選択ボタン */
  const selectOnPress = ({ itemOption }) => {
    if (optionSelectDisplayButton === itemOption) {
      setOptionSelectDisplayButton(optionSelectDisplayButton);
    } else {
      setOptionSelectDisplayButton(!optionSelectDisplayButton);
    }
  };

  /** どのカテゴリを選択したか監視するフラグ */
  const selectCategoryOnPress = ({ category_id }) => {
    if (category_id === CATEGORY_ID.expiration) {
      setIsExpiration(!isExpiration);
    } else if (category_id === CATEGORY_ID.expiry) {
      setIsExpiry(!isExpiry);
    } else if (category_id === CATEGORY_ID.purchase) {
      setIsPurchase(!isPurchase);
    } else if (category_id === CATEGORY_ID.register) {
      setIsRegister(!isRegister);
    }
  };

  /** モーダルの画像選択ボタン */
  const selectImageOnPress = ({ itemOption }) => {
    if (optionSelectDisplayImageButton === itemOption) {
      setOptionSelectDisplayImageButton(optionSelectDisplayImageButton);
    } else {
      setOptionSelectDisplayImageButton(!optionSelectDisplayImageButton);
    }
  };

  /** 完了ボタンを押した時の処理 */
  const completionButton = () => {
    if (optionSelectDisplayButton) {
      setIsOptionDisplayButton(false);
    } else {
      setIsOptionDisplayButton(true);
    }

    if (isExpiration) {
      setExpiration(isExpiration);
    } else if (!isExpiration) {
      setExpiration(isExpiration);
    }

    if (isExpiration) {
      setExpiry(isExpiration);
    } else if (!isExpiration) {
      setExpiry(isExpiration);
    }

    if (isExpiry) {
      setExpiry(isExpiry);
    } else if (!isExpiry) {
      setExpiry(isExpiry);
    }

    if (isPurchase) {
      setPurchase(isPurchase);
    } else if (!isPurchase) {
      setPurchase(isPurchase);
    }

    if (isRegister) {
      setRegister(isRegister);
    } else if (!isRegister) {
      setRegister(isRegister);
    }

    if (!optionSelectDisplayImageButton) {
      setIsOptionDisplayImageButton(false);
    } else {
      setIsOptionDisplayImageButton(true);
    }
    setIsModal(!isModal);
  };

  return (
    /** グレーの背景 */
    <View style={(styles.centerPosition, { flex: 1 })}>
      <Modal transparent={true} visible={isModal}>
        <View style={styles.modalBackColor}>
          {/* モーダル */}
          <Modal animationType='slide' transparent={true} visible={isModal}>
            <View style={styles.modalBox}>
              <View
                style={{
                  width: '100%',
                  height: '100%',
                  alignItems: 'center',
                  justifyContent: 'space-between',
                }}
              >
                <ScrollView style={{ width: '100%' }}>
                  <Text style={styles.selectTitle}>表示順</Text>
                  <View style={styles.selectButtonRadio}>
                    {displayOrderButton.map((item, key) => {
                      return (
                        <DisplayOrderButton
                          buttonName={item.buttonName}
                          key={key}
                          sort={item.sort}
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
                            selectButton={
                              optionSelectDisplayButton
                                ? item.option
                                : !item.option
                            }
                            onPress={() => {
                              selectOnPress({ itemOption: item.option });
                            }}
                          />
                        );
                      })}
                    </View>
                    <Text style={{ marginTop: 10, fontSize: 18 }}>
                      カテゴリ
                    </Text>
                    <View style={styles.selectCategoryButton}>
                      {displayOrderCategoryButton.map((item, key) => {
                        const [selectCategory, setSelectCategory] =
                          useState(false);
                        return (
                          <DisplayOrderButton
                            buttonName={item.buttonName}
                            key={key}
                            categoryMargin={true}
                            right={item.right}
                            left={item.left}
                            selectButton={selectCategory}
                            onPress={() => {
                              setSelectCategory(!selectCategory);
                              selectCategoryOnPress({ category_id: item.id });
                            }}
                          />
                        );
                      })}
                    </View>
                    <Text style={{ marginTop: 10, fontSize: 18 }}>
                      画像表示
                    </Text>
                    <View style={styles.selectButton}>
                      {displayOrderIsImageButton.map((item, key) => {
                        return (
                          <DisplayOrderButton
                            buttonName={item.buttonName}
                            key={key}
                            selectButton={
                              optionSelectDisplayImageButton
                                ? item.option
                                : !item.option
                            }
                            onPress={() =>
                              selectImageOnPress({ itemOption: item.option })
                            }
                          />
                        );
                      })}
                    </View>
                  </View>
                </ScrollView>
                <View style={styles.finishButton}>
                  <TouchableOpacity
                    style={{
                      width: '100%',
                      height: '100%',
                      justifyContent: 'center',
                      alignItems: 'center',
                    }}
                    onPress={() => completionButton()}
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
  selectCategoryButton: {
    width: '88%',
    flexDirection: 'row',
    marginTop: 20,
    justifyContent: 'space-around',
    flexWrap: 'wrap',
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
