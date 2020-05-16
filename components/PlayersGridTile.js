import React from 'react';
import { TouchableOpacity, FlatList,Text, View , StyleSheet, Button, Dimensions, Image} from 'react-native';
import PlayerCounter from './PlayerCounter'; 
import {useSelector} from 'react-redux';
import PlayerProperties from '../models/player/playerprop';

const width = Dimensions.get('window').width/3;
const PlayersGridTile = props => {
    
    const playerPropAssetMap = {1: '../assets/icons/bat.png', 
        2: '../assets/icons/bowl.png',
        3: '../assets/icons/australia.png',
        4: '../assets/icons/wi.png'
    };
   
    const firstName = props.player.firstname;
    const lastName = props.player.lastname;
    const playerProps = props.player.playerPropList.filter(x=>x.id!=5);
    const cost= props.player.cost;

    const renderGridItem = (itemData) => {
        const asset = playerPropAssetMap[itemData.item.id] 
        if(itemData.item.id == 1) {
            return <Image
            source={require('../assets/icons/bat.png')}
            style={styles.ImageIconStyle}/>
        }
        if(itemData.item.id == 2) {
            return <Image
            source={require('../assets/icons/CRICKETBALL_ball.png')}
            style={styles.BallIconStyle}/>
        }
        if(itemData.item.id == 3) {
            return <Image
            source={require('../assets/icons/australia.png')}
            style={styles.ImageIconStyle}/>
        }
        if(itemData.item.id == 4) {
            return <Image
            source={require('../assets/icons/wi.png')}
            style={styles.ImageIconStyle}/>
        }
        

    }
    
    const count = 0
    return (<TouchableOpacity style={styles.grid} >
        <View style={{...styles.container, ...{backgroundColor: props.bgcolor}}}>
            <View style = {styles.statscontainer}>
                <View style ={{flexDirection: 'row', justifyContent: 'space-between', width: '100%'}}>
                    <Text style ={{fontSize:12, fontWeight:'200', color: 'white'}}>{firstName}</Text>
                    <PlayerCounter title = {count}/>
                </View>
                <Text style ={{fontSize:18, fontWeight:'400', color: 'white'}}>{lastName}</Text>
            </View>
            <View style = {styles.statscontainer} flexDirection = 'row' alignItems = 'flex-end'>
                <FlatList
                    keyExtractor={(item, index) => item.id}
                    listKey = { (item) =>item.id+ ''}
                    numColumns={3}
                    data={playerProps}
                    renderItem={renderGridItem} /> 
            </View>

            <View style = {styles.statscontainer} flexDirection = 'row' alignItems = 'flex-end'>
                <Text style ={{fontSize:18, fontWeight:'500', color: '#F9DC4D'}}>{cost} </Text>
                <Text style ={{fontSize:15, fontWeight:'500', color: '#F9DC4D'}}> FAN</Text></View>
            
            <View style ={{flexDirection: 'row', justifyContent: 'space-between', width: '100%'}}>
                <View style ={{flex:1}}><Button title = '+' onPress ={props.onPick}  color = 'white'/></View>
                <View style ={{flex:1}}><Button title = '-' onPress ={props.onDrop} color = 'white'/></View>   
            </View>
        </View>
        
    </TouchableOpacity>);
};

const styles = StyleSheet.create({
    grid: {
        flex: 1,
        margin: 6,
        height: 150
    },
    container: {
        flex:1,
        backgroundColor: 'white',borderWidth:0,
        alignItems: 'flex-start',
        justifyContent: 'space-between',
        borderRadius: 8
    },
    statscontainer: {
        margin: 3
    },
    ImageIconStyle: {
        padding: 2,
        margin: 2,
        height: 30,
        width: 30,
        resizeMode: 'stretch',
      },
  BallIconStyle: {
    padding: 10,
    margin: 5,
    height: 15,
    width: 15,
    resizeMode: 'stretch',
  }
});

export default PlayersGridTile;