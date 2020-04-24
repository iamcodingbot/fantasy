import React from 'react';
import { StyleSheet, FlatList } from 'react-native';

import GamesGridTile from '../../components/GamesGridTile';

import {useSelector} from 'react-redux';

const AllGamesScreen = props => {
    const games = useSelector(state => state.games.games);
    const renderGridItem = (itemData) => {
        return <GamesGridTile 
        title = {itemData.item.title}
        curr = {itemData.item.curr}
        max = {itemData.item.max}
        closesAt = {itemData.item.closesAt}
        onSelect = {() => {
            props.navigation.navigate({ routeName: 'Game' })
        }}/>
    };
    return (
        <FlatList
            keyExtractor={(item, index) => item.id}
            numColumns={2}
            data={games}
            renderItem={renderGridItem} />
    );
};

AllGamesScreen.navigationOptions = {
    headerTitle: 'All Games'
};

const styles = StyleSheet.create({
    screen: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center'
    }
});

export default AllGamesScreen;