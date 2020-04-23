import React from 'react';
import {View, Text, StyleSheet} from 'react-native';

const WalletScreen = props => {
    return(
        <View style={styles.screen}>
            <Text>Wallet Screen</Text>
        </View>
    );
};

WalletScreen.navigationOptions = data => {return {
    headerTitle: 'Wallet'   
   };
};

const styles = StyleSheet.create({
    screen: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center'
    }
});

export default WalletScreen;