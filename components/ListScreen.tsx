import moment from 'moment';
import React from 'react';
import { Image, StyleSheet, Text, TouchableOpacity, View } from 'react-native';

/**
 * @param {object}  item                          APIからのデータ（※現在はモックデータ）
 * @param {string}  dayText                       リストに表示する日付
 * @param {boolean} isOptionDisplayImageButton    リストに画像を表示するかどうかのフラグ
 * @param {boolean} isOptionDisplayButton         リストに年を表示するかどうかのフラグ
 * @param {string}  formatYearsDate               「消費期限」「賞味期限」の年数
 */

interface ListScreenProps {
  navigation: any;
  item: { eatImage: any; eatName: string; limitTextData: string };
  key: number;
  dayText: string;
  isOptionDisplayImageButton: boolean;
  isOptionDisplayButton: boolean;
  formatYearsDate: string;
}

const ListScreen: React.FC<ListScreenProps> = ({
  navigation,
  item,
  key,
  dayText,
  isOptionDisplayImageButton,
  isOptionDisplayButton,
  formatYearsDate,
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

  return (
    <TouchableOpacity
      key={key}
      onPress={() => {
        navigation.navigate('detailScreen', { item: item });
      }}
    >
      <View style={styles.box} key={key}>
        {isOptionDisplayImageButton ? (
          <View style={styles.eatImage}>
            {item.eatImage ? (
              <Image style={styles.maxSize} source={item.eatImage} />
            ) : (
              <Image
                style={styles.maxSize}
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
      </View>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  box: {
    width: '100%',
    height: 100,
    borderColor: '#d3d3d3',
    borderBottomWidth: 0.2,
    borderTopWidth: 0.2,
    padding: 10,
    alignContent: 'center',
    flexDirection: 'row',
    justifyContent: 'space-between',
    backgroundColor: '#fff',
  },
  maxSize: {
    width: '100%',
    height: '100%',
  },
  eatImage: {
    width: 100,
    height: 80,
  },
  eatName: {
    justifyContent: 'center',
    width: 158,
    paddingLeft: 10,
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
