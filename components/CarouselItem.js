import {View, Text, Image} from 'react-native';
import React from 'react';

const CarouselItem = ({imageUrl, nav}) => {
  return (
    <View className="flex-1 w-screen  justify-center justify-items-stretch ">
      <Image
        className="h-48 w-10/12  w-50  bg-contain rounded-3xl"
        source={{uri: imageUrl}}
      />
    </View>
  );
};

export default CarouselItem;
