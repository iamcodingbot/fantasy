import React from 'react';
import { TouchableOpacity, Text, View , StyleSheet, Button} from 'react-native';
import PlayerCounter from './PlayerCounter'; 
import {useSelector} from 'react-redux';


const PlayersGridTile = props => {
    const count = useSelector(state => {
        if(props.gameId in state.selectedplayers.selectedGamePlayersMap) {
            const playerMap = state.selectedplayers.selectedGamePlayersMap[props.gameId]
            if(props.playerId in playerMap){
                return playerMap[props.playerId].count
            } else {
                return 0
            }
        } else {
            return 0
        }


    });
    return (<TouchableOpacity style={styles.grid} >

        <View style={{...{...styles.container, ...{borderColor: props.teamcolor}}, ...{backgroundColor : props.bgcolor}}}>
            <View style = {styles.statscontainer}>
                <View style ={{flexDirection: 'row', justifyContent: 'space-between', width: '100%'}}>
                    <Text>{props.firstname}</Text>
                    <PlayerCounter title = {count}/>
                </View>
                <Text>{props.lastname}</Text>
            </View>
            <View style = {styles.statscontainer} ><Text>{props.cost} FAN</Text></View>
            
            <View style ={{flexDirection: 'row', justifyContent: 'space-between', width: '100%'}}>
                <View style ={{flex:1}}><Button title = '+' onPress ={props.onPick}/></View>
                <View style ={{flex:1}}><Button title = '-' onPress ={props.onDrop}/></View>   
            </View>
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
        backgroundColor: 'white',borderWidth:2,
        alignItems: 'flex-start',
        justifyContent: 'space-between',
        margin: 5,
        borderRadius: 8
    },
    statscontainer: {
        margin: 5
    }
});

export default PlayersGridTile;