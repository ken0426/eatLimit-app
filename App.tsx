import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import HomeScreen from './components/HomeScreen';
import DetailScreen from './components/DetailScreen';
import HeaderRightButton from './components/atoms/buttons/HeaderRightButton';
import RegisterScreen from './components/RegisterScreen';
import HeaderLeftButton from './components/atoms/HeaderLeftButton';
import { StackPramList } from './type';
import { theme } from './styles';
import UpdateRegisterScreen from './components/UpdateRegisterScreen';

const Stack = createNativeStackNavigator<StackPramList>();

const App = () => {
  return (
    <NavigationContainer>
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
            headerRight: () => <HeaderRightButton newAddButton={true} />,
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
                newAddButton={false}
                rightButtonText={'登録'}
              />
            ),
            headerLeft: () => <HeaderLeftButton />,
          }}
        />
        <Stack.Screen
          name='updateRegisterScreen'
          component={UpdateRegisterScreen}
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
              />
            ),
            headerLeft: () => <HeaderLeftButton />,
          }}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default App;
