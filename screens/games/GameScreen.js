import React, {useState} from 'react';
import {View, Text, StyleSheet, Dimensions, FlatList} from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';
import Colors from '../../constants/colors';
import {useSelector} from 'react-redux';
import PlayerGrid from '../../components/PlayerGrid';
import ConstraintBar from '../../components/ConstraintBar';
import { AnimatedCircularProgress } from 'react-native-circular-progress';

const width= Dimensions.get('window');

const GameScreen = props => {
    

    const playersMap = useSelector(state => state.players.players);
    const gameid = props.navigation.getParam('gameid');
    const constraintsList = props.navigation.getParam('constraintsList');
    constraintsList.sort((a, b) => a.displayOrder > b.displayOrder)
    const  allPlayers = playersMap[gameid]
    const [displayPlayers, setDisplayPlayers] = useState(allPlayers);
    const tabSelect = (id)=>{
      setDisplayPlayers(allPlayers.filter(x=> (x.playerPropList.filter(p=>p.id==id).length>0)));
    };


    const outputView = 
    <View height = {width.height} paddingVertical ={80}>
        <LinearGradient colors={[Colors.backgroundColorGradient1, Colors.backgroundColorGradient2]}
            style={styles.backgroundstyle}/>
          
<View style = {{alignItems: 'center', padding: 10}}>
<AnimatedCircularProgress
  size={100}
  width={2}
  fill={60}
  rotation={0}
  tintColor="#EBC400"
  backgroundColor="#947D0B" >
        {
    (fill) => (
      <Text style ={{fontSize:18, fontWeight:'500', color: '#F9DC4D'}}>
        10
      </Text>
    )
  }</AnimatedCircularProgress></View> 
        <ConstraintBar constraintsList= {constraintsList} onSelect = {tabSelect}/>
        <PlayerGrid players={displayPlayers}/>          
   </View>

    
    return outputView;
};

GameScreen.navigationOptions = data => {return {
    headerTitle: 'Game Screen'   
   };
};

const styles = StyleSheet.create({
    screen: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center'
    },
    backgroundstyle: {
            position: 'absolute',
            left: 0,
            right: 0,
            top: 0,
            height: width.height,
    }
});

export default GameScreen;