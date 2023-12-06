import {View, Text, Image, TouchableOpacity} from 'react-native';
import React, {useState, useEffect} from 'react';
import {FontAwesomeIcon} from '@fortawesome/react-native-fontawesome';
import Icons from '../statics/Icons';
import firestore from '@react-native-firebase/firestore';
import Modal from 'react-native-modal';
import Header from './Header';

import Colors from '../statics/Colors';
const ProductCard = ({product, onPressAdd}) => {
  const [isModalVisible, setModalVisible] = useState(false);

  const toggleModal = () => {
    setModalVisible(!isModalVisible);
  };

  return (
    <View className="h-36  rounded-xl flex-row  shadow-sm  shadow-slate-400   mt-3 p-3 bg-defaultWhiteTextColor ">
      <View className="items-center justify-center">
        <Image
          className="w-24 h-24"
          style={{resizeMode: 'contain'}}
          source={{
            uri: product.productImageUrl,
          }}
        />
      </View>
      <View className=" flex-1 flex-col mx-3  justify-between      ">
        <View>
          <View className="flex-row justify-between ">
            <Text className="font-bold">{product.productName}</Text>
            {product.isBestSeller && (
              <View className="border p-1 rounded-xl bg-black">
                <FontAwesomeIcon
                  style={{color: Colors.starIconcolor}}
                  icon={Icons.running}
                />
              </View>
            )}
          </View>
          <View className="mt-2">
            <Text className=" text-SecondTitleColor">
              {product.productDescription}
            </Text>
          </View>
        </View>
        <View className="flex-row justify-between items-center">
          <Text className="text-xl font-bold">{product.productPrice} $</Text>
          <View className="flex-row ">
            <TouchableOpacity
              className=" bg-greenButtonColor p-1 rounded"
              onPress={onPressAdd}>
              <FontAwesomeIcon color="white" icon={Icons.plusIcon} />
            </TouchableOpacity>
            <TouchableOpacity
              className=" bg-greenButtonColor p-1 rounded ml-2"
              onPress={toggleModal}>
              <FontAwesomeIcon color="white" icon={Icons.discover} />
            </TouchableOpacity>
          </View>
        </View>
      </View>
      <Modal isVisible={isModalVisible}>
        <View className="h-auto bg-white rounded-xl  p-8 flex-col">
          <View className="flex-row justify-between items-end">
            <View></View>
            <TouchableOpacity onPress={toggleModal}>
              <FontAwesomeIcon
                size={20}
                icon={Icons.XMark}
                color={Colors.redbuttonColor}
              />
            </TouchableOpacity>
          </View>
          <View className="justify-center items-center">
            <View className="items-center justify-center">
              <Image
                className="w-48 h-48"
                style={{resizeMode: 'contain'}}
                source={{
                  uri: product.productImageUrl,
                }}
              />
            </View>
            <View>
              <Text className="font-bold text-xl">{product.productName}</Text>
            </View>
            <View className="mt-2">
              <Text className=" text-SecondTitleColor">
                {product.productDescription}
              </Text>
            </View>
            <Text className="text-lg font-bold mt-2 mb-2">
              {product.productPrice} $
            </Text>
            <TouchableOpacity className="bg-greenButtonColor p-2 mt-2 rounded-md w-36 items-center justify-center flex-row">
              <Text className="text-white font-bold mr-2">Sepete Ekle</Text>
              <FontAwesomeIcon
                icon={Icons.shoppingBagIcon}
                color={Colors.defaultWhiteTextColor}
              />
            </TouchableOpacity>
          </View>
        </View>
      </Modal>
    </View>
  );
};

export default ProductCard;
