import React from 'react';
import {Text, View , StyleSheet, Button} from 'react-native';

const PlayerCounter = props => {
let value = 0
if(props.title == 0) {
    value = ''
} else {
    value = props.title
}
const styles = StyleSheet.create({ 
    container : {
        backgroundColor: '#6FD354',
        alignItems: 'center',
        height: 15,
        width: 20,
        justifyContent: 'center',
        borderRadius: 5}
    });
let containerstyles = styles.container;
if(value == ''){
    containerstyles = {...containerstyles.container, backgroundColor:'white'}
}

return <View style = {containerstyles}><Text>{value}</Text></View> 
};

const styles = StyleSheet.create({ 
container : {
    backgroundColor: '#6FD354',
    alignItems: 'center',
    height: 20,
    width: 20,
    justifyContent: 'center',
    borderRadius: 5}
});

export default PlayerCounter;