import React from 'react';
import {View, Text, StyleSheet} from 'react-native';

const MyGamesScreen = props => {
    return(
        <View style={styles.screen}>
            <Text>My Games Screen</Text>
        </View>
    );
};

MyGamesScreen.navigationOptions = {
    headerTitle: 'My Arena'
};

const styles = StyleSheet.create({
    screen: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center'
    }
});

export default MyGamesScreen;