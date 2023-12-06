import {
  View,
  Text,
  SafeAreaView,
  TextInput,
  TouchableOpacity,
} from 'react-native';
import React, {useState} from 'react';
import auth from '@react-native-firebase/auth';
import {useDispatch} from 'react-redux';
import {createUser} from '../features/User/UserSlice';
const SignUpScreen = ({navigation}) => {
  const [userPassword, setuserPassword] = useState('');
  const [userMail, setuserMail] = useState('');
  const [errorMessage, seterrorMessage] = useState('');
  const dispatch = useDispatch();
  const signUp = () => {
    const user = auth().currentUser;
    if (userMail != '' && userPassword != '') {
      auth()
        .signInWithEmailAndPassword(userMail, userPassword)
        .then(() => {
          navigation.navigate('Home');
          dispatch(createUser({userName: 'V', mail: userMail}));
        })
        .catch(error => {
          if (error.code === 'auth/email-already-in-use') {
            seterrorMessage('Bu Mail zaten kullanılıyor.');
          } else if (error.code === 'auth/invalid-email') {
            seterrorMessage('Mail adresi geçersiz.');
          } else {
            seterrorMessage('Bilgileri Kontrol Edin');
            console.log(error);
          }
        });
    } else {
      seterrorMessage('Lütfen Alanları Doldurun.');
    }
  };
  return (
    <View className=" justify-center ">
      <View className="justify-center items-center">
        <Text className="font-bold text-lg ">Giriş Yap</Text>
      </View>
      <View>
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
          <TouchableOpacity
            className="bg-greenButtonColor h-10 rounded-md justify-center items-center"
            onPress={signUp}>
            <Text className="text-white font-bold text-md">Giriş Yap</Text>
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

export default SignUpScreen;
