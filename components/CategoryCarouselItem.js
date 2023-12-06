import {View, Text, TouchableWithoutFeedback} from 'react-native';
import React from 'react';
import Colors from '../statics/Colors';

const CategoryCarouselItem = ({item, onPress, onPressCategory}) => {
  return (
    <TouchableWithoutFeedback
      onPress={() => {
        onPress(item);
        onPressCategory(item);
      }}>
      <View
        style={{
          backgroundColor: item.isActive
            ? Colors.greenButtonColor
            : Colors.mainBackgroundColor,
          borderWidth: !item.isActive ? 2 : 0,
        }}
        className="h-11 mt-3 justify-center p-3 items-center rounded-xl  mx-2">
        <Text
          style={{
            color: item.isActive
              ? Colors.defaultWhiteTextColor
              : Colors.defaultBlackTextColor,
          }}
          className="text-md font-mono">
          {item.title}
        </Text>
      </View>
    </TouchableWithoutFeedback>
  );
};

export default CategoryCarouselItem;
