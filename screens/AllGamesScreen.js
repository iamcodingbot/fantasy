import React from 'react';
import {View, Text, Button, StyleSheet} from 'react-native';

const AllGamesScreen = props => {
    return(
        <View style={styles.screen}>
            <Text>All Games Screen</Text>
            <Button title = "Game Screen" onPress ={()=>{
                props.navigation.navigate({routeName: 'Game'});
            }}/>
        </View>
    );
};

AllGamesScreen.navigationOptions = {
     headerTitle: 'All Games'
};

const styles = StyleSheet.create({
    screen: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center'
    }
});

export default AllGamesScreen;