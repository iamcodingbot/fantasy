import SelectedPlayer from '../../models/userselection'
import {SELECT_PLAYER} from '../actions/selectedplayers'
import {DROP_PLAYER} from '../actions/selectedplayers'
import {DELETE_PLAYERS} from '../actions/selectedplayers'

// fix teamcost
const initialState = {
    selectedGamePlayersMap: {},
    teamcost: 0
};

const selectedPlayersReducer = (state = initialState, action) => {
    switch(action.type) {
        case SELECT_PLAYER:
            
            const selectedPlayer = action.player
            const playerId = selectedPlayer.playerId
            const gameId = selectedPlayer.gameId
            if(state.selectedGamePlayersMap[gameId]){
                const playerMap = state.selectedGamePlayersMap[gameId]
                if(playerMap[playerId]) {
                    const updatedSelectedPlayer = new SelectedPlayer(
                        selectedPlayer.playerId,
                        selectedPlayer.gameId,
                        selectedPlayer.firstname,
                        selectedPlayer.lastname,
                        selectedPlayer.isBat,
                        selectedPlayer.isBowl,
                        selectedPlayer.isWk,
                        selectedPlayer.isAr,
                        selectedPlayer.teamId,
                        selectedPlayer.teamname,
                        selectedPlayer.color,
                        selectedPlayer.cost,
                        playerMap[playerId].count + 1,
                        playerMap[playerId].totalcost + selectedPlayer.cost
                    );
                    return {
                        ...state,
                        selectedGamePlayersMap: {...state.selectedGamePlayersMap, 
                            [gameId]: {...state.selectedGamePlayersMap[gameId],  [playerId] : updatedSelectedPlayer }},
                        teamcost: state.teamcost + selectedPlayer.cost
                    }
                } else {
                    const newSelectedPlayer = new SelectedPlayer(
                        selectedPlayer.playerId,
                        selectedPlayer.gameId,
                        selectedPlayer.firstname,
                        selectedPlayer.lastname,
                        selectedPlayer.isBat,
                        selectedPlayer.isBowl,
                        selectedPlayer.isWk,
                        selectedPlayer.isAr,
                        selectedPlayer.teamId,
                        selectedPlayer.teamname,
                        selectedPlayer.color,
                        selectedPlayer.cost,
                        1,
                        selectedPlayer.cost
                    );
                    return {
                        ...state,
                        selectedGamePlayersMap: {...state.selectedGamePlayersMap, 
                            [gameId]: {...state.selectedGamePlayersMap[gameId],  [playerId] : newSelectedPlayer }},
                        teamcost: state.teamcost + selectedPlayer.cost
                    }
                }
            } else {
                const newSelectedPlayer = new SelectedPlayer(
                    selectedPlayer.playerId,
                    selectedPlayer.gameId,
                    selectedPlayer.firstname,
                    selectedPlayer.lastname,
                    selectedPlayer.isBat,
                    selectedPlayer.isBowl,
                    selectedPlayer.isWk,
                    selectedPlayer.isAr,
                    selectedPlayer.teamId,
                    selectedPlayer.teamname,
                    selectedPlayer.color,
                    selectedPlayer.cost,
                    1,
                    selectedPlayer.cost
                );
                return {
                    ...state,
                    selectedGamePlayersMap: {...state.selectedGamePlayersMap, 
                        [gameId]: {...state.selectedGamePlayersMap[gameId],  [playerId] : newSelectedPlayer }},
                    teamcost: state.teamcost + selectedPlayer.cost
                }
            }
        case DELETE_PLAYERS:
            const selectedgameId = action.gameId
            const {[selectedgameId]:value, ...rest } = state.selectedGamePlayersMap;
            return{
                ...state,
                selectedGamePlayersMap: rest,
                    teamcost: state.teamcost
            }
        case DROP_PLAYER:
            const player = action.player
            const dropplayerId = player.playerId
            if(state.selectedGamePlayersMap[player.gameId]){
                const playerMap = state.selectedGamePlayersMap[player.gameId]
                if(playerMap[dropplayerId]){
                    const {[dropplayerId]:value, ...rest} = playerMap;
                    const count = value.count;
                    if(count==0) {
                        return state;
                    } else {
                        if(count == 1) {
                            return{
                                ...state,
                                selectedGamePlayersMap: {...state.selectedGamePlayersMap, 
                                    [gameId]: rest},
                                    teamcost: state.teamcost
                            }
                        } else {
                            console.log("prev state")
                            console.log(state.selectedGamePlayersMap)
                            console.log("spread state")
                            console.log(rest)
                            const updatedSelectedPlayer = new SelectedPlayer(
                                player.playerId,
                                player.gameId,
                                player.firstname,
                                player.lastname,
                                player.isBat,
                                player.isBowl,
                                player.isWk,
                                player.isAr,
                                player.teamId,
                                player.teamname,
                                player.color,
                                player.cost,
                                player.count - 1,
                                player.totalcost - player.cost
                            );
                            console.log("new player")
                            console.log(updatedSelectedPlayer)
                            return{
                                ...state,
                                selectedGamePlayersMap: {...state.selectedGamePlayersMap, 
                                    [gameId]: {...rest,  [dropplayerId] : updatedSelectedPlayer }},
                                    teamcost: state.teamcost
                            } 
                        } 

                    }
                } else {
                    return state;
                }
            } else {
                return state;
            }     
    }
    return state;
}

export default selectedPlayersReducer;