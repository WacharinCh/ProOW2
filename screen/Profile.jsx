import React from 'react';
import { View, Text, StyleSheet, Image, TouchableOpacity, ScrollView, ImageBackground } from 'react-native';
import { Ionicons } from '@expo/vector-icons';

export default function Profile() {
    return (
        <ScrollView contentContainerStyle={styles.container}>

            <ImageBackground
                source={require('../assets/2600_Sky_v2.webp')}
                style={styles.banner}
            >

                <TouchableOpacity style={styles.settingIconContainer}>
                    <Ionicons name="settings-outline" size={28} color="white" />
                </TouchableOpacity>
            </ImageBackground>

            {/* Header */}
            <View style={styles.header}>
                <View style={styles.profileContainer}>
                    <Image source={require('../assets/Overwatch_logo---Copy.png')} style={styles.profilePic} />
                    <View style={styles.infoContainer}>
                        <Text style={styles.username}>kh1mmie</Text>
                        <Text style={styles.userId}>khimmieonone#3398</Text>
                        <Text style={styles.description}>owเกมหมาาาาาาาาา</Text>
                    </View>
                </View>
                <View style={styles.statContainer}>
                    <View style={styles.statItem}>
                        <Text style={styles.statNumber}>35</Text>
                        <Text style={styles.statLabel}>Level</Text>
                    </View>
                    <View style={styles.statItem}>
                        <Text style={styles.statNumber}>13 hr.</Text>
                        <Text style={styles.statLabel}>Playing time</Text>
                    </View>
                    <View style={styles.statItem}>
                        <Text style={styles.statNumber}>12</Text>
                        <Text style={styles.statLabel}>Friend</Text>
                    </View>
                </View>


                {/* Button Bar */}
                <View style={styles.buttonBar}>
                    <TouchableOpacity style={styles.button}>
                        <Text style={styles.buttonText}>Edit Profile</Text>
                    </TouchableOpacity>
                </View>

                <View style={styles.Hero}>
                    <Text
                        style={{ fontWeight: "bold", marginBottom: 15, paddingTop: 3, fontSize: 16 }}
                    >Most played heroes</Text>
                    <View style={styles.heroRow}>
                        <View style={styles.heroItem}>
                            <Image source={require('../assets/D.va.png')} style={styles.heroImage} />
                            <Text style={styles.heroLevel}>Level 9</Text>
                            <Text style={styles.heroName}>D.va</Text>
                        </View>

                        <View style={styles.heroItem}>
                            <Image source={require('../assets/Moira.png')} style={styles.heroImage} />
                            <Text style={styles.heroLevel}>Level 8</Text>
                            <Text style={styles.heroName}>Moira</Text>
                        </View>

                        <View style={styles.heroItem}>
                            <Image source={require('../assets/Sigma.png')} style={styles.heroImage} />
                            <Text style={styles.heroLevel}>Level 5</Text>
                            <Text style={styles.heroName}>Sigma</Text>
                        </View>
                    </View>
                </View>

                {/* User Stats */}
                <View style={styles.stats}>
                    <Text
                        style={{ fontWeight: "bold", marginBottom: 15, paddingTop: 3, fontSize: 16 }}
                    >Statistics</Text>
                    <View style={styles.gameInfo}>
                        <Image source={require('../assets/Overwatch_logo---Copy.png')} style={styles.gameIcon} />
                        <View style={styles.gameDetails}>
                            <Text style={styles.gameLevel}>Level 35</Text>
                            <Text style={styles.server}>SEA Server</Text>
                        </View>
                    </View>
                    <View style={styles.statRow}>
                        <View style={styles.stat}>
                            <Text style={styles.statNumber}>13 hr.</Text>
                            <Text style={styles.statLabel}>Playing time</Text>
                        </View>
                        <View style={styles.stat}>
                            <Text style={styles.statNumber}>142</Text>
                            <Text style={styles.statLabel}>Matches played</Text>
                        </View>
                        <View style={styles.stat}>
                            <Text style={styles.statNumber}>38</Text>
                            <Text style={styles.statLabel}>Match win</Text>
                        </View>
                        <View style={styles.stat}>
                            <Text style={styles.statNumber}>887</Text>
                            <Text style={styles.statLabel}>Eliminate</Text>
                        </View>
                        <View style={styles.stat}>
                            <Text style={styles.statNumber}>392</Text>
                            <Text style={styles.statLabel}>Support</Text>
                        </View>
                        <View style={styles.stat}>
                            <Text style={styles.statNumber}>15</Text>
                            <Text style={styles.statLabel}>Cont.Elimi-Max</Text>
                        </View>

                    </View>
                </View>
            </View>

        </ScrollView>
    );
}

