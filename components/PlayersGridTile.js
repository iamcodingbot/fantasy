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
        <View style={{...{...styles.outercontainer, ...{borderColor: props.teamcolor}}, ...{backgroundColor : props.bgcolor}}}>
        <View style={{...{...styles.container, ...{borderColor: props.teamcolor}}, ...{backgroundColor : props.bgcolor}}}>
            <View style = {styles.statscontainer}>
                <View style ={{flexDirection: 'row', justifyContent: 'space-between', width: '100%'}}>
                    <Text style ={{fontSize:15, fontWeight:'300', color: 'black'}}>{props.firstname}</Text>
                    <PlayerCounter title = {count}/>
                </View>
                <Text style ={{fontSize:18, fontWeight:'500', color: 'black'}}>{props.lastname}</Text>
            </View>
            <View style = {styles.statscontainer} flexDirection = 'row' alignItems = 'flex-end'>
                <Text style ={{fontSize:18, fontWeight:'500', color: 'black'}}>{props.cost}</Text>
                <Text style ={{fontSize:15, fontWeight:'500', color: 'black'}}> FAN</Text></View>
            
            <View style ={{flexDirection: 'row', justifyContent: 'space-between', width: '100%'}}>
                <View style ={{flex:1}}><Button title = '+' onPress ={props.onPick}/></View>
                <View style ={{flex:1}}><Button title = '-' onPress ={props.onDrop}/></View>   
            </View>
        </View>
        </View>
        
    </TouchableOpacity>);
};

const styles = StyleSheet.create({
    grid: {
        flex: 1,
        margin: 6,
        height: 150,
        
    },
    outercontainer: {
        flex:1,
        alignItems: 'stretch',
        justifyContent: 'center',
        backgroundColor: 'white',
        padding: 1,
        paddingVertical: 1,
        borderRadius: 9,
        borderColor: 'green',borderWidth:1,
        shadowColor: 'black',
        shadowOffset: {width: 0, height: 2},
        shadowOpacity: '',
        shadowRadius: 6,
        shadowOpacity: 0.26,
        backgroundColor: 'white',
        elevation: 5,
    },
    container: {
        flex:1,
        backgroundColor: 'white',borderWidth:1,
        alignItems: 'flex-start',
        justifyContent: 'space-between',
        borderRadius: 8
    },
    container2: {
        flex:1,
        backgroundColor: 'white',borderWidth:1,
        alignItems: 'center',
        justifyContent: 'center',
        
        padding: 1,
        borderRadius: 8
    },
    statscontainer: {
        margin: 5
    }
});

export default PlayersGridTile;