import React from 'react';
import { StyleSheet, FlatList } from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';
import Colors from '../../constants/colors';

import GamesGridTile from '../../components/GamesGridTile';

import {useSelector} from 'react-redux';
import { View } from 'native-base';

const AllGamesScreen = props => {
    const games = useSelector(state => state.games.games);
    const renderGridItem = (itemData) => {
        return <GamesGridTile 
        title = {itemData.item.title}
        matches = {itemData.item.matches}
        series = {itemData.item.series}
        curr = {itemData.item.curr}
        max = {itemData.item.max}
        closeDisplay = {itemData.item.closeDisplay}
        onSelect = {() => {
            props.navigation.navigate({ routeName: 'Game', params:{
                gameid: itemData.item.id,
                constraintsList: itemData.item.constraintsList
            } })
        }}/>
    };
    return (
        <View 
         height = {1000}
         paddingVertical ={80}
        >
                    <LinearGradient
        colors={[Colors.backgroundColorGradient1, Colors.backgroundColorGradient2]}
        style={{
          position: 'absolute',
          left: 0,
          right: 0,
          top: 0,
          height: 1000,
        }}
      />
        <FlatList
            keyExtractor={(item, index) => item.id}
            numColumns={2}
            data={games}
            renderItem={renderGridItem} />
        </View>    
           
    );
};

AllGamesScreen.navigationOptions = {
    headerTitle: ''
};

const styles = StyleSheet.create({
    screen: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: 'green'
    }
});

export default AllGamesScreen;