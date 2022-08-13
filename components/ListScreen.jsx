import moment from 'moment';
import React from 'react';
import { Image, StyleSheet, Text, TouchableOpacity, View } from 'react-native';

/**
 * @param           item                          APIからのデータ（※現在はモックデータ）
 * @param {string}  dayText                       リストに表示する日付
 * @param {boolean} isOptionDisplayImageButton    リストに画像を表示するかどうかのフラグ
 * @param {boolean} isOptionDisplayButton         リストに年を表示するかどうかのフラグ
 * @param {string}  formatYearsDate               「消費期限」「賞味期限」の年数
 */

const ListScreen = ({
  navigation,
  item,
  key,
  dayText,
  isOptionDisplayImageButton,
  isOptionDisplayButton,
  formatYearsDate,
}) => {
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
          {item.limitTextData === 'expiration' ? (
            <Text style={styles.limitText}>消費期限</Text>
          ) : item.limitTextData === 'expiry' ? (
            <Text style={styles.limitText}>賞味期限</Text>
          ) : item.limitTextData === 'purchase' ? (
            <Text style={styles.limitText}>購入日</Text>
          ) : (
            <Text style={styles.limitText}>登録日</Text>
          )}
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
    borderColor: 'gray',
    borderBottomWidth: 1,
    borderTopWidth: 1,
    padding: 10,
    alignContent: 'center',
    flexDirection: 'row',
    justifyContent: 'space-between',
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
    width: 160,
    paddingLeft: 10,
  },
  isOptionNotImageEatName: {
    justifyContent: 'center',
    width: '73%',
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
  limitText: {
    textAlign: 'center',
    fontSize: 18,
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
