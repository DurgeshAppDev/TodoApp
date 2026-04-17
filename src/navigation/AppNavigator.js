import { useEffect, useState } from 'react';
import { TouchableOpacity } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import auth from '@react-native-firebase/auth';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';

import SignInScreen from '../screens/SignInScreen';
import LoginScreen from '../screens/LoginScreen';
import HomeScreen from '../screens/HomeScreen';
import MenuScreen from '../screens/MenuScreen';
import CompletedTaskScreen from '../screens/CompletedTaskScreen';
import NotCompletedTaskScreen from '../screens/NotCompletedTaskScreen';
import AboutScreen from '../screens/AboutScreen';
const Stack = createNativeStackNavigator();

const AppNavigator = () => {
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const subscriber = auth().onAuthStateChanged(user => {
      console.log('Auth User:', user);
      setUser(user);
      setLoading(false);
    });

    return subscriber;
  }, []);

  if (loading) return null;

  return (
    <NavigationContainer>
      <Stack.Navigator>
        {!user ? (
          <>
            <Stack.Screen
              name="Login"
              component={LoginScreen}
              options={{ headerShown: false }}
            />
            <Stack.Screen
              name="SignUp"
              component={SignInScreen}
              options={{ headerShown: true }}
            />
          </>
        ) : (
          <>
            <Stack.Screen
              name="Home"
              component={HomeScreen}
              options={({ navigation }) => ({
                headerTitle: 'Home',
                headerLeft: () => (
                  <MaterialIcons name="home" size={24} color="grey" />
                ),
                headerRight: () => (
                  <TouchableOpacity onPress={() => navigation.replace('Menu')}>
                    <MaterialIcons name="menu" size={24} color="grey" />
                  </TouchableOpacity>
                ),
              })}
            />
            <Stack.Screen
              name="Menu"
              component={MenuScreen}
              options={({ navigation }) => ({
                headerTitle: 'Menu',
                headerTitleAlign: 'center',
                headerLeft: () => (
                  <TouchableOpacity onPress={() => navigation.navigate('Home')}>
                    <MaterialIcons name="arrow-back" size={24} color="grey" />
                  </TouchableOpacity>
                ),
              })}
            />
            <Stack.Screen
              name="CompletedTask"
              component={CompletedTaskScreen}
              options={({ navigation }) => ({
                headerTitle: 'Completed Tasks',
                headerLeft: () => (
                  <TouchableOpacity onPress={() => navigation.navigate('Menu')}>
                    <MaterialIcons name="arrow-back" size={24} color="grey" />
                  </TouchableOpacity>
                ),
              })}
            />
            <Stack.Screen
              name="NotCompletedTask"
              component={NotCompletedTaskScreen}
              options={({ navigation }) => ({
                headerTitle: 'Not Completed task',
                headerLeft: () => (
                  <TouchableOpacity onPress={() => navigation.navigate('Menu')}>
                    <MaterialIcons name="arrow-back" size={24} color="grey" />
                  </TouchableOpacity>
                ),
              })}
            />
            <Stack.Screen
              name="AboutUs"
              component={AboutScreen}
              options={({ navigation }) => ({
                headerTitle: 'About Us',
                headerTitleAlign: 'center',
                headerLeft: () => (
                  <TouchableOpacity onPress={() => navigation.navigate('Menu')}>
                    <MaterialIcons name="arrow-back" size={24} color="grey" />
                  </TouchableOpacity>
                ),
              })}
            />
          </>
        )}
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default AppNavigator;
