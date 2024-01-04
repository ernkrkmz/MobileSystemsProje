import { View, Text, ScrollView, TouchableOpacity, Image, Dimensions } from 'react-native'
import React from 'react'
import { fallbackPersonImage, image185, image342 } from '../api/moviedb';
var {width, height} = Dimensions.get('window');

export default function Cast({cast, navigation}) {
  return (
    <View>
        <Text style={{textAlign:'center'}}>Cast</Text>
        <ScrollView style={{backgroundColor:'red', width: width, height: 100}}
            
            showsHorizontalScrollIndicator={false}
            contentContainerStyle={{paddingHorizontal: 15}}
        >
            {
                cast && cast.map((person, index)=>{
                    return (
                        
                           <ScrollView >
                            <Text>
                                {
                                    person?.original_name.length>10? person.original_name  : person?.original_name 
                                    
                                }
                            </Text>
                        </ScrollView>
                    )
                })
            }
            
        </ScrollView>

    </View>
  )
}