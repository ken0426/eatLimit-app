import React from 'react';
import { Image, StyleSheet, Text, View } from 'react-native';

const NoListScreen = () => {
  return (
    <View style={styles.viewScreen}>
      <Image
        style={{ width: 200, height: 200, marginBottom: 50 }}
        source={require('../images/syokupan.png')}
      />
      <Text style={styles.viewText}>まずは家にある食材を登録してみよう！</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  viewScreen: {
    with: '100%',
    height: '100%',
    alignItems: 'center',
    justifyContent: 'center',
    marginTop: 90,
  },
  viewText: {
    fontSize: 20,
    marginBottom: 190,
    fontWeight: 'bold',
  },
});

export default NoListScreen;
