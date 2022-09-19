import React from 'react';
import {
  Alert,
  Image,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import { LABEL_ID, LABEL_NAME } from '../constants';
import { theme } from '../styles';

interface DetailScreenProps {
  route: {
    params: {
      item: {
        eatName: string;
        limitDate: string;
        eatImage: any;
        registerDate: string;
        limitTextData: string;
        label: number;
      };
      categoryLabelText: string;
    };
  };
  navigation: { goBack: () => void };
}

const DetailScreen: React.FC<DetailScreenProps> = ({ route, navigation }) => {
  const { item } = route.params;
  const { categoryLabelText } = route.params;
  return (
    <View style={styles.detailScreenStyle}>
      <View style={styles.namePicture}>
        <View
          style={{
            justifyContent: 'center',
            width: 126,
            height: 126,
          }}
        >
          <Image
            style={
              item.eatImage ? { width: '100%', height: '80%' } : theme.maxSize
            }
            source={
              item.eatImage ? item.eatImage : require('../images/noImage.png')
            }
          />
        </View>
        <View style={{ width: '60%', alignItems: 'center' }}>
          <Text style={styles.detailText} numberOfLines={2}>
            {`${item.eatName}`}
          </Text>
        </View>
      </View>
      <View style={[styles.detailItemStyle, { marginBottom: 10 }]}>
        <Text style={styles.detailText}>{categoryLabelText}</Text>
        <View>
          <Text style={styles.detailText}>
            {item.limitDate ? item.limitDate : item.registerDate}
          </Text>
        </View>
      </View>
      <View style={[styles.detailItemStyle, { marginBottom: 30 }]}>
        <Text style={styles.detailText}>保存方法</Text>
        <View
          style={{
            width: 128,
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
          <Text
            style={[
              styles.detailText,
              { color: theme.colors.white, fontWeight: 'bold' },
            ]}
          >
            {item.label === LABEL_ID.refrigeration
              ? LABEL_NAME.refrigeration
              : item.label === LABEL_ID.frozen
              ? LABEL_NAME.frozen
              : LABEL_NAME.normal}
          </Text>
        </View>
      </View>
      <TouchableOpacity
        style={styles.deleteButton}
        onPress={() =>
          Alert.alert(`${item.eatName}を\n消化済みにしますか？`, '', [
            { text: 'キャンセル', onPress: () => {} },
            {
              text: '消化済み',
              onPress: () => {
                navigation.goBack();
              },
            },
          ])
        }
      >
        <View
          style={{
            flexDirection: 'row',
            justifyContent: 'center',
            alignItems: 'center',
          }}
        >
          <Image
            style={{ width: 20, height: 20, marginRight: 5 }}
            source={require('../images/dustIcon.png')}
          />
          <Text style={styles.deleteButtonText}>消化済み</Text>
        </View>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  detailScreenStyle: {
    backgroundColor: theme.backGroundScreenColor.gray,
    height: '100%',
    alignItems: 'center',
    paddingTop: 10,
    paddingRight: 5,
    paddingLeft: 5,
  },
  namePicture: {
    flexDirection: 'row',
    width: '98%',
    backgroundColor: theme.colors.white,
    alignItems: 'center',
    paddingRight: 15,
    paddingLeft: 15,
    marginBottom: 10,
  },
  detailItemStyle: {
    width: '98%',
    backgroundColor: theme.colors.white,
    flexDirection: 'row',
    height: 58,
    paddingRight: 15,
    paddingLeft: 15,
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  deleteButton: {
    width: '50%',
    height: 43,
    justifyContent: 'center',
    borderRadius: 50,
    backgroundColor: theme.colors.rightBlue,
  },
  deleteButtonText: {
    textAlign: 'center',
    justifyContent: 'center',
    fontSize: 26,
    color: theme.colors.white,
    fontWeight: 'bold',
  },
  detailText: {
    fontSize: 26,
  },
});

export default DetailScreen;
