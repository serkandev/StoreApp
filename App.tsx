// In App.js in a new project

import * as React from 'react';
import {View, Text} from 'react-native';
import {NavigationContainer, DefaultTheme} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import HomeScreen from './screens/HomeScreen';
import CategoriesScreen from './screens/CategoriesScreen';
import Colors from './statics/Colors';
import {library} from '@fortawesome/fontawesome-svg-core';
import {store} from './store';
import {Provider} from 'react-redux';
import {
  faBagShopping,
  faBars,
  faHeart,
  faHome,
  faMagnifyingGlass,
  faPersonRunning,
  faPlus,
  faRightFromBracket,
  faUser,
  faXmark,
} from '@fortawesome/free-solid-svg-icons';
import {faWhatsapp} from '@fortawesome/free-brands-svg-icons';

const Stack = createNativeStackNavigator();
library.add(
  faBagShopping,
  faHeart,
  faPlus,
  faMagnifyingGlass,
  faHome,
  faUser,
  faXmark,
  faWhatsapp,
  faPersonRunning,
  faBars,
  faRightFromBracket,
);

const navTheme = {
  ...DefaultTheme,
  colors: {
    ...DefaultTheme.colors,
    background: 'white',
  },
};
function App() {
  return (
    <Provider store={store}>
      <NavigationContainer theme={navTheme}>
        <Stack.Navigator
          screenOptions={{
            headerShown: false,
            cardStyle: {backgroundColor: 'red'},
          }}>
          <Stack.Screen name="HomeScreen" component={HomeScreen} />
          <Stack.Screen name="Categories" component={CategoriesScreen} />
        </Stack.Navigator>
      </NavigationContainer>
    </Provider>
  );
}

export default App;
