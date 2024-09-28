import React from 'react';
import { View, Text, StyleSheet, Image, FlatList, ImageBackground } from 'react-native';
import { agents } from '../components/agents';
import { styled } from 'nativewind';
const StyledView = styled(View);
const StyledText = styled(Text);
const StyledImage = styled(Image);

export default function AgentGrid() {
  const renderAgent = ({ item }) => (
    <StyledView style={styles.card} className='flex relative h-[250px]  rounded-lg overflow-hidden bg-white/50'>
      <ImageBackground source={item.image} style={styles.image} resizeMode="cover" />
      <StyledView style={{ backgroundColor: '#FF7010' }} className=' absolute bottom-0  rounded-tr-lg' >
        <StyledText className=' font-extrabold text-white p-2 text-[22px] drop-shadow-xl ' >{item.name}</StyledText>
      </StyledView>
    </StyledView >
  );

  return (
    <StyledView style={styles.container}>
      <ImageBackground
        source={require('../assets/2600_Sky_v2.webp')}
        style={styles.background}
        resizeMode="cover"
      >
        <StyledText style={styles.header}>HEROES</StyledText>
        <FlatList
          data={agents}
          renderItem={renderAgent}
          keyExtractor={(item) => item.id}
          numColumns={2}
          contentContainerStyle={styles.grid}
        />
      </ImageBackground>
    </StyledView>

  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#1a1a1a',

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
  grid: {
    justifyContent: 'space-between',
    paddingHorizontal: 20,
  },
  card: {

    flex: 1,
    margin: 5,
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