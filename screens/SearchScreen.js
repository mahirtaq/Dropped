import React from 'react';
import 
{  
    View, 
    SafeAreaView,
    Platform,
    TextInput,
    StatusBar,
    StyleSheet,
    Text,
    ScrollView
} from 'react-native';
import ButtonBox from '../Components/ButtonBox';

import { Ionicons } from '@expo/vector-icons';
import { ApplicationStyles, Fonts, Colors, Metrics } from './styles';

export default class SearchScreen extends React.Component
{
    componentWillMount()
    {
        this.startHeaderHeight = 80;
        if(Platform.OS == "android")
        {
            this.startHeaderHeight = 100 + StatusBar.currentHeight;
        }
    }
    openMovies = () => 
    {
        this.props.navigation.navigate("Movies");
    }
    openShows = () =>
    {
        this.props.navigation.navigate("Shows");
    }
    openGames = () =>
    {
        this.props.navigation.navigate("Games");
    }
    openMusic = () =>
    {
        this.props.navigation.navigate("Music");
    }
    render()
    {
        return(
            <SafeAreaView style={{ flex: 1 }}>
                <View style={{ flex: 1 }}>
                    <View style={styles.heading}>
                        <View style={styles.searchBar}>
                            <Ionicons name="ios-search" size={20}/>
                            <TextInput 
                                underlineColorAndroid="transparent"
                                placeholder="Find a Drop Date"
                                placeholderTextColor="grey"
                                style={styles.input}
                            />
                        </View>
                    </View>
                    <ScrollView showsVerticalScrollIndicator={false} bounces={false} style={styles.container}>
                        <View style={styles.buttonsContainer}>
                            <ButtonBox onPress={this.openMovies} style={styles.moviesButton} text="Movies"/>
                            <ButtonBox onPress={this.openShows} style={styles.moviesButton} text="TV Shows"/>
                        </View>
                        <View style={styles.buttonsContainer}>
                            <ButtonBox onPress={this.openGames} style={styles.moviesButton} text="Video Games"/>
                            <ButtonBox onPress={this.openMusic} style={styles.moviesButton} text="Music"/>
                        </View>
                    </ScrollView>
                </View>
            </SafeAreaView>
            
        );
    }
}
//FIX INDIVIDUAL BUTTON STYLES
const styles = StyleSheet.create({
    ...ApplicationStyles.screen,
    
    searchBar: 
    {
        flexDirection: "row", 
        padding: 10,
        backgroundColor: "white",
        marginHorizontal: 20,
        shadowOffset: { width: 0, height: 0 },
        shadowColor: "black",
        shadowOpacity: 0.2,
        elevation: 1,
        marginTop: Platform.OS == "android" ? 30 : null
    },
    heading:
    {
        paddingTop: 15,
        paddingBottom: 30,
        height: this.startHeaderHeight,
        backgroundColor: "white",
        borderBottomWidth: 1,
        borderBottomColor: "#dddddd",
    },
    input:
    {
        paddingLeft: 10,
        flex: 1,
        fontWeight: "200",
        backgroundColor: "white"
    },
    container: 
    {
        marginBottom: 36,
    },
    buttonsContainer: 
    {
        flexDirection: 'row',
        flex: 1
    },
    centered: 
    {
        alignItems: 'center'
    },
    moviesButton: 
    {
        borderColor: Colors.border,
        borderTopWidth: 1,
        borderRightWidth: 1,
        borderBottomWidth: 1
    },
});