import React, { useState } from 'react';
import {
  Image,
  ScrollView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import Modal from 'react-native-modal';
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
  setRefrigeration,
  setFrozen,
  setNormal,
  setExpired,
  setIsUpDownIcon,
  setIsSort,
}) => {
  /** 絞り込みの消費期限が選択されているかのフラグ */
  const [isExpiration, setIsExpiration] = useState(false);

  /** 絞り込み表示の賞味期限が選択されているかのフラグ */
  const [isExpiry, setIsExpiry] = useState(false);

  /** 絞り込み表示の購入日が選択されているかのフラグ */
  const [isPurchase, setIsPurchase] = useState(false);

  /** 絞り込み表示の登録日が選択されているかのフラグ */
  const [isRegister, setIsRegister] = useState(false);

  /** 絞り込み表示の冷蔵が選択されているかのフラグ */
  const [isRefrigeration, setIsRefrigeration] = useState(false);

  /** 絞り込み表示の冷凍が選択されているかのフラグ */
  const [isFrozen, setIsFrozen] = useState(false);

  /** 絞り込み表示の常温が選択されているかのフラグ */
  const [isNormal, setIsNormal] = useState(false);

  /** 絞り込み表示の期限切れが選択されているかのフラグ */
  const [isExpired, setIsExpired] = useState(false);

  /** ソートの並べ替えのボタンの初期値（trueの場合は「消費期限」「賞味期限」順） */
  const [optionSort, setOptionSort] = useState(true);

  /** モーダルの日付表示のフラグ（trueの場合は「日付のみ」） */
  const [optionSelectDisplayButton, setOptionSelectDisplayButton] =
    useState(true);

  /** モーダルの画像表示のフラグ（trueの場合は「画像あり」） */
  const [optionSelectDisplayImageButton, setOptionSelectDisplayImageButton] =
    useState(true);

  /** モーダルのラベル表示のフラグ（trueの場合は「ラベルあり」） */
  const [optionSelectDisplayLabelButton, setOptionSelectDisplayLabelButton] =
    useState(true);

  /** クリアボタンを押したかどうかのフラグ */
  const [isClearButton, setIsClearButton] = useState(false);

  /** ソートの上下画像のフラグtrueなら下falseなら上 */
  const [isArrowImage, setIsArrowImage] = useState(false);

  /** モーダルのボタンをデフォルトから変更しているかどうかのフラグ */
  let isDefault = false;

  /** ソートのボタン */
  const selectSortOnPress = ({ itemOption }) => {
    if (optionSort === itemOption) {
      setOptionSort(optionSort);
    } else {
      setOptionSort(!optionSort);
    }
  };

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
    } else if (category_id === CATEGORY_ID.refrigeration) {
      setIsRefrigeration(!isRefrigeration);
    } else if (category_id === CATEGORY_ID.frozen) {
      setIsFrozen(!isFrozen);
    } else if (category_id === CATEGORY_ID.normal) {
      setIsNormal(!isNormal);
    } else if (category_id === CATEGORY_ID.expired) {
      setIsExpired(!isExpired);
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

  /** クリアボタンを表示するか非表示にするかのロジック */
  if (
    isExpiration === true ||
    isExpiry === true ||
    isPurchase === true ||
    isRegister === true ||
    isRefrigeration === true ||
    isFrozen === true ||
    isNormal === true ||
    isExpired === true ||
    optionSelectDisplayButton === false ||
    optionSelectDisplayImageButton === false ||
    optionSelectDisplayLabelButton === false
  ) {
    isDefault = true;
  } else {
    isDefault = false;
  }

  /** 完了ボタンを押した時の処理 */
  const completionButton = () => {
    if (optionSort) {
      setIsSort(true);
    } else {
      setIsSort(false);
    }

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

    if (isRefrigeration) {
      setRefrigeration(isRefrigeration);
    } else if (!isRefrigeration) {
      setRefrigeration(isRefrigeration);
    }

    if (isFrozen) {
      setFrozen(isFrozen);
    } else if (!isFrozen) {
      setFrozen(isFrozen);
    }

    if (isNormal) {
      setNormal(isNormal);
    } else if (!isNormal) {
      setNormal(isNormal);
    }

    if (isExpired) {
      setExpired(isExpired);
    } else if (!isExpired) {
      setExpired(isExpired);
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

    setIsUpDownIcon(isArrowImage);

    setIsModal(!isModal);
  };

  return (
    <Modal isVisible={isModal} style={{ alignItems: 'center' }}>
      <View style={styles.modalBox}>
        <View
          style={{
            width: 300,
          }}
        >
          <ScrollView>
            <View
              style={{
                flexDirection: 'row',
                justifyContent: 'center',
              }}
            >
              <View style={{ width: 30, height: 30 }}></View>
              <Text style={styles.selectTitle}>ソート</Text>
              <View style={{ width: 30, height: 30 }}>
                <TouchableOpacity
                  onPress={() => setIsArrowImage(!isArrowImage)}
                >
                  <Image
                    style={{
                      width: '100%',
                      height: '100%',
                    }}
                    source={
                      isArrowImage
                        ? require('../../images/downArrow.png')
                        : require('../../images/upArrow.png')
                    }
                  />
                </TouchableOpacity>
              </View>
            </View>
            <View style={styles.selectButtonRadio}>
              {displayOrderButton.map((item, key) => {
                return (
                  <DisplayOrderButton
                    buttonName={item.buttonName}
                    key={key}
                    selectButton={optionSort ? item.option : !item.option}
                    onPress={() =>
                      selectSortOnPress({ itemOption: item.option })
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
              }}
            >
              <Text style={{ marginTop: 10, fontSize: 18 }}>日付表示</Text>
              <View style={styles.selectButton}>
                {displayOrderDayButton.map((item, key) => {
                  return (
                    <DisplayOrderButton
                      buttonName={item.buttonName}
                      key={key}
                      selectButton={
                        optionSelectDisplayButton ? item.option : !item.option
                      }
                      onPress={() => {
                        selectOnPress({ itemOption: item.option });
                      }}
                    />
                  );
                })}
              </View>
              <Text style={{ marginTop: 10, fontSize: 18 }}>画像表示</Text>
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
              <Text style={{ marginTop: 10, fontSize: 18 }}>ラベル表示</Text>
              <View style={styles.selectButton}>
                {displayOrderLabelButton.map((item, key) => {
                  return (
                    <DisplayOrderButton
                      buttonName={item.buttonName}
                      key={key}
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
              <Text style={{ marginTop: 10, fontSize: 18 }}>絞り込み検索</Text>
              <View style={styles.selectCategoryButton}>
                {displayOrderCategoryButton.map((item, key) => {
                  const [selectCategory, setSelectCategory] = useState(false);

                  /** もしクリアボタンが押されたら選択しているボタンはすべて解除する */
                  if (isClearButton) {
                    setSelectCategory(false);
                    setIsClearButton(false);
                  }

                  return (
                    <DisplayOrderButton
                      buttonName={item.buttonName}
                      key={key}
                      categoryMargin={true}
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
          <View
            style={{
              width: '100%',
              justifyContent: 'space-around',
              flexDirection: 'row',
            }}
          >
            <View style={{ width: '25%' }}></View>
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
            <View
              style={{
                width: '25%',
                alignItems: 'center',
                justifyContent: 'center',
                paddingTop: 10,
              }}
            >
              {isDefault && (
                <TouchableOpacity
                  style={styles.clearButton}
                  onPress={() => {
                    setIsClearButton(true);
                    setIsExpiration(false);
                    setIsExpiry(false);
                    setIsPurchase(false);
                    setIsRegister(false);
                    setIsRefrigeration(false);
                    setIsFrozen(false);
                    setIsNormal(false);
                    setIsExpired(false);
                    setOptionSelectDisplayButton(true);
                    setOptionSelectDisplayImageButton(true);
                    setOptionSelectDisplayLabelButton(true);
                  }}
                >
                  <Text
                    style={{
                      color: theme.colors.white,
                      textAlign: 'center',
                      fontWeight: 'bold',
                    }}
                  >
                    クリア
                  </Text>
                </TouchableOpacity>
              )}
            </View>
          </View>
        </View>
      </View>
    </Modal>
  );
};

const styles = StyleSheet.create({
  modalBox: {
    marginTop: 120,
    marginBottom: 120,
    backgroundColor: theme.colors.white,
    borderRadius: 20,
    paddingTop: 35,
    paddingBottom: 15,
    paddingLeft: 15,
    paddingRight: 15,
    flexDirection: 'row',
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
    width: '100%',
    flexDirection: 'row',
    marginTop: 20,
    justifyContent: 'space-around',
    flexWrap: 'wrap',
  },
  finishButton: {
    width: '50%',
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
  clearButton: {
    backgroundColor: theme.colors.completionButton,
    width: '80%',
    borderRadius: 50,
    shadowColor: theme.colors.black,
    shadowOpacity: 0.25,
    shadowOffset: {
      width: 0,
      height: 2,
    },
  },
});

export default HomeScreenSortModal;
