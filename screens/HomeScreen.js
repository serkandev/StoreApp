import {View, Text} from 'react-native';
import React from 'react';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import MainScreen from './MainScreen';
import FavoritesScreen from './FavoritesScreen';
import ShoppingCartScreen from './ShoppingCartScreen';
import {FontAwesomeIcon} from '@fortawesome/react-native-fontawesome';
import Colors from '../statics/Colors';
import Icons from '../statics/Icons';
import ProfileScreen from './ProfileScreen';
import CategoriesScreen from './CategoriesScreen';
const Tab = createBottomTabNavigator();

const HomeScreen = () => {
  return (
    <Tab.Navigator
      screenOptions={({route}) => ({
        headerShown: false,

        tabBarIcon: ({focused, color, size}) => {
          let iconName;
          let iconColor = focused ? Colors.greenButtonColor : 'black';
          if (route.name === 'Home') {
            iconName = focused ? Icons.homeIcon : Icons.homeIcon;
          } else if (route.name === 'Favorites') {
            iconName = focused ? Icons.discover : Icons.discover;
          } else if (route.name === 'Cart') {
            iconName = focused ? Icons.shoppingBagIcon : Icons.shoppingBagIcon;
          } else if (route.name === 'Profile') {
            iconName = focused ? Icons.profileIcon : Icons.profileIcon;
          } else if (route.name === 'Categories') {
            iconName = focused ? Icons.category : Icons.category;
          }
          return <FontAwesomeIcon icon={iconName} color={iconColor} />;
        },
        tabBarActiveTintColor: Colors.greenButtonColor,
        tabBarInactiveTintColor: 'black',
      })}>
      <Tab.Screen
        name="Home"
        component={MainScreen}
        options={{tabBarLabel: 'Anasayfa'}}
      />
      <Tab.Screen
        name="Categories"
        component={CategoriesScreen}
        options={{tabBarLabel: 'Kategoriler'}}
      />
      <Tab.Screen
        name="Favorites"
        component={FavoritesScreen}
        options={{tabBarLabel: 'Ürün Ara'}}
      />
      <Tab.Screen
        name="Cart"
        component={ShoppingCartScreen}
        options={{tabBarLabel: 'Sepetim'}}
      />
      <Tab.Screen
        name="Profile"
        component={ProfileScreen}
        options={{tabBarLabel: 'Hesabım'}}
      />
    </Tab.Navigator>
  );
};

export default HomeScreen;
