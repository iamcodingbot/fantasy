import React from 'react';
import {View, Text, Button, StyleSheet} from 'react-native';

const GameScreen = props => {
    return(
        <View style={styles.screen}>
            <Text>Game Screen</Text>
            <Button title = "Submit team Screen" onPress ={()=>{
                props.navigation.navigate({routeName: 'SubmitTeam'});
            }}/>
        </View>
    );
};

const styles = StyleSheet.create({
    screen: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center'
    }
});

export default GameScreen;