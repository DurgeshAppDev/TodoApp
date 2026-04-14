import { useEffect, useState } from 'react';
import { View, Text, FlatList } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import auth from '@react-native-firebase/auth';
import database from '@react-native-firebase/database';

const NotCompletedTaskScreen = () => {
  const [tasks, setTasks] = useState([]);

  useEffect(() => {
    const user = auth().currentUser;
    if (!user) return;

    const ref = database().ref(`/tasks/${user.uid}`);
    const listener = ref.on('value', snapshot => {
      const data = snapshot.val();

      if (data) {
        const taskList = Object.keys(data).map(key => ({
          id: key,
          ...data[key],
        }));

        const completed = taskList.filter(t => t.completed === false);

        setTasks(completed);
      } else {
        setTasks([]);
      }
    });

    return () => ref.off('value', listener);
  }, []);

  return (
    <SafeAreaView className="m-1 bg-white p-2 flex-1">
      <Text className="text-orange-400 text-xl mb-5 font-semibold text-center">
        Not Completed Tasks
      </Text>
      {tasks.length === 0 ? (
        <Text>Completed Tasks</Text>
      ) : (
        <FlatList
          data={tasks}
          keyExtractor={item => item.id}
          renderItem={({ item }) => (
            <View className="rounded-xl h-12 w-auto justify-center m-1 bg-amber-500">
              <Text className="text-center text-white font-bold text-xl">
                {item.title}
              </Text>
            </View>
          )}
        />
      )}
    </SafeAreaView>
  );
};

export default NotCompletedTaskScreen;
