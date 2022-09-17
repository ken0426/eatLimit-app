import React from 'react';
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
import { LABEL_ID, LABEL_NAME } from '../constants';

/**
 * @param {object}  item                          APIからのデータ（※現在はモックデータ）
 * @param {string}  dayText                       リストに表示する日付（月のみ）
 * @param {string}  allDayText                    リストに表示する日付（年＋月）
 * @param {boolean} isOptionDisplayImageButton    リストに画像を表示するかどうかのフラグ
 * @param {boolean} isOptionDisplayButton         リストに年を表示するかどうかのフラグ
 * @param {Array}   apiData                       APIからのデータ（※現在はモックデータ）
 * @param {void}    setApiData                    リストの更新を行うための関数
 */

interface ListScreenProps {
  navigation: any;
  item: {
    eatImage: any;
    eatName: string;
    limitDate: string;
    limitTextData: string;
    label: number;
    key: number;
  };
  dayText: string;
  allDayText: string;
  isOptionDisplayImageButton: boolean;
  isOptionDisplayLabelButton: boolean;
  isOptionDisplayButton: boolean;
  apiData: Array<object>;
  setApiData: ({}) => void;
}

const ListScreen: React.FC<ListScreenProps> = ({
  navigation,
  item,
  dayText,
  allDayText,
  isOptionDisplayImageButton,
  isOptionDisplayLabelButton,
  isOptionDisplayButton,
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
          <View style={{ justifyContent: 'center' }}>
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
          width: '100%',
        }}
        onPress={() => {
          navigation.navigate('detailScreen', {
            item: item,
            navigation: navigation,
          });
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
          style={{
            width: isOptionDisplayImageButton ? '73%' : '100%',
            paddingLeft: isOptionDisplayImageButton ? 15 : 0,
            justifyContent: 'space-around',
          }}
        >
          <View style={{ alignItems: 'flex-end' }}>
            <View
              style={{
                width: 80,
                backgroundColor:
                  item.label === LABEL_ID.refrigeration
                    ? theme.labelColors.blue
                    : item.label === LABEL_ID.frozen
                    ? theme.labelColors.lightBlue
                    : theme.labelColors.lightOrang,
                alignItems: 'center',
                borderRadius: 5,
              }}
            >
              {isOptionDisplayLabelButton && (
                <Text
                  style={{
                    color: theme.colors.white,
                    fontWeight: 'bold',
                    fontSize: 17,
                  }}
                >
                  {item.label === LABEL_ID.refrigeration
                    ? LABEL_NAME.refrigeration
                    : item.label === LABEL_ID.frozen
                    ? LABEL_NAME.frozen
                    : LABEL_NAME.normal}
                </Text>
              )}
            </View>
          </View>
          <View
            style={{
              alignItems: 'flex-start',
              marginTop: !isOptionDisplayImageButton && 10,
            }}
          >
            <Text numberOfLines={1} style={{ fontSize: 22 }}>
              {item.eatName}
            </Text>
          </View>
          <View style={{ flexDirection: 'column', alignItems: 'flex-end' }}>
            <View
              style={{
                flexDirection: 'row',
                alignItems: 'center',
                marginTop: !isOptionDisplayImageButton && 10,
              }}
            >
              <Image
                style={{ width: 10, height: 10 }}
                source={require('../images/clockIcon.png')}
              />
              <Text
                style={{
                  paddingLeft: 4,
                  width: isOptionDisplayButton ? 68 : 39,
                  color: 'gray',
                  fontSize: 12,
                  textAlign: 'left',
                }}
              >
                {isOptionDisplayButton ? allDayText : dayText}
              </Text>
              <View style={{ width: 45, alignItems: 'center' }}>
                <Text
                  style={{
                    color: 'gray',
                    fontSize: 12,
                  }}
                >
                  {categoryLabelText}
                </Text>
              </View>
            </View>
          </View>
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
});

export default ListScreen;
