import moment from 'moment';
import React, { useState } from 'react';
import {
  Button,
  FlatList,
  Image,
  Modal,
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from 'react-native';
import { eatMockData } from '../moc/MockData';

const toDay = moment().format('YYYY年M月D日');

const HomeScreen = ({ navigation }) => {
  const [text, setText] = useState('');
  const [isModal, setIsModal] = useState(false);

  const renderItem = ({ item, key }) => {
    const day = item.limitDate; // 日付の取得
    const eatName = item.eatName; // 商品名を取得
    const formatDate = moment(day).format('YYYY/MM/DD');
    const formatYearsDate = moment(day).format('YYYY');
    const formatTextDate = moment(day).format('M月D日');
    let dayText;

    if (item.limitTextData === 'expiration') {
      if (moment().format('YYYY/MM/DD') === formatDate) {
        dayText = <Text style={styles.limitDateOrange}>{formatTextDate}</Text>;
      } else if (moment().add(1, 'd').format('YYYY/MM/DD') === formatDate) {
        dayText = <Text style={styles.limitDateOrange}>{formatTextDate}</Text>;
      } else if (moment().format('YYYY/MM/DD') > formatDate) {
        dayText = <Text style={styles.limitDateRed}>{formatTextDate}</Text>;
      } else if (moment().format('YYYY/MM/DD') < formatDate) {
        dayText = <Text style={styles.limitDate}>{formatTextDate}</Text>;
      }
    } else {
      dayText = <Text style={styles.limitDate}>{formatTextDate}</Text>;
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
            {moment().format('YYYY') > formatYearsDate && (
              <Text
                style={{
                  textAlign: 'center',
                  justifyContent: 'center',
                  color: 'red',
                }}
              >
                {formatYearsDate}年
              </Text>
            )}
            {dayText}
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
              {moment().format('YYYY') > formatYearsDate && (
                <Text
                  style={{
                    textAlign: 'center',
                    justifyContent: 'center',
                    color: 'red',
                  }}
                >
                  {formatYearsDate}年
                </Text>
              )}
              {dayText}
            </View>
          </View>
        </TouchableOpacity>
      )
    );
  };

  return (
    <>
      <View style={styles.dataTextBox}>
        <View style={{ width: '10%', height: '100%' }}></View>
        <Text style={styles.dataText}>本日　{toDay} </Text>
        <View
          style={{
            width: '10%',
            height: '100%',
            justifyContent: 'center',
            alignItems: 'center',
          }}
        >
          <TouchableOpacity
            onPress={() => {
              setIsModal(!isModal);
            }}
          >
            <Image
              style={{
                width: 25,
                height: 25,
              }}
              source={require('../images/sortIcon.png')}
            />
          </TouchableOpacity>
        </View>
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
            autoCorrect={true}
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
      {/* グレーの背景 */}
      <View
        style={{
          flex: 1,
          justifyContent: 'center',
          alignItems: 'center',
        }}
      >
        <Modal transparent={true} visible={isModal}>
          <View
            style={{
              flex: 1,
              justifyContent: 'center',
              alignItems: 'center',
              backgroundColor: 'rgba(0,0,0,0.5)',
              borderRadius: 20,
              alignItems: 'center',
              shadowColor: '#000',
              shadowOffset: {
                width: 0,
                height: 2,
              },
              shadowOpacity: 0.25,
              shadowRadius: 4,
            }}
          >
            {/* モーダル */}
            <Modal animationType='slide' transparent={true} visible={isModal}>
              <View
                style={{
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
                  padding: 35,
                  alignItems: 'flex-end',
                  flexDirection: 'row',
                  shadowColor: '#000',
                  shadowOffset: {
                    width: 0,
                    height: 2,
                  },
                  shadowOpacity: 0.25,
                  shadowRadius: 4,
                }}
              >
                {/* 仮の表示 */}
                <View
                  style={{
                    width: '100%',
                    height: '100%',
                    alignItems: 'center',
                    justifyContent: 'space-between',
                  }}
                >
                  <Text>これはソート機能画面です</Text>
                  <Text>実装準備中</Text>
                  <View
                    style={{
                      width: '90%',
                      height: 50,
                      backgroundColor: '#94DFF5',
                      borderRadius: '50%',
                      justifyContent: 'center',
                      alignItems: 'center',
                      shadowColor: '#000',
                      shadowOpacity: 0.25,
                      shadowOffset: {
                        width: 0,
                        height: 2,
                      },
                    }}
                  >
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
    width: '100%',
    height: 40,
    textAlign: 'center',
    justifyContent: 'center',
    alignItems: 'center',
    flexDirection: 'row',
  },
  dataText: {
    fontSize: 20,
    width: '80%',
    textAlign: 'center',
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
