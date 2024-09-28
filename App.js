import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import Login from './screen/Login';
import AgentGrid from './screen/AgentGrid';
import Tabs from './navigation/tabs';

const Stack = createStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Login">
        <Stack.Screen
          name="Login"
          component={Login}
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name="Home" // เปลี่ยนชื่อจาก AgentGrid เป็น Home
          component={Tabs} // ใส่ Tabs เป็นคอมโพเนนต์ที่ต้องการใช้
          options={{ headerShown: false }} // ซ่อน header
        />

      </Stack.Navigator>
    </NavigationContainer>
  );
}
