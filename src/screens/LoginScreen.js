import { useState } from 'react';
import { View, Text, TouchableOpacity, TextInput, Alert } from 'react-native';
import auth from '@react-native-firebase/auth';

const Login = ({ navigation }) => {
  const [userName, setUserName] = useState('');
  const [userPassword, setUserPassword] = useState('');

  const handleLogin = async () => {
    if (!userName || !userPassword) {
      Alert.alert('Error', 'Please enter email and password');
      return;
    }
    try{
      const userCredential = await auth.signInWithEmailAndPassword(
        userName,
        userPassword
      ) ;
      
      console.log("user uid", userCredential.user.uid);

      navigation.replace('Home')
    }
    catch (error){
        Alert.alert("Login Error ",error.message);
    }
  };

  return (
    <View className="flex-1 justify-items-start align-middle">
      <View className="m-2 p-5 ">
        <Text className=" text-center text-3xl text-orange-500 mb-4">
          Login
        </Text>

        <TextInput
          className="text-center border rounded-xl border-orange-200 text-1xl mb-5"
          placeholder="Enter User Name"
          onChangeText={setUserName}
        />

        <TextInput
          className=" text-center border rounded-xl border-orange-200 text-1xl mb-5"
          placeholder="enter your Password"
          secureTextEntry
          onChangeText={setUserPassword}
        />
        <View className="items-center">
          <TouchableOpacity
            className="border rounded-xl border-orange-300 h-9 w-20 justify-center bg-amber-500"
            onPress={handleLogin}
          >
            <Text className="text-center">Login</Text>
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
};

export default Login;
