import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import HomeScreen from './components/HomeScreen';
import DetailScreen from './components/DetailScreen';
import HeaderRightButton from './components/atoms/buttons/HeaderRightButton';
import RegisterScreen from './components/modalComponents/RegisterScreen';
import HeaderLeftButton from './components/atoms/HeaderLeftButton';
const Stack = createNativeStackNavigator();

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
              backgroundColor: '#94DFF5',
            },
            headerTitleStyle: {
              fontWeight: 'bold',
              fontSize: 25,
            },
            headerTintColor: '#fff',
            headerRight: () => <HeaderRightButton newAddButton={true} />,
          }}
        />
        <Stack.Screen
          name='detailScreen'
          component={DetailScreen}
          options={{
            title: '詳細',
            headerStyle: {
              backgroundColor: '#94DFF5',
            },
            headerTitleStyle: {
              fontWeight: 'bold',
              fontSize: 25,
            },
            headerTintColor: '#fff',
          }}
        />
        <Stack.Screen
          name='registerScreen'
          component={RegisterScreen}
          options={{
            title: '新規登録',
            headerStyle: {
              backgroundColor: '#94DFF5',
            },
            headerTitleStyle: {
              fontWeight: 'bold',
              fontSize: 25,
            },
            headerTintColor: '#fff',
            presentation: 'fullScreenModal',
            headerRight: () => <HeaderRightButton newAddButton={false} />,
            headerLeft: () => <HeaderLeftButton />,
          }}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default App;
