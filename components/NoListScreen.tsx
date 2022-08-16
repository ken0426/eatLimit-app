import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

const NoListScreen = () => {
  return (
    <View style={styles.viewScreen}>
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
    backgroundColor: '#d3d3d3',
  },
  viewText: {
    fontSize: 20,
    marginBottom: 140,
  },
});

export default NoListScreen;
