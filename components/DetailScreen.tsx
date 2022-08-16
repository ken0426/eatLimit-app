import React from 'react';
import { Text, View } from 'react-native';

interface DetailScreenProps {
  route: { params: { item: { eatName: string } } };
}

const DetailScreen: React.FC<DetailScreenProps> = ({ route }) => {
  const { item } = route.params;
  return (
    <View style={{ backgroundColor: '#fff', height: '100%' }}>
      <Text style={{ fontSize: 50 }}>これは{item.eatName}の詳細画面です</Text>
    </View>
  );
};

export default DetailScreen;
