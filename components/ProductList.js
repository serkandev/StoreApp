import {View, FlatList} from 'react-native';
import React, {useEffect, useState} from 'react';
import ProductCard from './ProductCard';
import CategoryCarousel from './CategoryCarousel';
import {useSelector, useDispatch} from 'react-redux';
import {AddProduct} from './../features/Cart/CartSlice';

const ItemList = ({SearchProductName, show, navigation, showTitle}) => {
  const {Products} = useSelector(state => state.products);
  const Cart = useSelector(state => state.cart.value);
  const [shownProducts, setshownProducts] = useState();
  const dispatch = useDispatch();

  useEffect(() => {
    setshownProducts(Products);
  }, [Products]);

  useEffect(() => {
    if (SearchProductName) {
      filterList();
    }
  }, [SearchProductName]);

  const renderProductList = ({item}) => {
    return (
      <ProductCard
        product={item}
        onPressAdd={() => {
          onPressAddCart(item);
        }}
      />
    );
  };

  const onPressAddCart = product => {
    dispatch(AddProduct(product));
    console.log(Cart);
  };

  const filterList = text => {
    const filteredList = Products.filter(item => {
      return item.productName.includes(SearchProductName);
    });

    setshownProducts(filteredList);
  };
  const onPressCategory = item => {
    let newArray = Products.filter(
      product => product.productCategory === item.title,
    );
    if (item.title == 'Hepsi') {
      setshownProducts(Products);
    } else {
      setshownProducts(newArray);
    }
  };

  return (
    <View className="flex-1 mt-3">
      <CategoryCarousel
        onPressCategory={onPressCategory}
        show={show}
        navigation={navigation}
        showTitle={showTitle}
      />
      <View className=" flex-1 mt-3">
        <FlatList
          data={shownProducts}
          renderItem={renderProductList}
          showsVerticalScrollIndicator={false}
        />
      </View>
    </View>
  );
};

export default ItemList;
