import moment from 'moment';
import React, { useState } from 'react';
import {
  Alert,
  Image,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import { ListItem } from '@rneui/themed';
import { theme } from '../styles';

/**
 * @param {object}  item                          APIからのデータ（※現在はモックデータ）
 * @param {string}  dayText                       リストに表示する日付
 * @param {boolean} isOptionDisplayImageButton    リストに画像を表示するかどうかのフラグ
 * @param {boolean} isOptionDisplayButton         リストに年を表示するかどうかのフラグ
 * @param {string}  formatYearsDate               「消費期限」「賞味期限」の年数
 * @param {Array}   apiData                       APIからのデータ（※現在はモックデータ）
 * @param {void}    setApiData                    リストの更新を行うための関数
 */

interface ListScreenProps {
  navigation: any;
  item: { eatImage: any; eatName: string; limitTextData: string; key: number };
  dayText: string;
  isOptionDisplayImageButton: boolean;
  isOptionDisplayButton: boolean;
  formatYearsDate: string;
  apiData: Array<object>;
  setApiData: ({}) => void;
}

const ListScreen: React.FC<ListScreenProps> = ({
  navigation,
  item,
  dayText,
  isOptionDisplayImageButton,
  isOptionDisplayButton,
  formatYearsDate,
  apiData,
  setApiData,
}) => {
  let categoryLabelText: string;

  if (item.limitTextData === 'expiration') {
    categoryLabelText = '消費期限';
  } else if (item.limitTextData === 'expiry') {
    categoryLabelText = '賞味期限';
  } else if (item.limitTextData === 'purchase') {
    categoryLabelText = '購入日';
  } else {
    categoryLabelText = '登録日';
  }

  const section = ({ key }) => {
    return apiData.filter((d: { key: number }) => {
      return d.key !== key;
    });
  };
  return (
    <ListItem.Swipeable
      style={styles.box}
      key={item.key}
      rightWidth={90}
      rightContent={(reset) => (
        <TouchableOpacity
          style={{
            backgroundColor: '#00ff00',
            alignItems: 'center',
            justifyContent: 'center',
            height: '100%',
          }}
          onPress={() => {
            Alert.alert(`${item.eatName}を\n消化済みにしますか？`, '', [
              { text: 'キャンセル', onPress: () => reset() },
              {
                text: '消化済み',
                onPress: () => {
                  return setApiData(section({ key: item.key }));
                },
              },
            ]);
          }}
        >
          <View style={{ alignItems: 'center', justifyContent: 'center' }}>
            <Image
              style={{ width: 30, height: 30 }}
              source={require('../images/check-icon.png')}
            />
          </View>
        </TouchableOpacity>
      )}
    >
      <TouchableOpacity
        style={{
          flexDirection: 'row',
        }}
        onPress={() => {
          navigation.navigate('detailScreen', { item: item });
        }}
      >
        {isOptionDisplayImageButton ? (
          <View style={styles.eatImage}>
            {item.eatImage ? (
              <Image style={theme.maxSize} source={item.eatImage} />
            ) : (
              <Image
                style={theme.maxSize}
                source={require('../images/noImage.png')}
              />
            )}
          </View>
        ) : (
          <></>
        )}
        <View
          style={[
            isOptionDisplayImageButton
              ? styles.eatName
              : styles.isOptionNotImageEatName,
          ]}
        >
          <Text numberOfLines={1} style={styles.eatTextName}>
            {item.eatName}
          </Text>
        </View>
        <View style={styles.limitBox}>
          <View style={styles.categoryLabel}>
            <Text style={styles.limitText}>{categoryLabelText}</Text>
          </View>
          {!isOptionDisplayButton ? (
            <></>
          ) : (
            <Text
              style={[
                moment().format('YYYY') > formatYearsDate
                  ? styles.limitYearsOutText
                  : styles.limitYearsSafeText,
              ]}
            >
              {formatYearsDate}年
            </Text>
          )}
          {dayText}
        </View>
      </TouchableOpacity>
    </ListItem.Swipeable>
  );
};

const styles = StyleSheet.create({
  box: {
    width: '100%',
    height: 100,
    borderColor: '#d3d3d3',
    borderBottomWidth: 0.3,
    borderTopWidth: 0.3,
    alignContent: 'center',
    flexDirection: 'row',
    justifyContent: 'space-between',
    backgroundColor: '#fff',
  },
  eatImage: {
    width: 100,
    height: 80,
  },
  eatName: {
    justifyContent: 'center',
    width: 154,
    paddingLeft: 6,
  },
  isOptionNotImageEatName: {
    justifyContent: 'center',
    width: '72%',
    paddingLeft: 10,
  },
  eatTextName: {
    fontSize: 20,
  },
  limitBox: {
    width: 100,
    height: 80,
    justifyContent: 'space-around',
  },
  categoryLabel: {
    borderRadius: 5,
    backgroundColor: '#94DFF5',
    alignItems: 'center',
  },
  limitText: {
    textAlign: 'center',
    fontSize: 18,
    width: '80%',
    color: '#fff',
    fontWeight: 'bold',
  },
  limitYearsOutText: {
    textAlign: 'center',
    justifyContent: 'center',
    color: 'red',
  },
  limitYearsSafeText: {
    textAlign: 'center',
    justifyContent: 'center',
  },
});

export default ListScreen;
