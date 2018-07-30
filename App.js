import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { createBottomTabNavigator, createStackNavigator } from 'react-navigation';
import CalendarScreen from './screens/CalendarScreen';
import SearchScreen from './screens/SearchScreen';
import MoviesScreen from './screens/MoviesScreen';
import { Ionicons } from '@expo/vector-icons';

export class App extends React.Component {
  render() 
  {
    return (
      <View style={styles.container}>
        <Text>Open up Aour app!</Text>
        <Text>Changes you make will automatically reload.</Text>
        <Text>Shake your phone to open the developer menu.</Text>
      </View>
    );
  }
}
const SearchStack = createStackNavigator({
  Search: SearchScreen,
  Movies: MoviesScreen,
});
export default createBottomTabNavigator({
  Home: App,
  Calendar: CalendarScreen,
  Explore: SearchStack,
},
{
navigationOptions: ({ navigation }) => ({
  tabBarIcon: ({ tintColor }) => {
    const { routeName } = navigation.state;
    let iconName;
    if (routeName === "Home")
    {
      iconName = "ios-home";
    }
    else if (routeName === "Calendar")
    {
      iconName = "md-calendar";
    }
    else if (routeName === "Explore")
    {
      iconName = "ios-search";
    }

    return <Ionicons name={iconName} size={25} color={tintColor}/>
  }
})
},
{
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


