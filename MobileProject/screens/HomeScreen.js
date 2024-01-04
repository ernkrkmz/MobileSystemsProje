import { View, Text, TouchableOpacity, ScrollView, Platform } from 'react-native'
import React, { useEffect, useState} from 'react'
import { SafeAreaView } from 'react-native-safe-area-context';
import {Bars3CenterLeftIcon, MagnifyingGlassIcon} from 'react-native-heroicons/outline'
import TrendingMovies from '../components/trendingMovies';
import MovieList from '../components/movieList';
import { StatusBar } from 'expo-status-bar';
import { fetchTopRatedMovies, fetchTrendingMovies, fetchUpcomingMovies } from '../api/moviedb';
import { useNavigation } from '@react-navigation/native';
import Loading from '../components/loading';
import { styles } from '../theme/index';
import { Button } from 'react-native-paper';
import { AntDesign } from '@expo/vector-icons';


//import axios from 'axios';
const apple = Platform.OS === 'ios';


const HomeScreen = () => {

const [trending, setTrending] = useState([]);
const [loading, setLoading] = useState(true);
const navigation = useNavigation();

  useEffect(()=>{
    getTrendingMovies();
    
  },[]);

  const getTrendingMovies = async ()=>{
    const data = await fetchTrendingMovies();
    if(data && data.results) setTrending(data.results);
    setLoading(false)
  }


    return (
        <View className="flex-1">
      
      
      {
        loading? (
          <Loading />
        ):(
          <ScrollView 
            showsVerticalScrollIndicator={false} 
            contentContainerStyle={{paddingBottom: 10, paddingTop: 50}}
          >

            { trending.length>0 && <TrendingMovies data={trending} /> }

            <Button style={{marginTop:20}} onPress={()=>{
                navigation.navigate("deneme")
            }}> <AntDesign name="rightcircle" size={24} color="black"/> </Button>
          </ScrollView>
        )
      }
      
  </View>
    );
};




export default HomeScreen;
