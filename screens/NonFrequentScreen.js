import React from 'react';
import {View, Text, Button, StyleSheet} from 'react-native';

const NonFrequentScreen = props => {
    return(
        <View style={styles.screen}>
            <Text>Non Frequent Options</Text>
            <Button title = "KYC" onPress ={()=>{
                props.navigation.navigate({routeName: 'KYCSettings'});
            }}/>
            <Button title = "Wallet" onPress ={()=>{
                props.navigation.navigate({routeName: 'WalletSettings'});
            }}/>
        </View>
    );
};

NonFrequentScreen.navigationOptions = {
     headerTitle: 'Non Frequent Options'
};

const styles = StyleSheet.create({
    screen: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center'
    }
});

export default NonFrequentScreen;