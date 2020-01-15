import React from "react";
import { createBottomTabNavigator, createAppContainer } from "react-navigation";
// import { Text } from "react-native";
// import styles from "./assets/styles";
import HomeScreen from "./containers/Home";
import MatchesScreen from "./containers/Matches";
import MessagesScreen from "./containers/Messages";
import ProfileScreen from "./containers/Profile";
import FontAwesome5 from 'react-native-vector-icons/FontAwesome5';

const App = createBottomTabNavigator(
  {
    Explore: {
      screen: HomeScreen,
      navigationOptions: {
        tabBarLabel: 'Explore',
        tabBarIcon: ({focused}) => {
          const iconFocused = focused ? '#7444C0' : '#363636';
          return <FontAwesome5 name="search" size={12} color={iconFocused} />;
        },
      },
    },
    Matches: {
      screen: MatchesScreen,
      navigationOptions: {
        tabBarLabel: 'Matches',
        tabBarIcon: ({focused}) => {
          const iconFocused = focused ? '#7444C0' : '#363636';
          return <FontAwesome5 name="star" size={12} color={iconFocused} />;
        },
      },
    },
    Chat: {
      screen: MessagesScreen,
      navigationOptions: {
        tabBarLabel: 'Chat',
        tabBarIcon: ({focused}) => {
          const iconFocused = focused ? '#7444C0' : '#363636';
          return <FontAwesome5 name="comment" size={12} color={iconFocused} />;
        },
      },
    },
    Profile: {
      screen: ProfileScreen,
      navigationOptions: {
        tabBarLabel: 'Profile',
        tabBarIcon: ({focused}) => {
          const iconFocused = focused ? '#7444C0' : '#363636';
          return <FontAwesome5 name="user" size={12} color={iconFocused} />;
        },
      },
    },
  },
  {
    tabBarOptions: {
      showIcon: true,
      activeTintColor: '#7444C0',
      inactiveTintColor: '#363636',
      labelStyle: {
        fontSize: 12,
        textTransform: 'uppercase',
        paddingTop: 10,
      },
      style: {
        backgroundColor: '#FFF',
        borderTopWidth: 0,
        paddingVertical: 30,
        height: 60,
        marginBottom: 0,
        shadowOpacity: 0.05,
        shadowRadius: 10,
        shadowColor: '#000',
        shadowOffset: {height: 0, width: 0},
      },
    },
  },
);

export default createAppContainer(App);
