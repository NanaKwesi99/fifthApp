import React from 'react'
import { StyleSheet, Text, View } from 'react-native'
import { createStackNavigator } from '@react-navigation/stack'
import { NavigationContainer } from '@react-navigation/native'
import Online from './screen/Online';
import Add from './screen/Add';
import Payment from './screen/Payment';

const Stack= createStackNavigator();

const Navigator = () => {
    return (
        <NavigationContainer>
           <Stack.Navigator screenOptions={{headerShown: false,}}>
           <Stack.Screen name="Online" component={Online} />
            <Stack.Screen name="Add" component={Add} />
            <Stack.Screen name="Payment" component={Payment} />
           </Stack.Navigator>
        </NavigationContainer>
    )
}

export default Navigator

const styles = StyleSheet.create({})
