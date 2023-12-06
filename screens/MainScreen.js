import {View, Text, SafeAreaView} from 'react-native';
import React, {useEffect} from 'react';
import Header from '../components/Header';
import Icons from '../statics/Icons';
import Strings from '../statics/Strings';
import Carousel from '../components/Carousel';
import ItemList from '../components/ProductList';
import {useSelector, useDispatch} from 'react-redux';
import {CreateCategories} from '../features/Categories/CategorySlice';
import {CreateProducts} from '../features/Products/ProductSlice';
import {AddProduct} from '../features/Cart/CartSlice';
import AsyncStorage from '@react-native-async-storage/async-storage';
import firestore from '@react-native-firebase/firestore';
const MainScreen = ({navigation}) => {
  const Cart = useSelector(state => state.cart.value);
  const dispatch = useDispatch();
  useEffect(() => {
    getCategories();
    GetProducts();
    SetCart();
  }, []);

  const getCategories = async () => {
    let list = [];
    list[0] = {title: 'Hepsi', isActive: true};
    await firestore()
      .collection('products')
      .get()
      .then(querySnapshot => {
        querySnapshot.forEach(snapshot => {
          let data = snapshot.data();
          list.push({
            title: data.categoryName,
            isActive: false,
          });
        });
      });

    dispatch(CreateCategories(list));
  };

  const GetProducts = async () => {
    let list = [];
    await firestore()
      .collection('products')
      .get()
      .then(querySnapshot => {
        querySnapshot.forEach(snapshot => {
          let data = snapshot.data();
          data.products.map(product => {
            list.push(product);
          });
        });
      });
    dispatch(CreateProducts(list));
  };

  const SetCart = async () => {
    const CartStorage = await AsyncStorage.getItem('LocalStorageCart');
    const jsonCart = JSON.parse(CartStorage);
    jsonCart.map(item => dispatch(AddProduct(item)));
  };
  return (
    <SafeAreaView className="flex-1">
      <View className="flex-1 p-7">
        <Header
          title={Strings.discoverProducts}
          firstIcon={Icons.shoppingBagIcon}
          firstIconOnpress={() => {
            navigation.navigate('Cart');
          }}
        />
        <Carousel />
        <ItemList show={true} navigation={navigation} showTitle={true} />
      </View>
    </SafeAreaView>
  );
};

export default MainScreen;
