import moment from 'moment';
import React, { useState } from 'react';
import { TouchableWithoutFeedback } from 'react-native';
import {
  FlatList,
  Image,
  Keyboard,
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from 'react-native';
import { eatMockData, noEatMocData } from '../moc/MockData';
import ListScreen from './ListScreen';
import HomeScreenSortModal from './modalComponents/HomeScreenSortModal';
import NoListScreen from './NoListScreen';

/** 本日の日付 */
const toDay = moment().format('YYYY年M月D日');

const HomeScreen = ({ navigation }) => {
  const [text, setText] = useState('');

  /** モーダルの表示非表示に使うフラグ */
  const [isModal, setIsModal] = useState(false);

  /** 年を表示するかどうかのフラグ（falseの場合は「年」を非表示にする） */
  const [isOptionDisplayButton, setIsOptionDisplayButton] = useState(false);

  /** 画像を表示するかどうかのフラグ(trueの場合は画像を表示する) */
  const [isOptionDisplayImageButton, setIsOptionDisplayImageButton] =
    useState(true);

  /** カテゴリ表示の消費期限が選択されているかのフラグ */
  const [expiration, setExpiration] = useState(false);

  /** カテゴリ表示の賞味期限が選択されているかのフラグ */
  const [expiry, setExpiry] = useState(false);

  /** カテゴリ表示の購入日が選択されているかのフラグ */
  const [purchase, setPurchase] = useState(false);

  /** カテゴリ表示の登録日が選択されているかのフラグ */
  const [register, setRegister] = useState(false);

  /** モーダルのカテゴリ選択でチェックがついているものを監視する */
  const categoryData = [
    { expiration: expiration },
    { expiry: expiry },
    { purchase: purchase },
    { register: register },
  ];

  /** APIからのデータを更新するときに使用するフラグ（主に削除機能） */
  const [apiData, setApiData] = useState(eatMockData);

  /** リストを下に引っ張ってデータの更新を行うときに使うフラグ */
  const [refreshing, setRefreshing] = useState(false);

  const renderItem = ({ item, key }) => {
    /** 「消費期限」「賞味期限」の日付の取得 */
    const limitDay = item.limitDate;
    /** 「購入日」「登録日」の日付の取得 */
    const registerDay = item.registerDate;
    /** 商品名を取得 */
    const eatName = item.eatName;
    /** 「消費期限」「賞味期限」の文字列を日付のフォーマットに変換（年/月/日） */
    const formatDate = moment(limitDay).format('YYYY/MM/DD');
    /** 「消費期限」「賞味期限」の文字列を日付のフォーマットに変換（月/日） */
    const formatYearsDate = moment(limitDay).format('YYYY');
    /** 「消費期限」「賞味期限」のフォーマットを実際に表示する形へ変換（◯月◯日） */
    const formatTextDate = moment(limitDay).format('M月D日');
    /** 「購入日」「登録日」のフォーマットを実際に表示する形へ変換（◯月◯日） */
    const registerDate = moment(registerDay).format('M月D日');
    /** 表示する（年＋）月 */
    let dayText;

    if (
      item.limitTextData === 'expiration' ||
      item.limitTextData === 'expiry'
    ) {
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
      dayText = <Text style={styles.limitDate}>{registerDate}</Text>;
    }

    const SheetBox = () => {
      /** カテゴリのチェックが一つも付いていないときの処理 */
      if (!expiration && !expiry && !purchase && !register) {
        return (
          <ListScreen
            navigation={navigation}
            item={item}
            key={key}
            dayText={dayText}
            isOptionDisplayImageButton={isOptionDisplayImageButton}
            isOptionDisplayButton={isOptionDisplayButton}
            formatYearsDate={formatYearsDate}
            apiData={apiData}
            setApiData={setApiData}
          />
        );
      }
      /** カテゴリのチェックが付いているものだけを表示するロジック */
      return categoryData.map(
        (data) =>
          data[item.limitTextData] && (
            <ListScreen
              navigation={navigation}
              item={item}
              key={key}
              dayText={dayText}
              isOptionDisplayImageButton={isOptionDisplayImageButton}
              isOptionDisplayButton={isOptionDisplayButton}
              formatYearsDate={formatYearsDate}
              apiData={apiData}
              setApiData={setApiData}
            />
          )
      );
    };

    return text === '' ? <SheetBox /> : eatName.match(text) && <SheetBox />;
  };

  const listEmptyComponent = () => {
    return <NoListScreen />;
  };

  return (
    <>
      <View style={styles.dataTextBox}>
        <View style={styles.dataTextBoxLeft}></View>
        <Text style={styles.dataText}>本日 {toDay} </Text>
        <View style={styles.dataTextBoxRight}>
          <TouchableOpacity
            onPress={() => {
              Keyboard.dismiss();
              setIsModal(!isModal);
            }}
          >
            <Image
              style={styles.sortImagSize}
              source={require('../images/sort-down.png')}
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
      <TouchableWithoutFeedback onPress={() => Keyboard.dismiss()}>
        <FlatList
          data={apiData}
          navigation={navigation}
          renderItem={renderItem}
          refreshing={refreshing}
          ListEmptyComponent={listEmptyComponent}
          onRefresh={async () => {
            setRefreshing(true);
            setApiData(eatMockData); // 現在はAPIの繋ぎ込みをしていないのでモックデータを再度復活させる
            setRefreshing(false);
          }}
        />
      </TouchableWithoutFeedback>
      <HomeScreenSortModal
        isModal={isModal}
        setIsModal={setIsModal}
        isOptionDisplayButton={isOptionDisplayButton}
        setIsOptionDisplayButton={setIsOptionDisplayButton}
        setIsOptionDisplayImageButton={setIsOptionDisplayImageButton}
        setExpiration={setExpiration}
        setExpiry={setExpiry}
        setPurchase={setPurchase}
        setRegister={setRegister}
      />
    </>
  );
};

const styles = StyleSheet.create({
  dataTextBox: {
    width: '100%',
    height: 40,
    textAlign: 'center',
    justifyContent: 'center',
    alignItems: 'center',
    flexDirection: 'row',
    backgroundColor: '#fff',
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
    height: 42,
    borderWidth: 1,
    borderTopColor: 'gray',
    borderBottomColor: 'gray',
    flexDirection: 'row',
    justifyContent: 'flex-start',
    backgroundColor: '#fff',
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
