import {View, Text, FlatList, TouchableOpacity} from 'react-native';
import React, {useState, useEffect} from 'react';
import {SafeAreaView} from 'react-native-safe-area-context';
import Strings from '../statics/Strings';
import Header from '../components/Header';
import auth from '@react-native-firebase/auth';
import ShoppingListItem from '../components/ShoppingListItem';
import {useSelector, useDispatch} from 'react-redux';
import {deleteProduct, changeCount} from './../features/Cart/CartSlice';
import AsyncStorage from '@react-native-async-storage/async-storage';
const ShoppingCartScreen = () => {
  const [shoppingList, setshoppingList] = useState([]);
  const [itemCount, setitemCount] = useState(1);
  const [totalPrice, settotalPrice] = useState(0);
  const [userData, setuserData] = useState({});
  const Cart = useSelector(state => state.cart.value);
  const {User} = useSelector(state => state.user);
  const dispatch = useDispatch();
  const onDelete = item => {
    dispatch(deleteProduct(item));
  };
  const renderShoppingList = ({item}) => {
    return (
      <ShoppingListItem
        product={item}
        onDelete={onDelete}
        ChangeCount={onChangeCount}
        itemCount={itemCount}
      />
    );
  };

  useEffect(() => {
    let totalP = 0;
    if (true) {
      if (Cart.length > 0) {
        for (let i = 0; i < Cart.length; i++) {
          totalP = totalP + Cart[i].productPrice * Cart[i].count;
        }
      }
      if (true) {
        settotalPrice(totalP ? totalP : 0);
      }
    }
    storeData();
  }, [Cart]);

  const storeData = async () => {
    try {
      const jsonValue = JSON.stringify(Object(Cart));
      await AsyncStorage.setItem('LocalStorageCart', jsonValue);
    } catch (e) {
      // saving error
    }
  };

  const onChangeCount = (item, Count) => {
    dispatch(changeCount({productId: item.productId, count: Count}));
    storeData();
  };
  // User varsa Sepeti gönder yoksa üye olmasını sağla.
  const onPressSendCart = () => {
    if (auth().currentUser) {
      console.log('Sepeti Gönder');
    } else {
      console.log('Sepeti Gönderme');
    }
  };

  return (
    <SafeAreaView className="flex-1 ">
      <View className="flex-1 p-7">
        <Header
          title={Strings.shoppingCartTitle}
          totalPrice={totalPrice.toString()}
        />
        {
          <FlatList
            data={Cart}
            renderItem={renderShoppingList}
            showsVerticalScrollIndicator={false}
          />
        }
      </View>
      {Cart.length > 0 && (
        <TouchableOpacity
          onPress={onPressSendCart}
          className="items-center  bg-greenButtonColor w-auto  mb-4 mx-10 p-4 rounded-xl">
          <Text className="text-white font-bold">Alışverişi Tamamla</Text>
        </TouchableOpacity>
      )}
    </SafeAreaView>
  );
};

export default ShoppingCartScreen;
