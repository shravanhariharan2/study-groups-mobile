import { createAppContainer } from "react-navigation";
import { createStackNavigator } from "react-navigation-stack";
import Login from "../screens/auth/Login";
import Signup from "../screens/auth/Signup";
import Intro from "../screens/auth/Intro";
import Verification from "../screens/auth/Verification";
import Home from "../screens/Home";

const AppNavigator = createStackNavigator({
    Intro: {
        screen: Intro,
        navigationOptions: {
            headerShown: false
        }
    },
    Login: Login,
    Signup: Signup,
    Verification: Verification,
    Home: Home
});

export default createAppContainer(AppNavigator);
