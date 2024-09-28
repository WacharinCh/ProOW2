import React from 'react';
import { View, Text, StyleSheet, Image, FlatList, ImageBackground } from 'react-native';
import { news } from '../components/newss';
import { styled } from 'nativewind';
const StyledView = styled(View);
const StyledText = styled(Text);
const StyledImage = styled(Image);

export default function News() {
    const renderAgent = ({ item }) => (
        <StyledView className='flex w-[100%] justify-center items-center'>
            <StyledView style={styles.card} className='flex  h-[350px] w-[90%] mb-3 rounded-lg overflow-hidden bg-white/50'>
                <ImageBackground source={item.image} style={styles.image} resizeMode="cover" />
                <StyledView style={{ backgroundColor: '#FFF' }} className=' w-full px-2' >
                    <StyledText className=' font-extrabold text-orange-500 p-2 text-[24px] drop-shadow-xl ' >{item.name}</StyledText>
                    <StyledText className=' font-bold text-black pb-2 px-2 text-[16px] drop-shadow-xl ' >{item.description}</StyledText>
                    <StyledView className='flex  items-end w-full'>
                        <StyledText className=' font-bold text-black/40 pb-2 px-2 text-[16px] drop-shadow-xl ' >{item.date}</StyledText>
                    </StyledView>
                </StyledView>
            </StyledView >
        </StyledView>

    );

    return (
        <StyledView style={styles.container} className='w-full flex justify-center items-center'>
            <ImageBackground
                source={require('../assets/2600_Sky_v2.webp')}
                style={styles.background}
                resizeMode="cover"
            >
                <StyledText style={styles.header}>NEWS</StyledText>
                <FlatList
                    data={news}
                    renderItem={renderAgent}
                    keyExtractor={(item) => item.id}

                    contentContainerStyle={styles.grid}
                />
            </ImageBackground>
        </StyledView>

    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,


    },
    background: {
        flex: 1,
        width: '100%',
        height: 'auto',
    },
    header: {
        fontSize: 60,
        fontWeight: '800',
        color: '#fff',
        marginBottom: 12,
        paddingHorizontal: 20,
        paddingTop: 50,
    },

    card: {
        flex: 1,
        margin: 5

    },
    image: {
        flex: 1
    },
    name: {
        fontSize: 16,
        fontWeight: 'bold',
        textAlign: 'center',
        padding: 10,
        color: '#1a1a1a',
        textTransform: 'uppercase',
    },
});