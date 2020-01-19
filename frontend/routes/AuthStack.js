import { createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';
import Login from '../screens/auth/Login';
import Signup from '../screens/auth/Signup';
import Intro from '../screens/auth/Intro';
import Home from '../screens/Home';

const AppNavigator = createStackNavigator({
    Intro: Intro,
    Login: Login,
    Signup: Signup,
    Home: Home
});

export default createAppContainer(AppNavigator);
