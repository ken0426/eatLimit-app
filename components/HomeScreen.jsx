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
import { theme } from '../styles';
import ListScreen from './ListScreen';
import HomeScreenSortModal from './modalComponents/HomeScreenSortModal';
import NoListScreen from './NoListScreen';

/** 本日の日付 */
const toDay = moment().format('YYYY年M月D日');
const toDayData = moment().format('YYYY/M/D');

const HomeScreen = ({ navigation }) => {
  const [text, setText] = useState('');

  /** モーダルの表示非表示に使うフラグ */
  const [isModal, setIsModal] = useState(false);

  /** ソートアイコンの上下反転ロジック（falseの場合は昇順） */
  const [isUpDownIcon, setIsUpDownIcon] = useState(false);

  /** 並べ替えのフラグ（true）の場合は「消費期限」「消費期限」順 */
  const [isSort, setIsSort] = useState(true);

  /** 年を表示するかどうかのフラグ（falseの場合は「年」を非表示にする） */
  const [isOptionDisplayButton, setIsOptionDisplayButton] = useState(false);

  /** 画像を表示するかどうかのフラグ(trueの場合は画像を表示する) */
  const [isOptionDisplayImageButton, setIsOptionDisplayImageButton] =
    useState(true);

  /** ラベルを表示するかどうかのフラグ（trueの場合はラベルを表示する） */
  const [isOptionDisplayLabelButton, setIsOptionDisplayLabelButton] =
    useState(true);

  /** 絞り込み表示の消費期限が選択されているかのフラグ */
  const [expiration, setExpiration] = useState(false);

  /** 絞り込み表示の賞味期限が選択されているかのフラグ */
  const [expiry, setExpiry] = useState(false);

  /** 絞り込み表示の購入日が選択されているかのフラグ */
  const [purchase, setPurchase] = useState(false);

  /** 絞り込み表示の登録日が選択されているかのフラグ */
  const [register, setRegister] = useState(false);

  /** 絞り込み表示の冷蔵が選択されているかのフラグ */
  const [refrigeration, setRefrigeration] = useState(false);

  /** 絞り込み表示の冷凍が選択されているかのフラグ */
  const [frozen, setFrozen] = useState(false);

  /** 絞り込み表示の常温が選択されているかのフラグ */
  const [normal, setNormal] = useState(false);

  /** 絞り込み表示で期限切れが選択されているかのフラグ */
  const [expired, setExpired] = useState(false);

  /** APIからのデータを更新するときに使用するフラグ（主に削除機能） */
  const [apiData, setApiData] = useState(eatMockData);

  /** リストを下に引っ張ってデータの更新を行うときに使うフラグ */
  const [refreshing, setRefreshing] = useState(false);

  /** 表示するリストのソートするロジック */
  const sortData = apiData.sort((a, b) => {
    let listSortData = [];
    // もし並べ替えが「賞味期限」「賞味期限」であれば
    if (isSort) {
      if (a.limitDate) {
        if (isUpDownIcon) {
          // 昇順
          listSortData = moment(b.limitDate) - moment(a.limitDate);
        } else {
          // 降順
          listSortData = moment(a.limitDate) - moment(b.limitDate);
        }
      } else {
        listSortData.push(a.registerDate);
      }
    } else {
      // もし並べ替えが「登録日」「購入日」順であれば
      if (isUpDownIcon) {
        // 昇順
        listSortData = moment(b.registerDate) - moment(a.registerDate);
      } else {
        // 降順
        listSortData = moment(a.registerDate) - moment(b.registerDate);
      }
    }
    return listSortData;
  });

  /** モーダルのカテゴリ選択でチェックがついているものを監視する */
  const categoryData = [
    { expiration: expiration },
    { expiry: expiry },
    { purchase: purchase },
    { register: register },
  ];

  const categoryDateStorage = [
    { refrigeration: refrigeration },
    { frozen: frozen },
    { normal: normal },
  ];

  let sortImag = require('../images/sort-up.png');

  if (
    !expiration &&
    !expiry &&
    !purchase &&
    !register &&
    !refrigeration &&
    !frozen &&
    !normal &&
    !expired
  ) {
    sortImag = isUpDownIcon
      ? require('../images/sort-down.png')
      : require('../images/sort-up.png');
  } else {
    sortImag = isUpDownIcon
      ? require('../images/sort-down-blue.png')
      : require('../images/sort-up-blue.png');
  }

  const renderItem = ({ item, key }) => {
    /** 「消費期限」「賞味期限」の日付の取得 */
    const limitDay = item.limitDate;
    /** 「購入日」「登録日」の日付の取得 */
    const registerDay = item.registerDate;
    /** 商品名を取得 */
    const eatName = item.eatName;
    /** 「消費期限」「賞味期限」の文字列を日付のフォーマットに変換（年/月/日） */
    const formatDate = moment(limitDay).format('YYYY/MM/DD');
    /** 「消費期限」「賞味期限」のフォーマットを実際に表示する形へ変換（◯月◯日） */
    const formatTextDate = moment(limitDay).format('M/D');
    /** 「消費期限」「賞味期限」のフォーマットを実際に表示する形へ変換（◯◯◯◯年◯月◯日） */
    const allFormatTextDate = moment(limitDay).format('YYYY/M/D');
    /** 「購入日」「登録日」のフォーマットを実際に表示する形へ変換（◯月◯日） */
    const registerDate = moment(registerDay).format('M/D');
    /** 「購入日」「登録日」のフォーマットを実際に表示する形へ変換（◯◯◯◯年◯月◯日） */
    const allRegisterDate = moment(registerDay).format('YYYY/M/D');
    /** 表示する月 */
    let dayText;
    /** 表示する年＋月 */
    let allDayText;

    if (
      item.limitTextData === 'expiration' ||
      item.limitTextData === 'expiry'
    ) {
      if (moment().format('YYYY/MM/DD') === formatDate) {
        dayText = <Text style={styles.limitDateOrange}>{formatTextDate}</Text>;
        allDayText = (
          <Text style={styles.limitDateOrange}>{allFormatTextDate}</Text>
        );
      } else if (moment().add(1, 'd').format('YYYY/MM/DD') === formatDate) {
        dayText = <Text style={styles.limitDateOrange}>{formatTextDate}</Text>;
        allDayText = (
          <Text style={styles.limitDateOrange}>{allFormatTextDate}</Text>
        );
      } else if (moment().format('YYYY/MM/DD') > formatDate) {
        dayText = <Text style={styles.limitDateRed}>{formatTextDate}</Text>;
        allDayText = (
          <Text style={styles.limitDateRed}>{allFormatTextDate}</Text>
        );
      } else if (moment().format('YYYY/MM/DD') < formatDate) {
        dayText = <Text style={styles.limitDate}>{formatTextDate}</Text>;
        allDayText = <Text style={styles.limitDate}>{allFormatTextDate}</Text>;
      }
    } else {
      dayText = <Text style={styles.limitDate}>{registerDate}</Text>;
      allDayText = <Text style={styles.limitDate}>{allRegisterDate}</Text>;
    }

    const SheetBox = () => {
      /** 絞り込みのチェックが一つも付いていないときの処理 */
      if (
        !expiration &&
        !expiry &&
        !purchase &&
        !register &&
        !refrigeration &&
        !frozen &&
        !normal
      ) {
        return (
          <ListScreen
            navigation={navigation}
            item={item}
            key={key}
            dayText={dayText}
            allDayText={allDayText}
            isOptionDisplayImageButton={isOptionDisplayImageButton}
            isOptionDisplayLabelButton={isOptionDisplayLabelButton}
            isOptionDisplayButton={isOptionDisplayButton}
            apiData={apiData}
            setApiData={setApiData}
          />
        );
      }

      /** 「消費期限」「賞味期限」「購入日」「登録日」が選択されていない状態で「冷蔵」「冷凍」「常温」が選択された場合 */
      if (!expiration && !expiry && !purchase && !register) {
        return categoryDateStorage.map(
          (data) =>
            data[item.labelName] && (
              <ListScreen
                navigation={navigation}
                item={item}
                key={key}
                dayText={dayText}
                allDayText={allDayText}
                isOptionDisplayImageButton={isOptionDisplayImageButton}
                isOptionDisplayLabelButton={isOptionDisplayLabelButton}
                isOptionDisplayButton={isOptionDisplayButton}
                apiData={apiData}
                setApiData={setApiData}
              />
            )
        );
      }

      /** 「冷蔵」「冷凍」「常温」が選択されていない状態で「消費期限」「賞味期限」「購入日」「登録日」が選択された場合 */
      if (!refrigeration && !frozen && !normal) {
        return categoryData.map(
          (data) =>
            data[item.limitTextData] && (
              <ListScreen
                navigation={navigation}
                item={item}
                key={key}
                dayText={dayText}
                allDayText={allDayText}
                isOptionDisplayImageButton={isOptionDisplayImageButton}
                isOptionDisplayLabelButton={isOptionDisplayLabelButton}
                isOptionDisplayButton={isOptionDisplayButton}
                apiData={apiData}
                setApiData={setApiData}
              />
            )
        );
      }

      /** 「消費期限」「賞味期限」「購入日」「登録日」がいづれか一つ以上且つ「冷蔵」「冷凍」「常温」がいづれか一つ以上選択された場合 */
      return categoryData.map(
        (data) =>
          data[item.limitTextData] &&
          categoryDateStorage.map(
            (d) =>
              d[item.labelName] && (
                <ListScreen
                  navigation={navigation}
                  item={item}
                  key={key}
                  dayText={dayText}
                  allDayText={allDayText}
                  isOptionDisplayImageButton={isOptionDisplayImageButton}
                  isOptionDisplayLabelButton={isOptionDisplayLabelButton}
                  isOptionDisplayButton={isOptionDisplayButton}
                  apiData={apiData}
                  setApiData={setApiData}
                />
              )
          )
      );
    };

    if (expired) {
      if (moment(limitDay).isBefore(toDayData)) {
        return text === '' ? <SheetBox /> : eatName.match(text) && <SheetBox />;
      }
    } else {
      return text === '' ? <SheetBox /> : eatName.match(text) && <SheetBox />;
    }
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
            <Image style={styles.sortImagSize} source={sortImag} />
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
            style={[theme.maxSize, { marginRight: 5 }]}
          />
          {text !== '' && (
            <TouchableOpacity
              style={theme.centerPosition}
              onPress={() => setText('')}
            >
              <View
                style={[theme.centerPosition, { width: '12%', height: '100%' }]}
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
          data={sortData}
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
        setIsOptionDisplayLabelButton={setIsOptionDisplayLabelButton}
        setExpiration={setExpiration}
        setExpiry={setExpiry}
        setPurchase={setPurchase}
        setRegister={setRegister}
        setRefrigeration={setRefrigeration}
        setFrozen={setFrozen}
        setNormal={setNormal}
        setExpired={setExpired}
        setIsUpDownIcon={setIsUpDownIcon}
        setIsSort={setIsSort}
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
    backgroundColor: theme.colors.white,
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
    borderWidth: 0.3,
    borderTopColor: 'gray',
    borderBottomColor: 'gray',
    flexDirection: 'row',
    justifyContent: 'flex-start',
    backgroundColor: theme.colors.white,
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
  searchIconSize: {
    width: '60%',
    height: '60%',
  },
  limitDateRed: {
    textAlign: 'center',
    fontSize: 12,
    color: 'red',
    fontWeight: 'bold',
  },
  limitDateOrange: {
    textAlign: 'center',
    fontSize: 12,
    color: theme.colors.orange,
    fontWeight: 'bold',
  },
  limitDate: {
    textAlign: 'center',
    fontSize: 12,
  },
});

export default HomeScreen;
