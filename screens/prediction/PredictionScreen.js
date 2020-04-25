import React from 'react';
import {View, Text, StyleSheet} from 'react-native';
import {HeaderButtons, Item} from 'react-navigation-header-buttons'
import HeaderButton from '../../components/HeaderButton'

const PredictionScreen = props => {
    return(
        <View style={styles.screen}>
            <Text>Prediction Screen</Text>
        </View>
    );
};

PredictionScreen.navigationOptions =  {
    headerTitle: 'Predictions'
};

const styles = StyleSheet.create({
    screen: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center'
    }
});

export default PredictionScreen;