import { createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';
import Login from '../screens/auth/Login';
import Signup from '../screens/auth/Signup';
import Intro from '../screens/auth/Intro';

const AppNavigator = createStackNavigator({
    Intro: Intro,
    Login: Login,
    Signup: Signup
});

export default createAppContainer(AppNavigator);
