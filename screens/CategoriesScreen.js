import {View, Text} from 'react-native';
import React, {useState, useEffect} from 'react';
import {SafeAreaView} from 'react-native-safe-area-context';
import firestore from '@react-native-firebase/firestore';
import ItemList from '../components/ProductList';
import Header from '../components/Header';
import {useSelector} from 'react-redux';
const CategoriesScreen = () => {
  const [categoryList, setcategoryList] = useState([]);
  const Categories = useSelector(state => state.categories);
  const getCategories = () => {
    setcategoryList(Categories);
  };
  useEffect(() => {
    getCategories();
  }, []);
  return (
    <SafeAreaView className="flex-1">
      <View className="flex-1 p-3">
        <ItemList show={true} />
      </View>
    </SafeAreaView>
  );
};

export default CategoriesScreen;
