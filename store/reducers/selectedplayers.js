import SelectedPlayer from '../../models/userselection'
import {SELECT_PLAYER} from '../actions/selectedplayers'

const initialState = {
    selectedPlayers: {},
    teamcost: 0
};

const selectedPlayersReducer = (state = initialState, action) => {
    switch(action.type) {
        case SELECT_PLAYER:
            
            const selectedPlayer = action.player
            if(state.selectedPlayers[selectedPlayer.playerId]){
                console.log("old")
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
                console.log("new")
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
    }
    return state;
}

export default selectedPlayersReducer;