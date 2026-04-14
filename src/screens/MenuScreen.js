import { View, Text, TouchableOpacity } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import auth from '@react-native-firebase/auth';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';

const MenuScreen = ({ navigation }) => {
  const handleLogout = async () => {
    await auth().signOut();
  };

  return (
    <SafeAreaView className="m-1 bg-white flex-1 ">
      <TouchableOpacity
        className=" ml-2 mr-2 rounded-lg bg-amber-500 h-12 w-auto font-bold justify-center"
        onPress={() => navigation.replace('CompletedTask')}
      >
        <Text className=" text-center text-xl text-white ">Completed Task</Text>
      </TouchableOpacity>

      <TouchableOpacity
        className=" mt-3 ml-2 mr-2 rounded-lg bg-amber-500 font-bold h-12 w-auto justify-center"
        onPress={() => navigation.replace('NotCompletedTask')}
      >
        <Text className=" text-center text-xl text-white ">
          Not Completed Task
        </Text>
      </TouchableOpacity>

      <TouchableOpacity
        className=" mt-3 ml-2 mr-2 rounded-lg bg-amber-500 h-12 w-auto font-bold justify-center"
        onPress={() => navigation.replace('AboutUs')}
      >
        <Text className=" text-center text-xl text-white ">About Us</Text>
      </TouchableOpacity>
      <TouchableOpacity
        className=" mt-3 ml-2 mr-2 rounded-lg bg-amber-500 h-12 w-auto font-bold justify-center "
        onPress={handleLogout}
      >
        <Text className=" text-center text-xl text-white ">Logout</Text>
      </TouchableOpacity>
    </SafeAreaView>
  );
};

export default MenuScreen;
