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
  displayOrderLabelButton,
} from '../../constants';
import { theme } from '../../styles';
import DisplayOrderButton from '../atoms/buttons/DisplayOrderButton';

const HomeScreenSortModal = ({
  isModal,
  setIsModal,
  setIsOptionDisplayButton,
  setIsOptionDisplayImageButton,
  setIsOptionDisplayLabelButton,
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

  /** モーダルのラベル表示のフラグ（trueの場合は「ラベルあり」） */
  const [optionSelectDisplayLabelButton, setOptionSelectDisplayLabelButton] =
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

  /** モーダルのラベル選択ボタン */
  const selectLabelOnPress = ({ itemOption }) => {
    if (optionSelectDisplayLabelButton === itemOption) {
      setOptionSelectDisplayLabelButton(optionSelectDisplayLabelButton);
    } else {
      setOptionSelectDisplayLabelButton(!optionSelectDisplayLabelButton);
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

    if (!optionSelectDisplayLabelButton) {
      setIsOptionDisplayLabelButton(false);
    } else {
      setIsOptionDisplayLabelButton(true);
    }

    setIsModal(!isModal);
  };

  return (
    /** グレーの背景 */
    <View style={(theme.centerPosition, { flex: 1 })}>
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
                  <Text style={styles.selectTitle}>ソート</Text>
                  <View style={styles.selectButtonRadio}>
                    {displayOrderButton.map((item, key) => {
                      return (
                        <DisplayOrderButton
                          buttonName={item.buttonName}
                          key={key}
                          selectButton={undefined}
                          right={undefined}
                          left={undefined}
                          categoryMargin={undefined}
                          sort={item.sort}
                          onPress={() =>
                            alert(
                              `これは【${item.buttonName}】ボタンです\n※現在準備中`
                            )
                          }
                        />
                      );
                    })}
                  </View>
                  <Text style={styles.selectTitle}>フィルター</Text>
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
                            sort={undefined}
                            right={undefined}
                            left={undefined}
                            categoryMargin={undefined}
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
                      画像表示
                    </Text>
                    <View style={styles.selectButton}>
                      {displayOrderIsImageButton.map((item, key) => {
                        return (
                          <DisplayOrderButton
                            buttonName={item.buttonName}
                            key={key}
                            sort={undefined}
                            right={undefined}
                            left={undefined}
                            categoryMargin={undefined}
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
                    <Text style={{ marginTop: 10, fontSize: 18 }}>ラベル</Text>
                    <View style={styles.selectButton}>
                      {displayOrderLabelButton.map((item, key) => {
                        return (
                          <DisplayOrderButton
                            buttonName={item.buttonName}
                            key={key}
                            sort={undefined}
                            right={undefined}
                            left={undefined}
                            categoryMargin={undefined}
                            selectButton={
                              optionSelectDisplayLabelButton
                                ? item.option
                                : !item.option
                            }
                            onPress={() =>
                              selectLabelOnPress({ itemOption: item.option })
                            }
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
                            sort={undefined}
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
                  </View>
                </ScrollView>
                <View style={styles.finishButton}>
                  <TouchableOpacity
                    style={[
                      theme.maxSize,
                      { alignItems: 'center', justifyContent: 'center' },
                    ]}
                    onPress={() => completionButton()}
                  >
                    <Text
                      style={{
                        color: theme.colors.white,
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
  modalBackColor: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'rgba(0,0,0,0.5)',
    shadowColor: theme.colors.black,
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
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    marginTop: 120,
    marginBottom: 120,
    marginLeft: 20,
    marginRight: 20,
    backgroundColor: theme.colors.white,
    borderRadius: 20,
    paddingTop: 35,
    paddingBottom: 15,
    paddingLeft: 15,
    paddingRight: 15,
    alignItems: 'flex-end',
    flexDirection: 'row',
    shadowColor: theme.colors.black,
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
    marginTop: 20,
    backgroundColor: '#FF0000',
    borderRadius: 50,
    justifyContent: 'center',
    alignItems: 'center',
    shadowColor: theme.colors.black,
    shadowOpacity: 0.25,
    shadowOffset: {
      width: 0,
      height: 2,
    },
  },
});

export default HomeScreenSortModal;
