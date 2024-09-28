import React, { useState } from 'react';
import { StyleSheet, Text, View, TouchableOpacity, Image, ScrollView, ImageBackground } from 'react-native';
import { StatusBar } from 'expo-status-bar';
import Ionicons from '@expo/vector-icons/Ionicons';
import FontAwesome6 from '@expo/vector-icons/FontAwesome6';
import { Provider as PaperProvider, TextInput } from 'react-native-paper';
import { DefaultTheme } from 'react-native-paper';

import { styled } from 'nativewind';
const StyledView = styled(View);
const StyledText = styled(Text);

const theme = {
  ...DefaultTheme,
  colors: {
    ...DefaultTheme.colors,
    text: 'black', // สีของข้อความทั่วไป
    primary: 'black', // สีหลัก (ใช้ใน label และ icon)
    placeholder: 'black', // สีของ placeholder
  },
};

export default function Login({ navigation }) {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [showPassword, setShowPassword] = useState(false);
  const [isFocused, setIsFocused] = useState(false);



  const handleLogin = () => {
    // เมื่อ login สำเร็จ ให้ navigate ไปที่หน้า Main
    navigation.navigate('Home');
  };





  return (
    <PaperProvider theme={theme}>
      <StyledView contentContainerStyle={styles.container} className=' justify-center items-center bg-cover'>
        <ImageBackground
          source={require('../assets/2600_Sky_v2.webp')}
          style={styles.background}
        >
          <StyledView className='w-full flex justify-center items-center mt-[90px] '>
            <Image
              source={require('../assets/Overwatch2_Logo.png')}
              className="h-[100px] w-[80%] my-[50px]"
              resizeMode="contain" // ปรับขนาดภาพให้คงอัตราส่วนและแสดงทั้งภาพ
            />
            <StyledText style={styles.title} className='w-[85%] font-bold text-white text-[30px] px-1 mb-2'>Login</StyledText>
            <StyledView className='w-[85%] bg-white rounded-[5px]  mb-3'>
              <TextInput
                mode="flat"
                label="Username"
                placeholder={!isFocused ? "Username" : ""}
                outlineColor="transparent"
                underlineColor="transparent"
                style={{ fontSize: 20, backgroundColor: 'transparent', borderBottomWidth: 0, height: 50 }}
                onFocus={() => setIsFocused(true)} // เมื่อโฟกัส
                onBlur={() => setIsFocused(false)} // เมื่อเลิกโฟกัส
              />
            </StyledView>
            <StyledView className='w-[85%]  bg-white rounded-[5px] mb-3'>
              <TextInput
                mode="flat"
                label="Password"
                secureTextEntry={!showPassword} // ซ่อนรหัสผ่านถ้า showPassword เป็น false
                value={password}
                onChangeText={setPassword}
                placeholder={!isFocused ? "Password" : ""}
                outlineColor="transparent"
                underlineColor="transparent"
                style={{ fontSize: 20, backgroundColor: 'transparent', borderBottomWidth: 0, height: 50 }}
                right={
                  <TextInput.Icon
                    icon={showPassword ? 'eye-off' : 'eye'} // เปลี่ยนไอคอนตามสถานะ
                    onPress={() => setShowPassword(!showPassword)} // กดแล้วสลับสถานะการแสดงรหัสผ่าน
                  />
                }
                onFocus={() => setIsFocused(true)} // เมื่อโฟกัส
                onBlur={() => setIsFocused(false)} // เมื่อเลิกโฟกัส
              />
            </StyledView>
            <StyledView className='flex w-[85%] flex-row justify-between px-1 mb-3'>
              <TouchableOpacity >
                <StyledText className='text-[18px] text-white' >Can't sign in?</StyledText>
              </TouchableOpacity>
              <TouchableOpacity >
                <StyledText className='text-[18px] text-white'>Register</StyledText>
              </TouchableOpacity>
            </StyledView>
            <TouchableOpacity style={styles.loginButton} onPress={handleLogin}>
              <StyledText className='font-bold text-white text-[20px]'>Login</StyledText>
            </TouchableOpacity>
            <StyledView className='my-5 flex flex-row h-[50px] items-center'>
              <StyledView className='h-[2px] w-32 bg-white/70 mt-1 rounded-full' ></StyledView>
              <StyledText className='text-[18px] mx-2 text-white/70'>OR</StyledText>
              <StyledView className='h-[2px] w-32 bg-white/70 mt-1 rounded-full' ></StyledView>
            </StyledView>
          </StyledView>

          <StyledView className='w-full flex justify-center items-center' >
            <StyledView className='w-[90%] flex flex-row justify-around'>
              <TouchableOpacity style={{ backgroundColor: '#1877f2', borderRadius: 180, width: 44, height: 44, justifyContent: 'center', alignItems: 'center' }}>
                <Ionicons name="logo-facebook" size={24} color="#fff" />
              </TouchableOpacity>
              <TouchableOpacity style={{ backgroundColor: '#fff', padding: 8, borderRadius: 180, width: 44, height: 44, justifyContent: 'center', alignItems: 'center' }}>
                <Ionicons name="logo-google" size={24} color="black" />
              </TouchableOpacity>
              <TouchableOpacity style={{ backgroundColor: '#000', padding: 8, borderRadius: 180, width: 44, height: 44, justifyContent: 'center', alignItems: 'center' }}>
                <Ionicons name="logo-apple" size={24} color="#fff" />
              </TouchableOpacity>
              <TouchableOpacity style={{ backgroundColor: '#fff', padding: 8, borderRadius: 180, width: 44, height: 44, justifyContent: 'center', alignItems: 'center' }}>
                <FontAwesome6 name="steam" size={24} color="#171A21" />
              </TouchableOpacity>
            </StyledView>
          </StyledView>



        </ImageBackground>
      </StyledView>
    </PaperProvider>
  );
}

const styles = StyleSheet.create({

  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  background: {
    width: '100%',
    height: '100%',
  },

  loginButton: {
    width: '70%',
    padding: 13,
    backgroundColor: '#FF7010',
    borderRadius: 80,
    alignItems: 'center',

  },


  socialButtonsContainer: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    flexWrap: 'wrap',
    width: '90%',
    marginBottom: 20,
    marginTop: 18,
    alignItems: 'center',
  },
});
