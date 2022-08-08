import moment from 'moment';
import React, { useState } from 'react';
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
import HomeScreenSortModal from './modalComponents/HomeScreenSortModal';

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

    const SheetBox = () => {
      return (
        <TouchableOpacity
          key={key}
          onPress={() => {
            navigation.navigate('detailScreen', { item: item });
          }}
        >
          <View style={styles.box} key={key}>
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
                <Text style={styles.limitYearsOutText}>
                  {formatYearsDate}年
                </Text>
              )}
              {dayText}
            </View>
          </View>
        </TouchableOpacity>
      );
    };

    return text === '' ? <SheetBox /> : eatName.match(text) && <SheetBox />;
  };

  return (
    <>
      <View style={styles.dataTextBox}>
        <View style={styles.dataTextBoxLeft}></View>
        <Text style={styles.dataText}>本日 {toDay} </Text>
        <View style={styles.dataTextBoxRight}>
          <TouchableOpacity
            onPress={() => {
              setIsModal(!isModal);
            }}
          >
            <Image
              style={styles.sortImagSize}
              source={require('../images/sortIcon.png')}
            />
          </TouchableOpacity>
        </View>
      </View>
      <View style={styles.searchBox}>
        <View style={styles.searchImag}>
          <Image
            style={styles.searchIconSize}
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
              style={styles.centerPosition}
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
                  style={{ width: 20, height: 20 }}
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
      <HomeScreenSortModal isModal={isModal} setIsModal={setIsModal} />
    </>
  );
};

const styles = StyleSheet.create({
  maxSize: {
    width: '100%',
    height: '100%',
  },
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
  dataTextBoxLeft: {
    width: '10%',
    height: '100%',
  },
  dataTextBoxRight: {
    width: '10%',
    height: '100%',
    justifyContent: 'center',
    alignItems: 'center',
  },
  sortImagSize: {
    width: 25,
    height: 25,
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
  searchText: {
    fontSize: 25,
  },
  searchTextArea: {
    width: '80%',
    paddingLeft: 5,
    height: '100%',
    flexDirection: 'row',
  },
  centerPosition: {
    alignItems: 'center',
    justifyContent: 'center',
  },
  searchImag: {
    width: 40,
    height: '100%',
    alignItems: 'center',
    justifyContent: 'center',
  },
  searchIconSize: {
    width: '60%',
    height: '60%',
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
  limitYearsOutText: {
    textAlign: 'center',
    justifyContent: 'center',
    color: 'red',
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
