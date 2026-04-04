import { useState } from 'react';
import {
  View,
  Text,
  TouchableOpacity,
  TextInput,
  FlatList,
  ScrollView,
  Alert,
} from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import auth from '@react-native-firebase/auth';
import database from '@react-native-firebase/database';

const HomeScreen = ({ navigation }) => {
  const [newTask, setNewTask] = useState('');
  const [taskComplete, setTaskComplete] = useState(false);
  const [deleteTask, setDeleteTask] = useState(false);

  const AddTask = async () => {
    if (!newTask) {
      Alert.alert('Error', 'Please Enter a Task');
      return;
    }
    const user = auth().currentUser;

    if (!user) {
      Alert.alert('Error', 'User Not Logged In');
    }

    try {
      await database().ref(`/tasks/${userId}`).push({
        title: newTask,
        completed: false,
        createdAt: new Date().toISOString(),
      });
      setNewTask('');
      Alert.alert('Success', 'Task Added Successfully');
    } catch (erro) {
      Alert.alert('Error', error.message);
    }
  };

  return (
    <SafeAreaView className="flex-1 bg-white p-1 m-0.5 ">
      <View className="items-center">
        <Text className="text-left text-blue-400 text-4xl font-bold mb-6">
          Tasks
        </Text>
      </View>

      <TextInput
        className="border border-orange-400 rounded-xl px-4 py-3 text-lg mb-5 bg-white shadow-lg"
        placeholder="enter your task"
        onChangeText={task => setNewTask(task)}
      />

      <View className="items-center">
        <TouchableOpacity
          className=" rounded-lg border-orange-300 h-12 w-24 justify-center bg-amber-500"
          onPress={() => {}}
        >
          <Text className="text-center text-xl text-white font-bold">ADD</Text>
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  );
};

export default HomeScreen;

{
  /* <ScrollView>
      <View className="flex-row ">
        <View className=" border rounded-xl h-12 w-64 m-2 ">
          <Text classNaem=" text-center px-1 py-1 ">hello world</Text>
        </View>
        <TouchableOpacity className=" border rounded-xl border-orange-400 h-12 w-20 m-1 justify-center bg-orange-400 ">
          <Text className="text-center font-bold text-white">DONE</Text>
        </TouchableOpacity>
        <TouchableOpacity className=" border rounded-xl border-orange-400 h-12 w-20 m-1 justify-center bg-orange-400 ">
          <Text className="text-center font-bold text-white">Del</Text>
        </TouchableOpacity>
      </View>
      </ScrollView>
      <FlatList></FlatList>*/
}
