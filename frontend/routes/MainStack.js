import React from "react"
import { createBottomTabNavigator } from "react-navigation-tabs";
import { createStackNavigator } from "react-navigation-stack";

// screens
import Home from '../screens/main/Home'
import CreateGroup from '../screens/main/CreateGroup'
import SearchGroups from '../screens/main/SearchGroups'
import Settings from '../screens/main/Settings'

// icons
import Sync from '../assets/jsicons/bottomNavigation/Sync'

  export default MainNavigator = createBottomTabNavigator(
    {
      Home: {
        screen: Home,
        navigationOptions: {
            tabBarLabel: 'Home',
            tabBarIcon: ({ focused }) => <Sync />
        }
      },
      CreateGroup: {
        screen: CreateGroup,
        navigationOptions: {
            tabBarLabel: 'Create Group',
            tabBarIcon: ({ focused }) => <Sync />
        }
      },
      SearchGroups: {
        screen: SearchGroups,
        navigationOptions: {
            tabBarLabel: 'Search Groups',
            tabBarIcon: ({ focused }) => <Sync />
        }
      },
      Settings: {
        screen: Settings,
        navigationOptions: {
            tabBarLabel: 'Settings',
            tabBarIcon: ({ focused }) => <Sync />
        }
      }
    },
    {
      tabBarOptions: {
        showLabel: false,
        showIcon: true,
        activeBackgroundColor: '#EAEAEA',
        style: {
          borderTopColor: 'transparent'
        },
        tabStyle: {
          borderRightColor: '#EAEAEA',
          borderRightWidth: 1,
          borderRightHeight: 10,
          borderLeftColor: '#EAEAEA',
          borderLeftWidth: 1,
          borderLeftHeight: 10
        }
      }
    }
  );