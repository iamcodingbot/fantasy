import SelectedPlayer from '../../models/userselection'
import {SELECT_PLAYER} from '../actions/selectedplayers'
import {DELETE_PLAYERS} from '../actions/selectedplayers'

// fix teamcost
const initialState = {
    selectedPlayers: {},
    teamcost: 0
};

const selectedPlayersReducer = (state = initialState, action) => {
    switch(action.type) {
        case SELECT_PLAYER:
            
            const selectedPlayer = action.player
            if(state.selectedPlayers[selectedPlayer.playerId]){
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
                    state.selectedPlayers[selectedPlayer.playerId].count + 1,
                    state.selectedPlayers[selectedPlayer.playerId].totalcost + selectedPlayer.cost
                );    

                state.selectedPlayers[selectedPlayer.playerId].count + 1;
                state.selectedPlayers[selectedPlayer.playerId].totalcost + selectedPlayer.cost;
                state.teamcost + selectedPlayer.cost;
                return {
                    ...state,
                    selectedPlayers: {...state.selectedPlayers, [selectedPlayer.playerId]: updatedSelectedPlayer},
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
                    selectedPlayers: {...state.selectedPlayers, [selectedPlayer.playerId]: newSelectedPlayer},
                    teamcost: state.teamcost + selectedPlayer.cost
                }
            }
        case DELETE_PLAYERS:
            const gameid = action.gameid 
            const restOfPlayers = {}
            for(const key in state.selectedPlayers){
                const p = state.selectedPlayers[key]
                if(p.gameId!=gameid) {
                    restOfPlayers = {...restOfPlayers, [p.playerId]: p}
                }
            }
            return{
                ...state,
                    selectedPlayers: restOfPlayers,
                    teamcost: state.teamcost
            }  
    }
    return state;
}

export default selectedPlayersReducer;