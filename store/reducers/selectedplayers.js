import SelectedPlayer from '../../models/userselection'
import {SELECT_PLAYER} from '../actions/selectedplayers'
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
            const {[selectedgameId]:value, ...noChild } = state.selectedGamePlayersMap;
            return{
                ...state,
                selectedGamePlayersMap: noChild,
                    teamcost: state.teamcost
            }  
    }
    return state;
}

export default selectedPlayersReducer;