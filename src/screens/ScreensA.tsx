import { View,Button,Text } from "react-native";

export default function ScreensA({ navigation}) {
    return (
      <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
        
        <Text>Home Screen</Text>
        
        <Button title="com paramentrp" onPress={() => navigation.navigate('Details',{ idade: 'jane', nome:'ARrnaldo tomo' } )} />
        
        <Text>Segunda Forma</Text>

        <Button
  title="Go to Details... again"
  onPress={() => navigation.push('Details')}
        />
        
        
    </View>
    )
    
}