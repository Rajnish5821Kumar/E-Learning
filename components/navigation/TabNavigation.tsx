import { View, Text } from 'react-native'
import React from 'react'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import HomeScreen from '@/app/Screen/HomeScreen';
import MyCourse from '@/app/Screen/MyCourse';
import LeaderBoard from '@/app/Screen/LeaderBoard';
import ProfileScreen from '@/app/Screen/ProfileScreen';
import FontAwesome from '@expo/vector-icons/FontAwesome';
import MaterialIcons from '@expo/vector-icons/MaterialIcons';
import EvilIcons from '@expo/vector-icons/EvilIcons';


const Tab=createBottomTabNavigator();

export default function TabNavigation() {
  return (
    <Tab.Navigator screenOptions={{headerShown:false}}>
      <Tab.Screen name="home" component={HomeScreen}
      options={{tabBarIcon:({color,size})=>(
        <FontAwesome name="home" size={size} color="color" />
      )}}
      />
      <Tab.Screen name="my-course" component={MyCourse} 
      options={{tabBarIcon:({color,size})=>(
        <FontAwesome name="book" size={size} color="color" />
      )}}/>
      <Tab.Screen name="leaderboard" component={LeaderBoard} 
      options={{tabBarIcon:({color,size})=>(
        <MaterialIcons name='leaderboard' size={size} color="color" />
      )}}/>
      <Tab.Screen name="profile" component={ProfileScreen} 
      options={{tabBarIcon:({color,size})=>(
        <MaterialIcons name='supervised-user-circle' size={size} color="color" />
      )}}/>
    </Tab.Navigator>
  )
}