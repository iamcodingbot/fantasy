import React from 'react';
import { TouchableOpacity, Text, View , StyleSheet, FlatList} from 'react-native';
import * as Progress from 'react-native-progress';
import SingleConstraint from '../components/SingleConstraint';
import ConstraintHelper from '../models/constraintshelper';


const GameConstraints = props => {

  const renderConstraint = (constraint) => {
    const unfilled = constraint.item.max - constraint.item.curr;
    const filled = constraint.item.curr;
    const filledColor = constraint.item.filledcolor;
    const unfilledColor = constraint.item.unfilledcolor;
    const height = constraint.item.height;
    return <SingleConstraint height = {height} unfilled ={unfilled} filled={filled} listKey = {constraint.item.id} filledColor = {filledColor} unfilledColor = {unfilledColor}/>
  }
  
  return (<TouchableOpacity  >
        <View flexDirection = 'column'>
            <View flexDirection = 'row'>
                    <FlatList
                    keyExtractor={(item, index) => item.id}
                    listKey='1'
                    data={props.constraints}
                    renderItem={renderConstraint} />
            </View>
        </View>

        
    </TouchableOpacity>);
};

export default GameConstraints;
