export const SELECT_PLAYER = 'SELECT_PLAYER';
export const DROP_PLAYER = 'DROP_PLAYER';
export const DELETE_PLAYERS = 'DELETE_PLAYERS';


export const selectPlayer = player => {
    return {type: SELECT_PLAYER, player: player};
};

export const dropPlayer = player => {
    return {type: DROP_PLAYER, player: player};
};

export const deletePlayers = gameId => {
    return {type: DELETE_PLAYERS, gameId: gameId}
};