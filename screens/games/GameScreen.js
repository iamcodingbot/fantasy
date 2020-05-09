import React, { useState } from 'react';
import {View, FlatList, StyleSheet, Text, Modal} from 'react-native';

import {useSelector, useDispatch} from 'react-redux';
import PlayersGridTile from '../../components/PlayersGridTile'
import {HeaderButtons, Item} from 'react-navigation-header-buttons'
import HeaderButton from '../../components/HeaderButton'
import * as gamesAction from '../../store/actions/selectedplayers';
import * as Progress from 'react-native-progress';
import { TouchableOpacity , TouchableHighlight} from 'react-native-gesture-handler';
import PlayerContraintsModal from '../../components/PlayerConstraintsModal';
import Animated from 'react-native-reanimated';


const GameScreen = props => {
    const [isVisible, setModalVisible] = useState(false);
    const gameid = props.navigation.getParam('gameid');
    const maxbat = 7;
    const maxteam = 7;
    const maxbowl = 7;
    const maxplayers = 11;
    const maxcost = 100;
    let totalbat = 0;
    let totalbowl = 0;
    let totalcost = 0;
    let totalteam1 = 0;
    let totalteam2 = 0;

    const playersMap = useSelector(state => state.players.players);
    const selectedPlayersMap = useSelector(state => state.selectedplayers.selectedGamePlayersMap[gameid]);
    const players = playersMap[gameid]
    for(var key in selectedPlayersMap){
        if(selectedPlayersMap[key].isBat){
            totalbat = totalbat + selectedPlayersMap[key].count; 
        }
        if(selectedPlayersMap[key].isBowl){
            totalbowl = totalbowl + selectedPlayersMap[key].count; 
        }
        totalcost = totalcost + selectedPlayersMap[key].totalcost;
        if(selectedPlayersMap[key].teamId == 1){
            totalteam1 = totalteam1 + selectedPlayersMap[key].count; 
        }
        if(selectedPlayersMap[key].teamId == 2){
            totalteam2 = totalteam2 + selectedPlayersMap[key].count; 
        }
    }

    let currbat = totalbat/maxbat;
    let currbowl = totalbowl/maxbowl;
    let currteam1 = totalteam1/maxteam;
    let currteam2 = totalteam2/maxteam;
    let currcost = totalcost/maxcost;

    let maxValues = new Map()
    maxValues.set("BAT", maxbat)
    maxValues.set("BOWL", maxbowl)
    maxValues.set("TEAM1", maxteam)
    maxValues.set("TEAM2", maxteam)
    maxValues.set("COST", maxcost)
    maxValues.set("TEAMSIZE", 11)

    let currValues = new Map()
    currValues.set("BAT", totalbat)
    currValues.set("BOWL", totalbowl)
    currValues.set("TEAM1", totalteam1)
    currValues.set("TEAM2", totalteam2)
    currValues.set("COST", totalcost)
    currValues.set("TEAMSIZE", totalteam1 + totalteam2)
    
    const isAvailable = (playerAttributes) => {

        for(let [key,value] of maxValues){
            if(currValues.has(key) && playerAttributes.has(key)) {
                if(currValues.get(key) + playerAttributes.get(key) > value) {
                    return false;
                }
            }
        }
        return true;
    }
    
    GameScreen.navigationOptions = navdata => {
        return  {
            headerTitle: 'game desc',
            headerRight:()=> <HeaderButtons HeaderButtonComponent = {HeaderButton}>
                <Item title='squad' 
                onPress= {() => {
                    navdata.navigation.navigate({ routeName: 'SubmitTeam', params:{
                        gameid: gameid
                    }})
                }}/>
            </HeaderButtons>
        }
    };

    const dispatch = useDispatch();
    const renderGridItem = (itemData) => {
    let playerAttributes = new Map()  
    playerAttributes.set("COST", itemData.item.cost)
    playerAttributes.set("TEAMSIZE", 1)
    if(itemData.item.isBat) {
        playerAttributes.set("BAT", 1)
    }
    if(itemData.item.isBowl) {
        playerAttributes.set("BOWL", 1)
    }
    if(itemData.item.teamId == 1) {
        playerAttributes.set("TEAM1", 1)
    }
    if(itemData.item.teamId == 2) {
        playerAttributes.set("TEAM2", 1)
    }
    let isAvail = isAvailable(playerAttributes)
    let bgcolor = 'white'
    if(!isAvail) {
        bgcolor = '#D4D9DD'
    }
    return <PlayersGridTile
                firstname={itemData.item.firstname}
                lastname={itemData.item.lastname}
                teamcolor={itemData.item.color}
                cost={itemData.item.cost}
                playerId={itemData.item.playerId}
                gameId ={gameid}
                bgcolor = {bgcolor}
                onPick = {() => {

                    // if due to player select number goes up, 
                    // then dont call dispatch instead do animation on PlayerGridTile 
                    if(isAvail) {
                        dispatch(gamesAction.selectPlayer(itemData.item));
                    }
                    
                }}
                onDrop = {() => {
                    if(selectedPlayersMap[itemData.item.playerId]) {
                        dispatch(gamesAction.dropPlayer(selectedPlayersMap[itemData.item.playerId]));
                    }
                    
                    
                }}
            />
    };

    return (<View>
        <PlayerContraintsModal  currbat={currbat} onClose = {() => {
                setModalVisible(false);
              }} modalVisible = {isVisible}/>
                  <TouchableOpacity onPress={() => {
                setModalVisible(true);
                }}>

<Progress.Bar progress={currteam1} width={400} borderRadius = {0} borderColor = 'black' color = 'yellow' borderWidth = {2} height = {6}/>
        <Progress.Bar progress={currteam2} width={400} borderRadius = {0} borderColor = 'black' color = '#9A1D1D' borderWidth = {1} height = {6}/>
            <Progress.Bar progress={currbowl} width={400} borderRadius = {0} borderColor = 'black' borderWidth = {1} height = {12}/>
        <Progress.Bar progress={currbat} width={400} borderRadius = {0} borderColor = 'black' color = 'red' borderWidth = {1} height = {12}/>

        <Progress.Bar progress={currcost} width={400} borderRadius = {0} borderColor = 'black' color = 'black' borderWidth = {2} height = {12}/>
        
        </TouchableOpacity>         
               
        <FlatList
            keyExtractor={(item, index) => item.playerId}
            numColumns={3}
            data={players}
            renderItem={renderGridItem} />

        </View>    
    );
};

const styles = StyleSheet.create({
    screen: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center'
    }
});



export default GameScreen;