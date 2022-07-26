import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import HomeScreen from './components/HomeScreen';
import DetailScreen from './components/DetailScreen';
import { StyleSheet } from 'react-native';
const Stack = createNativeStackNavigator();

const App = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen
          name='homeScreen'
          component={HomeScreen}
          style={styles.header}
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
          style={styles.header}
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

const styles = StyleSheet.create({
  header: {
    backgroundColor: '#94DFF5',
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
});

export default App;
