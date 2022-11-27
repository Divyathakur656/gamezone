import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native'; 
import { globalStyles } from '../styles/global';

export default function Home(){
    return(
        <View>
            <Text style =  {globalStyles.container}>Home Screen</Text>
        </View>
    )
}

