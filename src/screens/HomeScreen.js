import { useState } from 'react';
import { View, Text, TextInput, Button, TouchableOpacity,FlatList } from 'react-native';

const HomeScreen = ({ navigation }) => {
  const [taskComplete, setTaskComplete] = useState(false);
  const [deleteTask, setDeleteTask] = useState(false);
  return (
    <View className="flex-1 bg-white p-5 ">
      <Text className="text-left text-blue-400 text-4xl font-bold mb-6">
        Tasks
      </Text>
      <FlatList>
        
      </FlatList>     

      <TextInput
        className="border border-gray-300 rounded-lg p-3 mb-6 text-black"
        placeholder="enter your task"
      />

      <TouchableOpacity className="border rounded-lg border-gray-300 h-9 w-auto justify-center bg-amber-500"
      onPress={()=>{}}>
        <Text className="text-center text-xl">ADD</Text>
      </TouchableOpacity>

      {/* <Button title="Profile" onPress={() => navigation.navigate('Profile')} /> */}
    </View>
  );
};

export default HomeScreen;
