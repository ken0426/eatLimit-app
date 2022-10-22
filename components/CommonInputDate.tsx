import moment from 'moment';
import React, { useEffect, useState } from 'react';
import { StyleSheet, Text, TextInput, View } from 'react-native';
import { useDispatch } from 'react-redux';
import { setRegisterDate } from '../redux/common/commonRegisterSlice';
import { theme } from '../styles';

const CommonInputDate = ({ setIsKeyboardUp }) => {
  const dispatch = useDispatch();
  /** 年の値 */
  const [year, setYear] = useState('');

  /** 月の値 */
  const [month, setMonth] = useState('');

  /** 日の値 */
  const [day, setDay] = useState('');

  /** 年＋月＋日の結合したテキストデータ */
  const [registerData, setRegisterData] = useState('');

  if (
    moment(registerData).isValid() &&
    year !== '' &&
    month !== '' &&
    day !== ''
  ) {
    dispatch(setRegisterDate(registerData));
  } else {
    dispatch(setRegisterDate(''));
  }

  /** 日付を生成するロジック */
  useEffect(() => {
    if (month.length === 1 && day.length === 1) {
      setRegisterData(`${year}-0${month}-0${day}`);
    } else if (month.length === 1 && day.length === 2) {
      setRegisterData(`${year}-0${month}-${day}`);
    } else if (month.length === 2 && day.length === 1) {
      setRegisterData(`${year}-${month}-0${day}`);
    } else {
      setRegisterData(`${year}-${month}-${day}`);
    }
  }, [year, month, day]);

  return (
    <View style={{ marginBottom: 20 }}>
      <View style={{ flexDirection: 'row', alignItems: 'center' }}>
        <Text style={styles.dateLabel}>日付</Text>
        {!moment(registerData).isValid() &&
          year !== '' &&
          month !== '' &&
          day !== '' && (
            <Text style={styles.incorrectDate}>※日付が正しくありません</Text>
          )}
      </View>
      <View style={styles.textInputArea}>
        <>
          <TextInput
            placeholder={moment().format('YYYY')}
            keyboardType='number-pad'
            style={styles.yearTextInputArea}
            onPressIn={() => setIsKeyboardUp(true)}
            onChangeText={(e) => setYear(e)}
            maxLength={4}
          />
          <Text style={styles.timeLabel}>年</Text>
        </>
        <>
          <TextInput
            placeholder={moment().format('M')}
            keyboardType='number-pad'
            style={styles.dateInputTextArea}
            onPressIn={() => setIsKeyboardUp(true)}
            onChangeText={(e) => setMonth(e)}
            maxLength={2}
          />
          <Text style={styles.timeLabel}>月</Text>
        </>
        <>
          <TextInput
            placeholder={moment().format('D')}
            keyboardType='number-pad'
            style={styles.dateInputTextArea}
            onPressIn={() => setIsKeyboardUp(true)}
            onChangeText={(e) => setDay(e)}
            maxLength={2}
          />
          <Text style={styles.timeLabel}>日</Text>
        </>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  dateLabel: {
    fontFamily: theme.font.hiragino,
    marginBottom: 10,
    fontSize: 25,
    fontWeight: 'bold',
  },
  timeLabel: {
    fontFamily: theme.font.hiragino,
    fontSize: 20,
    fontWeight: 'bold',
  },
  incorrectDate: {
    fontFamily: theme.font.hiragino,
    marginBottom: 10,
    marginLeft: 5,
    fontSize: 15,
    color: theme.colors.red,
  },
  textInputArea: {
    flexDirection: 'row',
    alignItems: 'flex-end',
    justifyContent: 'space-between',
  },
  yearTextInputArea: {
    fontSize: 20,
    fontFamily: theme.font.hiragino,
    width: 100,
    height: 50,
    borderColor: theme.colors.gray,
    borderWidth: 1,
    borderRadius: 5,
    textAlign: 'center',
  },
  dateInputTextArea: {
    fontFamily: theme.font.hiragino,
    fontSize: 20,
    width: 80,
    height: 50,
    borderColor: theme.colors.gray,
    borderWidth: 1,
    borderRadius: 5,
    textAlign: 'center',
  },
});

export default CommonInputDate;
