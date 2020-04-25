export const SELECT_PLAYER = 'SELECT_PLAYER';

export const selectPlayer = player => {
    return {type: SELECT_PLAYER, player: player};
};