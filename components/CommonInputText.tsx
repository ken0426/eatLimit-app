import React, { useState } from 'react';
import { StyleSheet, Text, TextInput, View } from 'react-native';
import { useDispatch, useSelector } from 'react-redux';
import { setProductTextData } from '../redux/common/commonRegisterSlice';
import { RootState } from '../redux/store';
import { theme } from '../styles';

const CommonInputText = ({ label, placeholder, setIsKeyboardUp }) => {
  const dispatch = useDispatch();
  const { productTextData } = useSelector(
    (state: RootState) => state.commonRegister
  );
  const [textData, setTextData] = useState(productTextData);

  return (
    <View style={styles.textInputArea}>
      <Text style={styles.label}>{label}</Text>
      <View style={styles.textArea}>
        <TextInput
          value={textData}
          onPressIn={() => setIsKeyboardUp(false)}
          placeholder={placeholder}
          style={styles.textInput}
          onChangeText={(text) => {
            setTextData(text);
            dispatch(setProductTextData(text));
          }}
        />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  textInputArea: {
    marginBottom: 20,
  },
  label: {
    fontFamily: theme.font.hiragino,
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
    fontFamily: theme.font.hiragino,
  },
});

export default CommonInputText;
