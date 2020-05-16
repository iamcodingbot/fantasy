import React from 'react';
import { FlatList, TouchableOpacity, Text, View , StyleSheet, Button} from 'react-native';

import Colors from '../constants/colors';
import PlayersGridTile from '../components/PlayersGridTile';

const PlayerGrid = (props) => {
    const players = props.players;
    const renderGridItem = (itemData) => {
        return <PlayersGridTile
                firstname={itemData.item.firstname}
                lastname={itemData.item.lastname}
                teamcolor={itemData.item.color}
                cost={itemData.item.cost}
                playerId={itemData.item.playerId}
                gameId ={2}
                bgcolor = {Colors.gridTileColor}
                player = {itemData.item}/>
    }

    return <FlatList
    keyExtractor={(item, index) => item.playerId}
    numColumns={3}
    data={players}
    ListFooterComponent={<View style = {{height : 200}}></View>}
    renderItem={renderGridItem} />

}

export default PlayerGrid;

