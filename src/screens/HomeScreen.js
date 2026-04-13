import { useEffect, useState } from 'react';
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
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';

const HomeScreen = ({ navigation }) => {
  const [newTask, setNewTask] = useState('');
  const [tasks, setTasks] = useState([]);

  // add new task
  const AddTask = async () => {
    if (!newTask) {
      Alert.alert('Error', 'Please Enter a Task');
      return;
    }
    const user = auth().currentUser;

    if (!user) {
      Alert.alert('Error', 'User Not Logged In');
      return;
    }

    try {
      await database().ref(`/tasks/${user.uid}`).push({
        title: newTask,
        completed: false,
        createdAt: new Date().toISOString(),
      });
      setNewTask('');
      Alert.alert('Success', 'Task Added Successfully');
    } catch (error) {
      Alert.alert('Error', error.message);
    }
  };

  useEffect(() => {
    const user = auth().currentUser;
    if (!user) return;

    const userId = user.uid;
    const taskRef = database().ref(`/tasks/${user.uid}`);
    const onValueChange = taskRef.on('value', snapshot => {
      const data = snapshot.val();
      if (data) {
        const taskList = Object.keys(data).map(key => ({
          id: key,
          ...data[key],
        }));

        setTasks(taskList);
      } else {
        setTasks([]);
      }
    });
    return () => taskRef.off('value', onValueChange);
  }, []);

  const handleTask = async taskId => {
    const userId = auth().currentUser.uid;
    try {
      await database().ref(`/tasks/${userId}/${taskId}`).remove();
    } catch (error) {
      Alert.alert('Error', error.message);
    }
  };

  const toggleComplete = async (taskId, currentStatus) => {
    const userId = auth().currentUser.uid;

    try {
      await database().ref(`/tasks/${userId}/${taskId}`).update({
        completed: !currentStatus,
      });
    } catch (error) {
      Alert.alert('Error', error.message);
    }
  };
  const handleLogout = async () => {
    await auth().signOut();
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
        value={newTask}
        onChangeText={setNewTask}
      />

      <View className="items-center">
        <TouchableOpacity
          className=" rounded-lg border-orange-300 h-12 w-24 justify-center bg-amber-500"
          onPress={AddTask}
        >
          <Text className="text-center text-xl text-white font-bold">ADD</Text>
        </TouchableOpacity>
        <TouchableOpacity
          onPress={handleLogout}
          className=" rounded-lg border-orange-300 h-12 w-24 justify-center bg-amber-500 mb-15"
        >
          <Text className="text-center text-xl text-white font-bold ">
            Logout
          </Text>
        </TouchableOpacity>

        <View>
          <FlatList
            data={tasks}
            keyExtractor={item => item.id}
            renderItem={({ item }) => (
              <View className="flex-row items-center justify-between m-2 ">
                <View className="rounded-xl h-12 w-80 justify-center m-1 bg-amber-500">
                  <Text
                    className={`text-center text-white font-bold text-xl se ${
                      item.completed ? 'text-gray-400 line-through ' : ''
                    }`}
                  >
                    {item.title}
                  </Text>
                </View>

                <TouchableOpacity
                  onPress={() => toggleComplete(item.id, item.completed)}
                  className="h-12 w-16 justify-center ml-3"
                >
                  {item.completed ? (
                    <MaterialIcons
                      className="justify-center "
                      name="check-box"
                      size={35}
                      color="#fdba74"
                    />
                  ) : (
                    <MaterialIcons
                      className="justify-center"
                      name="check-box-outline-blank"
                      size={35}
                      color="#fdba74"
                    />
                  )}
                </TouchableOpacity>

                <TouchableOpacity
                  onPress={() => handleTask(item.id)}
                  className=" h-12 w-16 justify-center"
                >
                  <MaterialIcons
                    className="justify-center"
                    name="delete"
                    size={35}
                    color="#ef4444"
                  />
                </TouchableOpacity>
              </View>
            )}
          />
        </View>
      </View>
    </SafeAreaView>
  );
};

export default HomeScreen;
