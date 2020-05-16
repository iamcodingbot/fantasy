import React from 'react';
import { FlatList, ScrollView, TouchableOpacity, Text, View , StyleSheet, Button, Image} from 'react-native';
import { AntDesign} from '@expo/vector-icons';
import { withBadge , Badge} from 'react-native-elements' ;

const ConstraintBar = (props) => {

    const image = (id) => {
        switch (id) {
          case 1:
            return require('../assets/icons/bat.png');
          case 2:
            return require('../assets/icons/CRICKETBALL_ball.png');
          case 3:
            return require('../assets/icons/australia.png');
          case 4:
            return require('../assets/icons/wi.png');
          case 5:
            return require('../assets/icons/group.png');  
          default:
            return require('../assets/icons/group.png');
        }
      }
    return <ScrollView horizontal = {true} style = {{paddingTop:15}}>
        {   
            props.constraintsList.map(x => 
                <TouchableOpacity onPress={()=>props.onSelect(x.id)}>
                <View style = {{width: 90}}>
                    <View style = {{paddingBottom :15, justifyContent: 'center',alignItems: 'center', margin: 10}}>  
                        <Image
                            source={image(x.id)}
                            style={styles.ImageIconStyle}/>
                        <Badge value={'upto 5'} containerStyle={{ position: 'absolute', top: -5, right: -15 }}/> 
                        <Text style ={{fontSize:10, fontWeight:'700', color: 'grey'}} >{x.text}</Text>
                    </View>
                    <View></View>
                </View>
                </TouchableOpacity>)
        }</ScrollView> 
}

const styles = StyleSheet.create({   ImageIconStyle: {
    padding: 10,
    margin: 5,
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

export default ConstraintBar;