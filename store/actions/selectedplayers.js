export const SELECT_PLAYER = 'SELECT_PLAYER';
export const DELETE_PLAYERS = 'DELETE_PLAYERS';


export const selectPlayer = player => {
    return {type: SELECT_PLAYER, player: player};
};

export const deletePlayers = gameid => {
    return {type: DELETE_PLAYERS, gameid: gameid}
};