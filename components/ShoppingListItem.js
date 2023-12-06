import {View, Text, Image, TouchableOpacity, TextInput} from 'react-native';
import React, {useState, useEffect} from 'react';
import {FontAwesomeIcon} from '@fortawesome/react-native-fontawesome';
import Icons from '../statics/Icons';
import firestore from '@react-native-firebase/firestore';
import Modal from 'react-native-modal';
import auth from '@react-native-firebase/auth';
import Colors from '../statics/Colors';
import InputSpinner from 'react-native-input-spinner';
const ShoppingListItem = ({product, onDelete, ChangeCount}) => {
  const [isModalVisible, setModalVisible] = useState(false);
  const toggleModal = () => {
    setModalVisible(!isModalVisible);
  };
  const [Count, setCount] = useState(1);

  const onChangeText = text => {
    setCount(parseInt(text));
  };

  useEffect(() => {
    ChangeCount(product, Count);
  }, [Count]);
  return (
    <View className="h-36  rounded-xl flex-row   shadow-sm  shadow-slate-200   mt-3 p-3 bg-defaultWhiteTextColor ">
      <View className="items-center justify-center">
        <Image
          className="w-24 h-24"
          style={{resizeMode: 'contain'}}
          source={{
            uri: product.productImageUrl,
          }}
        />
      </View>
      <View className=" flex-1 flex-col justify-between mr-3 ">
        <View>
          <View className="flex-row justify-between ">
            <Text className="font-bold">{product.productName}</Text>
            <View className="flex-row  ">
              <TouchableOpacity
                className=" bg-redbuttonColor  p-1 -mr-5 rounded"
                onPress={() => {
                  onDelete(product);
                }}>
                <FontAwesomeIcon color="white" icon={Icons.XMark} />
              </TouchableOpacity>
            </View>
          </View>
          <View className="mt-2">
            <Text className=" text-SecondTitleColor">
              {product.productDescription}
            </Text>
          </View>
        </View>
        <View className="flex-row justify-between items-center">
          <Text className="text-xl font-bold">{product.productPrice} $</Text>

          <InputSpinner
            height={20}
            buttonTextStyle={{
              fontSize: 15,
              alignSelf: 'center',
              alignItems: 'center',
              justifyContent: 'center',
              width: 24,
              height: 24,
            }}
            buttonStyle={{
              lineHeight: 24,

              marginHorizontal: 5,
              justifyContent: 'center',
              alignContent: 'center',
              alignItems: 'center',
              width: 24,
              height: 24,
            }}
            inputStyle={{
              fontSize: 15,
              flexDirection: 'row',
              justifyContent: 'center',
              alignContent: 'center',
              width: 24,
              height: 48,

              alignItems: 'center',
            }}
            textColor="#000"
            rounded={false}
            className="w-10"
            max={1000}
            min={1}
            step={1}
            colorMax={'#f04048'}
            colorMin={'#40c5f4'}
            value={Count}
            onChange={num => {
              onChangeText(num);
            }}
          />
        </View>
      </View>
      <Modal isVisible={isModalVisible}>
        <View className="h-auto bg-white rounded-xl  p-8 flex-col">
          <View className="flex-row justify-between items-end">
            <View></View>
            <TouchableOpacity onPress={toggleModal} onPressIn={onDelete}>
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
              <Text className="text-white font-bold mr-2">Bilgi Al</Text>
              <FontAwesomeIcon
                icon={Icons.WhatsApp}
                size={18}
                color={Colors.defaultWhiteTextColor}
              />
            </TouchableOpacity>
          </View>
        </View>
      </Modal>
    </View>
  );
};

export default ShoppingListItem;
