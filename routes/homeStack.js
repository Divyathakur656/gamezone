import { createStackNavigator } from "react-navigation-stack";
import { createAppContainer } from "react-navigation";
import Home from "../screens/home"
import ReviewDetailScreen from "../screens/details";
import { exp } from "react-native/Libraries/Animated/Easing";

const screens = {
    Home: {
        screen  : Home
    },
    ReviewDetail: {
        screen  : ReviewDetailScreen
    },
        
}

const HomeStack  = createStackNavigator(screens);


export default createAppContainer(HomeStack);