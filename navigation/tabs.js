import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import AgentGrid from '../screen/AgentGrid';
import Maps from '../screen/Maps';
import Profile from '../screen/Profile'; // ตรวจสอบชื่อให้ถูกต้อง
import News from '../screen/News';
import { Ionicons } from '@expo/vector-icons'; // นำเข้าไลบรารีไอคอน

const Tab = createBottomTabNavigator();

const Tabs = () => {
    return (
        <Tab.Navigator
            screenOptions={{
                headerShown: false, // ซ่อน header
                tabBarStyle: {
                    backgroundColor: '#ffffff', // สีพื้นหลังของ tab bar
                    borderTopWidth: 0, // เอาขอบบนของ tab bar ออก
                    height: 80, // เพิ่มความสูงของ tab bar ที่นี่
                    paddingVertical: 10, // เพิ่ม padding แนวตั้งถ้าต้องการ
                },
                tabBarActiveTintColor: '#FF7010', // สีของไอคอนที่ถูกเลือก
                tabBarInactiveTintColor: 'gray', // สีของไอคอนที่ไม่ได้เลือก
            }}
        >
            <Tab.Screen
                name='HEROES'
                component={AgentGrid}
                options={{
                    tabBarIcon: ({ color, size }) => (
                        <Ionicons name="accessibility-outline" size={size} color={color} />
                    ),
                }}
            />
            <Tab.Screen
                name='Maps'
                component={Maps}
                options={{
                    tabBarIcon: ({ color, size }) => (
                        <Ionicons name="map-outline" size={size} color={color} />
                    ),
                }}
            />
            <Tab.Screen
                name='News'
                component={News}
                options={{
                    tabBarIcon: ({ color, size }) => (
                        <Ionicons name="newspaper-outline" size={size} color={color} />
                    ),
                }}
            />
            <Tab.Screen
                name='Profile'
                component={Profile}
                options={{
                    tabBarIcon: ({ color, size }) => (
                        <Ionicons name="person-outline" size={size} color={color} />
                    ),
                }}
            />
        </Tab.Navigator>
    );
};

export default Tabs;
