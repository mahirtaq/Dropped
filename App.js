import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { createBottomTabNavigator } from 'react-navigation';
import Calendar from './screens/Calendar';
import Search from './screens/Search';
import { Ionicons } from '@expo/vector-icons';

export class App extends React.Component {
  render() {
    return (
      <View style={styles.container}>
        <Text>Open up Aour app!</Text>
        <Text>Changes you make will automatically reload.</Text>
        <Text>Shake your phone to open the developer menu.</Text>
      </View>
    );
  }
}

export default createBottomTabNavigator({
  Home: 
  {
    screen: App,
    navigationOptions:
    {
      tabBarLabel: "Home",
      tabBarIcon: ({ tintColor }) => (
        <Ionicons name="ios-home" color={tintColor} size={24}/>
      )
    }
  },
  Calendar: 
  {
    screen: Calendar,
    navigationOptions:
    {
      tabBarLabel: "Calendar",
      tabBarIcon: ({ tintColor }) => (
        <Ionicons name="md-calendar" color={tintColor} size={24}/>
      )
    }
  },
  Search: 
  {
    screen: Search,
    navigationOptions:
    {
      tabBarLabel: "Search",
      tabBarIcon: ({ tintColor }) => (
        <Ionicons name="ios-search" color={tintColor} size={24}/>
      )
    }
  },

},{
  tabBarOptions:
  {
    style:
    {
      borderTopWidth:0,
      shadowOffset: { width: 5, height: 3 },
      shadowColor: "black",
      shadowOpacity: .5,
      elevation: 5
    }
  }
});
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
