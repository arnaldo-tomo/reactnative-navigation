import {React}  from 'react';
import { View,Button,Text } from 'react-native';

export default function ScreensB({ navigation,route }) {
    let { idade,nome } = route.params;
    return (
        <View>
            <Text>{idade}</Text>
            <Text>{nome}</Text>
            <Button title="Go back" onPress={() => navigation.goBack()} />
        </View>
    )

}