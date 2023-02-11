import {React}  from 'react';
import { View,Button,Text } from 'react-native';

export default function ScreensB({ navigation}) {
    // let { idade,nome } = route.params;
    return (
           <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
        
            <Button title="Go back" onPress={() => navigation.goBack()} />
        </View>
    )

}