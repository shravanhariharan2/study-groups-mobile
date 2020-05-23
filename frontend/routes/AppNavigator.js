import { createAppContainer, createSwitchNavigator } from "react-navigation";

import AuthNavigator from './AuthStack'
import MainNavigator from './MainStack'

export default AppNavigator = createAppContainer(
    createSwitchNavigator({
        Auth: AuthNavigator,
        Main: MainNavigator,
    })
)
