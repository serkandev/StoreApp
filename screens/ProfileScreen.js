import {View, Text, SafeAreaView, TouchableOpacity} from 'react-native';
import React, {useState, useEffect} from 'react';
import Header from '../components/Header';
import Strings from '../statics/Strings';
import Icons from '../statics/Icons';
import SignInScreen from './SignInScreen';
import SignUpScreen from './SignUpScreen';
import auth from '@react-native-firebase/auth';
import {useDispatch, useSelector} from 'react-redux';
import {deleteUser} from '../features/User/UserSlice';
const ProfileScreen = ({navigation}) => {
  const [isUser, setisUser] = useState(false);
  const [initializing, setInitializing] = useState(true);
  const [isAuth, setisAuth] = useState();
  const {User} = useSelector(state => state.user);

  const dispatch = useDispatch();
  useEffect(() => {
    const subscriber = auth().onAuthStateChanged(onAuthStateChanged);
    return subscriber; // unsubscribe on unmount
  }, []);

  function onAuthStateChanged(user) {
    setisAuth(user);
    if (initializing) setInitializing(false);
  }
  console.log(User);
  return (
    <SafeAreaView className="flex-1">
      {!isAuth ? (
        <View className="flex-1 p-8 ">
          <Header
            title={Strings.profilePageTitle}
            firstIcon={Icons.shoppingBagIcon}
            firstIconOnpress={() => {
              navigation.navigate('Cart');
            }}
          />
          <View className=" flex-1 justify-center">
            {isUser ? (
              <SignUpScreen navigation={navigation} />
            ) : (
              <SignInScreen navigation={navigation} />
            )}

            <TouchableOpacity
              className="mt-5 items-center"
              onPress={() => {
                setisUser(!isUser);
              }}>
              <Text>
                {!isUser ? 'Zaten Hesabın var mı?' : 'Hesabın yok mu?'}
              </Text>
            </TouchableOpacity>
          </View>
        </View>
      ) : (
        <View className="flex-1 p-8">
          <Header
            title={'Profilim'}
            firstIcon={Icons.logout}
            firstIconOnpress={() => {
              auth()
                .signOut()
                .then(() => dispatch(deleteUser()));
            }}
          />

          <View className="mt-5">
            <Text className="font-bold text-lg">Siparişlerin</Text>
            <Text>Henüz siparişin yok.</Text>
          </View>
        </View>
      )}
    </SafeAreaView>
  );
};

export default ProfileScreen;
