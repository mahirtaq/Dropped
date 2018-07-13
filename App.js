import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { createBottomTabNavigator } from 'react-navigation';
import Categories from './screens/Categories';
import Search from './screens/Search';
import Icon from 'react-native-vector-icons/Ionicons';

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
  Home: {
    screen: App,
    navigationOptions:{
      tabBarLabel: "Home",
      tabBarIcon: ({ tintColor }) => (
        <Icon name="ios-home" color={tintColor} size={24}/>
      )
    }
  },
  Categories: {
    screen: Categories,
    navigationOptions:{
      tabBarLabel: "Categories",
      tabBarIcon: ({ tintColor }) => (
        <Icon name="ios-home" color={tintColor} size={24}/>
      )
    }
  },
  Search: {
    screen: Search,
    navigationOptions:{
      tabBarLabel: "Search",
      tabBarIcon: ({ tintColor }) => (
        <Icon name="ios-home" color={tintColor} size={24}/>
      )
    }
  },

});
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
