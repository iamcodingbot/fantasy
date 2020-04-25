import React from 'react';
import {View, FlatList, StyleSheet} from 'react-native';
import {useSelector} from 'react-redux';
import PlayersGridTile from '../../components/PlayersGridTile'

const SubmitTeamScreen = props => {
    const selectedplayers = useSelector(state => {
        const players = [];
        for(const key in state.selectedplayers.selectedPlayers) {
            players.push(state.selectedplayers.selectedPlayers[key]);
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
    return (
        <FlatList
            keyExtractor={(item, index) => item.playerId}
            numColumns={3}
            data={selectedplayers}
            renderItem={renderGridItem} />
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