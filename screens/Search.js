import React from 'react';
import 
{  
    View, 
    StyleSheet, 
    SafeAreaView,
    Platform,
    TextInput,
    StatusBar 
} from 'react-native';
import { Ionicons } from '@expo/vector-icons';

export default class Search extends React.Component
{
    componentWillMount()
    {
        this.startHeaderHeight = 80;
        if(Platform.OS == "android")
        {
            this.startHeaderHeight = 100 + StatusBar.currentHeight;
        }
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
                </View>
            </SafeAreaView>
        );
    }
}

const styles = StyleSheet.create({
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
    }
})