import {View, Text, TextInput} from 'react-native';
import React, {useState} from 'react';
import {SafeAreaView} from 'react-native-safe-area-context';
import Strings from '../statics/Strings';
import Icons from '../statics/Icons';
import Header from '../components/Header';
import ProductList from '../components/ProductList';
const FavoritesScreen = ({navigation}) => {
  const [Name, setName] = useState('');
  return (
    <SafeAreaView className="flex-1 ">
      <View className="flex-1 p-7">
        <Header
          title={Strings.favoritePageTitle}
          firstIcon={Icons.shoppingBagIcon}
          firstIconOnpress={() => {
            navigation.navigate('Cart');
          }}
        />
        <TextInput
          className="h-12 p-4 border my-4 rounded-md bg-white font-bold"
          placeholder="Ürün Ara"
          onChangeText={text => {
            setName(text);
          }}
          value={Name}
        />

        <ProductList show={false} SearchProductName={Name} />
      </View>
    </SafeAreaView>
  );
};

export default FavoritesScreen;
