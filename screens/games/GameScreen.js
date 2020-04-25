import React from 'react';
import {View, FlatList, StyleSheet} from 'react-native';

import {useSelector, useDispatch} from 'react-redux';
import PlayersGridTile from '../../components/PlayersGridTile'
import {HeaderButtons, Item} from 'react-navigation-header-buttons'
import HeaderButton from '../../components/HeaderButton'
import * as gamesAction from '../../store/actions/selectedplayers';

const GameScreen = props => {
    const gameid = props.navigation.getParam('gameid');
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

    
    const playersMap = useSelector(state => state.players.players);
    const players = playersMap[gameid];
    const dispatch = useDispatch();
    const renderGridItem = (itemData) => {
    return <PlayersGridTile
                firstname={itemData.item.firstname}
                lastname={itemData.item.lastname}
                teamcolor={itemData.item.color}
                cost={itemData.item.cost}
                onSelect = {() => {
                    dispatch(gamesAction.selectPlayer(itemData.item));
                }}
                />
    };

    return (
        <View>
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