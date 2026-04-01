import React from 'react';
import { View, Text, TextInput, Button } from 'react-native';
const HomeScreen = ({ navigation }) => {
  return (
    <View className="flex-1 bg-white p-5 justify-center">
      <Text className="text-center text-blue-400 text-4x1 font-bold mb-6" >
        Home Screen
      </Text>
      <TextInput
        className="border border-gray-300 rounded-lg p-3 mb-6 text-black  text-lg"
        placeholder="enter your task"
      />
      <Button title="Profile" onPress={() => navigation.navigate('Profile')} />
    </View>
  );
};

export default HomeScreen;
