import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { NavigationContainer } from '@react-navigation/native';
import HomeScreen from './HomeScreen';
import SettingsScreen from "./SettingsScreen"
import { Entypo } from '@expo/vector-icons'; 
import { Ionicons } from '@expo/vector-icons';

const Tab = createBottomTabNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Tab.Navigator
      screenOptions={{
        tabBarActiveTintColor: 'black',
        tabBarInactiveTintColor: 'gray',
        tabBarActiveBackgroundColor: 'lightgrey'
        
      }}
      >
        
        <Tab.Screen name="Home" component={HomeScreen} options={{
          tabBarLabel: 'Home',
          
          tabBarIcon: () => (
            <Entypo name="home" color={'orange'} size={30} />
          ),
        }}/>
        <Tab.Screen name="Settings" component={SettingsScreen} options={{
          tabBarLabel: 'Settings',
          
          tabBarIcon: () => (
            <Ionicons name="settings" size={30} color="black" />
          ),
        }} />

      </Tab.Navigator>
    </NavigationContainer>
  );
}


const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
