import { View,Button } from "react-native";

export default function ScreensA({ navigation}) {
    return (
        <View>
        <Button  title="Update the title" onPress={() => navigation.push('Details')}/>
        </View>
    )
    
}