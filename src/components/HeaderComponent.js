import React from 'react';
import { StyleSheet } from 'react-native'; 
import { Header } from 'react-native-elements';

const HeaderComponent = props => {
    return (
        <Header
            leftComponent={{ icon: 'menu', color: '#fff' }}
            centerComponent={{ text: props.title, style: { color: '#fff' } }}
            rightComponent={{ icon: 'home', color: '#fff' }}
        />
    );
}

const style = StyleSheet.create({

});

export default HeaderComponent;