import { createStackNavigator } from "react-navigation-stack";
import Login from "../screens/auth/Login";
import Signup from "../screens/auth/Signup";
import Intro from "../screens/auth/Intro";
import Verification from "../screens/auth/Verification";
import SelectCourses from "../screens/onboarding/SelectCourses";

export default AuthNavigator = createStackNavigator({
    Intro: {
        screen: Intro,
        navigationOptions: {
            headerShown: false,
            headerTitle: "Back"
        }
    },
    Login: {
        screen: Login,
        navigationOptions: {
            headerTransparent: true,
            headerTitle: ""
        }
    },
    Signup: {
        screen: Signup,
        navigationOptions: {
            headerTransparent: true,
            headerTitle: ""
        }
    },
    Verification: {
        screen: Verification,
        navigationOptions: {
            headerShown: false,       
        }
    },
    SelectCourses: {
        screen: SelectCourses,
        navigationOptions: {
            headerShown: false
        }
    },
});

