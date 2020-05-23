import React from "react"
import { createBottomTabNavigator } from "react-navigation-tabs";

// screens
import Home from '../screens/main/Home'
import CreateGroup from '../screens/main/CreateGroup'
import SearchGroups from '../screens/main/SearchGroups'
import Settings from '../screens/main/Settings'

import Icon from 'react-native-vector-icons/Ionicons'

  export default MainNavigator = createBottomTabNavigator(
    {
      Home: {
        screen: Home,
        navigationOptions: {
            tabBarLabel: 'Home',
            tabBarIcon: ({ focused }) => <Icon name={'ios-home'} size={25} />
        }
      },
      CreateGroup: {
        screen: CreateGroup,
        navigationOptions: {
            tabBarLabel: 'Create Group',
            tabBarIcon: ({ focused }) => <Icon name={'md-add-circle-outline'} size={25} />
        }
      },
      SearchGroups: {
        screen: SearchGroups,
        navigationOptions: {
            tabBarLabel: 'Search Groups',
            tabBarIcon: ({ focused }) => <Icon name={'ios-search'} size={25} />
        }
      },
      Settings: {
        screen: Settings,
        navigationOptions: {
            tabBarLabel: 'Settings',
            tabBarIcon: ({ focused }) => <Icon name={'ios-settings'} size={25} />
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