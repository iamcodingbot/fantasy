// total slots
// filled slots
// filled color
// unfilled color
// separator color


import React from 'react';
import { TouchableOpacity, Text, View , StyleSheet, FlatList} from 'react-native';
import ConstraintHelper from '../models/constraintshelper';




const SingleConstraint = props =>{
    const unfilled = props.unfilled;
    const filled = props.filled;
    const filledColor = props.filledColor;
    const unfilledColor = props.unfilledColor;
    var currentstate = [];
    for(var i = 0 ; i<= filled-1; i++) {
        currentstate.push(new ConstraintHelper(i+"", true));
    }
    for(var i = filled-1 ; i<= filled + unfilled-1; i++) {
        currentstate.push(new ConstraintHelper(i+"", false));
    }
    const renderItem = (itemData) => {
            if(itemData.item.status == true) {
                return (<View style = {{...styles.filled, ...{backgroundColor: filledColor}}}><Text></Text></View>);
            } else {
                return (<View style = {{...styles.unfilled, ...{backgroundColor: unfilledColor}}}/>);
            }
            
    }
return <View style = {{...styles.grid, ...{height: props.height}}}>
                <FlatList
                listKey={props.listKey}
            numColumns={11}
            data={currentstate}
            renderItem={renderItem} />

    </View>
    
}

const styles = StyleSheet.create({
    grid: {
        flex: 1,
        margin: 0,
        borderColor: 'black',
        width:'75%',
        borderWidth:1
    },

    filled: {
        flex: 1,
        backgroundColor: 'white',
        alignContent: 'space-between',
        justifyContent: 'space-between',
        borderRightWidth:0,
        borderColor: 'white'
    },
    unfilled: {
        flex: 1,
        backgroundColor: 'white',
        alignContent: 'space-between',
        justifyContent: 'space-between',
        borderRightWidth:1
    }
});

export default SingleConstraint;