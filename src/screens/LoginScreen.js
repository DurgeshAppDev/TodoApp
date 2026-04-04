import { useState } from 'react';
import { View, Text, TouchableOpacity, TextInput, Alert,} from 'react-native';
import {SafeAreaView} from 'react-native-safe-area-context';
import auth from '@react-native-firebase/auth';

const LoginScreen = ({ navigation }) => {
  const [userName, setUserName] = useState('');
  const [userPassword, setUserPassword] = useState('');

  const handleLogin = async () => {
    if (!userName || !userPassword) {
      Alert.alert('Error', 'Please enter email and password');
      return;
    }
    try{
     const userCredential = await auth().signInWithEmailAndPassword(
        userName,
        userPassword
      );
      navigation.replace('Home')
    }
    catch (error){
        Alert.alert("Login Error ",error.message);
    }
  };

  return (
    <SafeAreaView className="flex-1 justify-center align-middle  bg-orange-400">
      <View className=" border border-orange-300 bg-white rounded-xl m-2 p-5 h-100 w-auto">
        <Text className=" text-center text-3xl font-bold text-orange-400 mb-20 mt-10">
          SignIn
        </Text>

        <TextInput
          className="text-center border rounded-xl border-orange-400 text-1xl mb-6"
          placeholder="Enter Emailid Name"
          onChangeText={(value)=>setUserName(value)}
        />

        <TextInput
          className=" text-center border rounded-xl border-orange-400 text-1xl mb-5"
          placeholder="enter your Password"
          secureTextEntry
          onChangeText={(value)=>setUserPassword(value)}
        />
        <View className="items-center">
          <TouchableOpacity
            className="border rounded-xl border-orange-300 h-9 w-20 justify-center bg-amber-400"
            onPress={handleLogin}
          >
            <Text className="text-center font-bold text-white">LOGIN</Text>
          </TouchableOpacity>
        </View>
      </View>
    </SafeAreaView>
  );
};

export default LoginScreen;
