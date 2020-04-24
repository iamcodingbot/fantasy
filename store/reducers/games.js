import GAMES from '../../data/dummy-data'

const initialState = {
    games: GAMES
};

const gamesReducer = (state = initialState, action) => {
    return state;
}

export default gamesReducer;