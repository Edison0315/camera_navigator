import React from 'react';
import { StyleSheet, View, Text } from 'react-native';
import CameraPicker from '../components/CameraPicker';

const HomeScreen = props => {
    return (
        <View style={styles.container}>       
            <CameraPicker />
        </View>  
    );
}

const styles = StyleSheet.create({
    container: { 
        flex: 1, 
        justifyContent: 'center', 
        alignItems: 'center'
    }
});

export default HomeScreen;
