import {View, Text, StyleSheet, TouchableOpacity} from 'react-native';
import React from 'react';
import {FontAwesomeIcon} from '@fortawesome/react-native-fontawesome';
import Icons from '../statics/Icons';
const Header = ({
  title,
  firstIcon,
  firstIconOnpress,
  secondIcon,
  secondItemOnPress,
  navigation,
  totalPrice,
}) => {
  return (
    <View className="flex-row justify-between items-center">
      <Text className="font-medium text-xl">{title}</Text>
      <View>
        {firstIcon && (
          <TouchableOpacity
            className="p-2 border rounded-full"
            onPress={firstIconOnpress}>
            <FontAwesomeIcon icon={firstIcon} />
          </TouchableOpacity>
        )}
        {totalPrice && (
          <TouchableOpacity
            className="p-2 border rounded-full "
            onPress={firstIconOnpress}>
            <View className="flex-row">
              <Text className="mr-1"> {totalPrice} $ </Text>
              <FontAwesomeIcon icon={Icons.shoppingBagIcon} />
            </View>
          </TouchableOpacity>
        )}
      </View>
    </View>
  );
};

const styles = StyleSheet.create({});

export default Header;
