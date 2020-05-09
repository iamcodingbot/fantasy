export const SELECT_PLAYER = 'SELECT_PLAYER';
export const DROP_PLAYER = 'DROP_PLAYER';
export const DELETE_PLAYERS = 'DELETE_PLAYERS';


export const selectPlayer = player => {
    return {type: SELECT_PLAYER, player: player};
};

export const dropPlayer = player => {
    return {type: DROP_PLAYER, player: player};
};

export const deletePlayers = (gameId, selectedplayers) => {
    return async dispatch => {
        
        const response = await fetch('https://fantasy-c2702.firebaseio.com/selectedplayers.json', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({
                'user':'fantasy1',
                'event_id':gameId,
                selectedplayers
            })
        });
        const resData = await response.json();
        console.log(resData);
        dispatch({type: DELETE_PLAYERS, gameId: gameId})
    };
   
};