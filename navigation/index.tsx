import { useNavigation } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import React from 'react';
import { useDispatch } from 'react-redux';
import HeaderLeftButton from '../components/atoms/buttons/HeaderLeftButton';
import HeaderRightButton from '../components/atoms/buttons/HeaderRightButton';
import DetailScreen from '../components/DetailScreen';
import HomeScreen from '../components/HomeScreen';
import RegisterScreen from '../components/RegisterScreen';
import UpdateRegisterScreen from '../components/UpdateRegisterScreen';
import {
  setClassifying,
  setImageData,
  setKeepMethodTextData,
  setProductTextData,
  setRegisterDate,
  setRegisterMemo,
} from '../redux/common/commonRegisterSlice';
import { setIsAlertModal } from '../redux/common/commonSlice';
import { theme } from '../styles';
import { RegisterScreenNavigationProp, StackPramList } from '../type';

const Stack = createNativeStackNavigator<StackPramList>();

const RootStackScreen = () => {
  const dispatch = useDispatch();
  const navigation = useNavigation<RegisterScreenNavigationProp>();

  return (
    <Stack.Navigator>
      <Stack.Screen
        name='homeScreen'
        component={HomeScreen}
        options={{
          title: 'ホーム',
          headerStyle: {
            backgroundColor: theme.colors.rightBlue,
          },
          headerTitleStyle: {
            fontWeight: 'bold',
            fontSize: theme.fontSize.headerTextButton,
          },
          headerTintColor: theme.colors.white,
          headerRight: () => (
            <HeaderRightButton
              onPress={() => {
                dispatch(setImageData(null));
                dispatch(setProductTextData(''));
                dispatch(setClassifying('選択してください'));
                dispatch(setRegisterDate(''));
                dispatch(setKeepMethodTextData('選択してください'));
                dispatch(setRegisterMemo(''));
                navigation.navigate('registerScreen');
              }}
              newAddButton={true}
            />
          ),
        }}
      />
      <Stack.Screen
        name='detailScreen'
        component={DetailScreen}
        options={{
          title: '詳細',
          headerStyle: {
            backgroundColor: theme.colors.rightBlue,
          },
          headerTitleStyle: {
            fontWeight: 'bold',
            fontSize: theme.fontSize.headerTextButton,
          },
          headerTintColor: theme.colors.white,
          headerRight: () => (
            <HeaderRightButton
              newAddButton={false}
              rightButtonText={'編集'}
              onPress={() => navigation.navigate('registerScreen')}
            />
          ),
        }}
      />
      <Stack.Screen
        name='registerScreen'
        component={RegisterScreen}
        options={{
          title: '新規登録',
          headerStyle: {
            backgroundColor: theme.colors.rightBlue,
          },
          headerTitleStyle: {
            fontWeight: 'bold',
            fontSize: theme.fontSize.headerTextButton,
          },
          headerTintColor: theme.colors.white,
          presentation: 'fullScreenModal',
          headerRight: () => (
            <HeaderRightButton
              onPress={() => {
                navigation.goBack();
              }}
              newAddButton={false}
              rightButtonText={'登録'}
            />
          ),
          headerLeft: () => (
            <HeaderLeftButton
              onPress={() => {
                dispatch(setIsAlertModal(true));
                navigation.goBack();
              }}
            />
          ),
        }}
      />
      <Stack.Screen
        name='updateRegisterScreen'
        component={RegisterScreen}
        options={{
          title: '編集',
          headerStyle: {
            backgroundColor: theme.colors.rightBlue,
          },
          headerTitleStyle: {
            fontWeight: 'bold',
            fontSize: theme.fontSize.headerTextButton,
          },
          headerTintColor: theme.colors.white,
          presentation: 'fullScreenModal',
          headerRight: () => (
            <HeaderRightButton
              newAddButton={false}
              rightButtonText={'登録'}
              onPress={() => navigation.goBack()}
            />
          ),
          headerLeft: () => (
            <HeaderLeftButton onPress={() => navigation.goBack()} />
          ),
        }}
      />
    </Stack.Navigator>
  );
};

export default RootStackScreen;
