import React from 'react';
import {View, Text, StyleSheet} from 'react-native';

const MyPredictionScreen = props => {
    return(
        <View style={styles.screen}>
            <Text>My Predictions Screen</Text>
        </View>
    );
};

MyPredictionScreen.navigationOptions = {
    headerTitle: 'My Arena'  
};

const styles = StyleSheet.create({
    screen: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center'
    }
});

export default MyPredictionScreen;