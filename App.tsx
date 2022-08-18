import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import HomeScreen from './components/HomeScreen';
import DetailScreen from './components/DetailScreen';
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
              fontSize: 30,
            },
            headerTintColor: '#fff',
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
              fontSize: 30,
            },
            headerTintColor: '#fff',
          }}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default App;
