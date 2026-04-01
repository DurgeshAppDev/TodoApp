import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import HomeScreen from '../screens/HomeScreen';
import Profile from '../screens/Profile';
const Stack = createNativeStackNavigator();

const AppNavigator = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="Home" component={HomeScreen} options={{title:'Home'}} />
        <Stack.Screen name="Profile" component={Profile} option={{title:'User Profile'}} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};


export default AppNavigator;