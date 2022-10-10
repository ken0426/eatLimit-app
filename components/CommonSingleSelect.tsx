import React from 'react';
import { StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import { theme } from '../styles';

const CommonSingleSelect = ({ label, onPress, selectText }) => {
  return (
    <View style={styles.selectArea}>
      <Text style={styles.label}>{label}</Text>
      <TouchableOpacity
        activeOpacity={1}
        onPress={onPress}
        style={styles.touchArea}
      >
        <Text style={{ fontSize: 20, color: theme.colors.black }}>
          {selectText}
        </Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  selectArea: {
    marginBottom: 20,
  },
  label: {
    marginBottom: 10,
    fontSize: 25,
    fontWeight: 'bold',
  },
  touchArea: {
    width: '100%',
    height: 50,
    borderColor: theme.colors.gray,
    borderWidth: 1,
    borderRadius: 5,
    paddingRight: 8,
    paddingLeft: 8,
    justifyContent: 'center',
  },
});

export default CommonSingleSelect;
