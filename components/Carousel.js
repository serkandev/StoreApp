import {View, Text, FlatList} from 'react-native';
import React from 'react';
import CarouselItem from './CarouselItem';
import carouselItems from '../statics/CarouselItems';
const Carousel = () => {
  const renderCarouselItems = ({item}) => {
    return <CarouselItem imageUrl={item.imageUrl} />;
  };
  return (
    <View className="mt-8 h-48 w-screen justify-center">
      <FlatList
        showsHorizontalScrollIndicator={false}
        horizontal
        data={carouselItems}
        renderItem={renderCarouselItems}
      />
    </View>
  );
};

export default Carousel;
