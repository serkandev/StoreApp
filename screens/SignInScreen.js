import {View, Text, TextInput, TouchableOpacity} from 'react-native';
import React, {useState} from 'react';
import auth from '@react-native-firebase/auth';
import firestore from '@react-native-firebase/firestore';
import {useDispatch} from 'react-redux';
import {createUser} from '../features/User/UserSlice';
const SignInScreen = ({navigation}) => {
  const [userMail, setuserMail] = useState('');
  const [userPassword, setuserPassword] = useState('');
  const [userName, setuserName] = useState('');
  const [errorMessage, seterrorMessage] = useState('');
  const Capitalize = str => {
    return str.charAt(0).toUpperCase() + str.slice(1);
  };

  const dispatch = useDispatch();
  const signIn = () => {
    if (userMail != '' && userPassword != '' && userName != '') {
      auth()
        .createUserWithEmailAndPassword(userMail, userPassword)
        .then(result => {
          const user = auth().currentUser;
          firestore()
            .collection('users')
            .doc(Capitalize(userMail))
            .set({
              name: userName,
              cart: [],
              orders: [],
            })
            .then(() => {
              console.log('hata');
              navigation.navigate('Profile');
              dispatch(createUser({name: userName, mail: userMail}));
            });

          return user.updateProfile({
            displayName: userName,
            photoURL: '200214812401248',
          });
        })
        .catch(error => {
          if (error.code === 'auth/email-already-in-use') {
            seterrorMessage('Bu Mail zaten kullanılıyor.');
          }

          if (error.code === 'auth/invalid-email') {
            seterrorMessage('Mail adresi geçersiz.');
          }
        });
    } else {
      seterrorMessage('Lütfen Alanları Doldurun.');
    }
  };
  return (
    <View className=" justify-center ">
      <View className="justify-center items-center">
        <Text className="font-bold text-lg ">Üyelik Oluştur</Text>
      </View>
      <View>
        <View className="mt-5">
          <Text className="font-semibold text-md">Kullanıcı Adı</Text>
          <TextInput
            className="bg-white h-10 mt-2 rounded-md border"
            onChangeText={setuserName}
          />
        </View>
        <View className="mt-5">
          <Text className="font-semibold text-md">E-Mail</Text>
          <TextInput
            className="bg-white h-10 mt-2 rounded-md border"
            onChangeText={setuserMail}
          />
        </View>
        <View className="mt-5">
          <Text className="font-semibold text-md">Şifre</Text>
          <TextInput
            className="bg-white h-10 mt-2 rounded-md border"
            onChangeText={setuserPassword}
          />
        </View>
        <View className="mt-5">
          <Text className="font-semibold text-md">Müşteri Yöneticisi Seç:</Text>
          <TextInput
            className="bg-white h-10 mt-2 rounded-md border"
            onChangeText={setuserPassword}
          />
        </View>
        <View className="mt-5">
          <TouchableOpacity
            className="bg-greenButtonColor h-10 rounded-md justify-center items-center"
            onPress={signIn}>
            <Text className="text-white font-bold text-md">Kayıt Ol</Text>
          </TouchableOpacity>
        </View>
        {errorMessage && (
          <View className="mt-5">
            <Text className="text-redbuttonColor font-semibold text-md">
              {errorMessage}
            </Text>
          </View>
        )}
      </View>
    </View>
  );
};

export default SignInScreen;
