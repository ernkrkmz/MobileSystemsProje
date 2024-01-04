import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { NavigationContainer } from '@react-navigation/native';
import SearchScreen from "../screens/SearchScreen";
import HomeScreen from "../screens/HomeScreen";
import MovieScreen from '../screens/MovieScreen'
import { Entypo } from '@expo/vector-icons'; 
import { Ionicons } from '@expo/vector-icons';



const Tab = createBottomTabNavigator();


export default function appNavigation() {
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
          <Entypo name="home" color={'black'} size={30} />
        ),
      }}/>
      <Tab.Screen name="Search" component={SearchScreen} options={{
        tabBarLabel: 'Search',

        tabBarIcon: () => (
          <Ionicons name="md-search-sharp" size={30} color="black" />
        ),
      }} />

      <Tab.Screen name="Movie" component={MovieScreen} options={{
        tabBarLabel: 'Movie',
        headerShown:0,
        tabBarIcon: () => (
          <Ionicons name="md-search-sharp" size={30} color="black" />
        ),
      }} /> 

    </Tab.Navigator>
    </NavigationContainer>
      );
}