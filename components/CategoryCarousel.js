import {
  View,
  Text,
  FlatList,
  TouchableWithoutFeedback,
  TouchableOpacity,
} from 'react-native';
import React, {useEffect, useState} from 'react';
import Strings from '../statics/Strings';
import CategoryCarouselItem from './CategoryCarouselItem';
import firestore from '@react-native-firebase/firestore';
import {useSelector, useDispatch} from 'react-redux';
import {selectCategorie} from '../features/Categories/CategorySlice';
const CategoryCarousel = ({onPressCategory, show, navigation, showTitle}) => {
  const {Categories} = useSelector(state => state.categories);
  const [categoryList, setcategoryList] = useState([]);
  const dispatch = useDispatch();
  const selectCategory = item => {
    dispatch(selectCategorie(item));
  };
  const getCategories = async () => {
    setcategoryList(Categories);
  };
  useEffect(() => {
    getCategories();
  }, []);

  const renderCategoryCarousel = ({item}) => {
    return (
      <CategoryCarouselItem
        onPressCategory={onPressCategory}
        item={item}
        onPress={selectCategory}
      />
    );
  };
  // show carousel
  if (show) {
    return (
      <TouchableWithoutFeedback>
        <View className="mt-5">
          <View className="flex-row  justify-between ">
            <Text className="pl-2 text-lg  font-medium ">
              {Strings.categoryListTitle}
            </Text>
            <TouchableOpacity
              onPress={() => {
                navigation.navigate('Categories');
              }}>
              {showTitle && (
                <Text className="pl-2 text-sm font-bold  text-greenButtonColor ">
                  Tamamı
                </Text>
              )}
            </TouchableOpacity>
          </View>
          <FlatList
            showsHorizontalScrollIndicator={false}
            data={Categories}
            renderItem={renderCategoryCarousel}
            horizontal
          />
        </View>
      </TouchableWithoutFeedback>
    );
  } else {
    return <></>;
  }
};

export default CategoryCarousel;
