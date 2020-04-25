import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import HeaderComponent from './src/components/HeaderComponent';
import { Ionicons } from '@expo/vector-icons';

//Tab Navigation
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

//Drawer Navigation
import { createDrawerNavigator } from '@react-navigation/drawer';

//screens
import HomeScreen from './src/screens/HomeScreen';

function SettingsScreen() {
  return (   
    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>       
      <Text>Settings!</Text>
    </View>     
  );
}

function ContactScreen() {
  return (   
    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>       
      <Text>Contact!</Text>
    </View>     
  );
}

const Tab = createBottomTabNavigator();

function ScreenTabNavigator() {
  return(
    <Tab.Navigator
        screenOptions={({ route }) => ({
          tabBarIcon: ({ focused, color, size }) => {
            let iconName;

            if (route.name === 'Home') {
              iconName = focused
                ? 'ios-information-circle'
                : 'ios-information-circle-outline';
            } else if (route.name === 'Contact') {
              iconName = focused ? 'ios-contact' : 'ios-contact';
            }

            // You can return any component that you like here!
            return <Ionicons name={iconName} size={size} color={color} />;
          },
        })}
        tabBarOptions={{
          activeTintColor: 'tomato',
          inactiveTintColor: 'gray',
        }}>
      <Tab.Screen name="Home" component={HomeScreen} />
      <Tab.Screen name="Contact" component={ContactScreen} />
    </Tab.Navigator>  
  );
}

const Drawer = createDrawerNavigator();

export default function App() {
  return (    
    <React.Fragment>
      <NavigationContainer>
        <View>
          <HeaderComponent title="LAB UNIREMINGTON"/>
        </View>      
        <Drawer.Navigator initialRouteName="Home">        
          <Drawer.Screen name="Home" component={ScreenTabNavigator} />
          <Drawer.Screen name="Settings" component={SettingsScreen} />
        </Drawer.Navigator>
      </NavigationContainer>
    </React.Fragment>
  );
}

const styles = StyleSheet.create({});
