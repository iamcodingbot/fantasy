import React from 'react';
import { TouchableOpacity, Text, View , StyleSheet, Button} from 'react-native';

const FilterTile = props => {

    return (<TouchableOpacity style={styles.grid} >

        <View style={{...styles.container, ...{borderColor: props.teamcolor}}}>
            <Text>{props.text}</Text>
        </View>

        
    </TouchableOpacity>);
};

const styles = StyleSheet.create({
    grid: {
        flex: 1,
        margin: 2,
        height: 150,
        
    },
    container: {
        flex:1,
        backgroundColor: 'white',borderWidth:1,
        alignItems: 'flex-start',
        justifyContent: 'space-between',
        margin: 5,
        borderRadius: 8
    },
    statscontainer: {
        margin: 5
    }
});

export default FilterTile;