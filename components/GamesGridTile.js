import React from 'react';
import { TouchableOpacity, Text, View , StyleSheet} from 'react-native';
import Colors from '../constants/colors';

const GamesGridTile = props => {
    return (<TouchableOpacity style={styles.grid} onPress={props.onSelect}>

        <View style={styles.container}>
            <Text style={{fontSize: 15,fontWeight: "bold", color: 'white'}}>{props.title}</Text>
            <Text style={{fontSize: 12, color: 'white'}}>{props.matches}, {props.series}</Text>
            <Text style={{fontSize: 12, color: 'white'}}>Participants {props.curr}/{props.max}</Text>
            <Text style={{fontSize: 12, color: 'white'}}>{props.closeDisplay}</Text>
        </View>
        
    </TouchableOpacity>);
};

const styles = StyleSheet.create({
    
    grid: {
        flex: 1,
        margin: 8,
        height: 150
    },
    container: {
        flex:1,
        backgroundColor: Colors.gridTileColor,borderColor: '#FFFF00',borderWidth:0,
        alignItems: 'stretch',
        
        padding: 20,
        borderRadius: 10
    }
});

export default GamesGridTile;