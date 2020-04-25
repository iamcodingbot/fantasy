import React from 'react';
import {View, FlatList, StyleSheet, Button} from 'react-native';
import {useSelector, useDispatch} from 'react-redux';
import PlayersGridTile from '../../components/PlayersGridTile';
import * as gamesAction from '../../store/actions/selectedplayers';


const SubmitTeamScreen = props => {
    const gameid = props.navigation.getParam('gameid');
    const dispatch = useDispatch();


    const selectedplayers = useSelector(state => {
        const players = [];
        for(const key in state.selectedplayers.selectedPlayers) {
            const p = state.selectedplayers.selectedPlayers[key];
            if(p.gameId == gameid)
                players.push(p);
        }
        return players;
    });
    const renderGridItem = (itemData) => {
    return <PlayersGridTile
                firstname={itemData.item.firstname}
                lastname={itemData.item.lastname}
                teamcolor={itemData.item.color}
                cost={itemData.item.cost}
                />
    };

    const submit = () => {
        // submit to blockchain
        // remove from redux
        // add to redix
        dispatch(gamesAction.deletePlayers(gameid));
        console.log("submitted")
    }
    return (
        <View>
        <FlatList
            keyExtractor={(item, index) => item.playerId}
            numColumns={3}
            data={selectedplayers}
            renderItem={renderGridItem} />
        <Button title = "Lets go" onPress = {submit}/>    
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

export default SubmitTeamScreen;