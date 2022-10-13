import moment from 'moment';
import React, { useEffect, useState } from 'react';
import { Text, TextInput, View } from 'react-native';
import { theme } from '../styles';

const CommonInputDate = ({ setIsKeyboardUp }) => {
  /** 年の値 */
  const [year, setYear] = useState('');

  /** 月の値 */
  const [month, setMonth] = useState('');

  /** 日の値 */
  const [day, setDay] = useState('');

  /** 年＋月＋日の結合したテキストデータ */
  const [registerData, setRegisterData] = useState('');

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
        <Text
          style={{
            fontFamily: 'HiraginoSans-W3',
            marginBottom: 10,
            fontSize: 25,
            fontWeight: 'bold',
          }}
        >
          日付
        </Text>
        {!moment(registerData).isValid() &&
          year !== '' &&
          month !== '' &&
          day !== '' && (
            <Text
              style={{
                fontFamily: 'HiraginoSans-W3',
                marginBottom: 10,
                marginLeft: 5,
                fontSize: 15,
                color: theme.colors.red,
              }}
            >
              ※日付が正しくありません
            </Text>
          )}
      </View>
      <View
        style={{
          flexDirection: 'row',
          alignItems: 'flex-end',
          justifyContent: 'space-between',
        }}
      >
        <>
          <TextInput
            placeholder={moment().format('YYYY')}
            keyboardType='number-pad'
            style={{
              fontSize: 20,
              fontFamily: 'HiraginoSans-W3',
              width: 100,
              height: 50,
              borderColor: theme.colors.gray,
              borderWidth: 1,
              borderRadius: 5,
              textAlign: 'center',
            }}
            onPressIn={() => setIsKeyboardUp(true)}
            onChangeText={(e) => setYear(e)}
            maxLength={4}
          />
          <Text
            style={{
              fontFamily: 'HiraginoSans-W3',
              fontSize: 20,
              fontWeight: 'bold',
            }}
          >
            年
          </Text>
        </>
        <>
          <TextInput
            placeholder={moment().format('M')}
            keyboardType='number-pad'
            style={{
              fontFamily: 'HiraginoSans-W3',
              fontSize: 20,
              width: 80,
              height: 50,
              borderColor: theme.colors.gray,
              borderWidth: 1,
              borderRadius: 5,
              textAlign: 'center',
            }}
            onPressIn={() => setIsKeyboardUp(true)}
            onChangeText={(e) => setMonth(e)}
            maxLength={2}
          />
          <Text
            style={{
              fontFamily: 'HiraginoSans-W3',
              fontSize: 20,
              fontWeight: 'bold',
            }}
          >
            月
          </Text>
        </>
        <>
          <TextInput
            placeholder={moment().format('D')}
            keyboardType='number-pad'
            style={{
              fontFamily: 'HiraginoSans-W3',
              fontSize: 20,
              width: 80,
              height: 50,
              borderColor: theme.colors.gray,
              borderWidth: 1,
              borderRadius: 5,
              textAlign: 'center',
            }}
            onPressIn={() => setIsKeyboardUp(true)}
            onChangeText={(e) => setDay(e)}
            maxLength={2}
          />
          <Text
            style={{
              fontFamily: 'HiraginoSans-W3',
              fontSize: 20,
              fontWeight: 'bold',
            }}
          >
            日
          </Text>
        </>
      </View>
    </View>
  );
};

export default CommonInputDate;
