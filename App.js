import React from 'react';
import { StyleSheet, Text, View, ActivityIndicator } from 'react-native';
import { createBottomTabNavigator, createStackNavigator } from 'react-navigation';
import CalendarScreen from './screens/CalendarScreen';
import SearchScreen from './screens/SearchScreen';
import MoviesScreen from './screens/MoviesScreen';
import ShowsScreen from './screens/ShowsScreen';
import GamesScreen from './screens/GamesScreen';
import MusicScreen from './screens/MusicScreen';
import { Ionicons } from '@expo/vector-icons';
import { fetchDrops } from './backend/api';
//MAY NEED EXTENDED STYLE SHEET

export class App extends React.Component 
{
  static defaultProps = 
  {
    fetchDrops
  }

  state = 
  {
    loading: false,
    drops: [] //change to another data structure
  }

  async componentDidMount()
  {
    this.setState( { loading: true });
    const data = await this.props.fetchDrops();
    setTimeout(() => this.setState({ loading: false, drops: data.drops }), 2000);
  }
  render() 
  {
    if(this.state.loading)
    {
      return (
        <View style={styles.container}>
          <ActivityIndicator size="large"/>
        </View>
      );
    }
    return (
      <View style={styles.container}>
        {this.state.drops.map((drop, i) => (
          <Text key={i}>{drop.title}</Text>
        ))}
      </View>
    );
  }
}
const SearchStack = createStackNavigator
({
  Search: SearchScreen,
  Movies: MoviesScreen,
  Shows: ShowsScreen,
  Games: GamesScreen,
  Music: MusicScreen,
});
export default createBottomTabNavigator
({
  Home: App,
  Calendar: CalendarScreen,
  Explore: SearchStack,
},
{
navigationOptions: ({ navigation }) => 
({
  tabBarIcon: ({ tintColor }) => 
  {
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
const styles = StyleSheet.create
({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});


