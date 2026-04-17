import { useState } from 'react';
import {
  View,
  Text,
  TouchableOpacity,
  TextInput,
  Alert,
  KeyboardAvoidingView,
  ScrollView,
} from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import auth from '@react-native-firebase/auth';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';

const SignInScreen = ({ navigation }) => {
  const [userName, setUserName] = useState('');
  const [userPassword, setUserPassword] = useState('');

  const handleLogin = async () => {
    if (!userName || !userPassword) {
      Alert.alert('Error', 'Please enter email and password');
      return;
    }
    if (userPassword.length < 6) {
      Alert.alert('Enter atlest 6 Digit for password');
    }
    try {
      const userCredential = await auth().createUserWithEmailAndPassword(
        userName,
        userPassword,
      );
      navigation.replace('Home');
    } catch (error) {
      Alert.alert('Login Error ', error.message);
    }
  };

  return (
    <SafeAreaView className="flex-1 justify-center  item-center bg-white">
      <KeyboardAvoidingView className="flex-1">
        <ScrollView
          keyboardShouldPersistTaps="handled"
          contentContainerStyle={{
            flexGrow: 1,
            justifyContent: 'center',
          }}
        >
          <View className=" bg-orange-400 rounded-xl m-2 p-5 w-11/13 shadow-lg">
            <View className="justify-center items-center">
              <MaterialIcons name="account-circle" size={100} color="white" />
            </View>
            <Text className=" text-center text-3xl font-bold text-white mb-10 mt-1">
              SignIn
            </Text>

            <TextInput
              className="border border-white rounded-xl px-4 py-3 text-lg mb-5 bg-white shadow-lg"
              placeholder="Enter Emailid Name"
              onChangeText={value => setUserName(value)}
            />

            <TextInput
              className="border border-white rounded-xl px-4 py-3 text-lg mb-5 bg-white shadow-lg"
              placeholder="enter your Password"
              secureTextEntry
              onChangeText={value => setUserPassword(value)}
            />
            <View className="items-center mt-4 ">
              <TouchableOpacity
                className=" rounded-xl border-white h-12 w-24 justify-center bg-white "
                onPress={handleLogin}
              >
                <Text className="text-center font-bold text-orange-300">
                  SIGN UP
                </Text>
              </TouchableOpacity>
            </View>
          </View>
        </ScrollView>
      </KeyboardAvoidingView>
    </SafeAreaView>
  );
};

export default SignInScreen;
