import React from 'react';
import { Alert, Image, Text, TouchableOpacity, View } from 'react-native';
import { theme } from '../styles';

interface DetailScreenProps {
  route: {
    params: { item: { eatName: string; limitDate: string; eatImage: any } };
  };
  navigation: { goBack: () => void };
}

const DetailScreen: React.FC<DetailScreenProps> = ({ route, navigation }) => {
  const { item } = route.params;
  return (
    <View
      style={{
        backgroundColor: theme.backGroundScreenColor.gray,
        height: '100%',
        alignItems: 'center',
        paddingTop: 10,
        paddingRight: 5,
        paddingLeft: 5,
      }}
    >
      <View
        style={{
          flexDirection: 'row',
          width: '98%',
          backgroundColor: theme.colors.white,
          alignItems: 'center',
          paddingRight: 15,
          paddingLeft: 15,
          marginBottom: 10,
        }}
      >
        <View
          style={{
            width: 126,
            height: 126,
            alignItems: 'center',
            justifyContent: 'center',
          }}
        >
          <Image
            style={
              item.eatImage
                ? { width: '100%', height: '80%' }
                : { width: '100%', height: '100%' }
            }
            source={
              item.eatImage ? item.eatImage : require('../images/noImage.png')
            }
          />
        </View>
        <View style={{ width: '60%', alignItems: 'center' }}>
          <Text
            style={{ fontSize: 26 }}
            numberOfLines={2}
          >{`${item.eatName}`}</Text>
        </View>
      </View>
      <View
        style={{
          width: '98%',
          backgroundColor: theme.colors.white,
          flexDirection: 'row',
          height: 58,
          paddingRight: 15,
          paddingLeft: 15,
          alignItems: 'center',
          justifyContent: 'space-between',
          marginBottom: 10,
        }}
      >
        <Text style={{ fontSize: 26 }}>消費期限</Text>
        <View>
          <Text style={{ fontSize: 26 }}>{item.limitDate}</Text>
        </View>
      </View>
      <View
        style={{
          width: '98%',
          backgroundColor: theme.colors.white,
          flexDirection: 'row',
          height: 58,
          paddingRight: 15,
          paddingLeft: 15,
          alignItems: 'center',
          justifyContent: 'space-between',
          marginBottom: 30,
        }}
      >
        <Text style={{ fontSize: 26 }}>保存方法</Text>
        <View>
          <Text style={{ fontSize: 26 }}>冷蔵</Text>
        </View>
      </View>
      <TouchableOpacity
        style={{
          width: '50%',
          height: 43,
          alignItems: 'center',
          justifyContent: 'center',
          borderRadius: 50,
          backgroundColor: theme.colors.rightBlue,
        }}
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
        <Text
          style={{
            textAlign: 'center',
            justifyContent: 'center',
            fontSize: 26,
            color: theme.colors.white,
            fontWeight: 'bold',
          }}
        >
          消化済み
        </Text>
      </TouchableOpacity>
    </View>
  );
};

export default DetailScreen;
