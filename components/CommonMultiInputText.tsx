import React, { useState } from 'react';
import { StyleSheet, Text, TextInput, View } from 'react-native';
import { useDispatch } from 'react-redux';
import { setRegisterMemo } from '../redux/common/commonRegisterSlice';
import { theme } from '../styles';

const CommonMultiInputText = ({ label, placeholder, setIsKeyboardUp }) => {
  const dispatch = useDispatch();
  /** テキストインプットエリアで入力高さをstateで管理する */
  const [inputHeight, setInputHeight] = useState(50);

  const [text, setText] = useState('');

  dispatch(setRegisterMemo(text));

  return (
    <View style={styles.textInputArea}>
      <Text style={styles.label}>{label}</Text>
      <View
        style={[
          styles.textArea,
          { height: 100 > inputHeight ? 100 : inputHeight },
        ]}
      >
        <TextInput
          value={text}
          style={styles.textInput}
          placeholder={placeholder}
          multiline={true}
          onPressIn={() => {
            setIsKeyboardUp(true);
          }}
          onChangeText={(text) => setText(text)}
          onContentSizeChange={(event) => {
            // 入力ボックスの高さをsetState
            setInputHeight(event.nativeEvent.contentSize.height);
          }}
        />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  textInputArea: {
    marginBottom: 80,
  },
  label: {
    fontFamily: theme.font.hiragino,
    marginBottom: 10,
    fontSize: 25,
    fontWeight: 'bold',
  },
  textArea: {
    width: '100%',
    borderColor: theme.colors.gray,
    borderWidth: 1,
    borderRadius: 5,
  },
  textInput: {
    fontSize: 20,
    width: '100%',
    // height: '100%',
    flex: 1,
    paddingRight: 8,
    paddingLeft: 8,
    fontFamily: theme.font.hiragino,
  },
});

export default CommonMultiInputText;
