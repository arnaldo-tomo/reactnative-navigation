import { createNativeStackNavigator } from "@react-navigation/native-stack";
import ScreensA from './../screens/ScreensA';
import ScreensB from './../screens/ScreensB';
const { Screen, Navigator } = createNativeStackNavigator();

export default function StackRoutes(){
    return (
        <Navigator>
            <Screen name='ScreesA' componet={ ScreensA} />
            <Screen name='ScreesB' componet={ ScreensB} />
        </Navigator>
)


}