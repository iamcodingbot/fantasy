import React from 'react';
import { StyleSheet, FlatList } from 'react-native';

import GamesGridTile from '../../components/GamesGridTile';

import {useSelector} from 'react-redux';

const PredictionScreen = props => {
    const games = useSelector(state => state.games.games);
    const renderGridItem = (itemData) => {
        return <GamesGridTile 
        title = {itemData.item.title}
        matches = {itemData.item.matches}
        series = {itemData.item.series}
        curr = {itemData.item.curr}
        max = {itemData.item.max}
        closeDisplay = {itemData.item.closeDisplay}/>
    };
    return (
        <FlatList
            keyExtractor={(item, index) => item.id}
            data={games}
            renderItem={renderGridItem} />
    );
};

PredictionScreen.navigationOptions = {
    headerTitle: 'All Predictions'
};

const styles = StyleSheet.create({
    screen: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center'
    }
});

export default PredictionScreen;