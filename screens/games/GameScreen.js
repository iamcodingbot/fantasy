import React, { useState } from 'react';
import {View, FlatList, StyleSheet, Text, Modal, Button, ScrollView} from 'react-native';
import { AntDesign} from '@expo/vector-icons';
import { withBadge , Badge} from 'react-native-elements' ;
import ProgressCircle from 'react-native-progress-circle'


import {useSelector, useDispatch} from 'react-redux';
import PlayersGridTile from '../../components/PlayersGridTile'
import {HeaderButtons, Item} from 'react-navigation-header-buttons'
import HeaderButton from '../../components/HeaderButton'
import * as gamesAction from '../../store/actions/selectedplayers';
import * as Progress from 'react-native-progress';
import { TouchableOpacity , TouchableHighlight} from 'react-native-gesture-handler';
import PlayerContraintsModal from '../../components/PlayerConstraintsModal';
import Animated from 'react-native-reanimated';
import GameConstraints from '../../components/GameConstraints';
import GameConstraint from '../../models/gameconstraint';
import SingleConstraint from '../../models/singleconstraint';
import {Icon} from 'native-base';
import PlayerCounter from '../../components/PlayerCounter';


const GameScreen = props => {
    const [isVisible, setModalVisible] = useState(false);
    const gameid = props.navigation.getParam('gameid');
    const maxbat = 7;
    const maxteam = 7;
    const maxbowl = 7;
    const maxplayers = 11;
    const maxcost = 150;
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
    var availableBat ;
    if((maxbat - totalbat)>(11-(totalteam1+totalteam2))) {
        availableBat=11-(totalteam1+totalteam2)
    } else {
        availableBat=maxbat - totalbat;
    }
    var availableBowl ;
    if((maxbowl - totalbowl)>(11-(totalteam1+totalteam2))) {
        availableBowl=11-(totalteam1+totalteam2)
    } else {
        availableBowl=maxbowl - totalbowl;
    }
    var availableTeam1 ;
    if((maxteam - totalteam1)>(11-(totalteam1+totalteam2))) {
        availableTeam1=11-(totalteam1+totalteam2)
    } else {
        availableTeam1=maxteam - totalteam1;
    }
    var availableTeam2 ;
    if((maxteam - totalteam2)>(11-(totalteam1+totalteam2))) {
        availableTeam2=11-(totalteam1+totalteam2)
    } else {
        availableTeam2=maxteam - totalteam2;
    }
    const bowlconstraint = new SingleConstraint("2", "bowl", totalbowl, maxbowl, '#AA7C77', 'white', 12);
    const team1constraint = new SingleConstraint("4", "team1", totalteam1, maxteam, '#EDF72A', 'white',6);
    const team2constraint = new SingleConstraint("5", "team2", totalteam2, maxteam, '#9A1D1D', 'white',6);
    const totalteamconstraint = new SingleConstraint("3", "team2", totalteam1 + totalteam2, 11, '#1CE3CE', 'white',12);

    const MessagesBadge = withBadge(5, {color: 'green'})(Icon)
    const gameConstraints = [team1constraint, team2constraint, bowlconstraint, totalteamconstraint];
    return (<View>
        <View flexDirection = 'row' justifyContent = 'space-between' alignItems = 'center' margin = {10}>
            <View><Text style ={{fontSize:18, fontWeight:'300', color: 'black'}} >LETS SEE WHAT YOU HAVE GOT</Text></View>
            <View>
        <ProgressCircle
            percent={(totalcost*100)/maxcost}
            radius={50}
            borderWidth={8}
            color="#3399FF"
            shadowColor="white">
            <Text style={{ fontSize: 10 }}>{totalcost}/{maxcost}</Text>
        </ProgressCircle>
        </View>
        </View>
        <View>
        <ScrollView horizontal = {true} >
            <TouchableOpacity>
            <View style = {{width: 90}}>
                <View style = {{paddingBottom :15, justifyContent: 'center',alignItems: 'center', margin: 10}}>  
                    <AntDesign name='laptop' size = {30}/>
                    <Badge value={'upto ' +  (11- (totalteam1 + totalteam2))} containerStyle={{ position: 'absolute', top: -5, right: -15 }}/> 
                    <Text style ={{fontSize:10, fontWeight:'700', color: 'grey'}} >All Players</Text>
                </View>
                <View></View>
            </View>
            </TouchableOpacity>
            <TouchableOpacity>
            <View style = {{width: 90}}>
                <View style = {{paddingBottom :15, justifyContent: 'center',alignItems: 'center', margin: 10}}>
                    <AntDesign name='staro' size = {30}/>
                    <Badge  value={'upto ' + availableTeam1} containerStyle={{ position: 'absolute', top: -5, right: -15 }}/> 
                    <Text style ={{fontSize:10, fontWeight:'700', color: 'grey'}} >Australia</Text>
                </View>
            </View>
            </TouchableOpacity>
            <TouchableOpacity>
            <View style = {{width: 90}}>
                <View style = {{paddingBottom :15, justifyContent: 'center',alignItems: 'center', margin: 10}}>
                    <AntDesign name='home' size = {30}/>
                    <Badge value={'upto ' + availableTeam2} containerStyle={{ position: 'absolute', top: -5, right: -15 }}/> 
                    <Text style ={{fontSize:10, fontWeight:'700', color: 'grey'}} >West Indies</Text>
                </View>
            </View>
            </TouchableOpacity>
            <TouchableOpacity>
            <View style = {{width: 100}}>
                <View style = {{paddingBottom :15, justifyContent: 'center',alignItems: 'center', margin: 10}}>
                    <AntDesign name='filter' size = {30}/>
                    <Badge value={'upto ' + availableBat} containerStyle={{ position: 'absolute', top: -5, right: -15 }}/> 
                    <Text style ={{fontSize:10, fontWeight:'700', color: 'grey'}} >Batsmen</Text>
                </View>
            </View>
            </TouchableOpacity>
            <TouchableOpacity>
            <View style = {{width: 90}}>
                <View style = {{paddingBottom :15, justifyContent: 'center',alignItems: 'center', margin: 10}}>
                    <AntDesign name='meh' size = {30}/>
                    <Badge value={'upto ' + availableBowl} containerStyle={{ position: 'absolute', top: -5, right: -15 }}/> 
                    <Text style ={{fontSize:10, fontWeight:'700', color: 'grey'}} >Bowler</Text>
                </View>
            </View>
            </TouchableOpacity>
        </ScrollView>        
        </View>   
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