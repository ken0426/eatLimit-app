import React from 'react';
import { Text, View } from 'react-native';

const DetailScreen = ({ route }) => {
  const { item } = route.params;
  return (
    <View>
      <Text style={{ fontSize: 50 }}>これは{item.eatName}の詳細画面です</Text>
    </View>
  );
};

export default DetailScreen;