const styles = StyleSheet.create({
    container: {
        flexGrow: 1,
        backgroundColor: '#F0F0F0',
    },
    banner: {
        width: '100%',
        height: 180,
        marginBottom: 16,
        justifyContent: 'flex-end',
        alignItems: 'center',
        position: "absolute",
    },
    bannerText: {
        color: '#fff',
        fontSize: 18,
        fontWeight: 'bold',
        textAlign: 'center',
    },
    header: {
        backgroundColor: '#fff',
        borderRadius: 25,
        padding: 20,
        marginBottom: 16,
        width: '100%',
        height: '100%',
        marginTop: 130,
    },
    profileContainer: {
        flexDirection: 'column',
    },
    profilePic: {
        width: 80,
        height: 80,
        borderRadius: 30,
        marginRight: 10,
    },
    infoContainer: {
        flex: 1,
        marginTop: 10,
    },
    username: {
        fontSize: 24,
        fontWeight: 'bold',
    },
    userId: {
        fontSize: 12,
        color: '#888',
    },
    description: {
        fontSize: 12,
        color: '#888',
    },
    statContainer: {
        flexDirection: 'row',
        justifyContent: 'space-around',
        marginTop: 20,
        gap: 40,
    },
    statItem: {
        alignItems: 'center',
        justifyContent: 'center',
    },
    statNumber: {
        fontSize: 16,
        fontWeight: 'bold',
    },
    statLabel: {
        fontSize: 12,
        color: '#888',
    },
    buttonBar: {
        marginVertical: 20,
    },
    button: {
        backgroundColor: '#FF7010',
        padding: 10,
        borderRadius: 5,
    },
    buttonText: {
        color: '#fff',
        textAlign: 'center',
        fontWeight: 'bold',
    },
    stats: {
        borderColor: '#ccc',
        borderWidth: 1,
        borderRadius: 10,
        padding: 16,
    },
    gameInfo: {
        flexDirection: 'row',
        alignItems: 'center',
        marginBottom: 10,
        padding: 5,
    },
    gameIcon: {
        width: 40,
        height: 40,
        marginRight: 10,
    },
    gameDetails: {
        flex: 1,
    },
    gameLevel: {
        fontSize: 16,
        fontWeight: 'bold',
    },
    server: {
        fontSize: 12,
        color: '#888',
    },
    statRow: {
        marginTop: 2,
        flexDirection: 'row',
        justifyContent: 'space-between',
        flexWrap: "wrap",
    },
    stat: {
        width: '30%',
        marginBottom: 15,
        alignItems: 'center',
        justifyContent: 'center',
    },
    Hero: {
        padding: 16,
        borderWidth: 1,
        borderColor: '#ccc',
        borderRadius: 10,
        marginBottom: 20,
    },
    heroItem: {
        alignItems: 'center',

    },
    heroImage: {
        width: 80,
        height: 80,
        borderRadius: 40,
        borderWidth: 5,
        borderColor: '#ccc',
    },
    heroLevel: {
        fontSize: 16,
        fontWeight: 'bold',
        marginTop: 5,
    },
    heroName: {
        fontSize: 14,
        color: '#666',
    },
    heroRow: {
        marginTop: 2,
        flexDirection: 'row',
        justifyContent: 'space-between',
        flexWrap: "wrap",
    },
    settingIconContainer: {
        position: 'absolute',
        top: 50,
        right: 10,
        padding: 5,
    },
});