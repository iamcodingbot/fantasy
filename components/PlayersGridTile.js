import React from 'react';
import { TouchableOpacity, Text, View , StyleSheet} from 'react-native';

const PlayersGridTile = props => {
    return (<TouchableOpacity style={styles.grid} onPress={props.onSelect}>
        <View style= {styles.outercontainer2}>
        <View style={{...styles.outercontainer, ...{borderColor: props.teamcolor}}}>
        <View style={{...styles.container, ...{borderColor: props.teamcolor}}}>
            <Text>{props.firstname}</Text>
            <Text>{props.lastname}</Text>
            <Text>{props.cost}</Text>
            <Text>{props.color}</Text>
        </View>
        </View>
        </View>
        
    </TouchableOpacity>);
};

const styles = StyleSheet.create({
    outercontainer2: {
        flex:1,
        height: 150,
        alignItems: 'stretch',
        backgroundColor: 'white',
        padding: 2,
        paddingVertical: 2,
        borderRadius: 10,
        shadowColor: 'black',
        shadowOffset: {width: 0, height: 2},
        shadowOpacity: '',
        shadowRadius: 6,
        shadowOpacity: 0.26,
        backgroundColor: 'white',
        elevation: 5,
    },
    outercontainer: {
        flex:1,
        height: 150,
        alignItems: 'stretch',
        justifyContent: 'center',
        backgroundColor: 'white',
        padding: 1,
        paddingVertical: 1,
        borderRadius: 12,
        borderWidth:1
    },
    grid: {
        flex: 1,
        margin: 8,
        height: 150
    },
    container: {
        flex:1,
        backgroundColor: 'white',borderWidth:1,
        alignItems: 'stretch',
        
        padding: 20,
        borderRadius: 10
    }
});

export default PlayersGridTile;