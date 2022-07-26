import moment from 'moment';
import React, { useState } from 'react';
import { re } from 'react-devtools-core';
import {
  FlatList,
  Image,
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from 'react-native';
import { eatMockData } from '../moc/MockData';

const years = moment().format('YYYY');
const months = moment().format('M');
const date = moment().format('D');

const HomeScreen = ({ navigation }) => {
  const [text, setText] = useState('');
  const renderItem = ({ item, key }) => {
    let dayMonths;
    let dayData;
    const day = item.limitDate; // 日付の取得
    const eatName = item.eatName;
    if (day.length === 4) {
      // 1月9月の場合 且つ 日にちが1日〜9日までの場合
      dayMonths = day.substring(0, 1);
      dayData = day.substring(2, 3); // 1月1日
    } else if (day.length == 5) {
      // 1月〜9月の場合 且つ 日にちが10日〜31日までの場合
      dayMonths = day.substring(0, 1); // 月の取得
      dayData = day.substring(2, 4); // 日にちの取得 7月26日
    } else if (day.length === 6) {
      // 10月〜12月の場合 且つ 日にちが10日〜31日までの場合
      dayMonths = day.substring(0, 2); // 月の取得
      dayData = day.substring(3, 5); // 日にちの取得
    }

    return text === '' ? (
      <TouchableOpacity
        key={key}
        onPress={() => {
          navigation.navigate('detailScreen', { item: item });
        }}
      >
        <View style={styles.box} key={key}>
          <View style={styles.eatImage}>
            <Image
              style={{
                width: '100%',
                height: '100%',
              }}
              source={require('../images/noImage.png')}
            />
          </View>
          <View style={styles.eatName}>
            <Text numberOfLines={1} style={styles.eatTextName}>
              {item.eatName}
            </Text>
          </View>
          <View style={styles.limitBox}>
            {item.limitTextData === 'expiration' ? (
              <Text style={styles.limitText}>消費期限</Text>
            ) : (
              <Text style={styles.limitText}>購入日</Text>
            )}

            {item.limitTextData === 'expiration' ? (
              <Text
                style={
                  moment().format('M-D') > `${dayMonths}-${dayData}`
                    ? styles.limitDateRed
                    : moment().add(1, 'd').format('M-D') ===
                      `${dayMonths}-${dayData}`
                    ? styles.limitDateOrange
                    : moment().format('M-D') === `${dayMonths}-${dayData}`
                    ? styles.limitDateOrange
                    : moment().format('M-DD') > `${dayMonths}-0${dayData}`
                    ? styles.limitDateRed
                    : styles.limitDate
                }
              >
                {day}
              </Text>
            ) : (
              <Text style={styles.limitDate}>{day}</Text>
            )}
          </View>
        </View>
      </TouchableOpacity>
    ) : (
      eatName.match(text) && (
        <TouchableOpacity
          key={key}
          onPress={() => {
            navigation.navigate('detailScreen', { item: item });
          }}
        >
          <View style={styles.box} key={key}>
            <View style={styles.eatImage}>
              <Image
                style={{
                  width: '100%',
                  height: '100%',
                }}
                source={require('../images/noImage.png')}
              />
            </View>
            <View style={styles.eatName}>
              <Text numberOfLines={1} style={styles.eatTextName}>
                {item.eatName}
              </Text>
            </View>
            <View style={styles.limitBox}>
              {item.limitTextData === 'expiration' ? (
                <Text style={styles.limitText}>消費期限</Text>
              ) : (
                <Text style={styles.limitText}>購入日</Text>
              )}

              {item.limitTextData === 'expiration' ? (
                <Text
                  style={
                    moment().format('M-D') > `${dayMonths}-${dayData}`
                      ? styles.limitDateRed
                      : moment().add(1, 'd').format('M-D') ===
                        `${dayMonths}-${dayData}`
                      ? styles.limitDateOrange
                      : moment().format('M-D') === `${dayMonths}-${dayData}`
                      ? styles.limitDateOrange
                      : moment().format('M-DD') > `${dayMonths}-0${dayData}`
                      ? styles.limitDateRed
                      : styles.limitDate
                  }
                >
                  {day}
                </Text>
              ) : (
                <Text style={styles.limitDate}>{day}</Text>
              )}
            </View>
          </View>
        </TouchableOpacity>
      )
    );
  };

  return (
    <>
      <View style={styles.dataTextBox}>
        <Text style={styles.dataText}>
          本日　{years}年{months}月{date}日
        </Text>
      </View>
      <View style={styles.searchBox}>
        <View style={styles.searchImag}>
          <Image
            style={{
              width: '60%',
              height: '60%',
            }}
            source={require('../images/searchIcon.png')}
          />
        </View>
        <View style={styles.searchTextArea}>
          <TextInput
            value={text}
            onChangeText={setText}
            placeholder='キーワード検索'
            style={{
              height: '100%',
              width: '100%',
              marginRight: 5,
            }}
          />
          {text !== '' && (
            <TouchableOpacity
              style={{ alignItems: 'center', justifyContent: 'center' }}
              onPress={() => setText('')}
            >
              <View
                style={{
                  width: '12%',
                  height: '100%',
                  alignItems: 'center',
                  justifyContent: 'center',
                }}
              >
                <Image
                  style={{
                    width: 20,
                    height: 20,
                  }}
                  source={require('../images/deleteButton.png')}
                />
              </View>
            </TouchableOpacity>
          )}
        </View>
      </View>
      <FlatList
        data={eatMockData}
        navigation={navigation}
        renderItem={renderItem}
      />
    </>
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
  dataTextBox: {
    height: 40,
    textAlign: 'center',
    justifyContent: 'center',
    alignItems: 'center',
  },
  dataText: {
    fontSize: 20,
  },
  searchBox: {
    width: '100%',
    height: 40,
    borderColor: 'gray',
    borderWidth: 1,
    flexDirection: 'row',
    justifyContent: 'flex-start',
  },
  searchButton: {
    width: 90,
    backgroundColor: 'gray',
    height: '100%',
    alignItems: 'center',
    justifyContent: 'center',
  },
  searchText: {
    fontSize: 25,
  },
  searchTextArea: {
    width: '80%',
    paddingLeft: 5,
    height: '100%',
    flexDirection: 'row',
  },
  searchImag: {
    width: 40,
    height: '100%',
    alignItems: 'center',
    justifyContent: 'center',
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
  limitDateRed: {
    textAlign: 'center',
    fontSize: 20,
    color: 'red',
    fontWeight: 'bold',
  },
  limitDateOrange: {
    textAlign: 'center',
    fontSize: 20,
    color: '#ffa500',
    fontWeight: 'bold',
  },
  limitDate: {
    textAlign: 'center',
    fontSize: 20,
  },
});

export default HomeScreen;
