import React from 'react';
import 
{
    View, 
    SafeAreaView,
    Text
} from 'react-native';

export default class CalendarScreen extends React.Component
{
    render()
    {
        return(
            <SafeAreaView style={{ flex: 1 }}>
                <View style={{ flex: 1 }}>
                    <Text> Calendar </Text>
                </View>
            </SafeAreaView>
        );
    }
}