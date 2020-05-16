import React from 'react';
import {View, Text, StyleSheet} from 'react-native';

const SubmitTeamScreen = props => {
    return(
        <View style={styles.screen}>
            <Text>SubmitTeamScreen</Text>
        </View>
    );
};

SubmitTeamScreen.navigationOptions = data => {return {
    headerTitle: 'SubmitTeamScreen'   
   };
};

const styles = StyleSheet.create({
    screen: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center'
    }
});

export default SubmitTeamScreen;