import { View, Text } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';

const AboutScreen = () => {
  return (
    <SafeAreaView className=" flex-1 selection:only:m-1 p-5 bg-white">
      <Text className="text-center text-xl text-orange-400 font-bold mb-5 ">
        2-Do App
      </Text>
      <Text className=" text-orange-400 font-semibold text-1xl mb-5">
        This app helps you manage your daily tasks efficiently. You can add,
        delete, and mark tasks as completed.
      </Text>
      <Text className=" text-orange-400 font-semibold text-1xl ">
        Email: mrDurgeshKumar55@gmail.com
      </Text>
      <Text className=" text-black font-bold text-2xl text-center mt-10">
        © 2026 All Rights Reserved
      </Text>
    </SafeAreaView>
  );
};

export default AboutScreen;
