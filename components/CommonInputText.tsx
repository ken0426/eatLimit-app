import React from 'react';
import { StyleSheet, Text, TextInput, View } from 'react-native';
import { theme } from '../styles';

const CommonInputText = ({ label, placeholder }) => {
  return (
    <View style={styles.textInputArea}>
      <Text style={styles.label}>{label}</Text>
      <View style={styles.textArea}>
        <TextInput placeholder={placeholder} style={styles.textInput} />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  textInputArea: {
    marginBottom: 20,
  },
  label: {
    marginBottom: 10,
    fontSize: 25,
    fontWeight: 'bold',
  },
  textArea: {
    width: '100%',
    height: 50,
    borderColor: theme.colors.gray,
    borderWidth: 1,
    borderRadius: 5,
  },
  textInput: {
    fontSize: 20,
    width: '100%',
    height: '100%',
    paddingRight: 8,
    paddingLeft: 8,
  },
});

export default CommonInputText;
